'use client';

import { Field, Label, Switch } from '@headlessui/react';

import { useTranslation } from 'react-i18next';

interface AttendanceFieldProps {
  attending: boolean;
  onChange: (value: boolean) => void;
}

function AttendanceField({ attending, onChange }: AttendanceFieldProps) {
  const { t } = useTranslation();
  return (
    <Field className="p-6 bg-gradient-to-r from-sage-50/80 to-orange-50/80 rounded-lg border border-sage-100">
      <Label
        htmlFor="attending"
        className="text-brown-800 block mb-4"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {t('rsvp.attendance')} *
      </Label>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Switch
            id="attending"
            checked={attending}
            onChange={onChange}
            className={`group relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-sage-200/50 ${
              attending
                ? 'bg-gradient-to-r from-sage-500 to-sage-600'
                : 'bg-gradient-to-r from-gray-300 to-gray-400'
            }`}
          >
            <span className="sr-only">{t('rsvp.attendanceToggle')}</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-1 ring-white transition-all duration-300 ease-in-out group-hover:scale-105 ${
                attending ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </Switch>
          <span
            className={`cursor-pointer select-none transition-all duration-200 ${
              attending ? 'text-sage-700 font-semibold scale-105' : 'text-brown-600 font-medium'
            }`}
            style={{ fontFamily: 'var(--font-serif)' }}
            onClick={() => onChange(!attending)}
          >
            {attending ? t('rsvp.yes') : t('rsvp.no')}
          </span>
        </div>
      </div>
    </Field>
  );
}

export default AttendanceField;
