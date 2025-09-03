'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useI18n } from '../../lib/i18n/i18n-provider';
import { useSearchParams } from 'next/navigation';
import { Lock } from 'lucide-react';
import { ContentCard } from '../pages/shared/content-card';
import { FloralPicture } from '../pages/shared/floral-picture';

const getTextDirection = (locale: string) => (locale === 'ar' ? 'rtl' : 'ltr');

export default function LoginPage() {
  const { t } = useTranslation();
  const { locale, setLocale } = useI18n();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const textDirection = getTextDirection(locale);
  const returnTo = searchParams?.get('returnTo');

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
        const redirectUrl = returnTo || '/';
        window.location.href = redirectUrl;
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
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/30 to-orange-50/20 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full relative">
        {renderLanguageSwitcher(toggleLanguage, locale)}

        <ContentCard padding="p-8">
          {renderHeader(textDirection, t)}
          {renderForm(handleSubmit, textDirection, t, password, setPassword, error, loading)}
          {renderHelp(textDirection, t)}
        </ContentCard>
      </div>
    </div>
  );
}
function renderHelp(textDirection: string, t: (key: string) => string) {
  return (
    <div
      dir={textDirection}
      className="mt-8 text-center text-sm text-brown-500 font-light"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      {t('login.helpText')}
    </div>
  );
}

function renderForm(
  handleSubmit: (e: React.FormEvent) => Promise<void>,
  textDirection: string,
  t: (key: string) => string,
  password: string,
  setPassword: (value: string) => void,
  error: string,
  loading: boolean
) {
  return (
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
          className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-sage-100 placeholder-brown-400 text-brown-900 bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-300 transition-all duration-200"
          placeholder={t('login.passwordPlaceholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ fontFamily: 'var(--font-serif)' }}
        />
      </div>

      {error && (
        <div
          dir={textDirection}
          className="text-brown-700 bg-orange-50 border border-orange-200 p-4 rounded-lg text-center"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {error}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer group relative w-full flex justify-center py-3 px-4 border-2 border-sage-200 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {loading ? t('login.verifying') : t('login.enterWebsite')}
        </button>
      </div>
    </form>
  );
}

function renderHeader(textDirection: string, t: (key: string) => string) {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto h-16 w-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center mb-6 border border-sage-200">
        <Lock className="w-8 h-8 text-sage-700" />
      </div>

      <h1
        dir={textDirection}
        className="text-4xl text-brown-800 mb-4 leading-tight tracking-wide"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {t('login.welcome')}
      </h1>

      <p
        dir={textDirection}
        className="text-xl text-brown-600 font-light mb-6"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('login.subtitle')}
      </p>

      <FloralPicture className="mb-6" width={128} height={96} opacity="opacity-90" />
    </div>
  );
}

function renderLanguageSwitcher(toggleLanguage: () => void, locale: string) {
  return (
    <div className="absolute -top-16 right-0 z-10">
      <button
        onClick={toggleLanguage}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-sage-100 hover:border-sage-200 transition-all duration-200 text-sm font-medium shadow-lg"
        aria-label="Switch language"
      >
        <span className="text-lg">{locale === 'en' ? '🇸🇦' : '🇬🇧'}</span>
        <span className="text-brown-700" style={{ fontFamily: 'var(--font-serif)' }}>
          {locale === 'en' ? 'العربية' : 'English'}
        </span>
      </button>
    </div>
  );
}
