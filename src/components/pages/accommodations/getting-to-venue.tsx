import { Car, Flower, Train } from 'lucide-react';
import AccommodationsHeader from './accommodations-header';

function GettingToVenue(t: (key: string) => string) {
  return (
    <section className="mb-16">
      <AccommodationsHeader title={t('accommodations.gettingToVenue')} />
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white/95 rounded-lg p-6 shadow-lg border border-sage-100 relative">
          <div className="absolute top-3 end-3">
            <Flower className="w-4 h-4 text-pastel-pink-400 opacity-40" />
          </div>
          <div className="space-y-4">
            {renderCarInfo(t)}
            {renderTrainInfo(t)}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderTrainInfo(t: (key: string) => string) {
  return (
    <div className="flex items-start gap-3">
      <Train className="w-5 h-5 text-orange-600 mt-1" />
      <div>
        <h4
          className="text-lg text-brown-800 mb-2"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          {t('accommodations.metro')}
        </h4>
        <p className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('accommodations.metroDescription')}
        </p>
      </div>
    </div>
  );
}

function renderCarInfo(t: (key: string) => string) {
  return (
    <div className="flex items-start gap-3">
      <Car className="w-5 h-5 text-orange-600 mt-1" />
      <div>
        <h4
          className="text-lg text-brown-800 mb-2"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          {t('accommodations.taxi')}
        </h4>
        <p className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('accommodations.taxiDescription')}
        </p>
      </div>
    </div>
  );
}

export default GettingToVenue;
