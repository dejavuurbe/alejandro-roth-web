# Conexión de dominio — Alejandro Roth

## Identidad
- Dominio informado por Brian el 22/10/2026: `www.alejandroroth.com.ar`.
- Dominio principal previsto: `https://www.alejandroroth.com.ar/`.
- Variante sin `www`: `https://alejandroroth.com.ar/`; redirigir hacia la variante principal.
- Repositorio: `dejavuurbe/alejandro-roth-web`.
- Host: GitHub Pages mediante el workflow `.github/workflows/pages.yml` (Astro).
- Estado al preparar esta guía: **no se ha comprobado la delegación DNS, el HTTPS ni la asociación del dominio en Pages**. No anunciar publicación oficial todavía.

## Activación segura: orden exacto
1. En el repositorio, abrir **Settings → Pages → Custom domain** e ingresar exactamente `www.alejandroroth.com.ar`; guardar. No sustituir el modo **GitHub Actions**.
2. En el proveedor DNS que gestione `alejandroroth.com.ar` (Cloudflare solo si está delegado allí), establecer:
   - `CNAME` `www` → `dejavuurbe.github.io` (NO agregar `/alejandro-roth-web`).
   - Para el dominio raíz `@`, cuatro registros `A`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Opcional, IPv6: cuatro `AAAA`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
   - Evitar registros contradictorios para `@` o `www`; no crear comodín `*`.
   - Si Cloudflare administra la zona, usar inicialmente **Solo DNS** (nube gris) para comprobar certificado y conexión con GitHub.
3. En **Settings → Secrets and variables → Actions → Variables**, configurar variables del repositorio:
   - `SITE_URL` = `https://www.alejandroroth.com.ar`
   - `BASE_PATH` = `/`
   Estas variables alimentan el build, canónicas, schema, sitemap, imágenes, manifest y llms.txt. El workflow actual ya lee ambas.
4. Ejecutar manualmente **Actions → Publicar sitio de prueba → Run workflow** sobre `main`, o efectuar un push autorizado; comprobar que build y deploy terminen correctamente.
5. Comprobar resolución de `www` y raíz, redirección hacia `https://www.alejandroroth.com.ar/`, certificado HTTPS y **Enforce HTTPS** cuando aparezca disponible.
6. Validar navegación desde móvil y computadora: Inicio, Actividad, Enigma, relato, imágenes, redes, enlaces Hotmart/WhatsApp, contactos, GA4. Abrir `/robots.txt`, `/sitemap-index.xml`, `/llms.txt` y confirmar las URL nuevas; revisar canónicas y JSON-LD.
7. **No retirar `noindex,nofollow` ni `Disallow: /` hasta que Alejandro apruebe el contenido** y se declare publicación oficial. Las pruebas pueden medirse desde ahora mediante la propiedad GA4 existente.

## Notas
- El despliegue usa GitHub Actions: según la documentación de GitHub, un archivo `CNAME` en la rama es **ignorado** en este modo. El dominio se define en **Settings → Pages**, no mediante un CNAME de archivos.
- El registro DNS `www` apunta a `dejavuurbe.github.io`, no a una URL con ruta.
- NIC Argentina gestiona el registro y delegación; los registros A y CNAME se modifican donde estén alojados los DNS autoritativos. No asumir que están en Cloudflare sin revisar delegación.
- Cambiar `SITE_URL` y `BASE_PATH` a la raíz modifica las rutas de la compilación: coordinarlo con la configuración de Pages y DNS, no hacer el cambio mientras la web de prueba siga siendo el único acceso estable.
- Fuente: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Criterio de finalización
Dominio principal HTTPS activo, raíz redireccionando, enlaces absolutos correctos, medición GA4 preservada, sin errores de navegación; indexación solo tras aprobación expresa.
