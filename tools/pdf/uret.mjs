// tools/pdf/uret.mjs — BOTE blog PDF'lerini uretir, surum defterini tutar (28.09.2026)
// math deposundaki scripts/pdf_uret.py'nin BOTE karsiligi; komutlar ve kurallar ayni.
//
//   node tools/pdf/uret.mjs ornek <slug>          → .pdf-yapim/ornek/ (defter degismez, yayina gitmez)
//   node tools/pdf/uret.mjs denetle               → icerigi/sablonu degisip surumu artmamis yazi var mi
//   node tools/pdf/uret.mjs ilk                   → defterde olmayan yazilara numara + 1.0 kaydi
//   node tools/pdf/uret.mjs surum <slug> <tur> "<not>"
//   node tools/pdf/uret.mjs bas                   → dosyasi olmayan surumleri tek Chrome oturumunda basar
//   node tools/pdf/uret.mjs yukle                 → medya sunucusuna (ustune yazmadan) yukler, SHA-256 dogrular
//   node tools/pdf/uret.mjs on_yayin_yenile EVET  → DUYURU ONCESI: 1.0'i yeniden bas (surum acmadan)
//   node tools/pdf/uret.mjs eski_sil              → on_yayin_yenile sonrasi eski dosyalari siler
// Sonra: cd tools && npm run build (sayfalar + /pdf/kayit.json), npm test, commit, push.
//
// Kimlik (Ahmet 28.09): yazar, olusturan, uretici bote.web.tr (Info + XMP); Chrome'un ve
// kutuphanenin adi dosyada kalmaz. Alt bilgi baglantilari URI notu olarak eklenir.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';
import * as V from './veri.mjs';
import * as S from './sablon.mjs';

const YAPIM = V.YAPIM;
const ssh = (komut) => execFileSync('ssh', ['myserver', komut], { encoding: 'utf8' });

function yazdir(isler) {
  const dosya = path.join(YAPIM, 'isler.json');
  fs.writeFileSync(dosya, JSON.stringify(isler));
  execFileSync('node', [path.join(V.ROOT, 'tools/pdf/yazdir.mjs'), dosya], { stdio: ['ignore', 'ignore', 'inherit'] });
}

async function varliklar() {
  // UniConnectly logosu + magaza rozetleri; Veterito logosu (yerel depodan). Basim agdan bagimsiz.
  const uc = [['https://uniconnectly.com/brand/light-logo-yildizsiz.webp', 'logo.webp'],
    ['https://uniconnectly.com/brand/imza/app-store.png', 'app-store.png'],
    ['https://uniconnectly.com/brand/imza/google-play.png', 'google-play.png'],
    ['https://uniconnectly.com/brand/imza/appgallery.png', 'appgallery.png']];
  for (const [adres, ad] of uc) {
    const hedef = path.join(YAPIM, 'uc', ad);
    if (fs.existsSync(hedef)) continue;
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    const r = await fetch(adres, { headers: { 'User-Agent': 'bote.web.tr pdf' } });
    if (!r.ok) throw new Error(`${adres} ${r.status}`);
    fs.writeFileSync(hedef, Buffer.from(await r.arrayBuffer()));
  }
  const vet = path.join(YAPIM, 'diger', 'veterito.png');
  if (!fs.existsSync(vet)) {
    fs.mkdirSync(path.dirname(vet), { recursive: true });
    fs.copyFileSync(path.join(V.ROOT, '../veteriner-web/dist/vet-logo-full.png'), vet);
  }
}

