// Kapak/paylasim gorselleri content/blog/covers altindan kopyalanir.
import fs from 'node:fs';
import { loadBlog } from '../../../lib.js';

export function getStaticPaths() {
  const blog = loadBlog();
  const used = new Map();
  for (const img of [blog.blogImage, ...[...blog.posts, ...blog.previews].flatMap((p) => [p.image, p.art]).filter(Boolean)]) {
    if (img.file && img.src.startsWith('/blog/assets/covers/')) used.set(img.src.split('/').pop().replace(/\.jpg$/, ''), img.file);
  }
  return [...used].map(([name, file]) => ({ params: { name }, props: { file } }));
}

export function GET({ props }) {
  return new Response(fs.readFileSync(props.file), { headers: { 'Content-Type': 'image/jpeg' } });
}
