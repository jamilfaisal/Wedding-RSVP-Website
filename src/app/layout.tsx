import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Faris & Zina Wedding',
  description: 'Join us in celebrating our wedding day ❤️',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

const headerProps = {
  brideName: 'Faris',
  groomName: 'Zina',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header {...headerProps} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
