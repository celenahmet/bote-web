// BÖTE Blog derlemesi: Astro (tools/blog-app) blog/ sayfalarini, bu betik kok dosyalari uretir.
//   npm run build               content/blog -> blog/ + sitemap.xml, llms.txt, llms-full.txt, site haritalari
//   npm run build -- --check    ciktilar guncel mi? (hicbir sey yazmaz; test icin)
//   npm run build -- --drafts   taslaklari da uretir (YALNIZCA yerel onizleme; commit etmeyin)
//   npm run build -- --covers   kapak gorsellerini yeniden uretir
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { deployedFiles } from './serve.mjs';
import { loadBlog, postMarkdown, ROOT, COVER_DIR } from './blog/content.mjs';
import { UNIVERSITIES } from './blog/site-nav.mjs';
import { makeCovers } from './blog/covers.mjs';
import { esc, xmlEsc } from './blog/util.mjs';

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const DRAFTS = args.includes('--drafts');
const FORCE_COVERS = args.includes('--covers');
const TOOLS = path.join(ROOT, 'tools');

// ---------------------------------------------------------------- guard
for (const wp of ['blog/wp-config.php', 'blog/wp-includes', 'blog/wp-admin', 'blog/wp-content']) {
  if (fs.existsSync(path.join(ROOT, wp))) {
    console.error(`HATA: ${wp} bulundu. Eski WordPress agacini depo disina tasiyin (or. ../bote-wp-arsiv/);\nblog/ klasoru artik uretici tarafindan yonetiliyor.`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------- icerik
let blog = loadBlog({ drafts: DRAFTS });
let { cfg, SITE, abs, author, categories, posts, drafts, newest } = blog;
if (blog.errors.length) {
  console.error(`Blog dogrulama hatalari:\n- ${blog.errors.join('\n- ')}`);
  process.exit(1);
}
const warnings = [...blog.warnings];

if (!CHECK) {
  const made = await makeCovers(
    [{ slug: '_blog', title: 'Bölüm, eğitim fakültesi ve öğretmenlik üzerine kaynaklı yazılar', label: 'BÖTE Blog', langs: [] },
      ...[...posts, ...blog.previews].filter((p) => !p.imageSrc).map((p) => ({ slug: p.slug, title: p.title, label: p.category.name, langs: p.sources.map((s) => s.lang) }))],
    { root: ROOT, outDir: COVER_DIR, force: FORCE_COVERS },
  );
  if (made.length) {
    console.log(`gorsel uretildi: ${made.join(', ')}`);
    blog = loadBlog({ drafts: DRAFTS, fresh: true });
    ({ cfg, SITE, abs, author, categories, posts, drafts, newest } = blog);
  }
}

// ---------------------------------------------------------------- Astro
const astroOut = fs.mkdtempSync(path.join(os.tmpdir(), 'bote-astro-'));
const astro = spawnSync(path.join(TOOLS, 'node_modules/.bin/astro'), ['build', '--root', path.join(TOOLS, 'blog-app'), '--silent'], {
  cwd: TOOLS, encoding: 'utf8',
  env: { ...process.env, BLOG_OUT_DIR: astroOut, BLOG_DRAFTS: DRAFTS ? '1' : '0', BOTE_ROOT: ROOT, ASTRO_TELEMETRY_DISABLED: '1' },
});
if (astro.status !== 0) {
  console.error(`Astro derlemesi basarisiz:\n${astro.stdout}\n${astro.stderr}`);
  process.exit(1);
}
const out = new Map(); // depo yolu -> icerik
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(full, r);
    else out.set(`blog/${r}`, fs.readFileSync(full));
  }
})(astroOut, '');
fs.rmSync(astroOut, { recursive: true, force: true });
out.set('api/_lib/posts.json', `${JSON.stringify(posts.map((p) => p.slug))}\n`);

