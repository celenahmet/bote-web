// Kasa içi (ders 2): gruplar, dokunma vekilleri, keşif çapaları, kapak, soğutucu/RAM hareketi, fan dönüşü, hava akışı ve sıvı akışı.
// Kasa kapalıyken (ders 1) hiçbir şey çizilmez ve hiçbir geometri üretilmez: parçalar ve atlas dokusu kapak ilk açıldığında kurulur (hazirla).
// Konumlar kasa-yerel birim (icYer.js); dünya = KASA.x + x, y, KASA.z + z. Hareket yöneticisi donanimSahne.js'te kalır; burada yalnız durum ayarlayıcılar var.
import {
  Group, Mesh, InstancedMesh, Object3D, Vector3, Quaternion, Color, BoxGeometry, ConeGeometry, PlaneGeometry, MeshStandardMaterial, MeshBasicMaterial,
  CatmullRomCurve3, DoubleSide, BufferGeometry, TubeGeometry,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { yuvarlak, vekil, kesifNok } from './yardimci.js';
import { atlasDokusu, filtreDokusu, hortumDokusu, icDokuSure } from './icDoku.js';
import {
  kume, kumeBitir, kabukYap, kabukMetal, anakartYap, macunYap, ramYap, havaYap, pompaYap, radyatorYap, ekranKartiYap, wifiYap, guc, depoYap, arkaYap,
  kabloYap, sabitFanlar, egzozYap, HORTUM, HORTUM_R, POMPA_KAPAK, boruGeo,
} from './icParca.js';
import { ARKA } from './kasa.js';
import { KASA } from './yerlesim.js';
import { CPU, RAM, GPU, WIFI, M2, BIOS, ON_FAN, FANLAR, AKIS, SIVI, GPU_ARKA, WIFI_ARKA, pcieY } from './icYer.js';

const V = (x, y, z) => new Vector3(x, y, z);
const M2MZ = (M2.z0 + M2.z1) / 2;
const ease = (k) => k * k * (3 - 2 * k);
const KUCUK = { minAdim: 4, minPx: 14 };
export const KAPAK_ACI = 1.75; // 100 derece
// soğutucu kaldırma yolu (birim): cek işlemciden ayrılma, cik açık yandan dışarı (toplam 38: taban x 16.1 -> -21.9, kasa yanı -19.75),
// yuk ve geri dışarıdayken yükselme ve geriye alma
const KALDIR = { cek: 5, cik: 33, yuk: 10, geri: 6 };
// hortum dokunma tüpü yarıçapı (birim): 390 px telefonda hortumun dokunma karesi 12 -> 36 px (3.8'de 40 px ama pompa ve RAM daralıyor)
const HORTUM_VEKIL_R = 3.0;
const gorunmezMal = new MeshBasicMaterial({ visible: false }); // çizilmez (çizim çağrısı yok), yalnız ışınla yoklanır

export function icKur(kasa, { aniz = 4 } = {}) {
  const govde = kasa.govde;
  const g = new Group(); g.name = 'ic'; g.visible = false; kasa.grup.add(g);
  const gSabit = new Group(), gHava = new Group(), gEgzoz = new Group(), gSivi = new Group(), gRam = new Group(), gMacun = new Group(), gKapak = new Group(), gAkis = new Group();
  gSabit.name = 'ic-sabit'; gHava.name = 'ic-hava'; gEgzoz.name = 'ic-egzoz'; gSivi.name = 'ic-sivi'; gRam.name = 'ic-ram'; gMacun.name = 'ic-macun'; gKapak.name = 'ic-kapak';
  gKapak.position.set(-19.75, 0, -43); gMacun.visible = false; gSivi.visible = false; gAkis.visible = false;
  g.add(gSabit, gHava, gEgzoz, gSivi, gRam, gMacun, gKapak, gAkis);

  const D = { hazir: false, acik: false, tur: 'hava', kaldir: 0, ram: 0, calisiyor: false, kapak: 0, ms: {} };

  // ---------------------------------------------------------------- kapak (kapalıyken gövde görünür, açılınca gövde gizlenir ve kabuk görünür)
  const kapakMal = govde.material;
  const kapakMesh = new Mesh(yuvarlak(0.5, 87, 85.8, 0.2, 0, 45.5, 43, 2), kapakMal);
  kapakMesh.castShadow = false; kapakMesh.receiveShadow = true; gKapak.add(kapakMesh);
  if (govde.userData.logoAcik) gKapak.add(govde.userData.logoAcik); // yan kapak baskısı kapakla birlikte hareket eder

  // ---------------------------------------------------------------- vekiller ve keşif çapaları (hafif; hepsi gizli grupların altında)
  const kesif = [], vekiller = [];
  const vk = (kap, id, w, h, d, x, y, z, ek = {}) => { const o = vekil({ kesif: id, parca: 'ic', ...ek }, w, h, d, x, y, z); kap.add(o); vekiller.push(o); return o; };
  const cp = (kap, id, x, y, z) => { kesif.push(kesifNok(kap, id, x, y, z)); };
  // kapak (kapağa bağlı: kapak açılınca onunla gider)
  vk(gKapak, 'yan-kapak', 3, 87, 85.8, 0, 45.5, 43); cp(gKapak, 'yan-kapak', -1.0, 56, 58);
  // sabit parçalar
  vk(gSabit, 'hava-akisi', 38.9, 87, 84, 0.4, 45.5, 0);
  vk(gSabit, 'anakart', 1.2, 48.8, 61, 17.9, 54.4, -11); cp(gSabit, 'anakart', 17.2, 70.6, 12.5);
  vk(gSabit, 'islemci', 2.2, 10.4, 10, 16.8, CPU.y, CPU.z); cp(gSabit, 'islemci', 16.0, CPU.y + 7.4, CPU.z + 5.0);
  vk(gSabit, 'pcie-yuvasi', 3, 2.4, 19, 16.9, pcieY(3), -31.7); cp(gSabit, 'pcie-yuvasi', 16.0, pcieY(3), -26);
  const gYc = (GPU.alt + GPU.y) / 2 + 0.25, gH = GPU.y - GPU.alt + 1.3;
  vk(gSabit, 'ekran-karti', GPU.x1 - GPU.x0 + 0.8, gH, 55.6, (GPU.x0 + GPU.x1) / 2, gYc, -14.4); cp(gSabit, 'ekran-karti', GPU.x0 - 0.6, GPU.y - 1.4, 6);
  vk(gSabit, 'guc-kablolari', 7, 39, 8.8, 14.5, 43.5, 15.2); cp(gSabit, 'guc-kablolari', 13.2, 44, 16.5);
  vk(gSabit, 'guc-kablolari', 10, 15, 19, 9.5, 20.5, -3.5); // 24 pin kablonun güç kaynağından çıkan alt kolu (güç kaynağı adımında görünen kısım)
  vk(gSabit, 'guc-kaynagi', 31, 17.7, 29.5, -3.5, 10.65, -27.75); cp(gSabit, 'guc-kaynagi', -3.5, 19.1, -28);
  vk(gSabit, 'm2-ssd', 2, M2.y1 - M2.y0 + 1.2, M2.z1 - M2.z0 + 1, M2.x, (M2.y0 + M2.y1) / 2, M2MZ); cp(gSabit, 'm2-ssd', 16.4, (M2.y0 + M2.y1) / 2, M2MZ);
  vk(gSabit, 'sata-ssd', 2.6, 15, 21, 17.9, 33.5, 31); cp(gSabit, 'sata-ssd', 16.4, 36.8, 31);
  vk(gSabit, 'hdd', 6.4, 21.5, 30.5, 16, 12.75, 22.25); cp(gSabit, 'hdd', 12.6, 12.8, 22);
  vk(gSabit, 'veri-kablosu', 3.5, 18.5, 7.5, 14.75, 20.75, 8.75); cp(gSabit, 'veri-kablosu', 13.0, 20.5, 8.5);
  vk(gSabit, 'bios-pili', 2.5, 4.6, 4.6, 16.75, BIOS.y, BIOS.z, KUCUK); cp(gSabit, 'bios-pili', 15.4, BIOS.y, BIOS.z);
  vk(gSabit, 'arka-panel', 31, 9.3, 1.6, 2.9, 74.55, -42.3); cp(gSabit, 'arka-panel', 2.9, 74.55, -42.3);
  vk(gSabit, 'wifi-karti', 14.6, 2.6, 6.6, 10.1, WIFI.y, -38.1); cp(gSabit, 'wifi-karti', 6.6, WIFI.y + 1.4, -38.1);
  vk(gSabit, 'toz-filtresi', 35.2, 1.5, 80, 0, 89.65, 0); cp(gSabit, 'toz-filtresi', -9, 90.4, 28);
  // ön fanlar: vekil delikli ön panelin yüzüne dek uzanır (fan panelin hemen arkasında; geniş açıdan dokunulan yüz panel)
  ON_FAN.forEach((y) => vk(gSabit, 'kasa-fani', 38, 24.4, 6.6, 0, y, 40.3));
  cp(gSabit, 'kasa-fani', -12.5, ON_FAN[1], 39.7);
  // hava soğutucu (kule) ve ısı boruları
  vk(gHava, 'hava-sogutucu', 26, 19.4, 14.4, 3.5, CPU.y, -19.6); cp(gHava, 'hava-sogutucu', -9.6, CPU.y + 7.0, -14.9);
  // ısı boruları yakınlaşınca ayrı seçilir; geniş açıda soğutucunun yüzünü bölmez (dokunuş bütün soğutucuya gider)
  const BORU = { minAdim: 8, minPx: 14 };
  vk(gHava, 'isi-borusu', 2.2, 8, 9, -8.9, CPU.y, -22.1, BORU); vk(gHava, 'isi-borusu', 4, 8, 9, 14.1, CPU.y, -22.1, BORU); cp(gHava, 'isi-borusu', -10.0, CPU.y - 1.4, -22.4);
  vk(gEgzoz, 'kasa-fani', 24.4, 5.4, 24.4, 0, 87.1, -24); cp(gEgzoz, 'kasa-fani', -12.6, 87.1, -24);
  // termal macun (soğutucu kalkınca)
  vk(gMacun, 'termal-macun', 1.4, 7, 7, 16.2, CPU.y, CPU.z, KUCUK); cp(gMacun, 'termal-macun', 15.5, CPU.y - 4.2, CPU.z - 1.0);
  // RAM (çıkarılabilir) ve yuva bölgesi
  const rYc = (RAM.y0 + RAM.y1) / 2;
  // yuva bölgesi: çubukların iki yanındaki kart yüzü de RAM'e dokunur (ince çubuklar geniş açıda dar kalır). 16 birim derin:
  // 320 px telefonda özet adımında dokunma karesi 40 -> 44 px üstü; soğutucunun (z <= -12.4) üstüne yalnız 1 birim biner.
  // hacim elle 3500: anakart vekilinin (3572) kesin altında (en küçük hacim kazanır; kutu hacmi 4121 olsa anakart kazanıp RAM karesi 24 px'e düşer),
  // yuvadaki iki çubuk vekilinin (789) üstünde
  vk(gSabit, 'ram', 9.4, 27.4, 16, 13.4, rYc, -5.4, { hacim: 3500 });
  vk(gRam, 'ram', 9, 27.4, 3.2, 12.8, rYc, RAM.z0 + RAM.adim * 1); vk(gRam, 'ram', 9, 27.4, 3.2, 12.8, rYc, RAM.z0 + RAM.adim * 3); cp(gRam, 'ram', 8.3, 70, -6.1);
  // sıvı soğutma
  vk(gSivi, 'pompa-blogu', SIVI.pompaX1 - SIVI.pompaX0 + 0.4, 2 * SIVI.pompaR + 3.6, 2 * SIVI.pompaR + 0.8, (SIVI.pompaX0 + SIVI.pompaX1) / 2, CPU.y + 1.3, CPU.z); cp(gSivi, 'pompa-blogu', SIVI.pompaX0 - 0.15, CPU.y - 2.0, CPU.z + 1.5);
  // radyatör tavan filtresinin hemen altında: hacmi filtreden (ve altındaki fanlardan) küçük sayılır ki filtrenin üstünden ve yandan
  // radyatöre gelen dokunuş radyatöre gitsin (filtre radyatörün dışında kalan tavanda seçilir)
  vk(gSivi, 'radyator', 25.2, 6, 55, 0, 87, -14, { hacim: 3000 }); cp(gSivi, 'radyator', -12.6, 87, -26);
  // hortum: iki hortumu saran kutu (yatay kol) + her hortumun çevresinde kalın, görünmez tüp (ince: ışın yanından geçse de seçilir;
  // geometrisi tembel kurulumda dolar, kapalı kasada maliyet yok). Tüp pompa ve radyatör uçlarına girmez, onların dokunuşunu almaz.
  vk(gSivi, 'sogutma-hortumu', 4.4, 6.6, 26, 6.5, 71.9, -1); cp(gSivi, 'sogutma-hortumu', 5.5, 72.9, 3);
  const hortumVekil = ['A', 'B'].map(() => {
    const m = new Mesh(new BufferGeometry(), gorunmezMal); m.name = 'hortum-vekili';
    m.userData = { kesif: 'sogutma-hortumu', parca: 'ic', ince: true, hacim: 300 }; gSivi.add(m); vekiller.push(m); return m;
  });
  vk(gSivi, 'sivi-sogutma', 25.2, 6, 5.8, 0, 87, 12.7); cp(gSivi, 'sivi-sogutma', -12.6, 87, 12.5);
  vk(gSivi, 'kasa-fani', 24.4, 5.4, 24.4, 0, 81.7, -26); vk(gSivi, 'kasa-fani', 24.4, 5.4, 24.4, 0, 81.7, -2);

  // keşif çapaları gizli grupların altında kalır; yerel konum sıfır (çapa kendisi konumda)
  // çapa tabanlı etiket noktaları: ad -> () => dünya konumu (donanimSahne PARCA tablosuna eklenir)
  const gorunur = (o) => { for (let a = o; a; a = a.parent) if (!a.visible) return false; return true; };
  const nk = (kap, x, y, z) => () => (gorunur(kap) ? kap.localToWorld(V(x, y, z)) : null);
  const parca = {
    'ic-kapak': nk(gKapak, -1.0, 56, 58), 'ic-anakart': nk(gSabit, 17.0, 70.6, 12.5), 'ic-islemci': nk(gSabit, 15.8, CPU.y + 5.6, CPU.z),
    'ic-macun': nk(gMacun, 15.5, CPU.y - 3.8, CPU.z - 1.0), 'ic-hava': nk(gHava, -9.6, CPU.y + 7.6, -14.9), 'ic-isi-borusu': nk(gHava, -10.0, CPU.y - 1.4, -22.4),
    'ic-ram': nk(gRam, 8.3, 72, -6.1), 'ic-m2': nk(gSabit, 16.4, (M2.y0 + M2.y1) / 2, M2MZ), 'ic-sata-ssd': nk(gSabit, 16.4, 37.6, 31), 'ic-hdd': nk(gSabit, 12.6, 14.4, 22),
    'ic-gpu': nk(gSabit, GPU.x0 - 0.6, GPU.y - 3.0, 4), 'ic-psu': nk(gSabit, -3.5, 19.1, -28), 'ic-pompa': nk(gSivi, SIVI.pompaX0 - 0.15, CPU.y - 2.0, CPU.z + 1.5),
    'ic-radyator': nk(gSivi, -12.6, 87, -26), 'ic-hortum': nk(gSivi, 5.5, 72.9, 3), 'ic-fan-on': nk(gSabit, -12.5, ON_FAN[1], 39.7),
    'ic-fan-egzoz': nk(gEgzoz, -12.6, 87.1, -24), 'ic-fan-kule': nk(gHava, -2.0, CPU.y, -12.6), 'ic-wifi': nk(gSabit, 6.6, WIFI.y + 1.4, -38.1), 'ic-arka-panel': nk(gSabit, 2.9, 74.55, -42.3),
    // 24 pin kablo: güç kaynağından çıktığı kol (güç kaynağı adımının kutusunda kalır; kablo oradan anakarta yükselir)
    'ic-pil': nk(gSabit, 15.4, BIOS.y, BIOS.z), 'ic-kablo24': nk(gSabit, 8.0, 19.2, -3.0), 'ic-sata-kablo': nk(gSabit, 13.0, 20.5, 8.5),
    'ic-akis-giris': nk(gSabit, -11, 66, 30), 'ic-akis-cikis': nk(gSabit, -11, 94, -26), 'ic-wifi-arka': nk(kasa.grup, WIFI_ARKA.sma[0], WIFI_ARKA.y + 5.0, -45.4), 'ic-arka-gpu': nk(kasa.grup, GPU_ARKA.hdmi, GPU_ARKA.y + 1.0, -45.4),
    'ic-arka-hdmi': nk(kasa.grup, ARKA.hdmi.x, ARKA.hdmi.y + 1.4, -44.8), 'ic-arka-usb': nk(kasa.grup, 7.4, 76.6, -44.8), 'ic-arka-ag': nk(kasa.grup, ARKA.ag.x, ARKA.ag.y + 1.8, -44.8),
    'ic-arka-ses': nk(kasa.grup, -7.6, 76.3, -44.8),
    'ic-sivi-sicak': nk(gSivi, 6.6, 78.0, 16.2), 'ic-sivi-soguk': nk(gSivi, 4.9, 70.5, -5),
  };
  // keşif kutuları (dünya koordinatı [x, y, z, w, h, d]); vurgu ve kamera için
  const al = (x0, y0, z0, x1, y1, z1) => [KASA.x + (x0 + x1) / 2, (y0 + y1) / 2, KASA.z + (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0];
  const alanlar = {
    'ic-anakart': al(17.3, 30, -41.5, 18.5, 78.8, 19.5), 'ic-islemci': al(15.6, CPU.y - 5.2, CPU.z - 5, 18, CPU.y + 5.2, CPU.z + 5), 'ic-ram': al(8.5, RAM.y0 - 0.5, -10.5, 17.5, RAM.y1 + 0.2, -3.5),
    'ic-m2': al(16.8, M2.y0 - 0.2, M2.z0 - 0.3, 18, M2.y1 + 0.2, M2.z1 + 0.3), 'ic-sata-ssd': al(16.6, 26, 20.5, 19, 41, 41.5), 'ic-hdd': al(12.8, 2, 7, 19, 23.5, 37.5),
    'ic-gpu': al(GPU.x0 - 0.5, GPU.alt - 0.4, -42, GPU.x1 + 0.4, GPU.y + 0.9, 13.4), 'ic-psu': al(-18.6, 1.8, -42.3, 11.6, 19.1, -13.6), 'ic-pompa': al(SIVI.pompaX0 - 0.2, CPU.y - SIVI.pompaR - 0.2, CPU.z - SIVI.pompaR - 0.2, SIVI.pompaX1 + 0.2, CPU.y + SIVI.pompaR + 1.6, CPU.z + SIVI.pompaR + 0.2),
    'ic-radyator': al(-12.4, 84, -41.5, 12.4, 89.8, 13.5), 'ic-wifi': al(3, WIFI.y - 1.2, -41.4, 17.4, WIFI.y + 1.2, -34.8), 'ic-arka-panel': al(-12.6, 69.9, -43, 18.4, 79.2, -42),
  };

  // ---------------------------------------------------------------- yavaş kurulum: dokular, malzemeler, parçalar
  let atlas = null, matP, matM, matB, rotor = null, ok = null, filtre = null, hortumA = null, hortumB = null, pompaKapak = null, pompaMal = null, macunMesh = null;
  const rotorYuva = [];       // her kanat örneği: { fan, k }
  const fanDurum = FANLAR.map((f) => ({ ...f, aci: 0.7 * (f.m[0] + f.m[2] + 1) % 6.28, gor: true }));
  const hortumMal = [];
  const okYol = {};

  function hazirla() {
    if (D.hazir) return;
    const t0 = performance.now();
    atlas = atlasDokusu(aniz);
    matP = new MeshStandardMaterial({ map: atlas, vertexColors: true, roughness: 0.55, metalness: 0.05 });
    matM = new MeshStandardMaterial({ map: atlas, vertexColors: true, roughness: 0.36, metalness: 0.9 });
    matB = new MeshStandardMaterial({ vertexColors: true, roughness: 0.52, metalness: 0.32 });
    const mal = { p: matP, m: matM, b: matB };
    const olc = {};
    const olcum = (ad, f) => { const a = performance.now(); f(); olc[ad] = Math.round((performance.now() - a) * 10) / 10; };

    olcum('sabit', () => {
      const K = kume();
      kabukYap(K); kabukMetal(K); anakartYap(K); depoYap(K); guc(K); ekranKartiYap(K); wifiYap(K); arkaYap(K, ARKA); kabloYap(K); sabitFanlar(K);
      const m = kumeBitir(K, mal, gSabit);
      for (const a of ['p', 'm']) if (m[a]) { m[a].castShadow = true; m[a].receiveShadow = true; }
      if (m.b) { m.b.castShadow = false; m.b.receiveShadow = true; }
    });
    olcum('hava', () => {
      const K = kume(); havaYap(K); const m = kumeBitir(K, mal, gHava);
      for (const a of ['p', 'm']) if (m[a]) { m[a].castShadow = true; m[a].receiveShadow = true; }
      const K2 = kume(); egzozYap(K2); const m2 = kumeBitir(K2, mal, gEgzoz); if (m2.p) { m2.p.castShadow = true; m2.p.receiveShadow = true; }
    });
    olcum('ram', () => { const K = kume(); ramYap(K); const m = kumeBitir(K, mal, gRam); for (const a of ['p', 'm']) if (m[a]) { m[a].castShadow = true; m[a].receiveShadow = true; } });
    olcum('macun', () => { const K = kume(); macunYap(K); const m = kumeBitir(K, mal, gMacun); macunMesh = m.m; });
    olcum('sivi', () => {
      const K = kume(); pompaYap(K); radyatorYap(K); const m = kumeBitir(K, mal, gSivi);
      for (const a of ['p', 'm']) if (m[a]) { m[a].castShadow = true; m[a].receiveShadow = true; }
      pompaMal = new MeshStandardMaterial({ color: 0x12131a, roughness: 0.4, metalness: 0.2, emissive: 0x9b7bff, emissiveIntensity: 0 });
      pompaKapak = new Mesh(POMPA_KAPAK(), pompaMal); gSivi.add(pompaKapak);
      // iki hortum tek mesh ve tek malzeme (çizim çağrısı ve gölge çağrısı birer): akış okları dokunun iki renk bandından gelir.
      // Her hortumun uv'si kendi bandına (v) ve kendi uzunluğuna göre ok sayısına (u) çevrilir; ikisi aynı offset ile akar.
      const tex = hortumDokusu(['#ff8a3d', '#58b0ff'], aniz);
      const geolar = [HORTUM.A, HORTUM.B].map((nok, i) => {
        const { geo, egri } = boruGeo(nok, HORTUM_R, 80, 10, 0.4);
        const n = Math.max(2, Math.round(egri.getLength() / 6)), uv = geo.attributes.uv;
        for (let j = 0; j < uv.count; j++) uv.setXY(j, uv.getX(j) * n, (i === 0 ? 0.5 : 0) + uv.getY(j) * 0.5);
        // dokunma tüpü: eğrinin uçları (pompa ve radyatör bağlantısı) hariç orta kısmı
        const orta = new CatmullRomCurve3(egri.getSpacedPoints(40).slice(6, 35));
        hortumVekil[i].geometry.dispose(); hortumVekil[i].geometry = new TubeGeometry(orta, 30, HORTUM_VEKIL_R, 6, false);
        return geo;
      });
      // örgü kılıflı hortum: koyu gri ve hafif parlak (anakartın siyahından ayrılan, gerçekçi bir kılıf; ışıma yalnız çalışırken)
      const mm = new MeshStandardMaterial({ color: 0x4d525b, roughness: 0.42, metalness: 0.12, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0 });
      const me = new Mesh(mergeGeometries(geolar, false), mm); me.castShadow = true; me.receiveShadow = true; me.name = 'hortumlar'; gSivi.add(me);
      for (const g of geolar) g.dispose();
      hortumMal.push({ tex, mal: mm, ad: 'AB' });
    });
    olcum('filtre', () => {
      const tex = filtreDokusu(aniz); tex.repeat.set(35.2 / 6, 80 / 6);
      const pl = new PlaneGeometry(35.2, 80); pl.rotateX(-Math.PI / 2);
      // saydam karışım (alphaTest değil): deliklerden radyatör ve fanlar görünür; derinlik yazmaz, altındakini örtmez.
      // forceSinglePass: çift yüzlü saydam malzeme three.js'te iki çağrıyla çizilir; ince düzlemde sıralama gerekmez, tek çağrı
      filtre = new Mesh(pl, new MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, side: DoubleSide, forceSinglePass: true, roughness: 0.7, metalness: 0.3 }));
      filtre.position.set(0, 89.95, 0); filtre.name = 'toz-filtresi'; gSabit.add(filtre);
    });
    olcum('rotor', rotorKur);
    olcum('ok', okKur);
    D.hazir = true;
    icDokuSure.hazirla = Math.round((performance.now() - t0) * 10) / 10;
    Object.assign(icDokuSure, olc);
    Object.assign(D.ms, icDokuSure);
    goruntuGuncelle();
    fanMatrisleri();
  }

  // ---------------------------------------------------------------- fan kanatları (tek örnekli mesh)
  const KANAT = 7;
  function rotorKur() {
    const geo = new BoxGeometry(1, 3.2, 0.18); geo.translate(0.5, 0, 0); geo.rotateX(0.5);
    const mal = new MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.05, side: DoubleSide });
    rotor = new InstancedMesh(geo, mal, FANLAR.length * KANAT); rotor.frustumCulled = false; rotor.name = 'fan-kanatlari';
    fanDurum.forEach((f, i) => { for (let k = 0; k < KANAT; k++) rotor.setColorAt(i * KANAT + k, new Color(f.renk)); });
    rotor.instanceColor.needsUpdate = true;
    g.add(rotor);
  }
  const _o = new Object3D(), _qa = new Quaternion(), _qt = new Quaternion(), _v = new Vector3(), _z = V(0, 0, 1);
  const _ex = new Quaternion().setFromAxisAngle(V(1, 0, 0), -Math.PI / 2); // eksen y: yerel z -> dünya y
  function fanKonum(f) { // grubun kaymasını ekle (kule: kaldırmayla gider)
    const m = V(f.m[0], f.m[1], f.m[2]);
    if (f.grup === 'hava') m.add(gHava.position);
    return m;
  }
  function fanMatrisleri() {
    if (!rotor) return;
    fanDurum.forEach((f, i) => {
      const m = fanKonum(f);
      _qa.identity(); if (f.eksen === 'y') _qa.copy(_ex);
      for (let k = 0; k < KANAT; k++) {
        _qt.setFromAxisAngle(_z, f.aci + (k * Math.PI * 2) / KANAT); _o.quaternion.copy(_qa).multiply(_qt);
        _v.set(2.4, 0, 0).applyQuaternion(_o.quaternion); _o.position.copy(m).add(_v);
        const olcek = f.gor ? 1 : 0; _o.scale.set((f.r - 2.4) * olcek || 0.0001, olcek || 0.0001, olcek || 0.0001);
        _o.updateMatrix(); rotor.setMatrixAt(i * KANAT + k, _o.matrix);
      }
    });
    rotor.instanceMatrix.needsUpdate = true;
  }
  const fanGoruntuAyarla = () => {
    for (const f of fanDurum) f.gor = f.grup === 'sabit' || (f.grup === 'hava' && D.tur === 'hava') || (f.grup === 'egzoz' && D.tur === 'hava') || (f.grup === 'sivi' && D.tur === 'sivi');
  };

  // ---------------------------------------------------------------- hava akışı okları
  const NOK = 7;
  function okKur() {
    for (const tur of ['hava', 'sivi']) okYol[tur] = AKIS[tur].map((nk) => new CatmullRomCurve3(nk.map((p) => V(...p)), false, 'catmullrom', 0.3));
    const geo = new ConeGeometry(1.15, 4.4, 10); geo.translate(0, 2.2, 0);
    const mal = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.94, depthWrite: false });
    ok = new InstancedMesh(geo, mal, 3 * NOK); ok.frustumCulled = false; ok.renderOrder = 3; ok.name = 'hava-oklari'; ok.raycast = () => {};
    for (let i = 0; i < 3 * NOK; i++) ok.setColorAt(i, new Color(0x4da3ff));
    gAkis.add(ok);
  }
  const _c0 = new Color(0x3f9bff), _c1 = new Color(0xff7a2f), _cc = new Color(), _up = V(0, 1, 0), _tg = V(0, 0, 0), _pp = V(0, 0, 0);
  function okGuncelle(t) {
    if (!ok) return;
    const yollar = okYol[D.tur];
    for (let c = 0; c < 3; c++) for (let i = 0; i < NOK; i++) {
      const f = (i / NOK + t * 0.16 + c * 0.11) % 1;
      yollar[c].getPointAt(f, _pp); yollar[c].getTangentAt(f, _tg);
      _o.position.copy(_pp); _o.quaternion.setFromUnitVectors(_up, _tg);
      const gir = Math.min(1, f / 0.08), cik = Math.min(1, (1 - f) / 0.08), sc = ease(Math.min(gir, cik));
      _o.scale.set(sc, sc, sc); _o.updateMatrix(); ok.setMatrixAt(c * NOK + i, _o.matrix);
      const ik = Math.min(1, Math.max(0, (f - 0.38) / 0.4)); _cc.copy(_c0).lerp(_c1, ik); ok.setColorAt(c * NOK + i, _cc);
    }
    ok.instanceMatrix.needsUpdate = true; ok.instanceColor.needsUpdate = true;
  }

  // ---------------------------------------------------------------- durum ayarlayıcılar
  function goruntuGuncelle() {
    gHava.visible = D.tur === 'hava'; gEgzoz.visible = D.tur === 'hava'; gSivi.visible = D.tur === 'sivi';
    gMacun.visible = D.tur === 'hava' && D.kaldir > 0.35;
    gAkis.visible = D.calisiyor;
    fanGoruntuAyarla();
  }
  // k 0..1: 0 kapalı (gövde görünür, iç gizli), >0 açık
  function kapakAyarla(k) {
    D.kapak = k;
    const ac = k > 0.0005;
    if (ac !== D.acik) {
      D.acik = ac; govde.visible = !ac; g.visible = ac;
      if (ac) { hazirla(); goruntuGuncelle(); }
    }
    gKapak.rotation.y = -ease(k) * KAPAK_ACI;
    gKapak.updateMatrixWorld(true);
  }
  // soğutma türü: 'hava' | 'sivi' (aynı anda yalnız biri görünür)
  function turAyarla(tur) {
    D.tur = tur; if (tur !== 'hava') D.kaldir = 0;
    gHava.position.set(0, 0, 0); gMacun.visible = false;
    if (D.hazir) { goruntuGuncelle(); fanMatrisleri(); } else goruntuGuncelle();
  }
  // soğutucuyu kaldır: anakart dikey durduğu için "yukarı" kapak yönüdür (-x). Önce işlemciden kısa çekilir (macun görünür),
  // sonra aynı yönde açık yandan kasanın dışına kayar (tavana ve tavan fanına değmez), dışarıda biraz yükselip geriye alınır:
  // işlemcinin önünden çekilir, kamera kutusu (adimlar.js ic-islemci) son konumu da içerir.
  function kaldirAyarla(k) {
    D.kaldir = k;
    const a = ease(Math.min(1, k / 0.2)), b = ease(Math.min(1, Math.max(0, (k - 0.2) / 0.5))), c = ease(Math.max(0, (k - 0.7) / 0.3));
    gHava.position.set(-(a * KALDIR.cek + b * KALDIR.cik), c * KALDIR.yuk, -c * KALDIR.geri); gHava.updateMatrixWorld(true);
    gMacun.visible = D.tur === 'hava' && k > 0.35;
    if (D.hazir) fanMatrisleri();
  }
  function ramAyarla(k) {
    D.ram = k; gRam.position.set(-ease(k) * 17, ease(k) * 3, 0); gRam.updateMatrixWorld(true);
  }
  function calisiyorAyarla(a) {
    D.calisiyor = a; gAkis.visible = a && D.hazir;
    if (!a) {
      for (const h of hortumMal) h.mal.emissiveIntensity = 0;
      if (pompaMal) pompaMal.emissiveIntensity = 0;
    }
  }
  // her karede (yavaş güncelleyici): dt saniye, t saniye; döner true ise sürsün
  function kare(dt, t) {
    if (!D.hazir || !D.calisiyor) return false;
    for (const f of fanDurum) if (f.gor) f.aci += f.hiz * dt;
    fanMatrisleri(); okGuncelle(t);
    if (D.tur === 'sivi') {
      for (const h of hortumMal) { h.mal.emissiveIntensity = 1.35; h.tex.offset.x -= dt * 0.55; }
      if (pompaMal) pompaMal.emissiveIntensity = 0.75 + 0.35 * Math.sin(t * 5);
    }
    return true;
  }
  // çalışmayı durdurmadan tek kareyi yerleştir (hareketsiz tercihi): oklar ve hortum desenleri sabit
  function duragan() {
    if (!D.hazir) return;
    fanMatrisleri(); okGuncelle(0.25);
    if (D.tur === 'sivi') { for (const h of hortumMal) h.mal.emissiveIntensity = 1.35; if (pompaMal) pompaMal.emissiveIntensity = 0.9; }
  }
  function sifirla() {
    D.calisiyor = false; D.kaldir = 0; D.ram = 0;
    gHava.position.set(0, 0, 0); gRam.position.set(0, 0, 0); gMacun.visible = false; gAkis.visible = false;
    for (const f of fanDurum) f.aci = 0.7 * (f.m[0] + f.m[2] + 1) % 6.28;
    for (const h of hortumMal) { h.mal.emissiveIntensity = 0; h.tex.offset.x = 0; }
    if (pompaMal) pompaMal.emissiveIntensity = 0;
    if (D.hazir) { fanMatrisleri(); }
    gHava.updateMatrixWorld(true); gRam.updateMatrixWorld(true);
  }

  return {
    grup: g, kapak: gKapak, durum: D, kesif, vekiller, parca, alanlar, hazirla, kapakAyarla, turAyarla, kaldirAyarla, ramAyarla, calisiyorAyarla, kare, duragan, sifirla,
    gruplar: { sabit: gSabit, hava: gHava, egzoz: gEgzoz, sivi: gSivi, ram: gRam, macun: gMacun },
  };
}
