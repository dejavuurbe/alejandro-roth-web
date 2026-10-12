import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL may include a subdirectory. A custom domain at its root needs no BASE_PATH.
const configuredUrl = new URL(process.env.SITE_URL || 'https://dejavuurbe.github.io/alejandro-roth-web');
const base = process.env.BASE_PATH || configuredUrl.pathname;

export default defineConfig({
  site: configuredUrl.origin,
  base,
  output: 'static',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [sitemap({ filter: (url) => !url.endsWith('/404/') })],
});
