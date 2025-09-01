'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@headlessui/react';
import { Home, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { groomFirstName, brideFirstName } from '@/lib/config/wedding-config';
import {
  PageLayout,
  DecorativeBorder,
  FloralPicture,
  ContentCard,
  DecorativeFooter,
} from '../shared';
import { i18n } from 'i18next';

interface FormData {
  attendingRefreshments: boolean;
  attendingWedding: boolean;
}

function ThankYouPage() {
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    attendingRefreshments: false,
    attendingWedding: false,
  });

  useEffect(() => {
    const attendingRefreshments = searchParams?.get('attendingRefreshments') === 'true';
    const attendingWedding = searchParams?.get('attendingWedding') === 'true';

    setFormData({
      attendingRefreshments,
      attendingWedding,
    });
  }, [searchParams]);

  const getAttendanceMessage = () => {
    if (formData.attendingRefreshments && formData.attendingWedding) {
      return t('success.attendingBoth');
    } else if (formData.attendingRefreshments) {
      return t('success.attendingRefreshments');
    } else if (formData.attendingWedding) {
      return t('success.attendingWedding');
    } else {
      return t('success.notAttending');
    }
  };

  return (
    <PageLayout>
      {renderHeader(t)}
      {renderMainContent(t, getAttendanceMessage, i18n, formData)}
      {renderFooter(t)}
    </PageLayout>
  );
}

function renderFooter(t: (key: string) => string) {
  return (
    <DecorativeFooter>
      <p className="text-brown-700 text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
        {t('success.footerMessage')}
      </p>
      <p className="text-brown-600 mt-2" style={{ fontFamily: 'var(--font-serif)' }}>
        {groomFirstName} & {brideFirstName}
      </p>
    </DecorativeFooter>
  );
}

function renderMainContent(
  t: (key: string) => string,
  getAttendanceMessage: () => string,
  i18n: i18n,
  formData: FormData
) {
  return (
    <ContentCard className="text-center">
      <div className="space-y-6">
        <p
          className="text-lg text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('success.thankYouMessage')}
        </p>

        <div className="bg-sage-50/50 rounded-lg p-6 my-8">
          <p
            className="text-brown-800 font-medium text-lg"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {getAttendanceMessage()}
          </p>
        </div>

        <p className="text-brown-600" style={{ fontFamily: 'var(--font-serif)' }}>
          {t('success.emailConfirmation')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={() => (window.location.href = `/${i18n.language}`)}
            className="cursor-pointer bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border-0"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <Home className="w-4 h-4" />
            {t('success.backToHome')}
          </Button>

          {(formData.attendingRefreshments || formData.attendingWedding) && (
            <Button
              onClick={() => (window.location.href = `/${i18n.language}/accommodations`)}
              className="cursor-pointer bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border-0"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <Building2 className="w-4 h-4" />
              {t('success.viewAccommodations')}
            </Button>
          )}
        </div>
      </div>
    </ContentCard>
  );
}

function renderHeader(t: (key: string) => string) {
  return (
    <div className="text-center mb-12 relative">
      <DecorativeBorder />

      <h1
        className="text-5xl md:text-6xl text-brown-800 mb-6 leading-tight"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {t('success.thankYou')}
      </h1>

      <h2 className="text-3xl text-brown-700 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        {t('success.rsvpConfirmed')}
      </h2>

      <FloralPicture />
    </div>
  );
}

export default ThankYouPage;
