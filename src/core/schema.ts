import { site } from '../content/site';
import { absoluteUrl } from './urls';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('#autor'),
    name: site.name,
    jobTitle: site.role,
    birthDate: site.author.birthDate,
    birthPlace: { '@type': 'Place', name: site.location },
    description: site.author.longBio,
    url: site.url,
    image: new URL(site.author.photo, site.url).href,
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    sameAs: [site.contact.instagramUrl, site.contact.facebookUrl],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': absoluteUrl('#website'),
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'es',
    publisher: { '@id': absoluteUrl('#autor') },
  };
}

export function bookSchema() {
  const book = site.featuredBook;
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': absoluteUrl('#enigma-impreso'),
    name: book.fullTitle,
    author: { '@id': absoluteUrl('#autor') },
    url: absoluteUrl('#obra'),
    image: new URL(book.cover, site.url).href,
    description: book.synopsis,
    inLanguage: 'es',
    genre: book.genre,
    datePublished: book.year,
    numberOfPages: Number(book.pages),
    isbn: book.isbn,
    bookFormat: 'https://schema.org/Paperback',
    illustrator: { '@type': 'Person', name: book.illustrator },
    contributor: { '@type': 'Person', name: book.foreword, description: 'Prólogo' },
    workExample: {
      '@type': 'Book',
      '@id': absoluteUrl('#enigma-digital'),
      name: book.fullTitle,
      author: { '@id': absoluteUrl('#autor') },
      inLanguage: 'es',
      bookFormat: 'https://schema.org/EBook',
      url: book.hotmartCheckoutUrl,
    },
  };
}
