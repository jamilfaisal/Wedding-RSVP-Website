import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { getMainHotel } from './hotels-data';

function OurMainHotel(t: (key: string) => string) {
  const hotel = getMainHotel(t);

  return (
    <section className="mb-20">
      <AccommodationsHeader title={t('accommodations.ourMainHotel')} />
      <div className="max-w-4xl mx-auto">
        <HotelCard hotel={hotel} isMain={true} t={t} />
        <div className="mt-4 bg-gradient-to-r from-pastel-blue-50 to-pastel-purple-50 rounded-lg p-4 border border-pastel-blue-200">
          <p
            className="text-sm text-brown-600 italic leading-relaxed"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('accommodations.ourMainHotelDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMainHotel;
