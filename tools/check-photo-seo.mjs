// 71 fotograf icin yayin HTML'i, sosyal etiketler, JSON-LD, sitemap ve responsive dosyalar.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'node-html-parser';
import { loadBlog, ROOT } from './blog/content.mjs';
const b = loadBlog();
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const fail = [];
let variants = 0, totalBytes = 0, maxFull = 0;
const check = (ok, slug, message) => { if (!ok) fail.push(`${slug}: ${message}`); };
for (const p of b.posts) {
  const doc = parse(fs.readFileSync(path.join(ROOT, 'blog', p.slug, 'index.html'), 'utf8'));
  const img = doc.querySelector('.post-art img');
  const absolute = b.abs(p.image.src);
  check(p.image.src.split('?')[0].endsWith(`/${p.slug}.jpg`), p.slug, 'korunan konu odakli JPG adresi');
  check(img?.getAttribute('alt') === p.title, p.slug, 'yazi basligiyla iliskili alt metni');
  check(img?.getAttribute('src') === p.image.src, p.slug, 'govde gorseli');
  check(img?.getAttribute('fetchpriority') === 'high' && img?.getAttribute('loading') !== 'lazy', p.slug, 'ilk gorsel onceligi');
  check(img?.getAttribute('srcset')?.split(',').length === 3, p.slug, 'uc responsive boyut');
  for (const selector of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) check(doc.querySelector(selector)?.getAttribute('content') === absolute, p.slug, selector);
  for (const selector of ['meta[property="og:image:alt"]', 'meta[name="twitter:image:alt"]']) check(doc.querySelector(selector)?.getAttribute('content') === p.title, p.slug, selector);
  const graph = doc.querySelectorAll('script[type="application/ld+json"]').map(n => JSON.parse(n.text)).flatMap(x => x['@graph'] || [x]);
  const article = graph.find(x => x['@type'] === 'BlogPosting');
  check(article?.image?.url === absolute && article?.image?.caption === p.title && article?.image?.encodingFormat === 'image/jpeg', p.slug, 'ImageObject eslesmesi');
  check(sitemap.includes(absolute.replaceAll('&', '&amp;')), p.slug, 'gorsel sitemap kaydi');
  for (const i of [...p.image.variants, p.image]) {
    const file = path.join(ROOT, i.src.split('?')[0]);
    check(fs.existsSync(file), p.slug, `dosya ${i.src}`);
    if (fs.existsSync(file)) { const size = fs.statSync(file).size; totalBytes += size; if (i === p.image) maxFull = Math.max(maxFull, size); }
    check(i.width >= 640 && Math.abs(i.width / i.height - 16 / 9) < .01, p.slug, 'oran ve cozunurluk');
    if (i.src.split('?')[0].endsWith('.webp')) variants++;
  }
}
const report = { posts: b.posts.length, variants, totalBytes, maxFullBytes: maxFull, errors: fail };
fs.writeFileSync(path.join(ROOT, 'output/blog-fotograf-onay/2026-10-24/seo-kontrol.json'), JSON.stringify(report, null, 2));
console.log(`${b.posts.length} yazi, ${variants} WebP varyanti, en buyuk sabit adresli JPEG ${Math.round(maxFull/1024)} KB; ${fail.length} hata`);
if (fail.length) { console.error(fail.join('\n')); process.exit(1); }
