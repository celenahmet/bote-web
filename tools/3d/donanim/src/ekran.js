// Monitör ekranının içeriği (tuval çizimi): masaüstü, yazı penceresi, kamera, ses kaydı, yazdırma, kapalı ve açılış.
// Marka ya da gerçek işletim sistemi görünümü yok; genel bir masaüstü çizilir.
import { tuval, doku, YAZI } from './yardimci.js';

export const EW = 1024, EH = 576;
// Çözünürlük kademeleri (yatay x dikey piksel): ekran ne kadar çok pikselden oluşuyorsa görüntü o kadar keskin.
export const COZUNURLUK = [[40, 22], [96, 54], [256, 144], [EW, EH]];

function dikdortgen(x, a, b, w, h, r, dolgu, cizgi) {
  x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath();
  if (dolgu) { x.fillStyle = dolgu; x.fill(); }
  if (cizgi) { x.strokeStyle = cizgi; x.lineWidth = 2; x.stroke(); }
}
const poligon = (x, p) => { x.beginPath(); p.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.fill(); };
const yazi = (x, t, a, b, boy, renk, { kalin = false, hiza = 'left' } = {}) => { x.font = `${kalin ? 700 : 500} ${boy}px ${YAZI}`; x.fillStyle = renk; x.textAlign = hiza; x.textBaseline = 'middle'; x.fillText(t, a, b); };

function pencere(x, a, b, w, h, baslik) {
  x.save(); x.shadowColor = 'rgba(20,24,40,.25)'; x.shadowBlur = 22; x.shadowOffsetY = 6;
  dikdortgen(x, a, b, w, h, 10, '#ffffff'); x.restore();
  dikdortgen(x, a, b, w, 38, 10, '#e7ebf2'); x.fillStyle = '#e7ebf2'; x.fillRect(a, b + 24, w, 14);
  yazi(x, baslik, a + 16, b + 20, 19, '#2b3342', { kalin: true });
  for (let i = 0; i < 3; i++) { x.fillStyle = ['#b8c0cf', '#b8c0cf', '#e5654f'][i]; x.beginPath(); x.arc(a + w - 24 - i * 26, b + 19, 8, 0, Math.PI * 2); x.fill(); }
}

function simge(x, a, b, tur, ad) {
  if (tur === 'bilgisayar') { dikdortgen(x, a + 6, b + 6, 44, 30, 4, '#2b3342'); dikdortgen(x, a + 10, b + 10, 36, 22, 2, '#7fb4f5'); x.fillStyle = '#2b3342'; x.fillRect(a + 22, b + 36, 12, 6); x.fillRect(a + 14, b + 42, 28, 4); }
  if (tur === 'klasor') { dikdortgen(x, a + 6, b + 14, 44, 30, 4, '#f2b53e'); dikdortgen(x, a + 6, b + 8, 20, 10, 3, '#e29f25'); }
  if (tur === 'cop') { x.fillStyle = '#9aa4b6'; poligon(x, [[a + 14, b + 14], [a + 42, b + 14], [a + 38, b + 46], [a + 18, b + 46]]); x.fillStyle = '#7e889b'; x.fillRect(a + 10, b + 8, 36, 6); }
  yazi(x, ad, a + 28, b + 62, 15, '#1d2433', { kalin: true, hiza: 'center' });
}

