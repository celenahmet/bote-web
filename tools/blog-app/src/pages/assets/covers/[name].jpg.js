// Kapak/paylasim gorselleri content/blog/covers altindan kopyalanir.
import fs from 'node:fs';
import path from 'node:path';
import { COVER_DIR } from '../../../../../blog/content.mjs';
import { loadBlog } from '../../../lib.js';

export function getStaticPaths() {
  const blog = loadBlog();
  const used = new Map();
  for (const img of [blog.blogImage, ...[...blog.posts, ...blog.previews].flatMap((p) => [p.image, p.art]).filter(Boolean)]) {
    if (img.file && img.src.split('?')[0].endsWith('.jpg') && img.src.startsWith('/blog/assets/covers/')) used.set(img.src.split('?')[0].split('/').pop().replace(/\.jpg$/, ''), img.file);
  }
  // Onceki indekslenmis JPG adresleri de calismaya devam etsin.
  for (const p of [...blog.posts, ...blog.previews]) {
    for (const name of [p.slug, `${p.slug}-art`]) {
      const file = path.join(COVER_DIR, `${name}.jpg`);
      if (fs.existsSync(file)) used.set(name, file);
    }
  }
  return [...used].map(([name, file]) => ({ params: { name }, props: { file } }));
}

export function GET({ props }) {
  return new Response(fs.readFileSync(props.file), { headers: { 'Content-Type': 'image/jpeg' } });
}
