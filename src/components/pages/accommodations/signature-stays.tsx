import AccommodationsHeader from './accommodations-header';
import HotelCard from './hotel-card';
import { getSignatureStays } from './hotels-data';

function SignatureStays(t: (key: string) => string) {
  const hotels = getSignatureStays(t);

  return (
    <section className="mb-20">
      <AccommodationsHeader title={t('accommodations.signatureStays')} />
      <div className="text-center mb-8">
        <p className="text-lg text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('accommodations.signatureStaysDescription')}
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

export default SignatureStays;
