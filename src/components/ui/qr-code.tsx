'use client';

import { Camera } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface QRCodeProps {
  url: string;
  title: string;
  description: string;
  className?: string;
}

function QRCode({ url, title, description, className = '' }: QRCodeProps) {
  const { t } = useTranslation();
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white rounded-lg p-8 shadow-md border-2 border-purple-100 ${className}`}>
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-purple-200">
          <Camera className="w-8 h-8 text-purple-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-brown-800 mb-4">{title}</h3>
          <div className="space-y-4">
            <p className="text-brown-600 font-light leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div
                className="bg-white p-2 rounded-lg border-2 border-purple-200 cursor-pointer transition-transform hover:scale-105"
                onClick={handleClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                  }
                }}
              >
                <Image
                  src={qrCodeUrl}
                  alt={`QR Code for ${title}`}
                  width={128}
                  height={128}
                  className="w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-brown-500 mb-2">{t('weddingDetails.scanWithPhone')}</p>
                <button
                  onClick={handleClick}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-colors"
                >
                  {t('weddingDetails.openPovApp')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
