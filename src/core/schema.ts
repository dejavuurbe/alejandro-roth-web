import { site } from '../content/site';

export function personSchema() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    birthDate: site.author.birthDate,
    birthPlace: {
      '@type': 'Place',
      name: 'Rafael Castillo, Buenos Aires, Argentina',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rafael Castillo',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    occupation: 'Escritor argentino',
    description: site.description,
  };

  if (site.url && site.url !== 'https://example.com') data.url = site.url;

  return data;
}

export function bookSchema() {
  const book = site.featuredBook;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.fullTitle,
    author: { '@type': 'Person', name: site.name },
    description: book.synopsis,
    genre: book.genre,
    datePublished: book.year,
    numberOfPages: Number(book.pages),
    bookFormat: 'https://schema.org/Paperback',
    illustrator: {
      '@type': 'Person',
      name: book.illustrator,
    },
    contributor: {
      '@type': 'Person',
      name: book.foreword,
      description: 'Prólogo',
    },
  };

  if (book.isbn) data.isbn = book.isbn;

  return data;
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
