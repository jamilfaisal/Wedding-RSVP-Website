import { Flower, Flower2, Leaf } from 'lucide-react';

function BotanicalDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Existing gentle floating elements */}
      <div
        className="absolute top-20 left-8 w-24 h-24 border border-sage-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <div
        className="absolute top-32 right-12 w-16 h-16 border border-orange-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '8s' }}
      ></div>
      <div
        className="absolute bottom-28 left-16 w-20 h-20 border border-brown-200/40 rounded-full animate-pulse"
        style={{ animationDuration: '7s' }}
      ></div>

      {/* Additional floating flower icons */}
      <div className="absolute top-1/6 left-1/8 opacity-15">
        <Flower
          className="w-6 h-6 text-pastel-pink-400 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      </div>
      <div className="absolute top-1/4 right-1/8 opacity-12">
        <Flower2
          className="w-5 h-5 text-sage-400 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>
      <div className="absolute bottom-1/6 left-1/6 opacity-15">
        <Leaf
          className="w-4 h-4 text-orange-400 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>
      <div className="absolute bottom-1/4 right-1/6 opacity-12">
        <Flower
          className="w-5 h-5 text-pastel-purple-400 animate-pulse"
          style={{ animationDuration: '9s' }}
        />
      </div>
      <div className="absolute top-2/5 left-1/12 opacity-10">
        <Flower2
          className="w-4 h-4 text-pastel-blue-400 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      </div>
      <div className="absolute top-3/5 right-1/12 opacity-12">
        <Leaf
          className="w-6 h-6 text-pastel-green-400 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>
      <div className="absolute bottom-2/5 left-1/10 opacity-8">
        <Flower
          className="w-4 h-4 text-brown-400 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>
      <div className="absolute bottom-3/5 right-1/10 opacity-10">
        <Flower2
          className="w-5 h-5 text-pastel-pink-400 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>

      {/* More vibrant colored flower icons */}
      <div className="absolute top-1/8 left-1/4 opacity-18">
        <Flower
          className="w-5 h-5 text-pastel-purple-500 animate-pulse"
          style={{ animationDuration: '9s' }}
        />
      </div>
      <div className="absolute top-1/3 right-1/5 opacity-16">
        <Flower2
          className="w-6 h-6 text-pastel-blue-500 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      </div>
      <div className="absolute bottom-1/8 right-1/4 opacity-20">
        <Leaf
          className="w-4 h-4 text-pastel-green-500 animate-pulse"
          style={{ animationDuration: '7s' }}
        />
      </div>
      <div className="absolute bottom-1/3 left-1/5 opacity-18">
        <Flower
          className="w-7 h-7 text-pastel-pink-500 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>
      <div className="absolute top-2/3 left-1/7 opacity-14">
        <Flower2
          className="w-5 h-5 text-orange-500 animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>
      <div className="absolute bottom-2/3 right-1/7 opacity-16">
        <Leaf className="w-6 h-6 text-sage-500 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute top-4/5 left-2/5 opacity-12">
        <Flower
          className="w-4 h-4 text-brown-500 animate-pulse"
          style={{ animationDuration: '11s' }}
        />
      </div>
      <div className="absolute bottom-4/5 right-2/5 opacity-15">
        <Flower2
          className="w-5 h-5 text-pastel-purple-500 animate-pulse"
          style={{ animationDuration: '9s' }}
        />
      </div>

      {/* Colorful floating circular elements */}
      <div className="absolute top-1/7 right-2/7 opacity-20">
        <div
          className="w-4 h-4 bg-gradient-to-br from-pastel-pink-400 to-pastel-pink-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '8s' }}
        ></div>
      </div>
      <div className="absolute top-3/7 left-2/7 opacity-18">
        <div
          className="w-5 h-5 bg-gradient-to-br from-pastel-blue-400 to-pastel-blue-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '10s' }}
        ></div>
      </div>
      <div className="absolute bottom-1/7 left-3/7 opacity-22">
        <div
          className="w-3 h-3 bg-gradient-to-br from-pastel-green-400 to-pastel-green-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '7s' }}
        ></div>
      </div>
      <div className="absolute bottom-3/7 right-3/7 opacity-16">
        <div
          className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '9s' }}
        ></div>
      </div>
      <div className="absolute top-5/7 left-4/7 opacity-14">
        <div
          className="w-4 h-4 bg-gradient-to-br from-pastel-purple-400 to-pastel-purple-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '6s' }}
        ></div>
      </div>
      <div className="absolute bottom-5/7 right-4/7 opacity-18">
        <div
          className="w-5 h-5 bg-gradient-to-br from-sage-400 to-sage-300 rounded-full animate-pulse blur-sm"
          style={{ animationDuration: '11s' }}
        ></div>
      </div>

      {/* Enhanced subtle floral patterns with fine-line illustrations */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <div className="relative">
          <div
            className="w-8 h-8 bg-sage-100/30 rounded-full animate-pulse"
            style={{ animationDuration: '5s' }}
          ></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border border-pastel-pink-300/40 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/3 opacity-20">
        <div className="relative">
          <div
            className="w-6 h-6 bg-orange-100/30 rounded-full animate-pulse"
            style={{ animationDuration: '9s' }}
          ></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-radial from-pastel-purple-200/60 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Additional fine-line floral illustrations */}
      <div className="absolute top-1/3 left-1/4 opacity-15">
        <div className="relative w-12 h-12">
          <div className="absolute top-2 left-2 w-8 h-8 border border-pastel-blue-200/50 rounded-full"></div>
          <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-radial from-sage-200/40 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-radial from-pastel-green-200/40 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/3 opacity-15">
        <div className="relative w-10 h-10">
          <div className="absolute inset-1 w-8 h-8 border border-orange-200/40 rounded-full"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-radial from-pastel-pink-200/50 to-transparent rounded-full blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-radial from-brown-200/40 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* More scattered delicate petals */}
      <div
        className="absolute top-1/5 left-1/5 w-1 h-1 bg-pastel-purple-300/30 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '7s' }}
      ></div>
      <div
        className="absolute top-2/5 right-1/5 w-1.5 h-1.5 bg-sage-300/30 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '8s' }}
      ></div>
      <div
        className="absolute bottom-1/5 left-3/5 w-1 h-1 bg-pastel-pink-300/30 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <div
        className="absolute bottom-2/5 right-2/5 w-2 h-2 bg-orange-300/20 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '9s' }}
      ></div>
      <div
        className="absolute top-3/5 left-2/5 w-1 h-1 bg-pastel-blue-300/30 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '5s' }}
      ></div>

      {/* Additional tiny scattered petals */}
      <div
        className="absolute top-1/8 left-3/8 w-0.5 h-0.5 bg-pastel-green-300/40 rounded-full opacity-30 animate-pulse"
        style={{ animationDuration: '11s' }}
      ></div>
      <div
        className="absolute top-3/8 right-3/8 w-1 h-1 bg-brown-300/25 rounded-full opacity-35 animate-pulse"
        style={{ animationDuration: '8s' }}
      ></div>
      <div
        className="absolute bottom-1/8 left-5/8 w-0.5 h-0.5 bg-pastel-purple-300/35 rounded-full opacity-30 animate-pulse"
        style={{ animationDuration: '7s' }}
      ></div>
      <div
        className="absolute bottom-3/8 right-5/8 w-1 h-1 bg-sage-300/30 rounded-full opacity-40 animate-pulse"
        style={{ animationDuration: '10s' }}
      ></div>
      <div
        className="absolute top-5/8 left-1/8 w-0.5 h-0.5 bg-orange-300/35 rounded-full opacity-30 animate-pulse"
        style={{ animationDuration: '9s' }}
      ></div>
      <div
        className="absolute top-7/8 right-1/8 w-1 h-1 bg-pastel-pink-300/25 rounded-full opacity-35 animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <div
        className="absolute bottom-5/8 left-7/8 w-0.5 h-0.5 bg-pastel-blue-300/40 rounded-full opacity-30 animate-pulse"
        style={{ animationDuration: '8s' }}
      ></div>
      <div
        className="absolute bottom-7/8 right-7/8 w-1 h-1 bg-pastel-green-300/30 rounded-full opacity-35 animate-pulse"
        style={{ animationDuration: '11s' }}
      ></div>
    </div>
  );
}

export default BotanicalDecoration;
