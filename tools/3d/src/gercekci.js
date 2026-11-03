// 3D Simülasyon Merkezi: Fiziksel görünüm orkestrası. Ahmet 01.11: "gerçek modda da sanaldaki gibi aynı şekilde
// olacak". Fiziksel, Sanal'daki AYNI sahnedir (aynı parça konumları, adımlar, kamera, keşif, etiketler, LED mantığı,
// Röntgen); her Sanal grubun altına ikinci bir kaplama (deri) eklenir, fark yalnız görünüştedir.
// Sanal güvenliği (TASARIM 1.8, 1.10): Sanal kipte hiçbir deri kurulmaz; kurulduktan sonra deri gruplarının
// görünürlüğü kapalıdır. Fiziksel kipte Sanal mesh'ler katman 2'ye park edilir (kamera 0'ı görür: çizilmez, gölge
// düşürmez), deri katman 0'da çizilir ve ışın seçimi deri yüzeyine çarpar; vekiller Sanal'ındır, aynen çalışır.
// Sanal'a dönüşte katman maskeleri ve ışık değerleri saklanan özgün değerlere BİREBİR geri yazılır.
// Sanal'ın malzemesine, geometrisine, gölge bayrağına, ışık sayısına ve çizici ayarına dokunulmaz.
import { AdditiveBlending } from 'three';
import { gorunumKur, ilkGorunum } from './gorunum.js';
import { saglayiciKur } from './gercekciDoku.js';
import { kartDerisiYap } from './gercekciKart.js';
import { bbDerisiYap } from './gercekciBB.js';
import { parcaDerisiYap } from './gercekciParca.js';

export const ARDUINO_LOGO = true; // Ahmet kararı 01.11: kartta logo, ARDUINO ve UNO yazısı (false: logosuz kart)
const PARK = 2;
// Işık ön ayarı (TASARIM 4.2): yeni ışık eklenmez, yalnız şiddetler ayarlanır. dusuk Sanal ile aynı.
const ISIK_ONAYAR = {
  yuksek: { env: 1.0, hemi: 0.28, gunes: 2.1, zemin: 0.26 },
  orta: { env: 0.95, hemi: 0.3, gunes: 2.2, zemin: 0.24 },
  dusuk: { env: 0.85, hemi: 0.35, gunes: 2.4, zemin: 0.2 },
};
const SARILI = Symbol('gercekci');
const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const SIRA = ['dusuk', 'orta', 'yuksek'];

// Kanca sarma: önce özgün işlev (Sanal davranışı aynen), sonra değer saklanır ve deri varsa ona da uygulanır.
function sar(nesne, ad, sonra) {
  const ozgun = nesne?.[ad];
  if (typeof ozgun !== 'function' || ozgun[SARILI]) return;
  const f = function (...a) { const r = ozgun.apply(this, a); sonra(...a); return r; };
  f[SARILI] = true;
  nesne[ad] = f;
}

// Düzey algılama (TASARIM 5.3, sadeleştirilmiş): ?fizduzey gizli geçersiz kılma; kayıt yalnız aşağı iner.
function duzeyAlgila(renderer, S) {
  const q = new URLSearchParams(location.search).get('fizduzey');
  if (SIRA.includes(q)) return { duzey: q, neden: ['adres'] };
  let tavan = 2; const neden = [];
  const sinir = (d, n) => { if (d < tavan) { tavan = d; neden.push(n); } };
  const kayit = SIRA.indexOf(oku('bote-3d-fizduzey')); if (kayit >= 0) sinir(kayit, 'kayit');
  let cizici = '';
  try { const gl = renderer.getContext(); const ext = gl.getExtension('WEBGL_debug_renderer_info'); cizici = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : ''; } catch (e) { /* gizli */ }
  const guclu = /nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple (m\d|gpu)|adreno.*(6[4-9]\d|[7-9]\d\d)|mali-g[789]|intel.*(arc|iris xe)/i.test(cizici);
  if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(cizici)) sinir(0, 'yazilim');
  if (/intel.*(hd|uhd) graphics|gma|radeon (r[2-5]|hd)|mali-(4|t)|adreno.*[2-5]\d\d|vivante|powervr/i.test(cizici)) sinir(1, 'zayif');
  const maxT = renderer.capabilities.maxTextureSize || 4096;
  if (maxT < 4096) sinir(0, 'doku-siniri'); else if (maxT < 8192) sinir(1, 'doku-siniri');
  const dm = navigator.deviceMemory; if (dm && dm <= 2) sinir(0, 'bellek'); else if (dm && dm <= 4) sinir(1, 'bellek');
  if ((navigator.hardwareConcurrency || 8) <= 2) sinir(1, 'cekirdek');
  if (innerWidth * innerHeight * (devicePixelRatio || 1) ** 2 >= 6e6 && !guclu) sinir(0, '4k');
  if (/iP(hone|ad|od)/.test(navigator.userAgent) || (/Mac/.test(navigator.platform) && navigator.maxTouchPoints > 1)) sinir(1, 'ios');
  if (!cizici) sinir(1, 'cizici-gizli');
  if (S.kalite().kademe > 0) sinir(Math.max(0, tavan - 1), 'kademe');
  if (tavan === 2 && !(guclu && maxT >= 16384 && (!dm || dm >= 8))) sinir(1, 'yuksek-sarti');
  return { duzey: SIRA[tavan], neden, cizici };
}

