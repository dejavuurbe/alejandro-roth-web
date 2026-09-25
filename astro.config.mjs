import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://dejavuurbe.github.io/alejandro-roth-web';
const base = process.env.BASE_PATH || '/alejandro-roth-web';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap()],
});