function xmp(baslik, konu, anahtar, kd, s, zaman) {
  const x = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const dogrula = V.ALAN + V.dogrulamaYolu(kd, s.surum);
  return `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmlns:pdf="http://ns.adobe.com/pdf/1.3/" xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/" xmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/">
<dc:format>application/pdf</dc:format>
<dc:title><rdf:Alt><rdf:li xml:lang="x-default">${x(baslik)}</rdf:li></rdf:Alt></dc:title>
<dc:creator><rdf:Seq><rdf:li>bote.web.tr</rdf:li></rdf:Seq></dc:creator>
<dc:publisher><rdf:Bag><rdf:li>bote.web.tr</rdf:li></rdf:Bag></dc:publisher>
<dc:description><rdf:Alt><rdf:li xml:lang="x-default">${x(konu)}</rdf:li></rdf:Alt></dc:description>
<dc:identifier>${kd} ${s.surum}</dc:identifier>
<dc:language><rdf:Bag><rdf:li>tr-TR</rdf:li></rdf:Bag></dc:language>
<dc:rights><rdf:Alt><rdf:li xml:lang="x-default">© ${s.tarih.slice(0, 4)} bote.web.tr</rdf:li></rdf:Alt></dc:rights>
<xmp:CreatorTool>bote.web.tr</xmp:CreatorTool><xmp:CreateDate>${zaman}</xmp:CreateDate><xmp:ModifyDate>${zaman}</xmp:ModifyDate><xmp:MetadataDate>${zaman}</xmp:MetadataDate>
<pdf:Producer>bote.web.tr</pdf:Producer><pdf:Keywords>${x(anahtar)}</pdf:Keywords>
<xmpRights:Marked>True</xmpRights:Marked><xmpRights:WebStatement>${x(dogrula)}</xmpRights:WebStatement>
<xmpMM:DocumentID>bote.web.tr:${kd}</xmpMM:DocumentID><xmpMM:VersionID>${s.surum}</xmpMM:VersionID>
</rdf:Description></rdf:RDF></x:xmpmeta>
<?xpacket end="w"?>`;
}

// Alt bilgi baglanti alanlari (A4 594.96 x 841.92 pt, sol-alt kokenli). Konumlar sablondaki alt
// bilgiden OLCULDU (pdfium metin kutulari); sablon degisirse yeniden olc.
const SOL_ALT = [43, 11, 198, 25];   // web ikonu + "bote.web.tr - Bilgisayar ... Egitimi": x 54.7-194.8
const SAG_ALT = [462, 11, 537, 25];  // "BT-012 · Surum 1.0 · Sayfa 4 / 12": x 467-533.9

async function kimlik(yol, no, p, s) {
  const pdf = await PDFDocument.load(fs.readFileSync(yol), { updateMetadata: false });
  const kd = V.kod(no);
  const baslik = `${p.title} (${kd} Sürüm ${s.surum})`;
  const dogrula = V.ALAN + V.dogrulamaYolu(kd, s.surum);
  const konu = `${kd} · Sürüm ${s.surum} · ${dogrula}`;
  const anahtar = [p.title, 'PDF', 'bote.web.tr', p.category.name, ...p.tags.slice(0, 6)].join(', ');
  const zaman = (pdf.getCreationDate() || new Date()).toISOString().replace(/\.\d{3}Z$/, 'Z');
  pdf.setTitle(baslik, { showInWindowTitleBar: true });
  pdf.setAuthor('bote.web.tr'); pdf.setSubject(konu); pdf.setKeywords([anahtar]);
  pdf.setCreator('bote.web.tr'); pdf.setProducer('bote.web.tr'); pdf.setLanguage('tr-TR');
  const info = pdf.getInfoDict();
  for (const [a, d] of [['BTKod', kd], ['BTSurum', s.surum], ['BTIcerik', s.icerik], ['BTDogrulama', dogrula]]) info.set(PDFName.of(a), PDFString.of(d));
  const akis = pdf.context.stream(xmp(baslik, konu, anahtar, kd, s, zaman), { Type: 'Metadata', Subtype: 'XML' });
  pdf.catalog.set(PDFName.of('Metadata'), pdf.context.register(akis));
  const site = `${V.ALAN}/?utm_source=pdf&utm_medium=pdf&utm_campaign=${kd.toLowerCase()}`;
  for (const page of pdf.getPages()) {
    for (const [rect, url] of [[SOL_ALT, site], [SAG_ALT, dogrula]]) {
      const not = pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: rect, Border: [0, 0, 0],
        A: { Type: 'Action', S: 'URI', URI: PDFString.of(url) } });
      page.node.addAnnot(pdf.context.register(not));
    }
  }
  const cikti = await pdf.save();
  fs.writeFileSync(yol, cikti);
  return pdf.getPageCount();
}

