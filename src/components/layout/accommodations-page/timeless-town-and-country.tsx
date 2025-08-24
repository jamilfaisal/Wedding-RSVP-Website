import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { timelessStays } from './hotels-data';

function TimelessTownAndCountry() {
  return (
    <section className="mb-20">
      <AccommodationsHeader title="Timeless Town & Country" />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          Chic addresses with character and great locations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {timelessStays.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default TimelessTownAndCountry;
