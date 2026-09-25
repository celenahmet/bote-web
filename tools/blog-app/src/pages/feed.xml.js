import { loadBlog } from '../lib.js';
import { xmlEsc } from '../../../blog/util.mjs';

export function GET() {
  const blog = loadBlog();
  const { SITE, abs, cfg, author, newest } = blog;
  const absHtml = (h) => h.replace(/(href|src)="\//g, `$1="${SITE}/`);
  const rfc822 = (d) => new Date(`${d}T06:00:00Z`).toUTCString();
  const items = blog.posts.slice(0, 20).map((p) => `<item>
<title>${xmlEsc(p.title)}</title>
<link>${abs(p.url)}</link>
<guid isPermaLink="true">${abs(p.url)}</guid>
<pubDate>${rfc822(p.date)}</pubDate>
<dc:creator>${xmlEsc(author.name)}</dc:creator>
<category>${xmlEsc(p.category.name)}</category>
<description>${xmlEsc(p.description)}</description>
<content:encoded><![CDATA[${absHtml(p.html).replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
</item>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
<title>${xmlEsc(cfg.title)}</title>
<link>${SITE}/blog</link>
<description>${xmlEsc(cfg.description.trim())}</description>
<language>tr-TR</language>
<atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>${rfc822(newest)}</lastBuildDate>
${items}
</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
