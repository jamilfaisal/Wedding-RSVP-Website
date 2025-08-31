'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const isLoginPage = pathname?.includes('/login');

  return (
    <>
      {!isLoginPage && <Header />}
      <div className="flex-grow">{children}</div>
      {!isLoginPage && <Footer />}
    </>
  );
}
