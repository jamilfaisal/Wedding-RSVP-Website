interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/30 to-orange-50/20 pt-40 py-20 ${className}`}
    >
      <div className="max-w-3xl mx-auto px-8">{children}</div>
    </div>
  );
}
