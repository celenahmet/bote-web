// 3D sahne çekirdeği: çizici, kamera, yörünge denetimi, istek üzerine çizim, uyarlanır kalite,
// dokunarak seçme, kamera geçişi (kutuya sığdırma), ekran etiketleri ve keşif işaretleri.
//
// Görüntü (Ahmet 01.11: "HD ve gerçekçi") ile akıcılık ("kasmamalı") birlikte:
// - Fiziksel malzeme + ortam yansıması (oda ortamı) + yumuşak gölge + doğal ton eşleme.
// - Sahne yalnız bir şey değişince çizilir; boşta hiç kare çizilmez. Gölge haritası yalnız parça
//   hareket edince yeniden hesaplanır (kamera dönerken gölge maliyeti yok).
// - Hareket sırasında kare aralığı ekranın kendi hızıyla karşılaştırılır; kare kaçırılıyorsa
//   çözünürlük kademe kademe düşer. Hareket bitince tam çözünürlükte keskin bir kare çizilir.
import {
  WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, HemisphereLight, Color, Mesh, PlaneGeometry, ShadowMaterial,
  Vector3, Vector2, Raycaster, SRGBColorSpace, NeutralToneMapping, PCFSoftShadowMap, PMREMGenerator, Box3, AdditiveBlending,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const HEDEF_PIKSEL = 4.2e6; // ~2560x1600: Full HD'nin üstü; 4K tahtada 0,7 ölçek
const KADEME = [1, 0.8, 0.65, 0.5]; // yavaşlıkta inilen çözünürlük kademeleri
// Azaltılmış hareket: tarayıcı tercihi ya da erişilebilirlik ayarındaki "Hareketi durdur" (src/erisilebilirlik.js, <html data-e-hareketsiz>)
const azHareket = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.hasAttribute('data-e-hareketsiz');
const yumusak = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// guvenliAlan: () => ({ ust, alt, sol, sag }) tuval kenarlarından px; sahnedeki düğme şeritleri, ipucu ve telefonda
// kart sayfası dışarıda kalsın diye kadraj bu dikdörtgene yapılır.
export function sahneKur(canvas, { arkaPlan = '#e9e5f1', olay = () => {}, guvenliAlan = null } = {}) {
  const dpr = window.devicePixelRatio || 1;
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, stencil: false, powerPreference: 'high-performance' });
  } catch (e) {
    return null;
  }
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.setClearColor(new Color(arkaPlan), 1);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.85;
  pmrem.dispose();
  const camera = new PerspectiveCamera(32, 1, 4, 1500);
  camera.position.set(0, 160, 150);
  scene.add(new HemisphereLight(0xffffff, 0xcfc6dc, 0.35));
  const gunes = new DirectionalLight(0xffffff, 2.4);
  gunes.position.set(-55, 150, 85);
  gunes.castShadow = true;
  gunes.shadow.mapSize.set(2048, 2048);
  Object.assign(gunes.shadow.camera, { left: -115, right: 115, top: 115, bottom: -115, near: 20, far: 420 });
  gunes.shadow.bias = -0.0004;
  gunes.shadow.normalBias = 0.25;
  scene.add(gunes);
  const zemin = new Mesh(new PlaneGeometry(900, 900), new ShadowMaterial({ opacity: 0.2 }));
  zemin.rotation.x = -Math.PI / 2; zemin.receiveShadow = true;
  scene.add(zemin);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = !document.documentElement.hasAttribute('data-e-hareketsiz'); // süzülme de harekettir
  controls.dampingFactor = 0.14;
  controls.rotateSpeed = 0.75;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.8;
  controls.screenSpacePanning = true;
  // Ahmet 01.11: pin inceleyecek kadar yaklaşılabilsin; kaydırma sahnede kalsın ama kısıtlamasın.
  // Üst sınır dar dikey telefonda bile tüm sahne sığacak kadar (390 px genişlikte genel görünüm ~600 birim ister).
  controls.minDistance = 9;
  controls.maxDistance = 1200;
  controls.minPolarAngle = 0.06;
  controls.maxPolarAngle = 1.32; // masanın altına inmesin
  controls.zoomToCursor = true; // tekerlek ve iki parmakla nereye yaklaşılırsa oraya
  controls.cursor.set(0, 6, -3); controls.maxTargetRadius = 85; // dönme merkezi sahnenin dışına kaçmasın
  controls.target.set(0, 4, 0);
  // Yakın düzlem uzaklığa göre: pin yakın çekiminde kırpılmasın, uzakta derinlik hassasiyeti korunsun.
  function yakinDuzlem() {
    const d = camera.position.distanceTo(controls.target);
    const yakin = Math.min(4, Math.max(0.4, d * 0.04));
    if (Math.abs(yakin - camera.near) > yakin * 0.08) { camera.near = yakin; camera.far = Math.max(900, d * 6); camera.updateProjectionMatrix(); }
  }

  // ---------------------------------------------------------------- çizim döngüsü
  let raf = 0, zaman = 0, kullaniciOynatti = false, golgeKirli = true;
  const kareGuncelleyiciler = new Set();
  const yavasGuncelleyiciler = new Set(); // 30 kare/sn yeter (akım noktaları)
  const etiketler = [];
  const tweenler = new Set();
  let tamOlcek = 1, kademe = 0, simdikiOlcek = 0, sonKare = 0, sonYavas = 0, araliklar = [], hizliSayac = 0, sonAyar = 0, keskinZaman = 0;

  function iste() { if (!raf && !zaman) raf = requestAnimationFrame(kare); }
  function yavasIste() { if (!raf && !zaman) zaman = setTimeout(() => { zaman = 0; iste(); }, 33); }
  function olcekUygula(o) {
    if (Math.abs(o - simdikiOlcek) < 0.01) return;
    simdikiOlcek = o;
    renderer.setPixelRatio(o);
    renderer.setSize(canvas.clientWidth || 1, canvas.clientHeight || 1, false);
  }

  function kare(t) {
    raf = 0;
    let hareket = controls.update();
    for (const tw of tweenler) {
      const k = Math.min(1, (t - (tw.bas ??= t)) / tw.sure);
      tw.adim(yumusak(k));
      if (tw.golge) golgeKirli = true;
      if (k >= 1) { tweenler.delete(tw); tw.bitti?.(); } else hareket = true;
    }
    for (const g of kareGuncelleyiciler) if (g(t)) hareket = true;
    let yavas = false;
    for (const g of yavasGuncelleyiciler) if (g(t, sonYavas ? Math.min(100, t - sonYavas) : 33)) yavas = true;
    sonYavas = yavas ? t : 0;
    const surekli = hareket || yavas;
    clearTimeout(keskinZaman);
    yakinDuzlem();
    olcekUygula(tamOlcek * KADEME[kademe]);
    if (golgeKirli) { renderer.shadowMap.needsUpdate = true; golgeKirli = false; }
    renderer.render(scene, camera);
    etiketleriYerlestir();
    if (hareket) olc(t); else { sonKare = 0; araliklar = []; }
    if (hareket) iste(); else if (yavas) yavasIste();
    // hareket bitti: çözünürlük düşürülmüşse kısa bir bekleyişten sonra tam çözünürlükte keskin kare
    if (!surekli && kademe > 0) keskinZaman = setTimeout(() => { olcekUygula(tamOlcek); renderer.render(scene, camera); etiketleriYerlestir(); }, 300);
  }

  // Uyarlanır kalite: hareket sırasında 24 karelik ortalama aralık 26 ms'yi (~38 kare/sn) aşarsa bir kademe
  // inilir; üç pencere boyunca 19 ms'nin altındaysa bir kademe çıkılır. 120 Hz ekranda 60 kare/sn yeterli sayılır.
  // Çok yavaş cihazda 24 kare saniyeler sürer (02.11 ölçüm, 4K tahta yazılım çizici: ilk iniş 2,8 sn, en alt
  // kademe 6,3 sn). En az 6 aralık 450 ms'yi doldurmuş ve ortanca aralık 50 ms'yi aşmışsa pencere erken kapanır;
  // ortanca bakıldığı için tek seferlik bir takılma erken inişi tetiklemez.
  function olc(t) {
    if (sonKare) araliklar.push(t - sonKare);
    sonKare = t;
    const n = araliklar.length;
    const toplam = araliklar.reduce((x, y) => x + y, 0);
    const erken = n >= 6 && n < 24 && toplam >= 450 && [...araliklar].sort((x, y) => x - y)[n >> 1] > 50;
    if (n < 24 && !erken) return;
    const ort = toplam / n;
    araliklar = [];
    if (t - sonAyar < (erken ? 300 : 500)) return;
    if (ort > 26 && kademe < KADEME.length - 1) { kademe++; hizliSayac = 0; sonAyar = t; olay('kalite', kademe); }
    else if (ort < 19 && kademe > 0 && ++hizliSayac >= 3) { kademe--; hizliSayac = 0; sonAyar = t; }
  }

  function boyutla() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    tamOlcek = Math.max(0.5, Math.min(dpr, 2, Math.sqrt(HEDEF_PIKSEL / (w * h))));
    simdikiOlcek = 0;
    olcekUygula(tamOlcek * KADEME[kademe]);
    camera.aspect = w / h;
    goruntuKaydir();
    for (const e of etiketler) e.w = 0;
    isaretBoyu = 0; guvenli = null;
    if (!kullaniciOynatti && sonHedef) kameraGit(sonHedef, true);
    iste();
  }
  // Boyut değişimi (panel açılıp kapanırken, kenar sürüklenirken) her karede değil, durunca bir kez
  // uygulanır: çizim tamponunu her karede yeniden ayırmak zayıf ekran kartında takılma yapar.
  // Sürüklerken (kenar, reosta) en çok 125 ms'de bir de uygulanır: durmayı beklemek sahneyi uzun süre esnetiyordu
  // (Ahmet 02.11: "Arduino genişleyip eski haline dönüyor"); saniyede 8 tampon ayırma zayıf kartta da taşınır.
  let boyutZaman = 0, sonBoyut = 0;
  const ro = new ResizeObserver(() => {
    clearTimeout(boyutZaman);
    const t = performance.now();
    if (document.documentElement.dataset.suruklenen && t - sonBoyut > 125) { sonBoyut = t; boyutla(); return; }
    boyutZaman = setTimeout(() => { sonBoyut = performance.now(); boyutla(); }, 110);
  });
  ro.observe(canvas);
  // Erişilebilirlik ayarı değişti (src/erisilebilirlik.js bildirir): süzülme açılır ya da kapanır; yazı boyutu, aralık ve
  // yazı tipi etiketleri büyütüp küçültür, bu yüzden genişlikleri yeniden ölçülür. Sahne bir kez çizilir, sürekli döngü açılmaz.
  window.addEventListener('bote-erisim', () => {
    controls.enableDamping = !document.documentElement.hasAttribute('data-e-hareketsiz');
    for (const e of etiketler) e.w = 0;
    iste();
  });

  // Telefonda kart sayfası sahnenin altını örter: görünür bölgenin ortası hedeflenir (görüş kaydırma),
  // sığdırma görünür yüksekliğe göre yapılır. Yalnız izdüşüm değişir, tuval boyutu değişmez (ucuz).
  let altBosluk = 0;
  function goruntuKaydir() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    if (altBosluk > 0) camera.setViewOffset(w, h, 0, Math.min(altBosluk, h * 0.9) / 2, w, h); else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  }
  function gorunurAlan(alt, anlik = false) {
    altBosluk = Math.max(0, alt || 0);
    guvenli = null;
    goruntuKaydir();
    if (!kullaniciOynatti && sonHedef) kameraGit(sonHedef, anlik); else iste();
  }

  controls.addEventListener('change', iste);
  controls.addEventListener('start', () => { kullaniciOynatti = true; olay('kamera-elle'); });

  // ---------------------------------------------------------------- kamera geçişi: kutuya sığdırma
  // Ahmet 01.11: "üstten görünüşler biraz şaşabiliyor, ekrana tam sığmıyorlar ya da boşluklar dengesiz kalıyor".
  // hedef: { kutu: Box3 ya da [x0,y0,z0,x1,y1,z1], yon }. Kutunun 8 köşesi kamera uzayında iki eksende güvenli
  // dikdörtgene (kenar payı, düğme şeritleri ve telefonda kart sayfası dışarıda) tam sığdırılır: önce en küçük
  // uzaklık (köşe çiftleri üzerinden doğrusal sınır), sonra iki yandaki boşluk eşit olsun diye yana kaydırma.
  let sonHedef = null;
  const UST_YON = new Vector3(0, 1, 0), _R = new Vector3(), _U = new Vector3(), _F = new Vector3(), _o = new Vector3(), _k = new Vector3();
  const kutuyaCevir = (k) => (k.isBox3 ? k : new Box3(new Vector3(k[0], k[1], k[2]), new Vector3(k[3], k[4], k[5])));
  function guvenliDikdortgen(w, h) {
    const p = guvenliAlan?.() || {};
    const gorAlt = Math.min(altBosluk, h * 0.9);
    let x0 = p.sol ?? 16, x1 = w - (p.sag ?? 16), y0 = p.ust ?? 16, y1 = h - Math.max(p.alt ?? 16, gorAlt + 12);
    if (x1 - x0 < 80) { const m = w / 2; x0 = m - 40; x1 = m + 40; }
    if (y1 - y0 < 80) { const m = (Math.max(0, y0) + Math.max(y0 + 80, y1)) / 2; y0 = m - 40; y1 = m + 40; }
    return { x0, y0, x1, y1, engel: p.engel || [] };
  }
  function kadrajHesapla(kutuGirdi, yonDizi) {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    const kutu = kutuyaCevir(kutuGirdi), yon = new Vector3(...yonDizi).normalize();
    // kamera tabanı (lookAt ile aynı): x = yukarı × z, y = z × x; F bakış yönü
    _R.crossVectors(UST_YON, yon).normalize(); _U.crossVectors(yon, _R); _F.copy(yon).negate();
    const g = (guvenli = guvenliDikdortgen(w, h));
    const tanV = Math.tan((camera.fov * Math.PI) / 360), tanH = tanV * (w / h);
    const ofs = Math.min(altBosluk, h * 0.9) / h; // görüş kaydırmasının NDC'deki karşılığı
    const A0 = ((g.x0 / w) * 2 - 1) * tanH, A1 = ((g.x1 / w) * 2 - 1) * tanH;
    const B1 = (1 - (g.y0 / h) * 2 - ofs) * tanV, B0 = (1 - (g.y1 / h) * 2 - ofs) * tanV;
    kutu.getCenter(_o);
    const xs = [], ys = [], fs = [];
    for (let i = 0; i < 8; i++) {
      _k.set(i & 1 ? kutu.max.x : kutu.min.x, i & 2 ? kutu.max.y : kutu.min.y, i & 4 ? kutu.max.z : kutu.min.z).sub(_o);
      xs.push(_k.dot(_R)); ys.push(_k.dot(_U)); fs.push(_k.dot(_F));
    }
    // köşe i sağ (üst) sınıra, köşe j sol (alt) sınıra değerken gereken en küçük uzaklık
    let t = 0;
    for (let i = 0; i < 8; i++) {
      t = Math.max(t, 2 - fs[i]); // her köşe kameranın önünde
      for (let j = 0; j < 8; j++) t = Math.max(t, (xs[i] - xs[j] - A1 * fs[i] + A0 * fs[j]) / (A1 - A0), (ys[i] - ys[j] - B1 * fs[i] + B0 * fs[j]) / (B1 - B0));
    }
    t = Math.min(controls.maxDistance, Math.max(controls.minDistance, t));
    // yana kaydırma: iki yandaki boşluk (tan uzayında, dolayısıyla pikselde) eşit olana dek ikiye bölme
    const ortala = (vs, a0, a1) => {
      let lo = -Infinity, hi = Infinity;
      for (let i = 0; i < 8; i++) { lo = Math.max(lo, vs[i] - a1 * (fs[i] + t)); hi = Math.min(hi, vs[i] - a0 * (fs[i] + t)); }
      if (!(hi > lo)) return (lo + hi) / 2;
      const fark = (q) => { let mx = -Infinity, mn = Infinity; for (let i = 0; i < 8; i++) { const a = (vs[i] - q) / (fs[i] + t); if (a > mx) mx = a; if (a < mn) mn = a; } return (a1 - mx) - (mn - a0); };
      for (let n = 0; n < 32; n++) { const m = (lo + hi) / 2; if (fark(m) > 0) hi = m; else lo = m; }
      return (lo + hi) / 2;
    };
    const px = ortala(xs, A0, A1), py = ortala(ys, B0, B1);
    const merkez = _o.clone().addScaledVector(_R, px).addScaledVector(_U, py);
    return { merkez, konum: merkez.clone().addScaledVector(yon, t) };
  }
  function kameraGit(hd, anlik = false) {
    sonHedef = hd;
    kullaniciOynatti = false;
    const { merkez, konum: hedefKonum } = kadrajHesapla(hd.kutu, hd.yon);
    if (anlik || azHareket()) {
      camera.position.copy(hedefKonum); controls.target.copy(merkez); controls.update(); iste(); return Promise.resolve();
    }
    const p0 = camera.position.clone(), t0 = controls.target.clone();
    controls.enabled = false;
    return tween(650, (k) => {
      camera.position.lerpVectors(p0, hedefKonum, k);
      controls.target.lerpVectors(t0, merkez, k);
      camera.lookAt(controls.target);
    }).then(() => { controls.enabled = true; controls.update(); });
  }
  // Ölçüm: son hedefin kutusu ekranda nereye düştü (px) ve güvenli dikdörtgen
  function kadrajOlc() {
    if (!sonHedef) return null;
    camera.updateMatrixWorld(); // kamera az önce taşındıysa dünya matrisi henüz çizimde yenilenmemiş olabilir
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1, k = kutuyaCevir(sonHedef.kutu);
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i < 8; i++) {
      _k.set(i & 1 ? k.max.x : k.min.x, i & 2 ? k.max.y : k.min.y, i & 4 ? k.max.z : k.min.z).project(camera);
      const x = ((_k.x + 1) / 2) * w, y = ((1 - _k.y) / 2) * h;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
    return { kutu: { x0, y0, x1, y1 }, guvenli: guvenliDikdortgen(w, h), w, h };
  }

  // golge: true ise geçiş boyunca gölge haritası yenilenir (parça hareketi)
  function tween(sure, adim, golge = false) {
    if (azHareket()) { adim(1); if (golge) golgeKirli = true; iste(); return Promise.resolve(); }
    return new Promise((bitti) => { tweenler.add({ sure, adim, bitti, golge }); iste(); });
  }

  // ---------------------------------------------------------------- ekran etiketleri ve keşif işaretleri
  // Etiketler çakışmasın diye kademelenir; her etiket ince bir çizgiyle işaret ettiği noktaya bağlanır
  // (Ahmet 01.11: "GND gibi yan yana olanlar okunmuyor, ferah olsun").
  const etiketKatmani = canvas.parentElement.querySelector('.etiketler');
  // Keşif işaretleri düğmedir: ekran okuyucudan gizlenen etiket katmanında değil, kendi katmanında durur.
  const isaretKatmani = canvas.parentElement.querySelector('.isaretler') || etiketKatmani;
  const SVGNS = 'http://www.w3.org/2000/svg';
  const cizgiler = document.createElementNS(SVGNS, 'svg');
  cizgiler.setAttribute('class', 'cizgiler'); cizgiler.setAttribute('aria-hidden', 'true');
  etiketKatmani.appendChild(cizgiler);
  const isaretler = [];
  let isaretSira = [], isaretBoyu = 0, guvenli = null;
  const gecici = new Vector3(), _w = new Vector3(), _c = new Vector3();
  const ustGorunur = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
  function etiketKoy(liste) {
    for (const e of etiketler) { e.el.remove(); e.cizgi.remove(); e.nokt.remove(); }
    etiketler.length = 0;
    for (const { nokta, metin, tur } of liste) {
      const el = document.createElement('div');
      el.className = 'etiket' + (tur ? ` etiket-${tur}` : '');
      el.textContent = metin;
      etiketKatmani.appendChild(el);
      const cizgi = document.createElementNS(SVGNS, 'line'), nokt = document.createElementNS(SVGNS, 'circle');
      nokt.setAttribute('r', '4.5'); cizgiler.append(cizgi, nokt);
      etiketler.push({ el, nokta, cizgi, nokt, w: 0, h: 0 });
    }
    iste();
  }
  // liste: [{ el, nokta } ya da { el, nesne, yerel }, oncelik, adim]. nesne verilirse işaret parçayla birlikte
  // hareket eder ve parça gizliyken görünmez. adim (mm): ekranda bu aralık işaret boyundan küçükken gizli (pinler).
  function isaretKoy(liste) {
    for (const i of isaretler) i.el.remove();
    isaretler.length = 0;
    for (const x of liste) { x.el.hidden = true; isaretKatmani.appendChild(x.el); isaretler.push({ ...x, acik: false }); }
    isaretSira = isaretler.map((x, i) => [x, i]).sort((a, b) => (b[0].oncelik ?? 1) - (a[0].oncelik ?? 1) || a[1] - b[1]).map(([x]) => x);
    isaretBoyu = 0; guvenli = null;
    iste();
  }
  // İşaretler dokunmayı yakalamaz (stil.css: pointer-events:none): iki parmak hareketi bir işaretin üstünde
  // başlasa da sahneye gider, tarayıcı sayfayı büyütmez. Kısa dokunuşun altında görünen işaret varsa o açılır.
  // Klavye ve ekran okuyucu için işaretler yine düğmedir.
  function isaretBul(x, y) {
    for (let i = isaretler.length - 1; i >= 0; i--) {
      const el = isaretler[i].el;
      if (el.hidden) continue;
      const r = el.getBoundingClientRect(), yari = r.width / 2;
      if (yari && Math.hypot(x - r.left - yari, y - r.top - r.height / 2) <= yari + 2) return el;
    }
    return null;
  }
  // Ahmet 01.11: "üst üste binen işaretler okunmuyor". Öncelik sırasıyla yerleştirilir; ekranda daha önce
  // yerleşmiş bir işaretle çakışan gizlenir, yaklaştıkça yer açılınca görünür. Odaktaki işaret hep görünür.
  function isaretleriYerlestir(w, h) {
    if (!isaretler.length) return;
    if (!isaretBoyu) isaretBoyu = parseFloat(getComputedStyle(isaretKatmani).getPropertyValue('--isaret')) || 44;
    const g = guvenli || (guvenli = guvenliDikdortgen(w, h));
    const S = isaretBoyu + 4, yer = [], odak = document.activeElement;
    const tanV = Math.tan((camera.fov * Math.PI) / 360);
    const sira = isaretler.some((i) => i.el === odak) ? [...isaretSira].sort((a, b) => (b.el === odak) - (a.el === odak)) : isaretSira;
    for (const i of sira) {
      let goster = false, x = 0, y = 0;
      if (!i.nesne || ustGorunur(i.nesne)) {
        if (i.nesne) _w.copy(i.yerel).applyMatrix4(i.nesne.matrixWorld); else _w.copy(i.nokta);
        _c.copy(_w).applyMatrix4(camera.matrixWorldInverse);
        if (_c.z < -camera.near) {
          gecici.copy(_w).project(camera);
          x = ((gecici.x + 1) / 2) * w; y = ((1 - gecici.y) / 2) * h;
          goster = x >= g.x0 && x <= g.x1 && y >= g.y0 && y <= g.y1 && !g.engel.some((r) => x > r.x0 - S / 2 && x < r.x1 + S / 2 && y > r.y0 - S / 2 && y < r.y1 + S / 2);
          if (goster && i.adim) goster = (i.adim * h) / (2 * -_c.z * tanV) >= isaretBoyu;
          if (goster && i.el !== odak) goster = !yer.some((p) => Math.abs(p.x - x) < S && Math.abs(p.y - y) < S);
        }
      }
      if (goster) { yer.push({ x, y }); i.el.style.transform = `translate3d(${Math.round(x)}px,${Math.round(y)}px,0)`; }
      if (i.acik !== goster) { i.acik = goster; i.el.hidden = !goster; }
    }
  }
  const ekranda = (v, w, h) => {
    gecici.copy(v).project(camera);
    return { x: ((gecici.x + 1) / 2) * w, y: ((1 - gecici.y) / 2) * h, gor: gecici.z < 1 && Math.abs(gecici.x) < 1.05 && Math.abs(gecici.y) < 1.05 };
  };
  function etiketleriYerlestir() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    isaretleriYerlestir(w, h);
    if (!etiketler.length) return;
    cizgiler.setAttribute('width', w); cizgiler.setAttribute('height', h);
    const kutular = [], ARA = 8, YUKARI = 30;
    const sirali = etiketler.map((e) => ({ e, p: ekranda(e.nokta, w, h) })).sort((a, b) => b.p.y - a.p.y);
    for (const { e, p } of sirali) {
      if (!e.w) { e.w = e.el.offsetWidth; e.h = e.el.offsetHeight; }
      let x = Math.min(Math.max(p.x - e.w / 2, 6), w - e.w - 6), y = p.y - YUKARI - e.h, alt = false;
      for (let d = 0; d < 6; d++) { // çakışma varsa yukarı kademele; tepeye çarparsa noktanın altına al
        const c = kutular.find((k) => x < k.x + k.w + ARA && x + e.w + ARA > k.x && y < k.y + k.h + ARA && y + e.h + ARA > k.y);
        if (!c) break;
        y = c.y - e.h - ARA;
        if (y < 4) { y = p.y + YUKARI; alt = true; x = Math.min(Math.max(c.x + c.w + ARA, 6), w - e.w - 6); break; }
      }
      kutular.push({ x, y, w: e.w, h: e.h });
      const o = p.gor ? '1' : '0';
      e.el.style.opacity = o; e.cizgi.style.opacity = o; e.nokt.style.opacity = o;
      e.el.style.transform = `translate3d(${Math.round(x)}px,${Math.round(y)}px,0)`;
      e.cizgi.setAttribute('x1', p.x.toFixed(1)); e.cizgi.setAttribute('y1', p.y.toFixed(1));
      e.cizgi.setAttribute('x2', (x + e.w / 2).toFixed(1)); e.cizgi.setAttribute('y2', (alt ? y : y + e.h).toFixed(1));
      e.nokt.setAttribute('cx', p.x.toFixed(1)); e.nokt.setAttribute('cy', p.y.toFixed(1));
    }
  }

  // ---------------------------------------------------------------- dokunarak seçme
  // Ahmet 01.11: "küçük parçalara dokunulamıyor, kartın kutusu hepsini yutuyor". Işın önce görünen yüzeye
  // çarptırılır (gerçek geometri); sonra o noktayı içeren vekillerden (modeller.js) en küçüğü seçilir. İnce
  // parçaların (LED bacağı, kablo) çevresindeki kalın görünmez vekil ışınla da yoklanır: ışın yanından geçse de
  // seçilir. Ekranda çok küçük görünen vekil (uzaktan bir pin) atlanır, onu içeren büyük vekil (başlık) kazanır.
  const raycaster = new Raycaster();
  const isaret = new Vector2();
  const hedefler = [];
  const dokunmaDinleyiciler = new Set();
  const _l = new Vector3(), _sk = new Vector3(), _m = new Vector3();
  const katiMi = (o) => {
    if (!o.isMesh || o.isInstancedMesh || o === zemin || !ustGorunur(o)) return false;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    return ms.some((m) => m && m.visible !== false && m.blending !== AdditiveBlending && !(m.transparent && m.opacity < 0.2));
  };
  // olcek: ince aralıklı vekillerin (pin, şerit) ekranda en az kaç kat büyük olunca tek tek seçileceği.
  // Parmak fareden kalındır; aralık parmaktan darken komşusu seçilmesin, bütün başlık seçilsin.
  function sec(nx, ny, olcek = 1) {
    isaret.set(nx, ny);
    raycaster.setFromCamera(isaret, camera);
    const kati = raycaster.intersectObjects(scene.children, true).find((v) => katiMi(v.object));
    const P = kati ? kati.point : null, dS = kati ? kati.distance : Infinity;
    const h = canvas.clientHeight || 1, tanV = Math.tan((camera.fov * Math.PI) / 360);
    let en = null, enHacim = Infinity, enUzak = Infinity;
    for (const v of hedefler) {
      const u = v.userData;
      if (u.etkin === false || !ustGorunur(v)) continue;
      let icinde = false;
      if (P && u.yari) {
        _l.copy(P); v.worldToLocal(_l); _sk.setFromMatrixScale(v.matrixWorld);
        const [a, b, c] = u.yari, t = 0.25;
        icinde = Math.abs(_l.x) <= a + t / _sk.x && Math.abs(_l.y) <= b + t / _sk.y && Math.abs(_l.z) <= c + t / _sk.z;
      }
      if (!icinde && u.ince && v.isMesh) { const ic = raycaster.intersectObject(v, false)[0]; icinde = Boolean(ic) && ic.distance <= dS + 0.5; }
      if (!icinde) continue;
      _m.setFromMatrixPosition(v.matrixWorld);
      if (u.minPx && u.minAdim) {
        _c.copy(_m).applyMatrix4(camera.matrixWorldInverse);
        if ((u.minAdim * h) / (2 * Math.max(0.01, -_c.z) * tanV) < u.minPx * olcek) continue;
      }
      const hacim = u.hacim ?? Infinity, uzak = P ? _m.distanceToSquared(P) : 0;
      if (hacim < enHacim * 0.99 || (hacim <= enHacim * 1.01 && uzak < enUzak)) { en = v; enHacim = hacim; enUzak = uzak; }
    }
    return { vekil: en, nokta: P ? P.clone() : en ? new Vector3().setFromMatrixPosition(en.matrixWorld) : null };
  }
  // İki parmakla yakınlaştırırken parmak kalkınca seçim yapılmasın: ekranda birden çok parmak olduysa
  // hepsi kalkana dek dokunma sayılmaz.
  const parmaklar = new Set();
  let basla = null, coklu = false;
  canvas.addEventListener('pointerdown', (e) => {
    parmaklar.add(e.pointerId);
    if (parmaklar.size > 1) { coklu = true; basla = null; return; }
    basla = coklu ? null : { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId };
  });
  canvas.addEventListener('pointerup', (e) => {
    const b = basla;
    parmaklar.delete(e.pointerId);
    if (!parmaklar.size) coklu = false;
    if (!b || b.id !== e.pointerId) return;
    basla = null;
    if (Math.hypot(e.clientX - b.x, e.clientY - b.y) > 9 || performance.now() - b.t > 600) return;
    const isaretEl = isaretler.length ? isaretBul(e.clientX, e.clientY) : null;
    if (isaretEl) { isaretEl.click(); return; }
    const r = canvas.getBoundingClientRect();
    // Dokunmada eşik büyür: telefonda 12 px'lik pin aralığı yerine 30 px. Tahtada piksel fiziksel olarak
    // büyük olduğu için çarpan küçük (18 px). Fare ve kalem kesin işaretler, çarpan 1.
    const olcek = e.pointerType === 'touch' ? (document.documentElement.dataset.mod === 'tahta' ? 1.5 : 2.5) : 1;
    const s = sec(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1, olcek);
    for (const f of dokunmaDinleyiciler) f(s.vekil ? s.vekil.userData : null, s.nokta, s.vekil);
  });
  canvas.addEventListener('pointercancel', (e) => { parmaklar.delete(e.pointerId); if (!parmaklar.size) coklu = false; basla = null; });
  // fareyle işaretin üstüne gelince imleç ve küçük büyüme (dokunmada üstüne gelme yok, bir şey ona bağlı değil)
  let ustundeki = null;
  const ustundeAyarla = (el) => { if (el === ustundeki) return; ustundeki?.classList.remove('ustunde'); el?.classList.add('ustunde'); ustundeki = el; canvas.style.cursor = el ? 'pointer' : ''; };
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' && !e.buttons) ustundeAyarla(isaretler.length ? isaretBul(e.clientX, e.clientY) : null); });
  canvas.addEventListener('pointerleave', () => ustundeAyarla(null));
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); olay('baglam-kaybi'); });
  canvas.addEventListener('webglcontextrestored', () => { olay('baglam-geri'); golgeKirli = true; iste(); });

  boyutla();

  return {
    renderer, scene, camera, controls, hedefler,
    iste, kameraGit, tween, etiketKoy, isaretKoy, gorunurAlan,
    golgeYenile: () => { golgeKirli = true; iste(); },
    kareGuncelleyici: (g) => { kareGuncelleyiciler.add(g); iste(); return () => kareGuncelleyiciler.delete(g); },
    yavasGuncelleyici: (g) => { yavasGuncelleyiciler.add(g); iste(); return () => yavasGuncelleyiciler.delete(g); },
    dokunmaDinle: (f) => dokunmaDinleyiciler.add(f),
    sec, kadrajOlc,
    // sahnedeki düğmeler, ipucu ya da işaret boyu değişince (tahta kipi, keşif) güvenli alan yeniden ölçülür
    guvenliYenile: () => { guvenli = null; isaretBoyu = 0; iste(); },
    yakinlas: (oran) => {
      const yon = camera.position.clone().sub(controls.target);
      const yeni = Math.min(controls.maxDistance, Math.max(controls.minDistance, yon.length() * oran));
      const p0 = camera.position.clone(), p1 = controls.target.clone().addScaledVector(yon.normalize(), yeni);
      kullaniciOynatti = true;
      return tween(260, (k) => camera.position.lerpVectors(p0, p1, k));
    },
    arkaPlan: (renk) => { renderer.setClearColor(new Color(renk), 1); iste(); },
    sonHedef: () => sonHedef,
    kalite: () => ({ kademe, piksel: Math.round(simdikiOlcek * 100) / 100, tam: Math.round(tamOlcek * 100) / 100 }),
  };
}
