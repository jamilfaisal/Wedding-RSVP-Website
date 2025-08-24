import { Heart, Flower, Flower2 } from 'lucide-react';
import { faqs } from './faq-data';
import FAQItem from './faq-item';

function FAQ() {
  return (
    <div className="lg:col-span-2">
      {renderHeader()}
      {renderFAQItems()}
    </div>
  );
}

function renderFAQItems() {
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
}

function renderHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
        <div className="w-10 h-10 bg-gradient-to-br from-sage-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-sage-200">
          <Heart className="w-5 h-5 text-brown-600" />
        </div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-sage-300 to-transparent"></div>
      </div>
      <h2 className="text-4xl text-brown-800 mb-4" style={{ fontFamily: 'var(--font-harrington)' }}>
        Frequently Asked Questions
      </h2>
      <div className="flex items-center justify-center gap-2">
        <Flower className="w-4 h-4 text-sage-400 opacity-60" />
        <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
        <Flower2 className="w-4 h-4 text-orange-300 opacity-60" />
      </div>
    </div>
  );
}

export default FAQ;
