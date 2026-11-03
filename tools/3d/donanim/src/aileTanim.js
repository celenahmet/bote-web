// Bilgisayar Donanımı: genel ders motoruna (src/ders.js dersMotoru) verilen aile tanımı. Sözleşme ders.js başındaki
// "AİLE TANIMI / ADAPTÖR" yorumunda. Sahne işini donanimSahne.js yapar (adaptör); bu dosya yalnız parçaları bir araya
// getirir, sahne dosyalarına dokunmaz. İsteğe bağlı kancalardan (kesifEk, kameraBul, ipucu, olcumEk) hiçbiri gerekmiyor:
// kadraj adımlar.js KAMERA kutularından, keşif noktaları adaptörün kesifNoktalari listesinden, ipucu cfg.dokun'dan gelir.
import { DERSLER, KAMERA, GORUNUM } from './adimlar.js';
import { KESIF, KATEGORI } from './kesif-veri.js';
import { vurguYap } from './yardimci.js';
import { sahneyiKur } from './donanimSahne.js';

// keşif kimliği -> grup (kesif-veri.js KATEGORI anahtarı); katalogda olmayan kimlik için null (işaret çizilmez)
const kategoriBul = (id) => (KATEGORI[KESIF[id]?.kat] ? KESIF[id].kat : null);

export const DONANIM = { id: 'donanim', DERSLER, KAMERA, KESIF, KATEGORI, kategoriBul, GORUNUM, vurguYap, sahneyiKur };
