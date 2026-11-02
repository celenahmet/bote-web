// Keşif kartında parçanın podyum görseli (Ahmet 02.11): kartın üstünde, kapatma X'inin yanında, parça küçük bir
// kaidenin üstünde tek başına durur; neye benzediği karışmasın. Görseller fotoğraf değil, kendi 3D modelimizden
// tools/3d/podyum.mjs ile üretilir (3d/assets/podyum/<aile>/, liste tools/3d/podyum/<aile>.json); bu dosya
// yalnız gösterir. Motoru bilmez, main.js'e tek import satırıyla bağlıdır. Dinlediği:
//   '3d:bilgi' { detail: { id } }      yeni kart açıldı (main.js bilgiGoster; #bilgi-ozel yazısı o an yazılmış olur)
//   #bilgi-ozel yazısı                 aynı kart açıkken başka örnek seçildi (ör. kırmızı LED'den sarı LED'e)
//   '3d:gorunum' { detail: { ad } }    Sanal | Fiziksel; iki görünümde belirgin farklı olan parçada görsel değişir
//   #bilgi[hidden]                     kart kapandı: görsel temizlenir
// Önyükleme yok: görsel ancak kart açılınca istenir. Yüklenemezse kutu gizlenir, kart görselsiz hâline döner.
import arduino from '../podyum/arduino.json';

const LISTE = { arduino }; // aile (adresteki /3d/<aile>/) -> görsel listesi; donanım ailesi üretilince buraya eklenir

// Biçim çalışma anında eklenir (gorunum.js deseni; stil.css ve build.mjs değişmez). Kutu sağa yaslanır, X'in
// dokunma alanının soluna 4 px boşlukla oturur: X sağdan 4 px, kart iç boşluğu 16 px olduğundan kutunun sağ payı
// --hedef - 8 px. Başlık ve kategori kutunun solundan akar, üst üste binmez. Telefonda 72-96 px (yazı boyuyla),
// tahtada yazıyla orantılı büyür; kaynak 256 px olduğu için büyütme en çok 256 px'te durur.
const CSS = [
  '#bilgi .podyum{float:right;width:clamp(72px,5.2em,96px);aspect-ratio:1;margin:-8px calc(var(--hedef) - 8px) 4px 10px;pointer-events:none}',
  'html[data-mod=tahta] #bilgi .podyum{width:min(5.2em,256px)}',
  '#bilgi .podyum[hidden]{display:none}',
  // "Sence bu nedir?" bloğu ızgara (kendi biçim bağlamı): görselin yanında bütün blok daralır ve soru üç satıra
  // iner. Görsel varken düz akışa geçer; satırlar görselin yanından akar, altında tam genişliğe döner.
  // Eski tarayıcılar için :has() yerine kardeş seçici.
  '#bilgi .podyum:not([hidden]) ~ .kesif-soru:not([hidden]){display:block}',
  '#bilgi .podyum:not([hidden]) ~ .kesif-soru:not([hidden]) > * + *{margin-top:10px}',
  '#bilgi .podyum img{display:block;width:100%;height:auto;opacity:0;transition:opacity .18s ease-out}',
  '#bilgi .podyum.hazir img{opacity:1}',
  '@media (prefers-reduced-motion:reduce){#bilgi .podyum img{transition:none}}',
].join('\n');

function kur() {
  const kutu = document.querySelector('#bilgi'), kapat = document.querySelector('#bilgi-kapat');
  const liste = LISTE[location.pathname.split('/')[2]];
  if (!kutu || !kapat || !liste) return;
  const html = document.documentElement, ozelEl = document.querySelector('#bilgi-ozel');
  const stil = document.createElement('style'); stil.textContent = CSS; document.head.appendChild(stil);
  // alt="" ve aria-hidden: görsel başlıkta yazanı gösterir, yeni bilgi taşımaz; ayrıca kart aria-live olduğu için
  // "Sence bu nedir?" aşamasında parçanın adını söyleyen bir alt cevabı ekran okuyucuya önceden okuturdu.
  const fig = document.createElement('figure');
  fig.className = 'podyum'; fig.hidden = true; fig.setAttribute('aria-hidden', 'true');
  const img = document.createElement('img');
  img.alt = ''; img.width = img.height = liste.boy; img.loading = 'lazy'; img.decoding = 'async'; img.draggable = false;
  fig.append(img);
  kapat.after(fig);

  let id = null, simdiki = '';
  // kimlik + özel ad (kartın alt başlığı) + görünüm -> adres. Özel ad listede yoksa kimliğin genel görseli.
  // Özel adsız kartta (ör. dışarıdan açılan LED kartı) genel görsel yoksa ilk örnek; ama listede olmayan bir özel
  // adda başka örnek gösterilmez (mavi LED kartında kırmızı LED görünmesin), görsel çıkmaz.
  function adres() {
    const g = id && liste.gorseller[id];
    if (!g) return '';
    const oz = (ozelEl?.textContent || '').trim();
    const e = g[oz] || g[''] || (oz ? null : g[Object.keys(g).sort()[0]]);
    if (!e) return '';
    const kip = html.dataset.gorunumKip === 'fiziksel' ? 'fiziksel' : 'sanal';
    return `${liste.yol}${e.dosya}${e.ayri ? `-${kip}` : ''}.webp?v=${e.surum}`;
  }
  // gizle: bu kartın görseli yok (kimlik açık kalır; aynı kartta örnek değişirse yine bakılır). temizle: kart kapandı.
  function gizle() {
    simdiki = '';
    fig.hidden = true; fig.classList.remove('hazir'); img.removeAttribute('src');
  }
  function temizle() { id = null; gizle(); }
  // yeniKart: başka parçanın görseli bir an bile görünmesin diye eskisi saydamlaşır. Aynı kartta (görünüm ya da
  // örnek değişince) eski görsel yenisi gelene dek yerinde kalır, kutu boşalıp dolmaz.
  function guncelle(yeniKart) {
    const a = adres();
    if (!a) { gizle(); return; }
    if (a === simdiki) return;
    simdiki = a;
    if (yeniKart) fig.classList.remove('hazir');
    fig.hidden = false;
    img.src = a;
    if (img.complete && img.naturalWidth) fig.classList.add('hazir');
  }
  img.addEventListener('load', () => { if (img.getAttribute('src')) fig.classList.add('hazir'); });
  img.addEventListener('error', () => { if (img.getAttribute('src')) { fig.hidden = true; fig.classList.remove('hazir'); } });

  document.addEventListener('3d:bilgi', (e) => { id = e.detail?.id || null; guncelle(true); });
  document.addEventListener('3d:gorunum', () => { if (id && !kutu.hidden) guncelle(false); });
  new MutationObserver(() => { if (kutu.hidden) temizle(); }).observe(kutu, { attributes: true, attributeFilter: ['hidden'] });
  if (ozelEl) new MutationObserver(() => { if (id && !kutu.hidden) guncelle(false); }).observe(ozelEl, { childList: true, characterData: true, subtree: true });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kur, { once: true });
else kur();
