// Blog icerigi: ayarlar, yazilarin yuklenmesi/dogrulanmasi ve ortak yardimcilar.
// Hem Astro sayfalari (tools/blog-app) hem kok dosya ureticisi (build-blog.mjs) bunu kullanir.
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { renderMarkdown } from './markdown.mjs';
import { toDateString, stripHtml, readingMinutes, imageSize, trDate, isoDate } from './util.mjs';

// Depo koku: BOTE_ROOT ya da content/blog/blog.yml bulunana kadar yukari cikilir
// (Astro derlemesinde bu dosya paketlendigi icin import.meta.url'e guvenilmez).
function findRoot() {
  const starts = [process.env.BOTE_ROOT, process.cwd(), path.dirname(fileURLToPath(import.meta.url))].filter(Boolean);
  for (const s of starts) {
    let d = path.resolve(s);
    for (;;) {
      if (fs.existsSync(path.join(d, 'content/blog/blog.yml'))) return d;
      const up = path.dirname(d);
      if (up === d) break;
      d = up;
    }
  }
  throw new Error('Depo koku bulunamadi (content/blog/blog.yml). BOTE_ROOT ortam degiskenini verin.');
}
export const ROOT = findRoot();
export const CONTENT = path.join(ROOT, 'content/blog');
export const COVER_DIR = path.join(CONTENT, 'covers');
export { trDate, isoDate };

function parseFile(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
  if (!m) throw new Error(`${file}: front matter (--- ... ---) yok`);
  return { fm: YAML.parse(m[1]) || {}, body: m[2] };
}

let cache;
// drafts: taslaklari da yayinlanmis gibi yukle (yalnizca yerel onizleme)
export function loadBlog({ drafts: withDrafts = process.env.BLOG_DRAFTS === '1', fresh = false } = {}) {
  if (cache && cache.withDrafts === withDrafts && !fresh) return cache;
  const errors = [];
  const warnings = [];
  const cfg = YAML.parse(fs.readFileSync(path.join(CONTENT, 'blog.yml'), 'utf8'));
  const SITE = cfg.siteUrl.replace(/\/$/, '');
  const abs = (p) => (p.startsWith('http') ? p : SITE + p);
  const author = { name: cfg.author.name, url: `/blog/${cfg.author.slug}`, id: `${SITE}/blog/${cfg.author.slug}#ekip` };
  const categories = cfg.categories.map((c) => ({ ...c, url: `/blog/kategori/${c.slug}`, count: 0 }));
  const catBy = Object.fromEntries(categories.map((c) => [c.slug, c]));
  const reserved = ['sayfa', 'kategori', 'assets', 'fonts', '_astro', 'feed', 'search', cfg.author.slug];

  function loadDir(dir, draft) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort().map((f) => {
      const file = path.join(dir, f);
      const rel = path.relative(ROOT, file);
      const { fm, body } = parseFile(file);
      const slug = fm.slug || f.replace(/\.md$/, '');
      const e = (msg) => errors.push(`${rel}: ${msg}`);
      const w = (msg) => warnings.push(`${rel}: ${msg}`);

      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) e(`slug gecersiz: ${slug}`);
      if (reserved.includes(slug)) e(`slug ayrilmis: ${slug}`);
      if (!fm.title) e('title zorunlu');
      else if (fm.title.length > 70) w(`title ${fm.title.length} karakter (<= 60 onerilir)`);
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
        if (!s.note) w(`${where}: note yok (kaynagin yazidaki rolunu anlatan kisa not)`);
        let accessed = s.accessed;
        if (accessed) { try { accessed = toDateString(accessed); } catch (err) { e(`${where}: ${err.message}`); } }
        return { ...s, accessed, year: String(s.year ?? ''), lang: String(s.lang || '').toLowerCase() };
      });
      const foreign = sources.filter((s) => s.lang && s.lang !== 'tr').length;
      if (foreign < cfg.minForeignSources) e(`en az ${cfg.minForeignSources} yabanci kaynak zorunlu (su an ${foreign})`);

      let html = '', headings = [], citeOrder = [], refs = new Map();
      try { ({ html, headings, citeOrder, refs } = renderMarkdown(body, { sources, root: ROOT, file: rel })); } catch (err) { e(err.message); }
      for (const s of sources) if (!citeOrder.includes(s.id)) e(`kaynak metinde hic atif almamis: [@${s.id}]`);
      const ordered = [...citeOrder.map((id) => sources.find((s) => s.id === id)), ...sources.filter((s) => !citeOrder.includes(s.id))];
      ordered.forEach((s, i) => {
        s.n = i + 1;
        const r = refs.get(s.id) || [];
        s.refs = r.map((x) => x.occ);
        // Kaynagin kullanildigi bolumler (bilgi penceresi icin), yazidaki sirayla
        s.uses = [];
        for (const x of r) {
          const key = x.section?.id || '';
          let u = s.uses.find((y) => y.id === key);
          if (!u) s.uses.push(u = { id: key, text: x.section?.text || 'Giriş', occs: [] });
          u.occs.push(x.occ);
        }
      });

      const { words, minutes } = readingMinutes(stripHtml(html.replace(/<sup class="cite">.*?<\/sup>/g, '')));
      if (words < 600) w(`govde kisa (${words} kelime)`);
      if (headings.filter((h) => h.depth === 2).length < 2) w('en az 2 ara baslik (##) onerilir');
      const faq = fm.faq || [];
      if (faq.length !== cfg.faqCount) e(`SSS (faq) tam ${cfg.faqCount} soru olmali (su an ${faq.length}); sorular arama niyetine gore secilir`);
      for (const [i, f] of faq.entries()) if (!f.q || !f.a) e(`faq[${i}]: q ve a zorunlu`);
      const summary = fm.summary || [];
      if (summary.length < 3) w('summary (Kisaca) icin en az 3 madde onerilir');

      return {
        slug, file: rel, draft, title: fm.title, description: desc, date, updated,
        category: catBy[fm.category] || { name: '?', url: '/blog', slug: '?' },
        tags: fm.tags || [], featured: !!fm.featured, summary, faq,
        sources: ordered, foreign, html, headings, body, words, minutes,
        url: `/blog/${slug}`, imageAlt: fm.imageAlt || `${fm.title} kapak görseli`, imageSrc: fm.image || null,
      };
    });
  }

  const published = loadDir(path.join(CONTENT, 'posts'), false);
  const drafts = loadDir(path.join(CONTENT, 'drafts'), true);
  const posts = withDrafts ? published.concat(drafts) : published;
  const dupe = posts.map((p) => p.slug).filter((s, i, a) => a.indexOf(s) !== i);
  if (dupe.length) errors.push(`ayni slug birden fazla: ${dupe.join(', ')}`);
  posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'tr'));
  for (const p of posts) if (catBy[p.category.slug]) catBy[p.category.slug].count++;

  const cover = (slug) => {
    const f = path.join(COVER_DIR, `${slug}.jpg`);
    if (!fs.existsSync(f)) return null;
    // Icerik ozeti adrese eklenir: gorsel yeniden uretilince tarayici ve CDN onbellegi eskiyi gostermez.
    const v = crypto.createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 8);
    return { src: `/blog/assets/covers/${slug}.jpg?v=${v}`, file: f, ...imageSize(f) };
  };
  const fallbackImg = { src: '/assets/img/educator-img14.jpg', ...imageSize(path.join(ROOT, 'assets/img/educator-img14.jpg')) };
  const blogImage = cover('_blog') || fallbackImg;
  // Onay bekleyen taslaklarin onizlemesi: /blog/taslak/<yazi> (noindex, baglantisiz, sitemap disi).
  const previews = withDrafts ? [] : drafts.map((d) => ({
    ...d, preview: true, url: `/blog/taslak/${d.slug}`, category: { ...d.category, url: '/blog/taslak' },
  })).sort((a, b) => (b.featured - a.featured) || b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'tr'));
  for (const p of [...posts, ...previews]) {
    p.image = p.imageSrc ? { src: p.imageSrc, ...imageSize(path.join(ROOT, p.imageSrc)) } : cover(p.slug) || blogImage;
    p.art = cover(`${p.slug}-art`); // sayfa ici basliksiz gorsel (yoksa gosterilmez)
  }
  // Ana sayfada en guncel "featured" yazi en uste alinir.
  const lead = posts.find((p) => p.featured);
  const indexList = lead ? [lead, ...posts.filter((p) => p !== lead)] : posts;
  const newest = posts.reduce((m, p) => (p.updated > m ? p.updated : m), '2026-09-25');

  cache = { withDrafts, cfg, SITE, abs, author, categories, catBy, posts, drafts, previews, indexList, blogImage, newest, errors, warnings,
    totals: { sources: posts.reduce((n, p) => n + p.sources.length, 0), foreign: posts.reduce((n, p) => n + p.foreign, 0) } };
  return cache;
}

