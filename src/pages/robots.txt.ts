import type { APIRoute } from 'astro';
import { absoluteUrl } from '../core/urls';

// Publication flag is shared by robots and HTML head.
const publicSiteLive = import.meta.env.PUBLIC_SITE_LIVE === 'true';
export const GET: APIRoute = () => new Response(
  'User-agent: *\n' + (publicSiteLive ? 'Allow: /\n' : 'Disallow: /\n') + '\nSitemap: ' + absoluteUrl('sitemap-index.xml') + '\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
