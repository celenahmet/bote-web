// Özgür Mod devre çözücü (Ahmet 01.11: "hocanın özgür modu olsa ... 15 pin yerine 13'e felan denese").
// Saf modül: DOM ve three.js yok; tarayıcı, derleme betiği ve node birim testleri aynı dosyayı kullanır.
//
// Nokta kimlikleri
//   'h:15:e'       breadboard deliği: sütun 1-30, satır a-j (a-e karta yakın yarı, f-j karşı yarı)
//   'r:yakin-:16'  ray deliği: yakin = karta yakın kenar (ekranda alt), uzak = karşı kenar (üst); + ya da -
//   'p:13'         Arduino pini: 0-13, A0-A5, 5V, 3.3V, GND-D, GND1, GND2, VIN, IOREF, RESET, AREF, SDA, SCL, NC
// Bağlantı: bir sütunun a-e delikleri bir şerit, f-j delikleri ayrı bir şerit (orta kanal ayırır); her ray
// boydan boya tek parça. Kart içinde GND pinleri birbirine, IOREF 5V'a, SDA A4'e, SCL A5'e bağlıdır.
//
// Elektrik modeli (düğüm gerilimi çözümü): GND 0 V; 5V ve 3,3V sabit kaynak; çıkış pini 5 ohm iç dirençli
// 5 V ya da 0 V kaynağı; giriş pini boşta (yüksek empedans). LED parça parça doğrusal: kapalıyken açık devre,
// açıkken eşik gerilimi + 2 ohm. Buton: kanalın iki yanındaki karşılıklı bacaklar hep bağlı, basılınca
// iki yarı (sol ve sağ bacak çifti) birleşir. Uyarılar üç durumda denetlenir: şimdiki durum, "en çok"
// (programın çıkışları HIGH, butonlar basılı) ve "en az" (çıkışlar LOW, butonlar bırakılmış).

export const SUTUN_SAYISI = 30;
export const YAKIN_YARI = 'abcde';
export const UZAK_YARI = 'fghij';
export const RAYLAR = ['uzak+', 'uzak-', 'yakin-', 'yakin+'];
export const RAY_SUTUN = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30];
// Izgara koordinatı (adım = 2,54 mm): x = sütun, z = karta doğru artı (modeller.js SATIR ve RAY_Z ile aynı)
export const SATIR_Z = { a: 5.5, b: 4.5, c: 3.5, d: 2.5, e: 1.5, f: -1.5, g: -2.5, h: -3.5, i: -4.5, j: -5.5 };
export const RAY_Z = { 'yakin-': 7.5, 'yakin+': 8.5, 'uzak-': -7.5, 'uzak+': -8.5 };
export const DIJITAL_BASLIK = ['SCL', 'SDA', 'AREF', 'GND-D', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
export const GUC_BASLIK = ['NC', 'IOREF', 'RESET', '3.3V', '5V', 'GND1', 'GND2', 'VIN'];
export const ANALOG_BASLIK = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];
export const TUM_PINLER = [...DIJITAL_BASLIK, ...GUC_BASLIK, ...ANALOG_BASLIK];
export const PROGRAM_PINLERI = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const BEKLEMELER = [1000, 500, 200];
export const LED_RENKLERI = { kirmizi: { ad: 'kırmızı', esik: 2.0 }, sari: { ad: 'sarı', esik: 2.05 }, yesil: { ad: 'yeşil', esik: 2.1 } };
export const DIRENCLER = { 220: '220 Ω', 10000: '10 kΩ' };
export const KABLO_RENKLERI = { turuncu: 'Turuncu', kirmizi: 'Kırmızı', siyah: 'Siyah', sari: 'Sarı', yesil: 'Yeşil', mavi: 'Mavi', mor: 'Mor' };
export const LED_ARALIK = [1, 4];   // LED bacakları arası en az ve en çok adım
export const DIRENC_ARALIK = [2, 6];

const R_PIN = 5, R_LED = 2, G_SIZINTI = 1e-9;
const A_YANIK = 0.1e-3, A_SONUK = 2e-3, A_ASIRI = 30e-3, A_TAM = 13e-3;
const V_HIGH = 3.0, V_LOW = 1.5;
const KART_NET = { 'GND-D': 'GND', GND1: 'GND', GND2: 'GND', '5V': '5V', IOREF: '5V', '3.3V': '3V3', SDA: 'A4', A4: 'A4', SCL: 'A5', A5: 'A5' };
const GUC_PINLERI = new Set(['GND-D', 'GND1', 'GND2', '5V', '3.3V', 'IOREF']);
const buyukHarf = (s) => (s ? s.charAt(0).toLocaleUpperCase('tr-TR') + s.slice(1) : s);