// ---------------------------------------------------------------- yardimcilar
export function sourceLine(s) {
  const lead = s.author ? `${s.author} (${s.year}).` : `${s.publisher} (${s.year}).`;
  const pub = s.author && s.publisher && s.publisher !== s.author ? ` ${s.publisher}.` : '';
  return { lead, title: s.title, pub };
}

export function postMarkdown(blog, p, withFrontMatter) {
  const { SITE, abs, author } = blog;
  const num = (id) => (p.sources.find((s) => s.id === id) || {}).n || '?';
  const bodyMd = p.body
    .replace(/\[@([\w-]+(?:\s*;\s*@[\w-]+)*)\]/g, (_, ids) => `[${ids.split(/\s*;\s*@?/).map((k) => num(k.replace(/^@/, ''))).join(', ')}]`)
    .replace(/\]\(\//g, `](${SITE}/`)
    .trim();
  const src = p.sources.map((s) => {
    const l = sourceLine(s);
    return `${s.n}. ${l.lead} ${l.title}.${l.pub} ${s.url} (${s.lang.toUpperCase()}, erişim: ${s.accessed})`;
  }).join('\n');
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

export function orgLd(blog) {
  const { SITE } = blog;
  return {
    '@type': 'Organization', '@id': `${SITE}/#org`, name: 'BÖTE', url: `${SITE}/`,
    logo: { '@type': 'ImageObject', url: `${SITE}/assets/img/educator-fabicon-300x300.png`, width: 300, height: 300 },
  };
}

export function teamLd(blog) {
  const { SITE, author, abs } = blog;
  return {
    '@type': 'Organization', '@id': author.id, name: author.name, url: abs(author.url), parentOrganization: { '@id': `${SITE}/#org` },
    description: 'bote.web.tr blog içeriklerini hazırlayan, kaynaklarını doğrulayan ve güncelleyen ekip.',
  };
}

export function breadcrumbLd(blog, items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: blog.abs(it.url) })),
  };
}

// Turkce buyuk/kucuk harf ve aksan duyarsiz arama anahtari
export function searchIndex(blog) {
  return blog.posts.map((p) => ({
    slug: p.slug, title: p.title, description: p.description, url: p.url, category: p.category.name,
    tags: p.tags, date: p.date, minutes: p.minutes, sources: p.sources.length,
  }));
}
