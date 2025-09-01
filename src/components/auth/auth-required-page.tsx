'use client';

import { useTranslation } from 'react-i18next';
import { useI18n } from '../../lib/i18n/i18n-provider';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';

const getTextDirection = (locale: string) => (locale === 'ar' ? 'rtl' : 'ltr');

export default function AuthRequiredPage() {
  const { t } = useTranslation();
  const { locale, setLocale } = useI18n();
  const searchParams = useSearchParams();
  const router = useRouter();

  const textDirection = getTextDirection(locale);
  const returnTo = searchParams?.get('returnTo');

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  const handleLoginClick = () => {
    const loginUrl = `/${locale}/login${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`;
    router.push(loginUrl);
  };

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
          {/* Language Toggle */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleLanguage}
              className="text-sm text-brown-600 hover:text-brown-800 underline"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Main Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-sage-200 p-8 text-center">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-sage-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-brown-800 mb-4">{t('auth.loginRequired')}</h1>

            {/* Description */}
            <p className="text-brown-600 mb-6 leading-relaxed">
              {t('auth.loginRequiredDescription')}
            </p>

            {/* RSVP Token Information */}
            {returnTo?.includes('/rsvp/edit') && (
              <div className="bg-sage-50 border border-sage-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-brown-700">{t('auth.rsvpEditNotice')}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleLoginClick}
                className="cursor-pointer w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {t('auth.proceedToLogin')}
              </Button>

              <Button
                onClick={handleBackToHome}
                className="cursor-pointer w-full bg-white border border-sage-300 hover:bg-sage-50 text-sage-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {t('common.backToHome')}
              </Button>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-brown-500 mt-6">{t('auth.secureAccess')}</p>
        </div>
      </div>
    </div>
  );
}