// ------------------------------------------------------------------ noktalar
export function noktaCoz(id) {
  const [t, a, b, fazla] = String(id ?? '').split(':');
  if (fazla !== undefined) return null;
  if (t === 'h') {
    const s = Number(a);
    if (Number.isInteger(s) && s >= 1 && s <= SUTUN_SAYISI && typeof b === 'string' && b.length === 1 && 'abcdefghij'.includes(b)) return { tur: 'delik', sutun: s, satir: b };
  }
  if (t === 'r') { const s = Number(b); if (RAYLAR.includes(a) && RAY_SUTUN.includes(s)) return { tur: 'ray', ray: a, sutun: s }; }
  if (t === 'p' && b === undefined && TUM_PINLER.includes(a)) return { tur: 'pin', pin: a };
  return null;
}
export const breadboardNoktasi = (id) => { const n = noktaCoz(id); return Boolean(n && n.tur !== 'pin'); };
export function izgara(id) {
  const n = noktaCoz(id);
  if (!n || n.tur === 'pin') return null;
  return [n.sutun, n.tur === 'delik' ? SATIR_Z[n.satir] : RAY_Z[n.ray]];
}
export function adimMesafe(a, b) {
  const p = izgara(a), q = izgara(b);
  return p && q ? Math.hypot(p[0] - q[0], p[1] - q[1]) : Infinity;
}
// Bağlantı grubu: şerit, ray ya da kart içi ağ (GND pinleri tek grup)
export function grupAnahtari(id) {
  const n = noktaCoz(id);
  if (!n) return null;
  if (n.tur === 'delik') return `s:${n.sutun}:${YAKIN_YARI.includes(n.satir) ? 'y' : 'u'}`;
  if (n.tur === 'ray') return `r:${n.ray}`;
  return `k:${KART_NET[n.pin] || n.pin}`;
}
export function grupNoktalari(id) {
  const n = noktaCoz(id);
  if (!n) return [];
  if (n.tur === 'delik') return [...(YAKIN_YARI.includes(n.satir) ? YAKIN_YARI : UZAK_YARI)].map((r) => `h:${n.sutun}:${r}`);
  if (n.tur === 'ray') return RAY_SUTUN.map((s) => `r:${n.ray}:${s}`);
  const k = grupAnahtari(id);
  return TUM_PINLER.filter((p) => grupAnahtari(`p:${p}`) === k).map((p) => `p:${p}`);
}
export function pinAdi(pin) {
  if (/^\d+$/.test(pin)) return pin === '0' ? '0. pin (RX)' : pin === '1' ? '1. pin (TX)' : `${pin}. pin`;
  return { 'GND-D': 'GND', GND1: 'GND', GND2: 'GND', '3.3V': '3,3V', VIN: 'Vin', NC: 'boş pin (NC)' }[pin] || pin;
}
export function rayAdi(ray) { return `${ray.startsWith('yakin') ? 'alt' : 'üst'} ${ray.endsWith('+') ? '+' : '−'} rayı`; }
export function noktaAdi(id, uzun = false) {
  const n = noktaCoz(id);
  if (!n) return '';
  if (n.tur === 'delik') return `${n.sutun}${n.satir}`;
  if (n.tur === 'ray') return uzun ? `${rayAdi(n.ray)}, ${n.sutun}. sütun` : rayAdi(n.ray);
  return pinAdi(n.pin);
}
export function grupAdi(id) {
  const n = noktaCoz(id);
  if (!n) return '';
  if (n.tur === 'delik') { const y = YAKIN_YARI.includes(n.satir) ? 'a-e' : 'f-j'; return `${n.sutun}. sütun, ${y} satırları`; }
  if (n.tur === 'ray') return buyukHarf(rayAdi(n.ray));
  const k = KART_NET[n.pin];
  if (k === 'GND') return 'GND pinleri (kart içinde birbirine bağlı)';
  return pinAdi(n.pin);
}

