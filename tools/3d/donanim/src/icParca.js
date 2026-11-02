// Kasa içi parça kurucuları (ders 2). Her kurucu "küme" (K) alır: geometriler köşe renkli (boya) ve atlas uv'li biçimde üç aileye
// toplanır: p (plastik), m (metal), b (boyalı sac). Her küme sonunda aile başına TEK geometride birleşir (çizim çağrısı bütçesi).
// Konumlar kasa-yerel birim (icYer.js). Düzlemler: -x'e bakan etiket düzlemi = PlaneGeometry.rotateY(-PI/2) (u +z, v +y).
import {
  PlaneGeometry, CylinderGeometry, TorusGeometry, ExtrudeGeometry, Shape, Path, CatmullRomCurve3, TubeGeometry, Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { kutu, yuvarlak, silindir, birlestir, boya, cerceveGeo } from './yardimci.js';
import { atlasUv } from './icDoku.js';
import {
  PCB, TEPSI, CPU, RAM, GPU, WIFI, PSU, M2, HDD, SSD, SATA_PORT, BIOS, ATX24, EPS, HAVA, SIVI, ON_FAN, pcieY,
} from './icYer.js';

const V = (x, y, z) => new Vector3(x, y, z);

// ------------------------------------------------------------------ küme
export function kume(orijin = [0, 0, 0]) {
  const [ox, oy, oz] = orijin, liste = { p: [], m: [], b: [] };
  const ekle = (aile, g, hex, uv) => {
    if (ox || oy || oz) g.translate(-ox, -oy, -oz);
    atlasUv(g, uv || 'beyaz'); boya(g, hex);
    liste[aile].push(g); return g;
  };
  return { orijin, liste, p: (g, hex = 0x22252b, uv) => ekle('p', g, hex, uv), m: (g, hex = 0xb6bcc6, uv) => ekle('m', g, hex, uv), b: (g, hex = 0x24272d, uv) => ekle('b', g, hex, uv) };
}
// kümeyi meshlere çevirir: { p, m, b } (boş aile atlanır); mal = { p, m, b } malzemeleri
export function kumeBitir(K, mal, hedef) {
  const cikti = {};
  for (const a of ['p', 'm', 'b']) {
    if (!K.liste[a].length) continue;
    const m = birlestir(K.liste[a], mal[a]); m.name = 'ic-' + a;
    hedef.add(m); cikti[a] = m;
  }
  return cikti;
}

// ------------------------------------------------------------------ yardımcılar
const yonlen = (g, eksen) => { if (eksen === 'y') g.rotateX(-Math.PI / 2); else if (eksen === 'x') g.rotateY(Math.PI / 2); return g; };
// -x'e bakan etiket düzlemi (genişlik z boyunca, yükseklik y boyunca)
const yanEtiket = (zBoy, yBoy, x, y, z) => { const g = new PlaneGeometry(zBoy, yBoy); g.rotateY(-Math.PI / 2); g.translate(x, y, z); return g; };
// +z / -z'ye bakan etiket düzlemi (genişlik x boyunca)
const onEtiket = (xBoy, yBoy, x, y, z, arka = false) => { const g = new PlaneGeometry(xBoy, yBoy); if (arka) g.rotateY(Math.PI); g.translate(x, y, z); return g; };
function uvNorm(g) { // extrude uv'leri dünya birimi: 0..1'e çevir
  const uv = g.attributes.uv; let a = 1e9, b = 1e9, c = -1e9, d = -1e9;
  for (let i = 0; i < uv.count; i++) { a = Math.min(a, uv.getX(i)); c = Math.max(c, uv.getX(i)); b = Math.min(b, uv.getY(i)); d = Math.max(d, uv.getY(i)); }
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) - a) / (c - a || 1), (uv.getY(i) - b) / (d - b || 1));
  return g;
}
export function boruGeo(noktalar, r, parca = 48, radyal = 8, gerginlik = 0.4) {
  const egri = new CatmullRomCurve3(noktalar.map((p) => (p.isVector3 ? p : V(...p))), false, 'catmullrom', gerginlik);
  return { geo: new TubeGeometry(egri, parca, r, radyal, false), egri };
}
// kablo: boru + uçlarda fiş; fisler: [{ nokta, yon, w, h, d, hex }]
function kablo(K, noktalar, r, hex, { radyal = 8, parca = 40, gerginlik = 0.4 } = {}) {
  const { geo, egri } = boruGeo(noktalar, r, parca, radyal, gerginlik);
  K.p(geo, hex); return egri;
}
function bag(K, egri, t, r, hex = 0xe8eaee) { // kablo bağı: eğri üzerinde ince halka
  const p = egri.getPointAt(t), tg = egri.getTangentAt(t);
  const g = new TorusGeometry(r + 0.12, 0.17, 5, 12);
  g.lookAt(tg); g.translate(p.x, p.y, p.z); // halka düzlemi (xy) -> teğete dik
  K.p(g, hex);
}

