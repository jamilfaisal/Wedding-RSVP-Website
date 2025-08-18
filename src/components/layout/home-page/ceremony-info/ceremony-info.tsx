import { MapPin, Clock, Globe } from 'lucide-react';
import ceremonyPhoto from '/public/images/ceremony-photo.png';
import floralIllustration from '/public/images/floral-illustration.png';
import ImageWithFallback from '../image-with-fallback';
import { WeddingInfo } from '../../types';
import { extractTimeFromDate, formatDateToMonthDayYear } from '../../utils';
import WeatherWidget from './weather-widget';

function CeremonyInfo({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <section id="ceremony" className="py-20 bg-gradient-to-b from-white to-sage-50/20">
      <div className="max-w-6xl mx-auto px-8">
        {renderSectionHeader()}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Image */}
          {renderVenueImage()}

          <div className="space-y-8 lg:pl-4">
            {renderVenueLocation(weddingInfo)}
            {renderWeddingStartTimes(weddingInfo)}
            {renderLocalStartTime(weddingInfo)}

            <WeatherWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

function renderLocalStartTime(weddingInfo: WeddingInfo) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-brown-100">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-brown-100 to-brown-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-200">
          <Globe className="w-6 h-6 text-brown-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">Local Time</h4>
          <div className="space-y-2 text-brown-600">
            <div className="flex justify-between items-center">
              <span className="font-serif">{weddingInfo.weddingCity} (Local Time):</span>
              <span className="font-light">
                {extractTimeFromDate(weddingInfo.weddingStartDate)}
              </span>
            </div>
            <p className="text-sm text-brown-500 italic mt-2">
              {formatDateToMonthDayYear(weddingInfo.weddingStartDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderWeddingStartTimes(weddingInfo: WeddingInfo) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-orange-100">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-200">
          <Clock className="w-6 h-6 text-orange-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">Schedule</h4>
          <div className="text-brown-600 leading-relaxed space-y-2">
            <div className="flex justify-between items-center py-1">
              <span className="font-serif">Reception:</span>
              <span className="font-light">
                {extractTimeFromDate(weddingInfo.weddingStartDate)}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-serif">Celebration:</span>
              <span className="font-light italic text-brown-500">TBA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderVenueLocation(weddingInfo: WeddingInfo) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-sage-100">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-sage-200">
          <MapPin className="w-6 h-6 text-sage-700" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">Location</h4>
          <div className="text-brown-600 leading-relaxed space-y-1">
            <p className="font-medium">Details Coming Soon</p>
            <p className="text-brown-500 italic">
              {weddingInfo.weddingCity}, {weddingInfo.weddingCountry}
            </p>
            <p className="text-brown-500 italic">Full address will be shared with invited guests</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderVenueImage() {
  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden shadow-lg border-4 border-sage-100">
        <ImageWithFallback
          src={ceremonyPhoto}
          alt="Wedding ceremony setup with beautiful floral arrangements and elegant decor"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/10 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

function renderSectionHeader() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-8">
        <ImageWithFallback
          src={floralIllustration}
          alt="Floral Decoration"
          className="w-80 h-auto opacity-90"
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-4">Ceremony Details</h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed font-light">
        Join us for a celebration of love in La Città Eterna
      </p>
    </div>
  );
}

export default CeremonyInfo;
