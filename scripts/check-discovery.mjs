import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const rawSite = process.env.SITE_URL || 'https://dejavuurbe.github.io/alejandro-roth-web';
const configured = new URL(rawSite);
const base = process.env.BASE_PATH || configured.pathname;
const publicSiteLive = process.env.PUBLIC_SITE_LIVE === 'true';
const expectedRoot = new URL(base.endsWith('/') ? base : base + '/', configured.origin).href;
const file = (path) => readFileSync(new URL(path, dist), 'utf8');

for (const path of ['index.html', 'actividad/index.html', 'relatos/el-flaco-facundo/index.html', 'robots.txt', 'llms.txt', 'sitemap-index.xml']) {
  assert.ok(existsSync(new URL(path, dist)), 'Archivo faltante: ' + path);
}
const home = file('index.html');
const activities = file('actividad/index.html');
const story = file('relatos/el-flaco-facundo/index.html');
const robots = file('robots.txt');
const llms = file('llms.txt');
const sitemap = file('sitemap-index.xml');

for (const phrase of ['Alejandro Roth', 'Enigma', '978-631-01-3982-1', 'Gael', 'Perla']) {
  assert.ok(home.includes(phrase), 'Falta identificar en Inicio: ' + phrase);
}
for (const schema of ['"@type":"Person"', '"@type":"Book"', '"@type":"WebSite"']) {
  assert.ok(home.includes(schema), 'Dato estructurado faltante: ' + schema);
}
assert.ok(home.includes('G-W6RSS7P3NX'), 'Falta etiqueta GA4 vigente');
assert.ok(home.includes('href="' + expectedRoot + '"'), 'Inicio no apunta al dominio canónico');
assert.ok(llms.includes(expectedRoot), 'llms.txt no contiene enlaces del dominio canónico');
assert.ok(robots.includes('Sitemap: ' + expectedRoot + 'sitemap-index.xml'), 'robots.txt apunta a otro sitemap');
assert.ok(sitemap.includes(expectedRoot), 'sitemap no corresponde al dominio canónico');
assert.ok(activities.indexOf('Presentaciones y recorrido público') < activities.indexOf('Relatos cortos'), 'Actividad no empieza por presentaciones');
assert.ok(story.includes('Conocer Enigma'), 'Falta continuidad del relato a la novela');

if (publicSiteLive) {
  assert.ok(robots.includes('Allow: /'), 'Publicación activa no permite rastrear');
  assert.ok(!home.includes('noindex,nofollow'), 'Publicación activa todavía bloquea la indexación');
} else {
  assert.ok(robots.includes('Disallow: /'), 'La web de pruebas debe mantener rastreo cerrado');
  assert.ok(home.includes('noindex,nofollow'), 'La web de pruebas debe mantener noindex');
}
console.log('Verificación de buscadores, IA y GA4 correcta: ' + (publicSiteLive ? 'PUBLICACIÓN' : 'PRUEBAS') + ' / ' + expectedRoot);