// ------------------------------------------------------------------ parçalar
export function parcaUclari(p) {
  if (!p) return [];
  if (p.tur === 'led') return [p.anot, p.katot];
  if (p.tur === 'direnc') return [p.a, p.b];
  if (p.tur === 'kablo') return [p.bas, p.son];
  if (p.tur === 'buton') return [`h:${p.sutun}:e`, `h:${p.sutun + 2}:e`, `h:${p.sutun}:f`, `h:${p.sutun + 2}:f`];
  return [];
}
export function parcaAdi(p) {
  if (p.tur === 'led') return `${buyukHarf(LED_RENKLERI[p.renk]?.ad || '')} LED (${noktaAdi(p.anot)})`;
  if (p.tur === 'direnc') return `${DIRENCLER[p.deger] || ''} direnç (${noktaAdi(p.a)})`;
  if (p.tur === 'buton') return `Buton (${p.sutun}. ve ${p.sutun + 2}. sütun)`;
  if (p.tur === 'kablo') return `Kablo (${noktaAdi(p.bas)} → ${noktaAdi(p.son)})`;
  return '';
}
export function parcaAciklama(p) {
  if (p.tur === 'led') return `Anot (uzun bacak) ${noktaAdi(p.anot, true)}, katot (kısa bacak) ${noktaAdi(p.katot, true)}`;
  if (p.tur === 'direnc') return `Bacaklar ${noktaAdi(p.a, true)} ve ${noktaAdi(p.b, true)}`;
  if (p.tur === 'buton') return `Bacaklar ${p.sutun}e, ${p.sutun + 2}e, ${p.sutun}f, ${p.sutun + 2}f (kanalın üstünde)`;
  if (p.tur === 'kablo') return `${buyukHarf(noktaAdi(p.bas, true))} ile ${noktaAdi(p.son, true)} arasında`;
  return '';
}
function parcaGecerli(p) {
  if (!p || typeof p !== 'object' || typeof p.id !== 'string' || !p.id) return false;
  if (p.tur === 'led') return Boolean(LED_RENKLERI[p.renk]) && breadboardNoktasi(p.anot) && breadboardNoktasi(p.katot) && p.anot !== p.katot;
  if (p.tur === 'direnc') return Boolean(DIRENCLER[p.deger]) && breadboardNoktasi(p.a) && breadboardNoktasi(p.b) && p.a !== p.b;
  if (p.tur === 'buton') return Number.isInteger(p.sutun) && p.sutun >= 1 && p.sutun <= SUTUN_SAYISI - 2;
  if (p.tur === 'kablo') return Boolean(KABLO_RENKLERI[p.renk]) && Boolean(noktaCoz(p.bas)) && Boolean(noktaCoz(p.son)) && p.bas !== p.son;
  return false;
}
export function programAyikla(pr) {
  const pin = (v, d) => (PROGRAM_PINLERI.includes(Number(v)) ? Number(v) : d);
  if (pr?.tur === 'buton') {
    const giris = pin(pr.giris, 2); let cikis = pin(pr.cikis, 13);
    if (cikis === giris) cikis = giris === 13 ? 12 : 13;
    return { tur: 'buton', giris, cikis };
  }
  if (pr?.tur === 'elle') {
    const seviyeler = {};
    for (const p of PROGRAM_PINLERI) if (pr.seviyeler?.[p]) seviyeler[p] = true;
    return { tur: 'elle', seviyeler };
  }
  return { tur: 'blink', pin: pin(pr?.pin, 13), bekleme: BEKLEMELER.includes(Number(pr?.bekleme)) ? Number(pr.bekleme) : 1000 };
}
// Kayıttan ya da dışarıdan gelen devreyi güvenli biçime getirir: geçersiz ve üst üste binen parçalar atılır.
export function devreAyikla(d) {
  const dolu = new Set(), idler = new Set(), parcalar = [];
  for (const p of Array.isArray(d?.parcalar) ? d.parcalar : []) {
    if (!parcaGecerli(p) || idler.has(p.id)) continue;
    const uclar = parcaUclari(p);
    if (uclar.some((u) => dolu.has(u))) continue;
    if (p.tur === 'led' && !aralikUygun(adimMesafe(p.anot, p.katot), LED_ARALIK)) continue;
    if (p.tur === 'direnc' && !aralikUygun(adimMesafe(p.a, p.b), DIRENC_ARALIK)) continue;
    uclar.forEach((u) => dolu.add(u)); idler.add(p.id);
    const temiz = { id: p.id, tur: p.tur };
    for (const k of ['renk', 'anot', 'katot', 'deger', 'a', 'b', 'sutun', 'bas', 'son']) if (p[k] !== undefined) temiz[k] = p[k];
    parcalar.push(temiz);
  }
  return { parcalar, program: programAyikla(d?.program) };
}
const aralikUygun = (m, [en, ust]) => m >= en - 0.01 && m <= ust + 0.01;
export function doluNoktalar(parcalar, haricId = null) {
  const m = new Map();
  for (const p of parcalar) if (p.id !== haricId) for (const u of parcaUclari(p)) m.set(u, p.id);
  return m;
}
export function butonSutunu(nokta) { // e ya da f satırındaki delikten butonun sol sütununu bulur
  const n = noktaCoz(nokta);
  if (!n || n.tur !== 'delik' || !'ef'.includes(n.satir)) return null;
  return n.sutun + 2 <= SUTUN_SAYISI ? n.sutun : n.sutun - 2;
}
// Yerleştirme denetimi: bir aracın sıradaki noktası uygun mu? (onceki: aynı parçanın önceki noktası)
export function noktaUygun(parcalar, tur, onceki, nokta, haricId = null) {
  const n = noktaCoz(nokta);
  if (!n) return { gecerli: false, neden: 'Burada delik yok' };
  const dolu = doluNoktalar(parcalar, haricId);
  const ad = { led: "LED", direnc: 'Direnç', buton: 'Buton' }[tur];
  if (tur !== 'kablo' && n.tur === 'pin') return { gecerli: false, neden: `${ad} breadboard'a takılır: bir delik seç` };
  if (tur === 'buton') {
    const s = butonSutunu(nokta);
    if (s == null) return { gecerli: false, neden: 'Butonu kanalın kenarındaki e ya da f satırına koy' };
    const uclar = parcaUclari({ tur: 'buton', sutun: s });
    if (uclar.some((u) => dolu.has(u))) return { gecerli: false, neden: 'Butonun bacakları dolu deliklere geliyor' };
    return { gecerli: true, sutun: s };
  }
  if (dolu.has(nokta)) return { gecerli: false, neden: n.tur === 'pin' ? 'Bu pinde zaten kablo var' : 'Bu delik dolu' };
  if (!onceki) return { gecerli: true };
  if (onceki === nokta) return { gecerli: false, neden: 'İki uç aynı yere takılamaz' };
  if (tur === 'kablo') return { gecerli: true };
  const m = adimMesafe(onceki, nokta), sinir = tur === 'led' ? LED_ARALIK : DIRENC_ARALIK;
  const yuvarla = Math.round(m * 10) / 10, metin = String(yuvarla).replace('.', ',');
  if (!aralikUygun(m, sinir)) return { gecerli: false, mesafe: m, neden: `${metin} adım: ${ad} bacakları en az ${sinir[0]}, en çok ${sinir[1]} adım arayla takılır` };
  return { gecerli: true, mesafe: m };
}

