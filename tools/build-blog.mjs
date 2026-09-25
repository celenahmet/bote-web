// BÖTE Blog ureticisi.
//   npm run build               content/blog -> blog/, sitemap.xml, llms.txt, llms-full.txt
//   npm run build -- --check    ciktilar guncel mi? (degisiklik yazmaz; CI/test icin)
//   npm run build -- --drafts   taslaklari da uretir (YALNIZCA yerel onizleme; commit etmeyin)
//   npm run build -- --covers   kapak gorsellerini yeniden uretir
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';
import { ROOT, deployedFiles } from './serve.mjs';
import { renderMarkdown, renderInline } from './blog/markdown.mjs';
import { makeCovers } from './blog/covers.mjs';
import * as T from './blog/templates.mjs';
import { esc, trDate, isoDate, toDateString, stripHtml, readingMinutes, imageSize, xmlEsc } from './blog/util.mjs';

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const DRAFTS = args.includes('--drafts');
const FORCE_COVERS = args.includes('--covers');
const CONTENT = path.join(ROOT, 'content/blog');
const TOOLS = path.join(ROOT, 'tools');
const errors = [];
const warnings = [];

// ---------------------------------------------------------------- guard
for (const wp of ['blog/wp-config.php', 'blog/wp-includes', 'blog/wp-admin', 'blog/wp-content']) {
  if (fs.existsSync(path.join(ROOT, wp))) {
    console.error(`HATA: ${wp} bulundu. Eski WordPress agacini depo disina tasiyin (or. ../bote-wp-arsiv/);\n` +
      'blog/ klasoru artik uretici tarafindan yonetiliyor.');
    process.exit(1);
  }
}

// ---------------------------------------------------------------- config
const cfg = YAML.parse(fs.readFileSync(path.join(CONTENT, 'blog.yml'), 'utf8'));
const SITE = cfg.siteUrl.replace(/\/$/, '');
const abs = (p) => (p.startsWith('http') ? p : SITE + p);
const author = { name: cfg.author.name, url: `/blog/${cfg.author.slug}`, id: `${SITE}/blog/${cfg.author.slug}#ekip` };
const categories = cfg.categories.map((c) => ({ ...c, url: `/blog/kategori/${c.slug}`, count: 0 }));
const catBy = Object.fromEntries(categories.map((c) => [c.slug, c]));

const assetFiles = ['blog.css', 'blog.js'].map((f) => path.join(TOOLS, 'blog/assets', f));
const assetVersion = crypto.createHash('sha256').update(assetFiles.map((f) => fs.readFileSync(f)).join('')).digest('hex').slice(0, 8);
const FONT_DIR = path.join(TOOLS, 'node_modules/@fontsource/poppins/files');
const FONTS = [400, 600, 700].flatMap((w) => ['latin', 'latin-ext'].map((s) => `poppins-${s}-${w}-normal.woff2`));

// ---------------------------------------------------------------- posts
function parseFile(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
  if (!m) throw new Error(`${file}: front matter (--- ... ---) yok`);
  return { fm: YAML.parse(m[1]) || {}, body: m[2] };
}

