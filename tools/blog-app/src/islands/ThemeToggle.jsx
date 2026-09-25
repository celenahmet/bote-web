import { useEffect, useState } from 'react';

const ORDER = ['system', 'light', 'dark'];
const LABEL = { system: 'Tema: sistem', light: 'Tema: açık', dark: 'Tema: koyu' };

function apply(mode) {
  const el = document.documentElement;
  if (mode === 'system') delete el.dataset.theme;
  else el.dataset.theme = mode;
  try { mode === 'system' ? localStorage.removeItem('bote-theme') : localStorage.setItem('bote-theme', mode); } catch {}
}

export default function ThemeToggle() {
  const [mode, setMode] = useState('system');
  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    if (t === 'light' || t === 'dark') setMode(t);
  }, []);
  const next = () => {
    const m = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
    setMode(m);
    apply(m);
  };
  return (
    <button type="button" className="icon-btn" onClick={next} aria-label={`${LABEL[mode]} (değiştir)`} title={LABEL[mode]}>
      {mode === 'light' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
      )}
      {mode === 'dark' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" /></svg>
      )}
      {mode === 'system' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 3.5v17A8.5 8.5 0 0 0 12 3.5Z" fill="currentColor" /></svg>
      )}
    </button>
  );
}
