'use client';
import { Textarea, Button } from '@headlessui/react';
import { useRSVPForm } from './use-rsvp-form';
import { FormField, TextInput, SelectField } from './form-components';
import { FloralDecoration } from './floral-decorations';
import AttendanceField from './attendance-field';

const mealOptions = [
  { value: 'Meat', label: 'Meat' },
  { value: 'Fish', label: 'Fish' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Vegan', label: 'Vegan' },
];

const guestOptions = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
];

function RSVPForm() {
  const { formData, errors, handleInputChange, handleBlur, handleSubmit } = useRSVPForm();

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative">
      {/* Corner Floral Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField id="fullName" label="Guest Full Name" required error={errors.fullName}>
          <TextInput
            id="fullName"
            value={formData.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
            onBlur={() => handleBlur('fullName')}
            placeholder="Enter your full name"
            required
            error={errors.fullName}
            autoComplete="name"
          />
        </FormField>

        <FormField id="email" label="Email Address" required error={errors.email}>
          <TextInput
            id="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            onBlur={() => handleBlur('email')}
            placeholder="your.email@example.com"
            required
            error={errors.email}
            autoComplete="email"
          />
        </FormField>

        <AttendanceField
          attending={formData.attending}
          onChange={(value) => handleInputChange('attending', value)}
        />

        {formData.attending && (
          <>
            <FormField id="numberOfGuests" label="Number of Guests (including yourself)" required>
              <SelectField
                id="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={(value) => handleInputChange('numberOfGuests', value)}
                options={guestOptions}
                placeholder="Select number of guests"
                zIndex="z-[200]"
              />
            </FormField>

            {formData.numberOfGuests === '2' && (
              <FormField
                id="secondGuestName"
                label="Name of second guest"
                required
                error={errors.secondGuestName}
              >
                <TextInput
                  id="secondGuestName"
                  value={formData.secondGuestName}
                  onChange={(value) => handleInputChange('secondGuestName', value)}
                  onBlur={() => handleBlur('secondGuestName')}
                  placeholder="Enter second guest's full name"
                  required
                  error={errors.secondGuestName}
                  autoComplete="name"
                />
              </FormField>
            )}

            <FormField
              id="mealPreference"
              label="Meal Preference"
              required
              error={errors.mealPreference}
            >
              <SelectField
                id="mealPreference"
                value={formData.mealPreference}
                onChange={(value) => handleInputChange('mealPreference', value)}
                onBlur={(value) => handleBlur('mealPreference', value)}
                options={mealOptions}
                placeholder="Select your meal preference"
                error={errors.mealPreference}
              />
            </FormField>

            <FormField id="dietaryRestrictions" label="Dietary restrictions?">
              <TextInput
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(value) => handleInputChange('dietaryRestrictions', value)}
                placeholder="Please list any allergies or food intolerances"
              />
            </FormField>
          </>
        )}

        <FormField id="songRequests" label="Any song requests? 🎵">
          <Textarea
            id="songRequests"
            value={formData.songRequests}
            onChange={(e) => handleInputChange('songRequests', e.target.value)}
            className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800 min-h-24"
            placeholder="Share your favorite songs that would make you dance at our wedding! 💃🕺"
            rows={4}
          />
        </FormField>

        <div>
          <Button
            type="submit"
            className="cursor-pointer w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Submit RSVP
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;