function loadPosts(dir, draft) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort().map((f) => {
    const file = path.join(dir, f);
    const rel = path.relative(ROOT, file);
    const { fm, body } = parseFile(file);
    const slug = fm.slug || f.replace(/\.md$/, '');
    const e = (msg) => errors.push(`${rel}: ${msg}`);
    const w = (msg) => warnings.push(`${rel}: ${msg}`);

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) e(`slug gecersiz: ${slug}`);
    if (['sayfa', 'kategori', 'assets', cfg.author.slug].includes(slug)) e(`slug ayrilmis: ${slug}`);
    if (!fm.title) e('title zorunlu');
    else if (fm.title.length > 70) w(`title ${fm.title.length} karakter (arama sonucunda kesilebilir; <= 60 onerilir)`);
    const desc = String(fm.description || '').replace(/\s+/g, ' ').trim();
    if (desc.length < 70 || desc.length > 165) e(`description 70-165 karakter olmali (su an ${desc.length})`);
    if (!catBy[fm.category]) e(`kategori tanimsiz: ${fm.category} (blog.yml > categories)`);
    let date, updated;
    try { date = toDateString(fm.date); updated = fm.updated ? toDateString(fm.updated) : date; } catch (err) { e(err.message); }
    if (date && updated < date) e('updated, date tarihinden once olamaz');

    const sources = (fm.sources || []).map((s, i) => {
      const where = `sources[${i}]${s.id ? ` (${s.id})` : ''}`;
      for (const k of ['id', 'title', 'url', 'lang', 'year', 'accessed']) if (!s[k]) e(`${where}: ${k} zorunlu`);
      if (!s.author && !s.publisher) e(`${where}: author veya publisher zorunlu`);
      if (s.url && !/^https:\/\//.test(s.url)) w(`${where}: url https degil`);
      if (s.accessed) { try { s.accessed = toDateString(s.accessed); } catch (err) { e(`${where}: ${err.message}`); } }
      return { ...s, lang: String(s.lang || '').toLowerCase() };
    });
    const foreign = sources.filter((s) => s.lang && s.lang !== 'tr').length;
    if (foreign < cfg.minForeignSources) e(`en az ${cfg.minForeignSources} yabanci kaynak zorunlu (su an ${foreign})`);

    let html = '', headings = [], citeOrder = [];
    try {
      ({ html, headings, citeOrder } = renderMarkdown(body, { sources, root: ROOT, file: rel }));
    } catch (err) { e(err.message); }
    for (const s of sources) if (!citeOrder.includes(s.id)) e(`kaynak metinde hic atif almamis: [@${s.id}]`);
    const ordered = [...citeOrder.map((id) => sources.find((s) => s.id === id)), ...sources.filter((s) => !citeOrder.includes(s.id))];
    ordered.forEach((s, i) => (s.n = i + 1));

    const text = stripHtml(html);
    const { words, minutes } = readingMinutes(text);
    if (words < 600) w(`govde kisa (${words} kelime)`);
    if (headings.filter((h) => h.depth === 2).length < 2) w('en az 2 ara baslik (##) onerilir');
    const summary = fm.summary || [];
    if (summary.length < 3) w('summary (Kisaca) icin en az 3 madde onerilir');

    return {
      slug, file: rel, draft, title: fm.title, description: desc, date, updated,
      category: catBy[fm.category] || { name: '?', url: '/blog', slug: '?' },
      tags: fm.tags || [], featured: !!fm.featured, summary, faq: fm.faq || [],
      sources: ordered, citeOrder, html, headings, body, words, minutes,
      url: `/blog/${slug}`, imageAlt: fm.imageAlt || '', imageSrc: fm.image || null,
    };
  });
}

let posts = loadPosts(path.join(CONTENT, 'posts'), false);
const drafts = loadPosts(path.join(CONTENT, 'drafts'), true);
if (DRAFTS) posts = posts.concat(drafts);
const dupe = posts.map((p) => p.slug).filter((s, i, a) => a.indexOf(s) !== i);
if (dupe.length) errors.push(`ayni slug birden fazla: ${dupe.join(', ')}`);

