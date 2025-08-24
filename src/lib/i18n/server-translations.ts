import { headers } from 'next/headers';
import enCommon from '../../../public/locales/en/common.json';
import arCommon from '../../../public/locales/ar/common.json';

const translations = {
  en: {
    common: enCommon,
  },
  ar: {
    common: arCommon,
  },
} as const;

type Locale = 'en' | 'ar';

function getServerTranslation(locale: Locale = 'en') {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[locale]?.common || translations.en.common;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
}

export async function getServerTranslationWithLocale() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || headersList.get('referer') || '';
  const localeMatch = pathname.match(/\/([a-z]{2})\//);
  const locale = (localeMatch?.[1] === 'ar' ? 'ar' : 'en') as Locale;

  return { ...getServerTranslation(locale), locale };
}
