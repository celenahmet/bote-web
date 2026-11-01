// Erişilebilirlik arayüzü (ders ve Özgür Mod sayfaları): üst çubuktaki simge düğmesi, sağ panelin içinde açılan ayar katmanı,
// okuma kılavuzu, okuma maskesi ve sesli okuma. Ayar modeli ve kayıt erisim-cekirdek.js'te; sayfa başındaki kısa betik
// (erisim-erken.js) aynı çekirdekle ayarları ilk boyamadan önce uygular. Biçimlendirme erisilebilirlik.css'te.
//
// İlkeler:
//  - Sahneye dokunmaz. Canvas, etiketler, işaretler ve renk açıklaması ders içeriğidir (LED kırmızısı, kablo renkleri, keşif
//    grupları anlam taşır); renk ayarları yalnız arayüze (üst çubuk, panel, kartlar) uygulanır.
//  - Sürekli çizim istemez: kılavuz ve maske yalnız işaretçi olayında konum yazar, requestAnimationFrame kullanmaz.
//  - Yazı boyutu Panel ayarlarındakiyle aynı ayardır (aynı data-yazi düğmeleri, aynı kayıt, --yazi). Bu dosya yalnız değeri
//    gösterir; iki denetim her zaman aynı değeri okur.
//  - Kullanım hiçbir yere gönderilmez.
import { VARSAYILAN, YAZI_OLCEKLERI, oku, yaz, uygula, etkinSayisi } from './erisim-cekirdek.js';

const html = document.documentElement;
const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => [...k.querySelectorAll(s)];

