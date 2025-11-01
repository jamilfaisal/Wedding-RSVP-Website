import { Flower2, MapPin, Star, ExternalLink, Car, Train, Bus, Crown, Mail } from 'lucide-react';
import ImageWithFallback from '../../ui/image-with-fallback';
import { Hotel, HotelLink, TransportationMode } from './hotels-data';

function HotelCard({
  hotel,
  isMain = false,
  t,
}: {
  hotel: Hotel;
  isMain?: boolean;
  t: (key: string) => string;
}) {
  return (
    <div
      className={`bg-gradient-to-br from-ivory-50 to-white rounded-xl overflow-hidden shadow-md border border-sage-100 ring-1 ring-sage-100/60 hover:shadow-xl hover:ring-orange-200/70 transition-all duration-300 relative ${
        isMain ? 'border-orange-200' : ''
      }`}
    >
      {hotel.image && renderHotelImage(hotel)}

      <div className="p-8">
        {/* Corner floral accents */}
        <div className="absolute bottom-3 start-3 pointer-events-none select-none">
          <Flower2 className="w-4 h-4 text-pastel-purple-400/60" aria-hidden="true" />
        </div>

        {isMain && renderMainHotel(t)}
        <div className="space-y-5">
          {renderHotelNameLocationAndBlockRate(hotel, t)}
          {renderHotelDistanceAndTransport(hotel, t)}
          {renderHotelNotes(hotel)}
          {hotel.booking && renderHotelBooking(hotel, t)}
          {hotel.links && (
            <div className="pt-3 border-t border-sage-100">{renderHotelLinks(hotel)}</div>
          )}
        </div>
      </div>
    </div>
  );
}

const TransportIcon = ({ type }: TransportationMode) => {
  const icons = {
    car: <Car className="w-4 h-4 text-orange-600" />,
    metro: <Train className="w-4 h-4 text-orange-600" />,
    bus: <Bus className="w-4 h-4 text-orange-600" />,
    walk: <MapPin className="w-4 h-4 text-orange-600" />,
  };
  return icons[type];
};

function renderHotelLinks(hotel: Hotel) {
  return (
    <div className="flex flex-wrap gap-2">
      {hotel.links.map((link: HotelLink, index: number) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-sage-800 hover:text-brown-800 border border-sage-300 hover:border-orange-300 rounded-full px-3 py-1 transition-all duration-200 bg-white/60 hover:bg-orange-50"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{link.text}</span>
        </a>
      ))}
    </div>
  );
}

function renderHotelBooking(hotel: Hotel, t: (key: string) => string) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-pastel-pink-50 rounded-lg p-3 mb-4 border border-orange-200">
      <p
        className="text-sm text-brown-700 font-medium flex items-start gap-2 leading-relaxed"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Mail className="w-4 h-4 text-orange-600 mt-0.5" aria-hidden="true" />
        <span>
          <span className="me-1">{t('hotels.common.booking')}:</span>
          {renderBookingTextWithEmailLink(hotel.booking)}
        </span>
      </p>
    </div>
  );
}

function renderHotelNotes(hotel: Hotel) {
  return (
    <div className="bg-gradient-to-r from-sage-50 to-pastel-blue-50 rounded-lg p-3 mb-4 border border-sage-100">
      <p
        className="text-sm text-brown-600 leading-relaxed"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Star className="w-3 h-3 inline me-1 text-orange-400" />
        {hotel.notes}
      </p>
    </div>
  );
}

function renderHotelDistanceAndTransport(hotel: Hotel, t: (key: string) => string) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-50 border border-sage-200 px-2 py-1 text-sage-800">
          <MapPin className="w-4 h-4 text-sage-700" aria-hidden="true" />
          <span className="text-brown-700" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('hotels.common.distance')}: {hotel.distance}
          </span>
        </span>
      </div>

      <div className="flex items-start gap-3 text-sm">
        <div className="flex">
          {hotel.transport.map((mode: TransportationMode, index: number) => (
            <span
              key={index}
              className="inline-flex items-center justify-center rounded-full bg-orange-50 border border-orange-200 w-6 h-6"
            >
              <TransportIcon type={mode.type} />
            </span>
          ))}
        </div>
        <span
          className="text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('hotels.common.transport')}: {hotel.transportNotes}
        </span>
      </div>
    </div>
  );
}

function renderHotelNameLocationAndBlockRate(hotel: Hotel, t: (key: string) => string) {
  return (
    <div>
      <h3
        className="text-2xl text-brown-800 mb-2 tracking-wide"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {hotel.name}
      </h3>
      <div className="mb-3">
        <span
          className="inline-flex items-center gap-1.5 text-sage-800 text-xs sm:text-sm bg-sage-50 border border-sage-200 rounded-full px-2.5 py-1"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <MapPin className="w-3.5 h-3.5 text-sage-700" aria-hidden="true" />
          {hotel.location}
        </span>
      </div>
      {hotel.blockRate && (
        <div className="bg-gradient-to-r from-orange-50 to-sage-50 rounded-lg p-3 border border-orange-200">
          {renderBlockRateText(hotel.blockRate, t)}
        </div>
      )}
    </div>
  );
}

function renderMainHotel(t: (key: string) => string) {
  return (
    <div className="absolute top-3 end-3 z-20">
      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-200 to-orange-300 text-brown-800 px-3 py-1.5 rounded-full shadow-sm border border-orange-300">
        <Crown className="w-4 h-4 text-orange-800" aria-hidden="true" />
        <span
          className="text-xs sm:text-sm font-medium"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          {t('hotels.common.ourMainHotel')}
        </span>
      </div>
    </div>
  );
}

function renderHotelImage(hotel: Hotel) {
  return (
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <ImageWithFallback
        src={hotel.image}
        alt={hotel.name}
        width={400}
        height={192}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
    </div>
  );
}

function renderBookingTextWithEmailLink(booking?: string) {
  if (!booking) return null;
  const splitRegex = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/;
  const emailOnlyRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const parts = booking.split(splitRegex);
  return (
    <>
      {parts.map((part, idx) =>
        emailOnlyRegex.test(part) ? (
          <a
            key={`email-${idx}`}
            href={`mailto:${part}`}
            className="text-orange-700 underline hover:text-orange-800"
          >
            {part}
          </a>
        ) : (
          <span key={`text-${idx}`}>{part}</span>
        )
      )}
    </>
  );
}

function renderBlockRateText(blockRate: string, t: (key: string) => string) {
  const items = blockRate
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  const label = (
    <span className="text-brown-700 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
      {t('hotels.common.blockRate')}:
    </span>
  );

  if (items.length <= 1) {
    return (
      <p
        className="text-brown-700 font-medium leading-relaxed"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {label} {blockRate}
      </p>
    );
  }

  return (
    <div className="text-brown-700" style={{ fontFamily: 'var(--font-serif)' }}>
      <p className="font-medium mb-1">{label}</p>
      <ul className="list-disc list-inside space-y-0.5">
        {items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelCard;
