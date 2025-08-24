import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import ClientFonts from '@/components/client-fonts';
import { groomFirstName, brideFirstName } from '@/lib/config/wedding-config';

export const metadata: Metadata = {
  title: `${groomFirstName} & ${brideFirstName} Wedding`,
  description: 'Join us in celebrating our wedding day ❤️',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <ClientFonts>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ClientFonts>
      </body>
    </html>
  );
}
