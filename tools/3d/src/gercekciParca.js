// Fiziksel görünüm: devre parçalarının derileri (LED, direnç, buton, atlama kablosu). Her deri Sanal parçanın
// (devre.js, modeller.js) çocuk grubudur: konum, dönme (ters LED), görünürlük ve geçişler Sanal'dan miras kalır.
// Ölçüler Sanal ile aynı (kadraj kutuları ve vekiller bozulmasın). Öğretim doğruluğu: LED'de anot bacağı uzun (-x),
// katot tarafı flanşta düz kesik (+x); direnç bantları Sanal ile aynı sıra ve yerde; kablo renkleri Sanal ile aynı.
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, LatheGeometry, ExtrudeGeometry, TubeGeometry, SphereGeometry, Shape, Vector2, Vector3,
  Color, MeshStandardMaterial,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { LED_RENK, KABLO_RENK } from './modeller.js';
import { direncBandi } from './gercekciDoku.js';

const golgeli = (m, acik = true) => { m.castShadow = m.receiveShadow = acik; return m; };
const duz = (g) => (g.index ? g.toNonIndexed() : g);

// ------------------------------------------------------------------ LED 5 mm
function ledDerisi(sag, nesne) {
  const g = new Group(); g.name = 'led-fiziksel';
  // ders LED'inde renk adı userData.renk'te (devre.js); Özgür Mod LED'inde renk Color nesnesidir, ad renkAdi'nda
  const renk = new Color(LED_RENK[nesne.userData.renkAdi ?? nesne.userData.renk] ?? LED_RENK.kirmizi);
  const GY = 4.2;
  const kubbe = sag.ledKubbe(renk);
  const kapali = kubbe.color.clone();
  // gövde ve kubbe (dönel), altta flanş: katot tarafı (+x) düz kesik
  const pts = [[0, 1.0], [2.5, 1.0], [2.5, 5.6]];
  for (let i = 1; i <= 12; i++) { const a = (i / 12) * (Math.PI / 2); pts.push([2.5 * Math.cos(a), 5.6 + 2.5 * Math.sin(a)]); }
  const govdeGeo = new LatheGeometry(pts.map(([a, b]) => new Vector2(a, b)), sag.duzey === 'yuksek' ? 40 : 32);
  const kes = Math.acos(2.55 / 2.95);
  const fs = new Shape(); fs.absarc(0, 0, 2.95, kes, Math.PI * 2 - kes, false); fs.lineTo(2.55, 2.95 * Math.sin(kes));
  const flansGeo = new ExtrudeGeometry(fs, { depth: 1.0, bevelEnabled: false, curveSegments: 28 });
  flansGeo.rotateX(Math.PI / 2); flansGeo.translate(0, 1.0, 0);
  const govde = new Mesh(mergeGeometries([duz(govdeGeo), duz(flansGeo)]), kubbe);
  govde.position.y = GY; govde.renderOrder = -1; govde.castShadow = false; govde.receiveShadow = false;
  g.add(govde);
  // içte elektrotlar: büyük bayrak (katot, +x) ve küçük direk (anot, -x); yarı saydam epoksiden görünür
  if (sag.ek('ledIc')) {
    const ic = mergeGeometries([
      duz((() => { const b = new BoxGeometry(1.5, 3.4, 0.45); b.translate(0.95, GY + 1.7, 0); return b; })()),
      duz((() => { const b = new BoxGeometry(0.5, 2.9, 0.45); b.translate(-1.27, GY + 1.45, 0); return b; })()),
      duz((() => { const b = new BoxGeometry(2.0, 0.12, 0.12); b.translate(-0.2, GY + 3.5, 0); return b; })()),
    ]);
    g.add(golgeli(new Mesh(ic, sag.mat('metalCelik')), false));
  }
  // bacaklar: kalaylı çelik, anot uzun (22), katot kısa (17); takılınca Sanal ile aynı formülle kısalır
  let bacak = () => {};
  const yari = nesne.userData.bacakYari ?? 1.27;
  if (yari > 1.28) {
    // Özgür Mod: bacaklar 2-4 adım arayla takılı; gövdenin altından yana kıvrılıp deliğe iner (ozgurModeller.js ile aynı yol)
    const KY = 1.3, tel = [];
    const kutu = (w, h, x, y) => { const b = new BoxGeometry(w, h, 0.5); b.translate(x, y, 0); tel.push(duz(b)); };
    for (const yon of [-1, 1]) {
      const x0 = yon * 1.27, x1 = yon * yari;
      kutu(0.5, GY - KY, x0, (GY + KY) / 2); kutu(Math.abs(x1 - x0) + 0.5, 0.5, (x0 + x1) / 2, KY); kutu(0.5, KY + 5, x1, (KY - 5) / 2);
    }
    g.add(golgeli(new Mesh(mergeGeometries(tel), sag.mat('kalay'))));
  } else {
    const anot = golgeli(new Mesh(new BoxGeometry(0.5, 1, 0.5), sag.mat('kalay'))), katot = golgeli(new Mesh(new BoxGeometry(0.5, 1, 0.5), sag.mat('kalay')));
    anot.position.x = -1.27; katot.position.x = 1.27; g.add(anot, katot);
    bacak = (t) => {
      const la = 22 + (GY + 5 - 22) * t, lk = 17 + (GY + 5 - 17) * t;
      anot.scale.y = la; anot.position.y = GY - la / 2; katot.scale.y = lk; katot.position.y = GY - lk / 2;
    };
    bacak(1);
  }
  const ac = (deger) => {
    const v = typeof deger === 'number' ? deger : deger ? 1 : 0;
    kubbe.color.copy(kapali).lerp(renk, v);
    kubbe.emissiveIntensity = 1.05 * v;
    if (kubbe.transparent) kubbe.opacity = 0.8 + 0.15 * v;
  };
  return { grup: g, kanca: { ac, bacak } };
}

