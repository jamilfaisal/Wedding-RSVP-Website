import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { mainHotel } from './hotels-data';

function OurMainHotel() {
  return (
    <section className="mb-20">
      <AccommodationsHeader title="Our Main Hotel" />
      <div className="max-w-4xl mx-auto">
        <HotelCard hotel={mainHotel} isMain={true} />
        <div className="mt-4 bg-gradient-to-r from-pastel-blue-50 to-pastel-purple-50 rounded-lg p-4 border border-pastel-blue-200">
          <p
            className="text-sm text-brown-600 italic leading-relaxed"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Note: The venue sits on Monte Mario, about ~3 km from the Vatican and ~5–7 km from the
            historic center; the hotel also runs a shuttle to Via Veneto on a set timetable. Please
            check the schedule directly with the hotel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMainHotel;
