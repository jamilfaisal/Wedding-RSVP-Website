'use client';

import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  // { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pathLocale = pathname.split('/')[1] || 'en';
  const currentLocale = i18n?.language || pathLocale;
  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  const switchLanguage = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.replace(/^\/(en|ar)/, '')}`);
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(newLocale);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-sage-200 bg-white hover:bg-sage-50 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-sage-600" />
        <span className="text-sm font-medium text-sage-700">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-sage-200 z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-sage-50 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center space-x-3 ${
                  language.code === currentLanguage?.code
                    ? 'bg-sage-100 text-sage-900 font-medium'
                    : 'text-sage-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
