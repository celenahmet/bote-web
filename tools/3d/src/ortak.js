// 3D Simülasyon Merkezi: sayfa denetimlerinin ortak küçük yardımcıları (DOM, yerel depo, ekran okuyucu duyurusu).
// Hem genel ders motoru (ders.js) hem sayfa kabuğu (sayfa.js) hem aile adaptörleri (arduinoSahne.js) bunları kullanır.
export const html = document.documentElement;
export const $ = (s, k = document) => k.querySelector(s);
export const $$ = (s, k = document) => [...k.querySelectorAll(s)];
export const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
export const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
// Ekran okuyucu duyurusu (#duyuru, aria-live). Aynı metin art arda gelince bölge değişmemiş sayılır ve yeniden okunmaz
// (02.11 motor incelemesi: donanım düğmelerinin ve keşif tahmininin duyuruları sabit metinli): önce boşaltılır, kısa
// bir aradan sonra yeniden yazılır. Arada başka bir metin gelirse bekleyen yazma iptal edilir, son metin geçerlidir.
let duyurZ = 0;
export const duyur = (t) => {
  const d = $('#duyuru'); if (!d) return;
  clearTimeout(duyurZ);
  if (d.textContent !== t) { d.textContent = t; return; }
  d.textContent = '';
  duyurZ = setTimeout(() => { d.textContent = t; }, 100);
};
