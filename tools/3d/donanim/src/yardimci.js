// Ortak yapı taşları: geometri kısayolları, paylaşılan malzemeler, tuval dokuları, dokunma vekili, vurgu kutusu.
// Birim: 1 birim = 5 mm. Dış model ya da görsel dosyası yok; yazılar ve desenler tuval (canvas) ile çizilir.
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, ExtrudeGeometry, Shape, Path, TubeGeometry, CatmullRomCurve3,
  Vector3, Matrix4, Color, CanvasTexture, SRGBColorSpace, RepeatWrapping, MeshStandardMaterial, MeshBasicMaterial,
  InstancedMesh, EdgesGeometry, LineSegments, LineBasicMaterial, Object3D, DoubleSide,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export { Group, Mesh, Vector3, Matrix4, Color, Object3D, InstancedMesh, MeshStandardMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry, SphereGeometry, TorusGeometry, ExtrudeGeometry, Shape, Path, DoubleSide };

// ------------------------------------------------------------------ geometri kısayolları
export const kutu = (w, h, d, x = 0, y = 0, z = 0) => { const g = new BoxGeometry(w, h, d); g.translate(x, y, z); return g; };
export function yuvarlak(w, h, d, r, x = 0, y = 0, z = 0, seg = 2) {
  const g = new RoundedBoxGeometry(w, h, d, seg, Math.max(0.05, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01)));
  g.translate(x, y, z); return g;
}
// eksen 'y' (varsayılan), 'x' ya da 'z'; rUst verilirse kesik koni (üst yarıçap) olur. Üst uç +eksen yönündedir.
export function silindir(r, h, x = 0, y = 0, z = 0, { seg = 20, eksen = 'y', rUst = r, acik = false } = {}) {
  const g = new CylinderGeometry(rUst, r, h, seg, 1, acik);
  if (eksen === 'x') g.rotateZ(-Math.PI / 2); else if (eksen === 'z') g.rotateX(Math.PI / 2);
  g.translate(x, y, z); return g;
}
export const don = (g, rx = 0, ry = 0, rz = 0) => { if (rx) g.rotateX(rx); if (ry) g.rotateY(ry); if (rz) g.rotateZ(rz); return g; };
export const yer = (g, x = 0, y = 0, z = 0) => { g.translate(x, y, z); return g; };
// Birleştirme için hepsi indekssiz biçime çevrilir (yuvarlatılmış kutu indekssiz gelir).
export function birlestir(liste, malzeme) {
  const m = new Mesh(mergeGeometries(liste.map((g) => (g.index ? g.toNonIndexed() : g)), false), malzeme);
  m.matrixAutoUpdate = false; return m;
}
// Kablo: noktalardan geçen yumuşak boru
export function kabloGeo(noktalar, r = 0.22, parca = 10, radyal = 6) {
  const egri = new CatmullRomCurve3(noktalar.map((p) => (p.isVector3 ? p : new Vector3(...p))), false, 'catmullrom', 0.35);
  return new TubeGeometry(egri, Math.max(6, Math.round(egri.getLength() * parca / 10)), r, radyal, false);
}
// İçinde dairesel delik olan kare çerçeve (fan gövdesi): düzlem xy, derinlik z
export function cerceveGeo(w, h, rDelik, kalin) {
  const s = new Shape(); s.moveTo(-w / 2, -h / 2); s.lineTo(w / 2, -h / 2); s.lineTo(w / 2, h / 2); s.lineTo(-w / 2, h / 2); s.closePath();
  const d = new Path(); d.absarc(0, 0, rDelik, 0, Math.PI * 2, true); s.holes.push(d);
  const g = new ExtrudeGeometry(s, { depth: kalin, bevelEnabled: false, curveSegments: 20 });
  g.translate(0, 0, -kalin / 2); return g;
}

