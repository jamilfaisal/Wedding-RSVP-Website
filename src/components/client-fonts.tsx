'use client';

import { Dancing_Script, Playfair_Display, Montserrat, Cinzel } from 'next/font/google';

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

export default function ClientFonts({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${dancingScript.variable} ${playfairDisplay.variable} ${montserrat.variable} ${cinzel.variable}`}
    >
      {children}
    </div>
  );
}
