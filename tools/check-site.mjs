// Site testleri: yayina cikacak dosyalar uzerinde (vercel.json + .vercelignore taklidiyle)
// baglanti, SEO, JSON-LD, robots/sitemap/llms, besleme, sayac API ve yapay zeka ajani erisimi.
//   node check-site.mjs            -> hata varsa cikis kodu 1
import { parse } from 'node-html-parser';
import { XMLParser } from 'fast-xml-parser';
import robotsParser from 'robots-parser';
import { listen } from './serve.mjs';

const SITE = 'https://www.bote.web.tr';
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const { server, origin } = await listen({});
const local = (u) => (u.startsWith(SITE) ? origin + (u.slice(SITE.length) || '/') : u.startsWith('/') ? origin + u : u);
const cache = new Map();
async function get(pathOrUrl, opts = {}) {
  const url = local(pathOrUrl);
  const key = `${opts.method || 'GET'} ${url} ${opts.ua || ''}`;
  if (!opts.body && cache.has(key)) return cache.get(key);
  const res = await fetch(url, { redirect: 'manual', method: opts.method || 'GET', body: opts.body,
    headers: { 'user-agent': opts.ua || 'Mozilla/5.0 (X11; Linux x86_64) site-denetimi', ...(opts.body ? { 'content-type': 'application/json' } : {}) } });
  const out = { status: res.status, location: res.headers.get('location'), type: res.headers.get('content-type') || '', text: await res.text() };
  if (!opts.body) cache.set(key, out);
  return out;
}

