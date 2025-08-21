import { Car, Flower, Train, Bus, ExternalLink } from 'lucide-react';
import AccommodationsHeader from './accommodations-header';

function GettingToVenue() {
  return (
    <section className="mb-16">
      <AccommodationsHeader
        title="Getting to the Venue"
        icon={<Car className="w-6 h-6 text-brown-600" />}
      />
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white/95 rounded-lg p-6 shadow-lg border border-sage-100 relative">
          <div className="absolute top-3 right-3">
            <Flower className="w-4 h-4 text-pastel-pink-400 opacity-40" />
          </div>
          <div className="space-y-4">
            {renderCarInfo()}
            {renderTrainInfo()}
            {renderHotelShuttleInfo()}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderHotelShuttleInfo() {
  return (
    <div className="flex items-start space-x-3">
      <Bus className="w-5 h-5 text-orange-600 mt-1" />
      <div>
        <h4
          className="text-lg text-brown-800 mb-2"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Hotel Shuttle (Rome Cavalieri)
        </h4>
        <p className="text-brown-600 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
          Seasonal timetable with pick-up/drop-off near Via Veneto; confirm times directly with the
          hotel.
        </p>
        <a
          href="#"
          className="inline-flex items-center space-x-1 text-sm text-sage-700 hover:text-brown-700 border border-sage-300 hover:border-orange-300 rounded-lg px-2 py-1 transition-all duration-200"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <ExternalLink className="w-3 h-3" />
          <span>Hotel Rome Cavalieri</span>
        </a>
      </div>
    </div>
  );
}

function renderTrainInfo() {
  return (
    <div className="flex items-start space-x-3">
      <Train className="w-5 h-5 text-orange-600 mt-1" />
      <div>
        <h4
          className="text-lg text-brown-800 mb-2"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Metro A to Cipro + short taxi/bus
        </h4>
        <p className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          From many central hotels near Spagna/Barberini/Flaminio you can ride Metro A toward
          Battistini and connect near Cipro for a short hop.
        </p>
      </div>
    </div>
  );
}

function renderCarInfo() {
  return (
    <div className="flex items-start space-x-3">
      <Car className="w-5 h-5 text-orange-600 mt-1" />
      <div>
        <h4
          className="text-lg text-brown-800 mb-2"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Taxi
        </h4>
        <p className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          Fastest and simplest from anywhere in the center (typically ~10–20 minutes depending on
          traffic).
        </p>
      </div>
    </div>
  );
}

export default GettingToVenue;
