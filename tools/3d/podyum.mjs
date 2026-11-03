// Keşif kartının podyum görselleri: node tools/3d/podyum.mjs [--aile arduino] [--sadece usb,led] [--pafta yol.png]
// Ahmet 02.11: "Keşif kartında parçanın kendisi, podyumdaki nesne gibi görünsün; neye benzediği karışmasın.
// Fotoğraf değil, kendi 3D modelimizden; telefonda kart düzeni sığmalı."
// Derlemeden ÖNCE çalışır (çıktısı depoda durur; sayfa çalışırken ek 3D yükü yok):
// - Ders sahnesinin AYNI kaynak modülleri (modeller.js, devre.js, gercekci*.js) başlıksız Chrome'da ayrı bir sahnede
//   kurulur. Canlı ders sayfası açılmaz: sayfa arayüzü, uyarlanır çözünürlük ve cihaz algılaması (yazılım çizicide
//   Fiziksel düzey düşer) görüntüye karışmasın, her makinede aynı girdi aynı resmi versin diye.
// - Her keşif kimliği için parça yalıtılır: kartın tamamı, breadboard, devre parçası (havada pozu) ya da kart üstü
//   bölge (kırpma düzlemleri; kesik yüzler kapakla örtülür, "yalın" bölgelerde PCB alınmaz, parça tek başına kalır).
//   Nötr renkli küçük bir silindir kaidenin üstüne konur; 3/4 açı, sabit ışık (sahne.js ve gercekci.js değerleri),
//   saydam zemin. Önce küçük çizimle saydam olmayan alan ölçülür, son çizim o alana kırpılır.
// - Yarı saydam malzemeler (Fiziksel LED başı, breadboard gövdesi) sahnenin açık zemin rengi üstünde önceden
//   birleştirilip opak yazılır: görsel kartın temasına (açık/koyu) göre renk değiştirmez. Bilerek soluk bırakılanlar
//   (anot/katot kartında öbür bacak) saydam kalır.
// - Sanal ve Fiziksel ayrı çizilir, kartta görünen boyda (96 px) fark ölçülür: belirgin farklıysa iki dosya
//   (<id>-sanal, <id>-fiziksel), değilse tek dosya (Sanal). Çıktı 3d/assets/podyum/<aile>/*.webp (256 px, kartta
//   ~80 css px, 2x+ yoğunluk) ve tools/3d/podyum/<aile>.json (liste: kimlik -> kartın özel adı -> dosya;
//   src/podyum.js derlemede gömer).
// - Belirleyici: yazılım çizici (SwiftShader), sabit boy, tohumlu dokular, sabit WebP ayarı. Değişmeyen dosya yeniden
//   yazılmaz; listede olmayan eski dosya silinir.
// Parçası yalıtılamayan kimlik (ör. genel işaretler) için görsel üretilmez; çıktının sonunda gerekçesiyle listelenir.
// Ne zaman yeniden çalışır: sahneye giren modüller (modeller.js, devre.js, gercekci*.js) ya da bu dosya değişince,
// yeni keşif kimliği eklenince. node --test 'tools/3d/test/*.test.mjs' eskimiş ya da eksik görseli yakalar (kaynak izi
// tools/3d/podyum/<aile>.kaynak.json). Sistem Chrome'u gerekir (PODYUM_CHROME ile değiştirilir).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { kaynakIzi } from './podyum-iz.mjs';

const BU = path.dirname(fileURLToPath(import.meta.url));
const KOK = path.resolve(BU, '../..');
const require = createRequire(path.join(KOK, 'tools/package.json'));
const esbuild = require('esbuild');
const sharp = require('sharp');
const puppeteer = require('puppeteer-core');

const arg = (ad, varsayilan) => { const i = process.argv.indexOf(`--${ad}`); return i > 0 ? process.argv[i + 1] : varsayilan; };
const AILE = arg('aile', 'arduino');
const SADECE = arg('sadece', '') ? arg('sadece').split(',') : null;
const PAFTA = arg('pafta', '');
const CHROME = process.env.PODYUM_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BOY = 256; // çıktı (kartta ~80 css px; tahta ve 4K'da orantılı büyür)
const CIZIM = 512; // son çizim; çıktıya küçültülür (kenar yumuşatma)
const HEDEF_KB = 20;
const WEBP = [82, 74, 66, 58]; // dosya HEDEF_KB'yi aşarsa sıradaki kalite
// Sanal ile Fiziksel ayrı dosya mı: ortalama renk farkı (0-255) ya da belirgin farklı piksel oranı eşiği geçerse
const FARK = { boy: 96, ortalama: 10, oran: 0.1, piksel: 48 };

