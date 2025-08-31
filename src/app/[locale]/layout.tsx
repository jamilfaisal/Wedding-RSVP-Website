import type { Metadata } from 'next';
import I18nProvider from '@/lib/i18n/i18n-provider';
import LocaleDocument from '@/components/locale-document';
import { groomFirstName, brideFirstName } from '@/lib/config/wedding-config';
import LayoutContent from '@/components/layout/layout-content';

export const metadata: Metadata = {
  title: `${groomFirstName} & ${brideFirstName} Wedding`,
  description: 'Join us in celebrating our wedding day ❤️',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  return (
    <LocaleDocument locale={locale}>
      <I18nProvider locale={locale}>
        <LayoutContent>{children}</LayoutContent>
      </I18nProvider>
    </LocaleDocument>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
