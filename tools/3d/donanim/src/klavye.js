// Klavye (donanım ailesi): 104 tuşun hepsi TEK geometride (tek çizim çağrısı). Her tuş yumuşak köşeli, eğimli yan yüzlü ve
// pahlı üst yüzlü bir keycap; harfler tek bir atlas dokusundan okunur (tuşun üst yüzünün UV'si atlasta kendi hücresine
// bağlıdır, yani harf tuşla birlikte iner). Tuş rengi köşe rengiyle verilir (açık harf tuşları, biraz koyu özel tuşlar) ve alt
// halkalar koyulaştırılır (ucuz ortam gölgesi). Basılan tuşun köşeleri 0,6 birim aşağı kayar ve mor olur (tusBas).
// Yerel eksen: x genişlik, y yukarı, z ön (kullanıcıya doğru). 1 birim = 5 mm; 1 tuş aralığı U = 3,81 birim (19 mm).
import { Group, Mesh, Vector3, Color, MeshStandardMaterial, M, malzemeler, yuvarlak, kutu, tuval, YAZI, vekil, kesifNok } from './yardimci.js';
import { BufferGeometry, BufferAttribute, Vector2, RepeatWrapping } from 'three';
import { KLAVYE } from './yerlesim.js';
import { dokular, dokuYap } from './doku.js';

const kes = kesifNok;
const U = 3.81, TUS_Y = 1.9, TABAN_UST = 2.2, BAZ = TABAN_UST + 0.15, EGIM = 0.07;

function dizilim() {
  const k = [];
  const e = (ad, x, y, w = 1, h = 1, tur = 'harf') => k.push({ ad, x, y, w, h, tur });
  e('Esc', 0, 0, 1, 1, 'ozel');
  [2, 3, 4, 5].forEach((x, i) => e('F' + (i + 1), x, 0, 1, 1, 'islev'));
  [6.5, 7.5, 8.5, 9.5].forEach((x, i) => e('F' + (i + 5), x, 0, 1, 1, 'islev'));
  [11, 12, 13, 14].forEach((x, i) => e('F' + (i + 9), x, 0, 1, 1, 'islev'));
  ['PrtSc', 'ScrLk', 'Pause'].forEach((a, i) => e(a, 15.25 + i, 0, 1, 1, 'islev'));
  ['"', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '-'].forEach((a, i) => e(a, i, 1.5, 1, 1, i === 0 || i > 10 ? 'harf' : 'rakam'));
  e('Geri', 13, 1.5, 2, 1, 'ozel');
  e('Tab', 0, 2.5, 1.5, 1, 'ozel');
  'QWERTYUIOPĞÜ'.split('').forEach((a, i) => e(a, 1.5 + i, 2.5));
  e(',', 13.5, 2.5, 1.5, 1);
  e('Caps', 0, 3.5, 1.75, 1, 'ozel');
  'ASDFGHJKLŞİ'.split('').forEach((a, i) => e(a, 1.75 + i, 3.5));
  e('Enter', 12.75, 3.5, 2.25, 1, 'ozel');
  e('Shift', 0, 4.5, 2.25, 1, 'ozel');
  'ZXCVBNMÖÇ.'.split('').forEach((a, i) => e(a, 2.25 + i, 4.5));
  e('Shift', 12.25, 4.5, 2.75, 1, 'ozel');
  e('Ctrl', 0, 5.5, 1.25, 1, 'ozel'); e('', 1.25, 5.5, 1.25, 1, 'ozel'); e('Alt', 2.5, 5.5, 1.25, 1, 'ozel');
  e(' ', 3.75, 5.5, 6.25, 1, 'bosluk');
  e('Alt', 10, 5.5, 1.25, 1, 'ozel'); e('', 11.25, 5.5, 1.25, 1, 'ozel'); e('Menü', 12.5, 5.5, 1.25, 1, 'ozel'); e('Ctrl', 13.75, 5.5, 1.25, 1, 'ozel');
  ['Ins', 'Home', 'PgUp'].forEach((a, i) => e(a, 15.25 + i, 1.5, 1, 1, 'ozel'));
  ['Del', 'End', 'PgDn'].forEach((a, i) => e(a, 15.25 + i, 2.5, 1, 1, 'ozel'));
  e('yukari', 16.25, 4.5, 1, 1, 'ok'); e('sol', 15.25, 5.5, 1, 1, 'ok'); e('asagi', 16.25, 5.5, 1, 1, 'ok'); e('sag', 17.25, 5.5, 1, 1, 'ok');
  ['Num', '/', '*', '-'].forEach((a, i) => e(a, 18.5 + i, 1.5, 1, 1, i ? 'rakam' : 'ozel'));
  ['7', '8', '9'].forEach((a, i) => e(a, 18.5 + i, 2.5, 1, 1, 'rakam')); e('+', 21.5, 2.5, 1, 2, 'rakam');
  ['4', '5', '6'].forEach((a, i) => e(a, 18.5 + i, 3.5, 1, 1, 'rakam'));
  ['1', '2', '3'].forEach((a, i) => e(a, 18.5 + i, 4.5, 1, 1, 'rakam')); e('Enter', 21.5, 4.5, 1, 2, 'ozel');
  e('0', 18.5, 5.5, 2, 1, 'rakam'); e('.', 20.5, 5.5, 1, 1, 'rakam');
  return k;
}
const OZEL_KESIF = { Esc: 'tus-esc', Shift: 'tus-shift', Ctrl: 'tus-ctrl', Enter: 'tus-enter', ' ': 'tus-bosluk' };
const tusKesif = (t) => OZEL_KESIF[t.ad] || (t.tur === 'harf' || t.tur === 'rakam' ? 'tus-harf' : 'tus-ozel');
const acikMi = (t) => t.tur === 'harf' || t.tur === 'rakam' || t.tur === 'bosluk';

