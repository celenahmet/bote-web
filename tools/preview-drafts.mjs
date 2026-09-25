// Taslak onay sayfasi: content/blog/drafts ve content/pages/drafts altindaki taslaklari
// tek, kendi kendine yeten bir HTML sayfasinda toplar (editor onayi icin).
//   node preview-drafts.mjs [cikti.html]    (varsayilan: tools/.preview/taslaklar.html)
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { ROOT } from './serve.mjs';
import { renderMarkdown, renderInline } from './blog/markdown.mjs';
import { esc, trDate, stripHtml, readingMinutes } from './blog/util.mjs';

const outFile = path.resolve(process.argv[2] || path.join(ROOT, 'tools/.preview/taslaklar.html'));
const cfg = YAML.parse(fs.readFileSync(path.join(ROOT, 'content/blog/blog.yml'), 'utf8'));
const catName = Object.fromEntries(cfg.categories.map((c) => [c.slug, c.name]));
const notesFile = path.join(ROOT, 'content/blog/drafts/_dogrulama-notlari.md');

function load(dir, kind) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort().map((f) => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const [, fmText, body] = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
    const fm = YAML.parse(fmText);
    const sources = fm.sources.map((s) => ({ ...s, lang: String(s.lang).toLowerCase() }));
    const md = body.replace(/^\s*# .*\n+/, '');
    const { html, citeOrder } = renderMarkdown(md, { sources, root: ROOT, file: f });
    const ordered = [...citeOrder.map((id) => sources.find((s) => s.id === id)), ...sources.filter((s) => !citeOrder.includes(s.id))];
    ordered.forEach((s, i) => (s.n = i + 1));
    const { words, minutes } = readingMinutes(stripHtml(html));
    return { id: f.replace(/\.md$/, ''), kind, fm, html, sources: ordered, words, minutes,
      foreign: sources.filter((s) => s.lang !== 'tr').length, local: sources.filter((s) => s.lang === 'tr').length };
  });
}
const blogDrafts = load(path.join(ROOT, 'content/blog/drafts'), 'Blog yazısı').sort((a, b) => (b.fm.featured ? 1 : 0) - (a.fm.featured ? 1 : 0));
const drafts = [...blogDrafts, ...load(path.join(ROOT, 'content/pages/drafts'), 'Sayfa')];
const notes = fs.existsSync(notesFile) ? renderMarkdownPlain(fs.readFileSync(notesFile, 'utf8')) : '';
function renderMarkdownPlain(md) { return renderMarkdown(md.replace(/^# .*\n+/, ''), { sources: [], root: ROOT, file: '_notlar' }).html; }

const source = (s) => {
  const who = s.author ? `${esc(s.author)} (${esc(s.year)}). ` : `${esc(s.publisher)} (${esc(s.year)}). `;
  const pub = s.author && s.publisher ? ` ${esc(s.publisher)}.` : '';
  return `<li id="${esc(`k-${s.n}`)}">${who}<cite>${esc(s.title)}</cite>.${pub} <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.url.replace(/^https?:\/\//, ''))}</a> <span class="lang lang-${s.lang === 'tr' ? 'tr' : 'x'}">${esc(s.lang.toUpperCase())}</span></li>`;
};

const rows = drafts.map((d, i) => `<tr><td class="num">${i + 1}</td><td><a href="#${d.id}">${esc(d.fm.title)}</a><div class="sub">${d.kind}${d.fm.category ? ` · ${esc(catName[d.fm.category])}` : ''}</div></td><td class="num">${d.words}</td><td class="num">${d.minutes} dk</td><td class="num"><b>${d.foreign}</b> yabancı · ${d.local} TR</td></tr>`).join('');

const articles = drafts.map((d, i) => `
<article class="draft" id="${d.id}" aria-labelledby="t-${d.id}">
  <div class="draft-head">
    <p class="eyebrow">Taslak ${i + 1} / ${drafts.length} · ${d.kind}${d.fm.category ? ` · ${esc(catName[d.fm.category])}` : ''}</p>
    <h2 id="t-${d.id}">${esc(d.fm.title)}</h2>
    <p class="lead">${esc(d.fm.description)}</p>
    <p class="meta"><span>Yazan: ${esc(cfg.author.name)}</span><span>${d.words} kelime</span><span>${d.minutes} dk okuma</span><span>${d.sources.length} kaynak (${d.foreign} yabancı)</span>${d.fm.category ? `<span>Adres: /blog/${d.id}</span>` : '<span>Adres: /graduation</span>'}</p>
  </div>
  ${d.fm.summary ? `<section class="tldr"><h3>Kısaca</h3><ul>${d.fm.summary.map((s) => `<li>${renderInline(s)}</li>`).join('')}</ul></section>` : ''}
  <div class="body">${d.html.replace(/href="#kaynak-(\d+)"/g, `href="#${d.id}-k-$1"`)}</div>
  ${d.fm.faq ? `<section class="faq"><h3>Sık Sorulan Sorular</h3>${d.fm.faq.map((f) => `<h4>${esc(f.q)}</h4><p>${renderInline(f.a)}</p>`).join('')}</section>` : ''}
  <section class="sources"><h3>Kaynaklar</h3><ol>${d.sources.map((s) => source(s).replace(`id="k-${s.n}"`, `id="${d.id}-k-${s.n}"`)).join('')}</ol></section>
  <p class="back"><a href="#ozet">Taslak listesine dön</a></p>
</article>`).join('\n');

const html = `<title>BÖTE Taslak Onayı</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&family=Poppins:wght@600;700&display=swap">
<style>
:root{--paper:#FBF9FD;--surface:#FFFFFF;--soft:#F3EEF9;--ink:#241C31;--muted:#5E5873;--line:#E4DCEE;--head:#41246D;--accent:#C81E60;--accent-soft:#FDE7EF;--tr:#5E5873;--x:#0F6E5A;
  --display:Poppins,"Segoe UI",Helvetica,Arial,sans-serif;--text:Mulish,"Segoe UI",Helvetica,Arial,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){color-scheme:dark;--paper:#15101D;--surface:#1D1628;--soft:#251C33;--ink:#ECE5F6;--muted:#A99DBD;--line:#342A45;--head:#CDB8F2;--accent:#FF6FA3;--accent-soft:#3A1C2A;--tr:#A99DBD;--x:#5FD3B4}}
:root[data-theme="dark"]{color-scheme:dark;--paper:#15101D;--surface:#1D1628;--soft:#251C33;--ink:#ECE5F6;--muted:#A99DBD;--line:#342A45;--head:#CDB8F2;--accent:#FF6FA3;--accent-soft:#3A1C2A;--tr:#A99DBD;--x:#5FD3B4}
body{background:var(--paper);color:var(--ink);font:17px/1.7 var(--text)}
.wrap{max-width:780px;margin:0 auto;padding-inline:16px;padding-block:32px 64px;display:flex;flex-direction:column;gap:40px}
h1,h2,h3,h4{font-family:var(--display);color:var(--head);line-height:1.25;text-wrap:balance;margin:0}
h1{font-size:clamp(28px,5vw,38px)}
h2{font-size:clamp(24px,4vw,31px)}
h3{font-size:20px;margin-top:1.6em;margin-bottom:.5em}
h4{font-size:17px;margin-top:1.2em}
a{color:var(--accent);text-underline-offset:3px}
a:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
p{margin:0 0 1em}
.eyebrow{font:600 12px/1.4 var(--display);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 8px}
.intro p{color:var(--muted);max-width:65ch}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:20px 22px}
.panel h2{font-size:20px;margin-bottom:12px}
.panel ol,.panel ul{margin:0;padding-left:20px}
.panel li{margin:6px 0}
.table{overflow-x:auto}
table{border-collapse:collapse;width:100%;font-size:15px}
th,td{text-align:left;padding:10px 8px;border-bottom:1px solid var(--line);vertical-align:top}
th{font:600 12px var(--display);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
td.num{white-space:nowrap;font-variant-numeric:tabular-nums}
.sub{font-size:13px;color:var(--muted)}
.draft{border-top:3px solid var(--head);padding-top:28px}
.draft-head{display:flex;flex-direction:column;gap:6px;margin-bottom:24px}
.lead{font-size:18px;color:var(--muted);margin:0}
.meta{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:14px;color:var(--muted);margin:0}
.tldr{background:var(--soft);border-radius:12px;padding:4px 22px 14px;margin-bottom:24px}
.tldr h3{margin-top:14px}
.tldr ul{margin:0;padding-left:20px}
.body{max-width:68ch}
.body h2{font-size:24px;margin:1.6em 0 .5em}
.body h3{font-size:20px}
.body ul,.body ol{padding-left:22px;margin:0 0 1em}
.body li{margin:.3em 0}
.body blockquote{margin:1.2em 0;padding:10px 18px;border-left:3px solid var(--head);background:var(--soft)}
.table-wrap{overflow-x:auto;margin:1.2em 0;border:1px solid var(--line);border-radius:10px}
.body table th{background:var(--soft)}
.cite{font-size:.72em;line-height:0}
.sidenote{display:none}
.cite a{text-decoration:none;font-weight:700}
.sources ol{padding-left:22px;font-size:14.5px}
.sources li{margin:8px 0;overflow-wrap:anywhere}
.lang{display:inline-block;font:700 11px var(--display);border:1px solid currentColor;border-radius:4px;padding:0 5px;margin-left:4px}
.lang-x{color:var(--x)}.lang-tr{color:var(--tr)}
.faq h4{color:var(--ink)}
.back{font-size:14px}
.notes{border-left:4px solid var(--accent);background:var(--accent-soft)}
.notes h2{color:var(--ink)}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
</style>
<div class="wrap">
  <header class="intro">
    <p class="eyebrow">bote.web.tr · Editör onayı · ${trDate(new Date().toISOString().slice(0, 10))}</p>
    <h1>BÖTE Blog taslakları</h1>
    <p>Aşağıdaki ${drafts.length} taslak henüz yayında değil. Her birini okuyup sohbette “onay”, “düzelt: …” ya da “yayımlama” diye yanıtlamanız yeterli. Onaylanan yazı yayına alınır.</p>
  </header>
  <section class="panel" id="ozet" aria-labelledby="ozet-t">
    <h2 id="ozet-t">Taslaklar</h2>
    <div class="table"><table><thead><tr><th>#</th><th>Başlık</th><th>Kelime</th><th>Süre</th><th>Kaynak</th></tr></thead><tbody>${rows}</tbody></table></div>
  </section>
  ${notes ? `<section class="panel notes" aria-labelledby="notlar-t"><h2 id="notlar-t">Onaylamadan önce kontrol edin</h2>${notes.replace(/^<h1[^>]*>.*?<\/h1>\s*/s, '')}</section>` : ''}
  ${articles}
</div>
`;
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, html);
console.log(`onizleme: ${outFile} (${drafts.length} taslak)`);
