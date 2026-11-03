// 3D Simülasyon Merkezi: Bilgisayar Donanımı ailesi ders sayfası girişi (paket: assets/donanim-<özet>.js).
// Sayfa kabuğu (sayfa.js) + genel ders motoru (ders.js) + donanım aile tanımı (aileTanim.js). Arduino'nun src/main.js'i ile
// aynı kalıp (CLAUDE.md "Yeni aile ekleme").
import { kabukKur } from '../../src/sayfa.js';
import { dersMotoru } from '../../src/ders.js';
import { DONANIM } from './aileTanim.js';

const K = kabukKur();
if (K.veri) dersMotoru(DONANIM, K);
