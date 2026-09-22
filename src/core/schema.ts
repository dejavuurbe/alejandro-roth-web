import { site } from '../content/site';

export function personSchema() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    description: site.description,
  };

  if (site.url && site.url !== 'https://example.com') data.url = site.url;

  const sameAs = site.social
    .map((item) => item.url)
    .filter((url) => url && url !== '#');

  if (sameAs.length) data.sameAs = sameAs;

  return data;
}

export function bookSchema() {
  const book = site.featuredBook;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: { '@type': 'Person', name: site.name },
    description: book.synopsis,
  };

  if (book.isbn) data.isbn = book.isbn;
  if (book.year) data.datePublished = book.year;

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