if (errors.length) {
  console.error(`Blog dogrulama hatalari:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'tr'));
for (const p of posts) catBy[p.category.slug].count++;

// ---------------------------------------------------------------- images
const COVER_DIR = path.join(CONTENT, 'covers');
if (!CHECK) {
  await makeCovers(
    [{ slug: '_blog', title: 'Bölüm, eğitim fakültesi ve öğretmenlik üzerine kaynaklı yazılar', label: 'BÖTE Blog' },
      ...posts.filter((p) => !p.imageSrc).map((p) => ({ slug: p.slug, title: p.title, label: p.category.name }))],
    { root: ROOT, outDir: COVER_DIR, force: FORCE_COVERS },
  );
}
const out = new Map(); // yayin yolu -> icerik
function cover(slug) {
  const f = path.join(COVER_DIR, `${slug}.jpg`);
  if (!fs.existsSync(f)) return null;
  out.set(`blog/assets/covers/${slug}.jpg`, fs.readFileSync(f));
  return { src: `/blog/assets/covers/${slug}.jpg`, ...imageSize(f) };
}
const fallbackImg = { src: '/assets/img/educator-img14.jpg', ...imageSize(path.join(ROOT, 'assets/img/educator-img14.jpg')) };
const blogImage = cover('_blog') || fallbackImg;
for (const p of posts) {
  if (p.imageSrc) p.image = { src: p.imageSrc, ...imageSize(path.join(ROOT, p.imageSrc)) };
  else p.image = cover(p.slug) || blogImage;
  if (!p.imageAlt) p.imageAlt = `${p.title} — kapak görseli`;
}

const newest = posts.reduce((m, p) => (p.updated > m ? p.updated : m), '2026-09-25');
const ctx = {
  siteUrl: SITE, title: cfg.title, author, categories, posts, ads: cfg.ads, assetVersion,
  year: newest.slice(0, 4),
};

// ---------------------------------------------------------------- assets
for (const f of assetFiles) out.set(`blog/assets/${path.basename(f)}`, fs.readFileSync(f));
for (const f of FONTS) out.set(`blog/assets/fonts/${f}`, fs.readFileSync(path.join(FONT_DIR, f)));

// ---------------------------------------------------------------- pages
const blogCrumb = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog' }];
const orgRef = { '@id': `${SITE}/#org` };
const teamLd = {
  '@type': 'Organization', '@id': author.id, name: author.name, url: abs(author.url),
  parentOrganization: orgRef, description: 'bote.web.tr blog içeriklerini hazırlayan, kaynaklarını doğrulayan ve güncelleyen ekip.',
};
const publisherLd = {
  '@type': 'Organization', '@id': `${SITE}/#org`, name: 'BÖTE', url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/assets/img/educator-fabicon-300x300.png`, width: 300, height: 300 },
};

function hero({ trail, title, lead, chip, metaHtml, id }) {
  return `<header class="hero"><div class="wrap">
  ${T.crumbs(trail)}
  <div class="zigzag" aria-hidden="true"></div>
  ${chip || ''}
  <h1${id ? ` id="${id}"` : ''}>${esc(title)}</h1>
  ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
  ${metaHtml || ''}
</div></header>`;
}

function listPage({ list, page, pages, base, trail, title, h1, lead, description, ld, emptyHtml }) {
  const url = page === 1 ? base : `${base}/sayfa/${page}`;
  const pageTitle = page === 1 ? title : `${title} (Sayfa ${page})`;
  let content = '';
  if (!list.length) content = emptyHtml;
  else {
    const [first, ...rest] = page === 1 ? list : [null, ...list];
    content = `${first ? T.card(first, { featured: true, headingLevel: 2 }) : ''}
    ${rest.length ? `<h2 class="section-title">${page === 1 ? 'Son Yazılar' : `Yazılar — Sayfa ${page}`}</h2><div class="cards">${rest.map((p) => T.card(p)).join('\n')}</div>` : ''}
    ${T.pagination(page, pages, base)}`;
  }
  const body = `${hero({ trail: page === 1 ? trail : [...trail.slice(0, -1), { name: trail.at(-1).name, url: base }, { name: `Sayfa ${page}` }], title: h1, lead })}
<div class="wrap layout">
  <div class="content">${content}</div>
  ${T.sidebar(ctx)}
</div>`;
  return T.layout(ctx, { title: pageTitle, description: page === 1 ? description : `${description} Sayfa ${page}.`, url, image: blogImage, ld, body });
}

function paginate(list, base, render) {
  const per = cfg.perPage;
  const pages = Math.max(1, Math.ceil(list.length / per));
  for (let page = 1; page <= pages; page++) {
    const slice = list.slice((page - 1) * per, page * per);
    const html = render(slice, page, pages);
    out.set(page === 1 ? `${base.slice(1)}/index.html` : `${base.slice(1)}/sayfa/${page}/index.html`, html);
  }
}

// Blog ana sayfasi
const emptyBlog = `<div class="empty">
  <h2>İlk yazılar yolda</h2>
  <p>BÖTE bölümü, eğitim fakülteleri ve öğretmen yetiştirme üzerine hazırladığımız yazılar kaynak doğrulaması ve editör onayından sonra burada yayımlanacak.</p>
  <p><a class="text-link" href="${author.url}">Yayın ilkelerimizi okuyun</a> · <a class="text-link" href="/about">BÖTE hakkında bilgi alın</a></p>
</div>`;
// Ana sayfada en guncel "featured" yazi en uste alinir, digerleri tarih sirasiyla.
const lead = posts.find((p) => p.featured);
const indexList = lead ? [lead, ...posts.filter((p) => p !== lead)] : posts;
paginate(indexList, '/blog', (slice, page, pages) => listPage({
  list: slice, page, pages, base: '/blog', trail: blogCrumb,
  title: 'BÖTE Blog: Bölüm, Eğitim Fakültesi ve Öğretmenlik', h1: cfg.title, lead: cfg.tagline,
  description: cfg.description.replace(/\s+/g, ' ').trim(),
  emptyHtml: emptyBlog,
  ld: { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Blog', '@id': `${SITE}/blog#blog`, url: `${SITE}/blog`, name: cfg.title, description: cfg.description.trim(),
      inLanguage: 'tr-TR', publisher: orgRef, isPartOf: { '@id': `${SITE}/#site` },
      blogPost: slice.map((p) => ({ '@type': 'BlogPosting', '@id': `${abs(p.url)}#yazi`, headline: p.title, url: abs(p.url), datePublished: isoDate(p.date) })) },
    { '@type': 'WebSite', '@id': `${SITE}/#site`, url: `${SITE}/`, name: 'BÖTE', inLanguage: 'tr-TR', publisher: orgRef },
    publisherLd,
    T.breadcrumbLd(ctx, page === 1 ? blogCrumb : [...blogCrumb, { name: `Sayfa ${page}`, url: `/blog/sayfa/${page}` }]),
  ] },
}));

