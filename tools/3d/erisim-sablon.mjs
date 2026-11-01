// Erişilebilirlik için derleme zamanı HTML parçaları (build.mjs ve ozgur-sayfa.mjs kullanır):
//  - erisimDugmeHtml(): üst çubuktaki giriş düğmesi (yalnız simge, aria-label ve ipucu; kitap düğmesiyle aynı biçim)
//  - erisimPaneliHtml(ico): sağ panelin içinde açılan ayar katmanı ("Panel ayarları" ile aynı kalıp: .ayarlar,
//    .ayar-perde; telefonda alttan açılan sayfa). Davranış src/erisilebilirlik.js'te, görünüm erisilebilirlik.css'te.
// Metin sade Türkçe (5-8. sınıf), uzun tire yok. Hub sayfasında (/3d) bu arayüz yoktur: orada yalnız kayıtlı ayarlar uygulanır.

// Evrensel erişim simgesi: daire içinde kollarını açmış insan (UniConnectly ile aynı çizim). Lucide'deki "accessibility"
// tekerlekli sandalyeli figürdür; erişilebilirlik yalnız hareket engeli demek değil (Ahmet 02.10).
const SIMGE = '<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="1.4" fill="currentColor" stroke="none"/><path d="M7 10l5 1 5-1"/><path d="M12 11v3.5"/><path d="M9.5 18.5L12 14.5l2.5 4"/></svg>';

export function erisimDugmeHtml() {
  return '<button type="button" class="dugme" id="erisim-dugme" aria-controls="erisim-panel" aria-expanded="false" aria-label="Erişilebilirlik ayarları" title="Erişilebilirlik ayarları">' + SIMGE + '</button>';
}

// [anahtar, ad, simge, ipucu]
const KAROLAR = {
  yazi: [
    ['okunakli', 'Okunaklı yazı', 'type', 'Harfleri daha seçilebilir bir yazı tipiyle göster'],
    ['baslik', 'Başlıkları vurgula', 'heading', 'Başlıkların çevresine kesikli çerçeve çiz'],
    ['baglanti', 'Bağlantıları vurgula', 'link', 'Bağlantıları sarı zeminle ve altı çizili göster'],
  ],
  renk: [
    ['kontrast', 'Yüksek kontrast', 'contrast', 'Yazı ile zemin arasındaki farkı artır'],
    ['ters', 'Ters renk', 'sun-moon', 'Panelin ve çubukların açık ve koyu renklerini tersine çevir. 3D sahne olduğu gibi kalır'],
  ],
  okuma: [
    ['cizgi', 'Okuma kılavuzu', 'scan-line', 'Fareyi ya da parmağı izleyen bir okuma çizgisi'],
    ['maske', 'Okuma maskesi', 'blinds', 'Okuduğun yer dışındaki her yeri karart'],
    ['imlec', 'Büyük imleç', 'mouse-pointer-2', 'Fare imlecini büyüt'],
    ['odak', 'Belirgin odak', 'focus', 'Klavyeyle seçtiğin yeri kalın çerçeveyle göster'],
    ['hareketsiz', 'Hareketi durdur', 'circle-pause', 'Kamera uçuşlarını ve geçiş hareketlerini kapat'],
  ],
};
const KADEME_YAZI = [[0, 'Normal'], [1, 'Geniş'], [2, 'Çok geniş']];
const KADEME_RENK = [[0, 'Normal'], [1, 'Soluk'], [2, 'Gri']];

export function erisimPaneliHtml(ico) {
  const onay = ico('check').replace('class="ico"', 'class="ico e-onay"');
  const karo = ([k, ad, simge, ipucu]) => `<button type="button" class="e-karo" data-e="${k}" aria-pressed="false" title="${ipucu}">${ico(simge)}<span>${ad}</span>${onay}</button>`;
  const kademe = (k, ad, liste) => `<p class="ayar-ad" id="e-${k}-ad">${ad}</p><div class="grup e-kademe" role="group" aria-labelledby="e-${k}-ad">${liste.map(([d, y]) => `<button type="button" class="dugme" data-e-seviye="${k}" data-deger="${d}" aria-pressed="${d === 0}">${y}</button>`).join('')}</div>`;
  return '<div class="ayar-perde" id="erisim-perde" hidden></div>'
    + '<div class="ayarlar erisim-panel" id="erisim-panel" role="group" aria-labelledby="erisim-baslik" hidden>'
    + `<div class="ayar-ust"><p class="ayar-baslik" id="erisim-baslik">Erişilebilirlik</p><button type="button" class="kucuk-dugme" id="erisim-kapat" aria-label="Erişilebilirlik ayarlarını kapat">${ico('x')}</button></div>`
    + '<p class="e-not">Yazıyı, rengi ve hareketi kendine göre ayarla.</p>'
    + '<p class="ayar-ad" id="e-yazi-ad">Yazı boyutu</p>'
    // Yazı boyutu Panel ayarlarındaki ayarın aynısıdır: aynı data-yazi düğmeleri, aynı kayıt. Değer oradan okunup gösterilir.
    + '<div class="grup" role="group" aria-labelledby="e-yazi-ad"><button type="button" class="dugme" data-yazi="-1" aria-label="Yazıyı küçült">A−</button><span class="yazi-deger" id="erisim-yazi-deger" aria-live="polite">%100</span><button type="button" class="dugme" data-yazi="1" aria-label="Yazıyı büyüt">A+</button></div>'
    + kademe('satir', 'Satır aralığı', KADEME_YAZI) + kademe('harf', 'Harf aralığı', KADEME_YAZI)
    + `<div class="e-izgara">${KAROLAR.yazi.map(karo).join('')}</div>`
    + '<p class="ayar-ad">Renk</p>'
    + `<div class="e-izgara">${KAROLAR.renk.map(karo).join('')}</div>`
    + kademe('renk', 'Renk canlılığı', KADEME_RENK)
    + '<p class="ayar-ad">Okuma ve hareket</p>'
    + `<div class="e-izgara">${KAROLAR.okuma.map(karo).join('')}`
    + `<button type="button" class="e-karo e-konus" id="erisim-konus" title="Panelde açık olan adımı seslendir"><span class="e-konus-oku">${ico('volume-2')}<span>Sesli oku</span></span><span class="e-konus-dur">${ico('volume-x')}<span>Okumayı durdur</span></span></button></div>`
    + '<p class="e-not" id="erisim-konus-not" hidden></p>'
    + '<p class="e-not">Tercihler yalnız bu cihazda saklanır.</p>'
    + `<button type="button" class="dugme e-sifirla" id="erisim-sifirla">${ico('rotate-ccw')}Sıfırla</button>`
    + '<p class="sr-only" id="erisim-durum" role="status"></p></div>';
}
