// Fiziksel görünüm: Arduino Uno R3 kartının derisi. Sanal kartın (modeller.js kartYap) çocuk grubu olarak eklenir;
// Sanal kartın kendisi de aynı işlevle 'sade' düzeyde kurulur (Ahmet 02.11: Sanal'a Fiziksel'in parçaları aynen gelir).
// bütün konumlar Sanal'ın tablolarından okunur (pin, delik, etiket, vekil ve kamera kutuları Sanal'a bağlı).
// Dünya koordinatı: x = bx - 34,29, z = bz + 5,33 (ardNokta). PCB üstü 4,0; başlık üstü 12,5.
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, ExtrudeGeometry, LatheGeometry, PlaneGeometry, CircleGeometry, TorusGeometry,
  Shape, Path, Vector2, InstancedMesh, Object3D, Color, MeshStandardMaterial,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { ARD, PCB_UST, BASLIK_UST, ardNokta, DIJITAL, GUC, ANALOG, DIJ_Z, ALT_Z } from './modeller.js';
import { kartDokulari, smdYerlesim } from './gercekciDoku.js';

// Kart konturu (bx, bz): 'uyumlu' gerçek Uno R3 çokgeninin (resmî KiCad) üst sağ dar bölümü Sanal'ın 0. pinine
// yer açacak kadar genişletilmiş hâli (TASARIM 2.1). 'gercek' tam çokgen, 'dikdortgen' Sanal'ın dikdörtgeni.
export const KART_KONTUR = 'uyumlu';
const KONTUR = {
  uyumlu: [[0, 0], [66.38, 0], [67.9, 1.52], [67.9, 14.3], [68.58, 14.98], [68.58, 48.26], [66.04, 50.8], [66.04, 53.34], [0, 53.34]],
  gercek: [[0, 0], [64.52, 0], [66.04, 1.52], [66.04, 12.95], [68.58, 15.49], [68.58, 48.26], [66.04, 50.8], [66.04, 53.34], [0, 53.34]],
  dikdortgen: [[0, 0], [68.58, 0], [68.58, 53.34], [0, 53.34]],
};
const MONTAJ = [[13.97, 50.8], [15.24, 2.54], [66.04, 45.72], [66.04, 17.78]];

const kutu = (w, h, d, x, y, z) => { const g = new BoxGeometry(w, h, d); g.translate(x, y, z); return g; };
const yuvarlak = (w, h, d, r, x, y, z) => { const g = new RoundedBoxGeometry(w, h, d, 2, r); g.translate(x, y, z); return g; };
const silindir = (r, h, x, y, z, seg = 16, r2 = r) => { const g = new CylinderGeometry(r2, r, h, seg); g.translate(x, y, z); return g; };
const duz = (g) => (g.index ? g.toNonIndexed() : g);
function birlestir(liste, malzeme, golge = true) {
  const m = new Mesh(mergeGeometries(liste.map(duz), false), malzeme);
  m.castShadow = m.receiveShadow = golge; return m;
}
// Şekil (bx, bz) -> yatay levha: üst yüz y = ust, kalınlık h. rotateX(+90): şeklin y'si dünya z'si olur.
function levha(sekil, h, ust, curveSegments = 16) {
  const g = new ExtrudeGeometry(sekil, { depth: h, bevelEnabled: false, curveSegments });
  g.rotateX(Math.PI / 2); g.translate(0, ust, 0);
  return g;
}
const daire = (cx, cz, r, seg = 24) => { const p = new Path(); p.absarc(cx, cz, r, 0, Math.PI * 2, true); p.curves.length && (p.autoClose = true); return p; };