function baslat() {
  const dugme = $('#erisim-dugme'), katman = $('#erisim-panel'), perde = $('#erisim-perde');
  if (!dugme || !katman || !perde) return;
  const dikey = window.matchMedia('(orientation: portrait), (max-width: 820px)');
  const durum = $('#erisim-durum', katman), konusDugme = $('#erisim-konus', katman), konusNot = $('#erisim-konus-not', katman);
  let ayar = oku();

  const duyur = (t) => { if (!durum) return; durum.textContent = ''; setTimeout(() => { durum.textContent = t; }, 40); };
  const yaziOlcek = () => { const v = Number(html.style.getPropertyValue('--yazi')); return YAZI_OLCEKLERI.includes(v) ? v : 1; };
  // yazı ölçüsü, aralık ya da hareket ayarı değişince sahne etiketleri yeniden ölçülür (sahne.js dinler)
  const sahneyeBildir = () => window.dispatchEvent(new CustomEvent('bote-erisim'));

  // ------------------------------------------------------------------ görünüm eşitleme
  let konusuyor = false;
  function ciz() {
    for (const b of $$('[data-e]', katman)) b.setAttribute('aria-pressed', String(!!ayar[b.dataset.e]));
    for (const b of $$('[data-e-seviye]', katman)) b.setAttribute('aria-pressed', String(ayar[b.dataset.eSeviye] === Number(b.dataset.deger)));
    const y = yaziOlcek(), deger = `%${Math.round(y * 100)}`;
    const d = $('#erisim-yazi-deger', katman);
    if (d && d.textContent !== deger) d.textContent = deger;
    $('[data-yazi="-1"]', katman)?.setAttribute('aria-disabled', String(y <= YAZI_OLCEKLERI[0]));
    $('[data-yazi="1"]', katman)?.setAttribute('aria-disabled', String(y >= YAZI_OLCEKLERI[YAZI_OLCEKLERI.length - 1]));
    const n = etkinSayisi(ayar, y);
    html.toggleAttribute('data-e-var', n > 0);
    dugme.toggleAttribute('data-okuyor', konusuyor);
    dugme.setAttribute('aria-label', 'Erişilebilirlik ayarları' + (konusuyor ? ', sesli okuma açık' : n ? `, ${n} ayar açık` : ''));
    konusDugme?.toggleAttribute('data-okuyor', konusuyor);
  }

  // ------------------------------------------------------------------ açma ve kapama
  // Panel ayarlarıyla aynı kalıp: panelin içinde açılır, telefonda alttan sayfa (stil.css .ayarlar), dışarı tıklayınca ya da
  // Escape ile kapanır. Panel kapalıysa önce panel açılır.
  function ac(acik, odakGeri = false) {
    if (acik === !katman.hidden) return;
    if (acik) {
      if (html.dataset.panel === 'kapali' && !dikey.matches) ($('#mini-ac') || $('#panel-dugme'))?.click();
      if (html.dataset.ek === 'acik') $('#ogretmen-kapat')?.click();
      const pa = $('#ayarlar');
      if (pa && !pa.hidden) ($('#ayar-kapat') || $('#ayar-dugme'))?.click();
      katman.scrollTop = 0;
    }
    katman.hidden = !acik; perde.hidden = !acik;
    dugme.setAttribute('aria-expanded', String(acik));
    if (acik) {
      ciz(); sesNotu();
      $$('button', katman).find((el) => el.id !== 'erisim-kapat' && !el.hidden && el.offsetParent !== null)?.focus({ preventScroll: true });
    } else if (odakGeri) dugme.focus({ preventScroll: true });
  }
  dugme.addEventListener('click', () => ac(katman.hidden));
  $('#erisim-kapat', katman)?.addEventListener('click', () => ac(false, true));
  // Yakalama aşamasında: Panel ayarları düğmesi gibi olayı durduranlar da kapatmayı tetikler.
  window.addEventListener('click', (e) => {
    if (katman.hidden || e.target.closest?.('#erisim-panel, #erisim-dugme')) return;
    ac(false);
  }, true);
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!katman.hidden) { e.preventDefault(); e.stopImmediatePropagation(); ac(false, true); } else if (konusuyor) konusDur(true);
  }, true);
  // Katman açıkken ok ve sayfa tuşları adım geçişine gitmesin (main.js belgede dinler)
  katman.addEventListener('keydown', (e) => { if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) e.stopPropagation(); });

  // ------------------------------------------------------------------ ayar değişimi
  function degisti() {
    yaz(ayar); uygula(ayar); ciz(); kilavuzMaske(); sahneyeBildir();
  }
  katman.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || !katman.contains(b)) return;
    if (b.dataset.e) { ayar[b.dataset.e] = !ayar[b.dataset.e]; degisti(); }
    else if (b.dataset.eSeviye) { ayar[b.dataset.eSeviye] = Number(b.dataset.deger); degisti(); }
    else if (b === konusDugme) { if (konusuyor) konusDur(true); else konusBaslat(); }
    else if (b.id === 'erisim-sifirla') sifirla();
  });
  function sifirla() {
    konusDur();
    ayar = { ...VARSAYILAN };
    // Yazı boyutu Panel ayarlarındaki ayarla aynıdır: onun kendi düğmeleriyle %100'e getirilir (aynı kayıt, aynı değer)
    const hedef = YAZI_OLCEKLERI.indexOf(1);
    for (let g = 0; g < YAZI_OLCEKLERI.length; g++) {
      const sira = YAZI_OLCEKLERI.indexOf(yaziOlcek());
      if (sira === hedef) break;
      $(`[data-yazi="${sira > hedef ? -1 : 1}"]`, katman)?.click();
    }
    degisti(); duyur('Erişilebilirlik ayarları sıfırlandı');
  }
  // Panel ayarlarındaki ya da buradaki yazı boyutu değişince değer eşitlenir (tek kaynak: html üzerindeki --yazi)
  let sonYazi = yaziOlcek();
  new MutationObserver(() => {
    const y = yaziOlcek();
    if (y === sonYazi) return;
    sonYazi = y; ciz(); sahneyeBildir();
  }).observe(html, { attributes: true, attributeFilter: ['style'] });

  // ------------------------------------------------------------------ okuma kılavuzu ve maskesi
  // Yalnız işaretçi olayında konum yazılır (rAF yok). İkisi de pointer-events:none: sahneyi döndürmeyi, dokunmayı ve
  // kaydırmayı engellemez.
  let kilavuz = null, maske = null, imlecY = Math.round(window.innerHeight * 0.4), dinliyor = false;
  const yaricap = () => Math.round((parseFloat(getComputedStyle(document.body).fontSize) || 16) * 3.5);
  function olustur(sinif) { const e = document.createElement('div'); e.className = sinif; e.setAttribute('aria-hidden', 'true'); document.body.appendChild(e); return e; }
  function konumla() {
    if (kilavuz) kilavuz.style.transform = `translate3d(0,calc(${imlecY}px - 50%),0)`;
    if (maske) { const r = yaricap(); maske.firstChild.style.height = `${Math.max(0, imlecY - r)}px`; maske.lastChild.style.top = `${imlecY + r}px`; }
  }
  const imlecIzle = (e) => { if (e.isPrimary === false) return; imlecY = e.clientY; konumla(); };
  function kilavuzMaske() {
    if (ayar.cizgi && !kilavuz) kilavuz = olustur('e-kilavuz'); else if (!ayar.cizgi && kilavuz) { kilavuz.remove(); kilavuz = null; }
    if (ayar.maske && !maske) { maske = olustur('e-maske'); maske.innerHTML = '<span></span><span></span>'; } else if (!ayar.maske && maske) { maske.remove(); maske = null; }
    const gerek = !!(kilavuz || maske);
    if (gerek && !dinliyor) { window.addEventListener('pointermove', imlecIzle, { passive: true }); window.addEventListener('pointerdown', imlecIzle, { passive: true }); dinliyor = true; }
    else if (!gerek && dinliyor) { window.removeEventListener('pointermove', imlecIzle); window.removeEventListener('pointerdown', imlecIzle); dinliyor = false; }
    if (gerek) konumla();
  }

  // ------------------------------------------------------------------ sesli okuma (Web Speech, tr-TR)
  // Açık adımın panel metnini okur (metin seçiliyse seçileni). Uzun metin Chrome'da yarıda kesildiği için yaklaşık 220
  // karakterlik parçalara, cümle sınırlarından bölünür. Adım ya da sınıf değişince, panel kapanınca ve Escape ile durur.
  const ss = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window ? window.speechSynthesis : null;
  let oturumNo = 0;
  if (!ss && konusDugme) konusDugme.hidden = true;
  const OKU = 'h2,h3,p,li,summary,legend,th,td,.soru button';
  const DISARI = '.kod,.kontroller,.ayarlar,.erisim-panel,.js-gerek,[aria-hidden="true"]';
  function panelMetinleri() {
    const kok = $('.adim.etkin') || $$('.kart-govde .bolum').find((b) => !b.hidden) || $('.kart-govde');
    if (!kok) return [];
    const liste = [];
    for (const el of kok.querySelectorAll(OKU)) {
      if (el.closest(DISARI) || !el.getClientRects().length || el.querySelector(OKU)) continue; // yalnız görünen, en içteki öğe
      const t = (el.innerText || '').replace(/\s+/g, ' ').trim();
      if (t) liste.push(t);
    }
    return liste;
  }
  function secimMetni() {
    const s = window.getSelection ? window.getSelection() : null;
    return s && !s.isCollapsed ? s.toString().replace(/\s+/g, ' ').trim() : '';
  }
  // Metinleri cümlelere, cümleleri sinir uzunluğunu aşmayan parçalara ayırır
  function parcala(metinler, sinir = 220) {
    const cikti = [];
    let simdiki = '';
    const it = () => { if (simdiki) cikti.push(simdiki); simdiki = ''; };
    const uzunKes = (c) => { // sinirdan uzun cümle: virgülden, olmazsa boşluktan
      let p = '';
      for (const kelime of c.split(/\s+/)) {
        if (p && (p + ' ' + kelime).length > sinir) {
          const v = p.lastIndexOf(',');
          if (v > sinir * 0.5) { cikti.push(p.slice(0, v + 1)); p = (p.slice(v + 1) + ' ' + kelime).trim(); } else { cikti.push(p); p = kelime; }
        } else p = p ? `${p} ${kelime}` : kelime;
      }
      return p;
    };
    for (let m of metinler) {
      if (!/[.!?…:]$/.test(m)) m += '.'; // başlıklar ve maddeler arasında duraklama olsun
      for (const c0 of m.match(/[^.!?…]+[.!?…]*/g) || [m]) {
        const c = c0.trim();
        if (!c) continue;
        if (c.length > sinir) { it(); simdiki = uzunKes(c); continue; }
        if (simdiki && (simdiki + ' ' + c).length > sinir) it();
        simdiki = simdiki ? `${simdiki} ${c}` : c;
      }
    }
    it();
    return cikti;
  }
  function sesBul() { try { return ss.getVoices().find((v) => /^tr([-_]|$)/i.test(v.lang)) || null; } catch (e) { return null; } }
  function sesNotu() {
    if (!ss || !konusNot) return;
    let ses = [];
    try { ses = ss.getVoices(); } catch (e) { /* yok say */ }
    konusNot.hidden = !(ses.length && !sesBul());
    if (!konusNot.hidden) konusNot.textContent = 'Bu cihazda Türkçe okuma sesi yok; okuma başka bir dille olabilir.';
  }
  ss?.addEventListener?.('voiceschanged', sesNotu);
  function konusDur(bildir = false) {
    oturumNo++;
    if (ss) { try { ss.cancel(); } catch (e) { /* yok say */ } }
    if (!konusuyor) return;
    konusuyor = false; ciz();
    if (bildir) duyur('Okuma durdu');
  }
  function konusBaslat() {
    if (!ss) return;
    const parcalar = parcala(secimMetni() ? [secimMetni()] : panelMetinleri());
    if (!parcalar.length) { if (konusNot) { konusNot.hidden = false; konusNot.textContent = 'Okunacak metin bulunamadı.'; } return; }
    if (konusNot) konusNot.hidden = true;
    oturumNo++;
    const oturum = oturumNo;
    try { ss.cancel(); } catch (e) { /* yok say */ }
    const ses = sesBul();
    let kalan = parcalar.length;
    const bitti = () => { if (oturum !== oturumNo || --kalan > 0) return; konusuyor = false; ciz(); };
    try {
      for (const p of parcalar) {
        const u = new SpeechSynthesisUtterance(p);
        u.lang = 'tr-TR'; u.rate = 0.95;
        if (ses) u.voice = ses;
        u.onend = bitti;
        u.onerror = (ev) => { if (ev.error !== 'interrupted' && ev.error !== 'canceled') bitti(); };
        ss.speak(u);
      }
    } catch (e) { // tarayıcı konuşmayı reddetti: yarım kalan okuma iptal edilir, kullanıcıya söylenir
      oturumNo++;
      try { ss.cancel(); } catch (x) { /* yok say */ }
      if (konusNot) { konusNot.hidden = false; konusNot.textContent = 'Okuma bu cihazda başlatılamadı.'; }
      return;
    }
    konusuyor = true; ciz(); duyur('Okuma başladı');
  }
  window.addEventListener('pagehide', () => { if (ss) { try { ss.cancel(); } catch (e) { /* yok say */ } } });
  // Adım değişince (sayaç) ya da Özgür Mod sekmesi değişince okuma durur
  const adimIzle = $('#adim-sayac') || $('.sekmeler');
  if (adimIzle) new MutationObserver(() => konusDur()).observe(adimIzle, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['aria-selected'] });
  // Panel kapanınca (yatay: panel kapalı, dikey: kart sayfası küçülmüş) okuma durur; yatayda katman da kapanır. Sınıf değişince de durur.
  new MutationObserver(() => {
    const kapali = !dikey.matches && html.dataset.panel === 'kapali';
    if (kapali) ac(false);
    if (kapali || (dikey.matches && html.dataset.sayfa === 'kisa')) konusDur();
  }).observe(html, { attributes: true, attributeFilter: ['data-panel', 'data-sayfa'] });
  new MutationObserver(() => konusDur()).observe(html, { attributes: true, attributeFilter: ['data-sinif'] });

  // ------------------------------------------------------------------ başlangıç
  uygula(ayar); ciz(); kilavuzMaske();
}

baslat();