async function hazirla(no, p, s, blog) {
  const kd = V.kod(no);
  const sayfa = path.join(YAPIM, `${V.kodYol(kd)}.html`);
  fs.writeFileSync(sayfa, await S.belge(no, p, s, blog));
  return { sayfa: `/.pdf-yapim/${path.basename(sayfa)}`, ust: S.ustBilgi(), alt: S.altBilgi(kd, s.surum) };
}
async function bitir(cikti, no, p, s) {
  const sayfa = await kimlik(cikti, no, p, s);
  const veri = fs.readFileSync(cikti);
  return { sha256: crypto.createHash('sha256').update(veri).digest('hex'), bayt: veri.length, sayfa };
}

// ---------------------------------------------------------------- komutlar
async function ornek(slug) {
  fs.mkdirSync(YAPIM, { recursive: true }); await varliklar();
  const { blog, liste } = V.yazilar();
  const i = liste.findIndex((x) => x.p.slug === slug);
  if (i < 0) throw new Error(`yazi yok: ${slug}`);
  const no = liste[i].no ?? 999;
  const p = liste[i].p;
  const s = { surum: '1.0', tarih: V.bugun(), tur: 'ilk', not: 'İlk yayın.', icerik: V.icerikOzeti(p) };
  const cikti = path.join(YAPIM, 'ornek', V.dosyaAdi(V.kod(no), p.slug, s.surum));
  fs.mkdirSync(path.dirname(cikti), { recursive: true });
  yazdir([{ ...(await hazirla(no, p, s, blog)), cikti }]);
  const b = await bitir(cikti, no, p, s);
  console.log(`ornek: ${cikti} · ${b.sayfa} sayfa · ${Math.round(b.bayt / 1024)} KB`);
}

function denetle() {
  const kayit = V.oku();
  const { liste } = V.yazilar(kayit);
  const eksik = []; const degisen = [];
  for (const { no, p } of liste) {
    const b = no && kayit.belgeler[V.kod(no)]; const s = V.son(b);
    if (!s) { eksik.push(p.slug); continue; }
    const o = V.icerikOzeti(p);
    if (s.icerik !== o || s.sablon !== V.SABLON) degisen.push(`${V.kod(no)} (${p.slug}): ${s.icerik !== o ? 'icerik' : `sablon ${s.sablon}→${V.SABLON}`}`);
  }
  for (const x of eksik) console.log(`  defterde yok: ${x}  →  uret.mjs ilk`);
  for (const x of degisen) console.log(`  surum gerekli: ${x}  →  uret.mjs surum <slug> <tur> "<not>"`);
  console.log(`denetim: ${eksik.length} eksik, ${degisen.length} degisen`);
  return !eksik.length && !degisen.length;
}

function ilk() {
  const kayit = V.oku();
  const { liste } = V.yazilar(kayit);
  let enBuyuk = Math.max(0, ...Object.values(kayit.belgeler).map((b) => b.no));
  // Numara: yayin tarihine gore eskiden yeniye, ayni gun basliga gore (bir kez verilir, degismez).
  const yeni = liste.filter((x) => !x.no).map((x) => x.p).sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title, 'tr'));
  for (const p of yeni) {
    const no = ++enBuyuk;
    kayit.belgeler[V.kod(no)] = { no, slug: p.slug, baslik: p.title, kategori: p.category.name,
      surumler: [{ surum: '1.0', tarih: V.bugun(), tur: 'ilk', not: 'İlk yayın.', icerik: V.icerikOzeti(p), sablon: V.SABLON }] };
  }
  V.yaz(kayit);
  console.log(`ilk: ${yeni.length} belgeye numara ve 1.0 kaydi`);
}

