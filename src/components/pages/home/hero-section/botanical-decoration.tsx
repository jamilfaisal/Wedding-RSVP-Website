import { Flower, Flower2, Leaf } from 'lucide-react';

function BotanicalDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Existing gentle floating elements */}
      <div
        className="absolute top-20 start-8 w-24 h-24 border border-sage-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <div
        className="absolute top-32 end-12 w-16 h-16 border border-orange-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '8s' }}
      ></div>
      <div
        className="absolute bottom-28 start-16 w-20 h-20 border border-brown-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '7s' }}
      ></div>

      {/* Additional floating flower icons */}
      <div className="absolute top-1/6 start-1/8 opacity-15">
        <Flower
          className="w-6 h-6 text-pastel-pink-400 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      </div>
      <div className="absolute top-1/4 end-1/8 opacity-12">
        <Flower2
          className="w-5 h-5 text-sage-400 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>
      <div className="absolute bottom-1/6 start-1/6 opacity-15">
        <Leaf
          className="w-4 h-4 text-orange-400 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>
      <div className="absolute bottom-1/4 end-1/6 opacity-12">
        <Flower
          className="w-5 h-5 text-pastel-purple-400 animate-pulse"
          style={{ animationDuration: '9s' }}
        />
      </div>
    </div>
  );
}

export default BotanicalDecoration;
