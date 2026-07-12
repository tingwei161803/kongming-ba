/* =========================================================================
   Kongming Codex · data.js — all site content lives here as pure data.
   Every visible string is a {en, zh} pair; English is the default language.
   ========================================================================= */

window.SITE_META = {
  title: { en: "Kongming Codex", zh: "派對咖孔明知識庫" },
  subtitle: {
    en: "Three Kingdoms stratagems × modern business theory, decoded from the manga Ya Boy Kongming!",
    zh: "三國兵法 × 現代商管理論——《派對咖孔明》漫畫全解讀"
  },
  repo: "tingwei161803/kongming-ba"
};

window.SITE_PAGES = [

  /* ======================================================== home ======= */
  {
    slug: "home",
    layout: "hub",
    icon: "home",
    title: { en: "Kongming Codex", zh: "派對咖孔明知識庫" },
    subtitle: {
      en: "A verified knowledge base decoding the manga Ya Boy Kongming! — the story of Zhuge Kongming reborn in modern Shibuya as a singer's strategist. Every stratagem he plays maps to a real business theory, and every fact here was cross-checked against primary sources.",
      zh: "解讀漫畫《派對咖孔明》的查證型知識庫——三國軍師諸葛孔明轉生現代澀谷、替歌手操盤的故事。他的每一計都對應一個真實的商管理論；本站每個事實都經過一手來源交叉查證。"
    },
    stats: [
      { value: 140, label: { en: "Claims fact-checked", zh: "逐條查證敘述" } },
      { value: 114, label: { en: "Confirmed against sources", zh: "經來源確認屬實" } },
      { value: 12,  label: { en: "Stratagems decoded", zh: "計謀完整解碼" } },
      { value: 40,  label: { en: "Theories mapped", zh: "理論對照條目" } }
    ],
    quote: {
      text: {
        en: "Stratagems only get people through the door. What makes them stay is always the product itself.",
        zh: "計謀只是入口，產品力才是留存。"
      },
      by: {
        en: "The iron law that runs through the entire series",
        zh: "貫穿整部作品的鐵律"
      }
    }
  },

  /* ====================================================== primer ======= */
  {
    slug: "primer",
    layout: "article",
    icon: "auto_stories",
    title: { en: "The 3-Minute Primer", zh: "三分鐘白話版" },
    subtitle: {
      en: "Zero jargon. What this manga is, what Kongming actually did, and why business schools quietly love it.",
      zh: "完全不用術語。這是一部什麼漫畫、孔明做了什麼、為什麼商學院的人特別愛它。"
    },
    sections: [
      {
        id: "what",
        heading: { en: "What is this manga?", zh: "這是一部什麼漫畫？" },
        blocks: [
          { type: "p", text: {
            en: "Zhuge Kongming, the most brilliant strategist of China's Three Kingdoms era, dies in 234 AD — and wakes up in modern Shibuya on Halloween night, where everyone assumes his robes are a costume. In a tiny club he hears an unknown singer named Eiko Tsukimi, is moved by her voice, and vows to become her strategist, applying two-thousand-year-old military tactics to the modern music industry.",
            zh: "三國時代最聰明的軍師諸葛孔明，西元 234 年病逝五丈原——一睜眼卻轉生到現代東京澀谷，正好是萬聖節，滿街變裝，沒人發現他是真貨。他在小夜店聽見無名歌手月見英子的歌聲，深受感動，立誓成為她的軍師，用兩千年前的兵法在現代音樂圈打天下。"
          } },
          { type: "p", text: {
            en: "Sounds absurd? Business readers around the world treat it as a strategy casebook, and its Japanese publisher even released an official business book inspired by the series. Because every time Kongming makes a move, it happens to be a business lesson.",
            zh: "聽起來很鬧，對吧？但全世界的商業讀者把它當策略個案集在讀，日本出版社甚至出了官方商業書。因為孔明每一次出手，都剛好是一堂商業課。"
          } }
        ]
      },
      {
        id: "stories",
        heading: { en: "Five stories in plain words", zh: "五個故事講完孔明做了什麼" },
        blocks: [
          { type: "h3", text: { en: "1 · The maze nightclub", zh: "一・迷宮夜店（石兵八陣）" } },
          { type: "p", text: {
            en: "A famous singer 'kindly' books Eiko in the same time slot on another stage — planning to use her as a foil. Kongming does not protest. He redesigns the whole venue: lights, fog and walkways rearranged so that the star's audience gets lost — straight into Eiko's room, where the singing keeps them. Lesson: the first step of attention is not shouting louder; it is designing the path people naturally walk to you. IKEA does the same thing with its floor plan.",
            zh: "大牌歌手假好心邀英子同一時間、不同舞台演出——想拿她當墊背。孔明不抗議，他改造了整間店：燈光、煙霧、走道全部重新設計，讓來看大牌的客人「迷路」走進英子的場子，一聽就走不了。重點：吸引人的第一步不是喊得大聲，是設計「讓人自然走到你面前」的路。IKEA 的賣場動線就是同一招。"
          } },
          { type: "h3", text: { en: "2 · The worst booth", zh: "二・最爛的攤位（無中生有）" } },
          { type: "p", text: {
            en: "A festival gives Eiko the most remote corner, opposite a popular band. Kongming leaks a fake 'our equipment is broken' rumor so the rivals relax, then strikes the moment their lead singer — nursing a sore throat before his own big show — holds back. Lesson: a bad position is not a death sentence; the under-resourced side attacks when the strong side cannot go all-out.",
            zh: "音樂祭把英子分到最偏僻的角落，對面還是人氣樂團。孔明放出「我們器材壞了」的假消息讓對手鬆懈，再看準對方主唱嗓子有傷、隔天還有演出不敢唱太兇的空檔，讓英子突然開唱，把全場人吸過來。重點：位置爛不是死刑，資源少的人要挑對手「不方便出全力」的時刻出手。"
          } },
          { type: "h3", text: { en: "3 · The star who would not come back", zh: "三・請不動的高手（rap battle）" } },
          { type: "p", text: {
            en: "Genius rapper KABE Taijin won the championship three times, then burned out — stress ulcers drove him into hiding. Kongming does not show up with a contract. He challenges KABE to a rap battle. Kongming loses — but in the process KABE remembers how much he loves music, and joins of his own will. Lesson: you keep great people not with salary, but by helping them rediscover why they do the work.",
            zh: "天才饒舌歌手 KABE 太人得過三次冠軍，卻因為壓力大到胃潰瘍而退隱。孔明沒有捧著錢去挖角——他直接下戰帖尬饒舌。孔明輸了，但 KABE 在過程中想起自己有多愛音樂，自願加入。重點：留住厲害的人，靠的不是薪水，是讓他重新找到「為什麼做這件事」。"
          } },
          { type: "h3", text: { en: "4 · Borrowing the enemy's ad budget", zh: "四・借對手的錢打廣告（草船借箭）" } },
          { type: "p", text: {
            en: "The rival group spends a fortune on a 'scan the QR code, like us, win cash' flash campaign. Kongming's answer: at the same spot, Eiko's team performs disguised as the rivals — with their own QR code out front. The crowd the enemy paid to gather ends up liking Eiko's page. Ancient Kongming borrowed 100,000 arrows from Cao Cao with straw boats; modern Kongming borrows 100,000 likes with a fake QR code. Lesson: momentum someone else paid for can sometimes be borrowed.",
            zh: "對手樂團砸大錢辦「掃 QR code 按讚抽獎」衝人氣。孔明的回應：在同一地點，讓英子他們假扮對手先開唱，放出自己的 QR code——對手花錢聚來的人潮，讚全按到英子頭上。三國的孔明用草船借了曹操十萬支箭；現代的孔明用假 QR code 借了對手十萬個讚。重點：別人花大錢造出來的聲勢，有時候可以借。"
          } },
          { type: "h3", text: { en: "5 · What actually wins", zh: "五・真正的決勝點（DREAMER）" } },
          { type: "p", text: {
            en: "But note: the borrowed likes stall at seventy thousand once the trick is exposed. What finally breaks one hundred thousand is Eiko singing her own song, DREAMER, moving everyone present — including the rival band. Kongming later uploads the rivals' real, unfiltered performance and 'returns' the borrowed likes, saving their career and turning enemies into allies.",
            zh: "但注意——借來的讚只衝到七萬就被識破了。最後真正突破十萬的，是英子唱出自己寫的歌〈DREAMER〉，把現場所有人（包括對手樂團）都唱哭了。孔明事後還把對手「真實演唱」的影片傳上網，把借來的讚還了回去——順便救了對手的職業生涯，化敵為友。"
          } }
        ]
      },
      {
        id: "ironlaw",
        heading: { en: "The one sentence that matters", zh: "整部漫畫最重要的一句話" },
        blocks: [
          { type: "quote", text: {
            en: "Stratagems can only trick people through the door. What makes them stay is always whether the thing itself is good.",
            zh: "計謀只能把人騙進門，讓人留下來的永遠是「東西本身好不好」。"
          } },
          { type: "p", text: {
            en: "Every scheme Kongming plays merely makes more people hear Eiko sing; if the song were bad, all of it would be wasted. Business, content, product — the same rule: marketing is the entrance, substance is the retention. If there is nothing real inside the door, people turn around and leave.",
            zh: "孔明所有的計，都只是讓更多人「聽到英子的歌」；如果歌不好聽，一切都白費。做生意、做內容、做產品都一樣：行銷是入口，實力才是留存。門裡沒有真貨，人轉頭就走。"
          } }
        ]
      },
      {
        id: "whymba",
        heading: { en: "Why business schools love this", zh: "為什麼商學院的人特別愛這部？" },
        blocks: [
          { type: "p", text: {
            en: "Because Kongming's way of working matches what entrepreneurship scholar Saras Sarasvathy found when she studied 27 highly successful founders. Most people think starting something means: write a plan, research the market, raise money, execute. The experts actually do the opposite — they look at what is already in their hands and start immediately.",
            zh: "因為孔明的做事方法，剛好跟創業學者 Sarasvathy 研究 27 位超成功創業家得到的結論一模一樣。一般人以為創業要：先寫計畫書、做市調、募資金、再執行。高手實際上相反——看看手上有什麼，直接開始做。"
          } },
          { type: "p", text: {
            en: "Her cooking metaphor: ordinary logic decides the menu first, then shops for ingredients (and gets stuck if the store is out). Expert logic opens the fridge and improvises dinner from whatever is there. Kongming arrives in this era with nothing but three assets — his strategist brain, Eiko's voice, and one friendly club owner — and he starts with exactly those.",
            zh: "她的做菜比喻：一般邏輯＝先決定菜單，再出門買齊食材（買不到就卡死）；高手邏輯＝打開冰箱看有什麼，就地做出一桌菜。孔明轉生時身無分文，手上只有三樣東西——兵法腦袋、英子的歌喉、夜店老闆這個朋友——他就用這三樣直接開局。"
          } },
          { type: "ul", items: {
            en: [
              "Start with what you have — do not wait for perfect conditions",
              "Ask 'how much can I afford to lose?', not 'how much might I win?' — every failed scheme costs him almost nothing",
              "Turn rivals into teammates instead of obsessing over defeating them",
              "Squeeze lemonade out of every setback — the worst booth becomes an ambush site, the enemy campaign becomes free traffic",
              "Control what you can control instead of predicting the future — his one real bet is that Eiko's singing keeps getting better"
            ],
            zh: [
              "從手上有的開始，不等完美條件",
              "先想「最多輸多少」，不賭「可能賺多少」——孔明每一計失敗了都傷不了筋骨",
              "把對手變隊友，不執著打倒誰",
              "把壞事榨成檸檬汁——爛攤位變奇襲陣地、對手的抽獎變自己的流量",
              "控制自己控制得了的事，不浪費力氣預測未來——他押注的是「英子的歌會越練越好」這件確定的事"
            ]
          } }
        ]
      },
      {
        id: "takeaways",
        heading: { en: "Three habits you can use tomorrow", zh: "三個你明天就能用的心法" },
        blocks: [
          { type: "ul", items: {
            en: [
              "Open the fridge, don't write a menu: list who you are, what you can do, and whom you know — then build the first step from that, instead of waiting until you have saved enough or found the perfect partner.",
              "Ask 'can I afford to lose this?' first: if the worst case is affordable, move fast; if not, shrink the bet and try again.",
              "Treat opponents as resources: when someone plays dirty against you, before getting angry, ask one question — is there anything in the situation they created that I can borrow?"
            ],
            zh: [
              "開冰箱，別寫菜單：列出「我是誰、我會什麼、我認識誰」，用現有的東西拼出第一步，而不是等存夠錢、找到完美夥伴。",
              "先問輸得起嗎：每個決定先想最壞情況——輸得起就快做，輸不起就縮小規模再試。",
              "把敵人當資源看：遇到打壓或惡性競爭，先別急著生氣，問一句「他造出來的這個局勢，有沒有我能借力的地方？」"
            ]
          } }
        ]
      },
      {
        id: "honest",
        heading: { en: "One honest caveat", zh: "一個誠實的提醒" },
        blocks: [
          { type: "note", icon: "warning", text: {
            en: "This is a manga: Kongming runs on near-omniscient plot armor no real person has. And some of his tricks are deception — fake malfunctions, fake QR codes. Thrilling in fiction, trouble in reality. Learn his 'start from what you have, turn enemies into allies, turn crises into openings' — do not learn the deceit.",
            zh: "這是漫畫：孔明開了「神機妙算」的外掛，現實中沒人能算無遺策。而且他有些招數是騙人的——假故障、假 QR code——故事裡很爽，現實中會出事。學他「用手邊資源、化敵為友、化危機為轉機」，不要學他「兵不厭詐」。"
          } }
        ]
      }
    ]
  },
  /* ======================================================= world ======= */
  {
    slug: "world",
    layout: "article",
    icon: "public",
    title: { en: "World & Characters", zh: "作品檔案" },
    subtitle: {
      en: "Verified facts about the series: publication history, adaptations, cast and story arcs — every number checked against official sources.",
      zh: "經查證的作品事實：出版沿革、跨媒體改編、角色與故事弧——每個數字都比對過官方來源。"
    },
    sections: [
      {
        id: "basics",
        heading: { en: "The work at a glance", zh: "基本資料" },
        blocks: [
          { type: "table",
            columns: [ { en: "Item", zh: "項目" }, { en: "Fact", zh: "內容" } ],
            rows: [
              [ { en: "Original title", zh: "原名" }, { en: "Paripi Koumei (official English: Ya Boy Kongming!)", zh: "パリピ孔明（英文官方名 Ya Boy Kongming!）" } ],
              [ { en: "Creators", zh: "原作／作畫" }, { en: "Story: Yuto Yotsuba · Art: Ryo Ogawa", zh: "四葉夕卜（原作）、小川亮（作畫）" } ],
              [ { en: "Serialization", zh: "連載" }, { en: "Kodansha's Comic DAYS from 2019-12-31; moved to Weekly Young Magazine in 2021 (issue 52)", zh: "2019-12-31 起於講談社《Comic DAYS》；2021 年第 52 號移籍《週刊 Young Magazine》" } ],
              [ { en: "Volumes", zh: "單行本" }, { en: "25 volumes as of May 2026; vol. 26 scheduled 2026-08-06", zh: "至 2026-05 共 25 卷；第 26 卷預定 2026-08-06 發售" } ],
              [ { en: "Circulation", zh: "累計發行" }, { en: "1M (Jun 2022) → ~1.6M (2023) → ~2.4M (2025 film) → 2.75M+ (Jun 2026)", zh: "2022-06 破 100 萬 → 2023 約 160 萬 → 2025 電影期約 240 萬 → 2026-06 破 275 萬部" } ],
              [ { en: "Taiwan edition", zh: "台灣中文版" }, { en: "Tong Li Publishing, vol. 23 as of May 2026", zh: "東立出版社，至 2026-05 出到第 23 集" } ]
            ]
          },
          { type: "p", text: {
            en: "Premise: Zhuge Kongming dies at Wuzhangyuan in 234 AD wishing to be reborn in a peaceful age, and wakes up young again in Halloween-night Shibuya. Moved by amateur singer Eiko Tsukimi's voice at club BB Lounge, he vows to serve as her strategist. His long-term goal is 'world peace through club music'; Eiko's dream stage is VOICELL LAND, a fictional world-biggest festival set in Belgium.",
            zh: "故事前提：諸葛孔明於西元 234 年病逝五丈原，臨終許願來世生於太平之世，以年輕之姿轉生到萬聖節夜晚的澀谷。他在夜店 BB Lounge 被素人歌手月見英子的歌聲打動，立誓成為她的軍師。孔明的長期目標是「以俱樂部音樂達成天下泰平」；英子的夢想舞台是設定於比利時的世界最大音樂祭 VOICELL LAND。"
          } }
        ]
      },
      {
        id: "versions",
        heading: { en: "Four versions — read this first", zh: "跨媒體版本——讀任何分析前必看" },
        blocks: [
          { type: "note", icon: "priority_high", text: {
            en: "The single biggest trap in fan analyses: the same scene lands on different chapter/episode numbers in the manga, the anime, and the live-action drama. This site always states which version a number refers to.",
            zh: "所有網路分析最大的地雷：同一段劇情在漫畫、動畫、日劇的「話數／集數」都不一樣。本站一律標明是哪個版本的編號。"
          } },
          { type: "table",
            columns: [ { en: "Version", zh: "版本" }, { en: "When", zh: "時間" }, { en: "Key facts", zh: "要點" } ],
            rows: [
              [ { en: "Manga", zh: "漫畫" }, { en: "2019– (ongoing)", zh: "2019– 連載中" }, { en: "The primary text; stratagem chapters mapped in the Stratagem Codex", zh: "主要文本；計謀章節對照見「計謀對照」頁" } ],
              [ { en: "TV anime", zh: "TV 動畫" }, { en: "2022-04-05 – 06-21, 12 eps", zh: "2022-04-05 ～ 06-21，全 12 集" }, { en: "P.A.WORKS' first manga-based production; adapts up to manga vol. 4 ch. 28 (the 100k-likes finale); streamed early on Abema from 03-31", zh: "P.A.WORKS 首部漫畫原作動畫；改編至原作第 4 卷第 28 話「十萬讚」決著；03-31 起 Abema 先行" } ],
              [ { en: "Live-action drama", zh: "真人日劇" }, { en: "2023-09-27 – 11-29, 10 eps", zh: "2023-09-27 ～ 11-29，全 10 話" }, { en: "Fuji TV Wednesday 10pm; Osamu Mukai as Kongming, Moka Kamishiraishi as Eiko", zh: "富士電視台「水10」檔；向井理飾孔明、上白石萌歌飾英子" } ],
              [ { en: "Film", zh: "真人電影" }, { en: "2025-04-25", zh: "2025-04-25 上映" }, { en: "Paripi Koumei THE MOVIE (Shochiku), sequel to the drama", zh: "《パリピ孔明 THE MOVIE》，松竹發行，日劇續集" } ],
              [ { en: "Official spin-off book", zh: "官方衍生書" }, { en: "2022-04-06", zh: "2022-04-06" }, { en: "'Ask Kongming!' — a Kodansha business book inspired by the series: even the publisher treats it as management material", zh: "《孔明に訊け！》——講談社官方商業實用書，出版社自己也把本作當商管教材" } ]
            ]
          }
        ]
      },
      {
        id: "cast",
        heading: { en: "Main cast (names verified)", zh: "主要角色（名字逐一查證）" },
        blocks: [
          { type: "table",
            columns: [ { en: "Character", zh: "角色" }, { en: "Who they are", zh: "定位" }, { en: "Business analogy", zh: "管理學隱喻" } ],
            rows: [
              [ { en: "Zhuge Kongming", zh: "諸葛孔明" }, { en: "Eiko's strategist (manager); bartender at BB Lounge", zh: "英子的軍師（經紀人），BB Lounge 酒保" }, { en: "Chief strategist / CMO / growth lead", zh: "策略長／CMO／成長負責人" } ],
              [ { en: "Eiko Tsukimi", zh: "月見英子" }, { en: "The singer — her name nods to Huang Yueying, Zhuge Liang's wife (per Japanese Wikipedia); once saved from suicide at Shibuya station by Kobayashi", zh: "歌手——名字源自諸葛亮之妻黃月英（日文維基收錄此由來）；曾在澀谷車站輕生獲小林所救" }, { en: "The core product; founder-type creator", zh: "核心產品；創辦人型創作者" } ],
              [ { en: "Kobayashi", zh: "小林" }, { en: "OWNER of BB Lounge (not the bartender — that is Kongming); a hardcore Three Kingdoms fan", zh: "BB Lounge 老闆（不是酒保，酒保是孔明）；重度三國宅" }, { en: "Angel investor / early platform partner", zh: "天使投資人／早期平台夥伴" } ],
              [ { en: "KABE Taijin", zh: "KABE 太人" }, { en: "Real name Kabe Taijin (河辺太人 — the stage name puns on his surname); 3-time MC-battle champion who retired with stress ulcers", zh: "本名河辺太人（藝名取自本姓諧音；不是「川邊」）；MC バトル選手権三連霸、因壓力性胃潰瘍退隱" }, { en: "Burned-out star talent", zh: "倦怠的明星人才" } ],
              [ { en: "Nanami Kuon", zh: "久遠七海" }, { en: "Leader of the group AZALEA; bass and vocals", zh: "AZALEA 隊長，貝斯兼主唱" }, { en: "Rival's core / mirror character", zh: "競品核心／鏡像角色" } ],
              [ { en: "Toshihiko Karasawa", zh: "唐澤寿彦" }, { en: "KEY TIME producer who forces AZALEA into a lip-synced idol act; once a betrayed visual-kei band member himself", zh: "KEY TIME 製作人，逼 AZALEA 走性感偶像對嘴路線；自己也曾是遭夥伴背叛的視覺系樂團成員" }, { en: "The pure prediction-and-control manager (the theory's control group)", zh: "純因果邏輯管理者（理論上的對照組）" } ],
              [ { en: "Mia Iriomote", zh: "ミア西表" }, { en: "Established singer with 100k+ Instagram followers; Eiko's first opponent", zh: "IG 粉絲 10 萬+ 的既有人氣歌手；英子的第一個對手" }, { en: "Incumbent market leader", zh: "既有市場領先者" } ],
              [ { en: "Steve Kido", zh: "スティーブ・キド" }, { en: "Famed arranger (official name is katakana only — no kanji); eats menma on pudding; arranges DREAMER", zh: "知名編曲家（官方僅片假名，無漢字）；愛在布丁上插筍乾；為英子編〈DREAMER〉" }, { en: "Top-tier supplier / key creative partner", zh: "頂級供應商／關鍵技術夥伴" } ],
              [ { en: "Tsuyoshi Kondo", zh: "近藤剛" }, { en: "Big-shot music producer (NOT 近藤強) who offers the choice: a safe local festival vs the 100k-likes challenge", zh: "大物音樂製作人（不是「近藤強」），提出「保底地方音樂祭 vs 十萬讚挑戰」的選擇題" }, { en: "Channel gatekeeper", zh: "通路守門人" } ],
              [ { en: "Keiji Maezono", zh: "前園ケイジ" }, { en: "The arc villain (name is katakana, not 前園圭治); heir of 'Denpousha', a fictional ad giant with ¥5T revenue (an in-story exaggeration)", zh: "大反派（片假名，非「前園圭治」）；年營收 5 兆日圓的虛構廣告巨頭「電報社」御曹司（作品內誇飾設定）" }, { en: "Capital-and-channel hegemony incumbent", zh: "資本與通路霸權的既得利益者" } ],
              [ { en: "East South", zh: "East South" }, { en: "Rock duo bound as Maezono's ghostwriters by a ¥100M contract; later defect — Fourth Kingdom covers the penalty and signs them", zh: "被前園以 1 億日圓合約綁住的影武者搖滾雙人組；後倒戈，Fourth Kingdom 代付違約金簽下" }, { en: "A misallocated key resource", zh: "被錯誤配置的關鍵資源" } ]
            ]
          }
        ]
      },
      {
        id: "arcs",
        heading: { en: "Story arcs with verified anchors", zh: "故事弧線（已查證的錨點）" },
        blocks: [
          { type: "table",
            columns: [ { en: "Arc", zh: "故事弧" }, { en: "Where", zh: "位置" }, { en: "What happens", zh: "概要" } ],
            rows: [
              [ { en: "Debut / Stone Sentinel Maze", zh: "出道戰／石兵八陣" }, { en: "Manga ch. 4 (vol. 1) · Anime ep. 2", zh: "漫畫第 4 話（1 卷）・動畫第 2 集" }, { en: "Breaking Mia's same-slot foil trap with a venue-wide 'maze'", zh: "用整間店的「迷宮」破解 ミア西表 的同時段陪襯陷阱" } ],
              [ { en: "Yoyogi Art Fes / Something from Nothing", zh: "代々木藝術祭／無中生有" }, { en: "Manga ch. 7 (vol. 2) · Anime ep. 3", zh: "漫畫第 7 話（2 卷）・動畫第 3 集" }, { en: "Worst booth, strongest comeback against JET JACKET", zh: "最爛攤位逆轉 JET JACKET" } ],
              [ { en: "Recruiting KABE", zh: "收編 KABE" }, { en: "≈ Manga ch. 11–13 · Anime eps. 5–6", zh: "約漫畫第 11–13 話・動畫第 5–6 集" }, { en: "Kongming loses the rap battle on purpose — a scheme within a scheme; KABE rejoins music", zh: "rap battle 孔明故意輸（計中計），KABE 重燃熱情加入" } ],
              [ { en: "100k likes / Borrowed Arrows", zh: "十萬讚決戰／草船借箭" }, { en: "Manga ch. 24–25 (vol. 4) · Anime eps. 11–12", zh: "漫畫第 24–25 話（4 卷）・動畫第 11–12 集" }, { en: "Borrowing AZALEA's paid crowd; DREAMER wins for real; the likes are later 'returned'", zh: "借 AZALEA 的百萬抽獎流量；〈DREAMER〉真正達標；讚數事後「歸還」" } ],
              [ { en: "Kyoto / the mother's wager", zh: "京都篇／母女賭約" }, { en: "From ≈ manga ch. 38", zh: "約漫畫第 38 話起" }, { en: "The Five-Merchant Festival; 'Flower Crown' finally moves Eiko's mother", zh: "五商祭演藝合戰；〈Flower Crown〉打動母親翔子" } ],
              [ { en: "Founding Fourth Kingdom", zh: "Fourth Kingdom 創業" }, { en: "Manga ch. 64–65 (vol. 9)", zh: "漫畫第 64–65 話（9 卷）" }, { en: "Kongming founds the indie label (Eiko is a signed artist, NOT the owner) and brokers a three-major-label crossover", zh: "孔明創設獨立廠牌（英子是旗下藝人、非老闆），促成三大唱片公司聯名" } ],
              [ { en: "Summer Sonia showdown", zh: "Summer Sonia 決戰" }, { en: "Mid-series", zh: "漫畫中期" }, { en: "Against Maezono: KABE exposes the ghostwriting on stage by rap (Kongming planned it, KABE executed); attendance 311 → 43,000 — quoted verbatim on Japanese Wikipedia", zh: "對抗前園：KABE 在舞台上用 rap 揭發影武者（孔明策劃、KABE 執行）；觀眾動員 311 → 43,000 人（日文維基逐字記載）" } ],
              [ { en: "Horse-racing arc", zh: "賽馬篇" }, { en: "Vol. 16", zh: "第 16 卷" }, { en: "Kongming HIMSELF bets his whole ¥1M savings (not Kobayashi) and loses the first bet; later trains a never-won horse to a G1 win to secure a concert venue", zh: "孔明本人押上全財產 100 萬日圓（不是小林）且首賭輸掉；後調教萬年未勝馬贏 G1，換到個唱場地檔期" } ],
              [ { en: "First solo concert", zh: "首場個人演唱會" }, { en: "Vols. 15–17", zh: "第 15–17 卷" }, { en: "The stepping stone toward VOICELL LAND", zh: "前進 VOICELL LAND 的踏板" } ],
              [ { en: "Kindergarten arc", zh: "幼稚園篇" }, { en: "Manga ch. 143–144", zh: "漫畫第 143–144 話" }, { en: "Saving Saijo Hanamaru Kindergarten from land sharks", zh: "解救西城はなまる幼稚園、對抗土地掮客" } ],
              [ { en: "Rescuing AZALEA", zh: "AZALEA 救援" }, { en: "Later arc", zh: "中後期" }, { en: "Karasawa hospitalized, Kongming coaches the former rivals to a 498/500 championship at Rock Battle Japan", zh: "唐澤緊急手術，孔明臨時擔任宿敵軍師，Rock Battle Japan 以 498/500 分奪冠" } ],
              [ { en: "TV repositioning arc", zh: "電視台再定位" }, { en: "≈ Vols. 24–25", zh: "約第 24–25 卷" }, { en: "Escaping the 'anime-song singer' label; a ratings duel with TV executive Kakuta", zh: "擺脫「動畫歌手」標籤；與大都テレビ角田的收視率對戰" } ],
              [ { en: "Malaysia arc", zh: "馬來西亞篇" }, { en: "Vol. 25 (2026-05)", zh: "第 25 卷（2026-05 發售）" }, { en: "Turning around a failing local bus-tour company — it is Malaysia, not Hong Kong; Eiko becomes a bus guide", zh: "重整經營不振的在地巴士旅遊公司——是馬來西亞不是香港；英子當起巴士導遊" } ]
            ]
          },
          { type: "note", icon: "fact_check", text: {
            en: "Primary sources: Japanese Wikipedia 'パリピ孔明', Kodansha product pages, Comic DAYS official chapter pages, the anime official site, Shochiku's film site, and Tong Li. Full per-claim verdicts live in the Fact-Check Report.",
            zh: "主要來源：日文維基「パリピ孔明」條目、講談社商品頁、Comic DAYS 官方章節頁、動畫官網、松竹電影官網、東立。逐條判定見「查證報告」頁。"
          } }
        ]
      }
    ]
  },
  /* ================================================== stratagems ======= */
  {
    slug: "stratagems",
    layout: "gallery",
    icon: "swords",
    title: { en: "Stratagem Codex", zh: "計謀對照" },
    subtitle: {
      en: "Every stratagem Kongming plays: where it appears (manga chapter · anime episode), where it really comes from (history vs fiction), and which business theory it secretly is. Click a card for details.",
      zh: "孔明的每一計：出現位置（漫畫話數・動畫集數）、真正的出處（史實 vs 演義），以及它偷偷對應的商管理論。點卡片看詳情。"
    },
    categories: [
      { key: "romance", en: "Romance of the Three Kingdoms", zh: "三國演義典故" },
      { key: "c36",     en: "Thirty-Six Stratagems",          zh: "三十六計" },
      { key: "tactics", en: "Classical tactics",              zh: "古兵法計" },
      { key: "scene",   en: "Signature scenes",               zh: "劇情名場面" }
    ],
    items: [
      {
        slug: "stone-maze",
        category: "romance",
        meta: { en: "Manga ch. 4 · Anime ep. 2", zh: "漫畫第 4 話・動畫第 2 集" },
        title: { en: "Stone Sentinel Maze", zh: "石兵八陣" },
        summary: {
          en: "Lights, fog and walkways turn the venue into a maze that funnels a rival's audience straight to Eiko's stage.",
          zh: "用燈光、煙霧與動線把整間店變成迷宮，把對手的觀眾整批導進英子的場子。"
        },
        overview: {
          en: "At the L.R.N. night, star singer Mia books Eiko in the same time slot as a foil. Kongming re-choreographs the whole club — synchronized staff in identical outfits, fog machines, looping corridors, a 360-degree stage — so that Mia's crowd gets lost and ends up in front of Eiko, where the singing does the rest.",
          zh: "L.R.N. 之夜，人氣歌手 ミア西表 把英子排在同時段當陪襯。孔明重新編排整間店——同服裝工作人員定時移動、煙霧、繞圈動線、360 度舞台——讓 Mia 的觀眾迷路走到英子面前，剩下的交給歌聲。"
        },
        tags: ["Gruen effect", "Guerrilla marketing", "AIDA"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Fiction: Romance of the Three Kingdoms ch. 84 traps Lu Xun in the Eight Trigrams maze. History: the Records only say Zhuge Liang 'devised the Eight Formations'. The name 'Stone Sentinel Maze' spread via Eiji Yoshikawa's novelization.", zh: "小說：《三國演義》第 84 回陸遜困於魚腹浦八陣圖；正史《三國志》僅載「推演兵法，作八陣圖」；「石兵八陣」一詞多見於吉川英治系譜。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "The Gruen effect (mall design that makes you wander), guerrilla marketing, and the A of AIDA — engineered attention.", zh: "Gruen 效應（賣場迷航設計）、游擊行銷、AIDA 的 Attention——被設計出來的注意力。" } }
        ]
      },
      {
        slug: "something-from-nothing",
        category: "c36",
        meta: { en: "Manga ch. 7 · Anime ep. 3", zh: "漫畫第 7 話・動畫第 3 集" },
        title: { en: "Something from Nothing", zh: "無中生有" },
        summary: {
          en: "A fake equipment-failure rumor lulls the rival band, then Eiko strikes during their self-imposed pause.",
          zh: "假的器材故障消息讓對手鬆懈，趁對方自我保留的空檔讓英子搶下全場。"
        },
        overview: {
          en: "At the Yoyogi Art Fes, Eiko draws the worst booth opposite the popular band JET JACKET. Kongming leaks a fake breakdown, and exploits two real constraints — the rival singer's strained throat and his one-man show the next day — to time Eiko's set exactly when the enemy cannot answer at full power.",
          zh: "代々木藝術祭，英子分到最爛攤位，對面是人氣樂團 JET JACKET。孔明放出假故障消息，並利用兩個真實限制——對方主唱喉傷、隔天還有專場——把英子的開唱時機掐在敵人無法全力回擊的空檔。"
        },
        tags: ["Information asymmetry", "Lemonade principle", "Blue ocean"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Stratagem no. 7 of the Thirty-Six Stratagems — a Ming–Qing era compilation by unknown authors. It was never written by Zhuge Liang or Sun Tzu; giving it to Kongming is artistic license.", zh: "《三十六計》第 7 計（敵戰計）。《三十六計》成書於明末清初、作者不詳，並非諸葛亮或孫武所作——放在孔明身上屬藝術加工。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "An information-asymmetry game: manipulate the signal the opponent optimizes against. Also a textbook lemonade move — the worst booth becomes the ambush site.", zh: "資訊不對稱賽局：操縱對手據以決策的訊號。同時是教科書級檸檬水原則——最爛攤位變成奇襲陣地。" } }
        ]
      },
      {
        slug: "borrowed-arrows",
        category: "romance",
        meta: { en: "Manga ch. 24 · Anime ep. 11", zh: "漫畫第 24 話・動畫第 11 集" },
        title: { en: "Borrowing Arrows with Straw Boats", zh: "草船借箭" },
        summary: {
          en: "Disguised as the rival group, Eiko's team hijacks the crowd — and the likes — that the enemy paid a fortune to gather.",
          zh: "假扮對手樂團先開唱、放出假 QR code，把對手花大錢聚來的人潮與讚數整碗端走。"
        },
        overview: {
          en: "AZALEA runs a 'scan, like, win ¥1M' truck campaign for the 100k-likes race. Kongming stages Eiko and KABE at the same Shibuya spot performing AS AZALEA, with their own QR code out front — the paid crowd's likes flow to Eiko, briefly reaching about 70k before the real group arrives. The final push past 100k comes not from the trick but from Eiko's own song, DREAMER.",
          zh: "AZALEA 為十萬讚之戰砸錢辦「掃碼按讚抽百萬」快閃。孔明讓英子與 KABE 在同一地點假扮 AZALEA 開唱、放出自己的 QR code——對手買來的人潮讚數流向英子，一度衝到約 7 萬，直到本尊到場。最後突破十萬靠的不是計謀，是英子的原創曲〈DREAMER〉。"
        },
        tags: ["Judo strategy", "Viral marketing", "Traffic hijacking", "CAC"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Romance ch. 46 gives the arrow-borrowing to Zhuge Liang — fiction. The historical prototype is Sun Quan at Ruxu (213 AD), per the Weilüe quoted in Pei Songzhi's commentary: arrows on one side, turn the boat, balance, sail home. The fog and straw men are Luo Guanzhong's additions.", zh: "《三國演義》第 46 回把借箭歸給諸葛亮——虛構。正史原型是孫權濡須之戰（213 年），見裴松之注引《魏略》：一面受箭、回船再受、箭均船平。大霧與草人是羅貫中的加工。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Judo strategy (use the opponent's weight against them) and traffic hijacking — customer-acquisition cost driven to zero with the enemy's ad budget.", zh: "柔道戰略（借對手的體重摔倒對手）＋流量挪用——用敵人的行銷預算把自己的獲客成本打到趨近於零。" } }
        ]
      },
      {
        slug: "sowing-discord",
        category: "tactics",
        meta: { en: "Manga ch. 25 · Anime eps. 11–12", zh: "漫畫第 25 話・動畫第 11–12 集" },
        title: { en: "Sowing Discord", zh: "離間計" },
        summary: {
          en: "One true sentence — 'every share lowers your odds of winning the million' — splits the rival's fan army.",
          zh: "一句大實話——「擴散會降低你中一百萬的機率」——分化對手的粉絲大軍。"
        },
        overview: {
          en: "KABE's diss raps shake AZALEA's crowd, then Kongming weaponizes plain arithmetic: if you share the campaign, your own chance of winning drops. Individual rationality dissolves the collective push — a live-action prisoner's dilemma.",
          zh: "KABE 的 diss 動搖 AZALEA 陣營，孔明再用簡單算術收割：你越幫忙擴散，自己中獎機率越低。個人理性瓦解集體行動——活生生的囚徒困境。"
        },
        tags: ["Game theory", "Prisoner's dilemma", "Social proof"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "A staple of classical Chinese strategy; its close cousin, the counter-espionage stratagem (反間計), is no. 33 of the Thirty-Six.", zh: "傳統兵法常計；近親「反間計」為《三十六計》第 33 計。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Game theory: change the payoff each individual perceives and the coalition dissolves itself.", zh: "賽局理論：改變每個個體感知到的報酬結構，聯盟自己就會瓦解。" } }
        ]
      },
      {
        slug: "feint-strike",
        category: "tactics",
        meta: { en: "Manga ch. 50 (vol. 7)", zh: "漫畫第 50 話（7 卷）" },
        title: { en: "Feint and Strike", zh: "偽撃転殺の計" },
        summary: { en: "A decoy attack draws the defense before the real blow lands — deployed at Kyoto's Five-Merchant Festival.", zh: "佯攻引開防守，真招才落下——用於京都五商祭的演藝合戰。" },
        overview: {
          en: "In the Kyoto arc's merchant-street showdown, Eiko's side telegraphs one move while preparing another, redirecting the audience's — and the rivals' — attention before the reversal.",
          zh: "京都商店街對抗戰中，英子陣營先亮出一手吸走觀眾與對手的注意力，真正的逆轉手在暗處完成。"
        },
        tags: ["Misdirection", "Attention economics"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "A classical feint-category tactic name.", zh: "古兵法聲東擊西類的計名。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Attention is finite: whoever controls where it looks controls the round.", zh: "注意力有限：控制它看哪裡，就控制這一回合。" } }
        ]
      },
      {
        slug: "lure-strike",
        category: "tactics",
        meta: { en: "Manga ch. 51 (vol. 7)", zh: "漫畫第 51 話（7 卷）" },
        title: { en: "Lure and Ambush", zh: "虚誘掩殺の計" },
        summary: { en: "Show a tempting opening, let the opponent commit, then close the trap.", zh: "露出誘人的破綻，等對手撲上來，再收網。" },
        overview: {
          en: "Also from the Kyoto arc: a deliberately exposed weakness invites the rival to over-commit, converting their aggression into the setup for Eiko's counter.",
          zh: "同屬京都篇：刻意暴露的弱點引誘對手全力壓上，對方的攻勢反而成為英子反擊的舞台。"
        },
        tags: ["Bait strategy", "Counter-positioning"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "A classical lure-category tactic name.", zh: "古兵法誘敵類的計名。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Counter-positioning: invite the incumbent to double down on the move that hurts them.", zh: "反定位：誘使既有強者加倍投入對自己不利的打法。" } }
        ]
      },
      {
        slug: "counter-espionage",
        category: "c36",
        meta: { en: "Manga ch. 53 (vol. 7)", zh: "漫畫第 53 話（7 卷）" },
        title: { en: "Turning the Enemy's Agent", zh: "反間計" },
        summary: { en: "The intelligence the opponent trusts most becomes the channel that misleads them.", zh: "對手最信任的情報管道，變成誤導他的通道。" },
        overview: {
          en: "Stratagem no. 33 of the Thirty-Six, played out in the Kyoto arc: information warfare where the enemy's own sources deliver Kongming's script.",
          zh: "《三十六計》第 33 計在京都篇的展開：讓敵人自己的情報來源替孔明送劇本的資訊戰。"
        },
        tags: ["Information warfare"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Thirty-Six Stratagems no. 33.", zh: "《三十六計》第 33 計。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Signal manipulation in competitive dynamics.", zh: "競爭動態中的訊號操縱。" } }
        ]
      },
      {
        slug: "warfare-is-deception",
        category: "tactics",
        meta: { en: "Manga ch. 64 (vol. 9)", zh: "漫畫第 64 話（9 卷）" },
        title: { en: "All Warfare Is Based on Deception", zh: "兵は詭道なり" },
        summary: {
          en: "The one line actually from Sun Tzu — invoked as the indie label Fourth Kingdom brokers an unprecedented three-major-label crossover.",
          zh: "真正出自《孫子兵法》的一句——用在 Fourth Kingdom 促成三大唱片公司破天荒聯名的一役。"
        },
        overview: {
          en: "Kongming founds the independent label Fourth Kingdom (Eiko is a signed artist, not the owner) and, playing the three giants KEY TIME, V-EX and SSS Music against their own boundaries, brokers a crossover no one thought possible — rewriting the industry's value chain from the edge.",
          zh: "孔明創設獨立廠牌 Fourth Kingdom（英子是旗下藝人、非老闆），操作 KEY TIME、V-EX、SSS Music 三大廠牌的邊界心結，促成沒人認為可能的聯名演出——從產業邊緣改寫價值鏈。"
        },
        tags: ["Disruptive innovation", "Ecosystem play"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Sun Tzu, The Art of War, ch. 1 ('Laying Plans') — genuinely Sun Wu's text, unlike the Thirty-Six Stratagems.", zh: "《孫子兵法・始計篇》「兵者，詭道也」——與《三十六計》不同，這句是真正的孫武原文。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Disruptive innovation: enter from the edge the giants ignore, then redefine the rules.", zh: "破壞式創新：從巨頭看不上的邊緣切入，最後重新定義規則。" } }
        ]
      },
      {
        slug: "beauty-trap",
        category: "c36",
        meta: { en: "Manga ch. 65 (vol. 9)", zh: "漫畫第 65 話（9 卷）" },
        title: { en: "The Beauty Trap", zh: "美人の計" },
        summary: { en: "Stratagem no. 31, replayed as attention economics in the Fourth Kingdom founding arc.", zh: "第 31 計在 Fourth Kingdom 創業篇的現代重演——注意力經濟版。" },
        overview: {
          en: "In the label-founding arc, star power itself becomes the negotiating asset — the modern translation of the classic stratagem: what the other side cannot look away from sets the table.",
          zh: "創業篇裡，明星魅力本身成為談判資產——古計的現代翻譯：對方移不開眼睛的東西，決定了談判桌的形狀。"
        },
        tags: ["Attention economics"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Thirty-Six Stratagems no. 31.", zh: "《三十六計》第 31 計。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Attention as a bargaining chip.", zh: "注意力作為談判籌碼。" } }
        ]
      },
      {
        slug: "rap-battle",
        category: "scene",
        meta: { en: "≈ Manga ch. 11–13 · Anime eps. 5–6", zh: "約漫畫第 11–13 話・動畫第 5–6 集" },
        title: { en: "The Rap Battle Recruitment", zh: "收編 KABE 的 rap battle" },
        summary: {
          en: "Kongming challenges a retired 3-time champion, loses on purpose — and wins a teammate.",
          zh: "孔明向退隱的三連霸冠軍下戰帖，故意輸掉——贏回一個隊友。"
        },
        overview: {
          en: "KABE Taijin, hiding from music after stress ulcers, will not be bought. So Kongming earns his respect in his own arena — quoting Sun Tzu's 'know yourself, know your enemy' mid-verse and weaving in a Han-dynasty poem ('The departed grow more distant daily…', from the Nineteen Old Poems — an anthology that actually postdates Kongming's lifetime, a deliberate anachronism). KABE wins the battle, loses his excuses, and rejoins music of his own will.",
          zh: "因胃潰瘍退隱的 KABE 太人用錢請不動。孔明選擇在對方的主場贏得尊重——饒舌中引《孫子兵法》「知己知彼」，還化用《古詩十九首・去者日以疏》（東漢無名氏詩集，嚴格說晚於孔明時代——作品刻意的古典混搭）。KABE 贏了比賽、輸掉藉口，自願重返音樂。"
        },
        tags: ["Employer branding", "Psychological safety", "Affordable loss"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Original scene; the embedded classics are verified (Sun Tzu ch. 3; Nineteen Old Poems no. 14, anthologized in the Wen Xuan).", zh: "原創劇情；引用的古典皆屬實（孫子謀攻篇；古詩十九首第 14 首，《文選》收錄）。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Vision-led recruiting: win respect in the talent's arena, restore meaning, let them self-select in. The downside — losing face — was an affordable loss.", zh: "願景式招募：在人才的主場贏得尊重、重建意義感、讓他自選加入。輸掉的「面子」是可承受損失。" } }
        ]
      },
      {
        slug: "ghostwriter-expose",
        category: "scene",
        meta: { en: "Summer Sonia arc", zh: "Summer Sonia 篇" },
        title: { en: "Exposing the Ghostwriter", zh: "揭發影武者" },
        summary: {
          en: "KABE's on-stage rap (planned by Kongming) reveals the villain's manufactured persona; attendance rockets from 311 to 43,000.",
          zh: "KABE 在舞台上用 rap（孔明策劃）拆穿反派的人設工程；觀眾動員從 311 人衝到 43,000 人。"
        },
        overview: {
          en: "Maezono's stardom is built on ghostwriters — the duo East South, bound by a ¥100M contract. Kongming plants KABE in the enemy camp; on the Summer Sonia stage KABE raps the truth while East South defect in real time. Note the correction: Kongming plans, KABE executes — analyses that say 'Kongming exposed it himself' are wrong. Japanese Wikipedia records the 311 → 43,000 legend verbatim.",
          zh: "前園的人氣建立在影武者上——被 1 億日圓合約綁住的雙人組 East South。孔明把 KABE 安插進敵營，Summer Sonia 舞台上 KABE 用 rap 唱出真相、East South 當場倒戈。注意修正：孔明策劃、KABE 執行——「孔明親自揭發」的說法是錯的。日文維基逐字記載 311 → 43,000 的傳說。"
        },
        tags: ["Cognitive dissonance", "Pilot-in-the-plane"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Original scene. The '¥5T ad giant' behind Maezono is an in-story exaggeration (the real-world analogue's revenue is about ¥1.4T).", zh: "原創劇情。前園背後「年營收 5 兆的廣告巨頭」是作品內誇飾（現實對照對象約 1.4 兆）。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "Authenticity as strategy: when a rival's position is manufactured, the truth itself is the weapon.", zh: "真實性作為策略：當對手的地位是人工搭建的，真相本身就是武器。" } }
        ]
      },
      {
        slug: "horse-racing",
        category: "scene",
        meta: { en: "Vol. 16", zh: "第 16 卷" },
        title: { en: "The Horse-Racing Gambit", zh: "賽馬篇" },
        summary: {
          en: "Kongming bets his entire savings and LOSES — then converts gambling into a controllable project.",
          zh: "孔明押上全財產還輸掉——然後把賭博變成可控的專案。"
        },
        overview: {
          en: "Needing a concert venue, Kongming himself stakes his whole ¥1M (a common retelling wrongly says Kobayashi did) and loses the first bet. The real move follows: impressing the horse owner, he trains the never-won horse Gigoshoku Rider to a G1 'Minato Cup' victory, earning the venue slot. Often cited as breaking the affordable-loss principle; the sharper reading is that he converts an unpredictable gamble into a controllable project — pilot-in-the-plane.",
          zh: "為了個唱場地，孔明本人押上全財產 100 萬日圓（常見誤傳說是小林）且首賭輸掉。真正的殺招在後面：他獲得馬主賞識，調教萬年未勝馬「ギゴショクライダー」贏下 G1「みなと杯」，換到場地檔期。此段常被說違反可承受損失原則；更精確的讀法是他把不可控的賭局改造成可控的專案——飛行員原則。"
        },
        tags: ["Affordable loss (debated)", "Pilot-in-the-plane"],
        details: [
          { label: { en: "Provenance", zh: "典故考證" }, value: { en: "Original arc, vol. 16; details verified against Kodansha's volume page.", zh: "原創劇情（第 16 卷）；細節比對過講談社商品頁。" } },
          { label: { en: "Business theory", zh: "對應理論" }, value: { en: "The boundary case of effectuation: when you cannot afford the loss, change the game until you control the odds.", zh: "效果邏輯的邊界個案：輸不起的時候，就改造賽局直到勝率可控。" } }
        ]
      }
    ]
  },
  /* ==================================================== theories ======= */
  {
    slug: "theories",
    layout: "gallery",
    icon: "hub",
    title: { en: "Theory Atlas", zh: "理論地圖" },
    subtitle: {
      en: "Every theory the analyses invoke, each with its original thinker, verified source, and the manga scene it explains. Click a card; deep dives live on the dedicated pages.",
      zh: "分析中動用的每個理論：原創者、經查證的出處、它解釋的漫畫場景。點卡片看摘要；完整深論見各專章。"
    },
    categories: [
      { key: "eff",   en: "Entrepreneurial decision-making", zh: "創業決策" },
      { key: "mkt",   en: "Marketing",                        zh: "行銷" },
      { key: "strat", en: "Strategy & competition",           zh: "策略競爭" },
      { key: "org",   en: "People & organizations",           zh: "組織領導" },
      { key: "beh",   en: "Behavioral economics",             zh: "行為經濟" }
    ],
    items: [
      { slug: "effectuation", category: "eff",
        title: { en: "Effectuation vs Causation", zh: "效果邏輯 vs 因果邏輯" },
        summary: { en: "Causal logic picks means for a given goal; effectual logic grows goals from given means.", zh: "因果邏輯為既定目標挑手段；效果邏輯從既有手段長出目標。" },
        overview: { en: "The backbone theory of this whole knowledge base. Kongming is effectual at the strategic level (no grand blueprint, goals emerge) and causal at the tactical level (each battle is meticulously planned) — exactly the expert switching Sarasvathy describes.", zh: "整個知識庫的骨幹理論。孔明在戰略層是效果邏輯（沒有終局藍圖、目標邊打邊長），在戰術層是因果邏輯（每場戰役縝密推演）——正是 Sarasvathy 說的專家切換。" },
        tags: ["Sarasvathy", "prediction vs control"],
        details: [
          { label: { en: "Thinker", zh: "大師" }, value: { en: "Saras D. Sarasvathy (PhD under Nobel laureate Herbert Simon)", zh: "Saras D. Sarasvathy（諾貝爾獎得主 Herbert Simon 的博士生）" } },
          { label: { en: "Source", zh: "原典" }, value: { en: "Academy of Management Review 26(2), 2001, pp. 243–263", zh: "Academy of Management Review 26(2), 2001, pp. 243–263" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "Kongming/Eiko (effectual) vs producer Karasawa (purely causal)", zh: "孔明／英子（效果）vs 製作人唐澤（純因果）" } } ] },
      { slug: "bird-in-hand", category: "eff",
        title: { en: "Bird-in-Hand", zh: "手中鳥原則" },
        summary: { en: "Start from who you are, what you know, whom you know — not from an imagined goal.", zh: "從「我是誰、我會什麼、我認識誰」出發，不是從想像的目標出發。" },
        overview: { en: "Kongming's opening inventory: a strategist's brain, Eiko's voice, one club owner. He starts with exactly those, and the goals (festival → label → world stage) emerge along the way.", zh: "孔明的開局盤點：兵法腦、英子的歌喉、一個夜店老闆。他就用這三樣開始，目標（音樂祭→廠牌→世界舞台）是邊走邊長出來的。" },
        tags: ["Sarasvathy"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Named in Sarasvathy's 2008 book; in the 2001 paper it is the 'given means' starting point, not yet a named principle", zh: "命名見 2008 年專書；2001 論文中它是「既有手段」起點，尚未具名為原則" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "The penniless reincarnation opening", zh: "身無分文的轉生開局" } } ] },
      { slug: "affordable-loss", category: "eff",
        title: { en: "Affordable Loss", zh: "可承受損失原則" },
        summary: { en: "Decide what you are willing to lose, not what you expect to make.", zh: "先決定願意輸多少，不是預期賺多少。" },
        overview: { en: "Nearly every scheme costs Kongming almost nothing if it fails — a lost rap battle costs only face. The horse-racing arc is the debated boundary case.", zh: "孔明的計失敗了幾乎都不傷筋骨——rap battle 輸了也只輸面子。賽馬篇是有爭議的邊界個案。" },
        tags: ["Sarasvathy"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "One of the four named principles in the 2001 AMR paper; Dew & Sarasvathy technical note (Darden, 2006)", zh: "2001 AMR 論文四具名原則之一；Dew & Sarasvathy 技術說明（Darden, 2006）" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "Zero-budget guerrilla bets throughout season one", zh: "第一季全程的零預算游擊賭注" } } ] },
      { slug: "crazy-quilt", category: "eff",
        title: { en: "Crazy Quilt", zh: "拼布原則" },
        summary: { en: "Build partnerships with whoever self-selects in, instead of running competitor analyses.", zh: "跟自願加入的人縫成拼布，而不是做競爭分析。" },
        overview: { en: "Every 'duel' in the series actually expands the alliance: KABE joins, the beaten band gets throat medicine, the rival group gets saved, the ghostwriters get signed. Fourth Kingdom is a quilt of commitments.", zh: "全劇每場「對決」其實都在擴大同盟：KABE 加入、被擊敗的樂團收到喉藥、對手團被拯救、影武者被簽下。Fourth Kingdom 本身就是一塊承諾縫成的拼布。" },
        tags: ["Sarasvathy", "stakeholders"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "2001 paper: 'strategic alliances rather than competitive analyses'; cousin theory: Freeman's stakeholder theory (1984)", zh: "2001 論文「策略聯盟而非競爭分析」；近親理論：Freeman 利害關係人理論（1984）" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "KABE, JET JACKET, AZALEA, East South — enemies quilted in", zh: "KABE、JET JACKET、AZALEA、East South——敵人一一入布" } } ] },
      { slug: "lemonade", category: "eff",
        title: { en: "Lemonade Principle", zh: "檸檬水原則" },
        summary: { en: "Treat surprises — including bad ones — as ingredients, not obstacles.", zh: "把意外（包括壞消息）當食材，不當障礙。" },
        overview: { en: "The rigged time slot enables the maze; the worst booth enables the ambush; the enemy's paid campaign becomes free traffic. Caveat: not every lemon should be squeezed — some situations call for stopping the bleeding.", zh: "被設計的同時段成就了迷宮；最爛攤位成就了奇襲；對手的付費活動變成免費流量。警語：不是每顆檸檬都該榨——有些狀況該止血退出。" },
        tags: ["Sarasvathy"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "2001 paper: 'exploitation of contingencies'; cousin: organizational improvisation (Moorman & Miner, AMR 1998)", zh: "2001 論文「善用意外」；近親：組織即興（Moorman & Miner, AMR 1998）" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "Every villain scheme becomes Kongming's material", zh: "每個反派的招數都變成孔明的材料" } } ] },
      { slug: "pilot", category: "eff",
        title: { en: "Pilot-in-the-Plane", zh: "飛行員原則" },
        summary: { en: "The future is made by what people do — control beats prediction.", zh: "未來是人做出來的——控制勝過預測。" },
        overview: { en: "Kongming does not forecast trends; he shapes situations: permits, locations, informants, timing. His one long bet is the controllable asset — Eiko's ever-improving voice. Common misconception corrected: this 'control' principle was already in the 2001 paper; only the airplane name came later.", zh: "孔明不預測趨勢，他塑造局面：許可證、地點、情報員、時機。他唯一的長期押注是可控資產——越練越好的英子歌聲。常見誤解更正：「控制」原則 2001 年論文就有，晚出的只是「飛行員」這個名字。" },
        tags: ["Sarasvathy", "non-predictive control"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "2001 paper p. 252: 'To the extent that we can control the future, we do not need to predict it.'", zh: "2001 論文 p.252：「只要我們能控制未來，就不需要預測它。」" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "'Man proposes, Heaven disposes' — the series' recurring line, from Romance ch. 103", zh: "「謀事在人，成事在天」——全劇主題句，出自《三國演義》第 103 回" } } ] },
      { slug: "knight", category: "eff",
        title: { en: "Knightian Uncertainty", zh: "奈特不確定性" },
        summary: { en: "Risk has computable odds; true uncertainty has none — and that is where entrepreneurs live.", zh: "「風險」算得出機率，「不確定性」連機率都沒有——創業者活在後者。" },
        overview: { en: "Pop-music tastes, viral dynamics, live crowds: no probability distribution exists. This is why Kongming cannot simply 'forecast the market' and must control what he can.", zh: "流行音樂品味、病毒式擴散、現場群眾：根本沒有機率分布可算。這就是孔明無法「預測市場」、只能控制可控之事的原因。" },
        tags: ["Knight 1921"],
        details: [
          { label: { en: "Thinker", zh: "大師" }, value: { en: "Frank H. Knight", zh: "Frank H. Knight" } },
          { label: { en: "Source", zh: "原典" }, value: { en: "Risk, Uncertainty and Profit (1921)", zh: "《Risk, Uncertainty and Profit》(1921)" } } ] },
      { slug: "bricolage", category: "eff",
        title: { en: "Entrepreneurial Bricolage", zh: "創業拼裝" },
        summary: { en: "Making do with whatever is at hand — creation from 'nothing'.", zh: "就手邊現有的東西湊出解法——從「無」中創造。" },
        overview: { en: "A club's fog machine, staff uniforms and corridors become a legendary maze. Bricolage is the hands-on twin of the bird-in-hand principle.", zh: "夜店的煙霧機、員工制服與走道，拼成傳說中的八陣。拼裝是手中鳥原則的動手版雙生子。" },
        tags: ["Baker & Nelson"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Baker & Nelson, Administrative Science Quarterly 50(3), 2005, pp. 329–366", zh: "Baker & Nelson，ASQ 50(3), 2005, pp. 329–366" } } ] },
      { slug: "stakeholder", category: "eff",
        title: { en: "Stakeholder Theory", zh: "利害關係人理論" },
        summary: { en: "A venture is defined by everyone who commits real stakes to it.", zh: "事業由所有押了真承諾的人共同定義。" },
        overview: { en: "The theoretical ancestor of the crazy quilt: Kobayashi's venue, KABE's voice, the fans' likes — each commitment reshapes what the venture becomes.", zh: "拼布原則的理論祖先：小林的場地、KABE 的聲音、粉絲的讚——每一筆承諾都改寫事業的形狀。" },
        tags: ["Freeman 1984"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "R. Edward Freeman, Strategic Management: A Stakeholder Approach (Pitman, 1984)", zh: "R. Edward Freeman《Strategic Management: A Stakeholder Approach》(Pitman, 1984)" } } ] },

      { slug: "stp", category: "mkt",
        title: { en: "STP", zh: "STP 定位" },
        summary: { en: "Segment the market, target the winnable group, position in their minds.", zh: "切割市場、選你能贏的客群、在他們心中佔一個位置。" },
        overview: { en: "Eiko's early problem is having no position — a cover singer lost in the noise. Kongming positions her as the original singer for people seeking real emotional resonance. Attribution note: segmentation is Wendell Smith (1956); 'positioning' is Trout & Ries; Kotler systematized the trio.", zh: "英子早期的問題是沒有定位——被淹沒的翻唱歌手。孔明把她定位成「替尋找真實共鳴的人而唱」的原創歌手。歸屬註記：區隔出自 Smith（1956）；定位是 Trout 與 Ries 的原創；Kotler 是三步驟的統整普及者。" },
        tags: ["Smith 1956", "Kotler", "Trout & Ries"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "W. R. Smith, Journal of Marketing 21(1), 1956, pp. 3–8", zh: "W. R. Smith，Journal of Marketing 21(1), 1956, pp. 3–8" } },
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "From cover singer to the voice of DREAMER", zh: "從翻唱歌手到〈DREAMER〉的原創歌手" } } ] },
      { slug: "four-p", category: "mkt",
        title: { en: "4P / 7P Marketing Mix", zh: "4P／7P 行銷組合" },
        summary: { en: "Product, price, place, promotion — services add people, process, physical evidence.", zh: "產品、價格、通路、推廣——服務業再加人員、流程、實體證據。" },
        overview: { en: "The Yoyogi comeback is not just promotion: the performance is redesigned (product), the bad booth is converted (place), staff and timing orchestrated (people/process). Marketing failures are usually mix misalignment, not 'not enough ads'.", zh: "代々木逆轉不只是宣傳：表演被重新設計（產品）、爛攤位被轉化（通路）、人員與時間被編排（人員／流程）。行銷失敗通常是組合沒對齊，不是「廣告不夠」。" },
        tags: ["McCarthy 1960", "Booms & Bitner 1981"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "McCarthy, Basic Marketing (1960); 7P: Booms & Bitner (1981). The term 'marketing mix' is Borden's (1953/1964)", zh: "McCarthy《Basic Marketing》(1960)；7P：Booms & Bitner (1981)；「行銷組合」一詞出自 Borden（1953/1964）" } } ] },
      { slug: "aida", category: "mkt",
        title: { en: "AIDA & the Funnel", zh: "AIDA 與行銷漏斗" },
        summary: { en: "Attention → Interest → Desire → Action, drawn as a narrowing funnel.", zh: "注意 → 興趣 → 慾望 → 行動，畫成逐層收窄的漏斗。" },
        overview: { en: "The maze only wins Attention; the singing converts the rest. Attribution is genuinely contested: traditionally E. St. Elmo Lewis (1898); the acronym is C. P. Russell (1921); the funnel drawing is Townsend (1924).", zh: "迷宮只贏得 Attention，後面的轉換靠歌聲。歸屬確實有爭議：傳統歸 Lewis（1898）；縮寫是 Russell（1921）；漏斗畫法是 Townsend（1924）。" },
        tags: ["Lewis", "funnel"],
        details: [
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "Stone Sentinel Maze = engineered top-of-funnel", zh: "石兵八陣＝被設計出來的漏斗頂端" } } ] },
      { slug: "blue-ocean", category: "mkt",
        title: { en: "Blue Ocean Strategy", zh: "藍海策略" },
        summary: { en: "Escape red-ocean rivalry via value innovation — differentiate AND cut cost.", zh: "用價值創新逃離紅海——同時差異化與降低成本。" },
        overview: { en: "The Yoyogi booth is a red ocean ('she must compete in a sea of blood'); Kongming creates an uncontested space with a differentiated show. This mapping has published precedent (a 2022 marketing-blog analysis), unlike some others on this site which are our own reasoned extensions.", zh: "代々木的攤位就是紅海（「她必須在血海中競爭」）；孔明用差異化演出開出無人競爭的空間。這條對照有先行文獻（2022 年行銷部落格分析），不像本站部分對照屬自行推演。" },
        tags: ["Kim & Mauborgne"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "HBR Oct 2004 + the 2005 book; 'value innovation' first in HBR 1997; ERRC grid is its core tool", zh: "2004 年 10 月 HBR 文章＋2005 專書；「價值創新」首見 1997 HBR；ERRC 是核心工具" } } ] },
      { slug: "guerrilla", category: "mkt",
        title: { en: "Guerrilla Marketing", zh: "游擊行銷" },
        summary: { en: "Small budgets win with creativity, surprise and unconventional channels.", zh: "小預算靠創意、奇襲與非常規渠道取勝。" },
        overview: { en: "Kongming's entire playbook: venue tricks, fake rumors, street shows, disguised flash performances — near-zero budget, aimed at the opponent's blind spot.", zh: "孔明的整套打法：動線戰、假消息、街頭演唱、假扮快閃——幾乎零預算，打對手的認知盲區。" },
        tags: ["Levinson 1984"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Jay Conrad Levinson, Guerrilla Marketing (1984)", zh: "Jay Conrad Levinson《Guerrilla Marketing》(1984)" } } ] },
      { slug: "viral", category: "mkt",
        title: { en: "Viral Marketing & Traffic Hijacking", zh: "病毒式行銷與流量挪用" },
        summary: { en: "Users become the medium; or you redirect attention someone else paid for.", zh: "讓使用者成為媒介；或把別人花錢聚的注意力導向自己。" },
        overview: { en: "The Borrowed Arrows campaign is textbook hijacking. Science backs the snowball: a 2013 randomized experiment showed a single seeded like inflates final scores by ~25%.", zh: "草船借箭是教科書級流量挪用。雪球效應有科學根據：2013 年隨機實驗顯示，一個先種下的讚會讓最終評分灌高約 25%。" },
        tags: ["Jurvetson 1997", "Muchnik 2013"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Term: Draper/Jurvetson on Hotmail (1997; Rayport's 1996 'v-marketing' competes). Evidence: Muchnik, Aral & Taylor, Science 341 (2013)", zh: "詞源：Draper/Jurvetson 談 Hotmail（1997；Rayport 1996「v-marketing」為競爭主張）。實證：Muchnik, Aral & Taylor，Science 341（2013）" } } ] },
      { slug: "gruen", category: "mkt",
        title: { en: "The Gruen Effect", zh: "Gruen 效應" },
        summary: { en: "Deliberately disorienting layouts make people forget their errand and linger.", zh: "刻意讓人迷失方向的動線，使人忘記原本目的、多留多看。" },
        overview: { en: "Named after architect Victor Gruen, who designed the first enclosed mall (1956) and publicly disavowed the manipulation named after him. IKEA's one-way path and Costco's buried essentials are standard citations — and the Stone Sentinel Maze is a pop-up version.", zh: "得名自設計出第一座室內購物中心（1956）的建築師 Victor Gruen——他本人公開反對這種以他為名的操縱術。IKEA 單向動線、Costco 把必需品藏最深處是標準案例——石兵八陣就是快閃版。" },
        tags: ["retail psychology"],
        details: [
          { label: { en: "In the manga", zh: "漫畫對照" }, value: { en: "Stone Sentinel Maze, manga ch. 4", zh: "石兵八陣（漫畫第 4 話）" } } ] },
      { slug: "canvas", category: "mkt",
        title: { en: "Business Model & Value Proposition Canvas", zh: "商業模式與價值主張畫布" },
        summary: { en: "One page for how the venture runs; one page for why customers 'hire' you.", zh: "一張圖看事業怎麼運轉；一張圖看顧客為何「僱用」你。" },
        overview: { en: "Eiko sells emotional shelter, not vocal technique — that is her value proposition. From club to festival to label to overseas, her canvas fills in block by block.", zh: "英子賣的是情緒的容身處，不是唱功——這就是她的價值主張。從夜店、音樂祭、廠牌到海外，她的商業模式畫布一格一格被填滿。" },
        tags: ["Osterwalder & Pigneur"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Business Model Generation (2010); Value Proposition Design (2014); the nine blocks date to Osterwalder's 2005 PhD thesis", zh: "《Business Model Generation》(2010)、《Value Proposition Design》(2014)；九宮格最早見 2005 年博士論文" } } ] },

      { slug: "five-forces", category: "strat",
        title: { en: "Porter's Five Forces", zh: "波特五力" },
        summary: { en: "Industry profit is divided among rivals, entrants, buyers, suppliers and substitutes.", zh: "產業利潤被對手、新進者、買方、供應商、替代品五股力量瓜分。" },
        overview: { en: "The music industry on full display: incumbent acts, festival gatekeepers, scarce audience attention, three label giants controlling channels, and endless entertainment substitutes.", zh: "音樂產業的五力全被演出來：既有藝人、音樂祭守門人、稀缺的觀眾注意力、掌握通路的三大廠牌、無窮的娛樂替代品。" },
        tags: ["Porter 1979"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "HBR 57(2), 1979, pp. 137–145 — Porter's first HBR article; the 1980 book Competitive Strategy", zh: "HBR 57(2), 1979, pp. 137–145——Porter 的第一篇 HBR 文章；1980《Competitive Strategy》" } } ] },
      { slug: "generic", category: "strat",
        title: { en: "Generic Strategies", zh: "通用競爭戰略" },
        summary: { en: "Cost leadership, differentiation, or focus — do not get stuck in the middle.", zh: "成本領先、差異化、集中——別卡在中間。" },
        overview: { en: "Eiko = focused differentiation (soulful authenticity for a niche); Karasawa-era AZALEA = standardized mass-market idol formula. Their collision is the theory staged.", zh: "英子＝集中差異化（為小眾提供靈魂共鳴）；唐澤時期的 AZALEA＝標準化大眾偶像公式。兩者對撞就是理論的舞台劇。" },
        tags: ["Porter 1980"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Competitive Strategy (1980); the focus split detailed in Competitive Advantage (1985)", zh: "《Competitive Strategy》(1980)；集中戰略的細分見《Competitive Advantage》(1985)" } } ] },
      { slug: "rbv", category: "strat",
        title: { en: "Resource-Based View (VRIN)", zh: "資源基礎觀點（VRIN）" },
        summary: { en: "Sustained advantage comes from valuable, rare, inimitable, non-substitutable resource bundles.", zh: "持續優勢來自有價值、稀有、難模仿、難替代的資源組合。" },
        overview: { en: "Any single piece is replaceable — good voices and rappers exist. The BUNDLE (Eiko's resonance + Kongming's integration + Kobayashi's venue + KABE's fire) is what cannot be copied: causal ambiguity and social complexity in action.", zh: "單看每個零件都可替代——好歌喉和饒舌高手都不缺。無法複製的是「組合」（英子的穿透力＋孔明的整合＋小林的場域＋KABE 的爆發力）：因果模糊與社會複雜性的活教材。" },
        tags: ["Barney 1991"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Journal of Management 17(1), 1991, pp. 99–120; VRIN evolved into VRIO (1995/1997)", zh: "Journal of Management 17(1), 1991, pp. 99–120；VRIN 後演變為 VRIO（1995/1997）" } } ] },
      { slug: "disruption", category: "strat",
        title: { en: "Disruptive Innovation", zh: "破壞式創新" },
        summary: { en: "Giants are not beaten head-on; they are bypassed from markets they ignore.", zh: "巨頭不是被正面打敗的，是被他們看不上的市場繞過的。" },
        overview: { en: "Fourth Kingdom enters as an indie label from the industry's edge, then brokers the three-major crossover that rewrites the value chain — the classic disruption arc.", zh: "Fourth Kingdom 以獨立廠牌從產業邊緣切入，再促成改寫價值鏈的三大廠牌聯名——標準的破壞式創新劇本。" },
        tags: ["Christensen"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Bower & Christensen, HBR 73(1), 1995; The Innovator's Dilemma (1997)", zh: "Bower & Christensen，HBR 73(1), 1995；《創新的兩難》(1997)" } } ] },
      { slug: "judo", category: "strat",
        title: { en: "Judo Strategy", zh: "柔道戰略" },
        summary: { en: "Use the bigger opponent's weight and momentum to throw them.", zh: "借體重比你重的對手的重量與慣性摔倒他。" },
        overview: { en: "Borrowed Arrows is a perfect judo throw: the more AZALEA spends gathering a crowd, the bigger the crowd the fake QR code redirects. Attribution fixed here: the 1999 HBR article is Yoffie & Cusumano; the 2001 BOOK is Yoffie & KWAK.", zh: "草船借箭是完美的柔道摔：AZALEA 砸越多錢聚人，被假 QR code 導走的流量越大。本站修正過的歸屬：1999 HBR 文章是 Yoffie & Cusumano；2001 年專書作者是 Yoffie 與 Kwak。" },
        tags: ["Yoffie"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "HBR 77(1), 1999, pp. 70–81; book: Judo Strategy (HBS Press, 2001, Yoffie & Kwak)", zh: "HBR 77(1), 1999, pp. 70–81；專書《Judo Strategy》(HBS Press, 2001，Yoffie & Kwak)" } } ] },
      { slug: "pmf", category: "strat",
        title: { en: "Product-Market Fit", zh: "產品市場適配（PMF）" },
        summary: { en: "Before PMF, marketing is waste; after PMF, growth pulls itself.", zh: "PMF 之前行銷是浪費；PMF 之後成長自己會來。" },
        overview: { en: "Eiko's road from cover singer to knowing whom and why she sings (street practice, Nanami's push, DREAMER) is a PMF search. Kongming's schemes only buy time and samples until fit is found.", zh: "英子從翻唱歌手到知道「為誰而唱、為何而唱」（街頭修煉、七海點撥、〈DREAMER〉誕生）就是 PMF 的尋找。孔明的計謀只是在適配確立前爭取時間與樣本。" },
        tags: ["Rachleff", "Andreessen"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Coined by Andy Rachleff; popularized by Marc Andreessen's 2007 post 'The only thing that matters'", zh: "Andy Rachleff 命名；Marc Andreessen 2007 年名文普及" } } ] },
      { slug: "network-effects", category: "strat",
        title: { en: "Network Effects", zh: "網路效應" },
        summary: { en: "The more people use it, the more valuable it becomes for everyone.", zh: "用的人越多，對每個人的價值越高。" },
        overview: { en: "The 100k-likes race is network effects made visible: likes beget visibility beget likes — a positive feedback loop the whole plot rides on.", zh: "十萬讚競賽就是網路效應的可視化：讚帶來曝光、曝光帶來更多讚——整條劇情線騎在這個正回饋上。" },
        tags: ["Katz & Shapiro 1985", "Metcalfe"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Katz & Shapiro, American Economic Review 75(3), 1985, pp. 424–440", zh: "Katz & Shapiro，AER 75(3), 1985, pp. 424–440" } } ] },
      { slug: "game-theory", category: "strat",
        title: { en: "Game Theory & Information Asymmetry", zh: "賽局理論與資訊不對稱" },
        summary: { en: "Your best move depends on what you think they think you will do.", zh: "你的最佳選擇取決於「你認為對方認為你會怎麼做」。" },
        overview: { en: "The Empty Fort ruse (Romance ch. 95; historically dubious — Pei Songzhi already refuted it) exploits Sima Yi's model of a cautious Kongming. In the manga: fake breakdown signals, the like-lottery dilemma, staged information fog.", zh: "空城計（演義第 95 回；史實存疑——裴松之早已駁斥）利用司馬懿心中「謹慎的孔明」模型。漫畫中：假故障訊號、按讚抽獎的困境、被製造的資訊迷霧。" },
        tags: ["Nash", "Akerlof"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "von Neumann & Morgenstern (1944); Nash (1950); Akerlof's 'Market for Lemons', QJE 84(3), 1970", zh: "von Neumann & Morgenstern（1944）；Nash（1950）；Akerlof 檸檬市場，QJE 84(3), 1970" } } ] },
      { slug: "swot", category: "strat",
        title: { en: "SWOT (origins contested)", zh: "SWOT（起源有爭議）" },
        summary: { en: "Strengths, weaknesses, opportunities, threats — whose invention nobody can prove.", zh: "優勢、劣勢、機會、威脅——但發明者是誰沒人能證明。" },
        overview: { en: "Early Eiko: strong resonance, zero recognition, a live-scene opportunity, capital-backed threats. Kongming's first move is not fixing weaknesses but placing strengths where they get amplified. Origins caveat: the Humphrey/Stanford attribution is weak, the Harvard claim was denied by its own last surviving author (2017); recent scholarship concludes multi-source evolution.", zh: "早期英子：共鳴力強、知名度零、live 生態是機會、資本競品是威脅。孔明的第一步不是補短板，而是把優勢放到會被放大的位置。起源警語：Humphrey／史丹佛說證據薄弱；哈佛說被最後在世作者親口否認（2017）；近年考證結論是多方演化。" },
        tags: ["planning"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "No reliable single origin — see Puyt et al., Long Range Planning (2023)", zh: "無可靠單一起源——見 Puyt et al.，Long Range Planning（2023）" } } ] },
      { slug: "okr", category: "strat",
        title: { en: "OKR", zh: "OKR 目標管理" },
        summary: { en: "An inspiring Objective plus measurable Key Results.", zh: "一個振奮人心的目標＋可量測的關鍵結果。" },
        overview: { en: "'100,000 likes by the deadline' is a textbook OKR: the Summer Sonia dream translated into one measurable, time-boxed key result that drives recruiting, product and channel decisions.", zh: "「期限內十萬讚」是教科書級 OKR：Summer Sonia 的夢想被翻譯成一個可量測、有時限的關鍵結果，拉動招募、產品與通路的所有決策。" },
        tags: ["Grove", "Doerr"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Andy Grove's Intel practice (High Output Management, 1983); John Doerr, Measure What Matters (2018)", zh: "Andy Grove 在 Intel 的實務（《High Output Management》1983）；John Doerr《Measure What Matters》(2018)" } } ] },

      { slug: "psych-safety", category: "org",
        title: { en: "Psychological Safety", zh: "心理安全" },
        summary: { en: "Teams learn fastest where risk-taking is safe — high standards AND high safety.", zh: "敢冒險、犯錯不被羞辱的團隊學得最快——高標準與高安全感並存。" },
        overview: { en: "The KABE arc is the lesson: no coddling, no coercion — a high-tension but survivable challenge that lets him reclaim his own ability. Google's Project Aristotle later ranked this factor #1 for team effectiveness.", zh: "KABE 篇就是這一課：不放任、不情勒——一個高張力但可承受失敗的挑戰，讓他自己把能力找回來。Google 的 Project Aristotle 後來把這個因素列為高效團隊第一名。" },
        tags: ["Edmondson 1999"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Edmondson, Administrative Science Quarterly 44(2), 1999, pp. 350–383", zh: "Edmondson，ASQ 44(2), 1999, pp. 350–383" } } ] },
      { slug: "employer-brand", category: "org",
        title: { en: "Employer Branding & EVP", zh: "雇主品牌與 EVP" },
        summary: { en: "Companies that cannot outbid must out-mean: vision is compensation.", zh: "出不起價的組織要出得起意義：願景就是報酬。" },
        overview: { en: "Kongming recruits KABE with zero yen: professional respect earned in KABE's arena, plus restored meaning. Citation fixed on this site: the 1996 paper is Ambler & Barrow (Ambler first).", zh: "孔明用零日圓招募 KABE：在對方主場贏得專業尊重＋重建工作的意義。本站修正過的引用：1996 年論文是 Ambler & Barrow（Ambler 為第一作者）。" },
        tags: ["Ambler & Barrow 1996"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Journal of Brand Management 4(3), 1996, pp. 185–206", zh: "Journal of Brand Management 4(3), 1996, pp. 185–206" } } ] },
      { slug: "burnout", category: "org",
        title: { en: "Burnout", zh: "職業倦怠" },
        summary: { en: "The higher the achievement, the deeper the depletion — an occupational phenomenon, not a disease.", zh: "成就越高、耗竭越深——WHO 定義的「職業現象」，不是疾病。" },
        overview: { en: "Three championships → stress ulcers → hiding. Kongming's prescription is not 'rest and return' but rebuilding the meaning of the work. WHO listed burnout in ICD-11 (2019) explicitly as occupational phenomenon, not a medical condition.", zh: "三連霸 → 壓力性胃潰瘍 → 退隱。孔明的處方不是「休息夠了回來」，而是重建工作的意義感。WHO 於 ICD-11（2019）明列 burnout 為職業現象、非疾病。" },
        tags: ["Freudenberger 1974", "Maslach"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Freudenberger, Journal of Social Issues 30(1), 1974; Maslach Burnout Inventory (1981)", zh: "Freudenberger，JSI 30(1), 1974；Maslach 倦怠量表（1981）" } } ] },
      { slug: "batna", category: "org",
        title: { en: "BATNA", zh: "BATNA 談判替代方案" },
        summary: { en: "Negotiating power is not eloquence; it is your best walk-away option.", zh: "談判籌碼不是口才，是你談不成時的退路。" },
        overview: { en: "Kongming builds alternatives before he sits down: the wager with Eiko's mother, the festival-vs-likes choice, the label negotiations — every table is set with a ready plan B.", zh: "孔明談判前總是先把替代路徑做出來：與翔子的賭約、音樂祭 vs 十萬讚的選擇、廠牌斡旋——每張談判桌都先擺好 B 計畫。" },
        tags: ["Fisher & Ury 1981"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Getting to Yes (1981), Harvard Negotiation Project", zh: "《Getting to Yes》(1981)，哈佛談判專案" } } ] },
      { slug: "decision-tree", category: "org",
        title: { en: "Decision Analysis", zh: "決策樹與期望值" },
        summary: { en: "Split a fuzzy choice into options, probabilities, outcomes and expected values.", zh: "把模糊抉擇拆成選項、機率、結果與期望值。" },
        overview: { en: "'Guaranteed 10k-person local festival, or the 100k-likes gamble for Summer Sonia?' — the series keeps handing readers ready-made decision-tree exercises.", zh: "「保底一萬人的地方音樂祭，還是賭十萬讚上 Summer Sonia？」——這部作品不斷送讀者現成的決策樹習題。" },
        tags: ["Raiffa 1968"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Howard Raiffa, Decision Analysis (1968)", zh: "Howard Raiffa《Decision Analysis》(1968)" } } ] },
      { slug: "flow", category: "org",
        title: { en: "Flow", zh: "心流" },
        summary: { en: "Total absorption where time distorts — the optimal experience.", zh: "全神貫注到時間感消失的最佳體驗。" },
        overview: { en: "KABE's rematch against his old rival is often read as a flow moment ('time slowed down') — note this specific detail lacks a primary-source anchor and is flagged in our fact-check.", zh: "KABE 對宿敵的再戰常被讀成心流時刻（「時間變慢」）——注意此細節缺一手佐證，查證報告中有標註。" },
        tags: ["Csikszentmihalyi 1990"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Flow: The Psychology of Optimal Experience (1990)", zh: "《Flow: The Psychology of Optimal Experience》(1990)" } } ] },

      { slug: "prospect", category: "beh",
        title: { en: "Prospect Theory & Loss Aversion", zh: "前景理論與損失規避" },
        summary: { en: "People react to gains and losses, not totals — and losses hurt roughly twice as much.", zh: "人對「得失」反應而非總量——而且損失的痛約是獲得的兩倍。" },
        overview: { en: "The like-lottery weaponizes loss aversion ('not liking = losing a chance at ¥1M'); Kongming's counter-arithmetic flips the same lever. Precision note: the λ≈2.25 coefficient is from Tversky & Kahneman 1992, not the 1979 paper.", zh: "按讚抽獎武器化了損失規避（「不按讚＝損失中獎機會」）；孔明的反算術扳的是同一根槓桿。精確度註記：λ≈2.25 出自 1992 年論文，不是 1979。" },
        tags: ["Kahneman & Tversky 1979"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Econometrica 47(2), 1979, pp. 263–291", zh: "Econometrica 47(2), 1979, pp. 263–291" } } ] },
      { slug: "framing", category: "beh",
        title: { en: "Framing Effect", zh: "框架效應" },
        summary: { en: "Same facts, different wording, opposite choices.", zh: "同一件事換個說法，選擇就翻轉。" },
        overview: { en: "Kongming is a master reframer: worst booth → ambush site; lip-sync scandal → proof of the band's real value (the returned likes reframed AZALEA's brand overnight).", zh: "孔明是重新框架大師：最爛攤位 → 奇襲陣地；假唱醜聞 → 樂團真實價值的證明（歸還讚數的那一手一夜重塑了 AZALEA 的品牌）。" },
        tags: ["Tversky & Kahneman 1981"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Science 211(4481), 1981, pp. 453–458", zh: "Science 211(4481), 1981, pp. 453–458" } } ] },
      { slug: "social-proof", category: "beh",
        title: { en: "Social Proof", zh: "社會認同" },
        summary: { en: "When uncertain, people copy other people — like counts ARE the product.", zh: "不確定時，人看別人怎麼做——讚數本身就是產品的一部分。" },
        overview: { en: "The deep mechanism of the whole 100k-likes arc. Kongming exploits it (borrowed crowds create conformity) and then transcends it (the real breakthrough is DREAMER moving people).", zh: "整個十萬讚篇的深層機制。孔明先利用它（借來的人潮製造從眾），最終超越它（真正的突破是〈DREAMER〉打動人心）。" },
        tags: ["Cialdini 1984"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Influence: The Psychology of Persuasion (1984), one of the six principles", zh: "《影響力》(1984) 六大原則之一" } } ] },
      { slug: "scarcity", category: "beh",
        title: { en: "Scarcity", zh: "稀缺性效應" },
        summary: { en: "The less available, the more desired — proven with a jar of cookies.", zh: "越少越想要——用一罐餅乾就能證明。" },
        overview: { en: "Limited-time lotteries and one-night-only shows all pull this lever; the classic evidence is the 1975 cookie-jar experiment.", zh: "限時抽獎、一夜限定演出都在扳這根槓桿；經典證據是 1975 年的餅乾罐實驗。" },
        tags: ["Worchel 1975", "Cialdini"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Worchel, Lee & Adewole, JPSP 32(5), 1975, pp. 906–914", zh: "Worchel, Lee & Adewole，JPSP 32(5), 1975, pp. 906–914" } } ] },
      { slug: "nudge", category: "beh",
        title: { en: "Choice Architecture", zh: "選擇架構與輕推" },
        summary: { en: "How options are arranged decides what people choose — no coercion needed.", zh: "選項怎麼排，決定人怎麼選——不需要強迫任何人。" },
        overview: { en: "The Stone Sentinel Maze is a physical nudge: nobody is forced anywhere; the space simply reorders the options until staying to listen is the path of least resistance.", zh: "石兵八陣就是物理版輕推：沒有強迫任何人，空間只是重排了選項，直到「留下來聽歌」變成阻力最小的路。" },
        tags: ["Thaler & Sunstein 2008"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Nudge (Yale University Press, 2008)", zh: "《Nudge》(Yale UP, 2008)" } } ] },
      { slug: "dissonance", category: "beh",
        title: { en: "Cognitive Dissonance", zh: "認知失調" },
        summary: { en: "When belief collides with fact, something has to give.", zh: "信念與事實相撞時，總有一邊要讓步。" },
        overview: { en: "'My idols were lip-syncing' — the fans' dissonance needs an exit, and Kongming provides one: the authentic, instrument-playing AZALEA, reborn on stage.", zh: "「我支持的偶像在假唱」——粉絲的失調需要出口，孔明給了一個：摘下面具、真實演奏的新生 AZALEA。" },
        tags: ["Festinger 1957"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "A Theory of Cognitive Dissonance (Stanford UP, 1957)", zh: "《A Theory of Cognitive Dissonance》(Stanford UP, 1957)" } } ] },
      { slug: "variable-reward", category: "beh",
        title: { en: "Variable Rewards", zh: "變動獎勵" },
        summary: { en: "Uncertain jackpots grip harder than certain small wins — the slot-machine principle.", zh: "不確定的大獎比確定的小獎更抓人——拉霸機原理。" },
        overview: { en: "'Scan and maybe win ¥1M' is a variable-ratio reinforcement schedule on a truck. Skinner documented the mechanism; product design later industrialized it.", zh: "「掃碼也許中一百萬」就是開上卡車的變動比率增強時制。Skinner 記錄了機制；產品設計後來把它工業化。" },
        tags: ["Skinner", "Hooked"],
        details: [
          { label: { en: "Source", zh: "原典" }, value: { en: "Ferster & Skinner, Schedules of Reinforcement (1957); popularized by Nir Eyal's Hooked (2014)", zh: "Ferster & Skinner《Schedules of Reinforcement》(1957)；Nir Eyal《Hooked》(2014) 通俗化" } } ] }
    ]
  },
  /* ================================================ effectuation ======= */
  {
    slug: "effectuation",
    layout: "article",
    icon: "psychology",
    title: { en: "Effectuation Deep Dive", zh: "效果邏輯深論" },
    subtitle: {
      en: "The flagship theory of this codex: Sarasvathy's logic of expert entrepreneurs, quoted from the original paper with page numbers, and mapped onto Kongming's campaigns.",
      zh: "本站的骨幹理論：Sarasvathy 的專家創業家決策邏輯——引文含原始頁碼，並逐一對照孔明的戰役。"
    },
    sections: [
      {
        id: "master",
        heading: { en: "The thinker", zh: "大師是誰" },
        blocks: [
          { type: "p", text: {
            en: "Saras D. Sarasvathy earned her PhD at Carnegie Mellon under Herbert Simon — the 1978 Nobel laureate behind bounded rationality. She was at the University of Washington when the theory was published, and is now Professor Emerita at UVA's Darden School of Business.",
            zh: "Saras D. Sarasvathy 在卡內基美隆大學取得博士學位，指導教授是 1978 年諾貝爾經濟學獎得主、有限理性之父 Herbert Simon。發表理論時任職華盛頓大學，現為維吉尼亞大學 Darden 商學院榮譽退休教授。"
          } },
          { type: "p", text: {
            en: "Two source texts: the 2001 paper 'Causation and Effectuation' in Academy of Management Review 26(2), pp. 243–263, and the 2008 book Effectuation: Elements of Entrepreneurial Expertise (Edward Elgar).",
            zh: "兩件原典：2001 年論文〈Causation and Effectuation〉（Academy of Management Review 26(2), pp. 243–263）與 2008 年專書《Effectuation: Elements of Entrepreneurial Expertise》（Edward Elgar）。"
          } }
        ]
      },
      {
        id: "research",
        heading: { en: "How the theory was built", zh: "理論怎麼來的" },
        blocks: [
          { type: "ul", items: {
            en: [
              "Sample: 27 expert entrepreneurs (a common retelling says 30 — that is wrong)",
              "Criteria: 15+ years of experience, multiple ventures including failures, at least one company taken public",
              "Company scale: market cap between $250M and $6.5B (market cap, not revenue)",
              "Method: think-aloud protocol over a 17-page problem set of 10 typical startup decisions"
            ],
            zh: [
              "樣本：27 位專家創業家（常見誤傳為 30 位——是錯的）",
              "條件：15 年以上經驗、創辦多家公司含失敗、至少帶一家上市",
              "公司規模：市值 2.5 億至 65 億美元（是市值，不是年營收）",
              "方法：放聲思考——對一份 17 頁、含 10 個典型創業決策的問題集邊解邊說"
            ]
          } },
          { type: "note", icon: "verified", text: {
            en: "Key stat, verified at the source: '65% of the respondents used effectual logic 75% of the time.' It comes from the empirical study (2008 book / effectuation.org) — the 2001 paper itself is purely theoretical.",
            zh: "已向來源驗證的關鍵統計：「65% 的受訪者有 75% 的時間採用效果邏輯」。它出自實證研究（2008 專書／effectuation.org）——2001 年論文本身是純理論。"
          } }
        ]
      },
      {
        id: "definitions",
        heading: { en: "Core definitions (with page numbers)", zh: "核心定義（含頁碼）" },
        blocks: [
          { type: "quote", text: {
            en: "\"Causation processes take a particular effect as given and focus on selecting between means to create that effect. Effectuation processes take a set of means as given and focus on selecting between possible effects that can be created with that set of means.\" — p. 245",
            zh: "「因果歷程把『目標』視為既定，在各種手段之間選擇；效果歷程把『手段』視為既定，在這組手段能創造的各種可能結果之間選擇。」——原文第 245 頁"
          } },
          { type: "quote", text: {
            en: "\"Causation rests on a logic of prediction, effectuation on the logic of control.\" — abstract, p. 243. And on p. 252: \"To the extent that we can control the future, we do not need to predict it.\"",
            zh: "「因果邏輯建立在預測之上，效果邏輯建立在控制之上。」——摘要，第 243 頁。以及第 252 頁：「只要我們能控制未來，就不需要預測它。」"
          } },
          { type: "p", text: {
            en: "The chef metaphor (p. 245): causal cooking picks the menu first, then shops; effectual cooking opens the cupboards and improvises. The 'Curry in a Hurry' thought experiment (pp. 245–247) adds the punchline: whoever first buys from the effectual restaurateur becomes, by definition, her first target customer.",
            zh: "廚師比喻（p.245）：因果做菜先定菜單再採買；效果做菜翻櫥櫃即興。「Curry in a Hurry」思想實驗（pp.245–247）補上點睛之句：誰第一個向效果型創業者買東西，誰就依定義成為她的第一個目標客戶。"
          } }
        ]
      },
      {
        id: "principles",
        heading: { en: "The five principles, mapped", zh: "五大原則逐一對照" },
        blocks: [
          { type: "note", icon: "history_edu", text: {
            en: "Correcting a widespread error: the 2001 paper names FOUR principles — affordable loss, strategic alliances, exploitation of contingencies, and controlling the unpredictable future (i.e., the future pilot principle). Bird-in-hand was the unnamed 'given means' starting point. The five mnemonic names (Bird-in-Hand, Affordable Loss, Crazy Quilt, Lemonade, Pilot-in-the-Plane) crystallized after the 2008 book.",
            zh: "更正一個流傳很廣的錯誤：2001 年論文具名的是四項原則——可承受損失、策略聯盟、善用意外、控制不可預測的未來（即後來的飛行員原則）。手中鳥當年只是未具名的「既有手段」起點。五個助記名稱是 2008 年專書之後才定型的。"
          } },
          { type: "h3", text: { en: "① Bird-in-Hand — start with your means", zh: "① 手中鳥——從既有手段出發" } },
          { type: "p", text: {
            en: "Who I am (a strategist who, by the histories, also mastered music), what I know (two millennia of tactics, 'human nature never changes'), whom I know (Eiko, Kobayashi). Kongming never had a 'make a superstar' master plan; the goals emerged — club, festival, label, world stage.",
            zh: "我是誰（正史記載也精通音律的軍師）、我會什麼（兩千年兵法＋「人性兩千年不變」）、我認識誰（英子、小林）。孔明從來沒有「打造巨星」的總體規劃；目標是浮現的——夜店、音樂祭、廠牌、世界舞台。"
          } },
          { type: "h3", text: { en: "② Affordable Loss — size bets by the downside", zh: "② 可承受損失——用下檔風險決定賭注" } },
          { type: "p", text: {
            en: "The maze costs nothing if it fails; the rap battle risks only face. Contrast Maezono, who asks 'how much money buys first place?'. The horse-racing arc is the honest boundary case — see the Stratagem Codex.",
            zh: "迷宮失敗了毫無成本；rap battle 只賭面子。對照前園的「砸多少錢能買到第一」。賽馬篇是誠實的邊界個案——見計謀對照頁。"
          } },
          { type: "h3", text: { en: "③ Crazy Quilt — partners over competitor analysis", zh: "③ 拼布——夥伴優先於競爭分析" } },
          { type: "p", text: {
            en: "Every duel expands the alliance: KABE self-selects in; the beaten band gets throat medicine and friendship; the rival group is saved along with its producer; the ghostwriters are signed. Fourth Kingdom itself is a quilt of commitments — founded by Kongming, with Eiko as a signed artist, not the owner.",
            zh: "每場對決都在擴大同盟：KABE 自選加入；被擊敗的樂團收到喉藥與友誼；對手團連同製作人一起被拯救；影武者被簽下。Fourth Kingdom 本身就是承諾縫成的拼布——孔明創設，英子是旗下藝人、不是老闆。"
          } },
          { type: "h3", text: { en: "④ Lemonade — surprises are ingredients", zh: "④ 檸檬水——意外是食材" } },
          { type: "p", text: {
            en: "Kongming himself is a lemon — a man dropped two millennia out of place — squeezed into lemonade within one episode. The rigged slot, the worst booth, the enemy's paid campaign: each becomes his material. Caveat: mature effectuation also knows when to stop the bleeding instead of squeezing.",
            zh: "孔明本人就是一顆檸檬——被丟到兩千年後的異鄉人——一集之內榨成檸檬水。被設計的時段、最爛的攤位、敵人的付費活動，全變成他的材料。警語：成熟的效果邏輯也知道何時該止血而非硬榨。"
          } },
          { type: "h3", text: { en: "⑤ Pilot-in-the-Plane — make the future, don't forecast it", zh: "⑤ 飛行員——未來用做的，不用猜的" } },
          { type: "p", text: {
            en: "Permits laid in advance, locations chosen, informants planted, timing controlled. And the single long-term bet rides on the one asset that responds to effort: Eiko's singing. Marketing spikes are uncontrollable weather; product quality is a controllable climb.",
            zh: "先鋪好的許可證、選定的地點、安插的情報員、掐準的時機。而唯一的長期押注，放在唯一會回應努力的資產上：英子的歌。行銷聲量是控制不了的天氣，產品力是爬得上去的山。"
          } }
        ]
      },
      {
        id: "duel",
        heading: { en: "The built-in control group", zh: "劇本自帶的對照組" },
        blocks: [
          { type: "table",
            columns: [ { en: "Dimension", zh: "面向" }, { en: "Karasawa / Maezono (causal)", zh: "唐澤／前園（因果）" }, { en: "Kongming / Eiko (effectual)", zh: "孔明／英子（效果）" } ],
            rows: [
              [ { en: "Starting point", zh: "起點" }, { en: "A preset goal; 'what does the market want?'", zh: "預設目標；「市場要什麼？」" }, { en: "Means at hand; goals emerge en route", zh: "既有手段；目標邊走邊長" } ],
              [ { en: "Decision rule", zh: "決策基準" }, { en: "Maximize expected return", zh: "預期報酬最大化" }, { en: "Cap the affordable loss", zh: "可承受損失封頂" } ],
              [ { en: "People", zh: "對人" }, { en: "Control and exploit; artists as pieces", zh: "控制與剝削；藝人是棋子" }, { en: "Co-create; people self-select in", zh: "共創；人自選加入" } ],
              [ { en: "Surprises", zh: "對意外" }, { en: "Plan them away", zh: "用規劃消滅" }, { en: "Convert them into fuel", zh: "轉化成燃料" } ],
              [ { en: "The future", zh: "對未來" }, { en: "Predict and cater", zh: "預測並迎合" }, { en: "Shape by action", zh: "用行動塑造" } ]
            ]
          },
          { type: "p", text: {
            en: "Sarasvathy never says causation is wrong — the two logics are complements. Karasawa's approach genuinely made AZALEA popular; his failure was using ONLY that logic, at the cost of his artists' authenticity. Maezono, all-causal even at the grand-strategy level, collapses the moment the board flips.",
            zh: "Sarasvathy 從未說因果邏輯是錯的——兩者互補。唐澤的做法確實讓 AZALEA 爆紅；他的錯誤是「只用」這一套，且以藝人的真實性為代價。前園連大戰略層都全因果，棋盤一翻就毫無適應力。"
          } }
        ]
      },
      {
        id: "honest",
        heading: { en: "An honest tension: Kongming predicts too well", zh: "誠實的張力：孔明太會預測了" },
        blocks: [
          { type: "p", text: {
            en: "Strict effectuation renounces prediction, yet the fiction paints Kongming as a near-omniscient oracle — critics called one late-season scheme 'stealthy, but not quite earned' and even 'cheap'. The reconciliation: strategic layer effectual (no blueprint, emergent goals), tactical layer causal (each battle meticulously reverse-engineered). The takeaway is not which camp Kongming belongs to — it is that he switches.",
            zh: "嚴格的效果邏輯放棄預測，但娛樂作品把孔明畫成近乎全知的神算——有劇評直言某後期計謀「手法隱密但說服力不足」甚至「有點廉價」。調和方式：戰略層效果邏輯（無藍圖、目標浮現），戰術層因果邏輯（每場戰役縝密反推）。結論不是孔明屬於哪一派，而是他會切換。"
          } },
          { type: "note", icon: "warning", text: {
            en: "And remember: this is an interpretive lens on fiction, not empirical evidence for the theory. The author never claimed to write entrepreneurship science.",
            zh: "也請記得：這是對虛構作品的詮釋透鏡，不是理論有效性的實證。原作者從未宣稱在寫創業學。"
          } }
        ]
      },
      {
        id: "debate",
        heading: { en: "The academic debate (added context)", zh: "學術批評與延伸（補充脈絡）" },
        blocks: [
          { type: "ul", items: {
            en: [
              "The major critique: Arend, Sarooghi & Burkemper, 'Effectuation as Ineffectual?', AMR 40(4), 2015 — answered by Read & Sarasvathy in AMR, with a further reply in 2016",
              "Complementarity evidence: a 2024 PLOS ONE fsQCA study of 344 SMEs found neither logic alone suffices — configurations of both win",
              "Literature review: Perry, Chandler & Markova, Entrepreneurship Theory and Practice 36(4), 2012",
              "Neighboring theories: Knightian uncertainty (1921), entrepreneurial bricolage (Baker & Nelson 2005), organizational improvisation (Moorman & Miner 1998)"
            ],
            zh: [
              "主要批評：Arend, Sarooghi & Burkemper〈Effectuation as Ineffectual?〉，AMR 40(4), 2015——Read 與 Sarasvathy 於 AMR 回應，2016 年再有反覆",
              "互補證據：2024 年 PLOS ONE 以 fsQCA 分析 344 家中小企業——單用任一邏輯都不夠，組合並用才贏",
              "文獻回顧：Perry, Chandler & Markova，ETP 36(4), 2012",
              "鄰近理論：奈特不確定性（1921）、創業拼裝（Baker & Nelson 2005）、組織即興（Moorman & Miner 1998）"
            ]
          } }
        ]
      },
      {
        id: "practice",
        heading: { en: "Using it (without the deceit)", zh: "實務上手（別學欺敵）" },
        blocks: [
          { type: "ul", items: {
            en: [
              "Inventory your bird-in-hand: three lists — who I am, what I know, whom I know; ask what these can build, not what you wish you had",
              "Set four loss caps separately: money, time, relationships, reputation — bet only within them",
              "Triage surprises: convert, contain, or exit — not every lemon deserves squeezing",
              "Quilting is honest pre-commitment, not manipulation: Kongming's fake QR codes are thrilling fiction and legal trouble in reality",
              "Know the boundary: in mature, predictable, well-resourced domains, causal planning is the right tool — Sarasvathy herself says so"
            ],
            zh: [
              "盤點手中鳥：三張清單——我是誰、我會什麼、我認識誰；問這些能拼出什麼，而不是幻想該有什麼",
              "四種損失上限分開設：金錢、時間、關係、聲譽——只在上限內下注",
              "意外三分法：轉化、控制、退出——不是每顆檸檬都值得榨",
              "拼布是真誠的事前承諾，不是操縱：孔明的假 QR code 在故事裡是爽點，在現實裡是法律問題",
              "認清邊界：在成熟、可預測、資源充足的領域，因果規劃才是對的工具——Sarasvathy 自己也這麼說"
            ]
          } }
        ]
      }
    ]
  },

  /* =================================================== marketing ======= */
  {
    slug: "marketing",
    layout: "article",
    icon: "campaign",
    title: { en: "Marketing Theories", zh: "行銷理論深論" },
    subtitle: {
      en: "The marketing science behind each stratagem — with the original thinkers, verified sources, and where the attribution is genuinely messy.",
      zh: "每一計背後的行銷學——原創者、經查證的出處，以及哪些歸屬其實是一筆爛帳。"
    },
    sections: [
      {
        id: "stp",
        heading: { en: "STP — segment, target, position", zh: "STP——區隔、目標、定位" },
        blocks: [
          { type: "p", text: {
            en: "Sources, precisely: market segmentation begins with Wendell R. Smith (Journal of Marketing 21(1), 1956, pp. 3–8); 'positioning' belongs to Jack Trout (1969) and Al Ries; Philip Kotler is the great systematizer who fused them into the three-step doctrine via Marketing Management (1967 onward). Calling STP simply 'Kotler's' is the common oversimplification.",
            zh: "出處精確版：市場區隔始於 Wendell R. Smith（Journal of Marketing 21(1), 1956, pp. 3–8）；「定位」是 Jack Trout（1969）與 Al Ries 的原創；Kotler 是把三者熔成三步驟教義的統整者（1967 年起的《行銷管理》）。把 STP 直接說成「Kotler 的」是常見的過度簡化。"
          } },
          { type: "p", text: {
            en: "In the manga: early Eiko's problem is not talent but the absence of a position — a cover singer lost in Shibuya's noise. Kongming segments the audience ('people seeking real emotional resonance in live houses'), targets them, and positions Eiko as the original voice of dreams and struggle, crystallized in DREAMER. Note: this STP mapping is our reasoned extension, not a published analysis.",
            zh: "漫畫對照：早期英子的問題不是才華，是沒有定位——澀谷噪音中被淹沒的翻唱歌手。孔明區隔出「在 live house 尋找真實共鳴的人」、鎖定他們，把英子定位成唱出夢想與掙扎的原創聲音，結晶就是〈DREAMER〉。註：此 STP 對照屬本站合理推演，沒有先行文獻。"
          } }
        ]
      },
      {
        id: "mix",
        heading: { en: "4P / 7P — the marketing mix", zh: "4P／7P——行銷組合" },
        blocks: [
          { type: "p", text: {
            en: "The term 'marketing mix' is Neil Borden's (1953 AMA address, 1964 article, inspired by Culliton's 1948 'mixer of ingredients'); E. Jerome McCarthy compressed it into the 4Ps in Basic Marketing (1960); Booms & Bitner added People, Process, Physical Evidence for services (1981, in the AMA's Marketing of Services, pp. 47–51).",
            zh: "「行銷組合」一詞是 Neil Borden 的（1953 年 AMA 演說、1964 年文章，靈感來自 Culliton 1948 的「成分調配者」）；McCarthy 在《Basic Marketing》(1960) 把它壓縮成 4P；Booms & Bitner (1981) 為服務業加上人員、流程、實體證據（收錄於 AMA《Marketing of Services》pp. 47–51）。"
          } },
          { type: "p", text: {
            en: "The Yoyogi comeback is a full-mix redesign, not a promotion stunt: the show itself is rebuilt (Product), the worst booth becomes an intake funnel (Place), staff choreography and timing carry the experience (People/Process). Diagnosing marketing failure as 'not enough ads' usually misses a misaligned mix.",
            zh: "代々木逆轉是整個組合的重設，不是宣傳特技：表演本身被重造（產品）、爛攤位變成導流入口（通路）、人員編排與時機承載體驗（人員／流程）。把行銷失敗診斷成「廣告不夠」，通常是漏看了沒對齊的組合。"
          } }
        ]
      },
      {
        id: "aida",
        heading: { en: "AIDA and the funnel — with its messy history", zh: "AIDA 與漏斗——連同它的爛帳歷史" },
        blocks: [
          { type: "p", text: {
            en: "Tradition credits E. St. Elmo Lewis (circa 1898), but the attribution is genuinely contested: the three-step formula first appeared anonymously in Printers' Ink (Feb 1898); the acronym AIDA is C. P. Russell's (1921); recent scholarship argues for Dukesmith and Sheldon (~1903). The funnel drawing is Townsend's (Bond Salesmanship, 1924).",
            zh: "傳統歸給 Lewis（約 1898），但歸屬確實有爭議：三步公式最早匿名出現在 1898 年 2 月的《Printers' Ink》；AIDA 縮寫是 Russell（1921）；近年考證主張 Dukesmith 與 Sheldon（約 1903）。漏斗畫法是 Townsend（《Bond Salesmanship》1924）。"
          } },
          { type: "quote", text: {
            en: "The maze only wins Attention. Interest, Desire and Action belong to the song. — the series' funnel lesson in one line",
            zh: "迷宮只贏得注意力；興趣、慾望、行動屬於那首歌。——整部作品的漏斗教訓一句話"
          } },
          { type: "note", icon: "info", text: {
            en: "A related aphorism — 'marketing gets them in the door, product keeps them' — circulates widely but has NO traceable authoritative source; our fact-check filed it as unverifiable. Quote the idea, not a fake author.",
            zh: "相關金句「行銷帶進門、產品留住人」流傳很廣但查無權威出處；查證報告將其列為無法查證。可以引用概念，別安一個假作者。"
          } }
        ]
      },
      {
        id: "blueocean",
        heading: { en: "Blue Ocean Strategy", zh: "藍海策略" },
        blocks: [
          { type: "p", text: {
            en: "W. Chan Kim & Renée Mauborgne (INSEAD): value innovation first in HBR 1997; the Blue Ocean article in HBR October 2004; the book in 2005; the ERRC grid (eliminate–reduce–raise–create) as its working tool.",
            zh: "Kim 與 Mauborgne（INSEAD）：價值創新首見 1997 HBR；藍海文章刊於 2004 年 10 月 HBR；專書 2005 年；ERRC（消除—降低—提升—創造）是實作工具。"
          } },
          { type: "p", text: {
            en: "The Yoyogi booth was a red ocean — a 2022 marketing-blog analysis of the series put it as 'she must compete in a sea of blood.' Kongming refuses the price war for attention and creates an uncontested space: a differentiated show that makes the location irrelevant. This is one of the mappings WITH published precedent.",
            zh: "代々木的攤位是紅海——2022 年的行銷部落格分析直接寫「她必須在血海中競爭」。孔明拒絕打注意力的價格戰，開出無人競爭的空間：一場讓位置變得無關緊要的差異化演出。這是「有先行文獻」的對照之一。"
          } }
        ]
      },
      {
        id: "guerrilla-viral",
        heading: { en: "Guerrilla, viral, and hijacked traffic", zh: "游擊、病毒式與流量挪用" },
        blocks: [
          { type: "p", text: {
            en: "Guerrilla marketing is Levinson's (1984): creativity and surprise instead of budget. 'Viral marketing' as a term is usually credited to Draper and Jurvetson describing Hotmail's signature-line growth (1997), with Rayport's 1996 'v-marketing' as the competing claim. 'Newsjacking' — injecting yourself into breaking news — is David Meerman Scott's (2011).",
            zh: "游擊行銷是 Levinson 的（1984）：用創意與奇襲代替預算。「病毒式行銷」一詞通說歸 Draper 與 Jurvetson 描述 Hotmail 簽名檔成長術（1997），Rayport 1996 年的「v-marketing」是競爭主張。「借勢劫持」（newsjacking）是 David Meerman Scott 的（2011）。"
          } },
          { type: "p", text: {
            en: "The science behind the likes snowball: Muchnik, Aral & Taylor's randomized experiment (Science 341, 2013, pp. 647–651) — one seeded upvote inflates final scores by about 25%. The 100k-likes arc dramatizes exactly this bias, and Borrowed Arrows drives customer-acquisition cost to zero with the rival's own budget.",
            zh: "讚數雪球的科學：Muchnik、Aral 與 Taylor 的隨機實驗（Science 341, 2013, pp. 647–651）——先種一個讚，最終評分被灌高約 25%。十萬讚篇演的正是這個偏誤，而草船借箭把獲客成本用對手的預算打到零。"
          } }
        ]
      },
      {
        id: "gruen",
        heading: { en: "The Gruen effect", zh: "Gruen 效應" },
        blocks: [
          { type: "p", text: {
            en: "Named for Victor Gruen (1904–1980), architect of the first enclosed shopping mall (Southdale, 1956). The 'Gruen transfer' is the moment a deliberately disorienting layout makes shoppers forget their errand and buy on impulse — a manipulation Gruen himself came to publicly disavow. IKEA's forced path and Costco's buried staples are the standard modern examples.",
            zh: "得名自 Victor Gruen（1904–1980），第一座室內購物中心 Southdale（1956）的建築師。「Gruen 轉移」指刻意迷航的動線讓顧客忘記原本目的、衝動消費的那一刻——Gruen 本人晚年公開反對這種以他為名的操縱。IKEA 的強制動線、Costco 把民生必需品藏最深處是標準現代案例。"
          } },
          { type: "p", text: {
            en: "The Stone Sentinel Maze is a pop-up Gruen build: fog, loops, synchronized staff — until staying to listen is the easiest thing left to do. The comparison to IKEA/Costco floor plans appeared in published fan analysis, so this mapping too has precedent.",
            zh: "石兵八陣就是快閃版 Gruen 工程：煙霧、繞圈、同步移動的工作人員——直到「留下來聽歌」變成最省力的選項。與 IKEA／Costco 動線的類比出自已發表的分析文章，這條對照也有先行出處。"
          } }
        ]
      },
      {
        id: "canvas",
        heading: { en: "The two canvases", zh: "兩張畫布" },
        blocks: [
          { type: "p", text: {
            en: "Osterwalder & Pigneur: the nine-block Business Model Canvas (2010 book; the blocks date to Osterwalder's 2005 PhD thesis) and the Value Proposition Canvas (2014) — customer jobs, pains and gains matched against your relievers and creators.",
            zh: "Osterwalder 與 Pigneur：九宮格商業模式畫布（2010 年成書；九格源自 2005 年博士論文）與價值主張畫布（2014）——顧客的任務、痛點、收益，對上你的解痛方案與收益創造。"
          } },
          { type: "p", text: {
            en: "Eiko's value proposition is emotional shelter — a voice for the hurt and the lost — not vocal technique. Watch her canvas fill in across the series: club → festival → solo concert → movie theme → TV → overseas; each arc adds segments, channels, revenue streams and partners.",
            zh: "英子的價值主張是情緒的容身處——替受傷與迷惘的人發聲——不是唱功。看她的畫布隨劇情逐格填滿：夜店 → 音樂祭 → 個唱 → 電影主題曲 → 電視 → 海外；每條故事弧都在增加客群、通路、收入流與夥伴。"
          } }
        ]
      }
    ]
  },
  /* ==================================================== strategy ======= */
  {
    slug: "strategy",
    layout: "article",
    icon: "chess",
    title: { en: "Strategy & Competition", zh: "策略與競爭理論深論" },
    subtitle: {
      en: "Industry structure, fighting bigger opponents, and the games beneath the games — Porter to Nash, mapped to the story.",
      zh: "產業結構、以小搏大、賽局中的賽局——從波特到 Nash，逐一對照劇情。"
    },
    sections: [
      {
        id: "porter",
        heading: { en: "Porter: five forces & generic strategies", zh: "波特：五力與通用戰略" },
        blocks: [
          { type: "p", text: {
            en: "Michael Porter's 'How Competitive Forces Shape Strategy' (HBR 57(2), 1979, pp. 137–145 — his first HBR piece) and Competitive Strategy (1980). The manga stages all five forces: incumbent acts (Mia, AZALEA), entry barriers (no-name singers cannot reach big festivals), buyer power (scarce audience attention), supplier power (three label giants own the channels), substitutes (every other entertainment).",
            zh: "波特〈How Competitive Forces Shape Strategy〉（HBR 57(2), 1979, pp. 137–145——他的第一篇 HBR 文章）與《Competitive Strategy》(1980)。漫畫把五力全演了出來：既有競爭者（Mia、AZALEA）、進入障礙（無名歌手上不了大型音樂祭）、買方議價力（稀缺的觀眾注意力）、供應商議價力（三大廠牌掌握通路）、替代品（所有其他娛樂）。"
          } },
          { type: "p", text: {
            en: "Generic strategies (1980; the focus variants detailed in 1985's Competitive Advantage): Eiko runs focused differentiation — soulful authenticity for a niche; Karasawa-era AZALEA runs the standardized mass-market formula. Their collision is the two strategies staged as drama. The villain's '¥5 trillion ad agency' is an in-story exaggeration — the real-world analogue earns about ¥1.4T — a reminder to never quote fiction's numbers as facts.",
            zh: "通用戰略（1980；集中戰略的細分見 1985《Competitive Advantage》）：英子走集中差異化——為小眾提供靈魂共鳴；唐澤時期的 AZALEA 走標準化大眾公式。兩者對撞就是理論的舞台劇。反派背後「年營收 5 兆的廣告代理商」是作品內誇飾——現實對照對象約 1.4 兆——提醒：永遠別把虛構數字當事實引用。"
          } }
        ]
      },
      {
        id: "rbv",
        heading: { en: "Resource-based view: the uncopyable bundle", zh: "資源基礎觀點：無法複製的組合" },
        blocks: [
          { type: "p", text: {
            en: "Jay Barney, 'Firm Resources and Sustained Competitive Advantage' (Journal of Management 17(1), 1991, pp. 99–120): advantage endures when resources are Valuable, Rare, Inimitable, Non-substitutable — later reworked as VRIO (1995 article, 1997 textbook).",
            zh: "Jay Barney〈Firm Resources and Sustained Competitive Advantage〉（Journal of Management 17(1), 1991, pp. 99–120）：資源若有價值、稀有、難模仿、難替代（VRIN），優勢才持久——後演變為 VRIO（1995 文章、1997 教科書）。"
          } },
          { type: "p", text: {
            en: "Piece by piece, Team Eiko is replaceable: good voices exist, rappers exist, venues exist. The BUNDLE is not: Eiko's emotional penetration + Kongming's integration + Kobayashi's ground + KABE's explosiveness — causal ambiguity and social complexity, the exact mechanisms Barney says block imitation.",
            zh: "拆開看，英子團隊每個零件都可替代：好歌喉不缺、饒舌高手不缺、場地不缺。無法替代的是組合：英子的情感穿透力＋孔明的整合＋小林的地盤＋KABE 的爆發力——因果模糊與社會複雜性，正是 Barney 說的模仿屏障。"
          } }
        ]
      },
      {
        id: "disruption",
        heading: { en: "Disruptive innovation: Fourth Kingdom", zh: "破壞式創新：Fourth Kingdom" },
        blocks: [
          { type: "p", text: {
            en: "Bower & Christensen, 'Disruptive Technologies: Catching the Wave' (HBR 73(1), 1995) and The Innovator's Dilemma (1997): disruption by definition starts from low-end or new-market footholds the incumbents rationally ignore.",
            zh: "Bower 與 Christensen〈Disruptive Technologies: Catching the Wave〉（HBR 73(1), 1995）與《創新的兩難》(1997)：破壞式創新依定義從低階或新市場立足點出發——巨頭理性地忽略的地方。"
          } },
          { type: "p", text: {
            en: "Fourth Kingdom enters as a nobody indie label, then brokers the three-major crossover (manga ch. 64–65, invoking Sun Tzu's genuine line 'all warfare is based on deception') — removing the boundary the giants took for granted and rewriting the value chain from the edge.",
            zh: "Fourth Kingdom 以無名獨立廠牌入場，然後促成三大廠牌聯名（漫畫第 64–65 話，引用真正出自孫子的「兵者，詭道也」）——拆掉巨頭視為理所當然的邊界，從邊緣改寫價值鏈。"
          } }
        ]
      },
      {
        id: "judo",
        heading: { en: "Judo strategy (authors corrected)", zh: "柔道戰略（作者已修正）" },
        blocks: [
          { type: "p", text: {
            en: "The 1999 HBR article 'Judo Strategy: The Competitive Dynamics of Internet Time' is by Yoffie & Cusumano (HBR 77(1), pp. 70–81); the 2001 book Judo Strategy is by Yoffie & KWAK — a mis-citation our fact-check caught and this site corrects. Principles: movement, balance, leverage — turn the opponent's weight into your throw.",
            zh: "1999 年 HBR 文章〈Judo Strategy〉是 Yoffie 與 Cusumano 合著（HBR 77(1), pp. 70–81）；2001 年專書《Judo Strategy》作者是 Yoffie 與 Kwak——這是查證抓到、本站修正的引用錯誤。原則：移動、平衡、槓桿——把對手的體重變成你的摔技。"
          } },
          { type: "p", text: {
            en: "Borrowed Arrows is the perfect throw: every yen AZALEA spends gathering a crowd increases the mass redirected by one fake QR code. The rival's marketing asset becomes their liability, at zero acquisition cost to Eiko.",
            zh: "草船借箭是完美的一摔：AZALEA 每多花一塊錢聚眾，被一張假 QR code 導走的質量就更大。對手的行銷資產變成負債，英子的獲客成本是零。"
          } }
        ]
      },
      {
        id: "pmf-network",
        heading: { en: "PMF & network effects", zh: "PMF 與網路效應" },
        blocks: [
          { type: "p", text: {
            en: "Product-market fit: coined by Andy Rachleff, popularized by Marc Andreessen's 2007 essay 'The only thing that matters' (which credits Rachleff explicitly). Eiko's search — street practice, Nanami's mentoring, the birth of DREAMER — is a PMF hunt; every Kongming scheme merely buys time and samples until fit arrives.",
            zh: "PMF：Andy Rachleff 命名，Marc Andreessen 2007 年名文〈The only thing that matters〉普及（文中明確歸功 Rachleff）。英子的尋找——街頭修煉、七海點撥、〈DREAMER〉誕生——就是 PMF 狩獵；孔明的每個計謀只是在適配到來前爭取時間與樣本。"
          } },
          { type: "p", text: {
            en: "Network effects: Katz & Shapiro's 'Network Externalities, Competition, and Compatibility' (AER 75(3), 1985, pp. 424–440), popularly compressed into Metcalfe's law. The 100k-likes race makes the loop visible — likes beget visibility beget likes — and the randomized-experiment evidence (Science, 2013) says the snowball is real.",
            zh: "網路效應：Katz 與 Shapiro〈Network Externalities, Competition, and Compatibility〉（AER 75(3), 1985, pp. 424–440），通俗版被壓縮成梅特卡夫定律。十萬讚競賽把回路可視化——讚帶來曝光、曝光帶來讚——2013 年 Science 的隨機實驗證明雪球是真的。"
          } }
        ]
      },
      {
        id: "games",
        heading: { en: "Game theory: the Empty Fort and the like-lottery", zh: "賽局理論：空城計與按讚抽獎" },
        blocks: [
          { type: "p", text: {
            en: "Foundations: von Neumann & Morgenstern (1944), Nash equilibrium (1950), the prisoner's dilemma (Flood & Dresher at RAND, 1950; named by Tucker), and Akerlof's information asymmetry ('The Market for Lemons', QJE 84(3), 1970).",
            zh: "基礎：von Neumann 與 Morgenstern（1944）、Nash 均衡（1950）、囚徒困境（RAND 的 Flood 與 Dresher，1950；Tucker 命名）、Akerlof 的資訊不對稱（檸檬市場，QJE 84(3), 1970）。"
          } },
          { type: "p", text: {
            en: "The classical Empty Fort ruse (Romance ch. 95 — historically dubious; Pei Songzhi refuted it, and Sima Yi was verifiably elsewhere) works by exploiting the opponent's model of you. The manga's versions: fake breakdown signals that reshape JET JACKET's timing, and the discord play — 'sharing lowers your own odds of the ¥1M' — that turns the rival's fan army into a prisoner's dilemma against itself.",
            zh: "古典的空城計（演義第 95 回——史實存疑；裴松之已駁斥，且司馬懿當時可考證地在別處）靠的是利用對手心中「你的模型」。漫畫版：假故障訊號改寫 JET JACKET 的出手時機；離間之計——「擴散會降低你自己中百萬的機率」——讓對手的粉絲大軍陷入自我瓦解的囚徒困境。"
          } }
        ]
      },
      {
        id: "swot-okr",
        heading: { en: "SWOT (contested origins) & OKR", zh: "SWOT（起源爭議）與 OKR" },
        blocks: [
          { type: "p", text: {
            en: "SWOT's origin has NO reliable single answer: the Humphrey/Stanford attribution rests on weak evidence; the Harvard-course claim was denied in 2017 by the last surviving author; recent archival work (Long Range Planning, 2023) concludes it evolved from multiple 1960s planning practices. Use the tool, skip the origin myth. In-story: early Eiko = strong resonance, zero recognition, a live-scene opportunity, capital-backed threats — and Kongming's first move is amplifying the strength, not patching weaknesses.",
            zh: "SWOT 的起源沒有可靠的單一答案：Humphrey／史丹佛說證據薄弱；哈佛課程說被最後在世作者於 2017 年否認；近年檔案研究（Long Range Planning, 2023）結論是 1960 年代多方規劃實務的演化。工具照用，起源神話別講。劇中：早期英子＝共鳴力強、知名度零、live 生態是機會、資本競品是威脅——孔明的第一步是放大優勢，不是補短板。"
          } },
          { type: "p", text: {
            en: "OKR: Andy Grove's Intel practice (High Output Management, 1983), carried to Google by John Doerr (Measure What Matters, 2018). 'One hundred thousand likes by the deadline' is a flawless specimen — an inspiring objective (Summer Sonia) translated into one measurable, time-boxed key result that drives every downstream decision: recruit KABE, produce DREAMER, work the streets and the feeds.",
            zh: "OKR：Andy Grove 在 Intel 的實務（《High Output Management》1983），John Doerr 帶進 Google（《Measure What Matters》2018）。「期限內十萬讚」是完美標本——振奮人心的目標（Summer Sonia）被翻譯成一個可量測、有時限的關鍵結果，拉動下游所有決策：收 KABE、做〈DREAMER〉、掃街與洗版。"
          } }
        ]
      }
    ]
  },

  /* ====================================================== people ======= */
  {
    slug: "people",
    layout: "article",
    icon: "diversity_3",
    title: { en: "People & Behavior", zh: "組織領導與行為經濟深論" },
    subtitle: {
      en: "How Kongming leads, recruits and negotiates — and the cognitive levers the whole likes-economy pulls. Ends with the ethics footnote the fun tricks deserve.",
      zh: "孔明怎麼帶人、招人、談判——以及整個按讚經濟扳動的認知槓桿。最後附上那些爽招應得的倫理註腳。"
    },
    sections: [
      {
        id: "safety",
        heading: { en: "Psychological safety: the KABE arc", zh: "心理安全：KABE 篇" },
        blocks: [
          { type: "p", text: {
            en: "Amy Edmondson defined psychological safety as a team's shared belief that interpersonal risk-taking is safe (Administrative Science Quarterly 44(2), 1999, pp. 350–383). Google's Project Aristotle (2012–2015, published Nov 2015) ranked it the #1 factor of team effectiveness — above reliability, structure, meaning and impact.",
            zh: "Edmondson 把心理安全定義為「團隊共同相信人際冒險是安全的」（ASQ 44(2), 1999, pp. 350–383）。Google 的 Project Aristotle（2012–2015，2015 年 11 月公布）把它列為高效團隊第一因素——排在可靠度、結構、意義與影響力之前。"
          } },
          { type: "p", text: {
            en: "Kongming's handling of KABE is the doctrine in action: neither coddling nor coercion, but a high-tension, survivable challenge (the rap battle) in which failure would not be humiliation — and KABE reclaims his own ability. High standards and high safety are not opposites; they are the recipe.",
            zh: "孔明對 KABE 的處理就是教義的實演：不放任、不情勒，而是一個高張力但可承受失敗的挑戰（rap battle）——輸了也不會被羞辱——讓 KABE 自己把能力找回來。高標準與高安全感不是對立，是配方。"
          } }
        ]
      },
      {
        id: "recruiting",
        heading: { en: "Employer branding & burnout", zh: "雇主品牌與職業倦怠" },
        blocks: [
          { type: "p", text: {
            en: "The employer-brand paper is Ambler & Barrow, Journal of Brand Management 4(3), 1996, pp. 185–206 — Ambler is the first author (a citation our fact-check corrected); Barrow coined the term around 1990. EVP — the employee value proposition — is its working core: what you offer talent besides money.",
            zh: "雇主品牌論文是 Ambler & Barrow（Journal of Brand Management 4(3), 1996, pp. 185–206）——Ambler 是第一作者（查證修正過的引用）；「雇主品牌」一詞由 Barrow 約 1990 年提出。EVP（員工價值主張）是其實作核心：除了錢，你還能給人才什麼。"
          } },
          { type: "p", text: {
            en: "Burnout: named by Freudenberger (Journal of Social Issues 30(1), 1974), operationalized by Maslach's MBI (1981) — exhaustion, cynicism, reduced efficacy — and listed by WHO in ICD-11 (2019) as an occupational phenomenon, explicitly NOT a disease. KABE's three championships → stress ulcers → hiding is the textbook arc; Kongming's cure is not rest but restored meaning, then a zero-yen recruitment through respect earned in KABE's own arena.",
            zh: "職業倦怠：Freudenberger 命名（JSI 30(1), 1974），Maslach 的 MBI 量表操作化（1981）——耗竭、去人格化、成就感降低——WHO 於 ICD-11（2019）列為職業現象、明確不是疾病。KABE 的三連霸 → 胃潰瘍 → 退隱是教科書弧線；孔明的藥方不是休息而是重建意義，然後用「在對方主場贏得的尊重」完成零日圓招募。"
          } }
        ]
      },
      {
        id: "history-hr",
        heading: { en: "The Three Kingdoms HR file (history checked)", zh: "三國人資檔案（史實已查）" },
        blocks: [
          { type: "ul", items: {
            en: [
              "Succession: Zhuge Liang's designated POLITICAL successors were Jiang Wan, then Fei Yi; Jiang Wei inherited the military cause — two different pipelines, worth distinguishing when citing 'succession planning'",
              "Key-person risk & Wei Yan: history only records a contingency order ('if Yan disobeys, the army moves without him'); the 'rebellious bone' is fiction from Romance ch. 53",
              "The Chu Shi Biao (227 AD, preserved in the Records) reads remarkably like a mission charter written before a founder's expected exit — this analogy has solid historical footing",
              "The wooden-ox logistics devices are real (Records: wooden oxen 231, flowing horses 234); their mechanism remains unresolved"
            ],
            zh: [
              "繼任：諸葛亮指定的政務接班人是蔣琬、其次費禕；姜維繼承的是軍事志業——兩條不同的管線，引用「繼任者計畫」時值得區分",
              "關鍵人風險與魏延：正史只記載一道應變指令（「若延或不從命，軍便自發」）；「反骨」是演義第 53 回的虛構",
              "《出師表》（227 年，收於《三國志》本傳）讀起來就像創辦人預期退場前寫下的使命憲章——這個類比有紮實的史實根據",
              "木牛流馬是真的（正史：231 年木牛、234 年流馬）；具體構造至今無定論"
            ]
          } }
        ]
      },
      {
        id: "negotiation",
        heading: { en: "BATNA & decision analysis", zh: "BATNA 與決策分析" },
        blocks: [
          { type: "p", text: {
            en: "BATNA — the best alternative to a negotiated agreement — is from Fisher & Ury's Getting to Yes (1981, Harvard Negotiation Project; Patton joined the 1991 edition). Kongming never sits down without a built alternative: the wager with Eiko's mother, the festival-or-likes choice, the label brokering. Power at the table is the strength of your walk-away.",
            zh: "BATNA——談判破裂時的最佳替代方案——出自 Fisher 與 Ury 的《Getting to Yes》（1981，哈佛談判專案；Patton 於 1991 年版加入）。孔明從不在沒有替代方案的情況下入座：與翔子的賭約、音樂祭或十萬讚的選擇、廠牌斡旋。桌上的力量等於你退場選項的強度。"
          } },
          { type: "p", text: {
            en: "Decision analysis (Raiffa, 1968): options, chance nodes, outcomes, expected values, sensitivity. The series keeps writing the exercises for you — 'a guaranteed 10,000-person festival, or a shot at Summer Sonia via 100k likes?' is a decision tree waiting to be drawn.",
            zh: "決策分析（Raiffa, 1968）：選項、機率節點、結果、期望值、敏感度。這部作品一直在幫你出題——「保底一萬人的音樂祭，還是賭十萬讚上 Summer Sonia？」就是一棵等著被畫出來的決策樹。"
          } }
        ]
      },
      {
        id: "behavior",
        heading: { en: "The behavioral toolbox", zh: "行為經濟工具箱" },
        blocks: [
          { type: "table",
            columns: [ { en: "Lever", zh: "槓桿" }, { en: "Source (verified)", zh: "出處（已查證）" }, { en: "In the story", zh: "劇中" } ],
            rows: [
              [ { en: "Loss aversion", zh: "損失規避" }, { en: "Kahneman & Tversky, Econometrica 47(2), 1979 (λ≈2.25 is from the 1992 paper)", zh: "Kahneman & Tversky，Econometrica 47(2), 1979（λ≈2.25 出自 1992 論文）" }, { en: "'Not liking = losing a shot at ¥1M'", zh: "「不按讚＝損失中百萬的機會」" } ],
              [ { en: "Framing", zh: "框架效應" }, { en: "Tversky & Kahneman, Science 211, 1981, pp. 453–458", zh: "Tversky & Kahneman，Science 211, 1981, pp. 453–458" }, { en: "Worst booth reframed as ambush; scandal reframed as authenticity", zh: "爛攤位重框成奇襲；醜聞重框成真實性" } ],
              [ { en: "Social proof", zh: "社會認同" }, { en: "Cialdini, Influence (1984); Muchnik et al., Science 341 (2013)", zh: "Cialdini《影響力》(1984)；Muchnik et al.，Science 341（2013）" }, { en: "The entire likes economy", zh: "整個按讚經濟" } ],
              [ { en: "Scarcity", zh: "稀缺性" }, { en: "Worchel, Lee & Adewole, JPSP 32(5), 1975 (the cookie jar)", zh: "Worchel, Lee & Adewole，JPSP 32(5), 1975（餅乾罐實驗）" }, { en: "Limited-time lotteries, one-night shows", zh: "限時抽獎、一夜限定演出" } ],
              [ { en: "Choice architecture", zh: "選擇架構" }, { en: "Thaler & Sunstein, Nudge (2008)", zh: "Thaler & Sunstein《Nudge》(2008)" }, { en: "The maze: nobody forced, options reordered", zh: "迷宮：不強迫任何人，只重排選項" } ],
              [ { en: "Cognitive dissonance", zh: "認知失調" }, { en: "Festinger (1957)", zh: "Festinger（1957）" }, { en: "'My idols were lip-syncing' — and the exit Kongming provides", zh: "「我的偶像在假唱」——以及孔明給的出口" } ],
              [ { en: "Variable rewards", zh: "變動獎勵" }, { en: "Ferster & Skinner (1957); Eyal's Hooked (2014)", zh: "Ferster & Skinner（1957）；Eyal《Hooked》(2014)" }, { en: "The scan-to-maybe-win truck", zh: "掃碼也許中獎的卡車" } ]
            ]
          }
        ]
      },
      {
        id: "ethics",
        heading: { en: "The ethics footnote", zh: "倫理註腳" },
        blocks: [
          { type: "note", icon: "gavel", text: {
            en: "In Kongming's hands these levers often ship as deception — fake malfunctions, fake QR codes, planted agents. Aesthetic in fiction; gray-to-illegal in reality (false signaling, misleading marketing). The teachable core is the problem-structure analysis, never the deceit. And behavioral tricks without real value behind them only buy short spikes — which returns us to the iron law: schemes are the entrance, the product is the retention.",
            zh: "這些槓桿在孔明手上常以欺敵形式出貨——假故障、假 QR code、暗樁。虛構裡是美學，現實裡是灰色到違法（虛假訊號、誤導行銷）。可教的核心是問題結構的拆解，永遠不是欺騙本身。而沒有真實價值支撐的行為技巧只買得到短期波峰——這又回到鐵律：計謀是入口，產品力才是留存。"
          } }
        ]
      }
    ]
  },
  /* ================================================ verification ======= */
  {
    slug: "verification",
    layout: "table",
    icon: "fact_check",
    title: { en: "Fact-Check Report", zh: "查證報告" },
    subtitle: {
      en: "140 claims from the source analyses were independently cross-checked against primary sources — 10 parallel research agents, 229 lookups. This page lists every correction and the most load-bearing confirmations.",
      zh: "原始分析中的 140 條敘述經 10 個平行查證代理、229 次檢索，逐條比對一手來源。本頁列出全部修正與最關鍵的確認。"
    },
    lead: [
      { en: "Verdicts: Confirmed = directly supported by a reliable source · Partly correct = right in outline, wrong in a detail (the note gives the correct version) · Unverifiable = no adequate source found. Zero claims were outright false. Full tables with links live in the repository's docs.",
        zh: "判定標準：確認＝可靠來源直接支持・部分正確＝大方向對但細節有誤（備註欄給出正確版本）・無法查證＝找不到足夠來源。沒有任何一條完全錯誤。含連結的完整表格在 GitHub 倉庫的 docs 目錄。" }
    ],
    tiles: [
      { value: 140, label: { en: "Claims checked", zh: "查證敘述" }, tone: "plain" },
      { value: 114, label: { en: "Confirmed", zh: "確認" }, tone: "ok" },
      { value: 22,  label: { en: "Partly correct", zh: "部分正確" }, tone: "warn" },
      { value: 4,   label: { en: "Unverifiable", zh: "無法查證" }, tone: "bad" }
    ],
    columns: [
      { key: "domain",  label: { en: "Domain", zh: "領域" }, filter: true },
      { key: "claim",   label: { en: "Claim", zh: "敘述" } },
      { key: "verdict", label: { en: "Verdict", zh: "判定" }, type: "tag" },
      { key: "note",    label: { en: "Correction / note", zh: "修正／備註" } }
    ],
    rows: [
      { domain: { en: "Publication", zh: "出版改編" }, claim: { en: "Serialized on Comic DAYS from 2019-12-31; moved to Weekly Young Magazine in 2021 (#52)", zh: "2019-12-31 起 Comic DAYS 連載；2021 年第 52 號移籍週刊 Young Magazine" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Kodansha & Natalie", zh: "講談社與 Natalie 佐證" } },
      { domain: { en: "Publication", zh: "出版改編" }, claim: { en: "25 volumes by May 2026; vol. 26 due 2026-08-06", zh: "2026-05 共 25 卷；第 26 卷 2026-08-06 發售" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Kodansha product pages", zh: "講談社商品頁直接確認" } },
      { domain: { en: "Publication", zh: "出版改編" }, claim: { en: "Circulation 2.75M (2026) vs 1.6M (2023) — contradiction?", zh: "累計 275 萬（2026）vs 160 萬（2023）矛盾？" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Both true at different dates: 1M (2022) → 1.6M → 2.4M (2025 film) → 2.75M", zh: "皆屬實、時點不同：100 萬（2022）→160→240（2025 電影）→275 萬" } },
      { domain: { en: "Publication", zh: "出版改編" }, claim: { en: "P.A.WORKS anime, 12 eps from 2022-04-05, its first manga adaptation, up to vol. 4 ch. 28", zh: "P.A.WORKS 動畫 12 集、2022-04-05 起、首部漫畫原作、演到第 4 卷 28 話" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Abema streamed from 03-31", zh: "Abema 03-31 先行" } },
      { domain: { en: "Publication", zh: "出版改編" }, claim: { en: "Live-action film released 2025 or 2026?", zh: "真人電影 2025 還是 2026 上映？" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "2025-04-25, 'Paripi Koumei THE MOVIE' (Shochiku)", zh: "2025-04-25，《パリピ孔明 THE MOVIE》（松竹）" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Kobayashi is the bartender of BB Lounge", zh: "小林是 BB Lounge 的酒保" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "He is the OWNER; the bartender is Kongming", zh: "他是老闆；酒保是孔明" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Mia = Mia Iriomote, 100k+ IG followers", zh: "Mia 全名ミア西表、IG 粉絲 10 萬+" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "ja.wikipedia", zh: "日文維基" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Stone Sentinel Maze: manga ch. 4 / anime ep. 2", zh: "石兵八陣：漫畫第 4 話／動畫第 2 集" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Sources that say 'ep. 1' are quoting the live-action drama", zh: "說「第 1 話」的來源指的是日劇版" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Eiko's followers grew 5× (or broke 1,000) after beating Mia", zh: "勝 Mia 後英子粉絲翻五倍／破千" }, verdict: { en: "Unverifiable", zh: "無法查證" }, note: { en: "No reliable source for either figure", zh: "兩種數字皆無可靠來源" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Yoyogi event spans anime eps. 3–4", zh: "代々木橋段橫跨動畫第 3–4 集" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "It is ep. 3; official name is Yoyogi ART Fes; manga ch. 7", zh: "是第 3 集；正名代々木藝術祭；漫畫第 7 話" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Producer named Kondo Tsuyoshi (近藤強)", zh: "製作人名為近藤強" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Correct kanji: 近藤剛", zh: "正確漢字：近藤剛" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Only one artist ever cleared the 100k-likes challenge", zh: "只有一位藝人曾達成十萬讚挑戰" }, verdict: { en: "Unverifiable", zh: "無法查證" }, note: { en: "No source states this setting", zh: "查無此設定敘述" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "KABE's real name is 川邊太人", zh: "KABE 本名川邊太人" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Correct: 河辺太人 — stage name puns on the surname", zh: "正確：河辺太人——藝名取自本姓諧音" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "KABE won three straight 'DRB' (Dope Rap Battle) titles", zh: "KABE 於「DRB（Dope Rap Battle）」三連霸" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "3 titles + stress ulcers confirmed; official pages never expand the contest name — 'Dope Rap Battle' is speculation", zh: "三連霸與胃潰瘍屬實；官方從未展開大會全名——「Dope Rap Battle」是臆測" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Kongming quotes the Han poem 'The departed grow more distant daily' in the rap battle", zh: "孔明在 rap battle 化用《去者日以疏》" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Ep. 6 lyrics, published by the official account", zh: "第 6 集歌詞，官方帳號公開" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Steve Kido written as 木戶; won over via a video-game bet", zh: "Steve Kido 漢字「木戶」；用電玩賭注取得合作" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Official name is katakana only; menma-on-pudding confirmed; the video-game bet is unverifiable (the drama's bet was song quality)", zh: "官方僅片假名；布丁插筍乾屬實；電玩賭注無法查證（日劇版賭的是歌曲品質）" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "Borrowed Arrows: manga ch. 24 / anime ep. 11; ~70k likes", zh: "草船借箭：漫畫第 24 話／動畫第 11 集；一度約 7 萬讚" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Comic DAYS official chapter page", zh: "Comic DAYS 官方章節頁佐證" } },
      { domain: { en: "Story · anime", zh: "動畫劇情" }, claim: { en: "The 100,000th like was pressed by Steve Kido", zh: "第 10 萬個讚由 Steve Kido 按下" }, verdict: { en: "Unverifiable", zh: "無法查證" }, note: { en: "Finale facts otherwise confirmed; this detail lacks a source", zh: "最終回其他細節屬實；此細節缺來源" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Summer Sonia attendance 311 → 43,000", zh: "Summer Sonia 觀眾動員 311 → 43,000" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Quoted verbatim on ja.wikipedia; the festival is a 300k-scale setting", zh: "日文維基逐字記載；音樂祭設定為 30 萬人規模" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Kongming exposed the ghostwriting on stage himself", zh: "孔明親自在舞台上揭發影武者" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Kongming planned it; KABE executed by rap; East South defected", zh: "孔明策劃；KABE 用 rap 執行；East South 倒戈" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Denpousha (¥5T ad giant) is modeled on a real agency", zh: "電報社（年營收 5 兆）原型為現實廣告公司" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "¥5T is in-story (ja.wiki); the real-world analogy is plausible inference, never official — analogue earns ~¥1.4T", zh: "5 兆是作品設定（日文維基）；原型說是合理推測、非官方——對照對象約 1.4 兆" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Fourth Kingdom is Eiko's own label", zh: "Fourth Kingdom 是英子自有廠牌" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Founded by Kongming (with an ex-label staffer); Eiko is a signed artist", zh: "孔明（與前廠牌員工）創設；英子是旗下藝人" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Three-label crossover at chs. 64–65 (vol. 9)", zh: "三大廠牌聯名在第 64–65 話（9 卷）" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Titles: 'All warfare is deception' / 'The beauty trap'", zh: "話名「兵は詭道なり」「美人の計」" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Stratagem chapters: maze 4, nothing 7, arrows 24, discord 25, feint 50, lure 51, counter-spy 53", zh: "計略章節：八陣 4、無中生有 7、借箭 24、離間 25、偽撃 50、虚誘 51、反間 53" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "All manga chapter numbers, cross-checked", zh: "皆為漫畫話數，交叉驗證" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Kindergarten arc at chs. 143–144", zh: "幼稚園篇在第 143–144 話" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Ch. 144 has an official page; supermarket-arc ch. 138 title could NOT be confirmed", zh: "144 話有官方頁；超市篇「第 138 話」標題無法官方確認" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Malaysia (travel-agency) arc around vol. 22", zh: "馬來西亞旅行社篇約在第 22 卷" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "It is vol. 25 (May 2026); definitely Malaysia, not Hong Kong", zh: "是第 25 卷（2026-05）；確定是馬來西亞非香港" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Kongming had Kobayashi bet his fortune on a horse race", zh: "孔明讓小林壓身家賭賽馬" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Kongming bet his OWN ¥1M and lost the first bet; Kobayashi absent from the arc", zh: "孔明押自己的 100 萬且首賭輸掉；該篇沒有小林" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Kongming coached rival AZALEA to a 498/500 win", zh: "孔明帶宿敵 AZALEA 以 498/500 奪冠" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Rock Battle Japan arc; Karasawa hospitalized", zh: "Rock Battle Japan 篇；唐澤緊急手術" } },
      { domain: { en: "Story · manga", zh: "漫畫劇情" }, claim: { en: "Eiko's dream stage is VOICELL LAND", zh: "英子的夢想舞台是 VOICELL LAND" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "World's biggest festival, set in Belgium; Kongming's goal is 'world peace through club music'", zh: "設定於比利時的世界最大音樂祭；孔明目標「以俱樂部音樂達成天下泰平」" } },
      { domain: { en: "Effectuation", zh: "效果邏輯" }, claim: { en: "Sarasvathy 2001, AMR 26(2), pp. 243–263 + all three quotes at pp. 243/245/252", zh: "Sarasvathy 2001，AMR 26(2), 243–263＋三段引文頁碼 243/245/252" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Checked against the paper PDF page by page", zh: "逐頁比對論文 PDF" } },
      { domain: { en: "Effectuation", zh: "效果邏輯" }, claim: { en: "Study of 30 expert entrepreneurs with $200M–$6.5B revenue", zh: "研究 30 位專家創業家、年營收 2 億–65 億美元" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "27 entrepreneurs; MARKET CAP $250M–$6.5B; the study is empirical work outside the 2001 paper", zh: "27 位；是市值 2.5–65 億美元；且實證不在 2001 論文內" } },
      { domain: { en: "Effectuation", zh: "效果邏輯" }, claim: { en: "'65% used effectual logic 75% of the time'", zh: "「65% 受訪者 75% 時間用效果邏輯」" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Verbatim at effectuation.org's background-research page", zh: "effectuation.org 背景研究頁逐字" } },
      { domain: { en: "Effectuation", zh: "效果邏輯" }, claim: { en: "Pilot-in-the-Plane was added as the fifth principle in 2008", zh: "飛行員原則是 2008 年新增的第五原則" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Reversed: the control principle IS in the 2001 four; Bird-in-Hand was the unnamed one; the five names crystallized post-2008", zh: "方向相反：控制原則 2001 年就在四原則中；未具名的是手中鳥；五名稱 2008 後定型" } },
      { domain: { en: "Effectuation", zh: "效果邏輯" }, claim: { en: "'Toward a theory of affordable loss' is by Dew & Sarasvathy", zh: "〈Toward a theory of affordable loss〉作者是 Dew 與 Sarasvathy" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Sole author: Richard A. Martina (SBE 54(3), 2020); Dew & Sarasvathy wrote the 2006 Darden note", zh: "唯一作者 Richard A. Martina（SBE 54(3), 2020）；Dew & Sarasvathy 寫的是 2006 Darden 技術說明" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "STP was developed by Kotler", zh: "STP 由 Kotler 發展" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Kotler systematized; segmentation = Smith 1956, positioning = Trout & Ries", zh: "Kotler 是統整者；區隔＝Smith 1956、定位＝Trout 與 Ries" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Smith 1956 (JM 21(1), 3–8); McCarthy 1960 4P; Booms & Bitner 1981 7P", zh: "Smith 1956（JM 21(1), 3–8）；McCarthy 1960 4P；Booms & Bitner 1981 7P" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "'Marketing mix' itself is Borden 1953/1964", zh: "「行銷組合」一詞出自 Borden 1953/1964" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "AIDA is E. St. Elmo Lewis (1898), attribution contested", zh: "AIDA 歸 Lewis（1898）且有爭議" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Acronym by Russell 1921; funnel by Townsend 1924; recent work argues Dukesmith/Sheldon", zh: "縮寫 Russell 1921；漏斗 Townsend 1924；近年考證另主張 Dukesmith/Sheldon" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Blue Ocean: HBR 2004 + 2005 book; value innovation 1997; ERRC tool", zh: "藍海：2004 HBR＋2005 專書；價值創新 1997；ERRC 工具" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "", zh: "" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Gruen effect named for Victor Gruen, who disavowed it; IKEA/Costco standard examples", zh: "Gruen 效應得名自 Victor Gruen 且他本人反對；IKEA/Costco 為標準案例" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "", zh: "" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Porter 5F (HBR 1979, 57(2), 137–145) + generic strategies 1980/1985", zh: "波特五力（HBR 1979, 57(2), 137–145）＋通用戰略 1980/1985" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "", zh: "" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Barney 1991 VRIN (JoM 17(1), 99–120) → VRIO", zh: "Barney 1991 VRIN（JoM 17(1), 99–120）→ VRIO" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "VRIO from the 1995 article / 1997 textbook", zh: "VRIO 出自 1995 文章／1997 教科書" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Judo Strategy book (2001) by Yoffie & Cusumano", zh: "《Judo Strategy》專書（2001）作者 Yoffie 與 Cusumano" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Book authors are Yoffie & KWAK; Cusumano co-wrote only the 1999 HBR article", zh: "專書作者是 Yoffie 與 Kwak；Cusumano 只合著 1999 HBR 文章" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "PMF coined by Rachleff, popularized by Andreessen 2007", zh: "PMF 由 Rachleff 命名、Andreessen 2007 普及" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Andreessen's post credits Rachleff explicitly", zh: "Andreessen 原文明確歸功 Rachleff" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "SWOT origins are contested with no consensus", zh: "SWOT 起源有爭議、無共識" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Humphrey link weak; Harvard claim denied by Guth (2017); LRP 2023: multi-source evolution", zh: "Humphrey 說證據弱；哈佛說遭 Guth（2017）否認；LRP 2023：多方演化" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Edmondson 1999 (ASQ 44(2), 350–383); Google Project Aristotle 2015", zh: "Edmondson 1999（ASQ 44(2), 350–383）；Google Project Aristotle 2015" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Project ran 2012–2015; conclusions published Nov 2015", zh: "專案 2012–2015；結論 2015-11 公布" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Employer brand paper by Barrow & Ambler (1996)", zh: "雇主品牌論文 Barrow & Ambler（1996）" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Author order reversed: Ambler & Barrow, JBM 4(3), 185–206", zh: "作者順序寫反：Ambler & Barrow，JBM 4(3), 185–206" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "WHO classified burnout as a disease (ICD-11, 2019)", zh: "WHO 於 ICD-11（2019）將倦怠列為疾病" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Listed as an OCCUPATIONAL PHENOMENON — WHO explicitly says it is not a medical condition", zh: "列為「職業現象」——WHO 明言不是疾病" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "BATNA from Fisher & Ury, Getting to Yes (1981)", zh: "BATNA 出自 Fisher & Ury《Getting to Yes》(1981)" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Patton joined the 1991 second edition", zh: "Patton 於 1991 年二版加入" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "Loss aversion coefficient ~2× is from the 1979 prospect-theory paper", zh: "損失規避約 2 倍係數出自 1979 前景理論論文" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "λ≈2.25 is from Tversky & Kahneman 1992; 1979 gave the concept only; meta-analyses find λ 1.5–2.5", zh: "λ≈2.25 出自 1992 論文；1979 只提出概念；後設分析 λ 約 1.5–2.5" } },
      { domain: { en: "Theory sources", zh: "理論出處" }, claim: { en: "'Marketing gets them in the door; product keeps them' has a known author", zh: "「行銷帶進門、產品留住人」金句有明確出處" }, verdict: { en: "Unverifiable", zh: "無法查證" }, note: { en: "A folk aphorism; no authoritative source found — quote the idea, not a fake author", zh: "坊間通則、查無權威出處——引用概念，別安假作者" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "Borrowing arrows historically belongs to Sun Quan, not Zhuge Liang", zh: "草船借箭史實原型是孫權、非諸葛亮" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Ruxu 213 AD, per the Weilüe in Pei Songzhi's commentary (not the Wu Li); Romance ch. 46 reassigned it", zh: "濡須 213 年，裴注引《魏略》（非《吳歷》）；演義 46 回移花接木" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "Eight Formations: Romance ch. 84 fiction; Records confirm Zhuge Liang 'devised the Eight Formations'", zh: "八陣圖：演義 84 回為小說；正史載「推演兵法，作八陣圖」" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Site at Kuizhou; Du Fu's poem commemorates it", zh: "遺跡在夔州；杜甫詩詠之" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "Empty Fort: Romance ch. 95; historically refuted", zh: "空城計：演義 95 回；史實已被駁" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "From Guo Chong's tales; Pei Songzhi refuted; Sima Yi was verifiably at Wancheng", zh: "出自郭沖條亮五事；裴松之駁斥；司馬懿當時在宛城" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "The Thirty-Six Stratagems were not written by Zhuge Liang or Sun Tzu", zh: "《三十六計》非諸葛亮或孫武所作" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "Ming–Qing compilation, anonymous; modern text from a 1941 Shaanxi manuscript", zh: "明末清初、作者不詳；通行本源自 1941 陝西手抄本" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "'Man proposes, Heaven disposes' is from Romance ch. 103", zh: "「謀事在人，成事在天」出自演義 103 回" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "The rain at Shangfang Valley; the manga's recurring theme line", zh: "上方谷大雨一段；漫畫的主題句" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "Zhuge Liang guarded against Wei Yan all along", zh: "諸葛亮生前一直防範魏延" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "History records only a contingency withdrawal order; the 'rebel bone' is Romance ch. 53 fiction", zh: "正史只有撤軍應變指令；「反骨」是演義 53 回虛構" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "Eiko Tsukimi's name references Huang Yueying, Zhuge Liang's wife", zh: "月見英子名字暗指諸葛亮之妻黃月英" }, verdict: { en: "Confirmed", zh: "確認" }, note: { en: "ja.wikipedia records the origin; no author interview though; 'Yueying' itself is from later legend, not the Records", zh: "日文維基收錄由來；但無作者訪談；「月英」之名本身出自後世傳說" } },
      { domain: { en: "Three Kingdoms", zh: "三國典故" }, claim: { en: "KABE = the 'wall' of Red Cliffs (赤壁) — an official easter egg", zh: "KABE＝赤壁的「壁」——官方彩蛋" }, verdict: { en: "Partly correct", zh: "部分正確" }, note: { en: "Fan speculation only; no official source; the stage name demonstrably puns on his surname Kabe (河辺)", zh: "僅粉絲推測、無官方佐證；藝名可證的來源是本姓河辺的諧音" } }
    ]
  },

  /* ====================================================== arcade ======= */
  {
    slug: "arcade",
    layout: "arcade",
    icon: "stadia_controller",
    title: { en: "Arcade", zh: "互動練功房" },
    subtitle: {
      en: "Test what you learned: a quiz, flashcards, a searchable glossary, and a stratagem-to-theory matching game. Nothing is saved — every visit starts fresh.",
      zh: "驗收你學到的東西：隨堂測驗、字卡、可搜尋詞彙表、計謀×理論配對遊戲。不儲存任何進度——每次都是新的開始。"
    },
    quiz: [
      { q: { en: "Historically, who actually 'borrowed arrows' with boats?", zh: "史實上，「草船受箭」的原型人物是誰？" },
        options: [ { en: "Zhuge Liang", zh: "諸葛亮" }, { en: "Sun Quan", zh: "孫權" }, { en: "Cao Cao", zh: "曹操" }, { en: "Zhou Yu", zh: "周瑜" } ],
        answer: 1,
        explain: { en: "The Weilüe (in Pei Songzhi's commentary) records Sun Quan balancing arrows on his boat at Ruxu, 213 AD. Romance ch. 46 reassigned the feat to Zhuge Liang.", zh: "裴松之注引《魏略》記載孫權於濡須之戰（213 年）以船受箭。《三國演義》第 46 回把這件事移給了諸葛亮。" } },
      { q: { en: "The Stone Sentinel Maze nightclub trick corresponds to which retail-psychology concept?", zh: "石兵八陣的夜店動線戰，對應哪個零售心理學概念？" },
        options: [ { en: "The Gruen effect", zh: "Gruen 效應" }, { en: "The long tail", zh: "長尾理論" }, { en: "Anchoring", zh: "定錨效應" }, { en: "The Pareto principle", zh: "80/20 法則" } ],
        answer: 0,
        explain: { en: "Deliberately disorienting layouts that make people linger — named for architect Victor Gruen, who disavowed the manipulation.", zh: "刻意迷航、延長停留的動線設計——得名自建築師 Victor Gruen，他本人反對這種操縱。" } },
      { q: { en: "Sarasvathy's expert-entrepreneur study found:", zh: "Sarasvathy 的專家創業家研究發現：" },
        options: [ { en: "65% used effectual logic 75% of the time", zh: "65% 的人有 75% 的時間用效果邏輯" }, { en: "75% used causal logic 65% of the time", zh: "75% 的人有 65% 的時間用因果邏輯" }, { en: "All experts always predict first", zh: "所有專家都先做預測" }, { en: "Experts never plan anything", zh: "專家從不做任何規劃" } ],
        answer: 0,
        explain: { en: "Verified verbatim at effectuation.org: 65% of the 27 respondents used effectual logic 75% of the time.", zh: "已向 effectuation.org 逐字驗證：27 位受訪者中 65% 有 75% 的時間採用效果邏輯。" } },
      { q: { en: "Complete the series' iron law: 'Stratagems are the entrance; ___ is the retention.'", zh: "補完全劇鐵律：「計謀只是入口，＿＿才是留存。」" },
        options: [ { en: "luck", zh: "運氣" }, { en: "budget", zh: "預算" }, { en: "the product", zh: "產品力" }, { en: "connections", zh: "人脈" } ],
        answer: 2,
        explain: { en: "The borrowed likes stalled at 70k; DREAMER — the product — broke 100k.", zh: "借來的讚停在七萬；真正突破十萬的是產品——〈DREAMER〉。" } },
      { q: { en: "Kongming challenges KABE knowing he may lose the rap battle. Which principle prices that bet?", zh: "孔明明知可能輸還去跟 KABE 尬饒舌。哪個原則在為這筆賭注定價？" },
        options: [ { en: "Affordable loss", zh: "可承受損失原則" }, { en: "Blue ocean strategy", zh: "藍海策略" }, { en: "Five forces", zh: "五力分析" }, { en: "VRIN", zh: "VRIN 資源觀" } ],
        answer: 0,
        explain: { en: "The downside was only face — affordable. And losing still achieved the real goal: reigniting KABE.", zh: "下檔風險只有面子——輸得起。而且輸了也達成真正目的：點燃 KABE。" } },
      { q: { en: "Who wrote the Thirty-Six Stratagems?", zh: "《三十六計》的作者是誰？" },
        options: [ { en: "Zhuge Liang", zh: "諸葛亮" }, { en: "Sun Tzu", zh: "孫武" }, { en: "Anonymous, Ming–Qing era", zh: "明末清初的無名氏" }, { en: "Cao Cao", zh: "曹操" } ],
        answer: 2,
        explain: { en: "A late-imperial compilation by unknown authors; the modern text surfaced from a 1941 manuscript. Giving it to Kongming is the manga's artistic license.", zh: "明末清初無名氏彙編；通行本源自 1941 年發現的手抄本。放到孔明身上是漫畫的藝術加工。" } },
      { q: { en: "What exactly is Fourth Kingdom?", zh: "Fourth Kingdom 到底是什麼？" },
        options: [ { en: "Eiko's personally owned label", zh: "英子個人自有的廠牌" }, { en: "An indie label founded by Kongming; Eiko is a signed artist", zh: "孔明創設的獨立廠牌；英子是旗下藝人" }, { en: "A subsidiary of the three majors", zh: "三大廠牌的子公司" }, { en: "A fan club", zh: "粉絲後援會" } ],
        answer: 1,
        explain: { en: "A fact our verification corrected: founded by Kongming with an ex-label staffer; Eiko signs to it.", zh: "查證修正過的事實：孔明與一位前廠牌員工創設；英子是簽約藝人。" } },
      { q: { en: "The Borrowed Arrows campaign drove which business metric to nearly zero?", zh: "草船借箭把哪個商業指標打到趨近於零？" },
        options: [ { en: "Customer acquisition cost (CAC)", zh: "獲客成本（CAC）" }, { en: "Lifetime value (LTV)", zh: "顧客終身價值（LTV）" }, { en: "Churn rate", zh: "流失率" }, { en: "Conversion rate", zh: "轉換率" } ],
        answer: 0,
        explain: { en: "The rival's ad budget gathered the crowd; Eiko acquired them for free — CAC ≈ 0.", zh: "對手的行銷預算負責聚眾，英子免費收割——CAC ≈ 0。" } },
      { q: { en: "Who exposed Maezono's ghostwriting on the Summer Sonia stage?", zh: "Summer Sonia 舞台上揭發前園影武者的是誰？" },
        options: [ { en: "Kongming himself", zh: "孔明本人" }, { en: "KABE, by rap (Kongming planned it)", zh: "KABE 用 rap（孔明策劃）" }, { en: "Eiko, mid-song", zh: "英子在歌中" }, { en: "A journalist", zh: "記者" } ],
        answer: 1,
        explain: { en: "Another verification catch: Kongming plans, KABE executes, East South defect on stage.", zh: "另一個查證抓到的修正：孔明策劃、KABE 執行、East South 當場倒戈。" } },
      { q: { en: "Summer Sonia attendance grew from 311 to…", zh: "Summer Sonia 的觀眾動員從 311 人成長到…" },
        options: [ { en: "4,300", zh: "4,300 人" }, { en: "13,000", zh: "13,000 人" }, { en: "43,000", zh: "43,000 人" }, { en: "300,000", zh: "300,000 人" } ],
        answer: 2,
        explain: { en: "311 → 43,000, quoted verbatim on Japanese Wikipedia. (300k is the festival's overall scale setting.)", zh: "311 → 43,000，日文維基逐字記載。（30 萬是音樂祭整體規模的設定。）" } }
    ],
    cards: [
      { front: { en: "Bird-in-Hand", zh: "手中鳥原則" }, back: { en: "Start from who you are, what you know, whom you know — not from an imagined goal. (Sarasvathy)", zh: "從「我是誰、我會什麼、我認識誰」出發，而不是從想像的目標出發。（Sarasvathy）" } },
      { front: { en: "Affordable Loss", zh: "可承受損失" }, back: { en: "Decide what you can afford to lose, not what you expect to gain.", zh: "先決定輸得起多少，而不是預期賺多少。" } },
      { front: { en: "Crazy Quilt", zh: "拼布原則" }, back: { en: "Stitch in whoever self-selects to commit — partnerships over competitor analysis.", zh: "把自願投入的人縫進來——夥伴關係優先於競爭分析。" } },
      { front: { en: "Lemonade Principle", zh: "檸檬水原則" }, back: { en: "Surprises — even bad ones — are ingredients, not obstacles.", zh: "意外（包括壞的）是食材，不是障礙。" } },
      { front: { en: "Pilot-in-the-Plane", zh: "飛行員原則" }, back: { en: "To the extent you can control the future, you do not need to predict it. (2001 paper, p. 252)", zh: "只要能控制未來，就不需要預測它。（2001 論文 p.252）" } },
      { front: { en: "Gruen Effect", zh: "Gruen 效應" }, back: { en: "Disorienting layouts make people forget their errand and linger — the maze in retail form.", zh: "迷航動線讓人忘記原本目的、多留多看——零售版的石兵八陣。" } },
      { front: { en: "Judo Strategy", zh: "柔道戰略" }, back: { en: "Use the bigger rival's weight and momentum to throw them. (Yoffie & Cusumano 1999)", zh: "借大對手的體重與慣性摔倒他。（Yoffie & Cusumano 1999）" } },
      { front: { en: "Product-Market Fit", zh: "產品市場適配" }, back: { en: "Before PMF, marketing is waste; after, growth pulls itself. (Rachleff / Andreessen)", zh: "PMF 之前行銷是浪費；之後成長自己會來。（Rachleff／Andreessen）" } },
      { front: { en: "BATNA", zh: "BATNA" }, back: { en: "Your power at the table equals your best walk-away alternative. (Fisher & Ury 1981)", zh: "談判桌上的力量＝你最好的退場選項。（Fisher & Ury 1981）" } },
      { front: { en: "Psychological Safety", zh: "心理安全" }, back: { en: "A shared belief that interpersonal risk-taking is safe. (Edmondson 1999)", zh: "團隊共同相信「人際冒險是安全的」。（Edmondson 1999）" } },
      { front: { en: "Loss Aversion", zh: "損失規避" }, back: { en: "Losses hurt about twice as much as equal gains please. (Kahneman & Tversky; λ from 1992)", zh: "損失的痛約是等量獲得的兩倍。（Kahneman & Tversky；係數出自 1992）" } },
      { front: { en: "Social Proof", zh: "社會認同" }, back: { en: "When uncertain, people copy others — a seeded like inflates final scores ~25% (Science, 2013).", zh: "不確定時人跟著別人做——先種一個讚可讓最終評分灌高約 25%（Science, 2013）。" } }
    ],
    glossary: [
      { term: { en: "Effectuation", zh: "效果邏輯" }, def: { en: "Decision logic that takes means as given and grows goals from them; rests on control, not prediction (Sarasvathy 2001).", zh: "把手段視為既定、從手段長出目標的決策邏輯；建立在控制而非預測上（Sarasvathy 2001）。" } },
      { term: { en: "Causation", zh: "因果邏輯" }, def: { en: "Decision logic that takes a goal as given and selects means to achieve it.", zh: "把目標視為既定、為其挑選手段的決策邏輯。" } },
      { term: { en: "Knightian uncertainty", zh: "奈特不確定性" }, def: { en: "Situations where probabilities cannot even be estimated — beyond mere risk (Knight 1921).", zh: "連機率都無法估計的情境——比「風險」更深一層（Knight 1921）。" } },
      { term: { en: "Bricolage", zh: "創業拼裝" }, def: { en: "Making do by recombining resources at hand (Baker & Nelson 2005).", zh: "就手邊資源重組拼湊出解法（Baker & Nelson 2005）。" } },
      { term: { en: "STP", zh: "STP" }, def: { en: "Segmentation, targeting, positioning — pick a winnable group and own a place in its mind.", zh: "區隔、目標、定位——選一群贏得了的人，佔據他們心中一個位置。" } },
      { term: { en: "Marketing mix (4P/7P)", zh: "行銷組合（4P/7P）" }, def: { en: "Product, price, place, promotion (+ people, process, physical evidence for services).", zh: "產品、價格、通路、推廣（服務業加人員、流程、實體證據）。" } },
      { term: { en: "AIDA", zh: "AIDA" }, def: { en: "Attention → Interest → Desire → Action; drawn as a funnel since 1924.", zh: "注意 → 興趣 → 慾望 → 行動；1924 年起被畫成漏斗。" } },
      { term: { en: "Blue ocean", zh: "藍海策略" }, def: { en: "Create uncontested market space via value innovation instead of fighting in the red ocean (Kim & Mauborgne).", zh: "用價值創新開出無人競爭的空間，而非在紅海硬拚（Kim & Mauborgne）。" } },
      { term: { en: "Guerrilla marketing", zh: "游擊行銷" }, def: { en: "Small budgets winning with creativity and surprise (Levinson 1984).", zh: "小預算靠創意與奇襲取勝（Levinson 1984）。" } },
      { term: { en: "Viral marketing", zh: "病毒式行銷" }, def: { en: "Users themselves become the medium of spread (term: Draper/Jurvetson 1997).", zh: "讓使用者本身成為傳播媒介（詞源：Draper/Jurvetson 1997）。" } },
      { term: { en: "Newsjacking", zh: "借勢劫持" }, def: { en: "Injecting your story into breaking news for attention (Scott 2011).", zh: "把自己注入突發熱點以獲取注意力（Scott 2011）。" } },
      { term: { en: "Gruen effect", zh: "Gruen 效應" }, def: { en: "Disorienting retail layouts induce lingering and impulse buying; Victor Gruen disavowed it.", zh: "迷航式賣場動線誘發停留與衝動消費；Victor Gruen 本人反對。" } },
      { term: { en: "Five forces", zh: "五力分析" }, def: { en: "Rivals, entrants, buyers, suppliers, substitutes divide an industry's profit (Porter 1979).", zh: "對手、新進者、買方、供應商、替代品瓜分產業利潤（Porter 1979）。" } },
      { term: { en: "VRIN / RBV", zh: "VRIN／資源基礎觀點" }, def: { en: "Valuable, rare, inimitable, non-substitutable resource bundles sustain advantage (Barney 1991).", zh: "有價值、稀有、難模仿、難替代的資源組合支撐持續優勢（Barney 1991）。" } },
      { term: { en: "Disruptive innovation", zh: "破壞式創新" }, def: { en: "Entering from low-end or new-market footholds the incumbents ignore (Christensen).", zh: "從巨頭忽略的低階或新市場立足點切入（Christensen）。" } },
      { term: { en: "Judo strategy", zh: "柔道戰略" }, def: { en: "Movement, balance, leverage — convert the rival's mass into your throw.", zh: "移動、平衡、槓桿——把對手的質量變成你的摔技。" } },
      { term: { en: "Network effects", zh: "網路效應" }, def: { en: "Each additional user makes the product more valuable to all (Katz & Shapiro 1985).", zh: "每多一個使用者，產品對所有人的價值都上升（Katz & Shapiro 1985）。" } },
      { term: { en: "PMF", zh: "產品市場適配" }, def: { en: "The product finally matches what a market truly wants; everything before it is search.", zh: "產品終於對上市場真正想要的東西；在那之前一切都是搜尋。" } },
      { term: { en: "OKR", zh: "OKR" }, def: { en: "An inspiring objective with measurable key results (Grove → Doerr).", zh: "振奮人心的目標＋可量測的關鍵結果（Grove → Doerr）。" } },
      { term: { en: "SWOT", zh: "SWOT" }, def: { en: "Strengths, weaknesses, opportunities, threats; origins genuinely contested.", zh: "優勢、劣勢、機會、威脅；起源至今無定論。" } },
      { term: { en: "BATNA", zh: "BATNA" }, def: { en: "Best alternative to a negotiated agreement — your walk-away option (Fisher & Ury).", zh: "談判破裂時的最佳替代方案——你的退場選項（Fisher & Ury）。" } },
      { term: { en: "Psychological safety", zh: "心理安全" }, def: { en: "Teams learn fastest where risk-taking will not be punished (Edmondson 1999; Google's #1 team factor).", zh: "敢冒險不會被懲罰的團隊學得最快（Edmondson 1999；Google 團隊第一因素）。" } },
      { term: { en: "Burnout", zh: "職業倦怠" }, def: { en: "Exhaustion, cynicism, reduced efficacy — an occupational phenomenon per WHO, not a disease.", zh: "耗竭、去人格化、成就感降低——WHO 定義的職業現象，不是疾病。" } },
      { term: { en: "Loss aversion", zh: "損失規避" }, def: { en: "Losses loom roughly twice as large as gains (prospect theory).", zh: "損失的心理重量約是獲得的兩倍（前景理論）。" } },
      { term: { en: "Framing effect", zh: "框架效應" }, def: { en: "The same facts, worded differently, flip people's choices (Tversky & Kahneman 1981).", zh: "同樣的事實換個說法，選擇就翻轉（Tversky & Kahneman 1981）。" } },
      { term: { en: "Social proof", zh: "社會認同" }, def: { en: "When uncertain, people follow other people (Cialdini 1984).", zh: "不確定時，人跟著別人走（Cialdini 1984）。" } },
      { term: { en: "Choice architecture", zh: "選擇架構" }, def: { en: "Arranging options changes choices without coercion (Thaler & Sunstein 2008).", zh: "重排選項就能改變選擇，不需強迫（Thaler & Sunstein 2008）。" } },
      { term: { en: "Cognitive dissonance", zh: "認知失調" }, def: { en: "Belief–fact collisions demand resolution (Festinger 1957).", zh: "信念與事實相撞時必須找出口（Festinger 1957）。" } }
    ],
    pairs: [
      { a: { en: "Stone Sentinel Maze", zh: "石兵八陣" }, b: { en: "Gruen effect", zh: "Gruen 效應" } },
      { a: { en: "Borrowed Arrows", zh: "草船借箭" }, b: { en: "Judo strategy", zh: "柔道戰略" } },
      { a: { en: "Something from Nothing", zh: "無中生有" }, b: { en: "Information asymmetry", zh: "資訊不對稱" } },
      { a: { en: "Sowing Discord", zh: "離間計" }, b: { en: "Prisoner's dilemma", zh: "囚徒困境" } },
      { a: { en: "The rap battle", zh: "收編 KABE 的 rap battle" }, b: { en: "Employer branding", zh: "雇主品牌" } },
      { a: { en: "100k-likes race", zh: "十萬讚企劃" }, b: { en: "Network effects", zh: "網路效應" } },
      { a: { en: "Ghostwriter exposé", zh: "揭發影武者" }, b: { en: "Cognitive dissonance", zh: "認知失調" } },
      { a: { en: "DREAMER breaks 100k", zh: "〈DREAMER〉真正達標" }, b: { en: "Product-market fit", zh: "產品市場適配" } }
    ]
  }
];
