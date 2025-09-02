import AccommodationsHeader from './accommodations-header';
import { Clock, MapPin, Star } from 'lucide-react';

function RecommendedHotels(t: (key: string) => string) {
  return (
    <section className="mb-20">
      <AccommodationsHeader title={t('accommodations.recommendedHotels')} />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('accommodations.recommendedHotelsDescription')}
        </p>
      </div>

      {/* Placeholder content for upcoming block rates */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-sage-50/90 to-pastel-pink-50/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-sage-100 relative">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <h3
              className="text-2xl text-brown-800"
              style={{ fontFamily: 'var(--font-harrington)' }}
            >
              {t('accommodations.recommendedHotelsComingSoon')}
            </h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Star className="w-5 h-5 text-pastel-pink-400 flex-shrink-0" />
              <span
                className="text-brown-700 text-center"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t('accommodations.recommendedHotelsBlockRates')}
              </span>
              <Star className="w-5 h-5 text-pastel-pink-400 flex-shrink-0" />
            </div>

            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0" />
              <span
                className="text-brown-700 text-center"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {t('accommodations.recommendedHotelsLocations')}
              </span>
              <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0" />
            </div>

            <p
              className="text-brown-600 text-lg mt-8 px-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('accommodations.recommendedHotelsDetailsText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendedHotels;
