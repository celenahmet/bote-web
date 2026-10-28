import { useEffect, useState } from 'react';

// Sinav geri sayimi (AgsSayacKarti). Sunucu ciziminde kutular "–" kalir; tarih kartin
// statik metninde zaten yazili, yani JavaScript'siz okur da bilgiyi alir. Hedef Turkiye
// saatiyle (UTC+3, 2016'dan beri yaz-kis ayni) hesaplanir; okur yurt disindaysa da dogru
// sayar. Saat ÖSYM'ce aciklanmadiysa sinav gununun 10.00'u hedeflenir.
const iki = (n) => String(n).padStart(2, '0');

export default function SinavSayac({ tarih, saat = '' }) {
  const [kalan, setKalan] = useState(null);
  useEffect(() => {
    const [y, a, g] = tarih.split('-').map(Number);
    const [sa, dk] = (saat || '10:00').split(':').map(Number);
    const hedef = Date.UTC(y, a - 1, g, sa - 3, dk);
    const tik = () => setKalan(Math.max(0, hedef - Date.now()));
    tik();
    const id = setInterval(tik, 1000);
    return () => clearInterval(id);
  }, [tarih, saat]);

  if (kalan === 0) return <p className="sayac-bitti">Sınav tarihi geldi. Sonuç tarihi aşağıda yazıyor.</p>;
  const sn = kalan === null ? null : Math.floor(kalan / 1000);
  const gun = sn === null ? null : Math.floor(sn / 86400);
  const kutular = [
    ['Gün', gun ?? '–'],
    ['Saat', sn === null ? '–' : iki(Math.floor((sn % 86400) / 3600))],
    ['Dakika', sn === null ? '–' : iki(Math.floor((sn % 3600) / 60))],
    ['Saniye', sn === null ? '–' : iki(sn % 60)],
  ];
  return (
    <div className="sayac" role="timer" aria-label={gun === null ? 'Geri sayım' : `Sınava ${gun} gün kaldı`}>
      {kutular.map(([etiket, deger]) => (
        <div className="sayac-kutu" key={etiket} aria-hidden="true">
          <span className="sayac-sayi">{deger}</span>
          <span className="sayac-etiket">{etiket}</span>
        </div>
      ))}
    </div>
  );
}
