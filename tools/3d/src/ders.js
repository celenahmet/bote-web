// 3D Simülasyon Merkezi: genel ders motoru. Ders sayfasının aileden bağımsız her şeyi burada: adım geçişi, anlatım paneli
// (genişlik, taraf, yazı boyutu, aşağıdan çekilen kart sayfası), kart düğmeleri, kamera ve görünüm seçimi, vurgu, keşif işaretleri
// ve bilgi kartı, sahneye dokunma, ölçüm paneli. Aileye özgü hiçbir ice aktarım yoktur: aile (Arduino, Bilgisayar Donanımı ...)
// motora bir tanım nesnesi olarak verilir; sahne işini onun adaptörü yapar.
//
// ---------------------------------------------------------------- AİLE TANIMI (dersMotoru'na verilen nesne)
//   DERSLER   { ders-kimligi: { no, adimlar: { adim-kimligi: { kamera, parca, poz, vurgu, etiket, kontrol, dokun, ... } } } }
//   KAMERA    { ad: { kutu: [x0,y0,z0,x1,y1,z1], yon: [x,y,z] } }  ("genel" zorunlu)
//   KESIF, KATEGORI, kategoriBul   keşif kataloğu (kesif-veri.js biçimi); kategoriBul(id) -> KATEGORI anahtarı | null
//   sahneyiKur(S, { olay, ders, veri }) -> ADAPTÖR   (aşağıda)
//   vurguYap(sahne, alan) -> Object3D   isteğe bağlı: adımdaki vurgu kutuları; yoksa vurgu çizilmez. Her çağrıda yeni
//             geometri kurar: motor kutuyu kaldırırken geometrisini bırakır (dispose), malzemeye dokunmaz (ortak olabilir).
//   GORUNUM   isteğe bağlı: { ustten: [x,y,z], ... } bakış yönleri (eğik = adımın kendi kadrajı)
// Zorunlu alanlar (DERSLER ve içinde sayfanın dersi, KAMERA.genel, KESIF, KATEGORI, kategoriBul, sahneyiKur) kurulumda
// denetlenir: eksikse konsola açık hata yazılır, sahne açılmaz, yedek arayüz görünür (kartlar ve sınav çalışır).
// sahneyiKur hata atarsa da aynı yedek: yarım kurulan sahne boşaltılır (02.11 motor incelemesi).
// Kart düğmelerinin ilk basılı durumu HTML'dedir (aileler.mjs kontrol tanımında varsayilan: true -> aria-pressed="true");
// motor her adımda düğmeleri bu ilk duruma döndürür, sonra adaptörün adimUygula'sı çalışır.
//
// ---------------------------------------------------------------- ADAPTÖR (sahneyiKur'un döndürdüğü; Donanım ile ortak sözleşme)
//   kesifNoktalari  [{ id, nokta } | { id, nesne, yerel }, ozel?, rozet?, adim?]  adımdan bağımsız keşif noktaları
//   alanlar         { ad: [x, y, z, genislik, yukseklik, derinlik] }  vurgu kutuları ve 'alan:' etiket noktaları
//   noktaBul(ad)    etiket noktası -> Vector3          kutuBul(ad) -> Box3 (kamera kutusu: KAMERA'da olmayan adlar için)
//   adimUygula(id, cfg, ilk)  adımı sahneye uygular; ADIM ETİKETLERİNİ KENDİSİ koyar (S.etiketKoy) ve durumunu sıfırlar
//   eylem(ad, dugme)  kart düğmesine basıldı; true/false dönerse dugme aria-pressed olur, motor sonra S.iste() der
//   dokunuldu(v, nokta) -> true  sahneye dokunuş sahneyi ilgilendiriyorsa (motor bilgi kartı açmaz)
//   durdur()  sayfa kapanırken zamanlayıcıları, sesi vb. bırakır (bfcache dönüşünde çağrılmaz)
// İsteğe bağlı kancalar (yoksa ilgili parça hiç çizilmez/çalışmaz):
//   kesifEk(cfg) -> [keşif noktası]  adıma bağlı ek keşif noktaları (Arduino: o adımdaki parçalar, pin etiketleri)
//   kameraBul(kam, cfg) -> { kutu, yon }  aile kendi kadrajını hesaplar (nesne biçimli kamera, havadaki parça vb.)
//   ipucu(cfg) -> 'dokun' | 'delik' | ''  sahne üstündeki ipucu satırı (.ipucu-<ad>); varsayılan: cfg.dokun ? 'dokun' : ''
//   olcumEk -> {}  ?olcum ile window.__3d'ye eklenir (ölçüm ve otomatik deneme betikleri için)
// ?olcum açıkken adım etiketlerinden noktaBul'u boş dönenler (etiket çizilmez) konsola uyarı olarak yazılır.
import { Vector3, Box3 } from 'three';
import { sahneKur } from './sahne.js';
import { $, $$, sakla, oku, duyur, html } from './ortak.js';
import { panelSiniflari, seritYedegi } from './uyum.js'; // eski tarayıcı yedekleri

