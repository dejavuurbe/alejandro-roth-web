import type { APIRoute } from 'astro';
import { site } from '../content/site';

export const GET: APIRoute = () => new Response(JSON.stringify({
  name: site.name,
  short_name: 'A. Roth',
  start_url: import.meta.env.BASE_URL,
  scope: import.meta.env.BASE_URL,
  display: 'standalone',
  background_color: '#03080d',
  theme_color: '#03080d',
  icons: [],
}), { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
