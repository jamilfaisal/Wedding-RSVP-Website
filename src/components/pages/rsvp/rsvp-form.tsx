'use client';
import { Textarea, Button } from '@headlessui/react';
import { useRSVPForm } from './use-rsvp-form';
import { FormField, TextInput, SelectField } from './form-components';
import { FloralDecoration } from './floral-decorations';
import AttendanceField from './attendance-field';
import { useTranslation } from 'react-i18next';

function RSVPForm() {
  const { t } = useTranslation();
  const { formData, errors, handleInputChange, handleBlur, handleSubmit } = useRSVPForm();

  const mealOptions = [
    { value: 'Meat', label: t('rsvp.meat') },
    { value: 'Fish', label: t('rsvp.fish') },
    { value: 'Vegetarian', label: t('rsvp.vegetarian') },
    { value: 'Vegan', label: t('rsvp.vegan') },
  ];

  const guestOptions = [
    { value: '1', label: t('rsvp.1 Guest') },
    { value: '2', label: t('rsvp.2 Guests') },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative">
      {/* Corner Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      <form onSubmit={(e) => handleSubmit(e, t)} className="space-y-6">
        <FormField id="fullName" label={t('rsvp.fullName')} required error={errors.fullName}>
          <TextInput
            id="fullName"
            value={formData.fullName}
            onChange={(value) => handleInputChange('fullName', value, t)}
            onBlur={() => handleBlur('fullName', t)}
            placeholder={t('rsvp.fullNamePlaceholder')}
            required
            error={errors.fullName}
            autoComplete="name"
          />
        </FormField>

        <FormField id="email" label={t('rsvp.email')} required error={errors.email}>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value, t)}
            onBlur={() => handleBlur('email', t)}
            placeholder="your.email@example.com"
            required
            error={errors.email}
            autoComplete="email"
          />
        </FormField>

        <AttendanceField
          attendingRefreshments={formData.attendingRefreshments}
          attendingWedding={formData.attendingWedding}
          onRefreshmentsChange={(value) => handleInputChange('attendingRefreshments', value, t)}
          onWeddingChange={(value) => handleInputChange('attendingWedding', value, t)}
        />

        {(formData.attendingRefreshments || formData.attendingWedding) && (
          <>
            <FormField id="numberOfGuests" label={t('rsvp.guests')} required>
              <SelectField
                id="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={(value) => handleInputChange('numberOfGuests', value, t)}
                options={guestOptions}
                placeholder={t('rsvp.guestsPlaceholder')}
                zIndex="z-[200]"
              />
            </FormField>

            {formData.numberOfGuests === '2' && (
              <FormField
                id="secondGuestName"
                label={t('rsvp.secondGuestFullName')}
                required
                error={errors.secondGuestName}
              >
                <TextInput
                  id="secondGuestName"
                  value={formData.secondGuestName}
                  onChange={(value) => handleInputChange('secondGuestName', value, t)}
                  onBlur={() => handleBlur('secondGuestName', t)}
                  placeholder={t('rsvp.secondGuestFullNamePlaceholder')}
                  required
                  error={errors.secondGuestName}
                  autoComplete="name"
                />
              </FormField>
            )}

            <FormField
              id="mealPreference"
              label={t('rsvp.mealPreference')}
              required
              error={errors.mealPreference}
            >
              <SelectField
                id="mealPreference"
                value={formData.mealPreference}
                onChange={(value) => handleInputChange('mealPreference', value, t)}
                onBlur={(value) => handleBlur('mealPreference', t, value)}
                options={mealOptions}
                placeholder={t('rsvp.mealPreferencePlaceholder')}
                error={errors.mealPreference}
              />
            </FormField>

            <FormField id="dietaryRestrictions" label={t('rsvp.dietaryRestrictions')}>
              <TextInput
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(value) => handleInputChange('dietaryRestrictions', value, t)}
                placeholder={t('rsvp.dietaryRestrictionsPlaceholder')}
              />
            </FormField>
          </>
        )}

        <FormField id="songRequests" label={t('rsvp.songRequests')}>
          <Textarea
            id="songRequests"
            value={formData.songRequests}
            onChange={(e) => handleInputChange('songRequests', e.target.value, t)}
            className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800 min-h-24"
            placeholder={t('rsvp.songRequestsPlaceholder')}
            rows={4}
          />
        </FormField>

        <div>
          <Button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('rsvp.submitRSVP')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;
