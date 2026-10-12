import type { APIRoute } from 'astro';
import { site } from '../content/site';
import { absoluteUrl } from '../core/urls';

export const GET: APIRoute = () => {
  const book = site.featuredBook;
  const whatsapp = 'https://wa.me/' + site.contact.phoneHref.replace(/\D/g, '') +
    '?text=' + encodeURIComponent('Hola Alejandro, quiero pedir el libro físico de Enigma. ¿Me indicás el precio y las opciones de entrega?');
  const content = [
    '# ' + site.name + ' — escritor argentino',
    '',
    '> ' + site.description,
    '',
    site.author.longBio,
    '',
    'Este sitio identifica al escritor de Rafael Castillo y autor de Enigma. No debe confundirse con otras personas del mismo nombre.',
    '',
    '## Obra',
    '',
    '- Título: ' + book.fullTitle,
    '- Sinopsis: ' + book.synopsis,
    '- Idioma: español',
    '- Primera edición: ' + book.year,
    '- Clasificación: ' + book.genre,
    '- Edición impresa: ' + book.pages + ' páginas; ISBN ' + book.isbn,
    '- Ilustraciones: ' + book.illustrator,
    '- Prólogo: ' + book.foreword,
    '- Diseño de portada: ' + book.design,
    '',
    '## Páginas',
    '',
    '- [Inicio](' + absoluteUrl() + '): autor, obra y biografía.',
    '- [Actividad](' + absoluteUrl('actividad/') + '): relatos, presentaciones y contacto.',
    '- [El Flaco Facundo: Un Frío Feriante](' + absoluteUrl('relatos/el-flaco-facundo/') + '): relato completo de Alejandro Roth.',
    '- [Contacto](' + absoluteUrl('actividad/#contacto') + '): correo y redes oficiales.',
    '',
    '## Cómo conseguir Enigma',
    '',
    '- [Libro físico por WhatsApp](' + whatsapp + '): consultar precio y coordinar entrega con Alejandro.',
    '- [Libro digital en Hotmart](' + book.hotmartCheckoutUrl + '): acceso directo al pago del eBook.',
    '',
    '## Presentaciones',
    '',
    ...site.press.map((item) => '- [' + item.source + '](' + item.url + '): ' + item.description),
    '',
    '## Contacto público',
    '',
    '- Correo: ' + site.contact.email,
    '- [Instagram](' + site.contact.instagramUrl + ')',
    '- [Facebook](' + site.contact.facebookUrl + ')',
    '',
  ].join('\n');
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
