// Liste sayfalari icin ortak veri (Astro sayfalari "_" ile baslayan dosyalari rota yapmaz).
import { loadBlog, breadcrumbLd, orgLd, isoDate } from '../lib.js';

export function blogIndexProps(page) {
  const blog = loadBlog();
  const per = blog.cfg.perPage;
  const pages = Math.max(1, Math.ceil(blog.indexList.length / per));
  const list = blog.indexList.slice((page - 1) * per, page * per);
  const trail = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog' }];
  const SITE = blog.SITE;
  return {
    list, page, pages, base: '/blog', trail, current: 'blog', stats: true,
    title: 'BÖTE Blog: Bölüm, Eğitim Fakültesi ve Öğretmenlik', h1: 'BÖTE <span>Blog</span>', lead: blog.cfg.tagline,
    description: blog.cfg.description.replace(/\s+/g, ' ').trim(),
    empty: `<h2>İlk yazılar yolda</h2><p>BÖTE bölümü, eğitim fakülteleri ve öğretmen yetiştirme üzerine hazırladığımız yazılar kaynak doğrulaması ve editör onayından sonra burada yayımlanacak.</p><p><a href="${blog.author.url}">Yayın ilkelerimizi okuyun</a> · <a href="/about">BÖTE hakkında bilgi alın</a></p>`,
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'Blog', '@id': `${SITE}/blog#blog`, url: `${SITE}/blog`, name: blog.cfg.title, description: blog.cfg.description.trim(),
        inLanguage: 'tr-TR', publisher: { '@id': `${SITE}/#org` }, isPartOf: { '@id': `${SITE}/#site` },
        blogPost: list.map((p) => ({ '@type': 'BlogPosting', '@id': `${blog.abs(p.url)}#yazi`, headline: p.title, url: blog.abs(p.url), datePublished: isoDate(p.date) })) },
      { '@type': 'WebSite', '@id': `${SITE}/#site`, url: `${SITE}/`, name: 'BÖTE', inLanguage: 'tr-TR', publisher: { '@id': `${SITE}/#org` } },
      orgLd(blog),
      breadcrumbLd(blog, page === 1 ? trail : [...trail, { name: `Sayfa ${page}`, url: `/blog/sayfa/${page}` }]),
    ] },
  };
}

export function categoryProps(slug, page) {
  const blog = loadBlog();
  const c = blog.catBy[slug];
  const per = blog.cfg.perPage;
  const all = blog.posts.filter((p) => p.category.slug === slug);
  const pages = Math.max(1, Math.ceil(all.length / per));
  const list = all.slice((page - 1) * per, page * per);
  const trail = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog' }, { name: c.name, url: c.url }];
  return {
    list, page, pages, base: c.url, trail, current: slug,
    title: `${c.name} | BÖTE Blog`, h1: c.name, lead: c.description, description: c.description, empty: '',
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': `${blog.abs(c.url)}#sayfa`, url: blog.abs(c.url), name: `${c.name} | BÖTE Blog`, description: c.description,
        inLanguage: 'tr-TR', isPartOf: { '@id': `${blog.SITE}/blog#blog` },
        mainEntity: { '@type': 'ItemList', itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: blog.abs(p.url), name: p.title })) } },
      breadcrumbLd(blog, trail),
    ] },
  };
}

export function pageCount(n) {
  const per = loadBlog().cfg.perPage;
  return Math.max(1, Math.ceil(n / per));
}

// AGS rehberi listesi (Ahmet 31.10: "ags rehberiniz"e tiklayinca AGS ile ilgili yazilar ciksin).
// Ayri bir kategori degil; AGS, OABT ve Milli Egitim Akademisi yazilarini konu filtresiyle toplar.
const AGS_RE = /\bAGS\b|ÖABT|Akademi(de|si)?\b/;
const AGS_EK = new Set(['atamaya-esas-basari-puani', 'hazirlik-egitimi-sonrasi-tercih-ve-yerlestirme', 'sozlesmeli-ogretmenlik-ne-zaman-kadroya',
  'aday-ogretmenlik-kalkti-mi', 'sehit-yakini-gazi-ve-milli-sporcu-ogretmenlik', 'kktc-ve-yurt-disi-mezunlari-ogretmen-olabilir-mi',
  'muhendisler-ogretmen-olabilir-mi', 'kpss-kalkti-mi-ogretmenlik', 'ogretmenlik-meslegi-kanunu-7528', 'pedagojik-formasyon-kalkti-mi']);
export function agsPosts() {
  return loadBlog().posts.filter((p) => /^(ags-|oabt-|akademi|milli-egitim-akademisi)/.test(p.slug) || AGS_EK.has(p.slug) || AGS_RE.test(p.title));
}
export function agsProps(page) {
  const blog = loadBlog();
  const per = blog.cfg.perPage;
  const all = agsPosts();
  const pages = Math.max(1, Math.ceil(all.length / per));
  const list = all.slice((page - 1) * per, page * per);
  const url = '/blog/ags';
  const name = 'AGS Rehberi';
  const lead = 'MEB Akademi Giriş Sınavı, ÖABT ve Millî Eğitim Akademisi üzerine resmî kaynaklı tüm yazılar: konular, puan, kontenjan, başvuru ve atama.';
  const trail = [{ name: 'Ana Sayfa', url: '/' }, { name: 'Blog', url: '/blog' }, { name, url }];
  return {
    list, page, pages, base: url, trail, current: 'ags',
    title: `AGS Rehberi: Akademi Giriş Sınavı Yazıları | BÖTE Blog`, h1: 'AGS <span>Rehberi</span>', lead, description: lead, empty: '',
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': `${blog.abs(url)}#sayfa`, url: blog.abs(url), name, description: lead,
        inLanguage: 'tr-TR', isPartOf: { '@id': `${blog.SITE}/blog#blog` },
        mainEntity: { '@type': 'ItemList', itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: blog.abs(p.url), name: p.title })) } },
      breadcrumbLd(blog, page === 1 ? trail : [...trail, { name: `Sayfa ${page}`, url: `${url}/sayfa/${page}` }]),
    ] },
  };
}
