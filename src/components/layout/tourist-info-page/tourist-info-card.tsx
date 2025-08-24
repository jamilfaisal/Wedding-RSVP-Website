import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Flower, Leaf, Clock, Star } from 'lucide-react';
import { Attraction } from './tourist-info-data';

function TouristInfoCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-sage-100 hover:shadow-xl transition-all duration-300 relative">
      {attraction.image && renderAttractionImage(attraction)}

      <div className="p-6">
        {!attraction.image && renderFloralAccentsInCorners()}

        {renderAttractionName(attraction)}
        {renderAttractionDescription(attraction)}
        {renderAttractionTime(attraction)}
        {attraction.tips && renderAttractionTips(attraction)}
      </div>
    </div>
  );
}

function renderAttractionTips(attraction: Attraction) {
  return (
    <div className="p-3 bg-gradient-to-r from-sage-50 to-orange-50 rounded-lg border border-sage-100">
      <p className="text-sm text-brown-600 italic" style={{ fontFamily: 'var(--font-serif)' }}>
        <Star className="w-3 h-3 inline me-1 text-orange-400" />
        {attraction.tips}
      </p>
    </div>
  );
}

function renderAttractionTime(attraction: Attraction) {
  return (
    <div className="flex items-center gap-4 text-sm text-sage-700 mb-4">
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span style={{ fontFamily: 'var(--font-serif)' }}>{attraction.time}</span>
      </div>
    </div>
  );
}

function renderAttractionDescription(attraction: Attraction) {
  return (
    <p className="text-brown-600 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
      {attraction.description}
    </p>
  );
}

function renderAttractionName(attraction: Attraction) {
  return (
    <h3 className="text-xl text-brown-800 mb-3" style={{ fontFamily: 'var(--font-harrington)' }}>
      {attraction.name}
    </h3>
  );
}

function renderFloralAccentsInCorners() {
  return (
    <>
      <div className="absolute top-2 end-2">
        <Leaf className="w-3 h-3 text-sage-400 opacity-40" />
      </div>
      <div className="absolute bottom-2 start-2">
        <Flower className="w-3 h-3 text-orange-300 opacity-40" />
      </div>
    </>
  );
}

function renderAttractionImage(attraction: Attraction) {
  if (!attraction.image) return null;
  return (
    <div className="relative h-48 overflow-hidden">
      <ImageWithFallback
        src={attraction.image}
        alt={attraction.name}
        width={400}
        height={192}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 via-transparent to-transparent"></div>
      {/* Image overlay floral accent */}
      <div className="absolute top-3 end-3">
        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
          <Flower className="w-4 h-4 text-sage-600" />
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCard;