// ------------------------------------------------------------------ kabuk (boyalı sac)
export function kabukYap(K) {
  const tepsiRenk = 0x30343c, ic = 0x22252b;
  K.b(kutu(0.4, 88.4, 86, 19.8, 45.8, 0), tepsiRenk);                  // tepsi (anakart duvarı)
  K.b(kutu(39.2, 0.4, 86, 0, 1.8, 0), ic);                              // taban
  K.b(kutu(39.2, 88.4, 0.4, 0, 45.8, 42.8), ic); K.b(kutu(39.2, 88.4, 0.4, 0, 45.8, -42.8), ic);  // ön ve arka duvar
  // tavan çerçevesi (ızgara ortada, ayrı ve delikli)
  K.b(kutu(2.0, 0.4, 86, -18.6, 89.8, 0), ic); K.b(kutu(2.0, 0.4, 86, 18.6, 89.8, 0), ic);
  K.b(kutu(39.2, 0.4, 2.0, 0, 89.8, 41.9), ic); K.b(kutu(39.2, 0.4, 2.0, 0, 89.8, -41.9), ic);
  // yan kapağın oturduğu çerçeve (açık kenar boyunca ince flanş)
  const fl = 0x3b3f47;
  K.b(kutu(0.9, 1.2, 86, -19.15, 89.0, 0), fl); K.b(kutu(0.9, 1.2, 86, -19.15, 2.6, 0), fl);
  K.b(kutu(0.9, 88.4, 1.2, -19.15, 45.8, 42.2), fl); K.b(kutu(0.9, 88.4, 1.2, -19.15, 45.8, -42.2), fl);
  // tepsi üzerindeki kablo geçişleri (lastik kenarlı): ön şerit ve üst
  const las = 0x0a0a0c;
  const gec = (z, y, zb, yb) => { K.b(yuvarlak(0.5, yb, zb, 0.2, 19.4, y, z, 2), las); K.b(yuvarlak(0.3, yb - 1.0, zb - 1.0, 0.2, 19.2, y, z, 2), 0x050506); };
  gec(23.5, 46.5, 4.2, 7.4); gec(-39, 86.5, 6, 3.2); gec(3, 13, 6, 5.4);
  // tepsideki işlemci arka plakası boşluğu (yalnız koyu bir dikdörtgen; arkası görünmez)
  K.b(kutu(0.1, 14, 14, 19.5, CPU.y, CPU.z), 0x14161a);
}
export function kabukMetal(K) {
  // menteşe pimleri (arka kenar) ve standoff vidaları
  for (const y of [14, 45, 76]) K.m(silindir(0.55, 4.4, -19.75, y, -43.0, { seg: 12 }), 0xb9bec8);
  const nok = [[-40.2, 31.4], [-40.2, 66], [-40.2, 77.6], [-3, 31.4], [-3, 53], [-3, 77.6], [18.4, 31.4], [18.4, 54], [18.4, 77.6]];
  for (const [z, y] of nok) {
    K.m(silindir(0.5, TEPSI - 18.32, 0, 0, 0, { eksen: 'x', seg: 6 }).translate((TEPSI + 18.32) / 2, y, z), 0xc9a24a); // pirinç ayak
    K.m(silindir(0.52, 0.16, 17.92, y, z, { eksen: 'x', seg: 12 }), 0xcfd3da);                                  // vida başı
  }
}

