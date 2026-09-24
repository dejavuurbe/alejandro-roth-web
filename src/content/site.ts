const base = import.meta.env.BASE_URL;

export const site = {
  name: 'Alejandro Roth',
  role: 'Escritor argentino',
  tagline: 'Autor de «Enigma: Relato de un amor incoherente».',
  description:
    'Alejandro Roth, escritor argentino de Rafael Castillo, Buenos Aires, y autor de Enigma: Relato de un amor incoherente, su primera obra publicada.',
  url: 'https://dejavuurbe.github.io/alejandro-roth-web',
  location: 'Rafael Castillo, Buenos Aires, Argentina',
  author: {
    birthDate: '1981',
    shortBio: 'Escritor argentino de Rafael Castillo y autor de Enigma: Relato de un amor incoherente.',
    longBio:
      'Alejandro Roth nació en Rafael Castillo, Buenos Aires, en 1981. Empezó a escribir durante la adolescencia y, alrededor de los cuarenta años, retomó esa vocación con mayor continuidad. Su recorrido desemboca en Enigma: Relato de un amor incoherente, su primera obra publicada; una historia que explora los vínculos y sus contradicciones.',
    photo: `${base}images/alejandro-roth-autor.jpg`,
  },
  featuredBook: {
    title: 'Enigma',
    fullTitle: 'Enigma: Relato de un amor incoherente',
    subtitle: 'Relato de un amor incoherente',
    cover: `${base}images/enigma-portada.jpg`,
    synopsis:
      'Gael, empleado bancario recientemente divorciado, conoce a Perla, una supervisora introvertida. A partir de ese encuentro, la novela recorre vínculos contemporáneos marcados por expectativas, miedo al compromiso, duelos emocionales, desencuentros y distintas formas de vivir el amor.',
    genre: 'Narrativa Argentina Contemporánea',
    year: '2026',
    pages: '240',
    isbn: '978-631-01-3982-1',
    publisher: 'Edición de autor',
    illustrator: 'Sofía Margot Roth',
    foreword: 'Gina Laura Cundari',
    design: 'Laura I. Fleitas',
    // Reemplazar solo este valor cuando Alejandro comparta su enlace definitivo pay.hotmart.com.
    hotmartCheckoutUrl: '',
    buyLabel: 'Comprar edición digital',
  },
  press: [
    {
      title: 'Presentación de Enigma',
      source: 'Biblioteca Popular Almafuerte · Rafael Castillo',
      url: 'https://www.instagram.com/p/DcWUEv3vygW/',
      description:
        'Presentación de la novela en la Biblioteca Popular Almafuerte de Rafael Castillo. La publicación de la actividad funciona como fuente del registro.',
    },
  ],
};

export type SiteData = typeof site;