// ---------------------------------------------------------------- eski sayfalar (sitemap, llms.txt)
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
function pageInfo(rel, html) {
  const get = (re) => { const m = re.exec(html); return m ? decode(m[1].trim()) : ''; };
  const served = `/${rel.replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '')}`.replace(/\/$/, '') || '/';
  return {
    rel, served,
    canonical: get(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i),
    robots: get(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/i),
    title: get(/<title>([\s\S]*?)<\/title>/i),
    description: get(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    alternates: [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi)].map((m) => ({ hreflang: m[1], href: m[2] })),
  };
}
const legacy = [];
for (const rel of deployedFiles(ROOT).filter((f) => f.endsWith('.html') && !f.startsWith('blog/') && f !== '404.html' && !/^google[0-9a-f]+\.html$/.test(f))) {
  const info = pageInfo(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8'));
  if (/noindex/i.test(info.robots)) continue;
  if (!info.canonical) { warnings.push(`${rel}: canonical yok; sitemap'e alinmadi`); continue; }
  if (info.canonical !== abs(info.served)) { warnings.push(`${rel}: canonical (${info.canonical}) sayfa adresiyle ayni degil; sitemap'e alinmadi`); continue; }
  legacy.push(info);
}

// Taslak onizlemeleri (blog/taslak) noindex'tir; sitemap'e girmez.
const blogPages = [...out.keys()].filter((k) => /^blog\/(.+\/)?index\.html$/.test(k) && !k.startsWith('blog/taslak/')).map((k) => `/${k.replace(/\/index\.html$/, '')}`);
const urls = [
  ...legacy.map((l) => ({ loc: l.canonical, alternates: l.alternates })),
  ...blogPages.map((u) => {
    const p = posts.find((x) => x.url === u);
    const listing = u === '/blog' || u.startsWith('/blog/sayfa') || u.startsWith('/blog/kategori');
    return { loc: abs(u), lastmod: p ? p.updated : listing && posts.length ? newest : null, image: p ? abs(p.image.src) : null };
  }),
].sort((a, b) => a.loc.localeCompare(b.loc));
out.set('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url><loc>${xmlEsc(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}${(u.alternates || []).map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${xmlEsc(a.href)}"/>`).join('')}${u.image ? `<image:image><image:loc>${xmlEsc(u.image)}</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);

const live = posts.filter((p) => !p.draft);
const trPages = legacy.filter((l) => !l.served.startsWith('/en')).sort((a, b) => a.served.localeCompare(b.served));
const enPages = legacy.filter((l) => l.served.startsWith('/en')).sort((a, b) => a.served.localeCompare(b.served));
const line = (l) => `- [${l.title}](${l.canonical})${l.description ? `: ${l.description}` : ''}`;
out.set('llms.txt', `# BÖTE — Bilgisayar ve Öğretim Teknolojileri Eğitimi

> bote.web.tr, Türkiye'deki Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) bölümünü tanıtan Türkçe/İngilizce bilgi sitesidir. Bölümün müfredatı, meslek unvanları, staj ve akreditasyon bilgileri ile BÖTE, eğitim fakülteleri ve öğretmen yetiştirme üzerine kaynakları doğrulanmış blog yazıları içerir.

- Blog yazıları en az iki uluslararası kaynağa dayanır; her yazının sonunda numaralı kaynakça vardır.
- Her blog yazısının Markdown sürümü, yazı adresine \`.md\` eklenerek alınabilir. Tüm yazıların tam metni: ${SITE}/llms-full.txt
- İçerik kaynak gösterilerek alıntılanabilir. Yayın ilkeleri: ${SITE}/blog/${cfg.author.slug}

## Blog

- [${cfg.title}](${SITE}/blog): ${cfg.description.trim()}
${live.map((p) => `- [${p.title}](${abs(p.url)}.md): ${p.description} (${p.category.name}, ${p.updated})`).join('\n')}

## Bölüm sayfaları

${trPages.map(line).join('\n')}

## English pages

${enPages.map(line).join('\n')}

## Optional

- [RSS beslemesi](${SITE}/blog/feed.xml)
- [JSON Feed](${SITE}/blog/feed.json)
- [Site haritası (XML)](${SITE}/sitemap.xml)
`.replace(/\n{3,}/g, '\n\n'));
out.set('llms-full.txt', `# BÖTE Blog — tüm yazılar

> ${cfg.description.trim()} Kaynak: ${SITE}/blog

${live.map((p) => postMarkdown(blog, p, false)).join('\n---\n\n') || 'Henüz yayımlanmış yazı yok.\n'}`);

// HTML site haritalari (site-map, en/site-map): isaretler arasi her derlemede yenilenir.
{
  const li = (href, text, extra = '') => `<li><a href="${href}"${extra}>${esc(text)}</a></li>`;
  const clean = (t) => t.replace(/\s*[|:–-]\s*(BÖTE|CEIT)( Blog)?\s*$/i, '').replace(/^(BÖTE|CEIT)\s*[-:]\s*/i, '').trim();
  const group = (title, items) => (items.length ? `<h2>${esc(title)}</h2>\n<ul class="site-map-list">\n${items.join('\n')}\n</ul>` : '');
  const trHtml = [
    group('Bölüm sayfaları', trPages.map((l) => li(l.served, clean(l.title)))),
    group('Blog', [li('/blog', 'BÖTE Blog'), ...categories.filter((c) => c.count).map((c) => li(c.url, `Kategori: ${c.name}`)),
      ...live.map((p) => li(p.url, p.title)), li(author.url, `${author.name} ve Yayın İlkeleri`)]),
    group('Üniversitelerin BÖTE bölümleri', UNIVERSITIES.map(([n, h]) => li(h, n, ' target="_blank" rel="noopener"'))),
    group('English pages', enPages.map((l) => li(l.served, clean(l.title), ' hreflang="en" lang="en"'))),
  ].join('\n');
  const enHtml = [
    group('English pages', enPages.map((l) => li(l.served, clean(l.title)))),
    group('Universities (CEIT departments)', UNIVERSITIES.map(([n, h]) => li(`/en${h}`, n, ' target="_blank" rel="noopener"'))),
    group('Turkish pages and blog', [li('/blog', 'BÖTE Blog (Turkish)', ' hreflang="tr" lang="tr"'),
      ...trPages.map((l) => li(l.served, clean(l.title), ' hreflang="tr" lang="tr"'))]),
  ].join('\n');
  for (const [file, body] of [['site-map/index.html', trHtml], ['en/site-map/index.html', enHtml]]) {
    const cur = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const re = /(<!-- sitemap:links:start -->)[\s\S]*?(<!-- sitemap:links:end -->)/;
    if (!re.test(cur)) { warnings.push(`${file}: sitemap isaretleri yok`); continue; }
    out.set(file, cur.replace(re, `$1\n${body}\n$2`));
  }
}

if (cfg.ads.adsense.client) out.set('ads.txt', `google.com, ${cfg.ads.adsense.client.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);

// ---------------------------------------------------------------- yaz / denetle
const managedRoot = ['sitemap.xml', 'llms.txt', 'llms-full.txt', 'api/_lib/posts.json', 'site-map/index.html', 'en/site-map/index.html'];
function existingBlogFiles() {
  const res = [];
  if (!fs.existsSync(path.join(ROOT, 'blog'))) return res;
  (function walk(d) {
    for (const e of fs.readdirSync(path.join(ROOT, d), { withFileTypes: true })) {
      const rel = `${d}/${e.name}`;
      if (e.isDirectory()) walk(rel); else res.push(rel);
    }
  })('blog');
  return res;
}
const stale = existingBlogFiles().filter((f) => !out.has(f));
const changed = [...out].filter(([k, v]) => {
  const f = path.join(ROOT, k);
  return !fs.existsSync(f) || !fs.readFileSync(f).equals(Buffer.from(v));
}).map(([k]) => k);

for (const w of warnings) console.warn(`uyari: ${w}`);
if (CHECK) {
  if (stale.length || changed.length) {
    console.error(`Uretilen dosyalar guncel degil. \`cd tools && npm run build\` calistirip commit edin.\n${[...changed.map((c) => `  degisecek: ${c}`), ...stale.map((s) => `  silinecek: ${s}`)].join('\n')}`);
    process.exit(1);
  }
  console.log(`blog ciktilari guncel (${posts.length} yazi, ${drafts.length} taslak)`);
} else {
  for (const f of stale) fs.unlinkSync(path.join(ROOT, f));
  for (const [k, v] of out) {
    const f = path.join(ROOT, k);
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, v);
  }
  (function prune(d) {
    const full = path.join(ROOT, d);
    if (!fs.existsSync(full)) return;
    for (const e of fs.readdirSync(full, { withFileTypes: true })) if (e.isDirectory()) prune(`${d}/${e.name}`);
    if (d !== 'blog' && !fs.readdirSync(full).length) fs.rmdirSync(full);
  })('blog');
  console.log(`blog uretildi: ${posts.length} yazi${DRAFTS ? ' (TASLAKLAR DAHIL — commit etmeyin, `npm run build` ile geri alin)' : ''}, ${drafts.length} taslak; ${changed.length} dosya yazildi, ${stale.length} silindi`);
  if (managedRoot.some((m) => changed.includes(m))) console.log(`  guncellenen kok dosyalar: ${managedRoot.filter((m) => changed.includes(m)).join(', ')}`);
}
