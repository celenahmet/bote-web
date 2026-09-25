// Blog HTML sablonlari. Sayfalar JavaScript'siz tam okunur (arama motorlari ve
// yapay zeka ajanlari icin); JS yalnizca sayac, arama ve "son goruntulenen" icindir.
import { esc, jsonLd, trDate } from './util.mjs';

export const NAV = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Bölüm',
    items: [
      ['BÖTE Hakkında', '/about'], ['Mezunlar', '/graduation'], ['Müfredat', '/curriculum'],
      ['Meslek Unvanları', '/jobtitle'], ['Akreditasyon', '/accreditation'], ['Staj İmkânları', '/internship'],
      ['Sık Sorulan Sorular', '/faq'],
    ],
  },
  {
    label: 'Üniversiteler',
    items: [
      ['Hacettepe', '/uni/hacettepe'], ['ODTÜ', '/uni/metu'], ['Boğaziçi', '/uni/bogazici'], ['Yıldız Teknik', '/uni/ytu'],
      ['Marmara', '/uni/marmara'], ['Ege', '/uni/ege'], ['Dokuz Eylül', '/uni/deu'], ['Ankara', '/uni/ankara'],
      ['Gazi', '/uni/gazi'], ['Bahçeşehir', '/uni/bahcesehir'], ['Yeditepe', '/uni/yeditepe'],
    ],
    external: true,
  },
  {
    label: 'Branş',
    items: [
      ['Uzaktan Eğitim', '/ebit/online'], ['Okuryazarlıklar', '/ebit/literacy'],
    ],
  },
  {
    label: 'İletişim',
    items: [['İletişim', '/contact'], ['Hakkımızda', '/about'], ['Ekibimiz', '/crew'], ['Site Haritası', '/site-map']],
  },
];

function header() {
  const menu = NAV.map((n, i) => {
    if (!n.items) return `<li><a href="${n.href}">${n.label}</a></li>`;
    const sub = n.items
      .map(([l, h]) => `<li><a href="${h}"${n.external ? ' target="_blank" rel="noopener"' : ''}>${l}</a></li>`)
      .join('');
    return `<li class="has-sub"><button type="button" class="sub-toggle" aria-expanded="false" aria-controls="sub-${i}">${n.label}</button><ul id="sub-${i}">${sub}</ul></li>`;
  }).join('');
  return `<a class="skip" href="#icerik">İçeriğe geç</a>
<header class="site-header">
  <div class="topbar"><div class="wrap">
    <ul class="topbar-info">
      <li><a href="mailto:ahmetcelen@hacettepe.edu.tr">ahmetcelen@hacettepe.edu.tr</a></li>
      <li>Hacettepe Üniversitesi, Ankara</li>
    </ul>
    <a class="topbar-lang" href="/en" hreflang="en" lang="en">English</a>
  </div></div>
  <div class="navbar"><div class="wrap">
    <a class="brand" href="/"><img src="/assets/img/educator-logo1.png" width="180" height="50" alt="BÖTE ana sayfa"></a>
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <label for="nav-toggle" class="nav-toggle-label"><span class="sr-only">Menüyü aç/kapat</span><span class="burger" aria-hidden="true"></span></label>
    <nav class="main-nav" aria-label="Ana menü"><ul>${menu}<li class="nav-blog"><a href="/blog" aria-current="page">Blog</a></li></ul></nav>
  </div></div>
</header>`;
}

function footer(ctx) {
  const cats = ctx.categories
    .filter((c) => c.count)
    .map((c) => `<li><a href="${c.url}">${esc(c.name)}</a></li>`)
    .join('');
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <section>
      <a href="/" class="footer-brand"><img src="/assets/img/educator-logo1.png" width="180" height="50" alt="BÖTE" loading="lazy" decoding="async"></a>
      <p>Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) bölümünü tanıtan bilgi sitesi.</p>
    </section>
    <section><h2 class="footer-title">Kariyer</h2><ul>
      <li><a href="/internship">Staj</a></li><li><a href="/accreditation">Akreditasyon</a></li>
      <li><a href="/graduation">Mezunlar</a></li><li><a href="/jobtitle">Meslek Unvanları</a></li></ul></section>
    <section><h2 class="footer-title">Hızlı Bağlantılar</h2><ul>
      <li><a href="/about">Bölüm Sayfası</a></li><li><a href="/crew">Ekibimiz</a></li>
      <li><a href="/site-map">Site Haritası</a></li><li><a href="/faq">Sık Sorulan Sorular</a></li></ul></section>
    <section><h2 class="footer-title">BÖTE Blog</h2><ul>
      ${cats}
      <li><a href="/blog/editor-ekibi">Editör Ekibi ve Yayın İlkeleri</a></li>
      <li><a href="/blog/feed.xml">RSS beslemesi</a></li></ul></section>
  </div>
  <div class="wrap footer-bottom">
    <p>© ${ctx.year} BÖTE · bote.web.tr</p>
    <ul><li><a href="/about">Hakkımızda</a></li><li><a href="/contact">İletişim</a></li><li><a href="/en" hreflang="en" lang="en">English</a></li></ul>
  </div>
