'use client';

import { Field } from '@headlessui/react';
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
    <Field className="p-4 sm:p-6 bg-gradient-to-r from-sage-50/80 to-orange-50/80 rounded-lg border border-sage-100">
      <h3
        className="text-brown-800 block mb-4 text-sm sm:text-base font-medium"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('rsvp.attendanceTitle')} *
      </h3>

      {/* Refreshments Dec 19th */}
      <div className="mb-3 sm:mb-4">
        <button
          type="button"
          onClick={() => onRefreshmentsChange(!attendingRefreshments)}
          className={`cursor-pointer w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 ${
            isRTL ? 'text-right' : 'text-left'
          } ${
            attendingRefreshments
              ? 'bg-sage-100 border-sage-500 text-sage-800 shadow-md'
              : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-sage-300'
          }`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <div
            className={`flex items-start sm:items-center justify-between gap-3 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <span
              className={`font-medium text-sm sm:text-base leading-tight flex-1 ${
                isRTL ? 'pl-2' : 'pr-2'
              }`}
            >
              {t('rsvp.refreshmentsAttendance')}
            </span>
            <div
              className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                attendingRefreshments ? 'bg-sage-500 border-sage-500' : 'bg-white border-gray-400'
              }`}
            >
              {attendingRefreshments && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Wedding Dec 20th */}
      <div>
        <button
          type="button"
          onClick={() => onWeddingChange(!attendingWedding)}
          className={`cursor-pointer w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 ${
            isRTL ? 'text-right' : 'text-left'
          } ${
            attendingWedding
              ? 'bg-sage-100 border-sage-500 text-sage-800 shadow-md'
              : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-sage-300'
          }`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <div
            className={`flex items-start sm:items-center justify-between gap-3 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <span
              className={`font-medium text-sm sm:text-base leading-tight flex-1 ${
                isRTL ? 'pl-2' : 'pr-2'
              }`}
            >
              {t('rsvp.weddingAttendance')}
            </span>
            <div
              className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                attendingWedding ? 'bg-sage-500 border-sage-500' : 'bg-white border-gray-400'
              }`}
            >
              {attendingWedding && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>
      </div>
    </Field>
  );
}

export default AttendanceField;
