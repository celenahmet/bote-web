// Eski tarayıcı uyumu: okul bilgisayarlarındaki Firefox 115 ESR (Windows 7, Pardus), Chrome 109 (Windows 7) ve eski
// iPad'lerdeki Safari 15.4'te eksik CSS/DOM özelliklerinin yerine geçenler. Ders ve Özgür sayfası ikisi de kullanır.

// :has() Firefox 121'den önce yok. Kart alanında açık bir ayar ya da erişilebilirlik paneli varsa kart alanına sınıf yazılır;
// dikey ekranda paneli üst katmana alan kurallar (stil.css, erisilebilirlik.css) bu sınıfa bakar. Erişilebilirlik paneli de
// .ayarlar sınıfını taşır, yani o açıkken ayar-acik da yazılır. Her tarayıcıda aynı yol çalışır, test edilen yol tek.
export function panelSiniflari(kart) {
  if (!kart) return;
  const esitle = () => {
    kart.classList.toggle('ayar-acik', !!kart.querySelector('.ayarlar:not([hidden])'));
    kart.classList.toggle('erisim-acik', !!kart.querySelector('.erisim-panel:not([hidden])'));
  };
  esitle();
  new MutationObserver(esitle).observe(kart, { subtree: true, childList: true, attributes: true, attributeFilter: ['hidden'] });
}

// Kapsayıcı sorgusu Safari 16'dan önce yok. Sahne düğme şeridinin genişliğine göre sınıf yazılır; stil.css'teki yedek kurallar
// @container eşikleriyle aynıdır (640 ve 380 px). Kapsayıcı sorgusunu tanıyan tarayıcıda hiçbir şey yapılmaz.
export function seritYedegi(serit) {
  if (!serit || typeof ResizeObserver === 'undefined') return;
  try { if (CSS.supports('container-type', 'inline-size')) return; } catch (e) { /* CSS.supports yoksa yedek kurulur */ }
  new ResizeObserver((girdiler) => {
    const w = girdiler[0].contentRect.width;
    serit.classList.toggle('dar-640', w <= 640);
    serit.classList.toggle('dar-380', w <= 380);
  }).observe(serit);
}

// Tam ekran: Safari 16.4'ten önce (iPad) yalnız webkit önekli API var. Hiçbiri yoksa (iPhone) düğme gizlenir.
export function tamEkranKur(dugme, el) {
  if (!dugme) return;
  const d = document;
  if (!(d.fullscreenEnabled || d.webkitFullscreenEnabled)) { dugme.hidden = true; return; }
  dugme.addEventListener('click', () => {
    if (d.fullscreenElement || d.webkitFullscreenElement) {
      const s = d.exitFullscreen ? d.exitFullscreen() : d.webkitExitFullscreen?.();
      s?.catch?.(() => {});
    } else if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
    else el.webkitRequestFullscreen?.();
  });
}
