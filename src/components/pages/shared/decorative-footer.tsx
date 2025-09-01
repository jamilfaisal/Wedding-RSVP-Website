import { Flower, Flower2, Leaf } from 'lucide-react';

interface DecorativeFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function DecorativeFooter({ children, className = 'mt-16' }: DecorativeFooterProps) {
  return (
    <div className={`text-center ${className}`}>
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
        {children}
      </div>
    </div>
  );
}
