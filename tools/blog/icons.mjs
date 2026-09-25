// Derlemede satir ici SVG ikonlar: arayuz ikonlari lucide-static (ISC), marka ikonlari
// simple-icons (CC0). Tarayiciya ikon kutuphanesi gitmez.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './content.mjs';

const cache = new Map();
export function icon(name, { brand = false, size = 18, cls = 'ico' } = {}) {
  const key = `${brand}:${name}:${size}:${cls}`;
  if (cache.has(key)) return cache.get(key);
  const file = brand
    ? path.join(ROOT, 'tools/node_modules/simple-icons/icons', `${name}.svg`)
    : path.join(ROOT, 'tools/node_modules/lucide-static/icons', `${name}.svg`);
  let svg = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').replace(/<title>[\s\S]*?<\/title>/, '').trim();
  svg = svg.replace(/<svg[^>]*?(viewBox="[^"]+")[^>]*>/, (_, vb) => brand
    ? `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" ${vb} width="${size}" height="${size}" fill="currentColor" aria-hidden="true" focusable="false">`
    : `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" ${vb} width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">`)
    .replace(/\s*\n\s*/g, '');
  cache.set(key, svg);
  return svg;
}