export function dersMotoru(aile, K) {
  const { DERSLER, KAMERA } = aile;
  const veri = K.veri, pencere = K.pencere, temaRengi = K.temaRengi;
  // zorunlu alan denetimi (sessiz düşüş yerine kurulumda açık hata; yoksa hata ancak Keşif'te ya da sonsuz özyinelemede çıkıyordu)
  const eksik = [['DERSLER', 'object'], ['KAMERA', 'object'], ['KESIF', 'object'], ['KATEGORI', 'object'], ['kategoriBul', 'function'], ['sahneyiKur', 'function']]
    .filter(([ad, tur]) => !aile[ad] || typeof aile[ad] !== tur).map(([ad]) => ad);
  if (DERSLER && !DERSLER[veri.slug]) eksik.push(`DERSLER['${veri.slug}']`);
  if (KAMERA && !KAMERA.genel) eksik.push('KAMERA.genel');
  if (eksik.length) console.error(`dersMotoru(${aile.id || '?'}): aile tanımında eksik zorunlu alan: ${eksik.join(', ')}. Sahne açılmadı.`);
  // eksik alanda kartlar ve dışarıdan açılan bilgi kartı (3d:kesif-ac) yine çalışsın diye boş yedekler
  const ders = DERSLER?.[veri.slug] || { adimlar: {} };
  const KESIF = aile.KESIF || {}, KATEGORI = aile.KATEGORI || {};
  const kategoriBul = typeof aile.kategoriBul === 'function' ? aile.kategoriBul : () => null;
  const olcum = new URLSearchParams(location.search).has('olcum');
  const kartlar = $$('.adim');
  // kart düğmelerinin HTML'deki ilk basılı durumu (varsayılan basılı düğme adım değişince bu duruma döner)
  const ilkBasili = new Map($$('[data-eylem][aria-pressed]').map((b) => [b, b.getAttribute('aria-pressed')]));
  let aktif = 0;
  let S = null, A = null, vurgular = [], bilgiAcik = null, bilgiYenile = null;
  K.sinifDegisince = () => { if (bilgiAcik) bilgiYenile?.(); };
  const aktifCfg = () => ders.adimlar[kartlar[aktif].dataset.id] || {};

  // ---------------------------------------------------------- adım geçişi
  function adimaGit(i, sessiz = false) {
    aktif = Math.max(0, Math.min(kartlar.length - 1, i));
    kartlar.forEach((k, j) => k.classList.toggle('etkin', j === aktif));
    const k = kartlar[aktif];
    $('#adim-sayac').textContent = `${aktif + 1} / ${kartlar.length}`;
    $('#ilerleme').style.width = `${((aktif + 1) / kartlar.length) * 100}%`;
    $('#geri').disabled = aktif === 0;
    $('#ileri').disabled = aktif === kartlar.length - 1;
    const baslikMetni = $('h2', k).textContent;
    for (const [sec, metin] of [['#mini-sayac', `${aktif + 1}/${kartlar.length}`], ['#mini-baslik', baslikMetni], ['#kisa-baslik', baslikMetni]]) { const el = $(sec); if (el) el.textContent = metin; }
    for (const [sec, kapali] of [['#mini-geri', aktif === 0], ['#mini-ileri', aktif === kartlar.length - 1]]) { const el = $(sec); if (el) el.disabled = kapali; }
    const u = new URL(location.href); u.hash = k.id; history.replaceState(null, '', u);
    $('.kart-govde')?.scrollTo(0, 0);
    if (!sessiz) duyur(`Adım ${aktif + 1}: ${$('h2', k).textContent}`);
    bilgiKapat();
    if (S) adimUygula(k.dataset.id);
  }
  $('#geri').addEventListener('click', () => adimaGit(aktif - 1));
  $('#ileri').addEventListener('click', () => adimaGit(aktif + 1));
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select') || pencere?.open || e.altKey || e.ctrlKey || e.metaKey) return;
    if (['ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); adimaGit(aktif + 1); }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); adimaGit(aktif - 1); }
  });
  // kart alanında yatay kaydırma ile adım değiştir (telefon, tablet). Kaydırıcıda ya da başka form öğesinde, ayar ve
  // erişim panelinde, kendi içinde yatay kayan bir öğede başlayan ya da birden çok parmakla yapılan hareket adım
  // değiştirmez (02.11 ölçüm: yatay tablette panel genişliği kaydırıcısını sürüklemek adımı ilerletiyordu).
  let kayBas = null;
  const yatayKayar = (x, kok) => { for (; x && x !== kok; x = x.parentElement) if (x.scrollWidth > x.clientWidth + 1 && /auto|scroll/.test(getComputedStyle(x).overflowX)) return true; return false; };
  $('.kart-alani').addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    kayBas = e.touches.length === 1 && !e.target.closest?.('input, select, textarea, .ayarlar, .erisim-panel') && !yatayKayar(e.target, e.currentTarget) ? { x: t.clientX, y: t.clientY } : null;
  }, { passive: true });
  $('.kart-alani').addEventListener('touchend', (e) => {
    if (!kayBas) return; const t = e.changedTouches[0]; const dx = t.clientX - kayBas.x, dy = t.clientY - kayBas.y; kayBas = null;
    if (Math.abs(dx) > 70 && Math.abs(dy) < 40) adimaGit(aktif + (dx < 0 ? 1 : -1));
  }, { passive: true });
  // ---------------------------------------------------------- panel (Ahmet 01.11: "açılır kapanır, ergonomik")
  // Yatay ekranda yan panel: aç/kapa, kenardan sürükleyerek genişlik, sola/sağa alma; dikey ekranda
  // aşağıdan çekilen kart sayfası: kısa, yarım, tam. Tercihler bu cihazda hatırlanır.
  const dersEl = $('.ders'), kartAlani = $('.kart-alani'), kenar = $('.panel-kenar'), panelDugme = $('#panel-dugme');
  panelSiniflari(kartAlani); seritYedegi($('.sahne-arac'));
  const dikey = window.matchMedia('(orientation: portrait), (max-width: 820px)');
  function panelAyarla(acik, kaydet = true) {
    html.dataset.panel = acik ? 'acik' : 'kapali';
    panelDugme?.setAttribute('aria-expanded', String(acik));
    panelDugme?.setAttribute('aria-label', acik ? 'Anlatım panelini kapat' : 'Anlatım panelini aç');
    kartAlani.inert = !acik && !dikey.matches;
    if (kaydet) { sakla('bote-3d-panel', acik ? 'acik' : 'kapali'); duyur(acik ? 'Anlatım paneli açıldı' : 'Anlatım paneli kapandı; adımlar alttaki çubuktan geçilir'); }
  }
  panelAyarla(oku('bote-3d-panel') !== 'kapali', false);
  panelDugme?.addEventListener('click', () => panelAyarla(html.dataset.panel !== 'acik'));
  $('#mini-ac')?.addEventListener('click', () => panelAyarla(true));
  $('#mini-geri')?.addEventListener('click', () => adimaGit(aktif - 1));
  $('#mini-ileri')?.addEventListener('click', () => adimaGit(aktif + 1));
  const genislik = (px) => { if (px) dersEl.style.setProperty('--panel-w', `${Math.round(px)}px`); else dersEl.style.removeProperty('--panel-w'); };
  const genislikSinir = (px) => Math.max(300, Math.min(dersEl.clientWidth * 0.62, px));
  genislik(Number(oku('bote-3d-panel-w')) || 0);
  const genislikKaydet = () => sakla('bote-3d-panel-w', String(parseInt(dersEl.style.getPropertyValue('--panel-w'), 10) || ''));
  let surukle = null;
  // en dar sınırın bu kadar ötesine çekilen panel bırakınca kapanır (Ahmet 02.11: "sağ tarafa komple taşırken")
  const KAPATMA_PAYI = 110;
  kenar?.addEventListener('pointerdown', (e) => {
    if (e.target.closest('#panel-dugme') || html.dataset.panel !== 'acik' || dikey.matches) return;
    kenar.setPointerCapture(e.pointerId);
    surukle = { x: e.clientX, w: kartAlani.getBoundingClientRect().width, once: dersEl.style.getPropertyValue('--panel-w') };
    html.dataset.suruklenen = '1';
  });
  kenar?.addEventListener('pointermove', (e) => {
    if (!surukle) return;
    const dx = e.clientX - surukle.x, ham = surukle.w + (html.dataset.panelYan === 'sol' ? dx : -dx);
    if (ham < genislikSinir(0) - KAPATMA_PAYI) html.dataset.kapanacak = '1'; else delete html.dataset.kapanacak;
    genislik(genislikSinir(ham));
  });
  const birak = (e) => {
    if (!surukle) return;
    const s = surukle; surukle = null; delete html.dataset.suruklenen;
    if (html.dataset.kapanacak) {
      delete html.dataset.kapanacak;
      // genişlik sürüklemeden önceki hâline döner: panel yeniden açılınca aynı boyda gelir
      if (s.once) dersEl.style.setProperty('--panel-w', s.once); else dersEl.style.removeProperty('--panel-w');
      if (e?.type === 'pointerup') { panelAyarla(false); return; }
    }
    genislikKaydet();
  };
  kenar?.addEventListener('pointerup', birak); kenar?.addEventListener('pointercancel', birak);
  kenar?.addEventListener('dblclick', (e) => { if (!e.target.closest('#panel-dugme')) { genislik(0); sakla('bote-3d-panel-w', ''); } });
  kenar?.addEventListener('keydown', (e) => {
    if (e.target !== kenar || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault(); e.stopPropagation();
    const buyut = (e.key === 'ArrowLeft') === (html.dataset.panelYan !== 'sol');
    genislik(genislikSinir(kartAlani.getBoundingClientRect().width + (buyut ? 40 : -40))); genislikKaydet();
  });
  function yanAyarla(yan, kaydet) {
    html.dataset.panelYan = yan;
    for (const b of $$('[data-yan]')) b.setAttribute('aria-pressed', String(b.dataset.yan === yan));
    if (kaydet) sakla('bote-3d-panel-yan', yan);
  }
  yanAyarla(oku('bote-3d-panel-yan') === 'sol' ? 'sol' : 'sag', false);
  // ayar penceresi (Ahmet 01.11: "kartların boyutu sitede ayarlanabilir olmalı"). Dikey ekranda kart sayfasının
  // içinde kırpılmasın diye aşağıdan açılan ayrı bir sayfa olur (arkası karartılır, dokununca kapanır).
  const ayarlar = $('#ayarlar'), ayarDugme = $('#ayar-dugme'), ayarPerde = $('#ayar-perde');
  function ayarAc(acik, odakGeri = false) {
    if (!ayarlar) return;
    ayarlar.hidden = !acik; if (ayarPerde) ayarPerde.hidden = !acik;
    ayarDugme.setAttribute('aria-expanded', String(acik));
    if (acik) { reostaYenile(); [...ayarlar.querySelectorAll('input, button')].find((el) => el.id !== 'ayar-kapat' && el.offsetParent !== null)?.focus(); }
    else if (odakGeri) ayarDugme.focus();
  }
  ayarDugme?.addEventListener('click', (e) => { e.stopPropagation(); ayarAc(ayarlar.hidden); });
  $('#ayar-kapat')?.addEventListener('click', () => ayarAc(false, true));
  document.addEventListener('click', (e) => { if (ayarlar && !ayarlar.hidden && !e.target.closest('#ayarlar, #ayar-dugme')) ayarAc(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && ayarlar && !ayarlar.hidden) ayarAc(false, true); });
  // Panel genişliği: reosta görünümlü sürgü (Ahmet 01.11). Sürüklerken canlı uygulanır; altındaki Dar, Orta,
  // Geniş işaretlerine dokununca o değere atlar. Sürgü üç ön ayar arasında parça parça doğrusaldır: işaretler
  // eşit aralıklı durur. Kenardan sürükleme de aynı genişliği değiştirir.
  const reosta = $('#panel-genislik'), reostaDeger = $('#genislik-deger');
  const BOYUT_AD = { dar: 'Dar', orta: 'Orta', genis: 'Geniş' }, BOYUT_YER = { dar: 0, orta: 50, genis: 100 };
  function onAyarlar() { // stil.css'teki --panel-w ön ayarlarıyla aynı
    const vw = window.innerWidth, k = (a, b, c) => genislikSinir(Math.max(a, Math.min(b * vw, c)));
    return html.dataset.mod === 'tahta' ? { dar: k(380, 0.29, 1100), orta: k(440, 0.37, 1500), genis: k(560, 0.5, 1900) } : { dar: k(290, 0.26, 440), orta: k(330, 0.34, 560), genis: k(420, 0.46, 900) };
  }
  function surguPx(v) { const o = onAyarlar(); return v <= 50 ? o.dar + ((o.orta - o.dar) * v) / 50 : o.orta + ((o.genis - o.orta) * (v - 50)) / 50; }
  function pxSurgu(px) {
    const o = onAyarlar();
    if (px <= o.orta) return o.orta > o.dar ? Math.max(0, ((px - o.dar) / (o.orta - o.dar)) * 50) : 0;
    return o.genis > o.orta ? Math.min(100, 50 + ((px - o.orta) / (o.genis - o.orta)) * 50) : 100;
  }
  function reostaYaz() {
    if (!reosta) return;
    const v = Number(reosta.value), px = surguPx(v);
    const yakin = Object.keys(BOYUT_YER).find((k) => Math.abs(BOYUT_YER[k] - v) <= 3) || '';
    const yuzde = Math.round((px / Math.max(1, dersEl.clientWidth)) * 100);
    if (reostaDeger) reostaDeger.textContent = yakin ? `${BOYUT_AD[yakin]} · %${yuzde}` : `%${yuzde}`;
    reosta.setAttribute('aria-valuetext', `${yakin ? `${BOYUT_AD[yakin]}, ` : ''}ekranın yüzde ${yuzde} kadarı`);
    reosta.style.setProperty('--dolu', `${v}%`);
    for (const b of $$('[data-panel-boyut]:not(html)')) b.setAttribute('aria-pressed', String(b.dataset.panelBoyut === yakin));
  }
  function reostaYenile() { if (reosta) { reosta.value = String(Math.round(pxSurgu(kartAlani.getBoundingClientRect().width || onAyarlar().orta))); reostaYaz(); } }
  const surguBitti = () => { if (html.dataset.suruklenen && !surukle && !cek) delete html.dataset.suruklenen; };
  reosta?.addEventListener('pointerdown', () => { html.dataset.suruklenen = '1'; });
  reosta?.addEventListener('pointerup', surguBitti);
  reosta?.addEventListener('input', () => { html.dataset.suruklenen = '1'; genislik(surguPx(Number(reosta.value))); reostaYaz(); });
  reosta?.addEventListener('change', () => { surguBitti(); genislikKaydet(); });
  function boyutAyarla(b, kaydet) {
    html.dataset.panelBoyut = b;
    if (kaydet) { genislik(0); sakla('bote-3d-panel-w', ''); sakla('bote-3d-panel-boyut', b); }
    if (reosta) { reosta.value = String(BOYUT_YER[b]); reostaYaz(); }
  }
  boyutAyarla(['dar', 'orta', 'genis'].includes(oku('bote-3d-panel-boyut')) ? oku('bote-3d-panel-boyut') : 'orta', false);
  const YAZI = [0.9, 1, 1.15, 1.3, 1.5];
  let yaziSira = Math.max(0, YAZI.indexOf(Number(oku('bote-3d-yazi')) || 1));
  function yaziAyarla(i, kaydet) {
    yaziSira = Math.max(0, Math.min(YAZI.length - 1, i));
    html.style.setProperty('--yazi', String(YAZI[yaziSira]));
    const d = $('#yazi-deger'); if (d) d.textContent = `%${Math.round(YAZI[yaziSira] * 100)}`;
    if (kaydet) sakla('bote-3d-yazi', String(YAZI[yaziSira]));
  }
  yaziAyarla(yaziSira, false);
  // kök öğe (html) de data-panel-boyut taşır: dışarıda bırakılmazsa her tıklama onu Dar/Orta/Geniş düğmesi sanıp
  // özel genişliği sıfırlıyordu; sürüklenen panel ve reosta bırakınca geri kayıyordu (Ahmet 02.11)
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-panel-boyut]:not(html), [data-yazi], [data-yan]');
    if (!b) return;
    if (b.dataset.panelBoyut) boyutAyarla(b.dataset.panelBoyut, true);
    if (b.dataset.yazi) yaziAyarla(yaziSira + Number(b.dataset.yazi), true);
    if (b.dataset.yan) yanAyarla(b.dataset.yan, true);
  });
  const tahminAyar = $('#tahmin-ayar');
  if (tahminAyar) { tahminAyar.checked = oku('bote-3d-tahmin') !== 'hayir'; tahminAyar.addEventListener('change', () => sakla('bote-3d-tahmin', tahminAyar.checked ? 'evet' : 'hayir')); }
  // dikey ekran: kart sayfası
  const SAYFA = {
    // alçak yatay ekranda Geri/İleri başlıkla aynı satırda (stil.css): o zaman satırın yüksekliği bir kez sayılır
    kisa: () => {
      const tut = $('.tutamac'), ust = $('.kart-ust'), alt = $('.kart-alt');
      const yan = !!(alt && ust && alt.offsetTop < ust.offsetTop + ust.offsetHeight);
      return (tut?.offsetHeight || 0) + Math.max(ust?.offsetHeight || 0, yan ? alt.offsetHeight : 0) + (yan ? 0 : alt?.offsetHeight || 0) + 2;
    },
    yarim: () => dersEl.clientHeight * 0.5,
    tam: () => dersEl.clientHeight * 0.92,
  };
  // Yatay telefonda yarım sayfa metne yer bırakmıyordu (568x320 ile 812x375 arası gövde 0 px; yarım, kısadan bile alçaktı):
  // tutamaca dokunmak bir şey açmıyordu. Yarım konum metne en az GOVDE_EN_AZ (iki dokunma satırı) bırakmıyorsa yok sayılır:
  // dokunma kısa ile tam arasında gider, kayıtlı "yarım" tercihi bu ekranda kısa görünür (sahne görünsün), dikeye dönünce yine yarım.
  // Özgür moddaki ölçüyle aynı (ozgur.js GOVDE_EN_AZ).
  const GOVDE_EN_AZ = 88;
  const yarimVar = () => SAYFA.yarim() - SAYFA.kisa() + 2 >= GOVDE_EN_AZ;
  const gorunen = (d) => (d === 'yarim' && !yarimVar() ? 'kisa' : d);
  let sayfaDurum = ['kisa', 'yarim', 'tam'].includes(oku('bote-3d-sayfa')) ? oku('bote-3d-sayfa') : 'yarim';
  function sayfaUygula(d, kaydet = true, anlik = false) {
    if (!dikey.matches) { delete html.dataset.sayfa; dersEl.style.removeProperty('--sayfa-h'); S?.gorunurAlan(0, true); panelAyarla(html.dataset.panel !== 'kapali', false); return; }
    sayfaDurum = d; const g = gorunen(d); html.dataset.sayfa = g;
    kartAlani.inert = false;
    const yuk = Math.round(SAYFA[g]());
    if (anlik) html.dataset.suruklenen = '1';
    dersEl.style.setProperty('--sayfa-h', `${yuk}px`);
    if (anlik) requestAnimationFrame(() => delete html.dataset.suruklenen);
    S?.gorunurAlan(yuk, anlik);
    if (kaydet) sakla('bote-3d-sayfa', d);
  }
  let cek = null;
  for (const el of [$('.tutamac'), $('.kart-ust')].filter(Boolean)) {
    el.addEventListener('pointerdown', (e) => {
      if (!dikey.matches || e.target.closest('button')) return;
      el.setPointerCapture(e.pointerId);
      const t = performance.now();
      cek = { y: e.clientY, h: kartAlani.getBoundingClientRect().height, sonY: e.clientY, sonT: t, hiz: 0 };
      html.dataset.suruklenen = '1';
    });
    el.addEventListener('pointermove', (e) => {
      if (!cek) return;
      const t = performance.now();
      const yuk = Math.max(SAYFA.kisa(), Math.min(SAYFA.tam(), cek.h + (cek.y - e.clientY)));
      dersEl.style.setProperty('--sayfa-h', `${Math.round(yuk)}px`);
      cek.hiz = (cek.sonY - e.clientY) / Math.max(1, t - cek.sonT); cek.sonY = e.clientY; cek.sonT = t;
    });
    const bitir = (e) => {
      if (!cek) return;
      const c = cek; cek = null; delete html.dataset.suruklenen;
      const yuk = kartAlani.getBoundingClientRect().height, oynadi = Math.abs(e.clientY - c.y) > 6;
      const yv = yarimVar(), acik = yv ? 'yarim' : 'tam';
      let hedef;
      if (!oynadi) hedef = html.dataset.sayfa === 'kisa' ? acik : 'kisa'; // dokunma: kısa <-> yarım (alçak ekranda tam)
      else if (c.hiz > 0.45) hedef = yuk < SAYFA.yarim() ? acik : 'tam'; // hızlı yukarı
      else if (c.hiz < -0.45) hedef = yv && yuk > SAYFA.yarim() ? 'yarim' : 'kisa'; // hızlı aşağı
      else hedef = (yv ? ['kisa', 'yarim', 'tam'] : ['kisa', 'tam']).sort((a, b) => Math.abs(SAYFA[a]() - yuk) - Math.abs(SAYFA[b]() - yuk))[0];
      sayfaUygula(hedef);
      duyur({ kisa: 'Kartlar küçüldü', yarim: 'Kartlar yarım ekran', tam: 'Kartlar tam ekran' }[hedef]);
    };
    el.addEventListener('pointerup', bitir); el.addEventListener('pointercancel', bitir);
  }
  const dikeyDegisti = () => sayfaUygula(sayfaDurum, false, true);
  dikey.addEventListener?.('change', dikeyDegisti);
  let boyutZ = 0;
  window.addEventListener('resize', () => { clearTimeout(boyutZ); boyutZ = setTimeout(() => { if (dikey.matches) sayfaUygula(sayfaDurum, false, true); }, 120); });
  sayfaUygula(sayfaDurum, false, true);

  window.addEventListener('hashchange', () => { const i = kartlar.findIndex((k) => `#${k.id}` === location.hash); if (i >= 0 && i !== aktif) adimaGit(i); });
  const hashAdim = kartlar.findIndex((k) => `#${k.id}` === location.hash);
  adimaGit(hashAdim > 0 ? hashAdim : 0, true);

  // ---------------------------------------------------------- kart düğmeleri (anlatım kartındaki [data-eylem] düğmeleri)
  // Ne yaptıkları adaptörün işidir (adaptör.eylem). true/false dönerse düğmenin basılı durumu buna göre yazılır.
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-eylem]');
    if (!b || !S || !A) return;
    const sonuc = A.eylem?.(b.dataset.eylem, b);
    if (typeof sonuc === 'boolean' && b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', String(sonuc));
    S.iste();
  });
  $$('.gorunum button').forEach((b) => b.addEventListener('click', () => gorunumSec(b.dataset.gorunum)));
  $('#yakinlas')?.addEventListener('click', () => S?.yakinlas(0.8));
  $('#uzaklas')?.addEventListener('click', () => S?.yakinlas(1.25));
  // Sayfa kapanırken adaptörün zamanlayıcıları ve sesi bırakılır. Önbellekten geri dönebilecek sayfaya (persisted) dokunulmaz.
  window.addEventListener('pagehide', (e) => { if (!e.persisted) A?.durdur?.(); });

  // ---------------------------------------------------------- sahne
  const sahneAlani = $('.sahne-alani');
  requestAnimationFrame(() => setTimeout(sahneBaslat, 20));
  function sahneBaslat() {
    if (eksik.length) { html.dataset.webgl = 'yok'; return; }
    S = sahneKur($('#sahne'), { arkaPlan: temaRengi(), olay: sahneOlayi, guvenliAlan });
    if (!S) { html.dataset.webgl = 'yok'; return; }
    K.S = S;
    try {
      A = aile.sahneyiKur(S, { olay: adaptorOlayi, ders, veri });
      if (typeof A?.adimUygula !== 'function') throw new Error('adaptör adimUygula vermedi');
    } catch (e) {
      // Aile sahnesi kurulamadı: yarım sahne boşaltılıp gizlenir, yedek arayüz açılır. S boş kaldığı için adım
      // geçişleri sahneye dokunmaz (önceden her geçiş TypeError veriyordu).
      console.error(`dersMotoru(${aile.id || '?'}): sahne kurulamadı, yedek arayüz açıldı.`, e);
      S.scene.clear(); $('#sahne').style.visibility = 'hidden';
      S = K.S = A = null; html.dataset.webgl = 'yok';
      return;
    }
    S.dokunmaDinle(dokunuldu);
    // gorunen: alçak yatay ekranda kayıtlı "yarım" kısa görünür; kadraj ekrandaki sayfaya göre (yarıma göre küçük kalıyordu)
    if (dikey.matches) S.gorunurAlan(Math.round(SAYFA[gorunen(sayfaDurum)]()), true);
    adimUygula(kartlar[aktif].dataset.id, true);
    requestAnimationFrame(() => sahneAlani.classList.add('hazir'));
    if (olcum) {
      olcumPaneli();
      // ölçüm ve otomatik deneme betikleri için (yalnız ?olcum ile)
      window.__3d = { S, adaptor: A, adimaGit, kameraBul, gorunumSec, adim: () => kartlar[aktif].dataset.id, ...A.olcumEk };
    }
  }
  function adaptorOlayi(tur, metin) { if (tur === 'duyur') duyur(metin); }
  // Kadrajın güvenli alanı (tuval kenarlarından px): sahnedeki düğme şeridi (telefonda kart sayfasının üstünde
  // durur) ve üstteki ipucu dışarıda kalır.
  function guvenliAlan() {
    const c = $('#sahne').getBoundingClientRect(), pay = html.dataset.mod === 'tahta' ? 24 : 14;
    let ust = pay, alt = pay;
    const ipucu = $$('.ipucu', sahneAlani).find((x) => x.offsetParent !== null);
    if (ipucu) ust = Math.max(ust, ipucu.getBoundingClientRect().bottom - c.top + 8);
    const arac = $('.sahne-arac', sahneAlani);
    if (arac && getComputedStyle(arac).opacity !== '0') alt = Math.max(alt, c.bottom - arac.getBoundingClientRect().top + 8);
    const engel = [];
    const lj = $('#lejant');
    if (lj && lj.offsetParent !== null) { const r = lj.getBoundingClientRect(); engel.push({ x0: r.left - c.left, y0: r.top - c.top, x1: r.right - c.left, y1: r.bottom - c.top }); }
    return { ust, alt, sol: pay, sag: pay, engel };
  }
  function sahneOlayi(tur) {
    if (tur === 'baglam-kaybi') sahneAlani.classList.add('baglam-kaybi');
    if (tur === 'baglam-geri') sahneAlani.classList.remove('baglam-kaybi');
  }
  $('#yeniden-yukle')?.addEventListener('click', () => location.reload());

  // Kadraj kutusu (Ahmet 01.11: "ekrana tam sığsın, boşluklar dengeli olsun"). Aile kendi kadrajını hesaplayabilir
  // (adaptör.kameraBul: Arduino parça kutuları); yoksa KAMERA tablosundaki kutu, o da yoksa adaptörün alan kutusu, en sonda "genel".
  function kameraBul(kam, a = {}) {
    const o = A?.kameraBul?.(kam, a);
    if (o) return o;
    const k = KAMERA[kam];
    if (k) return { kutu: new Box3(new Vector3(k.kutu[0], k.kutu[1], k.kutu[2]), new Vector3(k.kutu[3], k.kutu[4], k.kutu[5])), yon: k.yon };
    const kutu = A?.kutuBul?.(kam);
    if (kutu && KAMERA.genel) return { kutu, yon: KAMERA.genel.yon };
    // "genel" de yoksa sonsuz özyineleme yerine null: kamera yerinde kalır (kurulum denetimi bunu zaten hata sayar)
    return kam === 'genel' ? null : kameraBul('genel', a);
  }
  function gorunumSec(ad) {
    const h = S && kameraBul(aktifCfg().kamera || 'genel', aktifCfg());
    const yon = aile.GORUNUM?.[ad];
    if (h) S.kameraGit(yon ? { ...h, yon } : h);
    for (const b of $$('.gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === ad));
  }

  // ---------------------------------------------------------- adımı sahneye uygula
  // Sıra: düğme durumları sıfırlanır, adaptör adımı uygular (parçalar, etiketler, aile durumu), vurgu kutuları konur,
  // ipucu satırı ve kamera ayarlanır, açıksa keşif işaretleri adıma göre yenilenir.
  function adimUygula(id, ilk = false) {
    const a = ders.adimlar[id] || {};
    for (const b of $$('[data-eylem][aria-pressed]')) b.setAttribute('aria-pressed', ilkBasili.get(b) || 'false');
    for (const b of $$('.gorunum button')) b.setAttribute('aria-pressed', String(b.dataset.gorunum === 'egik'));
    A.adimUygula(id, a, ilk);
    // eski vurgu kutuları: sahneden çıkar ve geometrisini bırak (her geçişte yenisi kuruluyor; malzeme ortak, kalır)
    for (const v of vurgular) { S.scene.remove(v); v.traverse((o) => o.geometry?.dispose()); }
    vurgular = aile.vurguYap ? (a.vurgu || []).map((ad) => (A.alanlar?.[ad] ? aile.vurguYap(S.scene, A.alanlar[ad]) : null)).filter(Boolean) : [];
    sahneAlani.dataset.ipucu = A.ipucu ? A.ipucu(a) : (a.dokun ? 'dokun' : '');
    const kadraj = kameraBul(a.kamera || 'genel', a);
    if (kadraj) S.kameraGit(kadraj, ilk);
    if (html.dataset.kesif === 'acik') kesifIsaretleri();
    S.iste();
    if (olcum) etiketDenetle(id, a);
  }
  // ?olcum: adım etiketlerinden noktası bulunamayan (sessizce düşen) varsa konsola uyarı. Açılış hareketi bitince
  // görünür olan noktalar (kasa içi) yanlış uyarı vermesin diye 2,5 sn sonra, adım hâlâ aynıysa bakılır.
  function etiketDenetle(id, a) {
    if (!a.etiket?.length || !A.noktaBul) return;
    setTimeout(() => {
      if (!A || kartlar[aktif].dataset.id !== id) return;
      const bos = a.etiket.map((e) => e[0]).filter((n) => { try { return !A.noktaBul(n); } catch (e) { return true; } });
      if (bos.length) console.warn(`[olcum] ${aile.id}/${veri.slug} adım "${id}": noktaBul boş döndü, etiket çizilmedi: ${bos.join(', ')}`);
    }, 2500);
  }

  // ---------------------------------------------------------- keşif ve bilgi kartı
  // Keşif modu (Ahmet 01.11: "hepsi aynı mor soru işareti değil, daha ayırt edilebilir olsunlar"): her işaret
  // grubunun rengini, simgesini ve numarasını taşır (renk tek başına anlam taşımaz); rozetli işaretlerde (Arduino pinleri)
  // numara yerine rozet yazar. Çakışanlardan önceliği düşük olan gizlenir, yaklaştıkça açılır (sahne.js).
  const sablon = $('#kesif-sablon'), lejant = $('#lejant');
  if (lejant && window.matchMedia('(min-width: 700px) and (min-height: 600px)').matches) lejant.open = true;
  lejant?.addEventListener('toggle', () => S?.guvenliYenile());
  const ikonKoy = (yuva, kat) => { const svg = sablon?.content.querySelector(`[data-kat="${kat}"] svg`); if (yuva && svg) yuva.replaceChildren(svg.cloneNode(true)); };
  function isaretYap(id, no, ozel, rozet) {
    const kat = kategoriBul(id);
    if (!kat) return null;
    const el = document.createElement('button');
    el.type = 'button'; el.className = rozet ? 'kesif-isaret pin-isaret' : 'kesif-isaret'; el.dataset.kat = kat; el.dataset.id = id;
    const daire = document.createElement('span'); daire.className = 'ki-daire'; ikonKoy(daire, kat);
    const rakam = document.createElement('span'); rakam.className = 'ki-no'; rakam.textContent = rozet || String(no); rakam.setAttribute('aria-hidden', 'true');
    el.append(daire, rakam);
    el.setAttribute('aria-label', rozet ? `${ozel}, ${KATEGORI[kat].ad} grubu` : `${no}. keşif noktası, ${KATEGORI[kat].ad} grubu`);
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      for (const x of $$('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current');
      el.setAttribute('aria-current', 'true');
      bilgiGoster(id, tahminAyar ? tahminAyar.checked : true, ozel);
    });
    return { el, kat };
  }
  function kesifIsaretleri() {
    if (!S || !A) return;
    const liste = [], gruplar = new Set();
    let no = 0;
    // her nokta: { id, nokta } ya da { id, nesne, yerel }; isteğe bağlı ozel (metin), rozet (numara yerine), adim (yaklaşma eşiği)
    const ekle = ({ id, ozel, rozet, adim = 0, ...yer }) => {
      const r = isaretYap(id, no + 1, ozel, rozet);
      if (!r) return;
      if (!rozet) no++;
      gruplar.add(r.kat);
      liste.push({ el: r.el, oncelik: KESIF[id].oncelik, adim, ...yer });
    };
    for (const k of A.kesifNoktalari || []) ekle(k);
    for (const k of A.kesifEk?.(aktifCfg()) || []) ekle(k);
    S.isaretKoy(liste);
    for (const li of $$('li[data-kat]', lejant || document.createElement('i'))) li.hidden = !gruplar.has(li.dataset.kat);
  }
  const kesifDugme = $('#kesif-dugme');
  kesifDugme?.addEventListener('click', () => {
    const acik = html.dataset.kesif !== 'acik';
    html.dataset.kesif = acik ? 'acik' : '';
    kesifDugme.setAttribute('aria-pressed', String(acik));
    S?.guvenliYenile();
    if (acik) { kesifIsaretleri(); duyur('Keşif modu açık: işaretli parçalara dokun. İşaretin rengi ve simgesi parçanın grubunu gösterir.'); } else { S?.isaretKoy([]); bilgiKapat(); duyur('Keşif modu kapandı'); }
  });
  // sahneye dokunuş: önce adaptör (düğme, delik, klavye tuşu gibi aileye özgü etkileşim), olmadıysa keşif kartı
  function dokunuldu(v, nokta) {
    if (!v) { bilgiKapat(); return; }
    if (A?.dokunuldu?.(v, nokta)) { S.iste(); return; }
    if (v.kesif) bilgiGoster(v.kesif, html.dataset.kesif === 'acik' && (tahminAyar ? tahminAyar.checked : true), v.ozel);
  }

  // Kartın içeriği: kavramlar.json, sonra kesif.json (derlemede gömülür), sonra keşif kataloğundaki kavram
  // eşleşmesi, en sonda katalogdaki ad ve kısa açıklama (kesif-veri.js).
  function icerikBul(id) {
    const kv = veri.kavramlar || {}, ki = veri.kesifIcerik || {}, kt = KESIF[id];
    if (kv[id]) return { ...kv[id], ad: kt?.ad || kv[id].ad };
    if (ki[id]) return { ...ki[id], ad: ki[id].ad || kt?.ad || id };
    if (kt?.kavram && kv[kt.kavram]) return { ...kv[kt.kavram], ad: kt.ad };
    if (kt) return { ad: kt.ad, yalin: kt.kisa };
    return null;
  }
  let tahminBekliyor = false, bilgiOzel = '';
  function bilgiGoster(id, tahmin = false, ozel = '') {
    const kutu = $('#bilgi'), ic = id ? icerikBul(id) : null;
    if (!kutu || !ic) return;
    const s = html.dataset.sinif || '6', yeni = id !== bilgiAcik || kutu.hidden;
    if (tahmin !== 'koru') { tahminBekliyor = Boolean(tahmin); bilgiOzel = ozel || ''; }
    const soru = $('#kesif-soru'), cevap = $('#bilgi-cevap');
    if (soru) soru.hidden = !tahminBekliyor;
    if (cevap) cevap.hidden = tahminBekliyor;
    const kat = kategoriBul(id), katEl = $('#bilgi-kat');
    if (katEl) { katEl.hidden = !kat; if (kat) { katEl.dataset.kat = kat; $('#bilgi-kat-ad').textContent = KATEGORI[kat].ad; ikonKoy($('.ki-daire', katEl), kat); } }
    $('#bilgi-baslik').textContent = ic.ad;
    const oz = $('#bilgi-ozel');
    if (oz) { oz.textContent = bilgiOzel; oz.hidden = !bilgiOzel || bilgiOzel === ic.ad; }
    if (ic.yalin) { $('#bilgi-teknik').textContent = ic.yalin; $('#bilgi-sosyal').textContent = ''; kutu.classList.add('yalin'); }
    else { $('#bilgi-teknik').innerHTML = ic.teknik?.[s] || ic.teknik?.['6'] || ''; $('#bilgi-sosyal').innerHTML = ic.sosyal?.[s] || ''; kutu.classList.toggle('yalin', !ic.sosyal?.[s]); }
    if (yeni) { const fig = $('#bilgi-gorsel'); if (fig) { fig.hidden = true; const img = $('img', fig); if (img) { img.removeAttribute('src'); img.alt = ''; } } }
    bilgiAcik = id; kutu.hidden = false;
    if (dikey.matches && sayfaDurum === 'tam') sayfaUygula('yarim'); // kart sayfası tam açıksa bilgi kartına yer aç
    duyur(tahminBekliyor ? 'Sence bu nedir? Cevabı gör düğmesine bas' : [ic.ad, bilgiOzel].filter(Boolean).join(', '));
    // içerik görseli gibi eklentiler için: hangi kartın açıldığı
    if (yeni) document.dispatchEvent(new CustomEvent('3d:bilgi', { detail: { id } }));
  }
  bilgiYenile = () => bilgiGoster(bilgiAcik, 'koru');
  // dışarıdan (ör. içerik sayfası, öğretmen notu) bir keşif kartı açmak için; tahmin ayarına uyar
  document.addEventListener('3d:kesif-ac', (e) => { const id = e.detail?.id; if (id) bilgiGoster(id, tahminAyar ? tahminAyar.checked : true, e.detail.ozel); });
  $('#kesif-gor')?.addEventListener('click', () => { tahminBekliyor = false; bilgiGoster(bilgiAcik, 'koru'); $('#bilgi-baslik')?.focus?.(); });
  function bilgiKapat() { const k = $('#bilgi'); if (k) k.hidden = true; bilgiAcik = null; for (const x of $$('.kesif-isaret[aria-current]')) x.removeAttribute('aria-current'); }
  $('#bilgi-kapat')?.addEventListener('click', bilgiKapat);

  // ---------------------------------------------------------- ölçüm paneli (?olcum): tahtada akıcılığı sayıyla görmek için
  function olcumPaneli() {
    const p = document.createElement('div'); p.className = 'olcum'; sahneAlani.appendChild(p);
    let n = 0, t0 = performance.now(), son = t0, enUzun = 0;
    S.kareGuncelleyici((t) => { n++; enUzun = Math.max(enUzun, t - son); son = t; return false; });
    setInterval(() => {
      const t = performance.now(), q = S.kalite();
      p.textContent = `${Math.round((n * 1000) / (t - t0))} kare/sn · en uzun ${Math.round(enUzun)} ms · ölçek ${q.piksel} (tam ${q.tam}, kademe ${q.kademe})`;
      n = 0; t0 = t; enUzun = 0;
    }, 1000);
  }
}