// Kategori sayfalari (yalnizca yazisi olanlar; bos kategori ince icerik olur)
for (const c of categories.filter((c) => c.count)) {
  const list = posts.filter((p) => p.category.slug === c.slug);
  const trail = [...blogCrumb, { name: c.name, url: c.url }];
  paginate(list, c.url, (slice, page, pages) => listPage({
    list: slice, page, pages, base: c.url, trail,
    title: `${c.name} | BÖTE Blog`, h1: c.name, lead: c.description, description: c.description,
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': `${abs(c.url)}#sayfa`, url: abs(c.url), name: `${c.name} | BÖTE Blog`, description: c.description,
        inLanguage: 'tr-TR', isPartOf: { '@id': `${SITE}/blog#blog` },
        mainEntity: { '@type': 'ItemList', itemListElement: slice.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(p.url), name: p.title })) } },
      T.breadcrumbLd(ctx, trail),
    ] },
  }));
}

// Yazilar
function sourceHtml(s) {
  const who = s.author ? `${esc(s.author)} (${esc(s.year)}). ` : '';
  const pub = s.publisher && s.publisher !== s.author ? ` ${esc(s.publisher)}.` : '';
  const pubFirst = !s.author ? `${esc(s.publisher)} (${esc(s.year)}). ` : '';
  const note = s.note ? ` ${renderInline(s.note)}` : '';
  return `<li id="kaynak-${s.n}">${who}${pubFirst}<cite>${esc(s.title)}</cite>.${s.author ? pub : ''}${note} <a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a><span class="lang" title="Kaynak dili">${esc(s.lang.toUpperCase())}</span> <span class="accessed">Erişim: ${trDate(s.accessed)}</span></li>`;
}

function related(p) {
  const same = posts.filter((x) => x !== p && x.category.slug === p.category.slug);
  const other = posts.filter((x) => x !== p && x.category.slug !== p.category.slug);
  return [...same, ...other].slice(0, 3);
}

