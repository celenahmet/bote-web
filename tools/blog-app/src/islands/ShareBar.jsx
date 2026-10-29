import { useEffect, useRef, useState } from 'react';
import { MARKA_SIMGELERI } from '../markaSimgeleri.js';

// Paylaşım: sunucuda düz bağlantılar; JS ile "Bağlantıyı kopyala", Instagram ve cihazın
// paylaşım menüsü çalışır. 29.10.2026 (Ahmet: "tüm bloglarımızda bu standartları
// sağlayacağız"): Veterito, UniConnectly ve OtoSenior'daki gibi markaların düz renginde
// simge daireleri. Simge yanında görünür metin yok, erişilebilir ad `aria-label`da.
// Ahmet 29.10: "instagram gibi platformlar yok, alakalı birkaç platform daha" → Instagram,
// Threads, Reddit, E-posta. Instagram'ın web paylaşım adresi yok: dokunmatik cihazda cihaz
// menüsü (Instagram orada), masaüstünde bağlantı panoya, Instagram yeni sekmede.
// 6 sütun ızgara: 10-11 düğme iki dengeli satır (blog.css `.share-liste`).
const AGLAR = [
  ['whatsapp', 'WhatsApp', (u, t) => `https://wa.me/?text=${t}%20${u}`],
  ['x', 'X', (u, t) => `https://x.com/intent/tweet?url=${u}&text=${t}`],
  ['telegram', 'Telegram', (u, t) => `https://t.me/share/url?url=${u}&text=${t}`],
  ['facebook', 'Facebook', (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`],
  ['linkedin', 'LinkedIn', (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
  ['threads', 'Threads', (u, t) => `https://www.threads.com/intent/post?url=${u}&text=${t}`],
  ['reddit', 'Reddit', (u, t) => `https://www.reddit.com/submit?url=${u}&title=${t}`],
];

const Simge = ({ ad }) => <span className="share-simge" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MARKA_SIMGELERI[ad] }} />;

export default function ShareBar({ url, title }) {
  const [canShare, setCanShare] = useState(false);
  const [durum, setDurum] = useState('');
  const [kopya, setKopya] = useState(false);
  const zaman = useRef(0);
  useEffect(() => { setCanShare(typeof navigator.share === 'function'); return () => clearTimeout(zaman.current); }, []);
  const e = encodeURIComponent;

  const goster = (metin) => {
    clearTimeout(zaman.current);
    setDurum(metin);
    setKopya(true);
    zaman.current = setTimeout(() => { setDurum(''); setKopya(false); }, 4000);
  };
  const panoya = () => (navigator.clipboard ? navigator.clipboard.writeText(url).then(() => true, () => false) : Promise.resolve(false));
  const cihazda = () => navigator.share?.({ url, title }).catch(() => {});
  const kopyala = () => panoya().then((ok) => { if (ok) goster('Bağlantı kopyalandı'); });
  const instagram = () => {
    if (window.matchMedia?.('(pointer: coarse)').matches && typeof navigator.share === 'function') { cihazda(); return; }
    panoya().then((ok) => {
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
      if (ok) goster("Bağlantı kopyalandı, Instagram'da yapıştırabilirsiniz");
    });
  };

  return (
    <div className="share">
      <p className="share-label">Bu yazıyı paylaşın</p>
      <ul className="share-liste">
        {canShare && (
          <li><button type="button" className="share-daire share-cihaz" onClick={cihazda} aria-label="Cihazın paylaşım menüsü" title="Paylaş"><Simge ad="paylas" /></button></li>
        )}
        <li><button type="button" className="share-daire share-kopya" onClick={kopyala} aria-label="Bağlantıyı kopyala" title="Bağlantıyı kopyala"><Simge ad={kopya ? 'tamam' : 'baglanti'} /></button></li>
        <li><button type="button" className="share-daire share-instagram" onClick={instagram} aria-label="Instagram'da paylaşın" title="Instagram"><Simge ad="instagram" /></button></li>
        {AGLAR.map(([ad, etiket, adres]) => (
          <li key={ad}>
            <a className={`share-daire share-${ad}`} href={adres(e(url), e(title))} rel="noopener nofollow" target="_blank" aria-label={`${etiket} ile paylaş`} title={etiket}>
              <Simge ad={ad} />
            </a>
          </li>
        ))}
        {/* E-posta yeni sekme açmıyor: boş sekme kalıyor. */}
        <li><a className="share-daire share-eposta" href={`mailto:?subject=${e(title)}&body=${e(url)}`} aria-label="E-postayla gönderin" title="E-posta"><Simge ad="eposta" /></a></li>
      </ul>
      <span className="share-durum" role="status">{durum}</span>
    </div>
  );
}
