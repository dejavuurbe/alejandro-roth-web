# Alejandro Roth — sitio web piloto

Sitio de prueba de Alejandro Roth, autor de *Enigma. Relato de un amor incoherente*.

Este repositorio fue creado a partir de `autores-web-plantilla` y se mantiene independiente de la plantilla maestra y de los demás sitios de autores.

## Arquitectura probada

Web Nivel 1 de dos páginas:

1. **Inicio** — autor, obra principal, compra y biografía.
2. **Actividad** — presentaciones, recorrido público y contacto.

El encabezado queda reducido a la marca/nombre del autor, **Actividad** y **Contacto**.

## Estado

- Diagnóstico digital inicial: realizado.
- Identidad visual extraída de la obra: aplicada.
- Compra digital: Hotmart; pedido físico: WhatsApp.
- Estructura Nivel 1: implementada.
- Biografía completa: pendiente de material definitivo.
- Sinopsis oficial: pendiente.
- Fotografía y portada: incorporadas.
- Dominio informado: **www.alejandroroth.com.ar** (vinculación Pages/DNS/HTTPS pendiente de verificación; guía en `DOMINIO.md`).
- Indexación pública habilitada por el workflow de producción el 22/10/2026 (GitHub Actions verificado); DNS/HTTPS y aparición en buscadores aún pendientes de comprobación.

## Lectura por buscadores e IA

Protocolo de auditoría, variantes de búsqueda, medición y lanzamiento: [AUDITORIA_BUSQUEDA_MEDICION.md](AUDITORIA_BUSQUEDA_MEDICION.md). La apertura de indexación se controla con la variable de GitHub Actions `PUBLIC_SITE_LIVE=true`, que debe activarse solo tras verificar DNS/HTTPS, navegación y aprobación editorial. La validación automatizada revisa ambos modos de construcción, pero no representa indexación garantizada en buscadores.

- Metadatos y JSON-LD: Person, WebSite y WebPage; Book impreso y digital en Inicio.
- `llms.txt`: generado desde los datos vigentes del autor, libro, actividades y compra.
- Sitemap: generado automáticamente, excluyendo la página 404.
- `robots.txt`: referencia el sitemap y mantiene `Disallow: /`.
- El workflow de publicación fija `PUBLIC_SITE_LIVE=true` desde el 22/10/2026 para retirar coordinadamente `noindex,nofollow` y el bloqueo de rastreo; los workflows de pruebas validan ambos modos. La variable se revisa en `.github/workflows/pages.yml`.

### Preparación del dominio

La dirección principal elegida es `https://www.alejandroroth.com.ar/` y la variante sin `www` deberá redirigir hacia ella. El procedimiento exacto de vinculación, DNS, variables, publicación y control de calidad está en [DOMINIO.md](DOMINIO.md).

La publicación admite variables de repositorio en GitHub Actions:
- `SITE_URL`: URL final del sitio, por ejemplo `https://dominio-del-autor.com.ar`.
- `BASE_PATH`: opcional. Sin valor se usa la ruta de `SITE_URL`; para un dominio en la raíz, `/`.

Sin variables se conserva la URL actual de GitHub Pages. La configuración alimenta canónicas, imágenes sociales, datos estructurados, sitemap, llms.txt y manifest. Después de registrar el dominio hay que configurar GitHub Pages/DNS y verificar las URLs antes de habilitar indexación. Cambiar variables no configura DNS ni el dominio de Pages.

## Flujo

Los cambios se prueban primero en ramas de desarrollo. La versión estable se incorpora a `main` después de validación.

## Medición desde el inicio

- Cuenta GA4: Brian Flores (404973477).
- Propiedad exclusiva: Alejandro Roth — Web de autor (558622094).
- Fecha de activación: 12 de octubre de 2026.
- Flujo web: Alejandro Roth — sitio web (16114635447).
- ID de medición: G-W6RSS7P3NX.
- Zona horaria: Buenos Aires; moneda de referencia: USD.
- La recopilación comienza con la publicación de la etiqueta; no existe historial retroactivo.
- page_view se emite tras cada navegación de Astro, con control de duplicados.
- Eventos: click_buy_digital, click_order_physical, click_read_story, click_activity_post y click_external_link.
- Los clics al pago o a WhatsApp son interés de compra, no ventas confirmadas.
- No se envían parámetros arbitrarios de URL ni texto de mensajes de WhatsApp.
- Publicidad y Google Signals deshabilitados. Medición mejorada: historial, clics salientes, búsquedas y formularios desactivados; se usan los eventos explícitos.
- La misma propiedad debe conservarse cuando se conecte el dominio final, actualizando la URL del flujo.
- Los informes al cliente son un servicio posterior; la recopilación funciona desde la activación.

- Conservación configurada: 14 meses para eventos detallados y datos de usuario; los informes agregados siguen su política propia.
- Prueba de recepción confirmada en tiempo real: 1 usuario técnico, 3 page_view (Inicio, Actividad y relato) y 1 click_read_story. Son pruebas de instalación, no audiencia ni ventas reales.
