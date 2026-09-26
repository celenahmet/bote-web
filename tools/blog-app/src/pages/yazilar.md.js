// Tum yazilarin Markdown dizini (yapay zeka araclari ve metin araclari icin): /blog/yazilar.md
// Kategori sirasiyla; her satir yazinin .md surumune gider.
import { loadBlog } from '../lib.js';

export function GET() {
  const blog = loadBlog();
  const cats = blog.categories.filter((c) => c.count);
  const group = (c) => blog.posts.filter((p) => p.category.slug === c.slug)
    .map((p) => `- [${p.title}](${blog.abs(p.url)}.md): ${p.description} (${p.date})`).join('\n');
  const body = `# BÖTE Blog: yazı dizini

> ${blog.cfg.description.trim()}

- Her yazının Markdown sürümü aşağıdaki bağlantılardadır; yazı adresinin sonuna \`.md\` eklenerek de alınabilir.
- Tüm yazıların tam metni tek dosyada: ${blog.SITE}/llms-full.txt
- Atıf verisi (APA 7, BibTeX): ${blog.SITE}/blog/atif/<yazi>.json

${cats.map((c) => `## ${c.name}\n\n${group(c)}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