function surum(slug, tur, not) {
  if (!V.TURLER[tur] || tur === 'ilk') throw new Error(`tur: ${Object.keys(V.TURLER).filter((t) => t !== 'ilk').join(', ')}`);
  if (!not || not.trim().length < 10) throw new Error('degisiklik notu okura yazilir; en az bir cumle');
  const kayit = V.oku();
  const b = Object.values(kayit.belgeler).find((x) => x.slug === slug);
  const p = V.yazilar(kayit).liste.find((x) => x.p.slug === slug)?.p;
  const s = V.son(b);
  if (!s?.sha256) throw new Error(`${slug}: son surum henuz basilmadi`);
  const yeni = V.sonrakiSurum(s.surum, tur);
  Object.assign(b, { baslik: p.title, kategori: p.category.name });
  b.surumler.push({ surum: yeni, tarih: V.bugun(), tur, not: not.trim(), icerik: V.icerikOzeti(p), sablon: V.SABLON });
  V.yaz(kayit);
  console.log(`${V.kod(b.no)}: ${s.surum} → ${yeni} (${V.TURLER[tur]})`);
}

async function bas() {
  fs.mkdirSync(V.YEREL_DIZIN, { recursive: true }); await varliklar();
  const kayit = V.oku();
  const { blog, liste } = V.yazilar(kayit);
  const yazi = new Map(liste.map((x) => [x.p.slug, x.p]));
  const isler = []; const bekleyen = [];
  for (const [kd, b] of Object.entries(kayit.belgeler)) {
    const s = V.son(b);
    if (s.sha256) continue;
    const p = yazi.get(b.slug);
    if (!p) throw new Error(`${kd}: yazi yayinda degil (${b.slug})`);
    if (s.icerik !== V.icerikOzeti(p)) throw new Error(`${kd}: icerik defterdeki ozetle ayni degil; once surum acin`);
    const cikti = path.join(V.YEREL_DIZIN, V.dosyaAdi(kd, p.slug, s.surum).replace(/\.pdf$/, '.yapim.pdf'));
    isler.push({ ...(await hazirla(b.no, p, s, blog)), cikti });
    bekleyen.push({ kd, b, s, p, cikti });
  }
  if (!isler.length) return console.log('bas: basilacak surum yok');
  yazdir(isler);
  let toplam = 0;
  for (const x of bekleyen) {
    Object.assign(x.s, await bitir(x.cikti, x.b.no, x.p, x.s));
    x.s.dosya = V.dosyaAdi(x.kd, x.p.slug, x.s.surum, x.s.sha256.slice(0, 8));
    fs.renameSync(x.cikti, path.join(V.YEREL_DIZIN, x.s.dosya));
    toplam += x.s.bayt;
  }
  V.yaz(kayit);
  console.log(`bas: ${bekleyen.length} PDF · toplam ${(toplam / 1048576).toFixed(1)} MB`);
}

