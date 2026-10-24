// Onayli fotograf PNG'lerini gorseli kirpmadan WebP ve responsive boyutlara donusturur.
// node tools/prepare-photo-covers.mjs <onay-klasoru>
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { loadBlog, ROOT, COVER_DIR } from './blog/content.mjs';
const source = path.resolve(process.argv[2] || path.join(ROOT, 'output/blog-fotograf-onay/2026-10-24'));
const records = [];
for (const post of loadBlog().posts) {
  const input = path.join(source, `${post.slug}.png`);
  if (!fs.existsSync(input)) throw new Error(`Onayli fotograf eksik: ${input}`);
  // Eski indekslenmis JPG ve -art.jpg adreslerini yeni fotografin ayni JPEG'iyle koru.
  const jpegName = `${post.slug}.jpg`;
  const jpegFile = path.join(COVER_DIR, jpegName);
  const jpeg = await sharp(input).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 87, mozjpeg: true }).toFile(jpegFile);
  fs.copyFileSync(jpegFile, path.join(COVER_DIR, `${post.slug}-art.jpg`));
  const variants = [];
  for (const width of [640, 960, 1600]) {
    const name = `${post.slug}${width === 1600 ? '' : `-${width}`}.webp`;
    const file = path.join(COVER_DIR, name);
    const info = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(file);
    variants.push({ file: name, width: info.width, height: info.height, bytes: info.size });
  }
  records.push({ slug: post.slug, title: post.title, alt: post.title, updated: '2026-10-24', primary: { file: jpegName, width: jpeg.width, height: jpeg.height, bytes: jpeg.size }, variants });
}
fs.writeFileSync(path.join(ROOT, 'content/blog/photo-covers.json'), `${JSON.stringify(records, null, 2)}\n`);
console.log(`${records.length} fotograf; ${records.reduce((n, p) => n + p.variants.reduce((a, v) => a + v.bytes, 0), 0)} bayt (3 boyut)`);
