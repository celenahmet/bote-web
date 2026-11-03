// Özgür Mod parça modelleri: derslerdeki parçaların görünümü, serbest yerleşim için. modeller.js değişmez.
// - LED: bacaklar 1-4 adım arayla takılabilir; aralık büyüdükçe bacaklar gövdenin altından yana kıvrılır.
//   LED'in içinde ışık kaynağı yok: sahnede sabit sayıda ışık var, yanan LED'lere dağıtılır. Işık sayısı
//   değişirse bütün gölgelendiriciler yeniden derlenir ve sahne takılır (Ahmet 01.11: "kasmamalı").
// - Direnç: 7 mm'den kısa aralıkta dik takılır (gövde bir deliğin üstünde, bacak üstten öbür deliğe iner).
// - Buton ve kablo modeller.js'teki modellerin kendisi; seçmek için görünmez dokunma hacmi eklenir.
import {
  Group, Mesh, LatheGeometry, Vector2, Vector3, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry,
  SphereGeometry, Sprite, SpriteMaterial, AdditiveBlending, PlaneGeometry, Color, CanvasTexture, SRGBColorSpace, TubeGeometry,
} from 'three';
import { direncYap, butonYap, kabloYap, ikiNoktayaKoy, golgeAyarla, malzemeTablosu, parlamaDokusu } from './modeller.js';

export const LED_RENK = { kirmizi: 0xe53935, sari: 0xfbc02d, yesil: 0x2fb344 };
const BANT = { siyah: '#1d1d1d', kahve: '#7a4a24', kirmizi: '#d32f2f', turuncu: '#f57c00', altin: '#c9a33a' };
export const DIRENC_BANT = { 220: ['kirmizi', 'kirmizi', 'kahve', 'altin'], 10000: ['kahve', 'siyah', 'turuncu', 'altin'] };
const GY = 4.2; // LED gövdesinin tabanı (breadboard yüzeyinden)
const gorunmez = new MeshBasicMaterial({ visible: false });
let yedekMetal = null;
const metal = () => malzemeTablosu.metal || (yedekMetal ??= new MeshStandardMaterial({ color: 0xd5d8de, metalness: 1, roughness: 0.28 }));

function dokunmaHacmi(g, w, h, d, x, y, z) {
  const m = new Mesh(new BoxGeometry(w, h, d), gorunmez);
  m.position.set(x, y, z); g.add(m); g.userData.hedef = m;
  return m;
}
const yatayMesafe = (a, b) => Math.hypot(b.x - a.x, b.z - a.z);

// ------------------------------------------------------------------ LED (5 mm)
export function ozgurLedYap(renkAdi, anot, katot) {
  const renk = new Color(LED_RENK[renkAdi] ?? LED_RENK.kirmizi);
  const kapaliRenk = renk.clone().lerp(new Color(0x3a3036), 0.45);
  const g = new Group(); g.name = 'led';
  const pts = [[0, 0], [2.95, 0], [2.95, 1.0], [2.5, 1.0], [2.5, 5.6]];
  for (let i = 1; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); pts.push([2.5 * Math.cos(a), 5.6 + 2.5 * Math.sin(a)]); }
  const mat = new MeshStandardMaterial({ color: kapaliRenk, emissive: renk, emissiveIntensity: 0, roughness: 0.14, metalness: 0 });
  const govde = new Mesh(new LatheGeometry(pts.map(([a, b]) => new Vector2(a, b)), 20), mat);
  govde.position.y = GY; g.add(govde);
  // anot yerel -x, katot +x (ikiNoktayaKoy yerel +x'i anottan katoda çevirir)
  const yari = Math.max(1.27, yatayMesafe(anot, katot) / 2), KY = 1.3;
  for (const yon of [-1, 1]) {
    const x0 = yon * 1.27, x1 = yon * yari;
    const parca = (w, h, x, y) => { const m = new Mesh(new BoxGeometry(w, h, 0.5), metal()); m.position.set(x, y, 0); g.add(m); };
    if (x1 === x0) { parca(0.5, GY + 5, x0, GY - (GY + 5) / 2); continue; }
    parca(0.5, GY - KY, x0, (GY + KY) / 2);           // gövdeden aşağı
    parca(Math.abs(x1 - x0) + 0.5, 0.5, (x0 + x1) / 2, KY); // yana kıvrım
    parca(0.5, KY + 5, x1, (KY - 5) / 2);              // deliğe iniş
  }
  const isik = new Sprite(new SpriteMaterial({ map: parlamaDokusu(), color: renk, blending: AdditiveBlending, depthWrite: false, transparent: true }));
  isik.scale.set(20, 20, 1); isik.position.y = GY + 5.5; isik.visible = false; g.add(isik);
  const havuz = new Mesh(new PlaneGeometry(30, 30), new MeshBasicMaterial({ map: parlamaDokusu(), color: renk, blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 }));
  havuz.rotation.x = -Math.PI / 2; havuz.position.y = 0.12; havuz.visible = false; g.add(havuz);
  golgeAyarla(g);
  dokunmaHacmi(g, Math.max(7, yari * 2 + 1.5), 12, 7, 0, GY + 3.5, 0);
  Object.assign(g.userData, {
    // v: 0-1 arası parlaklık (ders LED'iyle aynı eşleme)
    ac(v) {
      const k = typeof v === 'number' ? v : v ? 1 : 0;
      g.userData.yanik = k > 0;
      mat.emissiveIntensity = 1.05 * k;
      mat.color.copy(kapaliRenk).lerp(renk, k);
      isik.visible = havuz.visible = k > 0.02;
      isik.material.opacity = Math.min(1, k * 1.15);
      havuz.material.opacity = 0.6 * k;
    },
    renk, lambaY: GY + 6, tepe: new Vector3(0, GY + 8.2, 0),
    renkAdi, bacakYari: yari, // Fiziksel görünüm (gercekciParca.js) okur: renk adı ve bacak kıvrımı
  });
  ikiNoktayaKoy(g, anot, katot);
  return g;
}

