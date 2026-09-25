import { useEffect, useState } from 'react';
import { countView, getViews, fmt } from './views-client.js';

// Yazi sayfasinda (count) goruntulenmeyi bir kez sayar; listelerde yalnizca okur.
export default function ViewCount({ slug, count = false }) {
  const [views, setViews] = useState(null);
  useEffect(() => {
    let alive = true;
    const key = `bote:seen:${slug}`;
    let seen = false;
    try { seen = sessionStorage.getItem(key) === '1'; } catch {}
    const run = count && !seen ? countView(slug) : getViews(slug);
    if (count && !seen) try { sessionStorage.setItem(key, '1'); } catch {}
    run.then((v) => alive && setViews(v));
    return () => { alive = false; };
  }, [slug, count]);
  if (!views) return null;
  return <span className="views">{fmt(views)} görüntülenme</span>;
}
