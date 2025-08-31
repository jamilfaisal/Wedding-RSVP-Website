'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useI18n } from '../../lib/i18n/i18n-provider';

const getTextDirection = (locale: string) => (locale === 'ar' ? 'rtl' : 'ltr');

export default function LoginPage() {
  const { t } = useTranslation();
  const { locale, setLocale } = useI18n();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const textDirection = getTextDirection(locale);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        setError(t('login.invalidPassword'));
      }
    } catch {
      setError(t('login.somethingWrong'));
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-sm font-medium"
            aria-label="Switch language"
          >
            <span className="text-lg">{locale === 'en' ? '🇸🇦' : '🇺🇸'}</span>
            <span>{locale === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 text-rose-500 mb-4">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 dir={textDirection} className="text-3xl font-bold text-gray-900 mb-2">
            {t('login.welcome')}
          </h2>
          <p dir={textDirection} className="text-gray-600">
            {t('login.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              dir={textDirection}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
              placeholder={t('login.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div
              dir={textDirection}
              className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md"
            >
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t('login.verifying') : t('login.enterWebsite')}
            </button>
          </div>
        </form>

        <div dir={textDirection} className="mt-6 text-center text-xs text-gray-500">
          {t('login.helpText')}
        </div>
      </div>
    </div>
  );
}
