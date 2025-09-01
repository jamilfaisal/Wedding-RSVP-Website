'use client';
import { Button } from '@headlessui/react';
import { useEditRSVPForm } from './use-edit-rsvp-form';
import { FormField, TextInput, SelectField } from './form-components';
import { FloralDecoration } from './floral-decorations';
import AttendanceField from './attendance-field';
import { useTranslation } from 'react-i18next';

interface EditRSVPFormProps {
  token: string | null;
}

function EditRSVPForm({ token }: EditRSVPFormProps) {
  const { t } = useTranslation();
  const {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit,
    loading,
    originalData,
    submitting,
  } = useEditRSVPForm(token);

  const dietaryOptions = [
    { value: 'None', label: t('rsvp.dietaryNone') },
    { value: 'Vegan', label: t('rsvp.dietaryVegan') },
    { value: 'Vegetarian', label: t('rsvp.dietaryVegetarian') },
    { value: 'Lactose Intolerant', label: t('rsvp.dietaryLactoseIntolerant') },
    { value: 'Gluten Allergy', label: t('rsvp.dietaryGlutenAllergy') },
  ];

  const guestOptions = [
    { value: '1', label: t('rsvp.1 Guest') },
    { value: '2', label: t('rsvp.2 Guests') },
  ];

  if (loading) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative">
        <FloralDecoration position="top-left" />
        <FloralDecoration position="top-right" />
        <FloralDecoration position="bottom-left" />
        <FloralDecoration position="bottom-right" />

        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sage-600 mx-auto"></div>
          <p className="mt-4 text-brown-700">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!token || !originalData) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative">
        <FloralDecoration position="top-left" />
        <FloralDecoration position="top-right" />
        <FloralDecoration position="bottom-left" />
        <FloralDecoration position="bottom-right" />

        <div className="text-center py-12">
          <h2 className="text-2xl font-serif text-brown-800 mb-4">
            {t('rsvp.invalidEditLinkTitle')}
          </h2>
          <p className="text-brown-700 mb-6">{t('rsvp.invalidEditLinkMessage')}</p>
          <Button
            onClick={() => (window.location.href = `/rsvp`)}
            className="cursor-pointer bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('rsvp.goToRSVPPage')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative z-10">
      {/* Corner Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-serif text-brown-800 mb-2">{t('rsvp.editTitle')}</h2>
        <p className="text-brown-600">
          {t('rsvp.lastSubmittedOn')}{' '}
          {originalData.createdTime && new Date(originalData.createdTime).toLocaleDateString()}
        </p>
      </div>

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
              id="guest1DietaryRestrictions"
              label={t('rsvp.guest1DietaryRestrictions')}
              required
              error={errors.guest1DietaryRestrictions}
            >
              <SelectField
                id="guest1DietaryRestrictions"
                value={formData.guest1DietaryRestrictions}
                onChange={(value) => handleInputChange('guest1DietaryRestrictions', value, t)}
                onBlur={(value) => handleBlur('guest1DietaryRestrictions', t, value)}
                options={dietaryOptions}
                placeholder={t('rsvp.guest1DietaryRestrictionsPlaceholder')}
                error={errors.guest1DietaryRestrictions}
              />
            </FormField>

            {formData.numberOfGuests === '2' && (
              <FormField
                id="guest2DietaryRestrictions"
                label={t('rsvp.guest2DietaryRestrictions')}
                required
                error={errors.guest2DietaryRestrictions}
              >
                <SelectField
                  id="guest2DietaryRestrictions"
                  value={formData.guest2DietaryRestrictions}
                  onChange={(value) => handleInputChange('guest2DietaryRestrictions', value, t)}
                  onBlur={(value) => handleBlur('guest2DietaryRestrictions', t, value)}
                  options={dietaryOptions}
                  placeholder={t('rsvp.guest2DietaryRestrictionsPlaceholder')}
                  error={errors.guest2DietaryRestrictions}
                />
              </FormField>
            )}
          </>
        )}

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={() => window.history.back()}
            className="cursor-pointer flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-0"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('common.cancel')}
          </Button>

          <Button
            type="submit"
            disabled={submitting}
            className="cursor-pointer flex-1 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {submitting ? t('common.loading') : t('rsvp.updateRSVP')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditRSVPForm;