// ------------------------------------------------------------------ direnç
export function ozgurDirencYap(deger, a, b) {
  const bantlar = DIRENC_BANT[deger] || DIRENC_BANT[220];
  const d = yatayMesafe(a, b);
  const g = d >= 7 ? direncYap(bantlar, d) : dikDirenc(bantlar, d);
  g.userData.bantlar = bantlar; // Fiziksel görünüm (gercekciParca.js) okur
  const H = g.userData.H;
  dokunmaHacmi(g, Math.max(7.5, d + 2), H + 3, 4.5, 0, H / 2 + 0.5, 0);
  ikiNoktayaKoy(g, a, b);
  return g;
}
function dikDirenc(bantlar, d) {
  const g = new Group(); g.name = 'direnc';
  const c = document.createElement('canvas'); c.width = 8; c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#d8c69c'; x.fillRect(0, 0, 8, 256);
  [0.18, 0.33, 0.48, 0.8].forEach((yer, i) => { x.fillStyle = BANT[bantlar[i]]; x.fillRect(0, (1 - yer) * 256 - 12, 8, 24); });
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace;
  const X = -d / 2, ALT = 1.5, BOY = 4.6, UST = ALT + BOY + 2.3;
  const govde = new Mesh(new CylinderGeometry(1.1, 1.1, BOY, 16), new MeshStandardMaterial({ map: t, roughness: 0.55 }));
  govde.position.set(X, ALT + BOY / 2, 0); g.add(govde);
  const ucMat = new MeshStandardMaterial({ color: 0xd8c69c, roughness: 0.55 });
  for (const yy of [ALT, ALT + BOY]) { const u = new Mesh(new SphereGeometry(1.32, 14, 10), ucMat); u.scale.set(1, 0.75, 1); u.position.set(X, yy, 0); g.add(u); }
  const tel = (w, h, px, py) => { const m = new Mesh(new BoxGeometry(w, h, 0.5), metal()); m.position.set(px, py, 0); g.add(m); };
  tel(0.5, ALT + 5, X, (ALT - 5) / 2);                 // gövdenin altından deliğe
  tel(0.5, UST - ALT - BOY, X, (ALT + BOY + UST) / 2); // gövdenin üstünden yukarı
  tel(d + 0.5, 0.5, 0, UST);                            // üstten öbür tarafa
  tel(0.5, UST + 5, -X, (UST - 5) / 2);                 // öbür deliğe iniş
  golgeAyarla(g);
  g.userData = { tepe: new Vector3(0, UST + 1.4, 0), H: UST, dik: true, aralik: d }; // dik, aralik: Fiziksel görünüm okur
  return g;
}

// ------------------------------------------------------------------ buton ve kablo
export function ozgurButonYap(merkez) {
  const g = butonYap();
  g.position.copy(merkez);
  dokunmaHacmi(g, 9, 8, 10, 0, 2.5, 0);
  return g;
}
export function ozgurKabloYap(bas, son, renkAdi) {
  const g = kabloYap(bas, son, renkAdi);
  const m = new Mesh(new TubeGeometry(g.userData.egri, 24, 2.3, 6, false), gorunmez);
  g.add(m); g.userData.hedef = m;
  return g;
}

// Parçayı sahneden kaldırırken belleği boşalt (paylaşılan malzemeler ve parlama dokusu kalır)
export function parcaAt(nesne) {
  const ortak = new Set(Object.values(malzemeTablosu));
  const parlama = parlamaDokusu();
  nesne.traverse((o) => {
    o.geometry?.dispose();
    const liste = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of liste) {
      if (ortak.has(m) || m === gorunmez || m === yedekMetal) continue;
      if (m.map && m.map !== parlama) m.map.dispose();
      m.dispose();
    }
  });
}
