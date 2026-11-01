// Sayfa başında, ilk boyamadan önce çalışır (build.mjs bunu tek satırlık betiğe çevirip <head>'e gömer):
// kayıtlı erişilebilirlik ayarlarını <html> üzerine yazar, böylece sayfa yüklenirken yanıp sönme olmaz.
// Tema, tahta kipi ve sınıf tercihleriyle aynı erken yoldur. Hata olursa sessizce varsayılana kalır.
import { oku, uygula, yaziOku, etkinSayisi } from './erisim-cekirdek.js';

try {
  const d = document.documentElement;
  const s = oku();
  uygula(s, d);
  const y = yaziOku();
  if (y !== 1) d.style.setProperty('--yazi', String(y));
  if (etkinSayisi(s, y)) d.setAttribute('data-e-var', '');
  // "Hareketi durdur" açıkken kaydırma animasyonu da durur (merkez sayfasındaki sınıf seçimi sonrası yumuşak kaydırma gibi).
  // Ayar sayfa açıkken de değişebildiği için kontrol her çağrıda yapılır.
  const eski = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function (a) {
    return eski.call(this, a && typeof a === 'object' && d.hasAttribute('data-e-hareketsiz') ? { ...a, behavior: 'auto' } : a);
  };
} catch (e) { /* varsayılan görünüm */ }
