// One source for absolute URLs, on GitHub Pages or the future custom domain.
export const siteUrl = new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href;

export function absoluteUrl(path = '') {
  return new URL(path.replace(/^\/+/, ''), siteUrl).href;
}
