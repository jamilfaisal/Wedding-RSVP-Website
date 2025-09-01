import { FloralDecoration } from '../rsvp/floral-decorations';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export function ContentCard({ children, className = '', padding = 'p-12' }: ContentCardProps) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-sm rounded-lg ${padding} shadow-xl border border-sage-200 relative z-10 ${className}`}
    >
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />
      {children}
    </div>
  );
}
