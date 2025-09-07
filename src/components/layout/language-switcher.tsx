export function renderLanguageSwitcher(setLocale: (locale: string) => void, locale: string) {
  return (
    <button
      onClick={() => toggleLanguage(setLocale, locale)}
      className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-2 border-sage-100 hover:border-sage-200 transition-all duration-200 text-sm font-medium shadow-lg"
      aria-label="Switch language"
    >
      <span className="text-lg">{locale === 'en' ? '🇸🇦' : '🇬🇧'}</span>
      <span className="text-brown-700" style={{ fontFamily: 'var(--font-serif)' }}>
        {locale === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}

const toggleLanguage = (setLocale: (locale: string) => void, locale: string) => {
  setLocale(locale === 'en' ? 'ar' : 'en');
};
