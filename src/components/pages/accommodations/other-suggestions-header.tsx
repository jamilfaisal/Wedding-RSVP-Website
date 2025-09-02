import { Flower, Flower2, Leaf } from 'lucide-react';

interface OtherSuggestionsHeaderProps {
  title: string;
}

function OtherSuggestionsHeader({ title }: OtherSuggestionsHeaderProps) {
  return (
    <div className="text-center mb-16 relative">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-3">
          <Leaf className="w-5 h-5 text-pastel-pink-400" />
          <div className="w-3 h-3 bg-pastel-purple-200 rounded-full"></div>
          <Flower className="w-6 h-6 text-sage-400" />
        </div>
        <div className="w-24 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-pastel-pink-300 mx-6"></div>
        <div className="w-24 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-pastel-pink-300 mx-6"></div>
        <div className="flex items-center gap-3">
          <Flower2 className="w-6 h-6 text-pastel-blue-400" />
          <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
          <Leaf className="w-5 h-5 text-pastel-purple-400" />
        </div>
      </div>

      <h2 className="text-4xl text-brown-800 mb-8" style={{ fontFamily: 'var(--font-harrington)' }}>
        {title}
      </h2>
    </div>
  );
}

export default OtherSuggestionsHeader;
