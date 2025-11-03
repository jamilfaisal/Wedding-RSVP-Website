export interface FAQ {
  question: string;
  answer: string;
}

export const faqsStatic = [
  {
    key: 'attire',
  },
  {
    key: 'transportation',
  },
  {
    key: 'children',
  },
  {
    key: 'endTime',
  },
  {
    key: 'photos',
  },
  {
    key: 'parking',
  },
  {
    key: 'dietary',
  },
  {
    key: 'weather',
  },
  {
    key: 'gifts',
  },
];

export function getFAQs(t: (key: string) => string): FAQ[] {
  return faqsStatic.map((faq) => ({
    question: t(`contactFAQs.faqs.${faq.key}.question`),
    answer: t(`contactFAQs.faqs.${faq.key}.answer`),
  }));
}