// ------------------------------------------------------------------ aileler
// kaynak: 'kart' | 'bb' | 'parca:<tur>' (devre parçası; aynı kimliğin özel adı farklı parçaları, ör. renkli LED'ler,
// ayrı görsel alır). bolge: kart koordinatı [bx0, bz0, bx1, bz1, üst y] (modeller.js ardNokta), dunya: dünya kutusu
// [x0, y0, z0, x1, y1, z1], yerel: parçanın kendi ekseninde kutu. yalin: PCB alınmaz (parça tek başına).
// yon: kameranın hedefe göre yönü (x sağ, y yukarı, z izleyici); 'yan': parçanın uzun ekseninin yanından.
// kip: yalnız o görünümden tek dosya (fark ölçülmez). gizle: bölgeye giren komşu parça (kart noktası merkezli).
// oluk: breadboard'a kanal oyar [z0, z1, taban y]. rontgen: breadboard gövdesi yarı saydam (sayıysa o saydamlık).
// soluk: o x'teki bacak soluk. ornek: devredeki uzunluk yerine aynı kısa örnek kablo, yalnız renk değişir.
const ARDUINO = {
  modul: 'arduino',
  kimlikler: {
    kart: { kaynak: 'kart', yon: [0.32, 0.72, 0.62] },
    usb: { kaynak: 'kart', bolge: [-7.2, 8.6, 10.4, 21.9, 15.6], yalin: true, yon: [-0.72, 0.5, 0.48] },
    'guc-girisi': { kaynak: 'kart', bolge: [-2.6, 40, 12.6, 49.8, 15.6], yalin: true, yon: [-0.7, 0.5, 0.52] },
    regulator: { kaynak: 'kart', bolge: [12.7, 42.6, 18.7, 50.4, 6.4], yon: [0.3, 0.75, 0.6] }, // sağdaki SMD dilimleri dışarıda
    // kristalin ucu bölgeye giriyor (x 15,75-16,5): kristal gizlenir (gizle: [kart noktası] -> o merkezli tek parça)
    kondansator: { kaynak: 'kart', bolge: [9.5, 28, 16.5, 35, 10.4], yalin: true, gizle: [[21, 27]], yon: [0.4, 0.6, 0.7] },
    mikrodenetleyici: { kaynak: 'kart', bolge: [23.2, 29.4, 65.8, 44.2, 8.4], yon: [0.16, 0.86, 0.48] },
    'usb-cipi': { kaynak: 'kart', bolge: [16.2, 13.7, 23.8, 21.3, 5.4], yon: [0.3, 0.75, 0.6] },
    kristal: { kaynak: 'kart', bolge: [15.4, 24.4, 26.6, 29.6, 8.2], yalin: true, yon: [0.3, 0.68, 0.67] },
    // pin başlıkları: kart şeridi ve baskı yazılarıyla (A0-A5, IOREF/RESET/5V/GND/Vin, 0-13); üçü aynı açıdan
    // (yazılar dijitalde başlığın +z, güç ve analogda -z yanında: kamera yazı tarafından, aynı açıyla bakar)
    'dijital-pinler': { kaynak: 'kart', bolge: [19.7, 0.9, 67.7, 7.6, 13.2], yon: [0.5, 0.68, 0.54] },
    'analog-pinler': { kaynak: 'kart', bolge: [47.6, 44, 63.6, 52.4, 13.2], yon: [0.5, 0.68, -0.54] },
    'guc-pinleri': { kaynak: 'kart', bolge: [24.8, 44, 45.8, 52.4, 13.2], yon: [0.5, 0.68, -0.54] },
    icsp: { kaynak: 'kart', bolge: [62, 22.4, 67.7, 30.9, 13.2], yalin: true, yon: [0.45, 0.62, 0.64] },
    reset: { kaynak: 'kart', bolge: [3.6, 1.9, 11.2, 8.5, 9.4], yalin: true, yon: [0.4, 0.62, 0.68] },
    'led-l': { kaynak: 'kart', bolge: [24.4, 8.4, 31.4, 12.1, 5.2], yon: [0.2, 0.82, 0.54] }, // sağ arkadaki komşu SMD dışarıda
    'led-txrx': { kaynak: 'kart', bolge: [24.6, 12.3, 32.4, 16.6, 5.2], yon: [0.2, 0.82, 0.54] },
    'led-on': { kaynak: 'kart', bolge: [57.6, 8.2, 65.4, 13, 5.2], yon: [0.2, 0.82, 0.54] },
    // kartın kenarı (68,58) bölgenin içinde kalır: kırpma düzlemi kenar yüzüyle çakışınca yüz benekli çıkıyordu
    'montaj-deligi': { kaynak: 'kart', bolge: [62.4, 14.2, 69.4, 21.4, 5.2], yon: [0.35, 0.78, 0.52] },
    // breadboard (merkez z -38, sütun x = -36,83 + (c - 1) * 2,54); köşe bölgelerinde kesik yüzler kameraya bakmaz
    breadboard: { kaynak: 'bb', yon: [0.3, 0.72, 0.63] },
    // şerit: röntgen; tek dosya Fiziksel çizimden (Sanal'da şerit gövdeyle aynı açık gri, seçilmiyordu). Uzak kenardaki
    // sütun numarası bölge dışında (-52,85): yarısı kesilince ters yazı gibi görünüyordu
    serit: { kaynak: 'bb', dunya: [7.3, 0, -52.85, 15.6, 9.5, -40.4], rontgen: 0.5, kip: 'fiziksel', yon: [0.42, 0.66, 0.62] },
    // orta kanal: modelde kanal yalnız boyalı şerit (z -39,5..-36,5); görselde 2,4 mm derin oluk olarak oyulur, yan yüz
    // kesitte U biçimi görünür (oluk: [z0, z1, taban y])
    'orta-kanal': { kaynak: 'bb', dunya: [21.5, 0, -46, 34.5, 9.5, -30], oluk: [-39.5, -36.5, 6.1], yon: [0.62, 0.58, 0.53] },
    koordinat: { kaynak: 'bb', dunya: [-41.3, 0, -39.2, -25, 9.5, -21.6], yon: [-0.42, 0.7, 0.58] },
    'arti-ray': { kaynak: 'bb', dunya: [17.8, 0, -17.6, 41.3, 9.5, -10.7], yon: [0.4, 0.68, 0.62] },
    'eksi-ray': { kaynak: 'bb', dunya: [17.8, 0, -22.2, 41.3, 9.5, -17.6], yon: [0.4, 0.68, 0.62] },
    // devre parçaları: havada pozu (bacaklar tam boy)
    // LED: bacakların alt kısmı kırpılır (gövde büyük görünsün); anot ve katotta bacaklar tam boy
    led: { kaynak: 'parca:led', yerel: [-4, -3, -4, 4, 13.5, 4], yon: [0.3, 0.32, 0.9] },
    anot: { kaynak: 'parca:led', renk: 'kirmizi', soluk: 1.27, yon: [0.3, 0.32, 0.9] },
    katot: { kaynak: 'parca:led', renk: 'kirmizi', soluk: -1.27, yon: [0.3, 0.32, 0.9] },
    direnc: { kaynak: 'parca:direnc', yon: 'yan' },
    // renk bantları: Sanal ile Fiziksel gözle aynı (denetim 02.11; ölçülen fark eşiğin hemen üstünde, ince kenar
    // farkı), tek dosya Sanal çizimden
    'renk-bantlari': { kaynak: 'parca:direnc', yerel: [-3.6, 1.75, -1.7, 3.6, 5.05, 1.7], kip: 'sanal', yon: 'yan' },
    buton: { kaynak: 'parca:buton', yon: [0.42, 0.62, 0.66] },
    // kablo: devredeki uzunluğu ne olursa olsun aynı kısa örnek köprü (10c-18c), yalnız rengi değişir (ölçek tutarlı);
    // renk bantları gibi Sanal ile Fiziksel gözle aynı, tek dosya
    kablo: { kaynak: 'parca:kablo', ornek: true, kip: 'sanal', yon: 'yan' },
  },
  // görsel üretilmeyenler ve gerekçesi (çıktıda listelenir)
  uretilmez: {
    'pin-*': 'tek tek pinler: görsel karttaki dişi başlığın bir deliği ve yanındaki yazı olur; 80 px\'te parça ayırt edilmez, başlığın kendisi "Dijital/Analog/Güç pinleri" kartında var',
  },
};
const AILE_TANIM = { arduino: ARDUINO }[AILE];
if (!AILE_TANIM) throw new Error(`bilinmeyen aile: ${AILE}`);

