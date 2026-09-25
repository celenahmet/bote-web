import { useEffect, useRef } from 'react';

// Ust bardaki ince cizgi: yazinin ne kadarinin okundugunu gosterir.
export default function ReadingProgress({ target = '.prose' }) {
  const bar = useRef(null);
  useEffect(() => {
    const el = document.querySelector(target);
    if (!el) return undefined;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    tick();
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, [target]);
  return <div className="progress" ref={bar} aria-hidden="true" />;
}