// ------------------------------------------------------------------ anakart, soket, işlemci, VRM
export function anakartYap(K) {
  const x0 = PCB.x0, ort = [x0 + PCB.kalin / 2, (PCB.y0 + PCB.y1) / 2, (PCB.z0 + PCB.z1) / 2];
  K.p(kutu(PCB.kalin, PCB.y1 - PCB.y0, PCB.z1 - PCB.z0, ...ort), 0xffffff, 'pcb');
  // işlemci soketi (plastik gövde + çelik yük plakası + kaldıraç)
  const sz = CPU.z, sy = CPU.y;
  K.p(kutu(0.7, 10, 9, 17.65, sy, sz), 0x2a2c31);
  K.m(kutu(0.35, 0.9, 9.4, 17.1, sy + 4.9, sz), 0xb4b9c2); K.m(kutu(0.35, 0.9, 9.4, 17.1, sy - 4.9, sz), 0xb4b9c2);
  K.m(kutu(0.35, 10.8, 0.9, 17.1, sy, sz - 4.6), 0xb4b9c2); K.m(kutu(0.35, 10.8, 0.9, 17.1, sy, sz + 4.6), 0xb4b9c2);
  K.m(silindir(0.22, 8.6, 16.9, sy + 5.6, sz + 5.2, { eksen: 'z', seg: 8 }), 0xd0d4da);
  K.p(kutu(0.38, 9.0, 7.5, 17.0, sy, sz), 0x2f5c44);                       // işlemci alt tabanı (yeşil)
  K.m(yuvarlak(0.5, 7.4, 6.2, 0.18, 16.55, sy, sz, 2), 0xffffff);          // ısı yayıcı (IHS)
  K.p(yanEtiket(6.2, 7.4, 16.29, sy, sz), 0xffffff, 'cpu');
  // VRM soğutucuları (koyu eloksallı, nervürlü)
  const vr = 0x2c3037, nerv = 0x3a3f48;
  const vrm = (z0, z1, y0, y1, x1, nz, nerYon) => {
    K.m(kutu(x1 - 14.4, y1 - y0, z1 - z0, (x1 + 14.4) / 2, (y0 + y1) / 2, (z0 + z1) / 2), vr);
    for (let i = 0; i < nz; i++) {
      if (nerYon === 'z') K.m(kutu(0.35, y1 - y0 - 0.5, 0.45, 14.3, (y0 + y1) / 2, z0 + (i + 0.5) * ((z1 - z0) / nz)), nerv);
      else K.m(kutu(0.35, 0.45, z1 - z0 - 0.5, 14.3, y0 + (i + 0.5) * ((y1 - y0) / nz), (z0 + z1) / 2), nerv);
    }
  };
  vrm(-34.5, -28.0, 56.5, 71.5, 17.9, 6, 'z'); vrm(-27.0, -12.0, 72.5, 76.0, 17.9, 7, 'z');
  K.m(kutu(2.6, 7.6, 7.6, 16.7, 37.0, 4.5), vr);                              // çip kümesi soğutucusu
  for (let i = 0; i < 5; i++) K.m(kutu(0.5, 7.4, 0.4, 15.5, 37.0, 1.7 + i * 1.5), nerv);
  // çip kümesi: yazı için baskı devresinde; G/Ç zırhı (arka-üst köşe)
  K.p(yuvarlak(6.0, 9.2, 7.6, 0.4, 14.9, 73.9, -37.8, 2), 0x1f2127);
  K.m(kutu(0.3, 9.0, 7.2, 11.8, 73.9, -37.8), 0x9aa0aa);
  // SATA bağlantı noktaları (dik açılı, 4 adet)
  for (let i = 0; i < 4; i++) { K.p(kutu(1.7, 1.0, SATA_PORT.z1 - SATA_PORT.z0, 17.1, SATA_PORT.y(i) + 0.5, (SATA_PORT.z0 + SATA_PORT.z1) / 2), 0x16171b); K.p(kutu(0.1, 0.5, 2.6, 16.2, SATA_PORT.y(i) + 0.5, SATA_PORT.z1 - 1.4), 0x050506); }
  // güç konnektörleri: 24 pin (ön kenar) ve 8 pin işlemci (üst kenar)
  K.p(kutu(18.0 - ATX24.x0, ATX24.y1 - ATX24.y0, ATX24.z1 - ATX24.z0, (18.0 + ATX24.x0) / 2, (ATX24.y0 + ATX24.y1) / 2, (ATX24.z0 + ATX24.z1) / 2), 0xece7d9);
  K.p(yanEtiket(2.4, 10.4, ATX24.x0 - 0.02, (ATX24.y0 + ATX24.y1) / 2, (ATX24.z0 + ATX24.z1) / 2), 0xffffff, 'pin24');
  K.p(kutu(18.0 - EPS.x0, EPS.y1 - EPS.y0, EPS.z1 - EPS.z0, (18.0 + EPS.x0) / 2, (EPS.y0 + EPS.y1) / 2, (EPS.z0 + EPS.z1) / 2), 0x202226);
  // BIOS pili (CR2032) ve yuvası
  K.p(yuvarlak(1.6, 4.8, 4.8, 0.5, 17.2, BIOS.y, BIOS.z, 2), 0x111215);
  K.m(silindir(2.0, 1.0, 16.4, BIOS.y, BIOS.z, { eksen: 'x', seg: 28 }), 0xaeb4be);
  { const yuz = new PlaneGeometry(4, 4); yuz.rotateY(-Math.PI / 2); yuz.translate(15.88, BIOS.y, BIOS.z); K.m(yuz, 0xffffff, 'pil'); }
  // PCIe yuvaları ve RAM yuvaları
  const kyuva = 0x1a1b1f, altin = 0xe0b64e;
  const zYuva = (z0, z1, y) => {
    K.p(kutu(2.0, 1.0, z1 - z0, 17.0, y, (z0 + z1) / 2), kyuva);
    K.m(kutu(0.1, 0.36, z1 - z0 - 0.8, 15.98, y, (z0 + z1) / 2), altin);
    K.p(kutu(0.5, 0.9, 0.6, 16.6, y, z1 + 0.4), 0xdfe3e8);                        // mandal
  };
  zYuva(-40.6, -22.8, pcieY(4)); zYuva(-40.6, -22.8, pcieY(3)); zYuva(-40.6, -35.6, pcieY(2));
  for (let k = 0; k < 4; k++) {
    const z = RAM.z0 + RAM.adim * k, yo = (RAM.y0 + RAM.y1) / 2, uz = RAM.y1 - RAM.y0;
    K.p(kutu(1.6, uz, 1.4, 17.2, yo, z), kyuva);
    K.m(kutu(0.1, uz - 1.2, 0.36, 16.35, yo, z), altin);
    for (const yy of [RAM.y0 - 0.5, RAM.y1 + 0.5]) K.p(kutu(1.5, 1.0, 1.1, 17.2, yy, z), 0xcfd2d8);
  }
  // M.2 yuvası (sürücü ayrı), SSD vidası
  K.p(kutu(0.9, 4.4, 1.0, 17.55, (M2.y0 + M2.y1) / 2, M2.z0 - 0.6), 0x16171b);
  K.m(silindir(0.45, 0.3, 17.2, (M2.y0 + M2.y1) / 2, M2.z1 + 0.7, { eksen: 'x', seg: 10 }), 0xcfd3da);
}

// ------------------------------------------------------------------ termal macun (yalnız soğutucu kalkınca görünür)
export function macunYap(K) {
  const sy = CPU.y, sz = CPU.z, x = 16.2, mac = 0xaab2be;                              // IHS yüzü 16.3; macun 0.2 kalınlık
  K.m(silindir(2.5, 0.2, x, sy, sz, { eksen: 'x', seg: 24 }), mac);
  K.m(kutu(0.2, 0.5, 6.0, x - 0.02, sy, sz), mac); K.m(kutu(0.2, 6.0, 0.5, x - 0.02, sy, sz), mac);
  K.m(silindir(0.9, 0.24, x - 0.03, sy + 1.6, sz - 1.4, { eksen: 'x', seg: 14 }), mac);
}

