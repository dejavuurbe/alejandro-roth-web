export const site = {
  name: 'Alejandro Roth',
  role: 'Escritor',
  tagline: 'Autor de «Enigma. Relato de un amor incoherente».',
  description:
    'Sitio oficial de Alejandro Roth, escritor y autor de Enigma. Relato de un amor incoherente.',
  url: 'https://example.com',
  email: '',
  location: 'Buenos Aires, Argentina',
  social: [
    { label: 'Instagram', url: 'https://www.instagram.com/ale_rorh/' },
  ],
  author: {
    shortBio:
      'Alejandro Roth es escritor y autor de Enigma. Relato de un amor incoherente. Ha presentado su obra en espacios culturales del oeste del Gran Buenos Aires.',
    longBio:
      'Alejandro Roth es autor de Enigma. Relato de un amor incoherente. Su actividad literaria incluye presentaciones en La Casona Cultural, en Morón, y en la Biblioteca Popular Almafuerte, en Rafael Castillo, además de su vínculo con el circuito de Autores de La Matanza.',
    photo: '/images/autor-placeholder.svg',
  },
  featuredBook: {
    title: 'Enigma',
    subtitle: 'Relato de un amor incoherente',
    cover: '/images/portada-placeholder.svg',
    synopsis:
      'Enigma. Relato de un amor incoherente es la obra de Alejandro Roth que articula actualmente su presencia pública como autor. La sinopsis editorial completa se incorporará al recibir el material oficial.',
    genre: '',
    year: '',
    pages: '',
    isbn: '',
    publisher: '',
    buyUrl: '',
  },
  press: [
    {
      title: 'Presentación de Enigma',
      source: 'La Casona Cultural · Morón',
      url: '',
      description:
        'Presentación de la obra en La Casona Cultural, en Morón.',
    },
    {
      title: 'Presentación de Enigma',
      source: 'Biblioteca Popular Almafuerte · Rafael Castillo',
      url: '',
      description:
        'Presentación de la obra en la Biblioteca Popular Almafuerte, en Rafael Castillo.',
    },
    {
      title: 'Actividad literaria local',
      source: 'Autores de La Matanza',
      url: '',
      description:
        'Participación vinculada al circuito de autores y actividades literarias de La Matanza.',
    },
  ],
  faq: [
    {
      question: '¿Quién es Alejandro Roth?',
      answer:
        'Alejandro Roth es escritor y autor de Enigma. Relato de un amor incoherente, con actividad literaria en espacios culturales del oeste del Gran Buenos Aires.',
    },
    {
      question: '¿Qué es Enigma. Relato de un amor incoherente?',
      answer:
        'Es la obra de Alejandro Roth que actualmente concentra su presencia pública como autor. La ficha editorial y la sinopsis oficial se incorporarán al sitio una vez validadas.',
    },
  ],
};

export type SiteData = typeof site;
