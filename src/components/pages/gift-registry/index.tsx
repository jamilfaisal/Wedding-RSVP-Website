'use client';

import { Gift, Heart, ExternalLink, Flower, Flower2, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function GiftRegistryPage() {
  const { t } = useTranslation();
  const etsyRegistryUrl = 'https://www.etsy.com/registry/MTYyOTU4MTY4fDI3NTQ1Mjg1Mw';
  const prezolaRegistryUrl = 'https://prezola.com/buy/view/259935';

  return (
    <div className="bg-gradient-to-b from-ivory-50 via-sage-50/20 to-pastel-pink-50/10 pt-45 mb-16">
      <div className="max-w-4xl mx-auto px-8">
        {renderHeader(t)}
        {renderMainContent(t, etsyRegistryUrl, prezolaRegistryUrl)}
      </div>
    </div>
  );
}

function renderHeader(t: (key: string) => string) {
  return (
    <div className="text-center mb-4 relative">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-96">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-pastel-pink-400" />
            <div className="w-3 h-3 bg-pastel-purple-200 rounded-full"></div>
            <Flower className="w-6 h-6 text-sage-400" />
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-pastel-pink-300"></div>
          <Gift className="w-8 h-8 text-brown-400" />
          <div className="w-20 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-pastel-pink-300"></div>
          <div className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-pastel-blue-400" />
            <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
            <Leaf className="w-5 h-5 text-pastel-purple-400" />
          </div>
        </div>
      </div>

      <h1
        className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown-800 mb-8 leading-tight px-4"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {t('giftRegistry.title')}
      </h1>
    </div>
  );
}

function renderMainContent(
  t: (key: string) => string,
  etsyRegistryUrl: string,
  prezolaRegistryUrl: string
) {
  return (
    <div className="mb-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-sage-100 relative overflow-hidden">
        {renderBackgroundShapes()}

        <div className="relative z-10 text-center">
          {renderGiftRegistryMessage(t)}
          {renderRegistryButtons(etsyRegistryUrl, t, prezolaRegistryUrl)}
        </div>
      </div>
    </div>
  );
}

function renderRegistryButtons(
  etsyRegistryUrl: string,
  t: (key: string) => string,
  prezolaRegistryUrl: string
) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
        <a
          href={etsyRegistryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Gift className="w-6 h-6" />
          <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('giftRegistry.viewRegistry')} (Etsy)
          </span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href={prezolaRegistryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-pink-600 hover:from-pastel-pink-600 hover:to-pastel-pink-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Gift className="w-6 h-6" />
          <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('giftRegistry.viewRegistry')} (Prezola)
          </span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Optional Note */}
      <p
        className="text-sm text-brown-500 italic max-w-md"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('giftRegistry.note')}
      </p>

      {/* Icon Section */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent"></div>
        <div className="relative">
          <Heart className="w-12 h-12 text-sage-600 opacity-80 fill-sage-200" />
        </div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-sage-300 to-transparent"></div>
      </div>
    </div>
  );
}

function renderGiftRegistryMessage(t: (key: string) => string) {
  return (
    <p
      className="text-lg md:text-xl text-brown-700 mb-10 leading-relaxed max-w-2xl mx-auto"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      {t('giftRegistry.message')}
    </p>
  );
}

function renderBackgroundShapes() {
  return (
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute top-10 left-10 w-20 h-20 bg-sage-300 rounded-full"></div>
      <div className="absolute top-20 right-16 w-12 h-12 bg-orange-300 rounded-full"></div>
      <div className="absolute bottom-16 left-20 w-16 h-16 bg-pastel-pink-300 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 bg-sage-400 rounded-full"></div>
    </div>
  );
}

export default GiftRegistryPage;
