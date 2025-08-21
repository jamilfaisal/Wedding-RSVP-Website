import { Flower } from 'lucide-react';
import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { signatureStays } from './hotels-data';

function SignatureStays() {
  return (
    <section className="mb-20">
      <AccommodationsHeader
        title="Signature Stays"
        icon={<Flower className="w-6 h-6 text-brown-600" />}
      />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          Refined icons with postcard views and beautiful service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {signatureStays.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default SignatureStays;