posts.forEach((p, i) => {
  const trail = [...blogCrumb, { name: p.category.name, url: p.category.url }, { name: p.title, url: p.url }];
  const newer = posts[i - 1];
  const older = posts[i + 1];
  const toc = p.headings.length >= 3
    ? `<nav class="toc" aria-labelledby="toc-${p.slug}"><h2 id="toc-${p.slug}">İçindekiler</h2><ol>${tocHtml(p.headings)}</ol></nav>`
    : '';
  const summary = p.summary.length
    ? `<section class="tldr" aria-labelledby="kisaca"><h2 id="kisaca">Kısaca</h2><ul>${p.summary.map((s) => `<li>${renderInline(s)}</li>`).join('')}</ul></section>`
    : '';
  const faq = p.faq.length
    ? `<section class="faq"><h2 id="sss">Sık Sorulan Sorular</h2>${p.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${renderInline(f.a)}</p>`).join('')}</section>`
    : '';
  const share = [
    ['X', `https://twitter.com/intent/tweet?url=${encodeURIComponent(abs(p.url))}&text=${encodeURIComponent(p.title)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(abs(p.url))}`],
    ['WhatsApp', `https://wa.me/?text=${encodeURIComponent(`${p.title} ${abs(p.url)}`)}`],
  ].map(([n, u]) => `<a href="${esc(u)}" rel="noopener nofollow" target="_blank">${n}</a>`).join('');
  const rel = related(p);
  const body = `${hero({
    trail, title: p.title, lead: p.description, id: 'yazi-basligi',
    chip: `<a class="chip" href="${p.category.url}">${esc(p.category.name)}</a>`,
    metaHtml: T.meta(p, { author }),
  })}
<div class="wrap layout">
  <article class="post" aria-labelledby="yazi-basligi">
    ${p.draft ? '<p class="draft-banner">TASLAK — editör onayı bekliyor, yayında değil.</p>' : ''}
    <figure class="post-cover"><img src="${p.image.src}" width="${p.image.width}" height="${p.image.height}" alt="${esc(p.imageAlt)}" fetchpriority="high" decoding="async"></figure>
    ${summary}
    ${toc}
    <div class="post-body">
${p.html}
${faq}
    </div>
    <section class="sources" id="kaynaklar" aria-labelledby="kaynaklar-baslik">
      <h2 id="kaynaklar-baslik">Kaynaklar</h2>
      <ol>${p.sources.map(sourceHtml).join('\n')}</ol>
    </section>
    <aside class="editorial-note" aria-label="Editör notu">
      <p>Bu yazı <a href="${author.url}">${esc(author.name)}</a> tarafından hazırlandı. Kaynaklar en son ${trDate(p.sources.reduce((m, s) => (s.accessed > m ? s.accessed : m), p.date))} tarihinde kontrol edildi.</p>
      <p>Bir hata mı gördünüz? <a href="/contact">İletişim sayfasından</a> bize bildirin; düzeltmeleri tarihiyle birlikte yazıya işleriz.</p>
    </aside>
    <div class="share"><span class="share-title">Paylaş:</span>${share}<button type="button" data-copy="${abs(p.url)}" hidden>Bağlantıyı kopyala</button></div>
    ${T.adSlot(ctx, 'article-end')}
    ${newer || older ? `<nav class="prev-next" aria-label="Diğer yazılar">
      ${older ? `<a class="prev" href="${older.url}"><span>Önceki yazı</span>${esc(older.title)}</a>` : '<span></span>'}
      ${newer ? `<a class="next" href="${newer.url}"><span>Sonraki yazı</span>${esc(newer.title)}</a>` : ''}
    </nav>` : ''}
    ${rel.length ? `<section class="related" aria-labelledby="ilgili"><h2 id="ilgili" class="section-title">İlgili Yazılar</h2><div class="cards">${rel.map((r) => T.card(r)).join('\n')}</div></section>` : ''}
  </article>
  ${T.sidebar(ctx, { current: p.slug })}
</div>`;
  const ld = { '@context': 'https://schema.org', '@graph': [
    {
      '@type': 'BlogPosting', '@id': `${abs(p.url)}#yazi`, mainEntityOfPage: abs(p.url), url: abs(p.url),
      headline: p.title, description: p.description, inLanguage: 'tr-TR',
      image: { '@type': 'ImageObject', url: abs(p.image.src), width: p.image.width, height: p.image.height },
      datePublished: isoDate(p.date), dateModified: isoDate(p.updated),
      author: { '@type': 'Organization', '@id': author.id, name: author.name, url: abs(author.url) },
      publisher: orgRef, isPartOf: { '@id': `${SITE}/blog#blog` },
      articleSection: p.category.name, keywords: p.tags.join(', '), wordCount: p.words, timeRequired: `PT${p.minutes}M`,
      citation: p.sources.map((s) => ({
        '@type': 'CreativeWork', name: s.title, url: s.url, inLanguage: s.lang,
        ...(s.author ? { author: { '@type': 'Organization', name: s.author } } : {}),
        ...(s.publisher ? { publisher: { '@type': 'Organization', name: s.publisher } } : {}),
        ...(/^\d{4}$/.test(String(s.year)) ? { datePublished: String(s.year) } : {}),
      })),
    },
    publisherLd, teamLd,
    T.breadcrumbLd(ctx, trail),
    ...(p.faq.length ? [{ '@type': 'FAQPage', mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripHtml(renderInline(f.a)) } })) }] : []),
  ] };
  out.set(`blog/${p.slug}/index.html`, T.layout(ctx, {
    title: p.title.length <= 48 ? `${p.title} | BÖTE Blog` : p.title,
    description: p.description, url: p.url, image: p.image, imageAlt: p.imageAlt, type: 'article', ld, body, slug: p.slug,
    extraHead: `<link rel="alternate" type="text/markdown" title="Markdown sürümü" href="${p.url}.md">
<meta property="article:published_time" content="${isoDate(p.date)}">
<meta property="article:modified_time" content="${isoDate(p.updated)}">
<meta property="article:section" content="${esc(p.category.name)}">
`,
  }));
  out.set(`blog/${p.slug}.md`, postMarkdown(p, true));
});

function tocHtml(hs) {
  let html = '';
  let open = false;
  for (const h of hs) {
    if (h.depth === 2) {
      if (open) html += '</ol></li>';
      html += `<li><a href="#${h.id}">${esc(h.text)}</a>`;
      open = false;
      const next = hs[hs.indexOf(h) + 1];
      if (next && next.depth === 3) { html += '<ol>'; open = true; } else html += '</li>';
    } else html += `<li><a href="#${h.id}">${esc(h.text)}</a></li>`;
  }
  if (open) html += '</ol></li>';
  return html;
}

