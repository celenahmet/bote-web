// Fiziksel görünüm: kartın üstündeki Arduino sonsuzluk logosu, ARDUINO ve UNO yazısı (Ahmet kararı 01.11 22.25).
// Yalnız Fiziksel kartın dokusuna çizilir; Sanal'a logo eklenmez. Tek sabitle kapanır (gercekci.js ARDUINO_LOGO).
// Çizim mm cinsindendir: s = px/mm, (bx, bz) kartın sol üst köşesinden. Konumlar gerçek karttan göz kararı.
export const LOGO = { x: 45.2, z: 21.6, a: 6.0, arduinoZ: 28.0, unoX: 57.4, unoZ: 21.9 };

export function logoCiz(x, s, renk) {
  const { x: cx, z: cz, a } = LOGO;
  x.save();
  x.strokeStyle = renk; x.fillStyle = renk; x.lineCap = 'round'; x.lineJoin = 'round';
  // sonsuzluk: iki yuvarlak halka (Gerono eğrisinin dolgunlaştırılmış biçimi), çizgi yaklaşık 1 mm
  x.lineWidth = 1.05 * s;
  x.beginPath();
  for (let i = 0; i <= 160; i++) {
    const t = (i / 160) * Math.PI * 2;
    const px = cx + a * Math.cos(t), pz = cz + a * 0.62 * Math.sin(2 * t) * 0.92;
    if (i) x.lineTo(px * s, pz * s); else x.moveTo(px * s, pz * s);
  }
  x.closePath(); x.stroke();
  // sol halkada eksi, sağ halkada artı
  const kol = a * 0.2, kal = 0.8 * s, solX = cx - a * 0.52, sagX = cx + a * 0.52;
  x.lineWidth = kal; x.lineCap = 'butt';
  x.beginPath(); x.moveTo((solX - kol) * s, cz * s); x.lineTo((solX + kol) * s, cz * s); x.stroke();
  x.beginPath(); x.moveTo((sagX - kol) * s, cz * s); x.lineTo((sagX + kol) * s, cz * s);
  x.moveTo(sagX * s, (cz - kol) * s); x.lineTo(sagX * s, (cz + kol) * s); x.stroke();
  // ARDUINO (logonun altında) ve UNO (sağında, büyük)
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.save(); x.translate(cx * s, LOGO.arduinoZ * s); x.scale(0.92, 1);
  x.font = `800 ${2.5 * s}px "Arial Black", "Arial", Helvetica, sans-serif`; x.fillText('ARDUINO', 0, 0); x.restore();
  x.save(); x.translate(LOGO.unoX * s, LOGO.unoZ * s); x.scale(0.9, 1);
  x.font = `800 ${4.6 * s}px "Arial Black", "Arial", Helvetica, sans-serif`; x.fillText('UNO', 0, 0); x.restore();
  x.restore();
}
