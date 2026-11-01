import { loadBlog, isoDate } from '../lib.js';
import { yeniSekmeNotunuCikar } from '../../../blog/simulasyon.mjs';

export function GET() {
  const blog = loadBlog();
  const { SITE, abs, cfg, author } = blog;
  // 3D merkez bağlantılarındaki yeni sekme notu yalnız sayfada anlamlı (besleme okuyucusunda .sr-only yok).
  const absHtml = (h) => yeniSekmeNotunuCikar(h).replace(/(href|src)="\//g, `$1="${SITE}/`);
  const feed = {
    version: 'https://jsonfeed.org/version/1.1', title: cfg.title, home_page_url: `${SITE}/blog`, feed_url: `${SITE}/blog/feed.json`,
    description: cfg.description.trim(), language: 'tr-TR', authors: [{ name: author.name, url: abs(author.url) }],
    items: blog.posts.slice(0, 20).map((p) => ({
      id: abs(p.url), url: abs(p.url), title: p.title, summary: p.description, content_html: absHtml(p.html),
      image: abs(p.image.src), date_published: isoDate(p.date), date_modified: isoDate(p.updated), tags: [p.category.name, ...p.tags],
    })),
  };
  return new Response(`${JSON.stringify(feed, null, 2)}\n`, { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
}