// ------------------------------------------------------------------ tarayıcıdaki sahne (esbuild ile paketlenir)
const SAHNE = `
import { WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, HemisphereLight, Mesh, CylinderGeometry, PlaneGeometry,
  MeshStandardMaterial, Plane, Vector3, Box3, SRGBColorSpace, NeutralToneMapping, PCFSoftShadowMap, PMREMGenerator, AdditiveBlending } from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { kartYap, breadboardYap, kabloYap, anizotropiAyarla, ardNokta, delikNokta, ARD, BB, PCB_UST, KABLO_RENK } from './modeller.js';
import { devreKur } from './devre.js';
import { saglayiciKur } from './gercekciDoku.js';
import { kartDerisiYap } from './gercekciKart.js';
import { bbDerisiYap } from './gercekciBB.js';
import { parcaDerisiYap } from './gercekciParca.js';
import { ARDUINO_LOGO } from './gercekci.js';

const N = ${CIZIM}, ON = 256, FOV = 22, PAY = 0.05;
// yarı saydam gövde ve epoksi bu sabit açık zeminle birleştirilir (açık temanın sahne rengi); görsel temaya göre değişmez
const ZEMIN = 0xe9e5f1;
const canvas = document.createElement('canvas'); document.body.append(canvas);
const R = new WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true, stencil: false });
R.setPixelRatio(1); R.setSize(N, N, false);
R.outputColorSpace = SRGBColorSpace; R.toneMapping = NeutralToneMapping; R.toneMappingExposure = 1;
R.shadowMap.enabled = true; R.shadowMap.type = PCFSoftShadowMap; R.localClippingEnabled = true;
R.setClearColor(0x000000, 0);
anizotropiAyarla(R.capabilities.getMaxAnisotropy());
const sahne = new Scene();
const pmrem = new PMREMGenerator(R);
sahne.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();
const kamera = new PerspectiveCamera(FOV, 1, 1, 4000);
// ışık: sahne.js (Sanal) ve gercekci.js ISIK_ONAYAR.yuksek (Fiziksel) ile aynı yön ve şiddet
const ISIK = { sanal: { env: 0.85, hemi: 0.35, gunes: 2.4 }, fiziksel: { env: 1.0, hemi: 0.28, gunes: 2.1 } };
const GUNES_YON = new Vector3(-55, 150, 85).normalize();
const hemi = new HemisphereLight(0xffffff, 0xcfc6dc, 0.35); sahne.add(hemi);
const gunes = new DirectionalLight(0xffffff, 2.4); gunes.castShadow = true; gunes.shadow.mapSize.set(2048, 2048);
gunes.shadow.bias = -0.0004; gunes.shadow.normalBias = 0.12; sahne.add(gunes, gunes.target);
// kaide: sade silindir, nötr orta gri (açık ve koyu temada zeminden ayrılır); gölge alır, düşürmez
const kaideMat = new MeshStandardMaterial({ color: 0x8f8c99, roughness: 0.78, metalness: 0 });
const kaide = new Mesh(new CylinderGeometry(1, 1, 1, 96), kaideMat); kaide.receiveShadow = true; sahne.add(kaide);

// ---------------------------------------------------------------- modeller: Sanal ve Fiziksel ayrı takımlar
const hedefler = [];
const sag = saglayiciKur('yuksek', R.capabilities.getMaxAnisotropy());
const kart = kartYap(hedefler), bb = breadboardYap(hedefler);
const kartF = kartDerisiYap(sag, { logo: ARDUINO_LOGO }), bbF = bbDerisiYap(sag);
const parcalar = { sanal: [], fiziksel: [] };
// gercekci.js ile aynı: Sanal mesh'ler gizlenir (toplamalı ışımalar ve görünmez vekiller zaten çizilmez), deri eklenir
function deriGiydir(kayit) {
  const gizle = [];
  kayit.nesne.traverse((o) => { if (o.isMesh && !o.isInstancedMesh && o.material.visible !== false && o.material.blending !== AdditiveBlending) gizle.push(o); });
  const d = parcaDerisiYap(sag, kayit.p.tur, kayit.nesne);
  if (!d) return false;
  for (const o of gizle) o.visible = false;
  kayit.nesne.add(d.grup); kayit.deri = d;
  return true;
}
for (const gorunum of ['sanal', 'fiziksel']) {
  for (const devre of ['buton', 'trafik']) {
    for (const [ad, p] of Object.entries(devreKur(devre, hedefler))) {
      const kayit = { ad: devre + ':' + ad, p, nesne: p.nesne, deri: null };
      if (gorunum === 'fiziksel' && !deriGiydir(kayit)) continue;
      parcalar[gorunum].push(kayit);
    }
  }
}
// kablonun rengi (Sanal tüpün malzemesinden; devre.js renk adını nesneye yazmıyor)
function kabloRengi(nesne) {
  const t = nesne.children.find((c) => c.isMesh && c.geometry?.type === 'TubeGeometry' && c.material.visible !== false);
  const h = t ? t.material.color.getHex() : -1;
  return Object.keys(KABLO_RENK).find((k) => KABLO_RENK[k] === h) || '';
}
// örnek kablo: her renk için aynı kısa köprü (10c-18c, 20,3 mm); ilk istekte kurulur
const ornekler = {};
function kabloOrnegi(renk, gorunum) {
  const k = renk + ':' + gorunum;
  if (!ornekler[k]) {
    const kayit = { ad: 'ornek:' + k, p: { tur: 'kablo' }, nesne: kabloYap(delikNokta(10, 'c'), delikNokta(18, 'c'), renk), deri: null };
    if (gorunum === 'fiziksel') deriGiydir(kayit);
    kayit.nesne.visible = false; sahne.add(kayit.nesne);
    ornekler[k] = kayit;
  }
  return ornekler[k];
}
for (const k of [kart.grup, bb.grup, kartF.grup, bbF.grup, ...parcalar.sanal.map((x) => x.nesne), ...parcalar.fiziksel.map((x) => x.nesne)]) { k.visible = false; sahne.add(k); }

// görünür mesh'ler (gizli atası olan, görünmez malzemeli, toplamalı ışıma ve sprite hariç)
function gorunurler(kok) {
  const l = [];
  kok.traverse((o) => {
    if (!o.isMesh) return;
    for (let a = o; a; a = a.parent) if (!a.visible) return;
    const m = [].concat(o.material);
    if (m.every((x) => x.visible === false || x.blending === AdditiveBlending)) return;
    l.push(o);
  });
  return l;
}
function kutuBul(kok) {
  const k = new Box3();
  for (const o of gorunurler(kok)) {
    o.updateWorldMatrix(true, false);
    if (o.isInstancedMesh) { o.computeBoundingBox(); k.union(o.boundingBox.clone().applyMatrix4(o.matrixWorld)); continue; }
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    k.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld));
  }
  return k;
}
// kesik yüzü kapatmak için gövdenin yan malzemesi: PCB (iki malzemeli levha) ya da breadboard gövdesi
function yanMalzeme(kok, tur) {
  let m = null;
  kok.traverse((o) => {
    if (m || !o.isMesh || !Array.isArray(o.material)) return;
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    const b = o.geometry.boundingBox, w = b.max.x - b.min.x;
    if (tur === 'kart' && o.material.length === 2 && w > ARD.w - 2) m = o.material[1];
    if (tur === 'bb' && o.material.length === 6 && Math.abs(w - BB.w) < 0.5) m = o.material[0];
  });
  return m;
}

// ---------------------------------------------------------------- tek görsel
const okuTuval = document.createElement('canvas'); okuTuval.width = okuTuval.height = ON;
const okuCtx = okuTuval.getContext('2d', { willReadFrequently: true });
function alfaKutusu() {
  okuCtx.clearRect(0, 0, ON, ON); okuCtx.drawImage(canvas, 0, 0, ON, ON);
  const d = okuCtx.getImageData(0, 0, ON, ON).data;
  let x0 = ON, y0 = ON, x1 = -1, y1 = -1;
  for (let y = 0; y < ON; y++) for (let x = 0; x < ON; x++) if (d[(y * ON + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return x1 < 0 ? null : { x0, y0, x1: x1 + 1, y1: y1 + 1 };
}

window.podyum = {
  // pin ve parça listesi (üreteç kimlik -> özel ad eşleşmesini buradan okur)
  liste() {
    return {
      parcalar: parcalar.sanal.map((x) => ({ ad: x.ad, tur: x.p.tur, ozel: x.p.ozel || {}, renk: x.nesne.userData.renk || (x.p.tur === 'kablo' ? kabloRengi(x.nesne) : '') })),
    };
  },
  ciz(t, gorunum) {
    const f = gorunum === 'fiziksel';
    const isik = ISIK[gorunum];
    sahne.environmentIntensity = isik.env; hemi.intensity = isik.hemi; gunes.intensity = isik.gunes;
    // kaynak nesne
    let kok, parca = null, tur = t.kaynak;
    if (t.kaynak === 'kart') kok = f ? kartF.grup : kart.grup;
    else if (t.kaynak === 'bb') kok = f ? bbF.grup : bb.grup;
    else {
      parca = t.ornekRenk ? kabloOrnegi(t.ornekRenk, gorunum) : parcalar[gorunum].find((x) => x.ad === t.parca);
      if (!parca) return { hata: 'parca yok ' + (t.ornekRenk || t.parca) };
      kok = parca.nesne; tur = 'parca';
    }
    kok.visible = true;
    const geri = [];
    if (t.rontgen) {
      if (f) bbF.kanca.rontgen(true); else bb.rontgen(true);
      geri.push(() => { if (f) bbF.kanca.rontgen(false); else bb.rontgen(false); });
      // sayı verilirse gövde saydamlığı (sahnede 0,3): görselde gövdenin dış hattı açık kartta da seçilsin
      if (typeof t.rontgen === 'number') for (const o of gorunurler(kok)) for (const m of [].concat(o.material)) if (m.transparent && m.opacity === 0.3) m.opacity = t.rontgen;
    }
    // gizle: bölgeye giren komşu parça (merkezi verilen kart noktasında, ayak izi 15 mm'den küçük tek mesh)
    for (const [bx, bz] of t.gizle || []) {
      const n = ardNokta(bx, bz);
      for (const o of gorunurler(kok)) {
        o.updateWorldMatrix(true, false);
        if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
        const k = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld), m = k.getCenter(new Vector3()), b = k.getSize(new Vector3());
        if (Math.hypot(m.x - n.x, m.z - n.z) < 0.8 && Math.max(b.x, b.z) < 15) { o.visible = false; geri.push(() => { o.visible = true; }); }
      }
    }
    if (parca) {
      // havada pozu: bacaklar tam boy (Sanal ve deri birlikte)
      parca.nesne.userData.bacak?.(0); parca.deri?.kanca?.bacak?.(0);
      geri.push(() => { parca.nesne.userData.bacak?.(1); parca.deri?.kanca?.bacak?.(1); });
    }
    const soluklar = new Set(); // bilerek saydam kalanlar (opak birleştirmede de saydam)
    if (t.soluk != null) {
      // anot/katot: diğer bacak soluk (hangisinin anlatıldığı belli olsun; LED tanınır kalsın)
      for (const o of gorunurler(kok)) {
        if (Math.abs(o.position.x - t.soluk) > 0.01 || o.scale.y < 3) continue;
        const m = o.material, s = m.clone(); s.transparent = true; s.opacity = 0.2; s.depthWrite = false;
        o.material = s; o.castShadow = false; soluklar.add(s); geri.push(() => { o.material = m; o.castShadow = true; s.dispose(); });
      }
    }
    kok.updateWorldMatrix(true, true);
    // kırpma kutusu (dünya) ve düzlemleri
    let kutu = null, duzlem = [];
    if (t.bolge) {
      const [bx0, bz0, bx1, bz1, ust] = t.bolge, a = ardNokta(bx0, bz0), b = ardNokta(bx1, bz1);
      kutu = new Box3(new Vector3(a.x, t.yalin ? PCB_UST + 0.02 : PCB_UST - 1.62, a.z), new Vector3(b.x, ust, b.z));
    } else if (t.dunya) kutu = new Box3(new Vector3(t.dunya[0], t.dunya[1], t.dunya[2]), new Vector3(t.dunya[3], t.dunya[4], t.dunya[5]));
    const kutuDuzlemi = ({ min: n, max: x }) => [new Plane(new Vector3(1, 0, 0), -n.x), new Plane(new Vector3(-1, 0, 0), x.x), new Plane(new Vector3(0, 1, 0), -n.y),
      new Plane(new Vector3(0, -1, 0), x.y), new Plane(new Vector3(0, 0, 1), -n.z), new Plane(new Vector3(0, 0, -1), x.z)];
    // oluk: bölge üç kutuya bölünür (kanalın iki yanı tam boy, kanalın altı tabana dek); ana nesne ilk kutuyla, iki kopyası
    // (kendi malzeme kopyalarıyla) diğerleriyle kırpılır. Kapaklar her kutunun kesik yüzüne konur: kanal duvarı ve tabanı.
    let kutular = kutu ? [kutu] : [];
    if (kutu) duzlem = kutuDuzlemi(kutu);
    if (kutu && t.oluk) {
      const [oz0, oz1, taban] = t.oluk;
      const A = kutu.clone(), B = kutu.clone(), C = kutu.clone();
      A.max.z = oz0; B.min.z = oz1; C.min.z = oz0; C.max.z = oz1; C.max.y = taban;
      kutular = [A, B, C]; duzlem = kutuDuzlemi(A);
      for (const k of [B, C]) {
        const kopya = kok.clone(true), kopyaMat = [];
        kopya.traverse((o) => {
          if (!o.isMesh) return;
          o.material = Array.isArray(o.material) ? o.material.map((m) => m.clone()) : o.material.clone();
          for (const m of [].concat(o.material)) { m.clippingPlanes = kutuDuzlemi(k); m.clipShadows = true; kopyaMat.push(m); }
        });
        sahne.add(kopya);
        geri.push(() => { sahne.remove(kopya); for (const m of kopyaMat) m.dispose(); });
      }
    }
    if (!kutu && t.yerel) {
      const [x0, y0, z0, x1, y1, z1] = t.yerel, m = kok.matrixWorld;
      duzlem = [new Plane(new Vector3(1, 0, 0), -x0), new Plane(new Vector3(-1, 0, 0), x1), new Plane(new Vector3(0, 1, 0), -y0),
        new Plane(new Vector3(0, -1, 0), y1), new Plane(new Vector3(0, 0, 1), -z0), new Plane(new Vector3(0, 0, -1), z1)].map((p) => p.applyMatrix4(m));
      kutu = new Box3(new Vector3(x0, y0, z0), new Vector3(x1, y1, z1)).applyMatrix4(m);
    }
    const mats = new Set();
    for (const o of gorunurler(kok)) for (const m of [].concat(o.material)) mats.add(m);
    if (duzlem.length) for (const m of mats) { m.clippingPlanes = duzlem; m.clipShadows = true; }
    geri.push(() => { for (const m of mats) { m.clippingPlanes = null; m.clipShadows = false; } });
    // kesik yüz kapakları: gövdenin içinden geçen dikey kesimlere (yalnız PCB'li bölge ve breadboard)
    const kapaklar = [];
    const govde = !kutu || t.yerel ? null : tur === 'kart' && !t.yalin ? { y0: PCB_UST - 1.6, y1: PCB_UST - 0.005, x0: ARD.x - ARD.w / 2, x1: ARD.x + ARD.w / 2, z0: ARD.z - ARD.d / 2, z1: ARD.z + ARD.d / 2 }
      : tur === 'bb' ? { y0: 0.02, y1: BB.h - 0.02, x0: BB.x - BB.w / 2, x1: BB.x + BB.w / 2, z0: BB.z - BB.d / 2, z1: BB.z + BB.d / 2 } : null;
    // kapak tam kesim düzleminde durur; kendi malzemesi kırpılırsa kesim yüzü noktalı çıkar, bu yüzden kırpmasız kopya
    const yanMat = govde ? yanMalzeme(kok, tur) : null;
    const kapakMat = yanMat ? yanMat.clone() : null;
    if (kapakMat) { kapakMat.clippingPlanes = null; kapakMat.clipShadows = false; geri.push(() => kapakMat.dispose()); }
    // oluk tabanı biraz koyu (kanalın içi gölgede kalır gibi; boyalı kanal rengine yakın)
    const tabanMat = kapakMat && t.oluk ? kapakMat.clone() : null;
    if (tabanMat) { tabanMat.color.multiplyScalar(0.86); geri.push(() => tabanMat.dispose()); }
    // Kapaklar gölge de düşürür: kırpılan gövdenin kesik yüzü açık kaldığı için o yandan gölgesi eksik çıkıyordu (oluk
    // duvarının kanala düşen gölgesi de buradan gelir). Tek yüzlü düzlem; ışığa arkası dönük olanlar gölge haritasına girer.
    if (govde && kapakMat) for (const k of kutular) {
      const { min: n, max: x } = k;
      const ya = Math.max(n.y, govde.y0), yb = Math.min(x.y, govde.y1);
      if (yb <= ya) continue;
      const h = yb - ya, yc = (ya + yb) / 2;
      const xa = Math.max(n.x, govde.x0), xb = Math.min(x.x, govde.x1), za = Math.max(n.z, govde.z0), zb = Math.min(x.z, govde.z1);
      const koy = (geo, mat, fn) => { const m = new Mesh(geo, mat); fn(m); m.receiveShadow = true; m.castShadow = true; kapaklar.push(m); sahne.add(m); };
      const ekle = (w, ry, px, pz) => koy(new PlaneGeometry(w, h), kapakMat, (m) => { m.rotation.y = ry; m.position.set(px, yc, pz); });
      if (n.x > govde.x0 + 0.01) ekle(zb - za, -Math.PI / 2, n.x, (za + zb) / 2);
      if (x.x < govde.x1 - 0.01) ekle(zb - za, Math.PI / 2, x.x, (za + zb) / 2);
      if (n.z > govde.z0 + 0.01) ekle(xb - xa, Math.PI, (xa + xb) / 2, n.z);
      if (x.z < govde.z1 - 0.01) ekle(xb - xa, 0, (xa + xb) / 2, x.z);
      // yatay kesim (yalnız oluk tabanı): üste bakan kapak
      if (x.y < govde.y1 - 0.01) koy(new PlaneGeometry(xb - xa, zb - za), tabanMat || kapakMat, (m) => { m.rotation.x = -Math.PI / 2; m.position.set((xa + xb) / 2, x.y, (za + zb) / 2); });
    }
    geri.push(() => { for (const m of kapaklar) { sahne.remove(m); m.geometry.dispose(); } });
    // içerik kutusu: kırpma kutusu ile nesnenin kesişimi
    const ic = kutuBul(kok);
    if (kutu) ic.intersect(kutu);
    let sonuc;
    if (ic.isEmpty()) sonuc = { hata: 'bos' };
    else {
      const m = ic.getCenter(new Vector3()), boy = ic.getSize(new Vector3());
      // kaide: içeriğin altında, ayak izini (xz köşegeni) kapsar; uzun parçada (kablo) taşmasına izin verilir
      const r = Math.max(4, Math.min(Math.hypot(boy.x, boy.z) / 2 * 1.06, Math.max(boy.x, boy.z) * 0.42 + Math.min(boy.x, boy.z) * 0.5 + 1));
      const kh = Math.max(1.6, r * 0.16);
      kaide.scale.set(r, kh, r); kaide.position.set(m.x, ic.min.y - kh / 2 - 0.01, m.z); kaide.visible = true;
      const tum = ic.clone().union(new Box3(new Vector3(m.x - r, ic.min.y - kh, m.z - r), new Vector3(m.x + r, ic.min.y, m.z + r)));
      const c = tum.getCenter(new Vector3()), yari = tum.getSize(new Vector3()).length() / 2;
      // gölge: güneş yönü sabit, kamera bu kutuya
      gunes.position.copy(c).addScaledVector(GUNES_YON, yari * 4); gunes.target.position.copy(c);
      Object.assign(gunes.shadow.camera, { left: -yari * 1.2, right: yari * 1.2, top: yari * 1.2, bottom: -yari * 1.2, near: yari * 0.5, far: yari * 8 });
      gunes.shadow.camera.updateProjectionMatrix(); gunes.target.updateMatrixWorld();
      R.shadowMap.needsUpdate = true;
      let yon;
      if (t.yon === 'yan') yon = (boy.x >= boy.z ? new Vector3(0.12, 0.42, 0.9) : new Vector3(0.9, 0.42, 0.12)).normalize();
      else yon = new Vector3(...t.yon).normalize();
      const uzak = yari / Math.sin((FOV / 2) * Math.PI / 180) * 1.05;
      kamera.position.copy(c).addScaledVector(yon, uzak); kamera.near = uzak * 0.2; kamera.far = uzak * 3; kamera.lookAt(c);
      kamera.clearViewOffset(); kamera.updateProjectionMatrix();
      // 1) küçük çizim: saydam olmayan alan
      R.setSize(ON, ON, false); R.render(sahne, kamera);
      const a = alfaKutusu();
      if (!a) sonuc = { hata: 'saydam' };
      else {
        // 2) kare kırpma, kenar payı; son çizim
        const s = Math.max(a.x1 - a.x0, a.y1 - a.y0) * (1 + 2 * PAY), cx = (a.x0 + a.x1) / 2, cy = (a.y0 + a.y1) / 2;
        kamera.setViewOffset(ON, ON, cx - s / 2, cy - s / 2, s, s); kamera.updateProjectionMatrix();
        R.setSize(N, N, false);
        // 2a) kaplama: yarı saydam malzemeler (röntgen gövdesi, LED epoksisi) geçici olarak opak; yalnız saydamlık (alfa) alınır
        const saydam = [];
        for (const m of mats) if (m.transparent && !soluklar.has(m)) { saydam.push([m, m.opacity, m.depthWrite]); m.transparent = false; m.opacity = 1; m.depthWrite = true; m.needsUpdate = true; }
        R.shadowMap.needsUpdate = true; R.render(sahne, kamera);
        const alfa = canvas.toDataURL('image/png');
        for (const [m, o, d] of saydam) { m.transparent = true; m.opacity = o; m.depthWrite = d; m.needsUpdate = true; }
        // 2b) renk: sabit açık zemin üstünde; yarı saydam yerler bu zeminle birleşir, sonuç opak yazılır (kart koyu temada
        // da aynı görünür). Kenar yumuşatma pikselleri de zeminle karışır: koyu kartta koyu parçaya ince açık kenar verir.
        R.setClearColor(ZEMIN, 1); R.shadowMap.needsUpdate = true; R.render(sahne, kamera); R.setClearColor(0x000000, 0);
        sonuc = { png: canvas.toDataURL('image/png'), alfa, kaideR: Math.round(r * 10) / 10, icerik: [boy.x, boy.y, boy.z].map((v) => Math.round(v * 10) / 10) };
      }
    }
    kaide.visible = false;
    for (const g of geri.reverse()) g();
    kok.visible = false;
    return sonuc;
  },
};
window.podyumHazir = true;
`;

