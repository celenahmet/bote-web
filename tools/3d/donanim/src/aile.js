// Aile kimliği: ad, kısa ad, adres ve ders sırası TEK yerde. Karar Ahmet'in (02.11): değişirse yalnız burası değişir.
// Ders kimliklerinde aile öneki yoktur; adres önekini ana oturum site tarafında ekler.
// Not (02.11 entegrasyon): siteye giren ad ve adresler tools/3d/yollar.mjs'tedir (AILELER, DERS_YOLU, ESKI_YOL); derleme
// bu dosyayı okumaz. Adres kararı Ahmet 02.11: /3d/hardware (eski /3d/donanim kalıcı yönlendirilir).
export const AILE = {
  id: 'donanim',
  ad: 'Bilgisayar Donanımı',
  kisa: 'Donanım',
  adres: '/3d/hardware/',
};
export const DERS_SIRA = ['girdi-cikti-birimleri', 'kasanin-ici', 'tusun-yolculugu', 'sorun-giderme'];
