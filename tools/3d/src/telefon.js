// "Telefon" tanımı tek yerde (Ahmet 01.11: telefonda Tahta modu gizlensin, tablet ve bilgisayar aynı kalsın).
// Telefon sayılan üç durum:
//   - dar pencere (en çok 560 px): dikey telefon ve dar pencereler (Tahta düğmesi zaten gizliydi)
//   - yatay telefonun alttan çekilen sayfa düzeni (en çok 820 px genişlik ve 500 px yükseklik)
//   - cihaz ekranı 600 px altı (device-width/height; tarayıcı yakınlaştırmasından ve pencere boyundan etkilenmez):
//     844-932 px yatay modern telefonlar da buraya girer; tablet en az 600 px, bilgisayar daha büyüktür.
// Bu tek sorgu üç yerde kullanılır: build.mjs (sayfa başı betiği: kayıtlı tahta tercihi boyamadan önce uygulanmaz; Tahta düğmesini
// gizleyen CSS) ve main.js / ozgur.js (tahta modu telefonda uygulanmaz; kayıtlı tercih ve ?mod=tahta adresi telefon düzenini bozmaz).
export const TELEFON_SORGU = '(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)';