function postMarkdown(p, withFrontMatter) {
  const num = (id) => (p.sources.find((s) => s.id === id) || {}).n || '?';
  const bodyMd = p.body
    .replace(/\[@([\w-]+(?:\s*;\s*@[\w-]+)*)\]/g, (_, ids) => `[${ids.split(/\s*;\s*@?/).map((k) => num(k.replace(/^@/, ''))).join(', ')}]`)
    .replace(/\]\(\//g, `](${SITE}/`)
    .trim();
  const src = p.sources.map((s) => `${s.n}. ${s.author ? `${s.author} (${s.year}). ` : `${s.publisher} (${s.year}). `}${s.title}.${s.author && s.publisher && s.publisher !== s.author ? ` ${s.publisher}.` : ''} ${s.url} (${s.lang.toUpperCase()}, erişim: ${s.accessed})`).join('\n');
  const fm = withFrontMatter ? `---
title: ${JSON.stringify(p.title)}
url: ${abs(p.url)}
author: ${author.name}
published: ${p.date}
updated: ${p.updated}
category: ${p.category.name}
description: ${JSON.stringify(p.description)}
---

` : '';
  return `${fm}# ${p.title}

> ${p.description}

Yazan: ${author.name} · Yayın: ${p.date} · Güncelleme: ${p.updated} · ${p.minutes} dk okuma · ${abs(p.url)}
${p.summary.length ? `\n## Kısaca\n\n${p.summary.map((s) => `- ${s}`).join('\n')}\n` : ''}
${bodyMd}
${p.faq.length ? `\n## Sık Sorulan Sorular\n\n${p.faq.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}\n` : ''}
## Kaynaklar

${src}
`;
}

// Editor ekibi ve yayin ilkeleri
{
  const trail = [...blogCrumb, { name: author.name, url: author.url }];
  const body = `${hero({ trail, title: `${author.name} ve Yayın İlkeleri`, lead: 'BÖTE Blog yazılarını kimin, nasıl hazırladığını ve hangi ilkelere bağlı kaldığımızı açıklıyoruz.' })}
<div class="wrap layout">
  <div class="content page-body">
    <h2>Biz kimiz?</h2>
    <p>${esc(author.name)}, bote.web.tr'deki blog içeriklerini hazırlayan, kaynaklarını doğrulayan ve güncel tutan ekiptir. Sitenin kurucusu ve ekip üyeleri <a href="/crew">Ekibimiz</a> sayfasında yer alır.</p>
    <h2>Ne yazıyoruz?</h2>
    <p>Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) bölümü, eğitim fakülteleri, öğretmen yetiştirme ve eğitim teknolojileri üzerine; aday öğrencilere, öğrencilere, mezunlara ve velilere yol gösteren rehber yazılar yayımlıyoruz.</p>
    <h2>Kaynak ilkemiz</h2>
    <ul>
      <li>Her yazı <strong>en az iki uluslararası (yabancı) kaynağa</strong> dayanır.</li>
      <li>Mümkün olduğunca birincil kaynak kullanırız: YÖK, MEB ve ÖSYM gibi resmî kurumların belgeleri; UNESCO, OECD ve Avrupa Komisyonu gibi uluslararası kuruluşların raporları; hakemli akademik yayınlar.</li>
      <li>Türk akademisyenlerin tanım ve çalışmalarına da yer veririz.</li>
      <li>Metindeki her önemli bilgi numaralı bir kaynağa bağlanır; kaynakça, kaynağa son erişim tarihiyle birlikte yazının sonunda yer alır.</li>
    </ul>
    <h2>Doğrulama ve denge</h2>
    <p>Yazılar yayından önce kaynaklarıyla birlikte okunur ve doğrulanır; doğrulanamayan bilgi yayımlanmaz. Tartışmalı konularda farklı görüşlere yer verir, bölümleri ya da kurumları reklam diliyle anlatmayız.</p>
    <h2>Güncelleme ve düzeltme</h2>
    <p>Yazılar düzenli olarak gözden geçirilir; son güncelleme tarihi yazının başında gösterilir. Bir hata görürseniz <a href="/contact">İletişim</a> sayfasından bildirebilirsiniz; düzeltmeleri yazıya işleriz.</p>
    <h2>Yapay zekâ kullanımı</h2>
    <p>Taslak hazırlarken yapay zekâ destekli araçlardan yararlanabiliriz. Her yazı yayından önce editör tarafından kaynaklarıyla birlikte okunur, doğrulanır ve onaylanır.</p>
    <h2>Reklam ve bağımsızlık</h2>
    <p>Kenar çubuğundaki reklam alanları “Reklam” etiketiyle gösterilir ve yazı içeriğini etkilemez. Sponsorlu bağlantılar arama motorları için <code>rel="sponsored"</code> ile işaretlenir.</p>
    <h2>Gizlilik</h2>
    <p>Görüntülenme sayacı çerez kullanmaz ve IP adresi saklamaz; tekrar sayımı önlemek için kısa süreli (30 dakika) anonim bir özet tutulur. “Son görüntülediğin yazılar” listesi yalnızca kendi tarayıcınızda saklanır.</p>
  </div>
  ${T.sidebar(ctx)}
</div>`;
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'AboutPage', '@id': `${abs(author.url)}#sayfa`, url: abs(author.url), name: `${author.name} ve Yayın İlkeleri`, inLanguage: 'tr-TR', mainEntity: { '@id': author.id }, isPartOf: { '@id': `${SITE}/blog#blog` } },
    teamLd, publisherLd, T.breadcrumbLd(ctx, trail),
  ] };
  out.set(`blog/${cfg.author.slug}/index.html`, T.layout(ctx, {
    title: `${author.name} ve Yayın İlkeleri | BÖTE Blog`,
    description: 'BÖTE Blog yazılarını hazırlayan editör ekibi, kaynak ve doğrulama ilkeleri, düzeltme politikası, reklam ve gizlilik yaklaşımı.',
    url: author.url, image: blogImage, ld, body,
  }));
}

