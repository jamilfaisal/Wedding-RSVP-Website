'use client';

import { useEffect } from 'react';

interface LocaleDocumentProps {
  locale: string;
  children: React.ReactNode;
}

export default function LocaleDocument({ locale, children }: LocaleDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return <>{children}</>;
}