// ------------------------------------------------------------------ tuval dokuları
export function tuval(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
let ANISO = 4;
export function anizotropiAyarla(n) { ANISO = Math.max(1, Math.min(8, n)); }
export function doku(c, { tekrar = false, aniso = true } = {}) {
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; if (aniso) t.anisotropy = ANISO;
  if (tekrar) { t.wrapS = t.wrapT = RepeatWrapping; }
  return t;
}
export const YAZI = '"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif';

// ------------------------------------------------------------------ paylaşılan malzemeler
const std = (renk, r = 0.6, m = 0, ek = {}) => new MeshStandardMaterial({ color: renk, roughness: r, metalness: m, ...ek });
export const M = {};
export function malzemeler() {
  if (M.hazir) return M;
  Object.assign(M, {
    hazir: true,
    kasa: std(0x2d3037, 0.5, 0.35),          // kasa boyalı sac
    kasaIc: std(0x1c1e23, 0.7, 0.2),          // iç yüzey (tepsi)
    plastik: std(0x22252b, 0.55),             // siyah plastik
    plastikAcik: std(0x6b7078, 0.55),         // gri plastik
    plastikBeyaz: std(0xe9ebee, 0.5),         // açık plastik
    alumin: std(0xb6bcc6, 0.38, 0.9),         // fırçalı alüminyum
    aluminKoyu: std(0x4a505a, 0.42, 0.85),    // koyu soğutucu
    celik: std(0xc6cad1, 0.3, 1),             // sac, vida
    bakir: std(0xc9773a, 0.32, 1),
    altin: std(0xe0b64e, 0.3, 1),
    cip: std(0x14151a, 0.6),                  // yonga
    kablo: std(0x17181c, 0.65),
    kabloKirmizi: std(0xc4352b, 0.6),
    kabloSari: std(0xd9a21b, 0.6),
    kabloYesil: std(0x2f9e57, 0.6),
    kabloMavi: std(0x2c63c9, 0.6),
    fanKanat: std(0x30343c, 0.55, 0, { side: DoubleSide }),
    fanCerceve: std(0x1d2025, 0.6),
    cam: std(0x0b0d12, 0.08, 0.2),
    lensCam: std(0x10131c, 0.05, 0.6),
    pcbKenar: std(0x0f4a34, 0.5),
    soket: std(0x2a2d33, 0.5),
    ledYesil: new MeshBasicMaterial({ color: 0x31d06b }),
    ledKirmizi: new MeshBasicMaterial({ color: 0xff4438 }),
    ledMavi: new MeshBasicMaterial({ color: 0x4da3ff }),
    ledKapali: new MeshBasicMaterial({ color: 0x2a2e36 }),
    vurgu: new MeshBasicMaterial({ color: 0x7c4dff, transparent: true, opacity: 0.11, depthWrite: false }),
    vurguCizgi: new LineBasicMaterial({ color: 0x6a3df0 }),
    gorunmez: new MeshBasicMaterial({ visible: false }),
  });
  return M;
}

// ------------------------------------------------------------------ gölge, vekil, vurgu
// Gölge: dolu malzemeler gölge düşürür ve alır; ışıksız (Basic) yüzeyler, örnekli kümeler ve vekiller dışarıda.
export function golgeAyarla(kok) { kok.traverse((o) => { if (o.isMesh && !o.isInstancedMesh) { const isikli = !o.material.isMeshBasicMaterial && o.material.visible !== false; o.castShadow = isikli; o.receiveShadow = isikli; } }); }
export function ornek(geo, mal, matrisler, renkler) {
  const m = new InstancedMesh(geo, mal, matrisler.length);
  matrisler.forEach((x, i) => m.setMatrixAt(i, x));
  if (renkler) renkler.forEach((c, i) => m.setColorAt(i, new Color(c)));
  m.instanceMatrix.needsUpdate = true; m.frustumCulled = false;
  return m;
}
export const _m = new Matrix4();
// Dokunma vekili: görünmez kutu; seçimde dokunulan yüzey noktasını içeren en küçük vekil kazanır (sahne.js).
export function vekil(veri, w, h, d, x = 0, y = 0, z = 0) {
  const o = new Object3D(); o.position.set(x, y, z);
  o.userData = { ...veri, yari: [w / 2, h / 2, d / 2], hacim: veri.hacim ?? w * h * d };
  o.updateMatrixWorld();
  return o;
}
export function vurguYap(sahne, alan) {
  malzemeler();
  const [x, y, z, w, h, d] = alan;
  const g = new Group();
  const geo = new BoxGeometry(w + 1.2, h + 1.2, d + 1.2);
  const m = new Mesh(geo, M.vurgu); m.renderOrder = 2;
  g.add(m, new LineSegments(new EdgesGeometry(geo), M.vurguCizgi));
  g.position.set(x, y, z); sahne.add(g);
  return g;
}
