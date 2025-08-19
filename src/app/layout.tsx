import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import ClientFonts from '@/components/client-fonts';
import { weddingInfo } from '@/lib/config/wedding-config';

export const metadata: Metadata = {
  title: `${weddingInfo.groomFirstName} & ${weddingInfo.brideFirstName} Wedding`,
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
          <Header weddingInfo={weddingInfo} />
          <div className="flex-grow">{children}</div>
          <Footer {...weddingInfo} />
        </ClientFonts>
      </body>
    </html>
  );
}
