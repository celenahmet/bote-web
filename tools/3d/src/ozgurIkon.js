// Özgür Mod parça ikonları (küçük SVG). Saf modül: derleme betiği paleti, sayfa betiği parça listesini bununla çizer.
export const LED_HEX = { kirmizi: '#e53935', sari: '#fbc02d', yesil: '#2fb344' };
export const KABLO_HEX = { turuncu: '#f57c00', kirmizi: '#d32f2f', siyah: '#2b2b30', sari: '#f2c200', yesil: '#2e9d48', mavi: '#1e6fd9', mor: '#7e57c2' };
const BANT_HEX = { 220: ['#d32f2f', '#d32f2f', '#7a4a24', '#c9a33a'], 10000: ['#7a4a24', '#1d1d1d', '#f57c00', '#c9a33a'] };
const ac = '<svg class="parca-ikon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">';
const ayak = 'stroke="#8a8f99" stroke-width="1.6" stroke-linecap="round" fill="none"';

export function ledIkon(renk) {
  const c = LED_HEX[renk] || LED_HEX.kirmizi;
  return `${ac}<path d="M13 23v7M19 23v5" ${ayak}/><path d="M10 15a6 6 0 0 1 12 0v6H10z" fill="${c}" stroke="#0006"/><rect x="8.5" y="20.5" width="15" height="2.8" rx="1" fill="${c}" stroke="#0006"/></svg>`;
}
export function direncIkon(deger) {
  const b = BANT_HEX[deger] || BANT_HEX[220];
  return `${ac}<path d="M1 16h6M25 16h6" ${ayak}/><rect x="7" y="11" width="18" height="10" rx="4" fill="#d8c69c" stroke="#0005"/>${b.map((c, i) => `<rect x="${[10, 13.2, 16.4, 21][i]}" y="11" width="2" height="10" fill="${c}"/>`).join('')}</svg>`;
}
export const butonIkon = () => `${ac}<path d="M10 25v5M22 25v5M10 7V2M22 7V2" ${ayak}/><rect x="6" y="7" width="20" height="18" rx="3" fill="#2b2b30"/><circle cx="16" cy="16" r="5" fill="#d84343"/></svg>`;
export function kabloIkon(renk) {
  const c = KABLO_HEX[renk] || 'var(--kablo,#f57c00)';
  return `${ac}<path d="M6 27C7 9 25 9 26 27" fill="none" style="stroke:${c}" stroke-width="3.2" stroke-linecap="round"/><rect x="3.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/><rect x="23.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/></svg>`;
}
export function parcaIkon(p) {
  if (p.tur === 'led') return ledIkon(p.renk);
  if (p.tur === 'direnc') return direncIkon(p.deger);
  if (p.tur === 'buton') return butonIkon();
  return kabloIkon(p.renk);
}
