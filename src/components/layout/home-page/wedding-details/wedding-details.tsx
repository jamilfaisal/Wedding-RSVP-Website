import { Car, Shirt } from 'lucide-react';
import { WeddingInfo } from '../../types';
import weddingRingsIcon from '/public/images/wedding-rings-icon.png';
import couplePhoto from '/public/images/couple-photo.png';
import ImageWithFallback from '../../../ui/image-with-fallback';

function WeddingDetails({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <section id="details" className="pt-30 bg-gradient-to-b from-sage-50/20 to-orange-50/10">
      <div className="max-w-7xl mx-auto px-8">
        {renderSectionHeader()}

        <div className="grid lg:grid-cols-2 gap-36 items-start">
          {renderCards(weddingInfo)}
          {renderDecorativeImage()}
        </div>
      </div>
    </section>
  );
}

function renderCards(weddingInfo: WeddingInfo) {
  return (
    <div className="space-y-8">
      {renderDressCodeCard()}
      {renderTransportationCard(weddingInfo)}
    </div>
  );
}

function renderTransportationCard(weddingInfo: WeddingInfo) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md border-2 border-orange-100">
      <div className="flex items-start space-x-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-orange-200">
          <Car className="w-8 h-8 text-orange-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-brown-800 mb-4">Getting There</h3>
          <div className="space-y-4 text-brown-600">
            <div className="border-l-2 border-sage-200 pl-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">Transportation Details</h4>
              <p className="font-light leading-relaxed italic text-brown-500">
                Transportation information will be shared with invited guests closer to the wedding
                date.
              </p>
            </div>
            <div className="border-l-2 border-orange-200 pl-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">
                Getting to {weddingInfo.weddingCountry}
              </h4>
              <p className="font-light leading-relaxed">
                {weddingInfo.weddingCountry} is easily accessible via Fiumicino (FCO) and Ciampino
                (CIA) airports. We recommend booking accommodations in central{' '}
                {weddingInfo.weddingCountry} for easy access to the venue.
              </p>
            </div>
            <div className="border-l-2 border-brown-200 pl-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">Local Transportation</h4>
              <p className="font-light leading-relaxed">
                {weddingInfo.weddingCountry} has excellent public transportation including metro,
                buses, and taxis. Detailed directions will be provided with your invitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderDressCodeCard() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md border-2 border-sage-100">
      <div className="flex items-start space-x-6">
        <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-sage-200">
          <Shirt className="w-8 h-8 text-sage-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-brown-800 mb-4">Attire</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-brown-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">Formal Evening Wear</span>
                <p className="text-brown-600 font-light mt-1">
                  Think elegant cocktail attire or formal evening dress
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-sage-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">Warm Winter Colors</span>
                <p className="text-brown-600 font-light mt-1">
                  Sage greens, warm browns, and muted oranges encouraged
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">Seasonal Elegance</span>
                <p className="text-brown-600 font-light mt-1">
                  Bring a wrap for the outdoor ceremony portions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderDecorativeImage() {
  return (
    <div className="relative w-2/3 mx-auto lg:mx-0 lg:sticky lg:top-24">
      <div className="rounded-lg overflow-hidden shadow-lg border-4 border-orange-100 relative">
        <div className="relative">
          <ImageWithFallback src={couplePhoto} alt="Groom and Bride" className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 via-transparent to-ivory-50/10"></div>
        </div>
      </div>
    </div>
  );
}

function renderSectionHeader() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        <div className="mx-8 p-2">
          <ImageWithFallback src={weddingRingsIcon} alt="Wedding Rings" className="w-18 h-18" />
        </div>
        <div className="w-12 h-px bg-gradient-to-l from-transparent via-orange-300 to-transparent"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-4">Wedding Details</h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed font-light">
        Everything you need to know for our special day
      </p>
    </div>
  );
}

export default WeddingDetails;