// ---------------------------------------------------------------- feeds, search
const feedPosts = posts.slice(0, 20);
const absHtml = (h) => h.replace(/(href|src)="\//g, `$1="${SITE}/`);
const rfc822 = (d) => new Date(`${d}T06:00:00Z`).toUTCString();
out.set('blog/feed.xml', `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
<title>${xmlEsc(cfg.title)}</title>
<link>${SITE}/blog</link>
<description>${xmlEsc(cfg.description.trim())}</description>
<language>tr-TR</language>
<atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>${rfc822(newest)}</lastBuildDate>
${feedPosts.map((p) => `<item>
<title>${xmlEsc(p.title)}</title>
<link>${abs(p.url)}</link>
<guid isPermaLink="true">${abs(p.url)}</guid>
<pubDate>${rfc822(p.date)}</pubDate>
<dc:creator>${xmlEsc(author.name)}</dc:creator>
<category>${xmlEsc(p.category.name)}</category>
<description>${xmlEsc(p.description)}</description>
<content:encoded><![CDATA[${absHtml(p.html).replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
</item>`).join('\n')}
</channel>
</rss>
`);
out.set('blog/feed.json', `${JSON.stringify({
  version: 'https://jsonfeed.org/version/1.1', title: cfg.title, home_page_url: `${SITE}/blog`, feed_url: `${SITE}/blog/feed.json`,
  description: cfg.description.trim(), language: 'tr-TR', authors: [{ name: author.name, url: abs(author.url) }],
  items: feedPosts.map((p) => ({
    id: abs(p.url), url: abs(p.url), title: p.title, summary: p.description, content_html: absHtml(p.html),
    image: abs(p.image.src), date_published: isoDate(p.date), date_modified: isoDate(p.updated), tags: [p.category.name, ...p.tags],
  })),
}, null, 2)}\n`);
out.set('blog/search.json', `${JSON.stringify(posts.map((p) => ({
  slug: p.slug, title: p.title, description: p.description, url: p.url, category: p.category.name, tags: p.tags, date: p.date, minutes: p.minutes,
})))}\n`);
out.set('api/_lib/posts.json', `${JSON.stringify(posts.map((p) => p.slug))}\n`);

// ---------------------------------------------------------------- legacy pages (sitemap, llms.txt)
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
    lang: get(/<html[^>]*\slang="([^"]+)"/i),
    alternates: [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi)].map((m) => ({ hreflang: m[1], href: m[2] })),
  };
}
const deployed = deployedFiles(ROOT).filter((f) => f.endsWith('.html') && !f.startsWith('blog/') && f !== '404.html' && !/^google[0-9a-f]+\.html$/.test(f));
const legacy = [];
for (const rel of deployed) {
  const info = pageInfo(rel, fs.readFileSync(path.join(ROOT, rel), 'utf8'));
  if (/noindex/i.test(info.robots)) continue;
  if (!info.canonical) { warnings.push(`${rel}: canonical yok; sitemap'e alinmadi`); continue; }
  if (info.canonical !== abs(info.served === '/' ? '/' : info.served)) { warnings.push(`${rel}: canonical (${info.canonical}) sayfa adresiyle ayni degil; sitemap'e alinmadi`); continue; }
  legacy.push(info);
}

const blogPages = [...out.keys()].filter((k) => k.endsWith('index.html') && k.startsWith('blog/'))
  .map((k) => `/${k.replace(/\/index\.html$/, '')}`);
