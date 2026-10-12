import type { APIRoute } from 'astro';
import { absoluteUrl } from '../core/urls';

// Keep preview crawling disabled until the final site is approved.
export const GET: APIRoute = () => new Response(
  'User-agent: *\nDisallow: /\n\nSitemap: ' + absoluteUrl('sitemap-index.xml') + '\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