// ------------------------------------------------------------------ hazır devreler (devre.js ile aynı yerleşim)
export const HAZIR = {
  'ders-2': { ad: 'Ders 2: LED Yakalım', parcalar: [
    { id: 'led1', tur: 'led', renk: 'kirmizi', anot: 'h:15:e', katot: 'h:16:e' },
    { id: 'r1', tur: 'direnc', deger: 220, a: 'h:16:c', b: 'r:yakin-:16' },
    { id: 'k13', tur: 'kablo', renk: 'turuncu', bas: 'p:13', son: 'h:15:a' },
    { id: 'kgnd', tur: 'kablo', renk: 'siyah', bas: 'p:GND-D', son: 'r:yakin-:14' },
  ], program: { tur: 'blink', pin: 13, bekleme: 1000 } },
  'ders-3': { ad: 'Ders 3: Butonla LED', parcalar: [
    { id: 'led1', tur: 'led', renk: 'kirmizi', anot: 'h:15:e', katot: 'h:16:e' },
    { id: 'r1', tur: 'direnc', deger: 220, a: 'h:16:c', b: 'r:yakin-:16' },
    { id: 'k13', tur: 'kablo', renk: 'turuncu', bas: 'p:13', son: 'h:15:a' },
    { id: 'kgnd', tur: 'kablo', renk: 'siyah', bas: 'p:GND-D', son: 'r:yakin-:14' },
    { id: 'buton', tur: 'buton', sutun: 20 },
    { id: 'r2', tur: 'direnc', deger: 10000, a: 'h:22:c', b: 'r:yakin-:22' },
    { id: 'k5v', tur: 'kablo', renk: 'kirmizi', bas: 'p:5V', son: 'r:yakin+:24' },
    { id: 'kplus', tur: 'kablo', renk: 'kirmizi', bas: 'r:yakin+:20', son: 'h:20:a' },
    { id: 'k2', tur: 'kablo', renk: 'sari', bas: 'p:2', son: 'h:22:d' },
  ], program: { tur: 'buton', giris: 2, cikis: 13 } },
  'ders-4': { ad: 'Ders 4: Trafik Işığı', parcalar: [
    { id: 'ledK', tur: 'led', renk: 'kirmizi', anot: 'h:8:e', katot: 'h:9:e' },
    { id: 'ledS', tur: 'led', renk: 'sari', anot: 'h:15:e', katot: 'h:16:e' },
    { id: 'ledY', tur: 'led', renk: 'yesil', anot: 'h:22:e', katot: 'h:23:e' },
    { id: 'rK', tur: 'direnc', deger: 220, a: 'h:9:c', b: 'r:yakin-:9' },
    { id: 'rS', tur: 'direnc', deger: 220, a: 'h:16:c', b: 'r:yakin-:16' },
    { id: 'rY', tur: 'direnc', deger: 220, a: 'h:23:c', b: 'r:yakin-:23' },
    { id: 'kK', tur: 'kablo', renk: 'kirmizi', bas: 'p:10', son: 'h:8:a' },
    { id: 'kS', tur: 'kablo', renk: 'sari', bas: 'p:9', son: 'h:15:a' },
    { id: 'kY', tur: 'kablo', renk: 'yesil', bas: 'p:8', son: 'h:22:a' },
    { id: 'kgnd', tur: 'kablo', renk: 'siyah', bas: 'p:GND-D', son: 'r:yakin-:14' },
  ], program: { tur: 'elle', seviyeler: { 10: true } } },
};

// ------------------------------------------------------------------ ağlar (birleşim-bul)
function netKur(parcalar, basili) {
  const ust = new Map();
  const bul = (k) => {
    if (!ust.has(k)) { ust.set(k, k); return k; }
    let r = k; while (ust.get(r) !== r) r = ust.get(r);
    let x = k; while (ust.get(x) !== r) { const s = ust.get(x); ust.set(x, r); x = s; }
    return r;
  };
  const birlestir = (a, b) => { const x = bul(a), y = bul(b); if (x !== y) ust.set(x, y); };
  for (const p of parcalar) {
    const u = parcaUclari(p).map(grupAnahtari);
    u.forEach(bul);
    if (p.tur === 'kablo') birlestir(u[0], u[1]);
    if (p.tur === 'buton') { birlestir(u[0], u[2]); birlestir(u[1], u[3]); if (basili === true || basili?.has?.(p.id)) birlestir(u[0], u[1]); }
  }
  return { bul };
}
const pinK = (p) => `k:${KART_NET[p] || p}`;

// Aynı ağda iki "sürücü" (GND, 5V, 3,3V, çıkış pini) varsa kısa devre
function kisaDevreler(net, cikislar) {
  const g = new Map();
  const ekle = (k, ad) => { const r = net.bul(k); if (!g.has(r)) g.set(r, []); g.get(r).push(ad); };
  ekle('k:GND', 'GND'); ekle('k:5V', '5V'); ekle('k:3V3', '3V3');
  for (const p of cikislar) ekle(pinK(String(p)), String(p));
  return [...g.entries()].filter(([, d]) => d.length > 1).map(([kok, suruculer]) => ({ kok, suruculer }));
}