</footer>`;
}

export function layout(ctx, { title, description, url, image, imageAlt, type = 'website', ld, extraHead = '', body, slug, noindex }) {
  const abs = (p) => (p.startsWith('http') ? p : ctx.siteUrl + p);
  const adsense = ctx.ads.adsense.client
    ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(ctx.ads.adsense.client)}" crossorigin="anonymous"></script>`
    : '';
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${abs(url)}">
<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
<link rel="alternate" type="application/rss+xml" title="${esc(ctx.title)}" href="/blog/feed.xml">
<link rel="alternate" type="application/feed+json" title="${esc(ctx.title)}" href="/blog/feed.json">
${extraHead}<link rel="icon" type="image/png" href="/assets/img/educator-fabicon-300x300.png">
<meta name="theme-color" content="#41246D">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="BÖTE">
<meta property="og:locale" content="tr_TR">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(url)}">
<meta property="og:image" content="${abs(image.src)}">
<meta property="og:image:width" content="${image.width}">
<meta property="og:image:height" content="${image.height}">
<meta property="og:image:alt" content="${esc(imageAlt || title)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${abs(image.src)}">
<link rel="preload" href="/blog/assets/fonts/poppins-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/blog/assets/blog.css?v=${ctx.assetVersion}">
<script src="/blog/assets/blog.js?v=${ctx.assetVersion}" defer></script>
${adsense}${jsonLd(ld)}
</head>
<body${slug ? ` data-slug="${esc(slug)}"` : ''}>
<div class="progress" aria-hidden="true"></div>
${header()}
<main id="icerik">
${body}
</main>
${footer(ctx)}
</body>
</html>
`;
}

export function crumbs(items) {
  const li = items
    .map((it, i) =>
      i === items.length - 1
        ? `<li aria-current="page">${esc(it.name)}</li>`
        : `<li><a href="${it.url}">${esc(it.name)}</a></li>`,
    )
    .join('');
  return `<nav class="crumbs" aria-label="Sayfa yolu"><ol>${li}</ol></nav>`;
}

export function breadcrumbLd(ctx, items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: ctx.siteUrl + it.url })),
  };
}

function views(slug) {
  return `<span class="views" data-views="${esc(slug)}" hidden><span class="n"></span> görüntülenme</span>`;
}

export function meta(post, { author } = {}) {
  const upd = post.updated !== post.date
    ? `<span>Güncelleme: <time datetime="${post.updated}">${trDate(post.updated)}</time></span>`
    : '';
  const by = author ? `<span>Yazan: <a href="${author.url}" rel="author">${esc(author.name)}</a></span>` : '';
  return `<p class="meta">${by}<span><time datetime="${post.date}">${trDate(post.date)}</time></span>${upd}<span>${post.minutes} dk okuma</span>${views(post.slug)}</p>`;
}

export function card(post, { featured = false, headingLevel = 3 } = {}) {
  const h = `h${headingLevel}`;
  return `<article class="card${featured ? ' card-featured' : ''}">
  <a class="card-img" href="${post.url}" tabindex="-1" aria-hidden="true"><img src="${post.image.src}" width="${post.image.width}" height="${post.image.height}" alt="" loading="${featured ? 'eager' : 'lazy'}" decoding="async"${featured ? ' fetchpriority="high"' : ''}></a>
  <div class="card-body">
    <a class="chip" href="${post.category.url}">${esc(post.category.name)}</a>
    <${h} class="card-title"><a href="${post.url}">${esc(post.title)}</a></${h}>
    <p class="card-excerpt">${esc(post.description)}</p>
    ${meta(post)}
  </div>
