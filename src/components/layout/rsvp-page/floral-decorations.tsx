import { Flower, Leaf, Flower2 } from 'lucide-react';

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function FloralDecoration({ position }: FloralDecorationProps) {
  const positionClasses = {
    'top-left': 'absolute top-6 left-6',
    'top-right': 'absolute top-6 right-6',
    'bottom-left': 'absolute bottom-6 left-6',
    'bottom-right': 'absolute bottom-6 right-6',
  };

  const decorationContent = {
    'top-left': (
      <>
        <Flower className="w-5 h-5 text-sage-400 opacity-60" />
        <Leaf className="w-4 h-4 text-orange-300 opacity-60 transform rotate-45" />
      </>
    ),
    'top-right': (
      <>
        <Leaf className="w-4 h-4 text-sage-400 opacity-60 transform -rotate-45" />
        <Flower2 className="w-5 h-5 text-orange-300 opacity-60" />
      </>
    ),
    'bottom-left': (
      <>
        <Flower2 className="w-5 h-5 text-orange-300 opacity-60 transform rotate-180" />
        <Leaf className="w-4 h-4 text-sage-400 opacity-60 transform -rotate-45" />
      </>
    ),
    'bottom-right': (
      <>
        <Leaf className="w-4 h-4 text-orange-300 opacity-60 transform rotate-45" />
        <Flower className="w-5 h-5 text-sage-400 opacity-60 transform rotate-180" />
      </>
    ),
  };

  return (
    <div className={positionClasses[position]}>
      <div className="flex items-center space-x-1">{decorationContent[position]}</div>
    </div>
  );
}