// ------------------------------------------------------------------ düğüm gerilimi çözümü
function analiz(parcalar, net, cikisV) {
  const sabit = new Map([[net.bul('k:GND'), 0], [net.bul('k:5V'), 5], [net.bul('k:3V3'), 3.3]]);
  const direncler = [], ledler = [], kaynaklar = [];
  for (const p of parcalar) {
    if (p.tur === 'direnc') { const a = net.bul(grupAnahtari(p.a)), b = net.bul(grupAnahtari(p.b)); if (a !== b) direncler.push({ a, b, G: 1 / p.deger }); }
    if (p.tur === 'led') { const a = net.bul(grupAnahtari(p.anot)), k = net.bul(grupAnahtari(p.katot)); if (a !== k) ledler.push({ id: p.id, a, k, vf: LED_RENKLERI[p.renk].esik }); }
  }
  for (const [pin, v] of Object.entries(cikisV)) { const n = net.bul(pinK(pin)); const sanal = `v:${pin}`; sabit.set(sanal, v); kaynaklar.push({ a: n, b: sanal, G: 1 / R_PIN }); }
  const dugum = new Map();
  const ekle = (r) => { if (!sabit.has(r) && !dugum.has(r)) dugum.set(r, dugum.size); };
  for (const e of [...direncler, ...ledler.map((l) => ({ a: l.a, b: l.k })), ...kaynaklar]) { ekle(e.a); ekle(e.b); }
  const n = dugum.size;
  const acik = new Map(ledler.map((l) => [l.id, false]));
  let x = new Float64Array(n);
  const V = (r) => (sabit.has(r) ? sabit.get(r) : dugum.has(r) ? x[dugum.get(r)] : 0);
  for (let tur = 0; tur < 40; tur++) {
    const A = Array.from({ length: n }, () => new Float64Array(n)), b = new Float64Array(n);
    for (let i = 0; i < n; i++) A[i][i] = G_SIZINTI;
    // akım x'ten y'ye = G (Vx - Vy - E)
    const damga = (xk, yk, G, E) => {
      const i = dugum.get(xk), j = dugum.get(yk);
      if (i !== undefined) { A[i][i] += G; b[i] += G * E; if (j !== undefined) A[i][j] -= G; else b[i] += G * sabit.get(yk); }
      if (j !== undefined) { A[j][j] += G; b[j] -= G * E; if (i !== undefined) A[j][i] -= G; else b[j] += G * sabit.get(xk); }
    };
    for (const e of direncler) damga(e.a, e.b, e.G, 0);
    for (const e of kaynaklar) damga(e.a, e.b, e.G, 0);
    for (const l of ledler) if (acik.get(l.id)) damga(l.a, l.k, 1 / R_LED, l.vf);
    x = gauss(A, b);
    let degisti = false;
    for (const l of ledler) {
      const vd = V(l.a) - V(l.k);
      if (!acik.get(l.id) && vd > l.vf + 1e-9) { acik.set(l.id, true); degisti = true; }
      else if (acik.get(l.id) && vd < l.vf - 1e-9) { acik.set(l.id, false); degisti = true; }
    }
    if (!degisti) break;
  }
  const akim = new Map(ledler.map((l) => [l.id, acik.get(l.id) ? Math.max(0, (V(l.a) - V(l.k) - l.vf) / R_LED) : 0]));
  // Tanımlı ağlar: sabit gerilime ya da çıkış pinine kablo/direnç yoluyla ulaşanlar (LED üzerinden sayılmaz)
  const komsu = new Map();
  const kenar = (a, b) => { if (!komsu.has(a)) komsu.set(a, []); komsu.get(a).push(b); };
  for (const e of [...direncler, ...kaynaklar]) { kenar(e.a, e.b); kenar(e.b, e.a); }
  const tanimli = new Set(sabit.keys()); const kuyruk = [...tanimli];
  while (kuyruk.length) for (const y of komsu.get(kuyruk.shift()) || []) if (!tanimli.has(y)) { tanimli.add(y); kuyruk.push(y); }
  return { V, akim, tanimli, ledler, direncler };
}
function gauss(A, b) {
  const n = b.length;
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    if (p !== c) { [A[p], A[c]] = [A[c], A[p]]; [b[p], b[c]] = [b[c], b[p]]; }
    const d = A[c][c] || 1e-30;
    for (let r = c + 1; r < n; r++) {
      const f = A[r][c] / d;
      if (!f) continue;
      for (let k = c; k < n; k++) A[r][k] -= f * A[c][k];
      b[r] -= f * b[c];
    }
  }
  const x = new Float64Array(n);
  for (let r = n - 1; r >= 0; r--) { let s = b[r]; for (let k = r + 1; k < n; k++) s -= A[r][k] * x[k]; x[r] = s / (A[r][r] || 1e-30); }
  return x;
}
function oku(an, kok) {
  if (!an.tanimli.has(kok)) return { deger: 'KARARSIZ', bosta: true, gerilim: null };
  const v = an.V(kok);
  return { deger: v >= V_HIGH ? 'HIGH' : v <= V_LOW ? 'LOW' : 'KARARSIZ', bosta: false, gerilim: v };
}
// LED'in bir ucundan (LED'in kendisi hariç) direnç ve öteki LED'ler üzerinden ulaşılan ağlar
function ulasilan(an, bas, haricId) {
  const komsu = new Map();
  const kenar = (a, b) => { if (!komsu.has(a)) komsu.set(a, []); komsu.get(a).push(b); };
  for (const e of an.direncler) { kenar(e.a, e.b); kenar(e.b, e.a); }
  for (const l of an.ledler) if (l.id !== haricId) { kenar(l.a, l.k); kenar(l.k, l.a); }
  const gor = new Set([bas]), kuyruk = [bas];
  while (kuyruk.length) for (const y of komsu.get(kuyruk.shift()) || []) if (!gor.has(y)) { gor.add(y); kuyruk.push(y); }
  return gor;
}