</article>`;
}

export function adSlot(ctx, slot) {
  const a = ctx.ads;
  const client = a.adsense.client;
  const slotId = a.adsense.slots?.[slot];
  const cls = slot === 'article-end' ? 'ad ad-wide' : 'ad';
  if (client && slotId) {
    return `<aside class="${cls}" data-ad-slot="${slot}" aria-label="Reklam"><span class="ad-label">Reklam</span>
<ins class="adsbygoogle" style="display:block" data-ad-client="${esc(client)}" data-ad-slot="${esc(slotId)}" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>`;
  }
  const h = (a.house || []).find((x) => (x.slots || []).includes(slot));
  if (!h) return '';
  const stores = (h.stores || [])
    .map((s) => `<a class="ad-store" href="${esc(s.url)}" rel="sponsored noopener" target="_blank">${esc(s.name)}</a>`)
    .join('');
  return `<aside class="${cls}" data-ad-slot="${slot}" aria-label="Reklam"><span class="ad-label">Reklam</span>
<div class="ad-house">
  <span class="ad-brand">${esc(h.brand)}</span>
  <p class="ad-title">${esc(h.title)}</p>
  <p class="ad-text">${esc(h.text)}</p>
  <a class="ad-cta" href="${esc(h.url)}" rel="sponsored noopener" target="_blank">${esc(h.cta)}</a>
  ${stores ? `<div class="ad-stores">${stores}</div>` : ''}
</div></aside>`;
}

export function sidebar(ctx, { current } = {}) {
  const featured = ctx.posts
    .filter((p) => p.slug !== current)
    .sort((a, b) => (b.featured - a.featured) || b.date.localeCompare(a.date))
    .slice(0, 5);
  const mini = featured
    .map((p) => `<li><a href="${p.url}">${esc(p.title)}</a><span class="mini-meta"><time datetime="${p.date}">${trDate(p.date)}</time> · ${p.minutes} dk</span></li>`)
    .join('');
  const cats = ctx.categories
    .filter((c) => c.count)
    .map((c) => `<li><a href="${c.url}">${esc(c.name)}</a><span class="count">${c.count}</span></li>`)
    .join('');
  return `<aside class="sidebar" aria-label="Blog kenar çubuğu">
  <section class="widget widget-search">
    <h2 class="widget-title">Blogda Ara</h2>
    <form class="search" role="search" action="/blog" method="get">
      <label for="blog-q" class="sr-only">Yazılarda ara</label>
      <input id="blog-q" name="q" type="search" placeholder="Yazılarda ara…" autocomplete="off">
      <button type="submit">Ara</button>
    </form>
    <ul class="search-results" aria-live="polite" hidden></ul>
  </section>
  ${mini ? `<section class="widget widget-popular" data-popular data-current="${esc(current || '')}">
    <h2 class="widget-title" data-popular-title>Öne Çıkan Yazılar</h2>
    <ol class="mini-list">${mini}</ol>
  </section>` : ''}
  ${adSlot(ctx, 'sidebar-top')}
  ${cats ? `<section class="widget"><h2 class="widget-title">Kategoriler</h2><ul class="cat-list">${cats}</ul></section>` : ''}
  <section class="widget widget-recent" data-recent hidden>
    <h2 class="widget-title">Son Görüntülediğin Yazılar</h2>
    <ul class="mini-list"></ul>
  </section>
  <section class="widget widget-about">
    <h2 class="widget-title">${esc(ctx.author.name)}</h2>
    <p>Yazılarımız en az iki uluslararası kaynağa dayanır ve yayından önce doğrulanır.</p>
    <a class="text-link" href="${ctx.author.url}">Yayın ilkelerimiz</a>
  </section>
  <div class="sticky-slot">${adSlot(ctx, 'sidebar-bottom')}</div>
</aside>`;
}

export function pagination(page, pages, base) {
  if (pages < 2) return '';
  const href = (n) => (n === 1 ? base : `${base}/sayfa/${n}`);
  const items = [];
  if (page > 1) items.push(`<li><a href="${href(page - 1)}" rel="prev">Önceki sayfa</a></li>`);
  for (let n = 1; n <= pages; n++) {
    items.push(n === page ? `<li><span aria-current="page">${n}</span></li>` : `<li><a href="${href(n)}">${n}. sayfa</a></li>`);
  }
  if (page < pages) items.push(`<li><a href="${href(page + 1)}" rel="next">Sonraki sayfa</a></li>`);
  return `<nav class="pagination" aria-label="Sayfalar"><ul>${items.join('')}</ul></nav>`;
}
