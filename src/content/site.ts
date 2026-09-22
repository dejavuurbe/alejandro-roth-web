const base = import.meta.env.BASE_URL;

export const site = {
  name: 'Alejandro Roth',
  role: 'Escritor',
  tagline: 'Autor de «Enigma. Relato de un amor incoherente».',
  description:
    'Sitio de prueba de Alejandro Roth, escritor y autor de Enigma. Relato de un amor incoherente.',
  url: 'https://dejavuurbe.github.io/alejandro-roth-web',
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
    photo: `${base}images/alejandro-roth-autor.jpg`,
  },
  featuredBook: {
    title: 'Enigma',
    subtitle: 'Relato de un amor incoherente',
    cover: `${base}images/enigma-portada.jpg`,
    synopsis:
      'Una historia centrada en el drama generacional de las relaciones modernas y en cómo los duelos emocionales previos influyen en la construcción de nuevos vínculos.',
    genre: '',
    year: '',
    pages: '',
    isbn: '',
    publisher: '',
    buyUrl: 'https://www.autoreseditores.com/libro/9550/maria-paula-villa/enigma.html',
    buyLabel: 'Comprar en Autores Editores',
  },
  press: [
    {
      title: 'Presentación de Enigma',
      source: 'La Casona Cultural · Morón',
      url: '',
      description:
        'Presentación de la obra en La Casona Cultural, Mendoza 109, Morón, acompañada por música en vivo y lectura de poesía.',
    },
    {
      title: 'Presentación de Enigma',
      source: 'Biblioteca Popular Almafuerte · Rafael Castillo',
      url: 'https://www.instagram.com/p/DcWUFv3vygW/',
      description:
        'Presentación de la novela en la Biblioteca Popular Almafuerte de Rafael Castillo, con actividad libre y gratuita.',
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
      question: '¿De qué trata Enigma. Relato de un amor incoherente?',
      answer:
        'La obra aborda relaciones modernas atravesadas por duelos emocionales previos y examina cómo esas experiencias condicionan la construcción de nuevos vínculos.',
    },
  ],
};

export type SiteData = typeof site;