// ------------------------------------------------------------------ RAM (çıkarılabilir küme: orijin RAM.xAlt'ta)
export function ramYap(K) {
  const yo = (RAM.y0 + RAM.y1) / 2 + 0.4, uz = RAM.y1 - RAM.y0 - 0.4, xo = (RAM.xAlt + RAM.xUst) / 2, xb = RAM.xAlt - RAM.xUst;
  for (const k of RAM.dolu) {
    const z = RAM.z0 + RAM.adim * k;
    K.m(kutu(xb, uz, 1.5, xo, yo, z), 0x3a3e46);                                     // soğutucu gövde
    K.m(kutu(0.5, uz, 1.7, RAM.xUst + 0.25, yo, z), 0x9aa0aa);                       // üst çıta
    K.p(onEtiket(xb - 0.6, uz - 1.2, xo, yo, z + 0.77), 0xffffff, 'ram');
    K.p(onEtiket(xb - 0.6, uz - 1.2, xo, yo, z - 0.77, true), 0xffffff, 'ram');
    K.m(kutu(0.5, uz - 0.6, 1.0, RAM.xAlt + 0.25, yo, z), 0xe0b64e);                 // altın parmaklar
    K.p(kutu(0.1, uz - 0.6, 1.1, RAM.xAlt - 0.1, yo, z), 0x1d4d38);
  }
}

// ------------------------------------------------------------------ hava soğutucu (kule): orijin [0, CPU.y, -22]
export function havaYap(K) {
  const sy = CPU.y, sz = CPU.z, zk = (HAVA.z0 + HAVA.z1) / 2, W = HAVA.y, N = 26;
  K.m(kutu(0.85, 8.4, 7.6, 15.675, sy, sz), 0xc9ced6);                                // taban (nikel kaplama)
  K.m(kutu(0.5, 2.6, 14, 15.0, sy, sz), 0x2e323a);                                    // bağlantı çubuğu
  K.m(silindir(0.6, 0.7, 14.9, sy, sz - 6.4, { eksen: 'x', seg: 10 }), 0xcfd3da); K.m(silindir(0.6, 0.7, 14.9, sy, sz + 6.4, { eksen: 'x', seg: 10 }), 0xcfd3da);
  for (let i = 0; i < N; i++) {                                                         // alüminyum kanatlar
    const x = HAVA.x1 - (i * (HAVA.x1 - HAVA.x0)) / (N - 1);
    K.m(kutu(0.14, W, HAVA.z1 - HAVA.z0, x, sy, zk), i % 2 ? 0xc3c8d0 : 0xd2d6dc);
  }
  const bz = [-3.2, -1.1, 1.1, 3.2], by = [1.4, -1.4, 1.4, -1.4];                      // bakır ısı boruları
  bz.forEach((dz, i) => {
    K.m(silindir(0.6, 25.0, 3.2, sy + by[i], zk + dz, { eksen: 'x', seg: 12 }), 0xc9773a);
    K.m(silindir(0.62, 0.2, HAVA.x0 - 0.8, sy + by[i], zk + dz, { eksen: 'x', seg: 12 }), 0xd98a4a);
  });
  K.p(kutu(0.5, W, HAVA.z1 - HAVA.z0, HAVA.x0 - 0.45, sy, zk), 0x17181c);              // üst plaka
  fanGovde(K, [(HAVA.x0 + HAVA.x1) / 2, sy, HAVA.fanZ], 'z', HAVA.fanBoy, HAVA.fan, 8.6, 0x1d2025);
}

// ------------------------------------------------------------------ fan gövdesi (çerçeve, motor göbeği, 3 destek); kanatlar örnekli (icAkis.js)
export function fanGovde(K, m, eksen, boy, kalin, rD, hex = 0x1d2025) {
  const parca = [cerceveGeo(boy, boy, rD, kalin), silindir(2.6, kalin * 0.7, 0, 0, 0, { eksen: 'z', seg: 18 })];
  for (let i = 0; i < 3; i++) { const s = kutu(rD - 2.0, 0.55, kalin * 0.35, (rD + 2.0) / 2, 0, 0); s.rotateZ(i * 2.094 + 0.5); parca.push(s); }
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) parca.push(silindir(0.5, kalin + 0.12, sx * (boy / 2 - 1.1), sy * (boy / 2 - 1.1), 0, { eksen: 'z', seg: 8 }));
  parca.forEach((g, i) => { uvNorm(g); yonlen(g, eksen); g.translate(m[0], m[1], m[2]); K.p(g, i === 1 ? 0x2a2d33 : hex); });
}