const lastmodFor = (u) => {
  const p = posts.find((x) => x.url === u);
  if (p) return p.updated;
  if (u === '/blog' || u.startsWith('/blog/sayfa') || u.startsWith('/blog/kategori')) return posts.length ? newest : null;
  return null;
};
const urls = [
  ...legacy.map((l) => ({ loc: l.canonical, alternates: l.alternates })),
  ...blogPages.map((u) => {
    const p = posts.find((x) => x.url === u);
    return { loc: abs(u), lastmod: lastmodFor(u), image: p ? abs(p.image.src) : null };
  }),
].sort((a, b) => a.loc.localeCompare(b.loc));
out.set('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url><loc>${xmlEsc(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}${(u.alternates || []).map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${xmlEsc(a.href)}"/>`).join('')}${u.image ? `<image:image><image:loc>${xmlEsc(u.image)}</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);

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
${posts.filter((p) => !p.draft).map((p) => `- [${p.title}](${abs(p.url)}.md): ${p.description} (${p.category.name}, ${p.updated})`).join('\n')}

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

${posts.filter((p) => !p.draft).map((p) => postMarkdown(p, false)).join('\n---\n\n') || 'Henüz yayımlanmış yazı yok.\n'}`);

// HTML site haritalari (site-map, en/site-map): isaretler arasi her derlemede yenilenir.
{
  const unis = T.NAV.find((n) => n.label === 'Üniversiteler').items;
  const li = (href, text, extra = '') => `<li><a href="${href}"${extra}>${esc(text)}</a></li>`;
  const clean = (t) => t.replace(/\s*[|:–-]\s*(BÖTE|CEIT)( Blog)?\s*$/i, '').replace(/^(BÖTE|CEIT)\s*[-:]\s*/i, '').trim();
  const group = (title, items) => items.length ? `<h2>${esc(title)}</h2>\n<ul class="site-map-list">\n${items.join('\n')}\n</ul>` : '';
  const trHtml = [
    group('Bölüm sayfaları', trPages.map((l) => li(l.served, clean(l.title)))),
    group('Blog', [li('/blog', 'BÖTE Blog'), ...categories.filter((c) => c.count).map((c) => li(c.url, `Kategori: ${c.name}`)),
      ...posts.filter((p) => !p.draft).map((p) => li(p.url, p.title)), li(author.url, `${author.name} ve Yayın İlkeleri`)]),
    group('Üniversitelerin BÖTE bölümleri', unis.map(([n, h]) => li(h, n, ' target="_blank" rel="noopener"'))),
    group('English pages', enPages.map((l) => li(l.served, clean(l.title), ' hreflang="en" lang="en"'))),
  ].join('\n');
  const enHtml = [
    group('English pages', enPages.map((l) => li(l.served, clean(l.title)))),
    group('Universities (CEIT departments)', unis.map(([n, h]) => li(`/en${h}`, n, ' target="_blank" rel="noopener"'))),
    group('Turkish pages and blog', [li('/blog', 'BÖTE Blog (Turkish)', ' hreflang="tr" lang="tr"'),
      ...trPages.map((l) => li(l.served, clean(l.title), ' hreflang="tr" lang="tr"'))]),
  ].join('\n');
  for (const [file, body] of [['site-map/index.html', trHtml], ['en/site-map/index.html', enHtml]]) {
    const full = path.join(ROOT, file);
    const cur = fs.readFileSync(full, 'utf8');
    const re = /(<!-- sitemap:links:start -->)[\s\S]*?(<!-- sitemap:links:end -->)/;
    if (!re.test(cur)) { warnings.push(`${file}: sitemap isaretleri yok`); continue; }
    out.set(file, cur.replace(re, `$1\n${body}\n$2`));
  }
}

if (cfg.ads.adsense.client) {
  out.set('ads.txt', `google.com, ${cfg.ads.adsense.client.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
}

// ---------------------------------------------------------------- write / check
const managedRoot = ['sitemap.xml', 'llms.txt', 'llms-full.txt', 'api/_lib/posts.json', 'site-map/index.html', 'en/site-map/index.html'];
function existingBlogFiles() {
  const res = [];
  const dir = path.join(ROOT, 'blog');
  if (!fs.existsSync(dir)) return res;
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
  // bos kalan klasorleri temizle
  (function prune(d) {
    const full = path.join(ROOT, d);
    if (!fs.existsSync(full)) return;
    for (const e of fs.readdirSync(full, { withFileTypes: true })) if (e.isDirectory()) prune(`${d}/${e.name}`);
    if (d !== 'blog' && !fs.readdirSync(full).length) fs.rmdirSync(full);
  })('blog');
  console.log(`blog uretildi: ${posts.length} yazi${DRAFTS ? ' (TASLAKLAR DAHIL — commit etmeyin, `npm run build` ile geri alin)' : ''}, ${drafts.length} taslak; ${changed.length} dosya yazildi, ${stale.length} silindi`);
  if (managedRoot.some((m) => changed.includes(m))) console.log(`  guncellenen kok dosyalar: ${managedRoot.filter((m) => changed.includes(m)).join(', ')}`);
}
