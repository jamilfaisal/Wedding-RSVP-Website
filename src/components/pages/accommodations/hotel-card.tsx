import { Flower2, MapPin, Star, ExternalLink, Car, Train, Bus } from 'lucide-react';
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
      className={`bg-gradient-to-br from-ivory-50 to-white rounded-lg overflow-hidden shadow-lg border border-sage-100 hover:shadow-xl transition-all duration-300 relative ${isMain ? 'border-2 border-orange-200' : ''}`}
    >
      {hotel.image && renderHotelImage(hotel)}

      <div className="p-8">
        {/* Corner floral accents */}
        <div className="absolute bottom-3 start-3">
          <Flower2 className="w-4 h-4 text-pastel-purple-400 opacity-50" />
        </div>

        {isMain && renderMainHotel(t)}
        {renderHotelNameLocationAndBlockRate(hotel, t)}
        {renderHotelDistanceAndTransport(hotel, t)}
        {renderHotelNotes(hotel)}
        {hotel.booking && renderHotelBooking(hotel, t)}
        {hotel.links && renderHotelLinks(hotel)}
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
          className="inline-flex items-center gap-1 text-sm text-sage-700 hover:text-brown-700 border border-sage-300 hover:border-orange-300 rounded-lg px-2 py-1 transition-all duration-200"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <ExternalLink className="w-3 h-3" />
          <span>{link.text}</span>
        </a>
      ))}
    </div>
  );
}

function renderHotelBooking(hotel: Hotel, t: (key: string) => string) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-pastel-pink-50 rounded-lg p-3 mb-4 border border-orange-200">
      <p className="text-sm text-brown-700 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
        {t('hotels.common.booking')}: {hotel.booking}
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
    <div className="space-y-3 mb-4">
      <div className="flex items-center gap-2 text-sm">
        <MapPin className="w-4 h-4 text-sage-600" />
        <span className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('hotels.common.distance')}: {hotel.distance}
        </span>
      </div>

      <div className="flex items-start gap-2 text-sm">
        <div className="flex gap-1 mt-1">
          {hotel.transport.map((mode: TransportationMode, index: number) => (
            <TransportIcon key={index} type={mode.type} />
          ))}
        </div>
        <span className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('hotels.common.transport')}: {hotel.transportNotes}
        </span>
      </div>
    </div>
  );
}

function renderHotelNameLocationAndBlockRate(hotel: Hotel, t: (key: string) => string) {
  return (
    <div className="mb-4">
      <h3 className="text-xl text-brown-800 mb-2" style={{ fontFamily: 'var(--font-harrington)' }}>
        {hotel.name}
      </h3>
      <p className="text-sage-700 text-sm mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
        {hotel.location}
      </p>
      {hotel.blockRate && (
        <div className="bg-gradient-to-r from-orange-50 to-sage-50 rounded-lg p-3 mb-3 border border-orange-200">
          <p className="text-brown-700 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
            {t('hotels.common.blockRate')}: {hotel.blockRate}
          </p>
        </div>
      )}
    </div>
  );
}

function renderMainHotel(t: (key: string) => string) {
  return (
    <div className="absolute top-0 end-0 bg-orange-300 text-brown-800 px-3 py-1 rounded-es-lg z-20">
      <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-harrington)' }}>
        {t('hotels.common.ourMainHotel')}
      </span>
    </div>
  );
}

function renderHotelImage(hotel: Hotel) {
  return (
    <div className="relative h-48 overflow-hidden">
      <ImageWithFallback
        src={hotel.image}
        alt={hotel.name}
        width={400}
        height={192}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}

export default HotelCard;
