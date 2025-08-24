'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enCommon from '../../../public/locales/en/common.json';
import arCommon from '../../../public/locales/ar/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  ar: {
    common: arCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
});

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

interface I18nProviderProps {
  children: React.ReactNode;
  locale: string;
}

export default function I18nProvider({ children, locale }: I18nProviderProps) {
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    i18n.changeLanguage(locale);
    setCurrentLocale(locale);
  }, [locale]);

  const setLocale = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    setCurrentLocale(newLocale);
  };

  return (
    <I18nContext.Provider value={{ locale: currentLocale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export { i18n };
