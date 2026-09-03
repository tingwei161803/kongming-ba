#!/usr/bin/env node
/* =========================================================================
   tools/check-tallies.js — keep every published count honest.

   The same handful of numbers is written out in five places: docs/08's
   per-section headers and its 總體結果 table, README.md's opening line, and
   two blocks in data/data.js (the home hero stats and the fact-check tiles).
   Nothing linked them, so they drifted — see #7.

   The verdict rows in docs/08-查證報告.md are the source of truth. Card
   counts come from data/data.js itself. Everything else is derived.

     node tools/check-tallies.js          report drift, exit 1 if any
     node tools/check-tallies.js --fix    rewrite the derived numbers

   ========================================================================= */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPORT = path.join(ROOT, 'docs/08-查證報告.md');
const README = path.join(ROOT, 'README.md');
const DATA = path.join(ROOT, 'data/data.js');

const VERDICTS = [
  { key: 'ok',   mark: '| ✅', zh: '確認' },
  { key: 'warn', mark: '| ⚠️', zh: '部分正確' },
  { key: 'unk',  mark: '| ❓', zh: '無法查證' }
];

const read = f => fs.readFileSync(f, 'utf8');
const fix = process.argv.includes('--fix');
const problems = [];
const repairs = [];

/* ---- 1. count the rows, which is what a reader can actually verify ------ */
function countRows(body) {
  const n = {};
  VERDICTS.forEach(v => { n[v.key] = body.split(v.mark).length - 1; });
  n.total = n.ok + n.warn + n.unk;
  return n;
}

function headerLabel(n) {
  return '（' + VERDICTS.filter(v => n[v.key]).map(v => `${n[v.key]} ${v.zh}`).join('／') + '）';
}

const report = read(REPORT);
const sections = report.split(/^### /m).slice(1).map(chunk => {
  const title = chunk.split('\n')[0];
  return { title, name: title.replace(/（.*?）\s*$/, ''), counts: countRows(chunk.slice(title.length)) };
});

/* Sum the sections — do NOT scan the whole file. The 總體結果 summary table
   uses the very same ✅/⚠️/❓ marks in its own first column, so a whole-file
   scan counts it as three extra verdicts and the report appears to hold one
   more of everything than it does. That artefact is what made the fact-check
   page look like it was missing a correction (#7). */
const totals = sections.reduce((acc, s) => {
  VERDICTS.forEach(v => { acc[v.key] += s.counts[v.key]; });
  acc.total += s.counts.total;
  return acc;
}, { ok: 0, warn: 0, unk: 0, total: 0 });

/* ---- 2. per-section headers -------------------------------------------- */
let patchedReport = report;
for (const s of sections) {
  const want = s.name + ' ' + headerLabel(s.counts);
  const wantTight = s.name + headerLabel(s.counts);
  if (s.title === want || s.title === wantTight) continue;
  problems.push(`docs/08 §「${s.name.trim()}」標題寫「${s.title.replace(s.name, '').trim()}」，實際列數是 ${headerLabel(s.counts)}`);
  patchedReport = patchedReport.replace('### ' + s.title, '### ' + wantTight);
}

/* Plain rounding would publish 77+19+5 = 101%. Largest remainder keeps the
   column adding up to 100 without anyone having to notice. */
function percentages(counts, total) {
  const exact = counts.map(c => (c / total) * 100);
  const out = exact.map(Math.floor);
  let left = 100 - out.reduce((a, b) => a + b, 0);
  exact.map((e, i) => [e - Math.floor(e), i])
       .sort((a, b) => b[0] - a[0])
       .forEach(([, i]) => { if (left > 0) { out[i]++; left--; } });
  return out;
}

/* ---- 3. the 總體結果 table --------------------------------------------- */
const pcts = percentages(VERDICTS.map(v => totals[v.key]), totals.total);
VERDICTS.forEach((v, vi) => {
  const re = new RegExp(`(\\| ${v.mark.slice(2)} ${v.zh} \\| )(\\d+)( \\| )(\\d+)(% \\|)`);
  const m = patchedReport.match(re);
  if (!m) { problems.push(`docs/08 總體結果表找不到「${v.zh}」列`); return; }
  const pct = pcts[vi];
  if (Number(m[2]) !== totals[v.key] || Number(m[4]) !== pct) {
    problems.push(`docs/08 總體結果「${v.zh}」寫 ${m[2]}（${m[4]}%），實際 ${totals[v.key]}（${pct}%）`);
    patchedReport = patchedReport.replace(re, `$1${totals[v.key]}$3${pct}$5`);
  }
});
/* the prose figure right under the table */
const reProse = /(\*\*表列 )(\d+)( 條\*\*)/;
const pm = patchedReport.match(reProse);
if (!pm) problems.push('docs/08 找不到「**表列 N 條**」那句');
else if (Number(pm[2]) !== totals.total) {
  problems.push(`docs/08 內文寫「表列 ${pm[2]} 條」，實際 ${totals.total} 條`);
  patchedReport = patchedReport.replace(reProse, `$1${totals.total}$3`);
}

