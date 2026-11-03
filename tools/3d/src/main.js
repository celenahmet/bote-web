// 3D Simülasyon Merkezi: Arduino ailesi ders sayfası girişi (paket: assets/sim-<özet>.js).
// Sayfa kabuğu (sayfa.js) + genel ders motoru (ders.js) + Arduino adaptörü (arduinoSahne.js). Yeni bir aile aynı kalıpla
// kendi giriş dosyasını yazar (CLAUDE.md "Yeni aile ekleme"); ortak dosyalara dokunması gerekmez.
import { kabukKur } from './sayfa.js';
import { dersMotoru } from './ders.js';
import { ARDUINO } from './arduinoSahne.js';
import './podyum.js'; // Keşif kartında parçanın podyum görseli (görselleri tools/3d/podyum.mjs üretir)

const K = kabukKur();
if (K.veri) dersMotoru(ARDUINO, K); // merkez ve aile sayfasında sahne yok
