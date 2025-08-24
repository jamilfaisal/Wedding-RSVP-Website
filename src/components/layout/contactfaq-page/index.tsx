import { Flower, Leaf, Heart, Flower2 } from 'lucide-react';
import Contact from './Contact/contact';
import FAQ from './FAQ/faq';

function ContactFAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/20 to-orange-50/10 py-20">
      <div className="max-w-5xl mx-auto px-8">
        {renderHeader()}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <Contact />
          <FAQ />
        </div>
        {renderFooter()}
      </div>
    </div>
  );
}

function renderFooter() {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-sage-50/90 to-orange-50/90 backdrop-blur-sm rounded-lg p-10 shadow-xl border border-sage-100 relative">
        {/* Floral border decoration */}
        <div className="absolute top-4 left-4">
          <Flower className="w-6 h-6 text-sage-400 opacity-50" />
        </div>
        <div className="absolute top-4 right-4">
          <Flower2 className="w-6 h-6 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Leaf className="w-6 h-6 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 right-4">
          <Leaf className="w-6 h-6 text-sage-400 opacity-50" />
        </div>

        {/* Center top decoration */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-sage-200 shadow-md">
          <Heart className="w-5 h-5 text-brown-400" />
        </div>

        <div className="flex items-center justify-center space-x-6 mb-6">
          <div className="w-20 h-px bg-sage-300"></div>
          <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
          <div className="w-20 h-px bg-sage-300"></div>
        </div>

        <p
          className="text-3xl text-brown-700 leading-relaxed mb-4"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Thank you for sharing our special day with us 💕
        </p>

        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          We can&apos;t wait to celebrate love, laughter, and happily ever after with all of you!
        </p>

        <div className="flex items-center justify-center space-x-3 mt-6">
          <div className="w-2 h-2 bg-sage-300 rounded-full animate-pulse"></div>
          <div
            className="w-4 h-4 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-3 h-3 bg-brown-300 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="w-4 h-4 bg-sage-300 rounded-full animate-pulse"
            style={{ animationDelay: '1.5s' }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function renderHeader() {
  return (
    <div className="text-center mb-20 relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-96">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-sage-400" />
            <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
            <Flower className="w-6 h-6 text-orange-300" />
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-sage-300"></div>
          <Heart className="w-8 h-8 text-brown-400" />
          <div className="w-20 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-sage-300"></div>
          <div className="flex items-center space-x-2">
            <Flower2 className="w-6 h-6 text-sage-400" />
            <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
            <Leaf className="w-5 h-5 text-orange-300" />
          </div>
        </div>
      </div>

      <h1
        className="text-6xl md:text-7xl text-brown-800 mb-8 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        Contact & FAQs
      </h1>
    </div>
  );
}

export default ContactFAQPage;
