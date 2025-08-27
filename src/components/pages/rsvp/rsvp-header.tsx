'use client';

import { Leaf, Flower, Heart, Flower2 } from 'lucide-react';
import floralIllustration from '/public/images/floral-illustration.png';
import ImageWithFallback from '../../ui/image-with-fallback';
import { useTranslation } from 'react-i18next';
import { formatRSVPDeadline } from '@/components/layout/utils';

function RSVPHeader() {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-center mb-7 relative">
      {renderTopBorder()}

      <h1
        className="text-5xl md:text-6xl text-brown-800 mb-6 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {t('rsvp.title')}
      </h1>

      <p
        className="text-xl text-brown-600 font-light mt-8"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('rsvp.subtitle')}
      </p>
      <p
        className="text-xl text-brown-600 font-light mt-4"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('rsvp.deadlineMessage')} {formatRSVPDeadline(i18n.language)}
      </p>

      {renderFloralPicture()}
    </div>
  );
}

function renderFloralPicture() {
  return (
    <div className="flex items-center justify-center mt-4">
      <ImageWithFallback
        src={floralIllustration}
        alt="Floral Decoration"
        className="w-48 h-auto opacity-90"
      />
    </div>
  );
}

function renderTopBorder() {
  return (
    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-80">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-sage-400 transform -rotate-45" />
          <div className="w-2 h-2 bg-ivory-300 rounded-full"></div>
          <Flower className="w-5 h-5 text-orange-300" />
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-sage-300"></div>
        <Heart className="w-6 h-6 text-brown-400" />
        <div className="w-16 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-sage-300"></div>
        <div className="flex items-center gap-2">
          <Flower2 className="w-5 h-5 text-sage-400" />
          <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
          <Leaf className="w-4 h-4 text-orange-300 transform rotate-45" />
        </div>
      </div>
    </div>
  );
}

export default RSVPHeader;
