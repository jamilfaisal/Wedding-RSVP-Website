import { Flower, Leaf } from 'lucide-react';
import { FAQ } from './faq-data';

function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-sage-100 relative">
      {renderTopLeftCornerFloral()}
      {renderFAQQuestionAnswer(faq)}
      {renderBottomRightCornerFloral()}
    </div>
  );
}

function renderTopLeftCornerFloral() {
  return (
    <div className="absolute top-6 left-6">
      <div className="w-8 h-8 bg-gradient-to-br from-sage-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-sage-200">
        <Flower className="w-4 h-4 text-sage-600" />
      </div>
    </div>
  );
}

function renderFAQQuestionAnswer(faq: FAQ) {
  return (
    <div className="ml-12">
      <h3
        className="text-xl text-brown-800 mb-4 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {faq.question}
      </h3>
      <p className="text-brown-600 leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
        {faq.answer}
      </p>
    </div>
  );
}

function renderBottomRightCornerFloral() {
  return (
    <div className="absolute bottom-3 right-3">
      <Leaf className="w-3 h-3 text-orange-300 opacity-40" />
    </div>
  );
}

export default FAQItem;