export function kartDerisiYap(sag, { logo = true } = {}) {
  const g = new Group(); g.name = 'kart-fiziksel';
  const duzey = sag.duzey, ince = duzey !== 'dusuk';
  const seg = { sade: 16, dusuk: 16, orta: 24, yuksek: 32 }[duzey];
  const smd = sag.ek('smd') ? smdYerlesim(duzey === 'yuksek' ? 1.45 : 1) : [];
  const D = kartDokulari(duzey, { smd, logo });
  for (const t of Object.values(D)) sag.kayit(t);
  const ox = ARD.x - ARD.w / 2, oz = ARD.z - ARD.d / 2;

  // ---------------------------------------------------------------- PCB: gerçek kontur, 4 montaj deliği
  const sekil = new Shape(KONTUR[KART_KONTUR].map(([a, b]) => new Vector2(a, b)));
  for (const [hx, hz] of MONTAJ) sekil.holes.push(daire(hx, hz, 1.6, seg));
  const pcbGeo = levha(sekil, 1.6, 0, seg);
  // UV: u = bx / 68,58, v = 1 - bz / 53,34 (Sanal dokusu ile aynı yön)
  const pos = pcbGeo.attributes.position, uv = pcbGeo.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / ARD.w, 1 - pos.getZ(i) / ARD.d);
  pcbGeo.translate(ox, PCB_UST, oz);
  const ust = new MeshStandardMaterial({ map: D.albedo, roughness: D.orm ? 1 : 0.45, metalness: D.orm ? 1 : 0 });
  if (D.normal) { ust.normalMap = D.normal; ust.normalScale = new Vector2(duzey === 'yuksek' ? 0.8 : 0.6, duzey === 'yuksek' ? 0.8 : 0.6); }
  if (D.orm) { ust.roughnessMap = D.orm; ust.metalnessMap = D.orm; }
  sag.kayitMat(ust);
  const pcb = new Mesh(pcbGeo, [ust, sag.mat('pcbKenar')]);
  pcb.castShadow = pcb.receiveShadow = true; g.add(pcb);
  // montaj deliklerinin kaplamalı varilleri
  const varil = [];
  for (const [hx, hz] of MONTAJ) { const p = ardNokta(hx, hz, PCB_UST - 0.8); const c = new CylinderGeometry(1.6, 1.6, 1.6, seg, 1, true); c.translate(p.x, p.y, p.z); varil.push(c); }
  g.add(birlestir(varil, sag.mat('altin')));
  // ayaklar (Sanal ile aynı yer ve boy)
  g.add(birlestir(MONTAJ.map(([hx, hz]) => { const p = ardNokta(hx, hz, 1.2); return silindir(1.6, 2.4, p.x, p.y, p.z, 14); }), sag.mat('ayak')));

  // ---------------------------------------------------------------- dişi pin başlıkları: gövde, kare delikli üst plaka
  const plastik = [], ic = [], kontak = [];
  const baslik = (adlar, tablo, bz) => {
    const xs = adlar.map((a) => tablo[a]);
    const x1 = Math.min(...xs) - 1.27, x2 = Math.max(...xs) + 1.27, z1 = bz - 1.27, z2 = bz + 1.27;
    const govdeH = 7.1;
    const pg = ardNokta((x1 + x2) / 2, bz, PCB_UST + govdeH / 2); plastik.push(yuvarlak(x2 - x1, govdeH, 2.54, 0.25, pg.x, pg.y, pg.z));
    const pi = ardNokta((x1 + x2) / 2, bz, PCB_UST + govdeH + 0.02); ic.push(kutu(x2 - x1 - 0.5, 0.04, 2.0, pi.x, pi.y, pi.z));
    const sk = new Shape([new Vector2(x1, z1), new Vector2(x2, z1), new Vector2(x2, z2), new Vector2(x1, z2)]);
    for (const v of xs) {
      const a = 0.53;
      const d = new Path([new Vector2(v - a, bz - a), new Vector2(v - a, bz + a), new Vector2(v + a, bz + a), new Vector2(v + a, bz - a)]);
      sk.holes.push(d);
      if (ince) { const q = ardNokta(v, bz, PCB_UST + govdeH + 0.25); kontak.push(kutu(0.42, 0.4, 0.22, q.x, q.y, q.z - 0.3)); }
    }
    const lg = levha(sk, 1.4, BASLIK_UST, 4); lg.translate(ox, 0, oz); plastik.push(lg);
  };
  baslik(['SCL', 'SDA', 'AREF', 'GND-D', '13', '12', '11', '10', '9', '8'], DIJITAL, DIJ_Z);
  baslik(['7', '6', '5', '4', '3', '2', '1', '0'], DIJITAL, DIJ_Z);
  baslik(['NC', 'IOREF', 'RESET', '3.3V', '5V', 'GND1', 'GND2', 'VIN'], GUC, ALT_Z);
  baslik(['A0', 'A1', 'A2', 'A3', 'A4', 'A5'], ANALOG, ALT_Z);

  // ---------------------------------------------------------------- ICSP: siyah taban, 6 altın kare pin (uçta piramit)
  const altin = [];
  let p = ardNokta(64.87, 26.67, PCB_UST + 1.25); plastik.push(yuvarlak(5.08, 2.5, 7.62, 0.2, p.x, p.y, p.z));
  for (const ix of [63.6, 66.14]) for (const iz of [24.13, 26.67, 29.21]) {
    const q = ardNokta(ix, iz, PCB_UST + 5.25); altin.push(kutu(0.64, 5.5, 0.64, q.x, q.y, q.z));
    const uc = new CylinderGeometry(0.06, 0.45, 0.5, 4); uc.rotateY(Math.PI / 4); uc.translate(q.x, PCB_UST + 8.25, q.z); altin.push(uc);
  }

  // ---------------------------------------------------------------- USB-B: çelik kabuk, ön açıklık, içte yalıtkan dil
  const celik = [], koyu = [], jak = [];
  p = ardNokta(1.65, 15.24, PCB_UST + 5.45); celik.push(yuvarlak(16, 10.9, 12, 0.5, p.x, p.y, p.z));
  // ön yüz: USB-B ağzı (üst köşeleri pahlı), kabuğun önünde ince koyu levha
  const agiz = new Shape([new Vector2(-4.2, -3.9), new Vector2(4.2, -3.9), new Vector2(4.2, 2.6), new Vector2(3.0, 3.9), new Vector2(-3.0, 3.9), new Vector2(-4.2, 2.6)]);
  const agizGeo = new ExtrudeGeometry(agiz, { depth: 0.3, bevelEnabled: false }); // xy düzlemi; -x yüzüne döndür
  agizGeo.rotateY(-Math.PI / 2); p = ardNokta(-6.36, 15.24, PCB_UST + 5.45); agizGeo.translate(p.x + 0.25, p.y, p.z); koyu.push(agizGeo);
  const dil = new BoxGeometry(0.14, 3.0, 5.2); p = ardNokta(-6.42, 15.24, PCB_UST + 5.0); dil.translate(p.x, p.y, p.z);
  // kabuğun alt kenarındaki lehim ayakları
  for (const dz of [-6.2, 6.2]) { const q = ardNokta(4.5, 15.24 + dz, PCB_UST - 0.4); celik.push(kutu(1.2, 1.4, 0.3, q.x, q.y, q.z)); }

  // ---------------------------------------------------------------- DC güç jakı: siyah gövde, dairesel ağız, çelik pim
  p = ardNokta(5.2, 44.9, PCB_UST + 5.5); jak.push(yuvarlak(14, 11, 9, 0.8, p.x, p.y, p.z));
  const halka = new TorusGeometry(3.2, 0.32, 8, 28); halka.rotateY(Math.PI / 2); p = ardNokta(-1.84, 44.9, PCB_UST + 5.8); halka.translate(p.x, p.y, p.z); jak.push(halka);
  const jakAgiz = new CircleGeometry(3.15, 28); jakAgiz.rotateY(-Math.PI / 2); jakAgiz.translate(p.x - 0.03, p.y, p.z); koyu.push(jakAgiz);
  const pim = new CylinderGeometry(1.0, 1.0, 1.2, 16); pim.rotateZ(Math.PI / 2); pim.translate(p.x + 0.4, p.y, p.z); celik.push(pim);

  // ---------------------------------------------------------------- kondansatörler: koyu alüminyum kutu, kutup bandı, oluklu üst
  const kapUst = [], kapTaban = [];
  const kapProfil = [[0, 0], [3.1, 0], [3.12, 1.0], [2.95, 1.2], [3.12, 1.4], [3.15, 4.9], [3.05, 5.35], [2.85, 5.5], [0, 5.5]].map(([a, b]) => new Vector2(a, b));
  const kapGeo = [];
  for (const [cx, cz] of [[13, 31.5], [19.5, 37.5]]) {
    const q = ardNokta(cx, cz, PCB_UST);
    const l = new LatheGeometry(kapProfil, ince ? 32 : 20); l.rotateY(Math.PI * 0.8); l.translate(q.x, q.y + 0.35, q.z); kapGeo.push(l);
    const d = new CylinderGeometry(2.75, 2.75, 0.06, 28); d.translate(q.x, q.y + 5.87, q.z); kapUst.push(d);
    for (const a of [0, Math.PI / 2]) { const o = new BoxGeometry(4.2, 0.1, 0.32); o.rotateY(a + 0.3); o.translate(q.x, q.y + 5.9, q.z); koyu.push(o); }
    kapTaban.push(kutu(6.3, 0.35, 6.3, q.x, q.y + 0.175, q.z));
  }

  // ---------------------------------------------------------------- kristal (HC-49S): hap planlı metal kutu, "16.000"
  p = ardNokta(21, 27, PCB_UST);
  const st = new Shape(); st.absarc(-3.05, 0, 2.2, Math.PI / 2, Math.PI * 1.5, false); st.absarc(3.05, 0, 2.2, -Math.PI / 2, Math.PI / 2, false);
  const kristalGeo = levha(st, 3.4, 3.5, 12); kristalGeo.translate(p.x, p.y, p.z);
  const etiket = new PlaneGeometry(6.0, 2.25); etiket.rotateX(-Math.PI / 2); etiket.translate(p.x, p.y + 3.54, p.z);
  koyu.push(kutu(9.6, 0.15, 3.6, p.x, p.y + 0.075, p.z));

  // ---------------------------------------------------------------- ATMEGA328P (DIP-28) ve soketi
  p = ardNokta(44.5, 36.8, PCB_UST + 1.3); plastik.push(yuvarlak(37.5, 2.6, 9.2, 0.3, p.x, p.y, p.z));
  if (ince) for (let i = 0; i < 14; i++) for (const yan of [-1, 1]) { const q = ardNokta(44.5 - 16.51 + i * 2.54, 36.8 + yan * 4.35, PCB_UST + 2.62); koyu.push(kutu(1.0, 0.04, 0.5, q.x, q.y, q.z)); }
  const bacak = [];
  for (let i = 0; i < 14; i++) for (const yan of [-1, 1]) {
    const bx = 44.5 - 16.51 + i * 2.54;
    const o = ardNokta(bx, 36.8 + yan * 3.95, PCB_UST + 4.1); bacak.push(kutu(0.5, 0.3, 0.6, o.x, o.y, o.z));
    const d = ardNokta(bx, 36.8 + yan * 4.15, PCB_UST + 3.3); bacak.push(kutu(0.5, 1.6, 0.26, d.x, d.y, d.z));
    const u = ardNokta(bx, 36.8 + yan * 4.15, PCB_UST + 2.62); bacak.push(kutu(0.28, 0.4, 0.26, u.x, u.y, u.z));
  }
  const cip = sag.mat('cipGovde'), cipUst = sag.mat('cipUst');
  const cipGovde = new Mesh(new RoundedBoxGeometry(35.56, 3.3, 7.4, 2, 0.3), [cip, cip, cipUst, cip, cip, cip]);
  cipGovde.position.copy(ardNokta(44.5, 36.8, PCB_UST + 2.6 + 1.65)); cipGovde.castShadow = cipGovde.receiveShadow = true; g.add(cipGovde);

  // ---------------------------------------------------------------- USB çipi, regülatör, reset düğmesi
  const cipler = [], kalay = [];
  p = ardNokta(20, 17.5, PCB_UST + 0.45); cipler.push(kutu(5, 0.9, 5, p.x, p.y, p.z));
  for (const [dx, dz, w, d] of [[-2.6, 0, 0.25, 4.2], [2.6, 0, 0.25, 4.2], [0, -2.6, 4.2, 0.25], [0, 2.6, 4.2, 0.25]]) kalay.push(kutu(w, 0.2, d, p.x + dx, PCB_UST + 0.1, p.z + dz));
  p = ardNokta(15, 47.5, PCB_UST + 0.8); cipler.push(kutu(6.5, 1.6, 3.5, p.x, p.y, p.z));
  for (const dx of [-2.3, 0, 2.3]) kalay.push(kutu(0.7, 0.3, 1.4, p.x + dx, PCB_UST + 0.15, p.z + 2.2));
  p = ardNokta(15, 44.6, PCB_UST + 0.2); kalay.push(kutu(3.2, 0.3, 3, p.x, p.y, p.z));
  p = ardNokta(7.4, 5.2, PCB_UST + 1.6);
  const resetTaban = [yuvarlak(6, 3.2, 6, 0.45, p.x, p.y, p.z)];
  celik.push(kutu(6.1, 0.3, 6.1, p.x, PCB_UST + 3.35, p.z));
  for (const dx of [-2.4, 2.4]) for (const dz of [-2.4, 2.4]) koyu.push(silindir(0.32, 0.06, p.x + dx, PCB_UST + 3.53, p.z + dz, 10));
  for (const dx of [-3.3, 3.3]) for (const dz of [-2.25, 2.25]) celik.push(kutu(0.5, 1.6, 0.7, p.x + dx, PCB_UST + 0.8, p.z + dz));
  const resetDugme = new Mesh(silindir(1.7, 1.3, p.x, PCB_UST + 4.1, p.z, 24), sag.mat('resetDugme'));
  resetDugme.castShadow = resetDugme.receiveShadow = true;

  g.add(birlestir(plastik, sag.mat('baslikPlastik')), birlestir(ic, sag.mat('baslikIc')), birlestir(altin, sag.mat('altin')),
    birlestir(celik, sag.mat('metalFirca')), birlestir(koyu, sag.mat('koyu')), birlestir(jak, sag.mat('jak')),
    birlestir(kapGeo, sag.mat('kapAlu')), birlestir(kapUst, sag.mat('kapUst')), birlestir(kapTaban, sag.mat('baslikPlastik')),
    birlestir([kristalGeo], sag.mat('kristalYan')), birlestir([etiket], sag.mat('kristal'), false), birlestir(bacak, sag.mat('metalCelik')),
    birlestir(cipler, cip), birlestir(kalay, sag.mat('kalay')), birlestir(resetTaban, sag.mat('resetTaban')), birlestir([dil], sag.mat('baslikPlastik')), resetDugme);
  if (kontak.length) g.add(birlestir(kontak, sag.mat('altin'), false));

  // ---------------------------------------------------------------- SMD parçalar (örnekli): gövde ve uçlar
  if (smd.length) {
    const govdeGeo = new BoxGeometry(1, 1, 1), ucGeo = new BoxGeometry(1, 1, 1);
    const govdeM = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }); sag.kayitMat(govdeM);
    const gov = new InstancedMesh(govdeGeo, govdeM, smd.length), uc = new InstancedMesh(ucGeo, sag.mat('kalay'), smd.length * 2);
    const o = new Object3D(), cDir = new Color(0x1b1b1d), cKon = new Color(0xa88b5a);
    smd.forEach((s, i) => {
      const h = s.tur === 'direnc' ? 0.45 : 0.7, q = ardNokta(s.x, s.z, PCB_UST + h / 2);
      const uzun = s.yatay ? s.w : s.d, kisa = s.yatay ? s.d : s.w, ucU = uzun * 0.18;
      o.position.copy(q); o.rotation.set(0, s.yatay ? 0 : Math.PI / 2, 0); o.scale.set(uzun - 2 * ucU + 0.02, h, kisa); o.updateMatrix(); gov.setMatrixAt(i, o.matrix);
      gov.setColorAt(i, s.tur === 'direnc' ? cDir : cKon);
      for (const yan of [-1, 1]) {
        o.position.set(q.x + (s.yatay ? yan * (uzun / 2 - ucU / 2) : 0), q.y, q.z + (s.yatay ? 0 : yan * (uzun / 2 - ucU / 2)));
        o.scale.set(ucU, h + 0.02, kisa + 0.02); o.updateMatrix(); uc.setMatrixAt(i * 2 + (yan > 0 ? 1 : 0), o.matrix);
      }
    });
    g.add(gov, uc);
  }

  // ---------------------------------------------------------------- kart LED'leri (0603): L ve ON canlı, TX ve RX sönük
  const kucukLed = (bx, bz, renk) => {
    const m = new MeshStandardMaterial({ color: new Color(renk).multiplyScalar(0.55), emissive: renk, emissiveIntensity: 0, roughness: 0.25, transparent: false });
    sag.kayitMat(m);
    const q = ardNokta(bx, bz, PCB_UST + 0.25);
    const mesh = new Mesh(new BoxGeometry(1.0, 0.5, 0.8), m); mesh.position.copy(q); g.add(mesh);
    const uclar = new Mesh(mergeGeometries([kutu(0.32, 0.42, 0.82, q.x - 0.66, q.y - 0.04, q.z), kutu(0.32, 0.42, 0.82, q.x + 0.66, q.y - 0.04, q.z)]), sag.mat('kalay'));
    g.add(uclar);
    return (acik) => { m.emissiveIntensity = acik ? 1.1 : 0; m.color.set(acik ? renk : new Color(renk).multiplyScalar(0.55)); };
  };
  const ledL = kucukLed(28.5, 10.6, 0xffa726), ledOn = kucukLed(61.5, 10.6, 0x43e07a);
  kucukLed(28.5, 13.3, 0xffd54f); kucukLed(28.5, 15.4, 0xffd54f);

  return { grup: g, kanca: { ledL, ledOn } };
}
