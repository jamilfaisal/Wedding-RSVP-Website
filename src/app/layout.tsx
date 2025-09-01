import type { Metadata } from 'next';
import './globals.css';
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
    <html>
      <head>
        <meta name="faris-and-zina-wedding-website" content="FarisZina" />
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        <ClientFonts>{children}</ClientFonts>
      </body>
    </html>
  );
}