// ------------------------------------------------------------------ program
export function kabloluPinler(parcalar) {
  const s = new Set();
  for (const p of parcalar) if (p.tur === 'kablo') for (const u of [p.bas, p.son]) { const n = noktaCoz(u); if (n?.tur === 'pin') s.add(n.pin); }
  return s;
}
function programPinleri(program, parcalar) {
  if (program.tur === 'blink') return { cikislar: [String(program.pin)], giris: null };
  if (program.tur === 'buton') return { cikislar: [String(program.cikis)], giris: String(program.giris) };
  const kablolu = kabloluPinler(parcalar);
  return { cikislar: PROGRAM_PINLERI.map(String).filter((p) => kablolu.has(p) || program.seviyeler[p]), giris: null };
}
const SEVIYE_SIRA = { hata: 0, uyari: 1, bilgi: 2 };

// ------------------------------------------------------------------ çözüm
// durum: { calisiyor (varsayılan true), faz (yanıp sönmede HIGH yarısı mı), basili: [buton kimlikleri], kararsiz (boşta giriş için rastgele bit) }
export function devreCoz(devreGiris, durum = {}) {
  const { parcalar, program } = devreAyikla(devreGiris);
  const guc = durum.calisiyor !== false;
  const basili = new Set(durum.basili || []);
  const { cikislar, giris } = programPinleri(program, parcalar);
  const ledler = parcalar.filter((p) => p.tur === 'led');
  const butonlar = parcalar.filter((p) => p.tur === 'buton');
  const uyarilar = [];
  const uyar = (tur, seviye, metin, ek = {}) => uyarilar.push({ tur, seviye, metin, parcalar: [], ...ek });

  const netC = netKur(parcalar, basili), netP = netKur(parcalar, true), netZ = netKur(parcalar, null);
  const kisaC = kisaDevreler(netC, cikislar), kisaP = kisaDevreler(netP, cikislar);
  const kisaParcalar = (net, kok, sadeceButon = false) => parcalar.filter((p) => (p.tur === 'kablo' && !sadeceButon) || p.tur === 'buton').filter((p) => parcaUclari(p).some((u) => net.bul(grupAnahtari(u)) === kok)).map((p) => p.id);
  for (const k of kisaC) uyar('kisa-devre', 'hata', `${kisaMetin(k.suruculer)} Kısa devre giderilene kadar devre çalışmaz.`, { parcalar: kisaParcalar(netC, k.kok) });
  const cAnahtar = new Set(kisaC.map((k) => k.suruculer.slice().sort().join('+')));
  for (const k of kisaP) if (!cAnahtar.has(k.suruculer.slice().sort().join('+'))) uyar('kisa-devre', 'hata', `Butona basılınca kısa devre olur. ${kisaMetin(k.suruculer)}`, { parcalar: kisaParcalar(netP, k.kok, true) });
  const pinKablolari = (pin) => parcalar.filter((p) => p.tur === 'kablo' && (p.bas === `p:${pin}` || p.son === `p:${pin}`)).map((p) => p.id);
  const reset = netC.bul('k:RESET') === netC.bul('k:GND');
  if (reset) uyar('reset', 'hata', 'RESET pini GND\'ye bağlı: kart sürekli baştan başlıyor, program çalışmaz. Kabloyu RESET pininden çıkar.', { parcalar: pinKablolari('RESET') });

  // kullanılmayan pinler (kablo takılı)
  const kablolu = kabloluPinler(parcalar);
  const kullanilan = new Set([...cikislar, ...(giris ? [giris] : [])]);
  if (program.tur === 'elle') PROGRAM_PINLERI.forEach((p) => kullanilan.add(String(p)));
  const bosPinler = new Set();
  for (const pin of kablolu) {
    if (GUC_PINLERI.has(pin) || kullanilan.has(pin) || pin === 'RESET') continue;
    bosPinler.add(pin);
    // yanıp sönmede tek dokunuşla düzeltme: programı kablonun takılı olduğu pine çevir
    const eylem = program.tur === 'blink' && PROGRAM_PINLERI.includes(Number(pin)) ? { tur: 'blink-pin', pin: Number(pin), metin: `Programda ${pin}. pini seç` } : null;
    uyar('pin-kullanilmiyor', 'uyari', bosPinMetni(pin, program), { parcalar: pinKablolari(pin), pin, eylem });
  }

  // şimdiki durum: çıkış seviyeleri
  const ciktiC = {}; let girisC = null;
  const calisir = guc && !kisaC.length && !reset;
  let anC = null;
  if (calisir) {
    if (program.tur === 'blink') ciktiC[program.pin] = durum.faz === false ? 0 : 5;
    if (program.tur === 'elle') for (const p of cikislar) ciktiC[p] = program.seviyeler[p] ? 5 : 0;
    if (program.tur === 'buton') {
      const on = analiz(parcalar, netC, { [program.cikis]: 0 });
      girisC = oku(on, netC.bul(pinK(giris)));
      const yuksek = girisC.deger === 'HIGH' || (girisC.deger === 'KARARSIZ' && Boolean(durum.kararsiz));
      ciktiC[program.cikis] = yuksek ? 5 : 0;
    }
    anC = analiz(parcalar, netC, ciktiC);
  }
  const anP = kisaP.length ? null : analiz(parcalar, netP, Object.fromEntries(cikislar.map((p) => [p, 5])));
  const anZ = kisaP.length ? null : analiz(parcalar, netZ, Object.fromEntries(cikislar.map((p) => [p, 0])));

  // LED'ler
  const sonucLed = {};
  const kontrollu = []; // programla yanıp sönebilen LED'ler
  let yanabilen = 0;
  for (const l of ledler) {
    const ad = parcaAdi(l);
    const aC = anC?.akim.get(l.id) ?? 0, aP = anP?.akim.get(l.id) ?? 0, aZ = anZ?.akim.get(l.id) ?? 0;
    const asiri = Math.max(aC, aP, aZ) > A_ASIRI;
    const yanik = anC ? aC > A_YANIK && aC <= A_ASIRI : false;
    sonucLed[l.id] = { yanik, parlaklik: yanik ? Math.max(0.12, Math.min(1, Math.sqrt(aC / A_TAM))) : 0, akim: aC * 1000, enCok: Math.max(aP, aZ, aC) * 1000 };
    if (!anP) continue;
    const ayni = netP.bul(grupAnahtari(l.anot)) === netP.bul(grupAnahtari(l.katot));
    if (ayni) { uyar('tamamlanmamis', 'uyari', `${ad}: iki bacak aynı bağlantı grubunda (${grupAdi(l.anot)}). Elektrik LED'e uğramadan geçer; bacakları farklı sütunlara tak.`, { parcalar: [l.id] }); continue; }
    if (asiri) { uyar('direncsiz', 'hata', `${ad}: direnç yok. Gerçek devrede aşırı akım LED'i ya da pini bozar; simülasyon bu LED'i yakmıyor. LED ile GND arasına 220 Ω direnç ekle.`, { parcalar: [l.id] }); continue; }
    const yP = aP > A_YANIK, yZ = aZ > A_YANIK, yC = aC > A_YANIK;
    if (yP || yZ || yC) {
      yanabilen++;
      if (yP !== yZ) kontrollu.push(l.id);
      if (yP && yZ && cikislar.length) uyar('sabit', 'bilgi', `${ad} programdan bağımsız, hep yanıyor: anot tarafı doğrudan 5V'a bağlı. Programla yanıp sönmesi için anot tarafını bir çıkış pinine bağla.`, { parcalar: [l.id] });
      const enCok = Math.max(aP, aZ, aC);
      if (enCok < A_SONUK) uyar('sonuk', 'bilgi', `${ad} çok sönük yanıyor: büyük direnç akımı çok azaltıyor. LED için 220 Ω direnç kullan.`, { parcalar: [l.id], akim: enCok * 1000 });
      continue;
    }
    // yanmıyor: ters mi, eksik mi?
    const kA = netP.bul(grupAnahtari(l.anot)), kK = netP.bul(grupAnahtari(l.katot));
    const ters = [[anP, netP], [anZ, netZ]].some(([an, net]) => {
      const a = net.bul(grupAnahtari(l.anot)), k = net.bul(grupAnahtari(l.katot));
      return an.tanimli.has(a) && an.tanimli.has(k) && an.V(k) - an.V(a) > LED_RENKLERI[l.renk].esik - 0.05;
    });
    if (ters) { uyar('led-ters', 'uyari', `${ad} ters takılı: uzun bacak (anot) artı tarafa, kısa bacak (katot) GND tarafına gelmeli. LED'e dokunup Ters çevir'i seç.`, { parcalar: [l.id] }); continue; }
    const anotYani = ulasilan(anP, kA, l.id), katotYani = ulasilan(anP, kK, l.id);
    if ([...bosPinler].some((p) => anotYani.has(netP.bul(pinK(p))) || katotYani.has(netP.bul(pinK(p))))) continue; // pin uyarısı açıklıyor
    const kaynak = [netP.bul('k:5V'), netP.bul('k:3V3'), ...cikislar.map((p) => netP.bul(pinK(p)))];
    const toprak = [netP.bul('k:GND'), ...cikislar.map((p) => netP.bul(pinK(p)))];
    const anotTamam = kaynak.some((r) => anotYani.has(r)), katotTamam = toprak.some((r) => katotYani.has(r));
    let metin;
    if (!anotTamam && !katotTamam) metin = `${ad} devreye bağlı değil: anot (uzun bacak) tarafı bir çıkış pinine ya da 5V'a, katot (kısa bacak) tarafı GND'ye ulaşmalı.`;
    else if (!anotTamam) metin = `${ad}: anot (uzun bacak) tarafı bir çıkış pinine ya da 5V'a ulaşmıyor.`;
    else if (!katotTamam) metin = `${ad}: katot (kısa bacak) tarafı GND'ye ulaşmıyor. Direnci ya da kabloyu GND'ye giden eksi raya bağla.`;
    else metin = `${ad} yanacak kadar elektrik almıyor: devrenin yolunu kontrol et.`;
    uyar('tamamlanmamis', 'uyari', `Devre tamamlanmamış. ${metin}`, { parcalar: [l.id] });
  }
  if (!ledler.length) uyar('tamamlanmamis', 'bilgi', 'Devrede LED yok: panelden bir LED seçip breadboard\'a yerleştir.');

  // buton programı: giriş
  let girisZ = null, girisP = null;
  if (program.tur === 'buton' && anP && anZ) {
    const kokZ = netZ.bul(pinK(giris)), kokP = netP.bul(pinK(giris));
    girisZ = oku(anZ, kokZ); girisP = oku(anP, kokP);
    const pinAd = `${giris}. pin`, pine = `${giris}. pine`;
    const butonIdler = butonlar.map((b) => b.id);
    if (!butonlar.length) uyar('tamamlanmamis', 'uyari', 'Devre tamamlanmamış. Devrede buton yok: panelden butonu seçip kanalın üstüne yerleştir.');
    else if (!kablolu.has(giris)) uyar('tamamlanmamis', 'uyari', `Devre tamamlanmamış. ${pinAd} (giriş) devreye bağlı değil: butonun bacağından ${pine} kablo çek.`, { pin: giris });
    else if (girisZ.bosta && girisP.bosta) uyar('tamamlanmamis', 'uyari', `Devre tamamlanmamış. Butona basınca da ${pinAd} hiçbir yere bağlanmıyor: butonun bir bacağı 5V'a, karşı bacağı ${pine} bağlanmalı.`, { pin: giris, parcalar: butonIdler });
    else if (girisZ.bosta) uyar('cekme-yok', 'uyari', `${pinAd} boşta kalıyor: butona basılmadığında pin ne HIGH ne LOW okur, LED kendi kendine yanıp söner. ${pinAd} ile GND arasına 10 kΩ çekme direnci ekle.`, { pin: giris, parcalar: butonIdler });
    else if (girisP.bosta || girisP.deger === girisZ.deger) uyar('tamamlanmamis', 'uyari', `Devre tamamlanmamış. Butona basınca ${pinAd} değişmiyor: butonun bir bacağı 5V'a, karşı bacağı ${pine} bağlanmalı.`, { pin: giris, parcalar: butonIdler });
  }

  uyarilar.sort((a, b) => SEVIYE_SIRA[a.seviye] - SEVIYE_SIRA[b.seviye]);
  const sorun = uyarilar.some((u) => u.seviye !== 'bilgi');
  let tamam = null;
  if (!sorun && kontrollu.length) {
    if (program.tur === 'blink') tamam = `Devre doğru: ${program.pin}. pin LED'i yakıp söndürüyor.`;
    if (program.tur === 'elle') tamam = 'Devre doğru: HIGH yaptığın pinlerdeki LED\'ler yanıyor.';
    if (program.tur === 'buton' && girisZ && girisP && girisZ.deger !== girisP.deger) tamam = girisZ.deger === 'LOW' ? 'Devre doğru: butona basınca LED yanıyor, bırakınca sönüyor.' : 'Devre doğru: çekme direnci 5V\'a bağlı; buton bırakılınca LED yanıyor, basınca sönüyor.';
  }
  return {
    calisiyor: calisir,
    durdu: !guc ? 'kapali' : kisaC.length ? 'kisa-devre' : reset ? 'reset' : null,
    ledler: sonucLed,
    cikislar: Object.fromEntries(Object.entries(ciktiC).map(([p, v]) => [p, v > 0 ? 'HIGH' : 'LOW'])),
    giris: program.tur === 'buton' ? { pin: Number(giris), ...(girisC || { deger: 'LOW', bosta: false, gerilim: 0 }), basiliOkur: girisP?.deger ?? null, birakikOkur: girisZ?.deger ?? null } : null,
    l13: calisir && ciktiC[13] === 5,
    uyarilar,
    tamam,
    program,
  };
}