// ------------------------------------------------------------------ sıvı soğutma: pompa bloğu (orijin sıfır), radyatör, bağlantılar
export function pompaYap(K) {
  const sy = CPU.y, sz = CPU.z, cx = (SIVI.pompaX0 + SIVI.pompaX1) / 2;
  K.p(silindir(SIVI.pompaR, SIVI.pompaX1 - SIVI.pompaX0, cx, sy, sz, { eksen: 'x', seg: 36 }), 0x1c1e23);
  K.m(silindir(3.3, 0.3, 15.95, sy, sz, { eksen: 'x', seg: 28 }), 0xc9773a);                                // bakır soğuk plaka (IHS 16.3'e dayanır)
  for (const dy of [-4.4, 4.4]) for (const dz of [-4.4, 4.4]) K.m(silindir(0.5, 0.9, 15.6, sy + dy, sz + dz, { eksen: 'x', seg: 10 }), 0xcfd3da);
  for (const dz of [-1.7, 1.7]) {                                                                          // dirsek bağlantıları (yukarı)
    K.m(silindir(1.0, 2.2, cx, sy + 3.9, sz + dz, { seg: 14 }), 0xc5cad2);
    K.p(silindir(1.3, 0.7, cx, sy + 4.7, sz + dz, { seg: 14 }), 0x111215);
  }
}
export const POMPA_KAPAK = () => silindir(SIVI.pompaR - 0.55, 0.12, SIVI.pompaX0 - 0.05, CPU.y, CPU.z, { eksen: 'x', seg: 36 });
export function radyatorYap(K) {
  const yc = (SIVI.radY0 + SIVI.radY1) / 2, xc = (SIVI.radX0 + SIVI.radX1) / 2, hy = SIVI.radY1 - SIVI.radY0;
  K.m(kutu(SIVI.radX1 - SIVI.radX0, hy, 48, xc, yc, -14), 0xffffff);                       // petek (nervürlü doku)
  K.p(yanEtiket(48, hy, SIVI.radX0 - 0.03, yc, -14), 0xffffff, 'radFin');
  K.m(kutu(SIVI.radX1 - SIVI.radX0, hy, 3.4, xc, yc, -39.7), 0x24272d); K.m(kutu(SIVI.radX1 - SIVI.radX0, hy, 3.4, xc, yc, 11.7), 0x24272d);  // uç tanklar
  for (const x of [8.0, 4.0]) { K.m(silindir(0.95, 1.8, x, 86.9, 14.3, { eksen: 'z', seg: 14 }), 0xc5cad2); K.p(silindir(1.3, 0.6, x, 86.9, 15.4, { eksen: 'z', seg: 14 }), 0x111215); }
  K.m(kutu(0.2, hy + 0.1, 0.4, SIVI.radX0 - 0.05, yc, -37.2), 0x7a8190);
  // radyatör fan çerçeveleri
  fanGovde(K, [0, 81.7, -26], 'y', 24, 5, 11.4, 0x1d2025); fanGovde(K, [0, 81.7, -2], 'y', 24, 5, 11.4, 0x1d2025);
}
// hortum yolları (kasa-yerel): sıcak sıvı pompadan radyatöre (A), soğuyan sıvı radyatörden pompaya (B)
export const HORTUM_R = 1.05;
const PX = (SIVI.pompaX0 + SIVI.pompaX1) / 2, PZ1 = CPU.z + 1.7, PZ0 = CPU.z - 1.7, PYU = CPU.y + 5.4;
export const HORTUM = {
  A: [[PX, PYU, PZ1], [PX - 0.1, PYU + 3.2, PZ1], [13.5, 77.4, -17.2], [13.4, 80.6, -9], [13.4, 81.0, 4], [13.6, 82.2, 13.5], [12.0, 85.5, 19.8], [8.0, 87.0, 18.6], [8.0, 86.9, 15.6]],
  B: [[4.0, 86.9, 15.6], [4.0, 87.0, 18.6], [10.5, 85.6, 22.2], [15.2, 82.0, 15], [15.2, 80.0, 3], [15.0, 79.2, -8], [14.0, 78.2, -14.5], [13.3, 75.5, -21.2], [PX - 0.1, PYU + 3.0, PZ0], [PX, PYU, PZ0]],
};