// d: { mod: 'kapali' | 'acilis' | 'masaustu', yazi, imlec: {x, y}, tik, kamera, ses, yazdir }
export function ekranCiz(x, d) {
  if (d.mod === 'kapali') { x.fillStyle = '#0a0b0e'; x.fillRect(0, 0, EW, EH); return; }
  if (d.mod === 'acilis') {
    x.fillStyle = '#0c1018'; x.fillRect(0, 0, EW, EH);
    x.strokeStyle = '#7c8aa8'; x.lineWidth = 10; x.lineCap = 'round'; x.beginPath(); x.arc(EW / 2, EH / 2 - 20, 46, -1.2, 3.2); x.stroke();
    yazi(x, 'Başlatılıyor', EW / 2, EH / 2 + 70, 26, '#aab4c8', { hiza: 'center' });
    return;
  }
  x.fillStyle = '#d5e6fb'; x.fillRect(0, 0, EW, EH);
  x.fillStyle = '#a2c8f3'; poligon(x, [[0, 410], [170, 320], [350, 390], [560, 290], [770, 380], [1024, 310], [1024, 576], [0, 576]]);
  x.fillStyle = '#6ea4e8'; poligon(x, [[0, 470], [230, 410], [430, 460], [650, 400], [870, 460], [1024, 420], [1024, 576], [0, 576]]);
  simge(x, 28, 24, 'bilgisayar', 'Bilgisayar'); simge(x, 28, 120, 'klasor', 'Belgeler'); simge(x, 28, 216, 'cop', 'Çöp');
  // yazı penceresi
  pencere(x, 150, 56, 470, 340, 'Yazı Defteri');
  x.fillStyle = '#2b3342'; x.font = `500 26px ${YAZI}`; x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  const metin = d.yazi || '';
  const satirlar = []; let satir = '';
  for (const ch of metin) { if (x.measureText(satir + ch).width > 420) { satirlar.push(satir); satir = ''; } satir += ch; }
  satirlar.push(satir);
  const son = satirlar.slice(-7);
  son.forEach((s, i) => x.fillText(s, 174, 130 + i * 40));
  if (!metin) { x.fillStyle = '#9aa4b6'; x.fillText('Bir tuşa bas', 174, 130); }
  const imY = 130 + (son.length - 1) * 40;
  x.fillStyle = '#7c4dff'; x.fillRect(174 + x.measureText(son[son.length - 1]).width + 3, imY - 24, 3, 32);
  // kamera penceresi
  if (d.kamera) {
    pencere(x, 650, 70, 330, 270, 'Kamera');
    x.fillStyle = '#26324a'; x.fillRect(662, 118, 306, 210);
    x.fillStyle = '#8ea6d6'; x.beginPath(); x.arc(815, 205, 40, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#5f7fc2'; x.beginPath(); x.ellipse(815, 330, 86, 70, 0, Math.PI, 0); x.fill();
    x.strokeStyle = '#e5654f'; x.lineWidth = 4; x.strokeRect(670, 126, 290, 194);
    x.fillStyle = '#e5654f'; x.beginPath(); x.arc(692, 146, 7, 0, Math.PI * 2); x.fill();
    yazi(x, 'Kayıt', 708, 147, 15, '#ffffff', { kalin: true });
  }
  // ses kaydı penceresi (çubuklar dalga boyunu gösterir)
  if (d.ses != null) {
    pencere(x, 650, 360, 330, 150, 'Ses Kaydı');
    for (let i = 0; i < 30; i++) {
      const h = 8 + Math.abs(Math.sin(i * 1.7 + d.ses * 9) * Math.cos(i * 0.6 + d.ses * 5)) * 66;
      x.fillStyle = '#7c4dff'; x.fillRect(668 + i * 10, 450 - h / 2 - 8, 6, h);
    }
    yazi(x, 'Dinleniyor', 668, 492, 15, '#5b6579', { kalin: true });
  }
  // yazdırma penceresi
  if (d.yazdir != null) {
    pencere(x, 250, 200, 380, 160, 'Yazdır');
    yazi(x, d.yazdir >= 1 ? 'Yazdırıldı' : 'Yazıcıya gönderiliyor', 274, 262, 20, '#2b3342', { kalin: true });
    dikdortgen(x, 274, 296, 332, 22, 11, '#e1e6ef');
    if (d.yazdir > 0) dikdortgen(x, 274, 296, Math.max(22, 332 * Math.min(1, d.yazdir)), 22, 11, '#7c4dff');
  }
  // görev çubuğu
  x.fillStyle = '#1f2533'; x.fillRect(0, EH - 44, EW, 44);
  dikdortgen(x, 12, EH - 38, 32, 32, 7, '#7c4dff');
  for (let i = 0; i < 3; i++) dikdortgen(x, 62 + i * 46, EH - 36, 36, 28, 6, i === 0 ? '#3a4560' : '#2d3548');
  yazi(x, '10:24', EW - 22, EH - 22, 19, '#dfe5f1', { kalin: true, hiza: 'right' });
  // fare imleci
  const im = d.imlec || { x: 760, y: 220 };
  if (d.tik) { x.strokeStyle = '#7c4dff'; x.lineWidth = 4; x.beginPath(); x.arc(im.x, im.y, 18 + (d.tik - 1) * 20, 0, Math.PI * 2); x.stroke(); }
  x.fillStyle = '#ffffff'; x.strokeStyle = '#111827'; x.lineWidth = 2.5;
  x.beginPath(); x.moveTo(im.x, im.y); x.lineTo(im.x, im.y + 30); x.lineTo(im.x + 8, im.y + 23); x.lineTo(im.x + 14, im.y + 36); x.lineTo(im.x + 20, im.y + 33); x.lineTo(im.x + 14, im.y + 21); x.lineTo(im.x + 24, im.y + 21); x.closePath(); x.fill(); x.stroke();
}

// Ekran dokusu: tam çözünürlükte çizilir, kademe düşükse küçük tuvale çizilip yumuşatmasız büyütülür.
export function ekranDokusu() {
  const [tam, tx] = tuval(EW, EH), [gor, gx] = tuval(EW, EH), [kck, kx] = tuval(EW, EH);
  const tex = doku(gor, { aniso: false });
  const durum = { mod: 'masaustu', yazi: '', imlec: { x: 760, y: 230 }, tik: 0, kamera: false, ses: null, yazdir: null, kademe: 3 };
  function guncelle() {
    ekranCiz(tx, durum);
    const [w, h] = COZUNURLUK[durum.kademe];
    if (w >= EW) { gx.imageSmoothingEnabled = true; gx.drawImage(tam, 0, 0); }
    else {
      kck.width = w; kck.height = h; kx.imageSmoothingEnabled = true; kx.drawImage(tam, 0, 0, w, h);
      gx.imageSmoothingEnabled = false; gx.drawImage(kck, 0, 0, w, h, 0, 0, EW, EH);
    }
    tex.needsUpdate = true;
  }
  guncelle();
  return { tex, durum, guncelle };
}