function kisaMetin(s) {
  const has = (x) => s.includes(x);
  const pinler = s.filter((x) => !['GND', '5V', '3V3'].includes(x));
  if (has('5V') && has('GND')) return '5V doğrudan GND\'ye bağlı: elektrik hiçbir parçaya uğramadan geri dönüyor. Gerçek kartta koruma sigortası devreyi keser ve kart kapanır.';
  if (has('3V3') && has('GND')) return '3,3V doğrudan GND\'ye bağlı: elektrik hiçbir parçaya uğramadan geri dönüyor.';
  if (has('5V') && has('3V3')) return '5V ile 3,3V doğrudan birbirine bağlı: iki farklı gerilim çakışıyor.';
  if (pinler.length >= 2) return `${pinler[0]}. ve ${pinler[1]}. pin doğrudan birbirine bağlı: biri HIGH, öteki LOW olunca kısa devre olur ve pin bozulabilir.`;
  if (has('GND')) return `${pinler[0]}. pin doğrudan GND'ye bağlı: pin HIGH olunca elektrik hiçbir parçaya uğramadan akar ve pin bozulabilir.`;
  if (has('5V')) return `${pinler[0]}. pin doğrudan 5V'a bağlı: pin LOW olunca kısa devre olur ve pin bozulabilir.`;
  return `${pinler[0]}. pin doğrudan 3,3V'a bağlı: pin HIGH ya da LOW olunca kısa devre olur.`;
}
function bosPinMetni(pin, program) {
  if (pin === 'VIN') return 'Vin pini, kart USB ile çalışırken güç vermez. Güç için 5V pinini kullan.';
  if (pin === 'NC') return 'Bu pin kartta hiçbir yere bağlı değil (NC). Kabloyu başka bir pine taşı.';
  if (pin === '0' || pin === '1') return `${pinAdi(pin)} bilgisayarla haberleşmede kullanılır; bu programda kullanılmıyor. 2-13 arasından bir pin seç.`;
  if (/^\d+$/.test(pin)) {
    if (program.tur === 'blink') return `${pin}. pine kablo bağlı ama program ${program.pin}. pini yakıp söndürüyor. Kabloyu ${program.pin}. pine taşı ya da Program bölümünden ${pin}. pini seç.`;
    if (program.tur === 'buton') return `${pin}. pin programda kullanılmıyor: giriş ${program.giris}. pin, çıkış ${program.cikis}. pin. Kabloyu taşı ya da Program bölümünden pini değiştir.`;
  }
  return `${pinAdi(pin)} pini bu programda kullanılmıyor. Kabloyu 2-13 arasındaki bir pine taşı.`;
}
