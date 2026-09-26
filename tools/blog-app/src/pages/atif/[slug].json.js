// Her yazinin atif verisi (APA 7, BibTeX, gomme adresi): /blog/atif/<yazi>.json
// "Sitene gom" JavaScript ve Python ornekleri bu adresi kullanir; CORS acik (vercel.json).
import { loadBlog } from '../../lib.js';
import { citation } from '../../../../blog/cite.mjs';

export function getStaticPaths() {
  return loadBlog().posts.map((p) => ({ params: { slug: p.slug } }));
}

export function GET({ params }) {
  const blog = loadBlog();
  const post = blog.posts.find((p) => p.slug === params.slug);
  return new Response(`${JSON.stringify(citation(post, blog).json, null, 2)}\n`, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
