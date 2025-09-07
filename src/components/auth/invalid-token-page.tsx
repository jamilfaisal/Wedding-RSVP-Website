'use client';

import { useTranslation } from 'react-i18next';
import { useI18n } from '../../lib/i18n/i18n-provider';
import { useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';
import { renderLanguageSwitcher } from '../layout/language-switcher';

const getTextDirection = (locale: string) => (locale === 'ar' ? 'rtl' : 'ltr');

export default function InvalidTokenPage() {
  const { t } = useTranslation();
  const { locale, setLocale } = useI18n();
  const router = useRouter();

  const textDirection = getTextDirection(locale);

  const handleBackToHome = () => {
    router.push(`/${locale}`);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-sage-50 via-ivory-50 to-warm-brown-50"
      dir={textDirection}
    >
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-md w-full">
          <div className="flex justify-end mb-4">{renderLanguageSwitcher(setLocale, locale)}</div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-sage-200 p-8 text-center">
            {renderErrorIcon()}
            <h1 className="text-2xl font-bold text-brown-800 mb-4">{t('auth.invalidToken')}</h1>
            <p className="text-brown-600 mb-6 leading-relaxed">
              {t('auth.invalidTokenDescription')}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-amber-800 mb-2">{t('auth.troubleshooting')}</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• {t('auth.checkLink')}</li>
                <li>• {t('auth.linkExpired')}</li>
                <li>• {t('auth.requestNew')}</li>
              </ul>
            </div>
            <div className="space-y-3">
              <Button
                onClick={handleBackToHome}
                className="cursor-pointer w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {t('common.backToHome')}
              </Button>
            </div>
          </div>
          <p className="text-center text-sm text-brown-500 mt-6">{t('auth.needHelp')}</p>
        </div>
      </div>
    </div>
  );
}

function renderErrorIcon() {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
    </div>
  );
}