// Özgür Mod (03.11, Ahmet: "Fiziksel görünüm Özgür Mod'da da olsun"): parçalar sonradan takılır ve kaldırılır.
// parcaEkle / parcaCikar yalnız oradan çağrılır; ders sayfalarında parcalar baştan bellidir ve bu yol hiç işlemez.
// ornekler (isteğe bağlı): sahnede henüz olmayan parça türleri, deriler kurulurken gölgelendiricileri ısıtılsın diye.
export function gercekciBagla({ S, kart, bb, parcalar, ornekler = null }) {
  const son = { kart: {}, bb: {}, parca: {} };
  const durum = { duzey: null, neden: [], gorunum: 'sanal', hazir: false, istatistik: {} };
  let deri = null, ozgunIsik = null, isik = null;
  const parkli = [];
  const parcaPark = new Map(); // parça adı -> o parçanın park edilen Sanal mesh'leri (parça kaldırılınca listeden çıkar)
  const bekleyen = new Set();  // deriler kurulduktan sonra Sanal'dayken takılan parçalar: sonraki Fiziksel geçişte kurulur
  const ac = (yer, ad, deger) => { const f = yer?.kanca?.[ad]; if (f) f(deger); };

  // ---------------------------------------------------------- kancalar (Sanal'da yalnız durum saklanır)
  sar(kart, 'ledL', (v) => { son.kart.ledL = v; if (deri) ac(deri.kart, 'ledL', v); });
  sar(kart, 'ledOn', (v) => { son.kart.ledOn = v; if (deri) ac(deri.kart, 'ledOn', v); });
  sar(bb, 'rontgen', (v) => { son.bb.rontgen = v; if (deri) ac(deri.bb, 'rontgen', v); });
  // kaldırılmış bir parçanın eski nesnesi çağrılırsa (aynı adla yenisi takılmış olabilir) yeni parçanın derisine gitmez
  function kancaBagla(ad, p) {
    const s = son.parca[ad] = {};
    for (const k of ['ac', 'bacak', 'bas', 'buyut']) sar(p.nesne.userData, k, (v) => { s[k] = v; if (deri && parcalar[ad] === p) ac(deri.parca[ad], k, v); });
  }
  for (const [ad, p] of Object.entries(parcalar)) kancaBagla(ad, p);
  // park edilecek Sanal mesh'ler: deri eklenmeden ÖNCE toplanır. Toplamalı ışımalar, örnekli seçim kareleri ve
  // görünmez vekiller ortak katmandır, yerinde kalır. Sanal kartın örnekli SMD'leri (userData.park) park edilir.
  const topla = (kok, liste) => kok.traverse((o) => {
    if (!o.isMesh || (o.isInstancedMesh && !o.userData.park)) return;
    const m = o.material;
    if (!Array.isArray(m) && (m.visible === false || m.blending === AdditiveBlending)) return;
    liste.push({ o, mask: o.layers.mask });
  });
  // dokular ekran kartına önceden yüklenir (görüş alanına ilk giren parça dönüş sırasında takılmasın)
  const dokuIsit = (g) => g.traverse((o) => { if (o.isMesh) for (const m of [].concat(o.material)) for (const v of Object.values(m || {})) if (v?.isTexture) S.renderer.initTexture(v); });

  // ---------------------------------------------------------- kurma (tembel: ilk Fiziksel isteğinde, bir kez)
  function kur() {
    if (deri) return deri;
    const t0 = performance.now();
    const alg = duzeyAlgila(S.renderer, S);
    const sag = saglayiciKur(alg.duzey, S.renderer.capabilities.getMaxAnisotropy());
    // Deriler önce sahne dışında ve gizli kurulur; biri bile hata verirse sahneye hiçbir şey eklenmez,
    // hiçbir mesh park edilmez (Sanal olduğu gibi kalır) ve hata çağırana gider (fail closed: Sanal'a dönülür).
    const gizli = (x) => { if (x) x.grup.visible = false; return x; };
    let d;
    try {
      d = { sag, kart: gizli(kartDerisiYap(sag, { logo: ARDUINO_LOGO })), bb: gizli(bbDerisiYap(sag)), parca: {}, gruplar: [] };
      for (const [ad, p] of Object.entries(parcalar)) { const pd = gizli(parcaDerisiYap(sag, p.tur, p.nesne)); if (pd) d.parca[ad] = pd; }
    } catch (e) { try { sag.dispose(); } catch (e2) { /* yok */ } throw e; }
    // park edilecek Sanal mesh'ler (topla): deriler eklenmeden ÖNCE toplanır; parçalarınki ayrıca adıyla saklanır
    const liste = [];
    topla(kart.grup, liste); topla(bb.grup, liste);
    for (const [ad, p] of Object.entries(parcalar)) { const pk = []; topla(p.nesne, pk); parcaPark.set(ad, pk); liste.push(...pk); }
    bekleyen.clear();
    kart.grup.add(d.kart.grup); bb.grup.add(d.bb.grup); d.gruplar.push(d.kart.grup, d.bb.grup);
    for (const [ad, pd] of Object.entries(d.parca)) { parcalar[ad].nesne.add(pd.grup); d.gruplar.push(pd.grup); }
    parkli.push(...liste);
    durum.duzey = alg.duzey; durum.neden = alg.neden;
    deri = d;
    // saklanan son kanca değerleri deriye oynatılır
    if ('ledL' in son.kart) ac(d.kart, 'ledL', son.kart.ledL);
    if ('ledOn' in son.kart) ac(d.kart, 'ledOn', son.kart.ledOn);
    if ('rontgen' in son.bb) ac(d.bb, 'rontgen', son.bb.rontgen);
    for (const [ad, deg] of Object.entries(son.parca)) for (const [k, v] of Object.entries(deg)) ac(d.parca[ad], k, v);
    // ışıklar: sahne.js dışa açmıyor, tek geçişle bulunur
    isik = {};
    S.scene.traverse((o) => { if (o.isHemisphereLight) isik.hemi = o; else if (o.isDirectionalLight) isik.gunes = o; else if (o.isMesh && o.material?.isShadowMaterial) isik.zemin = o; });
    let ucgen = 0;
    for (const g of d.gruplar) g.traverse((o) => { if (o.isMesh && o.geometry) ucgen += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3 * (o.isInstancedMesh ? o.count : 1); });
    durum.istatistik = { kurmaMs: Math.round(performance.now() - t0), ucgen: Math.round(ucgen), park: parkli.length };
    // ısınma (02.11): gölgelendiriciler ve dokular kurulurken hazırlanır; yoksa görüş alanına ilk kez giren parça
    // dönüş sırasında bir kare takılır (ölçüm: tahta boyutunda bir kez 367 ms)
    try {
      S.renderer.compile(S.scene, S.camera);
      for (const g of d.gruplar) dokuIsit(g);
    } catch (e) { console.warn('Fiziksel ısınma atlandı', e); }
    // Özgür Mod: sahnede olmayan parça türlerinin derileri de bir kez kurulup derlenir; ilk takılan LED ya da direnç
    // sırasında yeni gölgelendirici derlenip sahne takılmasın. Örneklerin malzemeleri BOŞALTILMAZ (sağlayıcının kaydında
    // kalır, sağlayıcıyla gider): boşaltılan malzemenin gölgelendiricisini three.js siler; ölçüm 03.11: açılışta 3 program
    // silindi, Sıfırla sonrası ilk LED yeniden derledi. Geometri sahneye hiç girmediği için hemen boşaltılır.
    // Bu ısınma ilk kareden önce de çalışır (adresle ya da kayıtlı tercihle Fiziksel açılış); doğru programı üretmesi
    // sahne.js'teki gölge türüne bağlı (PCFShadowMap; PCFSoft iken bu yolda programlar BASIC derleniyor, Sıfırla/Geri al
    // döngüsü başına 1 program yeniden bağlanıyordu).
    if (ornekler) {
      try {
        for (const o of ornekler()) {
          try { const pd = parcaDerisiYap(sag, o.tur, o.nesne); if (pd) { S.renderer.compile(pd.grup, S.camera, S.scene); dokuIsit(pd.grup); pd.grup.traverse((x) => x.geometry?.dispose()); } } finally { o.at?.(); }
        }
      } catch (e) { console.warn('Fiziksel parça ısınması atlandı', e); }
    }
    durum.hazir = true;
    if (new URLSearchParams(location.search).has('olcum')) console.info('Fiziksel görünüm', durum);
    return d;
  }

  // ---------------------------------------------------------- Özgür Mod: sonradan takılan ve kaldırılan parçalar
  // Deri yalnız Fiziksel açıkken kurulur; kurulamazsa o parça Sanal görünüşüyle kalır (park edilmez), ötekiler etkilenmez.
  function parcaDeriKur(ad) {
    bekleyen.delete(ad);
    const p = parcalar[ad];
    if (!p || !deri || deri.parca[ad]) return;
    let pd = null;
    try { pd = parcaDerisiYap(deri.sag, p.tur, p.nesne); } catch (e) { console.warn('Fiziksel parça kurulamadı', ad, e); return; }
    if (!pd) return;
    const f = durum.gorunum === 'fiziksel', pk = [];
    topla(p.nesne, pk);
    parcaPark.set(ad, pk); parkli.push(...pk);
    if (f) for (const { o } of pk) o.layers.set(PARK);
    pd.grup.visible = f;
    p.nesne.add(pd.grup); deri.gruplar.push(pd.grup); deri.parca[ad] = pd;
    for (const [k, v] of Object.entries(son.parca[ad] || {})) ac(pd, k, v);
    try { S.renderer.compile(pd.grup, S.camera, S.scene); dokuIsit(pd.grup); } catch (e) { /* ilk çizimde derlenir */ }
  }
  function parcaEkle(ad, p) {
    if (parcalar[ad]) parcaCikar(ad);
    parcalar[ad] = p;
    kancaBagla(ad, p);
    if (!deri) return; // deriler hiç kurulmadı: ilk Fiziksel geçişte hepsiyle birlikte kurulur
    if (durum.gorunum === 'fiziksel') { parcaDeriKur(ad); S.iste(); } else bekleyen.add(ad);
  }
  // Parçayı kaldırmadan ÖNCE çağrılır: deri Sanal nesneden ayrılır ve boşaltılır (paylaşılan malzemeler kalır);
  // böylece çağıranın Sanal nesneyi boşaltması deriye ve ortak malzemelere dokunmaz.
  function parcaCikar(ad) {
    if (!parcalar[ad]) return;
    delete parcalar[ad]; delete son.parca[ad]; bekleyen.delete(ad);
    const pk = parcaPark.get(ad);
    if (pk) {
      parcaPark.delete(ad);
      const s = new Set(pk);
      for (const { o, mask } of pk) o.layers.mask = mask;
      for (let i = parkli.length - 1; i >= 0; i--) if (s.has(parkli[i])) parkli.splice(i, 1);
    }
    const pd = deri?.parca[ad];
    if (!pd) return;
    delete deri.parca[ad];
    pd.grup.removeFromParent();
    const i = deri.gruplar.indexOf(pd.grup); if (i >= 0) deri.gruplar.splice(i, 1);
    deri.sag.birak(pd.grup);
  }

  function isikUygula(f) {
    if (!isik) return;
    if (!ozgunIsik) ozgunIsik = { env: S.scene.environmentIntensity, hemi: isik.hemi?.intensity, gunes: isik.gunes?.intensity, zemin: isik.zemin?.material.opacity };
    const v = f ? ISIK_ONAYAR[durum.duzey] : ozgunIsik;
    S.scene.environmentIntensity = v.env;
    if (isik.hemi) isik.hemi.intensity = v.hemi;
    if (isik.gunes) isik.gunes.intensity = v.gunes;
    if (isik.zemin) isik.zemin.material.opacity = v.zemin;
  }

  function kipUygula(ad) {
    const f = ad === 'fiziksel';
    if (f) { kur(); for (const x of [...bekleyen]) parcaDeriKur(x); }
    if (!deri) return;
    for (const { o, mask } of parkli) { if (f) o.layers.set(PARK); else o.layers.mask = mask; }
    for (const g of deri.gruplar) g.visible = f;
    isikUygula(f);
    durum.gorunum = ad;
    S.golgeYenile();
    S.iste();
  }

  const G = gorunumKur(async (ad) => {
    if (ad === 'fiziksel' && !deri) {
      await new Promise((r) => setTimeout(r, 30)); // düğmenin meşgul hâli boyansın
      // bu 30 ms içinde Sanal'a basıldıysa (denetim 03.11: sahne Fiziksel kalıyor, düğme Sanal gösteriyordu) kurulmaz
      if (G.istenen() !== ad) return;
    }
    kipUygula(ad);
  });
  // adresle ya da kayıtlı tercihle Fiziksel açılış: ilk kare Sanal çizilmeden, aynı görevde kurulur
  if (ilkGorunum() === 'fiziksel') {
    try { kipUygula('fiziksel'); G.ayarla('fiziksel', { kaydet: false, sessiz: true }); } catch (e) {
      console.warn('Fiziksel görünüm açılamadı, Sanal görünümde devam ediliyor', e);
      G.ayarla('sanal', { kaydet: true, sessiz: true });
    }
  }

  return {
    // deriParca ve park: deneme betikleri için (parça kaldırılınca derisi ve park kaydı da gitmeli)
    durum: () => ({ ...durum, deriParca: deri ? Object.keys(deri.parca).length : 0, park: parkli.length }),
    gorunum: (ad) => G.ayarla(ad),
    kipUygula, parcaEkle, parcaCikar,
  };
}