// Yonlendirmesi bilerek var olan ic adresler (dis siteye gider)
const REDIRECT_OK = [/^\/(en\/)?uni\//, /^\/media\/wp$/];
const GENERIC_TEXT = new Set(['buraya tıklayın', 'tıklayın', 'buraya', 'burada', 'daha fazla', 'devamı', 'click here', 'here', 'more', 'read more', 'learn more', 'this', 'link']);

// ------------------------------------------------------------------ crawl
const pages = new Map(); // yol -> { html, root }
const queue = ['/', '/en', '/blog'];
const seen = new Set();
const linkChecks = new Map(); // hedef -> kaynak sayfa
while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  seen.add(p);
  const r = await get(p);
  if (r.status !== 200) continue; // baglanti denetimi asagida raporlar
  if (!r.type.includes('text/html')) continue;
  const root = parse(r.text);
  pages.set(p, { status: 200, html: r.text, root });
  for (const a of root.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href').trim();
    if (/^(mailto:|tel:|javascript:|#)/.test(href) || href === '') continue;
    let u;
    try { u = new URL(href, `${SITE}${p === '/' ? '/' : `${p}/`}`); } catch { err(p, `gecersiz href: ${href}`); continue; }
    if (u.origin !== SITE && !(u.hostname === 'bote.web.tr')) continue;
    if (!href.startsWith('/') && !href.startsWith('http')) warn(p, `goreli baglanti (koke gore yazin): ${href}`);
    const target = u.pathname;
    if (!linkChecks.has(target)) linkChecks.set(target, p);
    if (!seen.has(target) && !REDIRECT_OK.some((re) => re.test(target)) && !/\.(xml|json|txt|md|pdf|png|jpe?g|webp|svg)$/.test(target)) queue.push(target);
  }
}

// ------------------------------------------------------------------ links
for (const [target, from] of linkChecks) {
  const r = await get(target);
  if (r.status === 200) continue;
  if ([301, 302, 307, 308].includes(r.status)) {
    if (!REDIRECT_OK.some((re) => re.test(target))) err(from, `ic baglanti yonlendiriliyor: ${target} -> ${r.location}`);
    continue;
  }
  err(from, `kirik ic baglanti: ${target} (HTTP ${r.status})`);
}

// ------------------------------------------------------------------ per page SEO
const titles = new Map();
const descs = new Map();
const indexable = new Set();
for (const [p, pg] of pages) {
  if (!pg.root) continue;
  const root = pg.root;
  const where = p;
  const lang = root.querySelector('html')?.getAttribute('lang');
  const expectLang = p === '/en' || p.startsWith('/en/') ? 'en' : 'tr';
  if (lang !== expectLang) err(where, `lang="${lang}" (beklenen ${expectLang})`);
  const title = root.querySelector('title')?.text.trim();
  if (!title) err(where, '<title> yok');
  else {
    if (title.length > 70) warn(where, `title uzun (${title.length})`);
    if (titles.has(title)) err(where, `title tekrar ediyor (${titles.get(title)} ile ayni)`);
    titles.set(title, p);
  }
  const desc = root.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
  if (!desc) err(where, 'meta description yok');
  else {
    if (desc.length < 50 || desc.length > 170) warn(where, `description ${desc.length} karakter`);
    if (descs.has(desc)) warn(where, `description tekrar ediyor (${descs.get(desc)} ile ayni)`);
    descs.set(desc, p);
  }
  const robots = root.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
  if (/noindex/i.test(robots)) err(where, 'noindex (yayindaki sayfa indekslenebilir olmali)');
  else indexable.add(p);
  const canon = root.querySelectorAll('link[rel="canonical"]');
  if (canon.length !== 1) err(where, `canonical sayisi ${canon.length}`);
  else if (canon[0].getAttribute('href') !== SITE + (p === '/' ? '/' : p)) err(where, `canonical ${canon[0].getAttribute('href')} != ${SITE}${p}`);
  const h1 = root.querySelectorAll('h1').length;
  if (h1 !== 1) err(where, `${h1} adet h1`);
  for (const img of root.querySelectorAll('img')) if (img.getAttribute('alt') == null) err(where, `alt yok: ${img.getAttribute('src')}`);
  if (!root.querySelector('meta[property="og:title"]') || !root.querySelector('meta[property="og:image"]')) warn(where, 'Open Graph eksik');
  const lds = root.querySelectorAll('script[type="application/ld+json"]');
  if (!lds.length) err(where, 'JSON-LD yok');
  for (const s of lds) {
    try { const j = JSON.parse(s.text); if (!j['@context']) err(where, 'JSON-LD @context yok'); } catch (e) { err(where, `JSON-LD gecersiz: ${e.message}`); }
  }
  for (const a of root.querySelectorAll('a[href]')) {
    const t = a.text.replace(/\s+/g, ' ').trim().toLocaleLowerCase('tr-TR');
    if (GENERIC_TEXT.has(t)) warn(where, `aciklayici olmayan baglanti metni: "${a.text.trim()}"`);
    const inner = a.text.trim() || a.getAttribute('aria-label') || a.querySelector('img')?.getAttribute('alt') || a.getAttribute('title');
    if (!inner && a.getAttribute('aria-hidden') !== 'true') warn(where, `metinsiz baglanti: ${a.getAttribute('href')}`);
  }
  for (const a of root.querySelectorAll('a[href^="#"]')) {
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    if (id && !root.querySelector(`[id="${id}"]`)) err(where, `sayfa ici hedef yok: #${id}`);
  }
  // hreflang: gecerli, ulasilabilir ve karsilikli
  for (const l of root.querySelectorAll('link[rel="alternate"][hreflang]')) {
    const href = l.getAttribute('href');
    const r = await get(href);
    if (r.status !== 200) { err(where, `hreflang hedefi ${href} HTTP ${r.status}`); continue; }
    const back = parse(r.text).querySelectorAll('link[rel="alternate"][hreflang]').map((x) => x.getAttribute('href'));
    if (!back.includes(SITE + (p === '/' ? '/' : p))) err(where, `hreflang karsiliksiz: ${href} bu sayfaya geri baglanmiyor`);
  }
  // JavaScript olmadan okunabilir icerik (arama motorlari / yapay zeka ajanlari)
  const bodyHtml = (pg.html.match(/<body[\s\S]*<\/body>/i) || [''])[0];
  const text = bodyHtml.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length < 200) warn(where, `ana icerik kisa (${text.length} karakter)`);
}
{
  const r = await get('/boyle-bir-sayfa-yok');
  if (r.status !== 404 || !/noindex/.test(r.text)) err('404', 'bilinmeyen adres 404 + noindex donmeli');
}

// ------------------------------------------------------------------ robots.txt
const robotsRes = await get('/robots.txt');
if (robotsRes.status !== 200) err('robots.txt', `HTTP ${robotsRes.status}`);
const robots = robotsParser(`${SITE}/robots.txt`, robotsRes.text);
const posts = JSON.parse((await get('/blog/search.json')).text || '[]');
const mustAllow = ['/', '/blog', '/en', '/llms.txt', '/sitemap.xml', ...posts.map((p) => p.url), ...posts.map((p) => `${p.url}.md`)];
for (const ua of ['Googlebot', 'Bingbot', 'YandexBot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'SomeNewAIAgent/1.0']) {
  for (const p of mustAllow) if (!robots.isAllowed(SITE + p, ua)) err('robots.txt', `${ua} ${p} adresine erisemiyor`);
  if (robots.isAllowed(`${SITE}/api/views`, ua)) warn('robots.txt', `${ua} /api/ taranabilir`);
}
if (!robots.getSitemaps().includes(`${SITE}/sitemap.xml`)) err('robots.txt', 'Sitemap satiri yok');

// ------------------------------------------------------------------ sitemap.xml
const xml = new XMLParser({ ignoreAttributes: false });
const smRes = await get('/sitemap.xml');
let smUrls = [];
try {
  const sm = xml.parse(smRes.text);
  smUrls = [].concat(sm.urlset.url).map((u) => u.loc);
} catch (e) { err('sitemap.xml', `ayristirilamadi: ${e.message}`); }
for (const loc of smUrls) {
  if (!loc.startsWith(SITE)) { err('sitemap.xml', `alan adi disi: ${loc}`); continue; }
  const p = loc.slice(SITE.length) || '/';
  const r = await get(p);
  if (r.status !== 200) err('sitemap.xml', `${loc} HTTP ${r.status}`);
  else {
    const c = parse(r.text).querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (c !== loc) err('sitemap.xml', `${loc} canonical'i ${c}`);
  }
}
for (const p of indexable) if (!smUrls.includes(SITE + (p === '/' ? '/' : p))) err('sitemap.xml', `indekslenebilir sayfa haritada yok: ${p}`);

// ------------------------------------------------------------------ llms.txt ve beslemeler
const llms = await get('/llms.txt');
if (llms.status !== 200 || !/^# .+\n\n> .+/.test(llms.text)) err('llms.txt', 'yok ya da bicim hatali (# baslik + > ozet)');
if (!llms.type.includes('charset=utf-8')) warn('llms.txt', 'Content-Type utf-8 degil');
for (const m of llms.text.matchAll(/\]\((https:\/\/www\.bote\.web\.tr[^)]*)\)/g)) {
  const r = await get(m[1]);
  if (r.status !== 200) err('llms.txt', `${m[1]} HTTP ${r.status}`);
}
if ((await get('/llms-full.txt')).status !== 200) err('llms-full.txt', 'yok');
const rss = await get('/blog/feed.xml');
try {
  const f = xml.parse(rss.text);
  const items = [].concat(f.rss.channel.item || []);
  if (items.length !== Math.min(posts.length, 20)) err('feed.xml', `oge sayisi ${items.length}, yazi sayisi ${posts.length}`);
  for (const it of items) if ((await get(it.link)).status !== 200) err('feed.xml', `${it.link} ulasilamiyor`);
} catch (e) { err('feed.xml', `gecersiz XML: ${e.message}`); }
try { JSON.parse((await get('/blog/feed.json')).text); } catch (e) { err('feed.json', `gecersiz JSON: ${e.message}`); }
for (const p of posts) {
  const md = await get(`${p.url}.md`);
  if (md.status !== 200 || !md.text.includes('## Kaynaklar')) err(`${p.url}.md`, 'Markdown surumu yok ya da kaynakca eksik');
}

// ------------------------------------------------------------------ yayindan kaldirilanlar
for (const p of ['/egt303', '/bte311', '/bte304', '/ebit/ai', '/en/ebit/online', '/person', '/query', '/tools/package.json', '/content/blog/blog.yml', '/CLAUDE.md', '/README.md']) {
  const r = await get(p);
  if (r.status !== 404) err('yayin disi', `${p} HTTP ${r.status} (404 olmali)`);
}

// ------------------------------------------------------------------ sayac API
{
  const bad = await get('/api/views', { method: 'POST', body: JSON.stringify({ slug: 'olmayan-yazi' }) });
  if (bad.status !== 400) err('/api/views', `bilinmeyen slug ${bad.status} dondu (400 olmali)`);
  const top = await get('/api/views?top=5');
  if (top.status !== 200 || !Array.isArray(JSON.parse(top.text).top)) err('/api/views', 'top listesi donmedi');
  if (posts.length) {
    const s = posts[0].slug;
    const a = JSON.parse((await get('/api/views', { method: 'POST', body: JSON.stringify({ slug: s }) })).text);
    const b = JSON.parse((await get('/api/views', { method: 'POST', body: JSON.stringify({ slug: s }) })).text);
    const bot = JSON.parse((await get('/api/views', { method: 'POST', body: JSON.stringify({ slug: s }), ua: 'GPTBot/1.1' })).text);
    if (!a.counted || a.views !== 1) err('/api/views', `ilk goruntulenme sayilmadi: ${JSON.stringify(a)}`);
    if (b.counted || b.views !== 1) err('/api/views', `ayni ziyaretci tekrar sayildi: ${JSON.stringify(b)}`);
    if (bot.counted) err('/api/views', 'bot goruntulenmesi sayildi');
  }
}
{
  const { createHandler } = await import('../api/_lib/views-core.js').then((m) => m.default || m);
  let body = '';
  const res = { statusCode: 0, setHeader() {}, end(b) { body = b; } };
  await createHandler({ store: null, slugs: [] })({ method: 'GET', url: '/api/views?top=3', headers: {} }, res);
  if (res.statusCode !== 200 || !JSON.parse(body).disabled) err('/api/views', 'depo yokken { disabled: true } donmeli');
}

// ------------------------------------------------------------------ yapay zeka ajanlari
for (const ua of ['Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)', 'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)', 'Mozilla/5.0 (compatible; PerplexityBot/1.0)', 'Googlebot/2.1 (+http://www.google.com/bot.html)']) {
  for (const p of ['/', '/blog', '/about', ...posts.slice(0, 2).map((x) => x.url)]) {
    const r = await get(p, { ua });
    const h1 = parse(r.text).querySelector('h1')?.text.trim();
    if (r.status !== 200 || !h1) err('ajan erisimi', `${ua.split(';')[1] || ua} ${p}: HTTP ${r.status}${h1 ? '' : ', h1 yok'}`);
  }
}

server.close();
for (const w of warnings) console.warn(`uyari  ${w}`);
for (const e of errors) console.error(`HATA   ${e}`);
console.log(`\n${pages.size} sayfa, ${linkChecks.size} ic baglanti, ${smUrls.length} sitemap adresi, ${posts.length} yazi denetlendi: ${errors.length} hata, ${warnings.length} uyari`);
process.exit(errors.length ? 1 : 0);
