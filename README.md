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
- Dominio final: pendiente.
- Sitio mantenido en noindex durante la prueba.

## Lectura por buscadores e IA

- Metadatos y JSON-LD: Person, WebSite y WebPage; Book impreso y digital en Inicio.
- `llms.txt`: generado desde los datos vigentes del autor, libro, actividades y compra.
- Sitemap: generado automáticamente, excluyendo la página 404.
- `robots.txt`: referencia el sitemap y mantiene `Disallow: /`.
- Todas las páginas mantienen `noindex,nofollow` hasta aprobación final.

### Preparación del dominio

La publicación admite variables de repositorio en GitHub Actions:
- `SITE_URL`: URL final del sitio, por ejemplo `https://dominio-del-autor.com.ar`.
- `BASE_PATH`: opcional. Sin valor se usa la ruta de `SITE_URL`; para un dominio en la raíz, `/`.

Sin variables se conserva la URL actual de GitHub Pages. La configuración alimenta canónicas, imágenes sociales, datos estructurados, sitemap, llms.txt y manifest. Después de registrar el dominio hay que configurar GitHub Pages/DNS y verificar las URLs antes de habilitar indexación. Cambiar variables no configura DNS ni el dominio de Pages.

## Flujo

Los cambios se prueban primero en ramas de desarrollo. La versión estable se incorpora a `main` después de validación.
