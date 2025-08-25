import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { getChicStays } from './hotels-data';

function ChicCityNests(t: (key: string) => string) {
  const hotels = getChicStays(t);

  return (
    <section className="mb-20">
      <AccommodationsHeader title={t('accommodations.chicCityNests')} />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('accommodations.chicCityNestsDescription')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} t={t} />
        ))}
      </div>
    </section>
  );
}

export default ChicCityNests;