// ------------------------------------------------------------------ direnç 1/4 W
// "kemik" profil: ortada ince, uçlarda şişkin; eksen (lathe y) boyunca eşit aralıklı örnek (Lathe v doğrusal kalsın)
function direncProfili(sag, L = 6.88, n = 46) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const y = -L / 2 + (i / (n - 1)) * L, a = Math.abs(y);
    const ampul = 1.3 * Math.sqrt(Math.max(0, 1 - ((a - 2.45) / 0.99) ** 2));
    const r = i === 0 || i === n - 1 ? 0 : Math.max(a < 2.45 ? 1.02 : 0, ampul);
    pts.push(new Vector2(r, y));
  }
  return new LatheGeometry(pts, sag.duzey === 'dusuk' ? 16 : 24);
}
function direncDerisi(sag, nesne) {
  const g = new Group(); g.name = 'direnc-fiziksel';
  const u = nesne.userData, H = u.H ?? 3.4, aralik = u.uclar ? u.uclar[1].x - u.uclar[0].x : 10;
  const bantlar = u.bantlar || ['kirmizi', 'kirmizi', 'kahve', 'altin'];
  const L = 6.88;
  const geo = direncProfili(sag, L);
  geo.rotateZ(-Math.PI / 2); // lathe y -> x
  // Sanal'daki bant yerleri: x = 2,3 - 4,6 * yer (modeller.js direncYap dokusu ve silindir yönü)
  const merkezler = [0.18, 0.33, 0.48, 0.8].map((y) => 2.3 - 4.6 * y);
  const m = new MeshStandardMaterial({ map: sag.kayit(direncBandi(bantlar, merkezler, L, sag.aniz)), roughness: 0.45 });
  sag.kayitMat(m);
  const govde = golgeli(new Mesh(geo, m)); govde.position.y = H; g.add(govde);
  // teller: kalaylı, yatay ve dikey (Sanal yolu), dirsekte küçük küre
  const tel = [];
  for (const yan of [-1, 1]) {
    const yatayL = aralik / 2 - 2.9;
    if (yatayL > 0.05) { const t = new CylinderGeometry(0.27, 0.27, yatayL, 10); t.rotateZ(Math.PI / 2); t.translate(yan * ((aralik / 2 + 2.9) / 2), H, 0); tel.push(duz(t)); }
    const d = new CylinderGeometry(0.27, 0.27, H + 7, 10); d.translate(yan * aralik / 2, (H - 7) / 2, 0); tel.push(duz(d));
    const k = new SphereGeometry(0.27, 10, 8); k.translate(yan * aralik / 2, H, 0); tel.push(duz(k));
  }
  g.add(golgeli(new Mesh(mergeGeometries(tel), sag.mat('kalay'))));
  return { grup: g, kanca: {} };
}

// ------------------------------------------------------------------ dik direnç (Özgür Mod, 7 mm'den kısa aralık)
// ozgurModeller.js dikDirenc ile aynı yerleşim: gövde ilk deliğin (yerel -x) üstünde dik durur, alttan deliğe iner;
// üst tel öbür tarafa geçip ikinci deliğe iner. Bantlar Sanal ile aynı sırada: ilk bant altta.
function dikDirencDerisi(sag, nesne) {
  const g = new Group(); g.name = 'direnc-fiziksel';
  const u = nesne.userData, d = u.aralik, X = -d / 2, ALT = 1.5, BOY = 4.6, UST = u.H, L = 6.88;
  const bantlar = u.bantlar || ['kirmizi', 'kirmizi', 'kahve', 'altin'];
  const merkezler = [0.18, 0.33, 0.48, 0.8].map((y) => BOY * y - BOY / 2);
  const m = new MeshStandardMaterial({ map: sag.kayit(direncBandi(bantlar, merkezler, L, sag.aniz)), roughness: 0.45 });
  sag.kayitMat(m);
  const govde = golgeli(new Mesh(direncProfili(sag, L), m)); govde.position.set(X, ALT + BOY / 2, 0); g.add(govde);
  const tel = [];
  const dik = (x, y0, y1) => { const t = new CylinderGeometry(0.27, 0.27, y1 - y0, 10); t.translate(x, (y0 + y1) / 2, 0); tel.push(duz(t)); };
  const dirsek = (x, y) => { const k = new SphereGeometry(0.27, 10, 8); k.translate(x, y, 0); tel.push(duz(k)); };
  dik(X, -5, ALT + 0.4);           // gövdenin altından deliğe
  dik(X, ALT + BOY - 0.4, UST);    // gövdenin üstünden yukarı
  const yatay = new CylinderGeometry(0.27, 0.27, d, 10); yatay.rotateZ(Math.PI / 2); yatay.translate(0, UST, 0); tel.push(duz(yatay));
  dirsek(X, UST); dirsek(-X, UST);
  dik(-X, -5, UST);                // öbür deliğe iniş
  g.add(golgeli(new Mesh(mergeGeometries(tel), sag.mat('kalay'))));
  return { grup: g, kanca: {} };
}

