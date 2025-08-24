import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { chicStays } from './hotels-data';

function ChicCityNests() {
  return (
    <section className="mb-20">
      <AccommodationsHeader title="Chic City Nests" />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          Well-located, comfortable, and design-forward.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {chicStays.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default ChicCityNests;