if (patchedReport !== report) repairs.push([REPORT, patchedReport]);

/* ---- 4. card counts come from the data itself -------------------------- */
global.window = {};
require(DATA);
const pages = global.window.SITE_PAGES;
const page = slug => pages.find(p => p.slug === slug);
const derived = {
  claims: totals.total, ok: totals.ok, warn: totals.warn, unk: totals.unk,
  stratagems: page('stratagems').items.length,
  theories: page('theories').items.length
};

/* The fact-check page promises it lists EVERY correction. Hold it to that. */
const siteCorrections = page('verification').rows
  .filter(r => r.verdict.en === 'Partly correct').length;
if (siteCorrections !== totals.warn) {
  problems.push(`查證頁自稱「列出全部修正」，但站上有 ${siteCorrections} 條、docs/08 有 ${totals.warn} 條` +
    (fix ? '（--fix 不會替你補內容，要人工挑）' : ''));
}

/* ---- 5. data.js hero stats + fact-check tiles -------------------------- */
let patchedData = read(DATA);
const dataSlots = [
  ['Claims fact-checked', derived.claims], ['Confirmed against sources', derived.ok],
  ['Stratagems decoded', derived.stratagems], ['Theories mapped', derived.theories],
  ['Claims checked', derived.claims], ['Confirmed', derived.ok],
  ['Partly correct', derived.warn], ['Unverifiable', derived.unk]
];
for (const [label, want] of dataSlots) {
  const re = new RegExp(`(\\{ value: )(\\d+)(,\\s*label: \\{ en: "${label}")`);
  const m = patchedData.match(re);
  if (!m) { problems.push(`data.js 找不到「${label}」的數字`); continue; }
  if (Number(m[2]) !== want) {
    problems.push(`data.js「${label}」寫 ${m[2]}，應為 ${want}`);
    patchedData = patchedData.replace(re, `$1${want}$3`);
  }
}
/* the two sentences of prose that also quote the total */
const dataProse = [
  [/(\b)(\d+)( claims are written up here)/, derived.claims],
  [/(逐條寫出 )(\d+)( 條敘述)/, derived.claims]
];
for (const [re, want] of dataProse) {
  const m = patchedData.match(re);
  if (!m) { problems.push(`data.js 找不到查證頁文案裡的總數（${re}）`); continue; }
  if (Number(m[2]) !== want) {
    problems.push(`data.js 查證頁文案寫 ${m[2]} 條，應為 ${want} 條`);
    patchedData = patchedData.replace(re, `$1${want}$3`);
  }
}

if (patchedData !== read(DATA)) repairs.push([DATA, patchedData]);

/* ---- 6. README's opening line ------------------------------------------ */
const readme = read(README);
const reReadme = /(——)(\d+)( 條敘述逐條比對一手來源（[^）]*），)(\d+)( 條確認、)(\d+)( 條修正、)(\d+)( 條標註待考)/;
const rm = readme.match(reReadme);
if (!rm) {
  problems.push('README 找不到查證數字那一句');
} else if (Number(rm[2]) !== derived.claims || Number(rm[4]) !== derived.ok ||
           Number(rm[6]) !== derived.warn || Number(rm[8]) !== derived.unk) {
  problems.push(`README 寫 ${rm[2]}/${rm[4]}/${rm[6]}/${rm[8]}，應為 ` +
    `${derived.claims}/${derived.ok}/${derived.warn}/${derived.unk}`);
  repairs.push([README, readme.replace(reReadme,
    `$1${derived.claims}$3${derived.ok}$5${derived.warn}$7${derived.unk}$9`)]);
}

/* ---- report ------------------------------------------------------------ */
if (!problems.length) {
  console.log(`✓ 數字一致：${derived.claims} 條（${derived.ok} 確認／${derived.warn} 部分正確／` +
              `${derived.unk} 無法查證）、${derived.stratagems} 計謀、${derived.theories} 理論`);
  process.exit(0);
}
console.error('✗ 數字對不上：');
problems.forEach(p => console.error('  · ' + p));
if (!fix) {
  console.error('\n以 docs/08 的判定列為準。可跑 `node tools/check-tallies.js --fix` 自動改寫衍生數字。');
  process.exit(1);
}
repairs.forEach(([file, body]) => {
  fs.writeFileSync(file, body);
  console.error('  → 已改寫 ' + path.relative(ROOT, file));
});
console.error('\n已套用可自動修的部分，請重跑檢查。');
