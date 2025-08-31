import { Car, Shirt } from 'lucide-react';
import weddingRingsIcon from '/public/images/wedding-rings-icon.png';
import couplePhoto from '/public/images/couple-photo.png';
import ImageWithFallback from '../../ui/image-with-fallback';
import QRCode from '../../ui/qr-code';
import { useTranslation } from 'react-i18next';

function WeddingDetails() {
  const { t } = useTranslation();
  return (
    <section id="details" className="pt-30 bg-gradient-to-b from-sage-50/20 to-orange-50/10">
      <div className="max-w-7xl mx-auto px-8">
        {renderSectionHeader(t)}

        <div className="grid lg:grid-cols-2 gap-36 items-start">
          {renderCards(t)}
          {renderDecorativeImage()}
        </div>
      </div>
    </section>
  );
}

function renderCards(t: (key: string) => string) {
  return (
    <div className="space-y-8">
      {renderDressCodeCard(t)}
      {renderTransportationCard(t)}
      {renderPhotoSharingCard(t)}
    </div>
  );
}

function renderTransportationCard(t: (key: string) => string) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md border-2 border-orange-100">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-orange-200">
          <Car className="w-8 h-8 text-orange-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-brown-800 mb-4">
            {t('weddingDetails.gettingThere')}
          </h3>
          <div className="space-y-4 text-brown-600">
            <div className="border-s-2 border-sage-200 ps-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">
                {t('weddingDetails.transportationDetails')}
              </h4>
              <p className="font-light leading-relaxed italic text-brown-500">
                {t('weddingDetails.transportationInfo')}
              </p>
            </div>
            <div className="border-s-2 border-orange-200 ps-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">
                {t('weddingDetails.gettingTo')} {t('weddingInfo.weddingCountry')}
              </h4>
              <p className="font-light leading-relaxed">
                {t('weddingInfo.weddingCountry')} {t('weddingDetails.gettingToDesc1')}{' '}
                {t('weddingInfo.weddingCountry')} {t('weddingDetails.gettingToDesc2')}
              </p>
            </div>
            <div className="border-s-2 border-brown-200 ps-4">
              <h4 className="font-serif font-medium text-brown-800 mb-2">
                {t('weddingDetails.localTransportation')}
              </h4>
              <p className="font-light leading-relaxed">
                {t('weddingInfo.weddingCountry')} {t('weddingDetails.localTransportationDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPhotoSharingCard(t: (key: string) => string) {
  const povAppUrl = process.env.NEXT_PUBLIC_POV_APP_URL || 'https://your-pov-app-url.com';

  return (
    <QRCode
      url={povAppUrl}
      title={t('weddingDetails.sharePhotos')}
      description={t('weddingDetails.sharePhotosDescription')}
    />
  );
}

function renderDressCodeCard(t: (key: string) => string) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md border-2 border-sage-100">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-sage-200">
          <Shirt className="w-8 h-8 text-sage-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-brown-800 mb-4">{t('weddingDetails.attire')}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-brown-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">
                  {t('weddingDetails.blackTieElegance')}
                </span>
                <p className="text-brown-600 font-light mt-1">
                  {t('weddingDetails.blackTieEleganceDescription')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-sage-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">
                  {t('weddingDetails.yourPaletteYourStyle')}
                </span>
                <p className="text-brown-600 font-light mt-1">
                  {t('weddingDetails.yourPaletteYourStyleDescription')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <span className="text-brown-700 font-serif font-medium">
                  {t('weddingDetails.winterCharm')}
                </span>
                <p className="text-brown-600 font-light mt-1">
                  {t('weddingDetails.winterCharmDescription')}
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
    <div className="relative w-2/3 mx-auto lg:mx-0 lg:sticky lg:top-36">
      <div className="rounded-lg overflow-hidden shadow-lg border-4 border-orange-100 relative">
        <div className="relative">
          <ImageWithFallback src={couplePhoto} alt="Groom and Bride" className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 via-transparent to-ivory-50/10"></div>
        </div>
      </div>
    </div>
  );
}

function renderSectionHeader(t: (key: string) => string) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        <div className="mx-8 p-2">
          <ImageWithFallback src={weddingRingsIcon} alt="Wedding Rings" className="w-18 h-18" />
        </div>
        <div className="w-12 h-px bg-gradient-to-l from-transparent via-orange-300 to-transparent"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-4">
        {t('weddingDetails.title')}
      </h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed font-light">
        {t('weddingDetails.subtitle')}
      </p>
    </div>
  );
}

export default WeddingDetails;
