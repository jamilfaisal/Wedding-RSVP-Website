import GettingToVenue from './getting-to-venue';
import OurMainHotel from './our-main-hotel';
import SignatureStays from './signature-stays';
import TimelessTownAndCountry from './timeless-town-and-country';
import ChicCityNests from './chic-city-nests';
import { Flower, Flower2, Leaf, Bed } from 'lucide-react';

function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/20 to-pastel-pink-50/10 pt-40 py-20">
      <div className="max-w-6xl mx-auto px-8">
        {renderSectionHeader()}

        <OurMainHotel />
        <SignatureStays />
        <TimelessTownAndCountry />
        <ChicCityNests />
        <GettingToVenue />

        {renderSectionFooter()}
      </div>
    </div>
  );
}

function renderSectionFooter() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-pastel-pink-50/90 to-pastel-blue-50/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-pastel-pink-100 relative">
        <div className="absolute top-4 left-4">
          <Flower className="w-5 h-5 text-pastel-pink-400 opacity-50" />
        </div>
        <div className="absolute top-4 right-4">
          <Flower2 className="w-5 h-5 text-pastel-blue-400 opacity-50" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Leaf className="w-5 h-5 text-sage-400 opacity-50" />
        </div>
        <div className="absolute bottom-4 right-4">
          <Flower className="w-4 h-4 text-pastel-purple-400 opacity-50" />
        </div>

        <h3
          className="text-2xl text-brown-800 mb-4"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Small Print
        </h3>
        <p className="text-brown-600 leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
          Distances are approximate road distances from each hotel to the venue to help with
          planning; traffic can significantly affect travel time. For precise navigation on the day,
          we&apos;ll share exact pins and an arrival note closer to the wedding.
        </p>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <div className="w-16 h-px bg-sage-300"></div>
          <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
          <div className="w-16 h-px bg-sage-300"></div>
        </div>
      </div>
    </div>
  );
}

function renderSectionHeader() {
  return (
    <div className="text-center mb-20 relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-96">
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-pastel-pink-400" />
            <div className="w-3 h-3 bg-pastel-purple-200 rounded-full"></div>
            <Flower className="w-6 h-6 text-sage-400" />
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-sage-300 via-orange-200 to-pastel-pink-300"></div>
          <Bed className="w-8 h-8 text-brown-400" />
          <div className="w-20 h-px bg-gradient-to-l from-sage-300 via-orange-200 to-pastel-pink-300"></div>
          <div className="flex items-center space-x-2">
            <Flower2 className="w-6 h-6 text-pastel-blue-400" />
            <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
            <Leaf className="w-5 h-5 text-pastel-purple-400" />
          </div>
        </div>
      </div>

      <h1
        className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown-800 mb-8 leading-tight px-4"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        Accommodations
      </h1>

      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-sage-100 relative">
        <div className="absolute top-3 left-3">
          <Flower className="w-5 h-5 text-pastel-pink-400 opacity-40" />
        </div>
        <div className="absolute top-3 right-3">
          <Flower2 className="w-5 h-5 text-pastel-blue-400 opacity-40" />
        </div>
        <div className="absolute bottom-3 left-3">
          <Leaf className="w-4 h-4 text-sage-400 opacity-40" />
        </div>
        <div className="absolute bottom-3 right-3">
          <Flower className="w-4 h-4 text-pastel-purple-400 opacity-40" />
        </div>
        <p
          className="text-xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          We&apos;re delighted you&apos;ll be celebrating with us in Rome. Below are our recommended
          places to stay near our venue. We&apos;ve reserved a special rate at our main hotel, plus
          curated options in three elegant tiers to suit different styles and budgets.
        </p>
      </div>
    </div>
  );
}

export default AccommodationsPage;
