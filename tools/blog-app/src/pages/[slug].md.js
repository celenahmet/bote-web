// Her yazinin Markdown surumu (yapay zeka ajanlari ve metin araclari icin): /blog/<yazi>.md
import { loadBlog, postMarkdown } from '../lib.js';

export function getStaticPaths() {
  return loadBlog().posts.map((p) => ({ params: { slug: p.slug } }));
}

export function GET({ params }) {
  const blog = loadBlog();
  const post = blog.posts.find((p) => p.slug === params.slug);
  return new Response(postMarkdown(blog, post, true), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
