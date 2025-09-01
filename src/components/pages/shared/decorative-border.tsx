import { Heart, Flower, Flower2 } from 'lucide-react';

interface DecorativeBorderProps {
  className?: string;
}

export function DecorativeBorder({ className = 'mb-8' }: DecorativeBorderProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Flower className="w-6 h-6 text-sage-400 mx-2" />
      <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
      <Heart className="w-8 h-8 text-rose-300 mx-3" />
      <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
      <Flower2 className="w-6 h-6 text-sage-400 mx-2" />
    </div>
  );
}
