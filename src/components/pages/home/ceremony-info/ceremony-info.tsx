import { MapPin, Clock, Globe } from 'lucide-react';
import ceremonyPhoto from '@public/images/ceremony-photo.png';
import floralIllustration from '@public/images/floral-illustration.png';
import ImageWithFallback from '../../../ui/image-with-fallback';
import WeatherWidget from './weather-widget';
import LiveTimeDisplay from './live-time-display';
import { useI18n } from '@/lib/i18n/i18n-provider';
import { useTranslation } from 'react-i18next';

function CeremonyInfo() {
  const { locale } = useI18n();
  const { t } = useTranslation();
  const weatherWidgetEnabled = true;
  return (
    <>
      <div id="ceremony" className="relative -top-20"></div>
      <section id="ceremony" className="pt-10 bg-gradient-to-b from-white to-sage-50/20">
        <div className="max-w-6xl mx-auto px-8">
          {renderSectionHeader(t)}

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {renderVenueImage()}

            <div className="space-y-8 lg:ps-4">
              {renderVenueLocation(t)}
              {renderWelcomeReception(t)}
              {renderLocalTime(locale, t)}
              {weatherWidgetEnabled && <WeatherWidget locale={locale} t={t} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function renderLocalTime(locale: string, t: (key: string) => string) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-brown-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-brown-100 to-brown-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-200">
          <Globe className="w-6 h-6 text-brown-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">{t('ceremony.timeComparison')}</h4>
          <LiveTimeDisplay locale={locale} t={t} />
        </div>
      </div>
    </div>
  );
}

function renderWelcomeReception(t: (key: string) => string) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-purple-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-200">
          <Clock className="w-6 h-6 text-purple-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">
            {t('ceremony.welcomeReception')}
          </h4>
          <div className="text-brown-600 leading-relaxed space-y-2">
            <p className="font-medium">{t('ceremony.joinUsDate')}</p>
            <p className="text-brown-500 italic">{t('ceremony.detailsComingSoon')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderVenueLocation(t: (key: string) => string) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-sage-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-sage-200">
          <MapPin className="w-6 h-6 text-sage-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">{t('ceremony.location')}</h4>
          <div className="text-brown-600 leading-relaxed space-y-1">
            <p className="font-medium">{t('hotels.mainHotel.name')}</p>
            <p className="text-brown-500 italic">
              {t('weddingInfo.weddingCity')}, {t('weddingInfo.weddingCountry')}
            </p>
            <p className="text-brown-500 italic">{t('ceremony.fullAddressNote')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderVenueImage() {
  return (
    <div className="relative lg:sticky lg:top-36">
      <div className="rounded-lg overflow-hidden shadow-lg border-4 border-sage-100">
        <ImageWithFallback
          src={ceremonyPhoto}
          alt="Wedding ceremony setup with beautiful floral arrangements and elegant decor"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

function renderSectionHeader(t: (key: string) => string) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center mb-8">
        <ImageWithFallback
          src={floralIllustration}
          alt="Floral Decoration"
          className="w-80 h-auto opacity-90"
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-4">{t('ceremony.title')}</h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed font-light">
        {t('ceremony.subtitle')}
      </p>
    </div>
  );
}

export default CeremonyInfo;
