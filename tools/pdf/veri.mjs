// tools/pdf/veri.mjs — bote.web.tr blog PDF'lerinin surum defteri ve ortak yardimcilar (28.09.2026)
//
// ahmetcelen.com.tr'deki sistemin (math deposu scripts/pdf_*.py) BOTE karsiligi.
// Ahmet (28.09): "bote.web.tr'ye de ayni sistem; yollar ayni /pdf, /d; tasarim ve
// PDF mantigi ayni." Kararlar: kod BT-001 · Surum 1.0; slogan "Bilgisayar ve Ogretim
// Teknolojileri Egitimi"; 62 yazinin hepsi; dosyalar medya.ahmetcelen.com.tr/pdf/bote/.
//
// TEK KAYNAK: content/pdf/kayit.json (derleme yayina /pdf/kayit.json olarak kopyalar).
// Surumler YALNIZ EKLENIR. Numara (BT-NNN) bir kez verilir ve degismez: ilk kayitta
// yayin tarihine gore sirali, sonraki yazilar sonraki numarayi alir.
//
// Surum kurali (math ile ayni):
//   ilk → 1.0 · bicim/duzeltme → x.(y+1) · hata/icerik → (x+1).0
// Icerik ozeti PDF'e giren govde HTML'inden hesaplanir; icerik degisince yeni surum gerekir.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { loadBlog, ROOT, sourceLine } from '../blog/content.mjs';

export { ROOT };
export const ALAN = 'https://bote.web.tr';
export const MEDYA = 'https://medya.ahmetcelen.com.tr';
export const KAYIT = path.join(ROOT, 'content/pdf/kayit.json');
export const YAPIM = path.join(ROOT, '.pdf-yapim');
export const YEREL_DIZIN = path.join(YAPIM, 'dosyalar');
export const SUNUCU_DIZIN = '/srv/docker/ahmetcelen/pdf/bote';
export const YAYIN_YOLU = '/pdf/bote/';
export const SLOGAN = 'Bilgisayar ve Öğretim Teknolojileri Eğitimi';

// Yazdirma sablonu surumu; sablon/CSS/alt bilgi degisince 1 artir.
export const SABLON = 1;

export const TURLER = {
  ilk: 'İlk yayın', bicim: 'Biçim güncellemesi', duzeltme: 'Düzeltme',
  hata: 'Hata düzeltmesi', icerik: 'İçerik güncellemesi',
};
const AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
export const trTarih = (iso) => { const [y, a, g] = iso.split('-').map(Number); return `${g} ${AYLAR[a - 1]} ${y}`; };
export const bugun = () => new Date(Date.now() + 3 * 3600e3).toISOString().slice(0, 10);   // Turkiye saati

export const kod = (no) => `BT-${String(no).padStart(3, '0')}`;
export const kodYol = (k) => k.toLowerCase();
export const surumYol = (s) => s.replace('.', '-');
// bote.web.tr'de adresler SONDA EGIK CIZGISIZ (vercel.json trailingSlash:false): /pdf, /d/bt-012/1-0
export const dogrulamaYolu = (k, s) => `/d/${kodYol(k)}` + (s ? `/${surumYol(s)}` : '');
export const indirmeYolu = (slug) => `/pdf/${slug}`;
export const medyaAdresi = (dosya) => MEDYA + YAYIN_YOLU + dosya;
export function dosyaAdi(k, slug, s, kisa) {
  const konu = slug.replace(/-pdf$/, '');
  return `${kodYol(k)}-${konu}-s${surumYol(s)}${kisa ? `-${kisa}` : ''}.pdf`;
}
/** Gorunen PDF adi: yazinin adi + PDF; adinda PDF varsa ikinci kez yok; soru basliginda "(PDF)". */
export function pdfAdi(baslik) {
  if (/PDF/.test(baslik)) return baslik;
  return /\?\s*$/.test(baslik) ? `${baslik} (PDF)` : `${baslik} PDF`;
}

// ---------------------------------------------------------------- defter
export function oku() {
  if (fs.existsSync(KAYIT)) return JSON.parse(fs.readFileSync(KAYIT, 'utf8'));
  return {
    aciklama: 'bote.web.tr blog PDF sürüm defteri. Her belge (BT-NNN) için yayımlanan sürümler, dosyaların SHA-256 özetleri ve değişiklik notları. Doğrulama: https://bote.web.tr/d/',
    sablon: SABLON, belgeler: {},
  };
}
export function yaz(kayit) {
  kayit.sablon = SABLON;
  kayit.belgeler = Object.fromEntries(Object.entries(kayit.belgeler).sort(([a], [b]) => a.localeCompare(b)));
  fs.mkdirSync(path.dirname(KAYIT), { recursive: true });
  const metin = `${JSON.stringify(kayit, null, 1)}\n`;
  if (!fs.existsSync(KAYIT) || fs.readFileSync(KAYIT, 'utf8') !== metin) fs.writeFileSync(KAYIT, metin);
}
export const son = (b) => (b?.surumler?.length ? b.surumler[b.surumler.length - 1] : null);
export const yayindaMi = (s) => !!(s.sha256 && s.yuklendi);
export const yayindaki = (b) => (b?.surumler || []).filter(yayindaMi);
export function sonrakiSurum(onceki, tur) {
  if (!onceki) return '1.0';
  const [b, k] = onceki.split('.').map(Number);
  return ['hata', 'icerik'].includes(tur) ? `${b + 1}.0` : `${b}.${k + 1}`;
}
export function durum(b, s) {
  const y = yayindaki(b); const i = y.findIndex((x) => x.surum === s.surum);
  if (i < 0 || i === y.length - 1) return 'guncel';
  return y.slice(i + 1).some((x) => x.tur === 'hata') ? 'hata' : 'eski';
}

// ---------------------------------------------------------------- yazilar
/** Yayindaki yazilar; defterdeki numarasiyla. Numarasi olmayanlar null (ilk ile verilir). */
export function yazilar(kayit = oku()) {
  const blog = loadBlog();
  const noOf = new Map(Object.values(kayit.belgeler).map((b) => [b.slug, b.no]));
  return { blog, liste: blog.posts.map((p) => ({ no: noOf.get(p.slug) ?? null, p })) };
}

/** PDF'e giren govde: yazi HTML'i (atif numaralari dahil), ozet, SSS, kaynakca. */
export function govde(p) {
  const ic = p.html.replace(/href="\/(?!\/)/g, `href="${ALAN}/`);
  return ic;
}
export function kaynakca(p) {
  return p.sources.map((s, i) => {
    const l = sourceLine(s);
    return { n: s.n ?? i + 1, lead: l.lead, title: l.title, pub: l.pub, url: s.url };
  });
}
export function icerikOzeti(p) {
  const h = crypto.createHash('sha256');
  for (const parca of [p.title, p.description, p.category.name, JSON.stringify(p.summary), JSON.stringify(p.faq),
    JSON.stringify(kaynakca(p))]) h.update(`${parca}\0`);
  if (p.image?.file && fs.existsSync(p.image.file)) h.update(fs.readFileSync(p.image.file));
  h.update(govde(p));
  return h.digest('hex');
}
export const parmakIzi = (o) => o.slice(0, 12).toUpperCase().replace(/(.{4})(?=.)/g, '$1 ');