async function yukle() {
  const kayit = V.oku();
  const bekleyen = Object.entries(kayit.belgeler).flatMap(([kd, b]) => b.surumler.filter((s) => s.sha256 && !s.yuklendi).map((s) => ({ kd, s })));
  if (!bekleyen.length) return console.log('yukle: yuklenecek surum yok');
  ssh(`mkdir -p ${V.SUNUCU_DIZIN} && chmod 755 ${V.SUNUCU_DIZIN}`);
  // Var olan dosyanin USTUNE YAZILMAZ; macOS rsync'i (openrsync) --chmod bilmez, izin sunucuda.
  execFileSync('rsync', ['-a', '--ignore-existing', ...bekleyen.map((x) => path.join(V.YEREL_DIZIN, x.s.dosya)), `myserver:${V.SUNUCU_DIZIN}/`], { stdio: 'inherit' });
  ssh(`chmod 644 ${V.SUNUCU_DIZIN}/*.pdf`);
  const ozet = Object.fromEntries(ssh(`cd ${V.SUNUCU_DIZIN} && sha256sum ${bekleyen.map((x) => `'${x.s.dosya}'`).join(' ')}`)
    .trim().split('\n').map((l) => { const [h, ...ad] = l.split(/\s+/); return [ad.join(' '), h]; }));
  const hata = [];
  for (const { kd, s } of bekleyen) {
    if (ozet[s.dosya] !== s.sha256) { hata.push(`${kd} ${s.surum}: sunucudaki dosya farkli`); continue; }
    const r = await fetch(V.medyaAdresi(s.dosya), { method: 'HEAD', headers: { 'User-Agent': 'bote.web.tr pdf' } });
    if (r.status !== 200 || Number(r.headers.get('content-length')) !== s.bayt) { hata.push(`${kd} ${s.surum}: medya ${r.status}`); continue; }
    s.yuklendi = V.bugun();
  }
  V.yaz(kayit);
  console.log(`yukle: ${bekleyen.length - hata.length} / ${bekleyen.length} dosya yayinda`);
  for (const h of hata) console.log(`  ! ${h}`);
  if (hata.length) process.exit(1);
}

function onYayinYenile(onay) {
  if (onay !== 'EVET') throw new Error('kullanim: on_yayin_yenile EVET');
  const kayit = V.oku();
  if (kayit.duyuru) throw new Error(`belgeler ${kayit.duyuru} tarihinde duyuruldu; yeni surum acin`);
  const yazi = new Map(V.yazilar(kayit).liste.map((x) => [x.p.slug, x.p]));
  kayit.silinecek ||= [];
  for (const [kd, b] of Object.entries(kayit.belgeler)) {
    if (b.surumler.length !== 1 || b.surumler[0].tur !== 'ilk') throw new Error(`${kd}: birden fazla surum var`);
    const s = b.surumler[0];
    if (s.dosya) kayit.silinecek.push(s.dosya);
    for (const a of ['sha256', 'bayt', 'sayfa', 'dosya', 'yuklendi']) delete s[a];
    s.icerik = V.icerikOzeti(yazi.get(b.slug)); s.sablon = V.SABLON;
  }
  V.yaz(kayit);
  console.log(`on_yayin_yenile: ${Object.keys(kayit.belgeler).length} belge 1.0 olarak yeniden basilacak`);
}

function eskiSil() {
  const kayit = V.oku();
  const kullanilan = new Set(Object.values(kayit.belgeler).flatMap((b) => b.surumler.map((s) => s.dosya)));
  const liste = (kayit.silinecek || []).filter((d) => !kullanilan.has(d));
  if (!liste.length) return console.log('eski_sil: silinecek dosya yok');
  ssh(`cd ${V.SUNUCU_DIZIN} && rm -f ${liste.map((d) => `'${d}'`).join(' ')}`);
  for (const d of liste) fs.rmSync(path.join(V.YEREL_DIZIN, d), { force: true });
  delete kayit.silinecek; V.yaz(kayit);
  console.log(`eski_sil: ${liste.length} eski dosya silindi`);
}

const [komut, ...arg] = process.argv.slice(2);
const islev = { ornek, denetle: () => process.exit(denetle() ? 0 : 1), ilk, surum, bas, yukle, on_yayin_yenile: onYayinYenile, eski_sil: eskiSil }[komut];
if (!islev) { console.error(`komut: ornek, denetle, ilk, surum, bas, yukle, on_yayin_yenile, eski_sil`); process.exit(1); }
await islev(...arg);
