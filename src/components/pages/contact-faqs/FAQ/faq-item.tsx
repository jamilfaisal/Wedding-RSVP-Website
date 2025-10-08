import { Flower, Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FAQ } from './faq-data';

function FAQItem({ faq }: { faq: FAQ }) {
  const currentPage = usePathname();
  const locale = currentPage.split('/')[1] || 'en';

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-sage-100 relative">
      {renderTopLeftCornerFloral()}
      {renderFAQQuestionAnswer(faq, locale)}
      {renderBottomRightCornerFloral()}
    </div>
  );
}

function renderTopLeftCornerFloral() {
  return (
    <div className="absolute top-6 start-6">
      <div className="w-8 h-8 bg-gradient-to-br from-sage-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-sage-200">
        <Flower className="w-4 h-4 text-sage-600" />
      </div>
    </div>
  );
}

function renderFAQQuestionAnswer(faq: FAQ, locale: string) {
  const parseAnswer = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <Link
          key={match.index}
          href={`/${locale}${linkUrl}`}
          className="text-sage-600 hover:text-sage-700 underline decoration-sage-400 underline-offset-2 hover:decoration-sage-600 transition-colors font-medium"
        >
          {linkText}
        </Link>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="ms-12">
      <h3
        className="text-xl text-brown-800 mb-4 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {faq.question}
      </h3>
      <p className="text-brown-600 leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
        {parseAnswer(faq.answer)}
      </p>
    </div>
  );
}

function renderBottomRightCornerFloral() {
  return (
    <div className="absolute bottom-3 end-3">
      <Leaf className="w-3 h-3 text-orange-300 opacity-40" />
    </div>
  );
}

export default FAQItem;
