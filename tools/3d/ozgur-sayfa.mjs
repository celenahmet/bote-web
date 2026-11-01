// Özgür Mod sayfası: /3d/ozgur-mod (Ahmet 01.11: "hocanın özgür modu olsa ... o da ayrı bir sayfa olabilir").
// build.mjs işaretli bölümden çağrılır; ortak yardımcılar (kaçış, ikon, üst çubuk, sınıf penceresi) oradan gelir.
// Üst çubuk ve yerleşim ders sayfalarıyla aynı: yatay ekranda yan panel, dikey ekranda aşağıdan çekilen sayfa.
import { KABLO_RENKLERI, PROGRAM_PINLERI } from './src/devreCoz.js';
import { ledIkon, direncIkon, butonIkon, kabloIkon, KABLO_HEX } from './src/ozgurIkon.js';

export const OZGUR_YOL = '/3d/ozgur-mod';
export const OZGUR_BASLIK = 'Özgür Mod: Devreni Kendin Kur';

export function ozgurSayfasi({ esc, ico, jsonGom, ustCubuk, sinifPenceresi, basBetik, css, SITE, ONIZLEME, jsAd }) {
  const yol = OZGUR_YOL;
  const baslik = `${OZGUR_BASLIK} | bote.web.tr`;
  const aciklama = 'Arduino ve breadboard ile devreni kendin kur: LED, direnç, buton ve kabloyu istediğin deliğe tak, pini ve programı seç; hatalar Türkçe açıklanır.';
  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'LearningResource', name: OZGUR_BASLIK, description: aciklama, url: SITE + yol, inLanguage: 'tr', isAccessibleForFree: true, learningResourceType: 'Simülasyon',
      educationalLevel: 'Ortaokul (5-8. sınıf)', audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
      isPartOf: { '@type': 'CollectionPage', name: '3D Simülasyon Merkezi', url: `${SITE}/3d` }, publisher: { '@type': 'Organization', name: 'bote.web.tr', url: SITE } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'bote.web.tr', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: '3D Simülasyon Merkezi', item: `${SITE}/3d` }, { '@type': 'ListItem', position: 3, name: 'Özgür Mod', item: SITE + yol }] },
  ] };
  const IKON = {
    hata: ico('octagon-alert'), uyari: ico('triangle-alert'), bilgi: ico('info'), tamam: ico('circle-check'), bekliyor: ico('circle-stop'),
    oynat: ico('play'), dur: ico('square'), tasi: ico('move'), sil: ico('trash-2'), ters: ico('arrow-left-right'), sec: ico('pointer'), x: ico('x'),
  };
  const gorunum = [['egik', 'Eğik', 'Eğik'], ['ustten', 'Üstten', 'Üst'], ['onden', 'Önden', 'Ön'], ['yandan', 'Yandan', 'Yan']]
    .map(([k, y, ks]) => `<button type="button" data-gorunum="${k}" aria-pressed="${k === 'egik'}" aria-label="${y} bakış"><span class="uzun">${y}</span><span class="kisa" aria-hidden="true">${ks}</span></button>`).join('');
  const pinler = (ad, secili) => PROGRAM_PINLERI.map((p) => `<label class="secim"><input type="radio" name="${ad}" value="${p}"${p === secili ? ' checked' : ''}><span>${p}</span></label>`).join('');
  const palet = [
    ['led', 'kirmizi', ledIkon('kirmizi'), 'Kırmızı LED'], ['led', 'sari', ledIkon('sari'), 'Sarı LED'], ['led', 'yesil', ledIkon('yesil'), 'Yeşil LED'],
    ['direnc', '220', direncIkon(220), '220 Ω direnç'], ['direnc', '10000', direncIkon(10000), '10 kΩ direnç'], ['buton', '', butonIkon(), 'Buton'], ['kablo', '', kabloIkon(), 'Kablo'],
  ].map(([tur, deger, svg, ad]) => `<button type="button" class="palet-dugme" data-arac="${tur}"${deger ? ` data-deger="${deger}"` : ''} aria-pressed="false">${svg}<span>${esc(ad)}</span></button>`).join('');
  const renkler = Object.entries(KABLO_RENKLERI).map(([k, ad]) => `<label class="renk"><input type="radio" name="kablo-renk" value="${k}"${k === 'turuncu' ? ' checked' : ''}><span><i style="background:${KABLO_HEX[k]}"></i>${esc(ad)}${ico('check')}</span></label>`).join('');
  const kaynak = (adres, ad) => `<li><a href="${adres}" rel="noopener">${esc(ad)}</a></li>`;
  const ogretmen = `<section id="ogretmen" class="ek" tabindex="-1" aria-labelledby="ogretmen-baslik"><button type="button" class="dugme ek-kapat" id="ogretmen-kapat">${ico('x')}Kapat</button>
<h2 id="ogretmen-baslik">Öğretmen notu</h2>
<p>Özgür Mod'da devreyi öğrenciler kendileri kurar: LED, direnç, buton ve kabloyu breadboard'a takar, programı ve pini seçer, Çalıştır'a basar. Simülasyon devreyi her değişiklikte yeniden hesaplar; bir sorun varsa nedenini ve nasıl düzeltileceğini Türkçe yazar. Derslerdeki devreler hazır olarak yüklenebilir ve değiştirilebilir.</p>
<h3>Kullanım</h3><ul>
<li>Paneldeki <strong>Parça ekle</strong> bölümünden bir parça seçin, sonra breadboard'da deliğe dokunun. LED'de önce uzun bacağın (anot), sonra kısa bacağın (katot) deliği seçilir; iki bacak en çok 4 adım arayla takılır. Direnç 2 ile 6 adım arasında takılır. Buton, orta kanalın kenarındaki e ya da f satırına dokununca kanalın üstüne oturur. Kablo bir pinden ya da delikten başlar, başka bir pinde ya da delikte biter.</li>
<li>Telefonda ve küçük ekranda delikler küçük görünür: dokunduğunuz yerin çevresi büyük düğmelerle açılır, doğru delik oradan seçilir. İki parmakla yakınlaştırınca doğrudan da takılır.</li>
<li>Bir parçaya dokununca <strong>Taşı</strong>, <strong>Sil</strong> ve LED için <strong>Ters çevir</strong> çıkar. Her adım <strong>Geri al</strong> ile geri alınır; <strong>Sıfırla</strong> breadboard'u boşaltır.</li>
<li>Fareyle bir deliğin üstüne gelince deliğin adı ve ona bağlı delikler (aynı bağlantı grubu) yeşil görünür.</li>
<li>Klavyeyle: sahneye Tab ile geçin; ok tuşları delikler ve pinler arasında gezer, Enter seçer, Escape vazgeçer, Delete seçili parçayı siler, Ctrl ve Z geri alır.</li>
<li>Kurulan devre yalnız bu cihazda saklanır; sayfa yeniden açılınca kaldığı yerden sürer. Hiçbir bilgi sunucuya gönderilmez.</li></ul>
<h3>Denemeler</h3><ul>
<li><strong>15 yerine 13:</strong> Ders 2 devresini yükleyin. LED'in uzun bacağını 13e, kısa bacağını 16e deliğine; turuncu kablonun breadboard ucunu 13a deliğine taşıyın. LED yine yanar mı? Neden? (Bir sütunun a-e delikleri içeriden birbirine bağlıdır; Röntgen bunu gösterir.)</li>
<li><strong>LED ters:</strong> LED'e dokunup Ters çevir'i seçin. LED neden yanmıyor, simülasyon ne diyor?</li>
<li><strong>Direnç olmazsa:</strong> 220 Ω direnci silip yerine kablo takın. Simülasyon LED'i yakmaz ve uyarır; gerçek devrede aşırı akım LED'i ya da pini bozar.</li>
<li><strong>Büyük direnç:</strong> 220 Ω yerine 10 kΩ takın. LED çok sönük yanar: direnç büyüdükçe akım azalır.</li>
<li><strong>Çekme direnci:</strong> Ders 3 devresinde 10 kΩ direnci silip çalıştırın. Butona basılmadığında LED kendi kendine yanıp söner: boşta kalan giriş pini ne HIGH ne LOW okur.</li>
<li><strong>Pin değiştirme:</strong> Ders 4 devresinde kırmızı LED'in kablosunu 12. pine taşıyın; Program bölümünde Elle'yi seçip 12. pini HIGH yapın.</li>
<li><strong>Kısa devre:</strong> 5V pininden GND'ye doğrudan kablo takın: simülasyon devreyi durdurur ve nedenini yazar. Gerçek kartta bunu denemeyin.</li></ul>
<h3>Güvenlik</h3><ul><li>Gerçek sette devreyi kurarken ve değiştirirken USB kablosunu çıkarın.</li><li>LED'i her zaman bir dirençle bağlayın; 5V ile GND'yi doğrudan birleştirmeyin.</li></ul>
<h3>Simülasyonun sınırları</h3><ul><li>Simülasyon sadeleştirilmiş bir modeldir: LED'in yanma eşiği renge göre yaklaşık alınır (kırmızı 2,0 V, sarı 2,05 V, yeşil 2,1 V), çıkış pini 5 V kabul edilir. Gerçek değerler parçaya göre biraz değişir.</li><li>Yalnız bu sayfadaki parçalar ve üç program kullanılır; kod elle yazılmaz, seçilen pinlere göre üretilir.</li></ul>
<h2>Kaynaklar</h2><ul>${kaynak('https://docs.arduino.cc/built-in-examples/basics/Blink/', 'Arduino: Blink (LED yakıp söndürme)')}${kaynak('https://docs.arduino.cc/built-in-examples/digital/Button/', 'Arduino: Button (butonla LED, 10 kΩ çekme direnci)')}${kaynak('https://docs.arduino.cc/language-reference/en/functions/digital-io/pinMode/', 'Arduino dil başvurusu: pinMode()')}${kaynak('https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalwrite/', 'Arduino dil başvurusu: digitalWrite()')}${kaynak('https://docs.arduino.cc/language-reference/en/functions/digital-io/digitalread/', 'Arduino dil başvurusu: digitalRead()')}${kaynak('https://docs.arduino.cc/language-reference/en/functions/time/delay/', 'Arduino dil başvurusu: delay()')}${kaynak('https://docs.arduino.cc/hardware/uno-rev3/', 'Arduino UNO R3 belgeleri')}</ul></section>`;

  return `<!doctype html><html lang="tr" data-sinif="6"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(baslik)}</title><meta name="description" content="${esc(aciklama)}"><link rel="canonical" href="${SITE}${yol}">
${ONIZLEME ? '<meta name="robots" content="noindex, nofollow">' : ''}<meta name="theme-color" content="#5a2bc4"><link rel="icon" type="image/png" href="/assets/img/educator-fabicon-300x300.png">
<meta property="og:type" content="website"><meta property="og:locale" content="tr_TR"><meta property="og:site_name" content="bote.web.tr"><meta property="og:title" content="${esc(baslik)}"><meta property="og:description" content="${esc(aciklama)}"><meta property="og:url" content="${SITE}${yol}">
<script>${basBetik}</script><style>${css}</style>
<link rel="modulepreload" href="/3d/assets/${jsAd}">
<script type="application/ld+json">${jsonGom(jsonld)}</script></head><body class="ders-sayfasi ozgur-sayfasi"><a class="atla" href="#kartlar">Panele geç</a>${ustCubuk({ baslik: 'Özgür Mod' })}
<main class="ders ozgur"><section class="sahne-alani" aria-label="3D devre tahtası">
<canvas id="sahne" role="application" aria-roledescription="devre tahtası" aria-label="Arduino UNO ve breadboard: parça takmak için delik ya da pin seç" aria-describedby="sahne-yardim" tabindex="0"></canvas>
<p id="sahne-yardim" class="sr-only">Ok tuşları delikler ve pinler arasında gezer, Enter seçer, Escape vazgeçer, Delete seçili parçayı siler, Ctrl ve Z geri alır. Parçalar paneldeki listeden de seçilir.</p>
<div class="etiketler" aria-hidden="true"></div><div class="yukleniyor" aria-hidden="true">3D sahne hazırlanıyor</div>
<div class="webgl-yok"><p>Bu cihaz 3D görüntüyü açamadı. Hazır devreler, program ve devre durumu paneli yine çalışır.</p></div>
<div class="baglam-mesaj"><p>Ekran kartı sahneyi durdurdu.</p><button type="button" class="dugme birincil" id="yeniden-yukle">Yeniden yükle</button></div>
<div class="ust-bant">
<button type="button" class="durum-cip bekliyor" id="durum-cip" aria-controls="bolum-durum">${IKON.bekliyor}<span id="durum-cip-metin">Devre durdu: Çalıştır'a bas</span></button>
<div class="yonerge" id="yonerge" hidden><span id="yonerge-ikon">${IKON.sec}</span><p id="yonerge-metin"></p><button type="button" class="dugme kucuk" id="yonerge-iptal">${ico('x')}Vazgeç</button></div>
<div class="secim-kart" id="secim-kart" hidden role="group" aria-labelledby="secim-ad"><p class="secim-ad" id="secim-ad"></p><p class="secim-acik" id="secim-acik"></p><div class="secim-dugmeler"><button type="button" class="dugme kucuk" data-secim="tasi">${IKON.tasi}Taşı</button><button type="button" class="dugme kucuk" data-secim="ters">${IKON.ters}Ters çevir</button><button type="button" class="dugme kucuk" data-secim="sil">${IKON.sil}Sil</button><button type="button" class="dugme kucuk" data-secim="kapat" aria-label="Seçimi kapat">${ico('x')}</button></div></div>
<div class="secici" id="secici" hidden role="dialog" aria-labelledby="secici-baslik"><div class="secici-ust"><p id="secici-baslik"></p><button type="button" class="dugme kucuk" id="secici-kapat">${ico('x')}Vazgeç</button></div><div class="secici-izgara" id="secici-izgara"></div></div>
</div>
<div class="sahne-arac"><div class="sol-arac"><div class="gorunum" role="group" aria-label="Bakış açısı">${gorunum}</div><button type="button" class="arac-dugme" id="rontgen-dugme" aria-pressed="false" aria-label="Röntgen: breadboard'un içindeki metal şeritleri göster">${ico('scan')}<span class="arac-yazi">Röntgen</span></button></div>
<button type="button" class="arac-dugme buton-bas" id="buton-bas" hidden>${ico('pointer')}<span>Butona bas</span></button>
<div class="yakinlik" role="group" aria-label="Yakınlaştırma"><button type="button" id="uzaklas" aria-label="Uzaklaştır">${ico('zoom-out')}</button><button type="button" id="yakinlas" aria-label="Yakınlaştır">${ico('zoom-in')}</button></div></div></section>
<div class="panel-kenar" role="separator" aria-orientation="vertical" aria-controls="kartlar" aria-label="Panel genişliği: sürükleyin ya da ok tuşlarını kullanın" tabindex="0"><button type="button" class="panel-dugme" id="panel-dugme" aria-controls="kartlar" aria-expanded="true" aria-label="Paneli kapat">${ico('chevron-right')}</button></div>
<section class="kart-alani" id="kartlar" aria-label="Özgür Mod paneli"><div class="tutamac" aria-hidden="true"><span></span></div>
<div class="kart-ust"><div class="sekmeler" role="tablist" aria-label="Panel bölümleri"><button type="button" role="tab" id="sekme-kur" aria-controls="bolum-kur" aria-selected="true">Kur</button><button type="button" role="tab" id="sekme-program" aria-controls="bolum-program" aria-selected="false" tabindex="-1">Program</button><button type="button" role="tab" id="sekme-durum" aria-controls="bolum-durum" aria-selected="false" tabindex="-1">Durum<span class="rozet" id="durum-rozet" aria-hidden="true"></span></button></div><span class="kisa-baslik"></span><button type="button" class="kucuk-dugme" id="ayar-dugme" aria-expanded="false" aria-controls="ayarlar" aria-label="Panel ayarları" title="Panel genişliği, yazı boyutu, taraf">${ico('sliders-horizontal')}</button></div>
<div class="ayarlar" id="ayarlar" hidden><p class="ayar-ad yatay-ayar">Panel genişliği</p><div class="grup yatay-ayar" role="group" aria-label="Panel genişliği">${[['dar', 'Dar'], ['orta', 'Orta'], ['genis', 'Geniş']].map(([k, y]) => `<button type="button" class="dugme" data-panel-boyut="${k}" aria-pressed="${k === 'orta'}">${y}</button>`).join('')}</div>
<p class="ayar-ad">Yazı boyutu</p><div class="grup" role="group" aria-label="Yazı boyutu"><button type="button" class="dugme" data-yazi="-1" aria-label="Yazıyı küçült">A−</button><span class="yazi-deger" id="yazi-deger">%100</span><button type="button" class="dugme" data-yazi="1" aria-label="Yazıyı büyüt">A+</button></div>
<p class="ayar-ad yatay-ayar">Panel tarafı</p><div class="grup yatay-ayar" role="group" aria-label="Panel tarafı"><button type="button" class="dugme" data-yan="sol" aria-pressed="false">Sol</button><button type="button" class="dugme" data-yan="sag" aria-pressed="true">Sağ</button></div></div>
<div class="kart-govde"><h1 class="sr-only">${esc(OZGUR_BASLIK)}</h1>
<div class="js-gerek"><p>Özgür Mod'da devreyi kendin kurarsın: LED, direnç, buton ve kabloyu istediğin deliğe takar, programı seçer ve çalıştırırsın. Bu sayfa JavaScript ile çalışır; tarayıcıda JavaScript kapalı görünüyor. Adım adım anlatım için <a href="/3d">3D Simülasyon Merkezi</a> derslerine bakabilirsin.</p></div>
<section class="bolum ozgur-js" id="bolum-kur" role="tabpanel" aria-labelledby="sekme-kur">
<h2>Hazır devre</h2><p class="ipucu-metin">Derslerdeki devreyi yükle, sonra istediğin gibi değiştir.</p>
<div class="hazir-izgara"><button type="button" class="dugme" data-hazir="ders-2">Ders 2<span>LED Yakalım</span></button><button type="button" class="dugme" data-hazir="ders-3">Ders 3<span>Butonla LED</span></button><button type="button" class="dugme" data-hazir="ders-4">Ders 4<span>Trafik Işığı</span></button></div>
<h2>Parça ekle</h2><p class="ipucu-metin">Parçayı seç, sonra breadboard'da deliğe dokun.</p>
<div class="palet" role="group" aria-label="Parçalar">${palet}</div>
<fieldset class="renkler" id="kablo-renk" style="margin-top:12px"><legend>Kablo rengi</legend>${renkler}</fieldset>
<h2>Devredeki parçalar <span class="sayi" id="parca-sayi"></span></h2><ul class="parca-listesi" id="parca-listesi"></ul></section>
<section class="bolum ozgur-js" id="bolum-program" role="tabpanel" aria-labelledby="sekme-program" hidden>
<fieldset class="secenekler-3"><legend>Program</legend><label class="secim"><input type="radio" name="program" value="blink" checked><span>Yanıp sönen LED</span></label><label class="secim"><input type="radio" name="program" value="buton"><span>Butonla LED</span></label><label class="secim"><input type="radio" name="program" value="elle"><span>Elle</span></label></fieldset>
<div data-program-ayar="blink"><fieldset class="pin-grup"><legend>LED'in bağlı olduğu pin</legend><div class="pin-izgara">${pinler('blink-pin', 13)}</div></fieldset>
<fieldset class="pin-grup"><legend>Bekleme</legend><div class="bekleme-izgara">${[[1000, '1 sn'], [500, '0,5 sn'], [200, '0,2 sn']].map(([d, y]) => `<label class="secim"><input type="radio" name="bekleme" value="${d}"${d === 1000 ? ' checked' : ''}><span>${y}</span></label>`).join('')}</div></fieldset></div>
<div data-program-ayar="buton" hidden><fieldset class="pin-grup"><legend>Giriş pini (buton)</legend><div class="pin-izgara">${pinler('buton-giris', 2)}</div></fieldset>
<fieldset class="pin-grup"><legend>Çıkış pini (LED)</legend><div class="pin-izgara">${pinler('buton-cikis', 13)}</div></fieldset></div>
<div data-program-ayar="elle" hidden><p class="ipucu-metin">Bir pine dokununca HIGH (5 volt) ile LOW (0 volt) arasında değişir. Numaranın yanındaki nokta o pine kablo takılı olduğunu gösterir.</p>
<div class="elle-izgara">${PROGRAM_PINLERI.slice().reverse().map((p) => `<button type="button" class="seviye" data-elle="${p}" aria-pressed="false"><b>${p}</b><span>LOW</span></button>`).join('')}</div></div>
<div class="kod"><div class="kod-baslik"><span>Arduino kodu</span><span>Altında Türkçesi</span></div><ol id="kod-satirlar"></ol></div></section>
<section class="bolum ozgur-js" id="bolum-durum" role="tabpanel" aria-labelledby="sekme-durum" hidden>
<div class="ozet-kutu" id="durum-ozet"></div>
<h2>Uyarılar</h2><ul class="uyarilar" id="uyarilar"></ul>
<h2>Pinler</h2><table class="pin-tablo" id="pin-tablo"><thead><tr><th scope="col">Pin</th><th scope="col">Görev</th><th scope="col">Durum</th></tr></thead><tbody></tbody></table>
<h2>LED'ler</h2><ul class="led-liste" id="led-liste"></ul></section></div>
<div class="kart-alt ozgur-js"><button type="button" class="dugme" id="geri-al" disabled>${ico('undo-2')}Geri al</button><button type="button" class="dugme" id="sifirla" title="Breadboard'daki bütün parçaları kaldırır; Geri al ile dönülür">${ico('eraser')}Sıfırla</button><button type="button" class="dugme birincil" id="calistir">${IKON.oynat}<span>Çalıştır</span></button></div></section></main>
${ogretmen}<footer class="alt"><a href="/3d">3D Simülasyon Merkezi</a> · <a href="/blog">bote.web.tr blog</a></footer>
<div id="duyuru" class="sr-only" aria-live="polite"></div>${sinifPenceresi}
<script type="application/json" id="ozgur-ikon">${jsonGom(IKON)}</script><script type="module" src="/3d/assets/${jsAd}"></script></body></html>`;
}
