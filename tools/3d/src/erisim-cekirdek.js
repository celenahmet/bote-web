// Erişilebilirlik çekirdeği (3D Simülasyon Merkezi). Ayar modeli, kayıt ve <html> özniteliklerine uygulama tek yerde:
// hem sayfa başında çalışan kısa betik (erisim-erken.js, ilk boyamadan önce) hem de arayüz (erisilebilirlik.js) bunu kullanır.
// Ayarlar yalnız bu cihazda (localStorage) durur; hiçbir yere gönderilmez, analitiğe yazılmaz.
//
// Yazı boyutu BURADA saklanmaz: Panel ayarlarındaki "Yazı boyutu" ile aynı ayardır (anahtar bote-3d-yazi, main.js ve
// ozgur.js yazar). İki denetim tek kaynaktan beslenir, ikisi her zaman aynı değeri gösterir.

export const ANAHTAR = 'bote-3d-erisim';
export const YAZI_ANAHTAR = 'bote-3d-yazi';
export const YAZI_OLCEKLERI = [0.9, 1, 1.15, 1.3, 1.5]; // main.js ve ozgur.js'teki YAZI ile aynı olmalı

// Üç düzeyli ayarlar 0..2 (0 = normal); diğerleri aç/kapa.
export const SEVIYELI = ['satir', 'harf', 'renk'];
export const ACKAPA = ['okunakli', 'kontrast', 'ters', 'baglanti', 'baslik', 'imlec', 'cizgi', 'maske', 'hareketsiz', 'odak'];
export const VARSAYILAN = Object.freeze({
  satir: 0, harf: 0, renk: 0,
  okunakli: false, kontrast: false, ters: false, baglanti: false, baslik: false, imlec: false, cizgi: false, maske: false, hareketsiz: false, odak: false,
});

// Kayıttan doğrulayarak okur: bozuk, eksik ya da beklenmeyen değer varsayılana döner. Her erişim try/catch içinde
// (özel gezinti, kapalı site verisi, dolu depo).
export function oku() {
  const s = { ...VARSAYILAN };
  try {
    const ham = JSON.parse(localStorage.getItem(ANAHTAR) || 'null');
    if (ham && typeof ham === 'object' && !Array.isArray(ham)) {
      for (const k of SEVIYELI) if (Number.isInteger(ham[k]) && ham[k] >= 0 && ham[k] <= 2) s[k] = ham[k];
      for (const k of ACKAPA) if (ham[k] === true) s[k] = true;
    }
  } catch (e) { /* kayıt yok, bozuk ya da erişilemiyor: varsayılan */ }
  return s;
}

// Yalnız varsayılandan ayrılanlar yazılır; hepsi varsayılansa kayıt silinir.
export function yaz(s) {
  try {
    const kisa = {};
    for (const k of SEVIYELI) if (s[k]) kisa[k] = s[k];
    for (const k of ACKAPA) if (s[k]) kisa[k] = true;
    if (Object.keys(kisa).length) localStorage.setItem(ANAHTAR, JSON.stringify(kisa)); else localStorage.removeItem(ANAHTAR);
  } catch (e) { /* ayar bu oturumda geçerli kalır, kalıcı olmaz */ }
}

// <html> üzerine data-e-* öznitelikleri: biçimlendirme stil sayfasındaki seçicilerle yapılır (erisilebilirlik.css).
export function uygula(s, kok = document.documentElement) {
  for (const k of SEVIYELI) { if (s[k]) kok.setAttribute(`data-e-${k}`, String(s[k])); else kok.removeAttribute(`data-e-${k}`); }
  for (const k of ACKAPA) { if (s[k]) kok.setAttribute(`data-e-${k}`, ''); else kok.removeAttribute(`data-e-${k}`); }
}

// Panel ayarlarındaki yazı boyutunu main.js ile aynı kurala göre okur (bilinmeyen değer en küçüğe düşer, orada da öyle).
export function yaziOku() {
  try { return YAZI_OLCEKLERI[Math.max(0, YAZI_OLCEKLERI.indexOf(Number(localStorage.getItem(YAZI_ANAHTAR)) || 1))]; } catch (e) { return 1; }
}

// Varsayılandan ayrılan ayar sayısı (yazı boyutu dahil): giriş düğmesindeki işaret ve etiket için.
export function etkinSayisi(s, yazi = 1) {
  let n = yazi !== 1 ? 1 : 0;
  for (const k of SEVIYELI) if (s[k]) n++;
  for (const k of ACKAPA) if (s[k]) n++;
  return n;
}