// ------------------------------------------------------------------ ekran kartı
export function ekranKartiYap(K) {
  const gy = GPU.y, gx = (GPU.x0 + GPU.x1) / 2, gz = (GPU.z0 + GPU.z1) / 2;
  K.p(kutu(GPU.x1 - GPU.x0, 0.32, GPU.z1 - GPU.z0, gx, gy, gz), 0xffffff, 'genel');
  K.m(kutu(1.0, 0.34, 17.8, 17.1, gy, -31.9), 0xe0b64e);                                          // altın parmaklar
  // arka plaka (üstte): üçüncü fan için delikli, hat hatlı
  { const s = new Shape(); s.moveTo(GPU.x0 + 0.2, -39.5); s.lineTo(GPU.x1 - 0.5, -39.5); s.lineTo(GPU.x1 - 0.5, 12.5); s.lineTo(GPU.x0 + 0.2, 12.5); s.closePath();
    const d = new Path(); d.absarc(6.5, -5, 6.8, 0, Math.PI * 2, true); s.holes.push(d);
    const g = new ExtrudeGeometry(s, { depth: 0.45, bevelEnabled: false, curveSegments: 24 }); uvNorm(g); g.rotateX(Math.PI / 2); g.translate(0, gy + 0.2 + 0.45, 0); K.m(g, 0xffffff, 'gpuArka'); }
  // gövde: dış duvarlar + alt plaka (iki fan deliği)
  const wy0 = GPU.alt, wy1 = gy - 0.16, wh = wy1 - wy0, wyc = (wy0 + wy1) / 2, kr = 0x1f2227;
  K.p(kutu(0.5, wh, 52, GPU.x0 + 0.25, wyc, -13.5), kr);                                           // serbest kenar duvarı (-x)
  K.p(kutu(0.5, wh, 52, GPU.x1 - 0.25, wyc, -13.5), kr);
  K.p(kutu(GPU.x1 - GPU.x0, wh, 0.5, gx, wyc, -39.25), kr); K.p(kutu(GPU.x1 - GPU.x0, wh, 0.5, gx, wyc, 12.25), kr);
  { const s = new Shape(); s.moveTo(GPU.x0, -39.5); s.lineTo(GPU.x1, -39.5); s.lineTo(GPU.x1, 12.5); s.lineTo(GPU.x0, 12.5); s.closePath();
    for (const z of [-26, -5]) { const d = new Path(); d.absarc(6.5, z, 8.6, 0, Math.PI * 2, true); s.holes.push(d); }
    const g = new ExtrudeGeometry(s, { depth: 0.6, bevelEnabled: false, curveSegments: 28 }); uvNorm(g); g.rotateX(Math.PI / 2); g.translate(0, wy0 + 0.6, 0); K.p(g, 0x181a1e); }
  K.p(yanEtiket(52, wh - 0.8, GPU.x0 - 0.02, wyc, -13.5), 0xffffff, 'gpuYan');
  // fan motor göbekleri (kanatlar örnekli)
  for (const z of [-26, -5]) { K.p(silindir(2.2, 0.8, GPU.x0 + 10.5, 43.0, z, { seg: 16 }), 0x2a2d33); for (let i = 0; i < 3; i++) { const s = kutu(6.4, 0.3, 0.5, 6.5 + 4.5, 43.0, z); s.translate(-6.5, 0, -z); s.rotateY(i * 2.094 + 0.4); s.translate(6.5, 0, z); K.p(s, 0x181a1e); } }
  // braket (arka duvara dayalı) ve bağlantı noktaları
  K.m(kutu(GPU.x1 - GPU.x0 + 0.4, 11.4, 0.2, gx, 46.6, -42.3), 0xc6cbd3);
  for (const x of [11, 7.4, 3.8]) K.m(kutu(2.4, 1.0, 2.6, x, 47.2, -40.9), 0x4a4f58);
  K.m(kutu(2.8, 1.1, 2.6, -0.4, 47.2, -40.9), 0x4a4f58);
  // güç soketi (serbest kenar, ön uç) ve fişi
  K.p(kutu(3.4, 2.4, 3.6, -2.9, 50.0, 10.0), 0x15161a);
}

// ------------------------------------------------------------------ Wi-Fi kartı (PCIe x1): orijin sıfır
export function wifiYap(K) {
  const gy = WIFI.y, gx = (WIFI.x0 + WIFI.x1) / 2, gz = (WIFI.z0 + WIFI.z1) / 2;
  K.p(kutu(WIFI.x1 - WIFI.x0, 0.3, WIFI.z1 - WIFI.z0, gx, gy, gz), 0xffffff, 'genel');
  K.p(kutu(5.6, 0.32, 3.8, gx - 2.2, gy + 0.3, gz), 0xffffff, 'wifi');
  K.m(kutu(0.9, 0.2, 5.0, 17.1, gy, -38.1), 0xe0b64e);
  K.m(kutu(WIFI.x1 - WIFI.x0 + 0.4, 3.8, 0.2, gx, gy - 0.4, -42.3), 0xc6cbd3);
  for (const x of [5.2, 8.4]) { K.m(silindir(0.5, 1.4, x, gy - 0.4, -41.6, { eksen: 'z', seg: 10 }), 0xe0b64e); }
  // anten kabloları (ince, bükümlü)
  for (const [x, i] of [[5.2, 0], [8.4, 1]]) kablo(K, [[x, gy - 0.4, -41.0], [x + 0.6, gy + 0.2, -39.5], [gx + (i ? 0.6 : -0.6), gy + 0.5, -38.6]], 0.14, 0x15161a, { radyal: 5, parca: 10 });
}

// ------------------------------------------------------------------ güç kaynağı
export function guc(K) {
  const px = (PSU.x0 + PSU.x1) / 2, py = (PSU.y0 + PSU.y1) / 2, pz = (PSU.z0 + PSU.z1) / 2;
  K.p(yuvarlak(PSU.x1 - PSU.x0, PSU.y1 - PSU.y0, PSU.z1 - PSU.z0, 0.5, px, py, pz, 2), 0x1a1c20);
  K.p(yanEtiket(PSU.z1 - PSU.z0 - 1.0, PSU.y1 - PSU.y0 - 1.0, PSU.x0 - 0.03, py, pz), 0xffffff, 'psu');
  // üst fan ızgarası (fan örnekli): halkalar ve kollar
  const gx = -3.5, gz = -28, ty = PSU.y1 + 0.15;
  for (const R of [10.4, 7.2, 4.0]) { const t = new TorusGeometry(R, 0.22, 5, 36); t.rotateX(Math.PI / 2); t.translate(gx, ty, gz); K.m(t, 0x3a3e46); }
  for (let i = 0; i < 3; i++) { const s = kutu(20.8, 0.3, 0.45, 0, 0, 0); s.rotateY(i * Math.PI / 3); s.translate(gx, ty, gz); K.m(s, 0x3a3e46); }
  K.p(kutu(22.4, 0.3, 22.4, gx, PSU.y1 + 0.02, gz), 0x0e0f12);                                   // fan boşluğu (koyu zemin)
  K.p(silindir(2.4, 0.5, gx, PSU.y1 - 0.4, gz, { seg: 16 }), 0x2a2d33);
  // modüler kablo soketleri (ön yüz, +z)
  for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) K.p(kutu(4.6, 2.6, 0.5, -13 + i * 6.2, 5.6 + j * 8.6, PSU.z1 + 0.2), 0x0e0f12);
}