// ------------------------------------------------------------------ yardımcılar
const sade = (s) => s.toLocaleLowerCase('tr').replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
  .normalize('NFD').replace(/[̀-ͯ]/g, '');
const parcalaAd = (id, ozel) => [...new Set(sade(ozel).split(/[^a-z0-9]+/).filter((t) => t && !id.includes(t) && t !== 'ile'))].slice(0, 3).join('-');
const ozet = (b) => crypto.createHash('sha1').update(b).digest('hex').slice(0, 8);

async function webp(png) {
  for (const q of WEBP) {
    const b = await sharp(png).resize(BOY, BOY, { kernel: 'lanczos3' }).webp({ quality: q, alphaQuality: 90, effort: 6, smartSubsample: true }).toBuffer();
    if (b.length <= HEDEF_KB * 1024 || q === WEBP[WEBP.length - 1]) return { b, q };
  }
  return null;
}
async function ham(png, boy = FARK.boy) {
  return sharp(png).resize(boy, boy, { kernel: 'lanczos3' }).ensureAlpha().raw().toBuffer();
}
// Sanal - Fiziksel farkı: en az birinde saydam olmayan piksellerde ortalama kanal farkı ve belirgin farklı piksel oranı
function fark(a, b) {
  let top = 0, n = 0, belirgin = 0;
  for (let i = 0; i < a.length; i += 4) {
    if (a[i + 3] < 128 && b[i + 3] < 128) continue;
    const fa = a[i + 3] / 255, fb = b[i + 3] / 255; // saydamlık farkı da sayılır (biçim farkı)
    const d = [0, 1, 2].map((k) => Math.abs(a[i + k] * fa - b[i + k] * fb));
    const m = Math.max(...d, Math.abs(a[i + 3] - b[i + 3]));
    top += (d[0] + d[1] + d[2]) / 3; n++;
    if (m > FARK.piksel) belirgin++;
  }
  return { ortalama: n ? top / n : 0, oran: n ? belirgin / n : 0 };
}

