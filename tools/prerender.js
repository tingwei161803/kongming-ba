#!/usr/bin/env node
/* =========================================================================
   tools/prerender.js — re-bake the crawler snapshot inside every page.

   Each *.html carries a baked copy of its rendered content inside
   <main id="page">…</main>, so that crawlers (and JS-less readers) see the
   real text. At runtime app.js throws that copy away and re-renders from
   data/data.js, which means the snapshot is pure duplication: edit the data
   and the snapshot silently goes stale.

   This script regenerates it by running the SITE'S OWN shell.js + app.js
   under jsdom against the local working tree — no second renderer to keep
   in sync. Pages are served over a throwaway localhost server so the
   scripts load from this checkout and not from the deployed site.

     node tools/prerender.js           rewrite stale snapshots
     node tools/prerender.js --check   exit 1 if any snapshot is stale

   Requires jsdom (devDependency). Nothing here ships to the browser.
   ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');

let JSDOM, VirtualConsole;
try {
  ({ JSDOM, VirtualConsole } = require('jsdom'));
} catch (e) {
  console.error('jsdom is not installed. Run:\n\n  npm install\n');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..');
const PAGES = ['index', 'primer', 'world', 'stratagems', 'theories', 'effectuation',
               'marketing', 'strategy', 'verification', 'arcade'];
const LANG_DIRS = ['', 'zh-Hant/'];

/* The snapshot slot. Non-greedy so a page with stray </main> text still cuts
   at the first close tag, matching how the file was written. */
const MAIN = /(<main id="page">)[\s\S]*?(<\/main>)/;

/* Classes app.js paints from scroll position, not from data. They differ run
   to run and hide nothing, so a page whose ONLY change is these is not stale. */
const RUNTIME_STATE = [
  [/ toc-link--active/g, ''],                       // table-of-contents scroll spy
  [/style="width: [0-9.]+%;"/g, 'style="width: 0%;"'] // reading-progress bar
];

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };

/* The hub counts its hero stats up from zero over 1s (app.js animateCounters).
   Snapshot too early and the crawler-visible number is a frame of the
   animation instead of the real figure — this shipped once, see #6. */
const COUNTER = '.hero__stat-value[data-count]';
const COUNT_UP_MS = 1000;

const sleep = ms => new Promise(res => setTimeout(res, ms));

function withoutRuntimeState(html) {
  return RUNTIME_STATE.reduce((s, [re, to]) => s.replace(re, to), html);
}

/* Serve the working tree. jsdom resolves <script src> against the document
   URL, so pointing it at the live domain would silently render the DEPLOYED
   data.js and report every local edit as "already up to date". */
function serveWorkingTree() {
  const server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, body) => {
      if (err) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(body);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function render(relPath, baseUrl) {
  const html = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  if (!MAIN.test(html)) throw new Error(`no <main id="page"> slot in ${relPath}`);

  const dom = new JSDOM(html.replace(MAIN, '$1$2'), {   // start from an empty slot
    url: baseUrl + relPath,
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole: new VirtualConsole(),               // silence the star-count fetch
    beforeParse(w) {
      // shell.js asks GitHub for the star count; offline is the normal case here
      w.fetch = () => Promise.reject(new Error('prerender: network disabled'));
    }
  });

  await new Promise(res => dom.window.addEventListener('load', res));

  const doc = dom.window.document;
  const counters = () => Array.from(doc.querySelectorAll(COUNTER));
  await sleep(counters().length ? COUNT_UP_MS + 300 : 120);

  /* Assert rather than hope: a half-finished count-up must never be baked. */
  const unsettled = counters().filter(el => el.textContent.trim() !== el.dataset.count);
  if (unsettled.length) {
    throw new Error(`${relPath}: counters still animating (` +
      unsettled.map(el => `${el.textContent.trim()}/${el.dataset.count}`).join(', ') + ')');
  }

  const inner = doc.getElementById('page').innerHTML;
  dom.window.close();
  if (!inner.trim()) throw new Error(`empty render for ${relPath}`);

  /* Function form, not '$1' + inner + '$2': rendered copy contains things like
     "$250M", and in a replacement STRING those read as capture references. */
  return html.replace(MAIN, (_m, open, close) => `${open}\n${inner}\n${close}`);
}

(async () => {
  const checkOnly = process.argv.includes('--check');
  const server = await serveWorkingTree();
  const baseUrl = `http://127.0.0.1:${server.address().port}/`;
  const stale = [];
  let written = 0;

  try {
    for (const slug of PAGES) {
      for (const dir of LANG_DIRS) {
        const relPath = `${dir}${slug}.html`;
        const baked = await render(relPath, baseUrl);
        const current = fs.readFileSync(path.join(ROOT, relPath), 'utf8');

        if (baked === current) continue;
        if (withoutRuntimeState(baked) === withoutRuntimeState(current)) continue;

        stale.push(relPath);
        if (!checkOnly) { fs.writeFileSync(path.join(ROOT, relPath), baked); written++; }
      }
    }
  } finally {
    server.close();
  }

  if (checkOnly) {
    if (!stale.length) { console.log('✓ every snapshot matches data/data.js'); return; }
    console.error('✗ stale snapshots (run `npm run prerender`):');
    stale.forEach(f => console.error('  ' + f));
    process.exitCode = 1;
    return;
  }
  console.log(written ? `✓ rebaked ${written} page(s):` : '✓ nothing to do — all snapshots current');
  stale.forEach(f => console.log('  ' + f));
})().catch(err => { console.error(err); process.exit(1); });