// ------------------------------------------------------------------ depolama
export function depoYap(K) {
  // M.2 SSD (anakart üzerinde)
  const my = (M2.y0 + M2.y1) / 2, mz = (M2.z0 + M2.z1) / 2;
  K.p(kutu(0.32, M2.y1 - M2.y0, M2.z1 - M2.z0, M2.x, my, mz), 0xffffff, 'genel');
  K.p(yanEtiket(M2.z1 - M2.z0, M2.y1 - M2.y0, M2.x - 0.17, my, mz), 0xffffff, 'm2');
  // 2,5 inç SATA SSD (kafes dirseğinde)
  const sy = (SSD.y0 + SSD.y1) / 2, sz = (SSD.z0 + SSD.z1) / 2;
  K.m(yuvarlak(SSD.x1 - SSD.x0, SSD.y1 - SSD.y0, SSD.z1 - SSD.z0, 0.3, (SSD.x0 + SSD.x1) / 2, sy, sz, 2), 0xffffff);
  K.m(yanEtiket(SSD.z1 - SSD.z0 - 0.4, SSD.y1 - SSD.y0 - 0.4, SSD.x0 - 0.02, sy, sz), 0xffffff, 'sata');
  K.b(kutu(0.4, SSD.y1 - SSD.y0 + 2, SSD.z1 - SSD.z0 + 1.2, 19.1, sy, sz), 0x1a1c20);
  for (const dz of [-8.5, 8.5]) for (const dy of [-5.5, 5.5]) K.m(silindir(0.35, 0.3, SSD.x0 - 0.1, sy + dy, sz + dz, { eksen: 'x', seg: 8 }), 0xcfd3da);
  K.p(kutu(1.1, 3.6, 1.8, 17.9, 33.2, SSD.z0 - 0.7), 0x15161a);                                  // SATA konnektörü (SSD)
  // 3,5 inç HDD (kafeste)
  const hy = (HDD.y0 + HDD.y1) / 2, hz = (HDD.z0 + HDD.z1) / 2;
  K.m(kutu(HDD.x1 - HDD.x0, HDD.y1 - HDD.y0, HDD.z1 - HDD.z0, (HDD.x0 + HDD.x1) / 2, hy, hz), 0xaeb4be);
  K.m(yanEtiket(HDD.z1 - HDD.z0 - 0.5, HDD.y1 - HDD.y0 - 0.5, HDD.x0 - 0.02, hy, hz), 0xffffff, 'hdd');
  K.p(kutu(0.5, HDD.y1 - HDD.y0 - 1, 1.4, 17.8, hy, HDD.z0 - 0.7), 0x0f4a34);                      // alt devre kartı ucu
  K.p(kutu(2.4, 5.4, 1.4, 16.2, 6.8, HDD.z0 - 0.7), 0x121316); K.p(kutu(2.0, 3.0, 1.4, 16.2, 11.8, HDD.z0 - 0.7), 0x121316);  // güç + veri konnektörü
  K.b(kutu(0.8, HDD.y1 - HDD.y0 + 1.5, 32, 18.8, hy, hz), 0x1a1c20);                               // kafes arka plakası
  K.b(kutu(6.2, 0.5, 32, 15.7, HDD.y0 - 0.45, hz), 0x1a1c20); K.b(kutu(6.2, 0.5, 32, 15.7, HDD.y1 + 0.45, hz), 0x1a1c20);
  for (const dz of [-12, 12]) for (const y of [HDD.y0 + 2.5, HDD.y1 - 2.5]) K.m(silindir(0.4, 0.4, HDD.x0 - 0.1, y, hz + dz, { eksen: 'x', seg: 8 }), 0xcfd3da);
}

// ------------------------------------------------------------------ arka G/Ç paneli (iç yüz) ve genişleme kapakları
export function arkaYap(K, ARKA) {
  const az = -42.45;
  K.m(kutu(31, 9.3, 0.15, 2.9, 74.55, az), 0xb9bfc9);                                              // G/Ç kalkanı iç yüzü
  const kasa = (x, y, w, h) => K.m(kutu(w + 0.5, h + 0.3, 3.0, x, y, az + 1.6), 0x3a3f48);
  kasa(ARKA.hdmi.x, ARKA.hdmi.y, 3.0, 1.05);
  ARKA.usb.forEach((p) => kasa(p.x, p.y, 2.6, 1.2));
  kasa(ARKA.ag.x, ARKA.ag.y, 3.4, 2.9);
  for (const k of ['mavi', 'pembe', 'yesil']) K.m(silindir(1.1, 3.0, ARKA[k].x, ARKA[k].y, az + 1.6, { eksen: 'z', seg: 14 }), k === 'mavi' ? 0x3a78e0 : k === 'pembe' ? 0xe0709a : 0x39b567);
  // yedi genişleme kapağı: ekran kartı (4,5,6) ve Wi-Fi (2) kendi braketini getirir
  for (let k = 0; k < 7; k++) {
    if (k === 2 || k === 4 || k === 5 || k === 6) continue;
    K.m(kutu(23.6, 3.7, 0.15, 7, pcieY(k), az), 0x8f96a2);
    K.m(silindir(0.45, 0.3, -4.2, pcieY(k), az + 0.2, { eksen: 'z', seg: 10 }), 0xcfd3da);
  }
  // güç kaynağı arka plakası iç yüzü zaten güç kaynağı gövdesi
}

