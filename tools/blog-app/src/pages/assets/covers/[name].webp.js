// Onayli fotograflar ve responsive WebP varyantlari.
import fs from 'node:fs';
import { loadBlog } from '../../../lib.js';
export function getStaticPaths() {
  const blog = loadBlog();
  const used = new Map();
  for (const p of [...blog.posts, ...blog.previews]) {
    for (const img of [p.image, ...(p.image.variants || [])]) {
      if (img.file && img.src.split('?')[0].endsWith('.webp')) used.set(img.src.split('?')[0].split('/').pop().replace(/\.webp$/, ''), img.file);
    }
  }
  return [...used].map(([name, file]) => ({ params: { name }, props: { file } }));
}
export function GET({ props }) {
  return new Response(fs.readFileSync(props.file), { headers: { 'Content-Type': 'image/webp' } });
}