// Yuvarlatılmış dikdörtgen halka (üstten bakınca, x'ten z'ye doğru dönen noktalar): köşe başına N nokta.
const N = 3, HN = 4 * N;
function halka(w, d, r) {
  r = Math.max(0.05, Math.min(r, w / 2 - 0.01, d / 2 - 0.01));
  const hx = w / 2 - r, hz = d / 2 - r, o = [];
  for (const [cx, cz, a0] of [[hx, hz, 0], [-hx, hz, 90], [-hx, -hz, 180], [hx, -hz, 270]]) {
    for (let k = 0; k < N; k++) { const a = ((a0 + (k / (N - 1)) * 90) * Math.PI) / 180; o.push([cx + r * Math.cos(a), cz + r * Math.sin(a)]); }
  }
  return o;
}
// Keycap katmanları (y: BAZ'a göre, ic: yandan içeri çekilme, r: köşe yarıçapı, ao: köşe rengi çarpanı)
const KAT = [
  { y: -0.30, ic: 0.0, r: 0.55, ao: 0.72 },
  { y: TUS_Y * 0.66, ic: 0.1, r: 0.62, ao: 0.9 },
  { y: TUS_Y - 0.32, ic: 0.4, r: 0.78, ao: 1.0 },
  { y: TUS_Y, ic: 0.6, r: 0.92, ao: 1.0 },
];
const NV = HN * KAT.length + HN + 1;          // 4 halka + üst yüz halkası (ayrı köşeler) + merkez
const NI = (3 * HN * 2 + HN) * 3;              // 3 bant (iki üçgen/dilim) + üst yüz yelpazesi