// ------------------------------------------------------------------ kablolar ve toplama
export function kabloYap(K) {
  const siyah = 0x15161a, kilif = 0x1b1c21;
  // 24 pin: PSU soketinden anakart konnektörüne (iki kat kalın, bağlı)
  const k24 = kablo(K, [[6, 14.5, PSU.z1 + 0.5], [6, 15.2, -9], [9, 19, -3], [13, 27, 6], [14, 38, 14.2], [13, 46, 17.6], [13, 51.6, 18.2]], 1.2, kilif, { radyal: 10, parca: 70 });
  K.p(kutu(3.6, 10.8, 2.6, 13.0 - 0.4, 57.2, 18.2), siyah);                                      // fiş (24 pin)
  K.p(kutu(0.9, 9.0, 0.5, 11.3, 57.2, 18.2), 0x2d2e33);
  bag(K, k24, 0.18, 1.2); bag(K, k24, 0.36, 1.2); bag(K, k24, 0.56, 1.2);
  // 8 pin işlemci: tepsiden çıkar (arkadan geçer), fişe iner
  const eps = kablo(K, [[10.6, 77.5, -28.2], [6.0, 78.6, -33.0], [5.0, 80.5, -38.8], [13.8, 84.0, -39.2], [18.2, 86.5, -39.0], [19.45, 86.5, -39.0]], 0.85, kilif, { radyal: 10, parca: 40 });
  K.p(kutu(3.4, 2.4, 4.6, 12.6, 77.5, -28.2), siyah);
  bag(K, eps, 0.5, 0.85);
  // ekran kartı PCIe: serbest kenardaki soketten tepsi geçişine
  const pc = kablo(K, [[-7.8, 50.0, 10.0], [-9, 52.5, 12.4], [-6, 57, 17.5], [2, 58, 21.5], [12, 52, 23.2], [19.45, 46.5, 23.5]], 0.95, kilif, { radyal: 10, parca: 60 });
  K.p(kutu(3.6, 2.4, 3.8, -6.4, 50.0, 10.0), siyah);
  bag(K, pc, 0.55, 0.95); bag(K, pc, 0.78, 0.95);
  // PSU'dan tepsi geçişine inen iki demet (8 pin işlemci ve PCIe: arkadan dolaşır)
  const gk = kablo(K, [[0, 9.5, PSU.z1 + 0.5], [1, 9.8, -9], [8, 11, -2], [14, 12.5, 1], [19.45, 13, 3]], 1.0, kilif, { radyal: 10, parca: 36 });
  bag(K, gk, 0.4, 1.0);
  // SATA güç ve SATA veri kabloları
  kablo(K, [[-8, 5.6, PSU.z1 + 0.5], [-4, 5.2, -7], [4, 5.4, 0], [11.5, 7.2, 5.4], [15, 7.4, HDD.z0 - 1.2]], 0.6, 0x23252a, { radyal: 6, parca: 30 });
  kablo(K, [[15.8, SATA_PORT.y(0) + 0.5, SATA_PORT.z1 + 0.2], [14.6, 29.0, 11.6], [13.4, 24.6, 7.8], [14.2, 18.4, 5.4], [15.4, 12.2, HDD.z0 - 1.3]], 0.34, 0xc4352b, { radyal: 6, parca: 40 });
  K.p(kutu(1.7, 1.1, 1.8, 16.9, SATA_PORT.y(0) + 0.5, SATA_PORT.z1 + 0.9), 0x111215); K.p(kutu(1.6, 1.8, 1.0, 15.9, 12.2, HDD.z0 - 1.5), 0x111215);
  kablo(K, [[15.8, SATA_PORT.y(1) + 0.5, SATA_PORT.z1 + 0.2], [15.6, 33.4, 17.4], [16.8, 33.6, SSD.z0 - 1.4]], 0.34, 0xc4352b, { radyal: 6, parca: 20 });
  K.p(kutu(1.7, 1.1, 1.8, 16.9, SATA_PORT.y(1) + 0.5, SATA_PORT.z1 + 0.9), 0x111215);
  // kasa ön paneli ve fan kabloları: üç ince kablo ön fanlardan anakart ön kenarına
  ON_FAN.forEach((y, i) => kablo(K, [[8, y + 6, 37.5], [11, y + 8.5, 33], [15.5, 31 + i * 1.4 + 22, 22]], 0.18, siyah, { radyal: 5, parca: 14 }));
}

// ------------------------------------------------------------------ fan çerçeveleri (sabit: ön 3, GPU ve güç kaynağı kendi gövdesinde)
export function sabitFanlar(K) {
  for (const y of ON_FAN) fanGovde(K, [0, y, 39.7], 'z', 24, 5, 11.4, 0x1d2025);
}
// ------------------------------------------------------------------ tavan egzoz fanı (yalnız hava soğutmada)
export function egzozYap(K) { fanGovde(K, [0, 87.1, -24], 'y', 24, 5, 11.4, 0x1d2025); }
