'use client';

import { Field, Label, Switch } from '@headlessui/react';

import { useTranslation } from 'react-i18next';
import { useI18n } from '../../../lib/i18n/i18n-provider';

interface AttendanceFieldProps {
  attendingRefreshments: boolean;
  attendingWedding: boolean;
  onRefreshmentsChange: (value: boolean) => void;
  onWeddingChange: (value: boolean) => void;
}

function AttendanceField({
  attendingRefreshments,
  attendingWedding,
  onRefreshmentsChange,
  onWeddingChange,
}: AttendanceFieldProps) {
  const { t } = useTranslation();
  const { locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <Field className="p-6 bg-gradient-to-r from-sage-50/80 to-orange-50/80 rounded-lg border border-sage-100">
      <Label className="text-brown-800 block mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        {t('rsvp.attendanceTitle')} *
      </Label>

      {/* Refreshments Dec 19th */}
      <div className="flex items-center gap-4 mb-4">
        <Switch
          id="attendingRefreshments"
          checked={attendingRefreshments}
          onChange={onRefreshmentsChange}
          className={`group relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-sage-200/50 ${
            attendingRefreshments
              ? 'bg-gradient-to-r from-sage-500 to-sage-600'
              : 'bg-gradient-to-r from-gray-300 to-gray-400'
          }`}
        >
          <span className="sr-only">{t('rsvp.refreshmentsToggle')}</span>
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-1 ring-white transition-all duration-300 ease-in-out group-hover:scale-105 ${
              attendingRefreshments
                ? isRTL
                  ? '-translate-x-1'
                  : 'translate-x-7'
                : isRTL
                  ? '-translate-x-7'
                  : 'translate-x-1'
            }`}
          />
        </Switch>
        <span
          className={`cursor-pointer select-none transition-all duration-200 ${
            attendingRefreshments
              ? 'text-sage-700 font-semibold scale-105'
              : 'text-brown-600 font-medium'
          }`}
          style={{ fontFamily: 'var(--font-serif)' }}
          onClick={() => onRefreshmentsChange(!attendingRefreshments)}
        >
          {t('rsvp.refreshmentsAttendance')}
        </span>
      </div>

      {/* Wedding Dec 20th */}
      <div className="flex items-center gap-4">
        <Switch
          id="attendingWedding"
          checked={attendingWedding}
          onChange={onWeddingChange}
          className={`group relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-sage-200/50 ${
            attendingWedding
              ? 'bg-gradient-to-r from-sage-500 to-sage-600'
              : 'bg-gradient-to-r from-gray-300 to-gray-400'
          }`}
        >
          <span className="sr-only">{t('rsvp.weddingToggle')}</span>
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-1 ring-white transition-all duration-300 ease-in-out group-hover:scale-105 ${
              attendingWedding
                ? isRTL
                  ? '-translate-x-1'
                  : 'translate-x-7'
                : isRTL
                  ? '-translate-x-7'
                  : 'translate-x-1'
            }`}
          />
        </Switch>
        <span
          className={`cursor-pointer select-none transition-all duration-200 ${
            attendingWedding
              ? 'text-sage-700 font-semibold scale-105'
              : 'text-brown-600 font-medium'
          }`}
          style={{ fontFamily: 'var(--font-serif)' }}
          onClick={() => onWeddingChange(!attendingWedding)}
        >
          {t('rsvp.weddingAttendance')}
        </span>
      </div>
    </Field>
  );
}

export default AttendanceField;