export function klavyeYap() {
  malzemeler();
  const GEN = 22.5 * U, YUK = 6.5 * U, X0 = -GEN / 2, Z0 = -YUK / 2;
  const g = new Group(); g.name = 'klavye';
  g.position.set(KLAVYE.x, ((YUK + 3) / 2) * Math.sin(EGIM), KLAVYE.z); g.rotation.x = EGIM; // ön alt kenar masada, arka biraz yüksekte
  g.add(new Mesh(yuvarlak(GEN + 3.0, TABAN_UST, YUK + 3.0, 0.9, 0, TABAN_UST / 2, 0, 3), M.klavyeGovde));
  // durum ışıkları (Num açık)
  for (let i = 0; i < 3; i++) g.add(new Mesh(kutu(1.3, 0.3, 0.5, X0 + (19 + i) * U, TABAN_UST + 0.1, Z0 + 0.5 * U), i === 0 ? M.ledYesil : M.ledKapali));

  const tuslar = dizilim();
  // ---- harf atlası: tek tuval, tuşun üst yüzü bu tuvalde kendi hücresine bağlanır
  const PW = 2048, PH = Math.round((PW * YUK) / GEN), s = PW / GEN;
  const [c, x] = tuval(PW, PH);
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, PW, PH);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  tuslar.forEach((t) => {
    const cx = (t.x + t.w / 2) * U * s, cy = (t.y + t.h / 2) * U * s;
    x.fillStyle = '#20242c'; x.strokeStyle = '#20242c';
    if (t.tur === 'ok') {
      const r = 0.95 * s; x.beginPath();
      const yon = { yukari: [0, -1], asagi: [0, 1], sol: [-1, 0], sag: [1, 0] }[t.ad];
      const px = -yon[1], py = yon[0];
      x.moveTo(cx + yon[0] * r, cy + yon[1] * r); x.lineTo(cx - yon[0] * r * 0.7 + px * r, cy - yon[1] * r * 0.7 + py * r); x.lineTo(cx - yon[0] * r * 0.7 - px * r, cy - yon[1] * r * 0.7 - py * r); x.closePath(); x.fill();
      return;
    }
    if (t.ad === 'Geri') { x.lineWidth = 0.32 * s; x.lineCap = 'round'; x.beginPath(); x.moveTo(cx + 1.6 * s, cy); x.lineTo(cx - 1.6 * s, cy); x.moveTo(cx - 1.6 * s, cy); x.lineTo(cx - 0.6 * s, cy - 0.9 * s); x.moveTo(cx - 1.6 * s, cy); x.lineTo(cx - 0.6 * s, cy + 0.9 * s); x.stroke(); return; }
    if (!t.ad.trim()) return;
    const uzun = t.ad.length > 2;
    x.font = `${acikMi(t) ? 700 : 600} ${(uzun ? 1.05 : 1.55) * s}px ${YAZI}`;
    x.fillText(t.ad, cx, cy + 0.05 * s);
  });
  const atlas = dokuYap(c, true, false);

  // ---- tuş geometrisi: tamponlar tuş başına NV köşe, NI indeks
  const T = tuslar.length;
  const pos = new Float32Array(T * NV * 3), nor = new Float32Array(T * NV * 3), uv = new Float32Array(T * NV * 2), col = new Float32Array(T * NV * 3);
  const ind = new Uint16Array(T * NI), ao = new Float32Array(T * NV), ilk3 = new Int32Array(T); // ao: köşe rengi çarpanı; ilk3: üst pah halkasının ilk köşesi
  const ACIK = new Color(0xeeefef), KOYU = new Color(0xb3b6bc), BASILI = new Color(0x7c4dff);
  tuslar.forEach((t, ti) => {
    const w = t.w * U - 0.3, d = t.h * U - 0.3;
    const cx = X0 + (t.x + t.w / 2) * U, cz = Z0 + (t.y + t.h / 2) * U, renk = acikMi(t) ? ACIK : KOYU;
    let v = ti * NV;
    const ilk = [];
    const koy = (px, pz, y, f) => {
      pos[v * 3] = cx + px; pos[v * 3 + 1] = BAZ + y; pos[v * 3 + 2] = cz + pz;
      uv[v * 2] = (cx + px - X0) / GEN; uv[v * 2 + 1] = 1 - (cz + pz - Z0) / YUK;
      ao[v] = f;
      col[v * 3] = renk.r * f; col[v * 3 + 1] = renk.g * f; col[v * 3 + 2] = renk.b * f;
      v++;
    };
    for (const k of KAT) { ilk.push(v); for (const [px, pz] of halka(w - 2 * k.ic, d - 2 * k.ic, k.r)) koy(px, pz, k.y, k.ao); }
    const kapak = v;
    for (const [px, pz] of halka(w - 2 * KAT[3].ic, d - 2 * KAT[3].ic, KAT[3].r)) koy(px, pz, KAT[3].y, 1);
    const merkez = v; koy(0, 0, KAT[3].y, 1);
    let ii = ti * NI;
    for (let b = 0; b < 3; b++) {
      for (let i = 0; i < HN; i++) {
        const a0 = ilk[b] + i, a1 = ilk[b] + ((i + 1) % HN), b0 = ilk[b + 1] + i, b1 = ilk[b + 1] + ((i + 1) % HN);
        ind[ii++] = a0; ind[ii++] = b0; ind[ii++] = a1; ind[ii++] = a1; ind[ii++] = b0; ind[ii++] = b1;
      }
    }
    for (let i = 0; i < HN; i++) { ind[ii++] = merkez; ind[ii++] = kapak + ((i + 1) % HN); ind[ii++] = kapak + i; }
    ilk3[ti] = ilk[3];
  });
  const geo = new BufferGeometry();
  const posA = new BufferAttribute(pos, 3), colA = new BufferAttribute(col, 3);
  geo.setAttribute('position', posA); geo.setAttribute('normal', new BufferAttribute(nor, 3));
  geo.setAttribute('uv', new BufferAttribute(uv, 2)); geo.setAttribute('color', colA);
  geo.setIndex(new BufferAttribute(ind, 1));
  geo.computeVertexNormals();
  // üst pah halkasının normali yukarı yaklaştırılır (yumuşak üst kenar); üst yüz ayrı köşelerle düz kalır
  const nA = geo.attributes.normal;
  tuslar.forEach((t, ti) => {
    for (let i = 0; i < HN; i++) {
      const k = ilk3[ti] + i, nx = nA.getX(k), ny = nA.getY(k) + 0.9, nz = nA.getZ(k), L = Math.hypot(nx, ny, nz);
      nA.setXYZ(k, nx / L, ny / L, nz / L);
    }
  });
  const y0 = pos.slice(), nm = dokular().plastik.clone();
  nm.wrapS = nm.wrapT = RepeatWrapping; nm.repeat.set(14, 4); nm.needsUpdate = true;
  const mal = new MeshStandardMaterial({ map: atlas, vertexColors: true, roughness: 0.46, normalMap: nm, normalScale: new Vector2(0.35, 0.35) });
  const kaps = new Mesh(geo, mal); kaps.name = 'tuslar'; kaps.userData.dinamik = true;
  g.add(kaps);

  // ---- vekiller: her tuş (en küçük hacim kazanır) + klavyenin tamamı
  tuslar.forEach((t, i) => {
    g.add(vekil({ kesif: tusKesif(t), parca: 'klavye', tus: t.ad, tusNo: i, tusTur: t.tur }, t.w * U - 0.3, 2.4, t.h * U - 0.3, X0 + (t.x + t.w / 2) * U, TABAN_UST + 1.1, Z0 + (t.y + t.h / 2) * U));
  });
  g.add(vekil({ kesif: 'klavye', parca: 'klavye' }, GEN + 3, 5, YUK + 3, 0, 2, 0));

  const tusBas = (i, bas) => {
    const a = i * NV, b = a + NV, c0 = bas ? BASILI : acikMi(tuslar[i]) ? ACIK : KOYU;
    for (let k = a; k < b; k++) {
      pos[k * 3 + 1] = y0[k * 3 + 1] - (bas ? 0.6 : 0);
      col[k * 3] = c0.r * ao[k]; col[k * 3 + 1] = c0.g * ao[k]; col[k * 3 + 2] = c0.b * ao[k];
    }
    posA.needsUpdate = true; colA.needsUpdate = true;
  };
  const ara = (ad) => tuslar.findIndex((t) => t.ad === ad);
  const noktaI = (i) => { const t = tuslar[i]; return new Vector3(X0 + (t.x + t.w / 2) * U, TABAN_UST + TUS_Y + 1.2, Z0 + (t.y + t.h / 2) * U); };
  const nokta = (ad) => { const i = ara(ad); return i < 0 ? new Vector3() : noktaI(i); };
  return {
    grup: g, tuslar, tusBas, ara, nokta, noktaI,
    kesif: [kes(g, 'klavye', 0, 7, 12.5), kes(g, 'tus-esc', ...nokta('Esc').toArray()), kes(g, 'tus-shift', ...nokta('Shift').toArray()), kes(g, 'tus-ctrl', ...nokta('Ctrl').toArray()), kes(g, 'tus-enter', X0 + 13.9 * U, 6, nokta('Enter').z), kes(g, 'tus-bosluk', 0, 6, nokta(' ').z)],
    arka: new Vector3(KLAVYE.x - 8, 3.0, KLAVYE.z - YUK / 2 - 1.6),
  };
}
