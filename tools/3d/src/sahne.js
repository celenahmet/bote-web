// 3D sahne çekirdeği: çizici, kamera, yörünge denetimi, istek üzerine çizim, uyarlanır kalite,
// dokunarak seçme, kamera geçişi ve ekran etiketleri.
//
// Görüntü (Ahmet 01.11: "HD ve gerçekçi") ile akıcılık ("kasmamalı") birlikte:
// - Fiziksel malzeme + ortam yansıması (oda ortamı) + yumuşak gölge + doğal ton eşleme.
// - Sahne yalnız bir şey değişince çizilir; boşta hiç kare çizilmez. Gölge haritası yalnız parça
//   hareket edince yeniden hesaplanır (kamera dönerken gölge maliyeti yok).
// - Hareket sırasında kare aralığı ekranın kendi hızıyla karşılaştırılır; kare kaçırılıyorsa
//   çözünürlük kademe kademe düşer. Hareket bitince tam çözünürlükte keskin bir kare çizilir.
import {
  WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, HemisphereLight, Color, Mesh, PlaneGeometry, ShadowMaterial,
  Vector3, Vector2, Raycaster, SRGBColorSpace, NeutralToneMapping, PCFSoftShadowMap, PMREMGenerator,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const HEDEF_PIKSEL = 4.2e6; // ~2560x1600: Full HD'nin üstü; 4K tahtada 0,7 ölçek
const KADEME = [1, 0.8, 0.65, 0.5]; // yavaşlıkta inilen çözünürlük kademeleri
const azHareket = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const yumusak = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function sahneKur(canvas, { arkaPlan = '#e9e5f1', olay = () => {} } = {}) {
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
  controls.enableDamping = true;
  controls.dampingFactor = 0.14;
  controls.rotateSpeed = 0.75;
  controls.zoomSpeed = 0.9;
  controls.panSpeed = 0.8;
  controls.screenSpacePanning = true;
  controls.minDistance = 22;
  controls.maxDistance = 480;
  controls.minPolarAngle = 0.06;
  controls.maxPolarAngle = 1.32; // masanın altına inmesin
  controls.target.set(0, 4, 0);

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
  function olc(t) {
    if (sonKare) araliklar.push(t - sonKare);
    sonKare = t;
    if (araliklar.length < 24) return;
    const ort = araliklar.reduce((x, y) => x + y, 0) / araliklar.length;
    araliklar = [];
    if (t - sonAyar < 500) return;
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
    if (!kullaniciOynatti && sonHedef) kameraGit(sonHedef, true);
    iste();
  }
  // Boyut değişimi (panel açılıp kapanırken, kenar sürüklenirken) her karede değil, durunca bir kez
  // uygulanır: çizim tamponunu her karede yeniden ayırmak zayıf ekran kartında takılma yapar.
  let boyutZaman = 0;
  const ro = new ResizeObserver(() => { clearTimeout(boyutZaman); boyutZaman = setTimeout(boyutla, 110); });
  ro.observe(canvas);

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
    goruntuKaydir();
    if (!kullaniciOynatti && sonHedef) kameraGit(sonHedef, anlik); else iste();
  }

  controls.addEventListener('change', iste);
  controls.addEventListener('start', () => { kullaniciOynatti = true; olay('kamera-elle'); });

  // ---------------------------------------------------------------- kamera geçişi
  // hedef: { merkez, yon, yaricap } ; küre ekrana sığacak uzaklık, dikey ve yatay görüş
  // açısının küçüğüne göre hesaplanır (dikey telefon ekranında da sığar).
  let sonHedef = null;
  function kameraGit(hd, anlik = false) {
    sonHedef = hd;
    kullaniciOynatti = false;
    const merkez = new Vector3(...hd.merkez);
    const yon = new Vector3(...hd.yon).normalize();
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1, gh = Math.max(1, h - Math.min(altBosluk, h * 0.9));
    const v = (camera.fov * Math.PI) / 180;
    const dikeyGorunen = 2 * Math.atan((Math.tan(v / 2) * gh) / h);
    const yatay = 2 * Math.atan(Math.tan(v / 2) * (w / h));
    const uzaklik = (hd.yaricap / Math.sin(Math.min(dikeyGorunen, yatay) / 2)) * 1.04;
    const hedefKonum = merkez.clone().addScaledVector(yon, uzaklik);
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

  // golge: true ise geçiş boyunca gölge haritası yenilenir (parça hareketi)
  function tween(sure, adim, golge = false) {
    if (azHareket()) { adim(1); if (golge) golgeKirli = true; iste(); return Promise.resolve(); }
    return new Promise((bitti) => { tweenler.add({ sure, adim, bitti, golge }); iste(); });
  }

  // ---------------------------------------------------------------- ekran etiketleri ve keşif işaretleri
  // Etiketler çakışmasın diye kademelenir; her etiket ince bir çizgiyle işaret ettiği noktaya bağlanır
  // (Ahmet 01.11: "GND gibi yan yana olanlar okunmuyor, ferah olsun").
  const etiketKatmani = canvas.parentElement.querySelector('.etiketler');
  const SVGNS = 'http://www.w3.org/2000/svg';
  const cizgiler = document.createElementNS(SVGNS, 'svg');
  cizgiler.setAttribute('class', 'cizgiler'); cizgiler.setAttribute('aria-hidden', 'true');
  etiketKatmani.appendChild(cizgiler);
  const isaretler = [];
  const gecici = new Vector3();
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
  function isaretKoy(liste) {
    for (const i of isaretler) i.el.remove();
    isaretler.length = 0;
    for (const { nokta, el } of liste) { etiketKatmani.appendChild(el); isaretler.push({ el, nokta }); }
    iste();
  }
  const ekranda = (v, w, h) => {
    gecici.copy(v).project(camera);
    return { x: ((gecici.x + 1) / 2) * w, y: ((1 - gecici.y) / 2) * h, gor: gecici.z < 1 && Math.abs(gecici.x) < 1.05 && Math.abs(gecici.y) < 1.05 };
  };
  function etiketleriYerlestir() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    for (const i of isaretler) {
      const p = ekranda(i.nokta, w, h);
      i.el.style.opacity = p.gor ? '1' : '0'; i.el.style.pointerEvents = p.gor ? 'auto' : 'none';
      i.el.style.transform = `translate3d(${Math.round(p.x)}px,${Math.round(p.y)}px,0)`;
    }
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
  const raycaster = new Raycaster();
  const isaret = new Vector2();
  const hedefler = [];
  const dokunmaDinleyiciler = new Set();
  let basla = null;
  canvas.addEventListener('pointerdown', (e) => { basla = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', (e) => {
    if (!basla) return;
    const kaydi = Math.hypot(e.clientX - basla.x, e.clientY - basla.y), sure = performance.now() - basla.t;
    basla = null;
    if (kaydi > 9 || sure > 600) return;
    const r = canvas.getBoundingClientRect();
    isaret.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(isaret, camera);
    const vurus = raycaster.intersectObjects(hedefler.filter((h) => h.userData.etkin !== false), false)[0];
    for (const f of dokunmaDinleyiciler) f(vurus ? vurus.object.userData : null, vurus ? vurus.point : null);
  });
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
