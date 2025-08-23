import { Leaf, Flower, MapPin, Flower2, Camera, Utensils, Plane } from 'lucide-react';
import TouristInfoCard from './tourist-info-card';
import TouristInfoHeader from './tourist-info-header';
import { attractions } from './tourist-info-data';

function TouristInfoPage({ weddingCity }: { weddingCity: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/20 to-orange-50/10 pt-40 py-20">
      <div className="max-w-6xl mx-auto px-8">
        {renderHeader(weddingCity)}
        {renderHistoricalSites()}
        {renderRomanticSpots()}
        {renderFoodAndDrink()}
        {renderDayTrips()}
        {renderFooter(weddingCity)}
      </div>
    </div>
  );
}

function renderFooter(weddingCity: string) {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-sage-50/90 to-orange-50/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-sage-100 relative">
        <div className="absolute top-4 left-4">
          <Flower className="w-5 h-5 text-sage-400 opacity-50" />
        </div>
        <div className="absolute top-4 right-4">
          <Flower2 className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Leaf className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 right-4">
          <Leaf className="w-5 h-5 text-sage-400 opacity-50" />
        </div>

        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-16 h-px bg-sage-300"></div>
          <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
          <div className="w-16 h-px bg-sage-300"></div>
        </div>
        <p
          className="text-2xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Enjoy exploring the beauty of {weddingCity}! 🏛️✨
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-sage-300 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-orange-300 rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-2 h-2 bg-brown-300 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function renderDayTrips() {
  return (
    <section className="mb-20">
      <TouristInfoHeader title="Day Trips" icon={<Plane className="w-6 h-6 text-brown-600" />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.dayTrips.map((attraction, index) => (
          <TouristInfoCard key={index} attraction={attraction} />
        ))}
      </div>
    </section>
  );
}

function renderFoodAndDrink() {
  return (
    <section className="mb-20">
      <TouristInfoHeader
        title="Food & Drink"
        icon={<Utensils className="w-6 h-6 text-brown-600" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.food.map((attraction, index) => (
          <TouristInfoCard key={index} attraction={attraction} />
        ))}
      </div>
    </section>
  );
}

function renderRomanticSpots() {
  return (
    <section className="mb-20">
      <TouristInfoHeader
        title="Romantic Spots"
        icon={<Flower className="w-6 h-6 text-brown-600" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.romantic.map((attraction, index) => (
          <TouristInfoCard key={index} attraction={attraction} />
        ))}
      </div>
    </section>
  );
}

function renderHistoricalSites() {
  return (
    <section className="mb-20">
      <TouristInfoHeader
        title="Historical Sites"
        icon={<Camera className="w-6 h-6 text-brown-600" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attractions.historical.map((attraction, index) => (
          <TouristInfoCard key={index} attraction={attraction} />
        ))}
      </div>
    </section>
  );
}

function renderHeader(weddingCity: string) {
  return (
    <div className="text-center mb-20 relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-96">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-sage-400" />
            <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
            <Flower className="w-6 h-6 text-orange-300" />
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-sage-300"></div>
          <MapPin className="w-8 h-8 text-brown-400" />
          <div className="w-20 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-sage-300"></div>
          <div className="flex items-center space-x-2">
            <Flower2 className="w-6 h-6 text-sage-400" />
            <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
            <Leaf className="w-5 h-5 text-orange-300" />
          </div>
        </div>
      </div>

      <h1
        className="text-6xl md:text-7xl text-brown-800 mb-8 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        Touristy Things in {weddingCity}
      </h1>

      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-sage-100 relative">
        <div className="absolute top-3 left-3">
          <Flower className="w-4 h-4 text-sage-400 opacity-40" />
        </div>
        <div className="absolute bottom-3 right-3">
          <Flower2 className="w-4 h-4 text-orange-300 opacity-40" />
        </div>
        <p
          className="text-xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Here are some wonderful places to explore while in {weddingCity}. From ancient wonders to
          romantic spots, delicious cuisine to peaceful escapes – make the most of your time in the
          Eternal City!
        </p>
      </div>
    </div>
  );
}

export default TouristInfoPage;