// ------------------------------------------------------------------ çalıştır
const paket = await esbuild.build({
  stdin: { contents: SAHNE, resolveDir: path.join(BU, 'src'), sourcefile: 'podyum-sahne.js', loader: 'js' },
  bundle: true, format: 'esm', write: false, minify: true, legalComments: 'none', logLevel: 'warning',
  nodePaths: [path.join(KOK, 'tools/node_modules')],
  metafile: true, absWorkingDir: KOK,
});
const kod = paket.outputFiles[0].text;
// kaynak izi: sahneye giren kendi modüllerimiz (modeller.js, devre.js, gercekci*.js ...) ve bu üreteç. Değişirse
// görseller eskimiş olabilir; tools/3d/test/podyum.test.mjs izi yeniden hesaplar ve uyarır.
// (sahne kodunun kendisi bu dosyada; esbuild onu src/podyum-sahne.js diye anar, diskte yok)
const kaynakDosyalar = [...Object.keys(paket.metafile.inputs).map((f) => path.relative(BU, path.join(KOK, f)))
  .filter((f) => f.startsWith('src/') && f !== 'src/podyum-sahne.js'), 'podyum.mjs'].sort();
const tarayici = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--force-color-profile=srgb', '--font-render-hinting=none'] });
const sayfa = await tarayici.newPage();
const hatalar = [];
sayfa.on('pageerror', (e) => hatalar.push(String(e.message)));
sayfa.on('console', (m) => { if (m.type() === 'error') hatalar.push(m.text()); });
await sayfa.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;background:transparent"><script type="module">${kod.replace(/<\/script/gi, '<\\/script')}</script></body></html>`, { waitUntil: 'load' });
await sayfa.waitForFunction(() => window.podyumHazir || window.__hata, { timeout: 120000 }).catch(() => {});
if (hatalar.length) { console.error('sahne kurulamadı:', hatalar.join(' | ')); await tarayici.close(); process.exit(1); }
const { parcalar } = await sayfa.evaluate(() => window.podyum.liste());

