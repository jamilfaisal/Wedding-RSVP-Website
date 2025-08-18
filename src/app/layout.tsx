import type { Metadata } from 'next';
import { Dancing_Script, Playfair_Display, Montserrat, Cinzel } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import { coupleInfo } from '@/lib/config/wedding-config';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-script',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-harrington',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${coupleInfo.groomName} & ${coupleInfo.brideName} Wedding`,
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
      <body
        className={`min-h-screen bg-white flex flex-col ${dancingScript.variable} ${playfairDisplay.variable} ${montserrat.variable} ${cinzel.variable}`}
      >
        <Header coupleInfo={coupleInfo} />
        <div className="flex-grow">{children}</div>
        <Footer {...coupleInfo} />
      </body>
    </html>
  );
}
