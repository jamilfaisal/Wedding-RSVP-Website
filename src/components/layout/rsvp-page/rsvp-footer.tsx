import { Flower, Flower2, Leaf } from 'lucide-react';

function RSVPFooter() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-orange-50/90 to-sage-50/90 backdrop-blur-sm rounded-lg p-8 shadow-md border border-orange-100 relative">
        <div className="absolute top-3 left-3">
          <Flower className="w-4 h-4 text-sage-400 opacity-40" />
        </div>
        <div className="absolute top-3 right-3">
          <Flower2 className="w-4 h-4 text-orange-300 opacity-40" />
        </div>
        <div className="absolute bottom-3 left-3">
          <Leaf className="w-4 h-4 text-orange-300 opacity-40" />
        </div>
        <div className="absolute bottom-3 right-3">
          <Leaf className="w-4 h-4 text-sage-400 opacity-40" />
        </div>

        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-12 h-px bg-sage-300"></div>
          <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
          <div className="w-12 h-px bg-sage-300"></div>
        </div>

        <p
          className="text-2xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          We can&apos;t wait to celebrate with you ❄️✨
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-sage-300 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-2 h-2 bg-brown-300 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default RSVPFooter;