// iş listesi: kimlik -> [{ ozel, parca }]
const isler = [];
for (const [id, t] of Object.entries(AILE_TANIM.kimlikler)) {
  if (SADECE && !SADECE.includes(id)) continue;
  if (!t.kaynak.startsWith('parca:')) { isler.push({ id, ozel: '', t }); continue; }
  const tur = t.kaynak.slice(6), gorulen = new Set();
  for (const p of parcalar.filter((x) => x.tur === tur && (!t.renk || x.renk === t.renk))) {
    const ozel = t.renk ? '' : p.ozel[id] || '';
    if (gorulen.has(ozel)) continue;
    gorulen.add(ozel);
    // örnekli kablo: dosya rengin adını taşır; aynı renkteki kablolar (ör. iki kırmızı) tek görseli paylaşır
    if (t.ornek) isler.push({ id, ozel, kok: `${id}-${p.renk}`, t: { ...t, ornekRenk: p.renk } });
    else isler.push({ id, ozel, t: { ...t, parca: p.ad } });
  }
}

const CIKTI = path.join(KOK, '3d/assets/podyum', AILE);
const LISTE = path.join(BU, 'podyum', `${AILE}.json`);
fs.mkdirSync(CIKTI, { recursive: true }); fs.mkdirSync(path.dirname(LISTE), { recursive: true });
const eski = fs.existsSync(LISTE) ? JSON.parse(fs.readFileSync(LISTE, 'utf8')) : null;
const liste = SADECE && eski ? eski.gorseller : {};
const yazilan = new Set(), rapor = [], uretilmeyen = [], pafta = [];
let toplam = 0;
const yaz = (ad, b) => {
  const p = path.join(CIKTI, ad);
  yazilan.add(ad);
  if (fs.existsSync(p) && fs.readFileSync(p).equals(b)) return 'ayni';
  fs.writeFileSync(p, b); return 'yeni';
};
// renk (opak zemin üstünde) + saydamlık (yarı saydamlar opak çizilerek) -> tek PNG
const birlestir = async (c) => {
  const veri = (u) => Buffer.from(u.split(',')[1], 'base64');
  const rgb = await sharp(veri(c.png)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const a = await sharp(veri(c.alfa)).extractChannel(3).raw().toBuffer();
  return sharp(rgb.data, { raw: { width: rgb.info.width, height: rgb.info.height, channels: 3 } }).joinChannel(a, { raw: { width: rgb.info.width, height: rgb.info.height, channels: 1 } }).png().toBuffer();
};
const yapilan = new Map(); // dosya kökü -> liste kaydı (örnekli kablolarda aynı renk bir kez çizilir)
for (const is of isler) {
  const { id, ozel, t } = is;
  const kok = is.kok || (ozel ? `${id}-${parcalaAd(id, ozel)}` : id);
  if (yapilan.has(kok)) { (liste[id] ||= {})[ozel] = yapilan.get(kok); continue; }
  const kipler = t.kip ? [t.kip] : ['sanal', 'fiziksel'];
  const cizim = {};
  for (const g of kipler) cizim[g] = await sayfa.evaluate((tt, gg) => window.podyum.ciz(tt, gg), t, g);
  const sorun = kipler.map((g) => cizim[g].hata && `${g}: ${cizim[g].hata}`).filter(Boolean);
  if (sorun.length) { uretilmeyen.push([id + (ozel ? ` (${ozel})` : ''), `çizilemedi (${sorun.join(', ')})`]); continue; }
  const png = {};
  for (const g of kipler) png[g] = await birlestir(cizim[g]);
  // tek kipli (kip: 'sanal' ya da 'fiziksel') kimlik iki görünümde aynı dosyayı kullanır
  const f = t.kip ? { ortalama: 0, oran: 0 } : fark(await ham(png.sanal), await ham(png.fiziksel));
  const ayri = f.ortalama > FARK.ortalama || f.oran > FARK.oran;
  const dosyalar = ayri ? [[`${kok}-sanal.webp`, png.sanal], [`${kok}-fiziksel.webp`, png.fiziksel]] : [[`${kok}.webp`, png[kipler[0]]]];
  const bilgi = [];
  const icerik = [];
  for (const [ad, p] of dosyalar) {
    const { b, q } = await webp(p);
    const d = yaz(ad, b);
    toplam += b.length; icerik.push(b);
    bilgi.push(`${ad} ${(b.length / 1024).toFixed(1)} KB q${q}${d === 'yeni' ? ' (yazildi)' : ''}`);
    pafta.push({ ad, b });
  }
  (liste[id] ||= {})[ozel] = { dosya: kok, ayri, surum: ozet(Buffer.concat(icerik)) };
  yapilan.set(kok, liste[id][ozel]);
  rapor.push(`${id}${ozel ? ` [${ozel}]` : ''}: fark ort ${f.ortalama.toFixed(1)} oran ${(f.oran * 100).toFixed(1)}% -> ${ayri ? 'AYRI' : 'tek'}${t.kip ? ` (yalnız ${t.kip})` : ''} | kaide r ${cizim[kipler[0]].kaideR} | ${bilgi.join(', ')}`);
  console.log(rapor[rapor.length - 1]);
}
await tarayici.close();

// listede olmayan eski dosyalar silinir (klasör bu üretecindir); --sadece ile kısmi çalışmada dokunulmaz
if (!SADECE) for (const f of fs.readdirSync(CIKTI)) if (f.endsWith('.webp') && !yazilan.has(f)) { fs.unlinkSync(path.join(CIKTI, f)); console.log('silindi', f); }
// kimlikleri sabit sırada yaz (git farkı küçük kalsın)
const sirali = Object.fromEntries(Object.keys(liste).sort().map((id) => [id, Object.fromEntries(Object.keys(liste[id]).sort().map((o) => [o, liste[id][o]]))]));
const yeniListe = JSON.stringify({ aile: AILE, boy: BOY, yol: `/3d/assets/podyum/${AILE}/`, gorseller: sirali }, null, 1) + '\n';
if (!fs.existsSync(LISTE) || fs.readFileSync(LISTE, 'utf8') !== yeniListe) fs.writeFileSync(LISTE, yeniListe);
// kaynak izi ve üretilmeyenler (test için; çalışma anı listesine girmez). Kısmi çalışmada yazılmaz: iz yalnız bütün
// görseller aynı kaynaktan üretildiyse doğrudur.
if (!SADECE) {
  const IZ = path.join(BU, 'podyum', `${AILE}.kaynak.json`);
  const yeniIz = JSON.stringify({ aile: AILE, iz: kaynakIzi(BU, kaynakDosyalar), dosyalar: kaynakDosyalar, uretilmez: AILE_TANIM.uretilmez }, null, 1) + '\n';
  if (!fs.existsSync(IZ) || fs.readFileSync(IZ, 'utf8') !== yeniIz) fs.writeFileSync(IZ, yeniIz);
}

// kapsam: katalogdaki kimliklerden görseli olmayanlar
const { KESIF } = await import(pathToFileURL(path.join(BU, 'src/kesif-veri.js')).href);
if (!SADECE) {
  for (const id of Object.keys(KESIF)) {
    if (sirali[id]) continue;
    const kural = Object.entries(AILE_TANIM.uretilmez).find(([k]) => (k.endsWith('*') ? id.startsWith(k.slice(0, -1)) : k === id));
    if (!uretilmeyen.some(([u]) => u.startsWith(id))) uretilmeyen.push([id, kural ? kural[1] : 'tanım yok']);
  }
}
const dosyaSay = fs.readdirSync(CIKTI).filter((f) => f.endsWith('.webp')).length;
console.log(`\n${AILE}: ${Object.keys(sirali).length} kimlik, ${dosyaSay} dosya, bu çalışmada ${(toplam / 1024).toFixed(1)} KB`);
if (uretilmeyen.length) { console.log('üretilmeyen:'); for (const [id, n] of uretilmeyen) console.log(`  ${id}: ${n}`); }

// inceleme paftası (isteğe bağlı): açık ve koyu zeminde yan yana
if (PAFTA) {
  const H = 132, sut = 8, satir = Math.ceil(pafta.length / sut);
  const parcalar2 = [];
  for (const [i, { b }] of pafta.entries()) {
    const k = await sharp(b).resize(H - 4, H - 4).png().toBuffer();
    const x = (i % sut) * H * 2, y = Math.floor(i / sut) * H;
    parcalar2.push({ input: k, left: x + 2, top: y + 2 }, { input: k, left: x + H + 2, top: y + 2 });
  }
  const zemin = Buffer.alloc(sut * 2 * H * satir * H * 4);
  for (let y = 0; y < satir * H; y++) for (let x = 0; x < sut * 2 * H; x++) { const koyu = Math.floor(x / H) % 2 === 1; const i = (y * sut * 2 * H + x) * 4; const v = koyu ? [21, 16, 32] : [243, 239, 250]; zemin[i] = v[0]; zemin[i + 1] = v[1]; zemin[i + 2] = v[2]; zemin[i + 3] = 255; }
  await sharp(zemin, { raw: { width: sut * 2 * H, height: satir * H, channels: 4 } }).composite(parcalar2).png().toFile(PAFTA);
  console.log('pafta', PAFTA, pafta.map((p) => p.ad).join(' '));
}
