// BÖTE Blog (Astro + React adalari). Cikti gecici klasore uretilir; tools/build-blog.mjs
// sonucu depodaki blog/ klasoruyle esitler ve kok dosyalari (sitemap, llms) uretir.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.bote.web.tr',
  base: '/blog',
  trailingSlash: 'never',
  outDir: process.env.BLOG_OUT_DIR || './dist',
  build: { format: 'directory', assets: '_astro', inlineStylesheets: 'always' },
  cacheDir: './.astro-cache',
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [react()],
});
