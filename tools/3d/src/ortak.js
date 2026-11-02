// 3D Simülasyon Merkezi: sayfa denetimlerinin ortak küçük yardımcıları (DOM, yerel depo, ekran okuyucu duyurusu).
// Hem genel ders motoru (ders.js) hem sayfa kabuğu (sayfa.js) hem aile adaptörleri (arduinoSahne.js) bunları kullanır.
export const html = document.documentElement;
export const $ = (s, k = document) => k.querySelector(s);
export const $$ = (s, k = document) => [...k.querySelectorAll(s)];
export const sakla = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* gizli pencere */ } };
export const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
export const duyur = (t) => { const d = $('#duyuru'); if (d) d.textContent = t; };