// ------------------------------------------------------------------ buton 6x6
function butonDerisi(sag) {
  const g = new Group(); g.name = 'buton-fiziksel';
  const taban = golgeli(new Mesh(new RoundedBoxGeometry(6, 3.4, 6, 2, 0.45), sag.mat('resetTaban'))); taban.position.y = 1.7;
  const plaka = golgeli(new Mesh(new BoxGeometry(6.2, 0.3, 6.2), sag.mat('metalFirca'))); plaka.position.y = 3.55;
  const kapak = golgeli(new Mesh(new CylinderGeometry(1.65, 1.8, 1.7, 28), sag.mat('butonKapak'))); kapak.position.y = 4.55;
  g.add(taban, plaka, kapak);
  const bacak = [];
  for (const lx of [-2.54, 2.54]) for (const lz of [-3.81, 3.81]) { const b = new BoxGeometry(0.6, 7, 0.35); b.translate(lx, -3.2, lz); bacak.push(duz(b)); }
  const perc = [];
  for (const dx of [-2.5, 2.5]) for (const dz of [-2.5, 2.5]) { const c = new CylinderGeometry(0.3, 0.3, 0.06, 10); c.translate(dx, 3.73, dz); perc.push(duz(c)); }
  g.add(golgeli(new Mesh(mergeGeometries(bacak), sag.mat('kalay'))), new Mesh(mergeGeometries(perc), sag.mat('koyu')));
  return { grup: g, kanca: { bas(basili) { kapak.position.y = basili ? 3.95 : 4.55; } } };
}

// ------------------------------------------------------------------ atlama kablosu: aynı eğri, Dupont uçlar
function kabloDerisi(sag, nesne) {
  const g = new Group(); g.name = 'kablo-fiziksel';
  const u = nesne.userData, egri = u.egri;
  if (!egri) return null;
  const tupSanal = nesne.children.find((c) => c.isMesh && c.geometry?.type === 'TubeGeometry' && c.material.visible !== false);
  const renk = tupSanal ? tupSanal.material.color.getHex() : KABLO_RENK.turuncu;
  const PARCA = 56, RAD = { dusuk: 6, orta: 8, yuksek: 10 }[sag.duzey];
  const tupM = new MeshStandardMaterial({ color: renk, roughness: 0.36 }); sag.kayitMat(tupM);
  const tup = golgeli(new Mesh(new TubeGeometry(egri, PARCA, 0.62, RAD, false), tupM)); g.add(tup);
  const toplam = tup.geometry.index.count;
  // uçlar: eğrinin başı ve sonu 6,2 mm yukarıda (modeller.js kabloYap); konnektör o noktanın altında
  const uc0 = egri.points[0], uc1 = egri.points[egri.points.length - 1];
  const uclar = [];
  for (const v of [uc0, uc1]) {
    const taban = new Vector3(v.x, v.y - 6.2, v.z);
    const kilif = golgeli(new Mesh(new RoundedBoxGeometry(2.5, 5.6, 2.5, 2, 0.25), sag.mat('dupont'))); kilif.position.set(taban.x, taban.y + 2.9, taban.z);
    const boyun = golgeli(new Mesh(new CylinderGeometry(0.72, 1.12, 0.8, 14), sag.mat('dupont'))); boyun.position.set(taban.x, taban.y + 6.05, taban.z);
    const igne = golgeli(new Mesh(new BoxGeometry(0.62, 5.6, 0.62), sag.mat('kalay'))); igne.position.set(taban.x, taban.y - 2.7, taban.z);
    g.add(kilif, boyun, igne); uclar.push([kilif, boyun, igne]);
  }
  const buyut = (k) => {
    tup.geometry.setDrawRange(0, Math.floor(k * PARCA) * RAD * 6);
    for (const m of uclar[1]) m.visible = k >= 1;
    if (k >= 1) tup.geometry.setDrawRange(0, toplam);
  };
  return { grup: g, kanca: { buyut } };
}

export function parcaDerisiYap(sag, tur, nesne) {
  if (tur === 'led') return ledDerisi(sag, nesne);
  if (tur === 'direnc') return nesne.userData.dik ? dikDirencDerisi(sag, nesne) : direncDerisi(sag, nesne);
  if (tur === 'buton') return butonDerisi(sag, nesne);
  if (tur === 'kablo') return kabloDerisi(sag, nesne);
  return null;
}
