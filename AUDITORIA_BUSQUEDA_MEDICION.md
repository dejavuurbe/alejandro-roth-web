# SEO, búsqueda asistida por IA y medición — Alejandro Roth

**Estado de la auditoría:** 22/10/2026. Repositorio `dejavuurbe/alejandro-roth-web`.

## Objetivo verificable

Facilitar que las búsquedas relevantes identifiquen al escritor Alejandro Roth, autor de *Enigma: Relato de un amor incoherente*, incluso cuando se omitan términos o cambie su orden. Los errores de escritura, las consultas imprevisibles y las respuestas generativas dependen de los buscadores: ninguna combinación puede garantizarse. No utilizar listas de palabras mal escritas o páginas generadas masivamente para posicionar: son prácticas contraproducentes.

## Identidad y señales presentes

- Identidad principal: Alejandro Roth, escritor argentino de Rafael Castillo, Buenos Aires.
- Variante abreviada recogida en `Person.alternateName`: Ale Roth.
- Obra principal: *Enigma: Relato de un amor incoherente*; título breve: *Enigma*, con `Book.alternateName`.
- Datos: título, descripción, foto, portada, ISBN, editorial, autores colaboradores, fecha, actividad literaria y enlaces a perfiles del autor.
- JSON-LD: `Person`, `WebSite`, `WebPage` y `Book`. Las URL canónicas se generan desde `SITE_URL` y `BASE_PATH`.
- `llms.txt` resume información y páginas del sitio, pero no representa un protocolo universalmente obligatorio ni garantiza inclusión en respuestas de IA.
- Sitemap de Astro: `/sitemap-index.xml`; página 404 fuera del mapa.

## Cobertura de consultas que interesa evaluar

- Identidad: Alejandro Roth, Ale Roth, Roth escritor, autor Alejandro Roth.
- Autor/obra: Alejandro Roth Enigma, Enigma Alejandro, Enigma Roth.
- Obra: Enigma relato de un amor incoherente, novela Enigma amor incoherente.
- Contexto: Alejandro Roth La Matanza, Alejandro Roth Rafael Castillo, Alejandro Roth Biblioteca Almafuerte.
- Errores posibles: Alejandro Rot, Alejandro Roht, pero **no publicar estas grafías como supuestos alias reales**. Verificar su rendimiento en el buscador después de la indexación; la corrección ortográfica corresponde al motor de búsqueda.
- Si aparecen consultas reales nuevas, decidir mejoras de contenido a partir de Search Console, no de variantes inventadas.

## Estado de indexación y lanzamiento

El repositorio tiene un interruptor único de publicación: variable **`PUBLIC_SITE_LIVE`** en GitHub Actions.
- Ausente o distinto de `true`: mantiene `noindex,nofollow` en HTML y `Disallow: /` en `robots.txt`.
- Valor `true`: omite la etiqueta de exclusión y publica `Allow: /` junto al sitemap.
- Los workflows de validación y despliegue leen la variable. La validación genera el sitio y comprueba la salida real: dominio canónico, sitemap, `llms.txt`, datos estructurados y presencia de GA4. Además puede ensayar la compilación pública sin modificar el sitio publicado.
- **NO habilitar `PUBLIC_SITE_LIVE=true` hasta comprobar DNS, HTTPS, navegación en `www.alejandroroth.com.ar` y aprobación editorial.** Después de modificar la variable, disparar una nueva compilación y revisar el resultado.

## Después de activar y revisar el dominio

1. Verificar públicamente las URL de Inicio, Actividad, relato, `robots.txt`, `sitemap-index.xml`, `llms.txt` y las canónicas.
2. Abrir `https://search.google.com/search-console`, registrar una propiedad de dominio `alejandroroth.com.ar` usando el registro TXT solicitado por Google en la zona DNS autoritativa; conservar otros registros existentes.
3. En Search Console, enviar `https://www.alejandroroth.com.ar/sitemap-index.xml`, inspeccionar Inicio, Actividad y el relato, pedir indexación si corresponde y controlar cobertura.
4. Crear/verificar la propiedad en Bing Webmaster Tools; enviar sitemap si hace falta.
5. Evaluar resultados en búsquedas de nombre, obra y sus combinaciones; identificar homónimos y enlazar el dominio oficial desde redes institucionales, entrevistas, presentaciones y publicaciones relevantes.
6. No prometer que Google, Bing, ChatGPT, Gemini, Perplexity u otros asistentes citen o muestren la página.

## Medición GA4

- Se conserva la propiedad exclusiva ya creada y documentada en `README.md`, ID web `G-W6RSS7P3NX`.
- La etiqueta realiza `page_view` en las navegaciones y eventos explícitos de clic hacia Hotmart, WhatsApp, lectura, publicaciones y enlaces externos.
- Un clic al checkout/WhatsApp **no es una venta confirmada**.
- Según el registro de octubre de 2026, hubo pruebas exitosas de recepción en Tiempo real. Esto NO demuestra por sí mismo el estado actual del dominio.
- Las estadísticas se guardan desde la instalación en la propiedad administrada por Brian y **no se entregan automáticamente al cliente**; un informe solicitado podrá ofrecerse posteriormente, sujeto al alcance comercial acordado.
- Distinguir la decisión comercial de no proporcionar informes de la obligación de informar transparentemente a los visitantes sobre la medición. Antes del lanzamiento, revisar aviso de privacidad, uso de cookies y consentimiento aplicable (sobre todo visitantes internacionales).
- **Sin conexión de lectura directa a la propiedad GA4 de Alejandro** no está verificada aquí una recepción nueva de eventos. Debe confirmarse en DebugView o Tiempo real desde una navegación de prueba, una vez activo el dominio. El único conector Search Console detectado en este chat corresponde a DejavuUrbe, no a Alejandro.

## Criterios de aceptación

- [ ] Dominio `www` resuelve y tiene HTTPS válido; raíz redirige a `www`.
- [ ] Web navegable desde escritorio y móvil; compra y contacto funcionales.
- [ ] Titular aprueba contenidos y publicación.
- [ ] `PUBLIC_SITE_LIVE=true` guardado y desplegado; robots abierto y sin noindex.
- [ ] Sitemap enviado a Search Console y Bing.
- [ ] GA4 comprueba visita de prueba y evento de clic sin compra.
- [ ] Aviso de medición y consentimiento apropiado revisados.
- [ ] Evaluación de consultas de búsqueda cuando existan datos de impresiones.

Fuentes: https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/essentials/spam-policies .
