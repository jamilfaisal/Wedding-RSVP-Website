'use client';
import {
  Field,
  Label,
  Input,
  Switch,
  Textarea,
  Button,
  Listbox,
  ListboxOptions,
  ListboxButton,
  ListboxOption,
} from '@headlessui/react';
import { Flower, Leaf, Flower2, ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attending: true,
    numberOfGuests: '1',
    secondGuestName: '',
    mealPreference: '',
    dietaryRestrictions: '',
    songRequests: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-15 shadow-xl border border-sage-200 relative">
      {/* Corner Floral Decorations */}
      {renderFloralTopLeft()}
      {renderFloralTopRight()}
      {renderFloralBottomLeft()}
      {renderFloralBottomRight()}

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderFormGuestName(formData.fullName, (field, value) => handleInputChange(field, value))}
        {renderFormEmail(formData.email, (field, value) => handleInputChange(field, value))}
        {renderFormAttendance(formData.attending, (field, value) =>
          handleInputChange(field, value)
        )}
        {isGuestAttending(formData.attending) &&
          renderFormNumOfGuests(formData.numberOfGuests, (field, value) =>
            handleInputChange(field, value)
          )}
        {isGuestAttending(formData.attending) &&
          isTwoGuestsAttending(formData.numberOfGuests) &&
          renderFormGuestPlusOneName(formData.secondGuestName, (field, value) =>
            handleInputChange(field, value)
          )}
        {isGuestAttending(formData.attending) &&
          renderFormMealPref(formData.mealPreference, (field, value) =>
            handleInputChange(field, value)
          )}
        {isGuestAttending(formData.attending) &&
          renderFormDietRestrictions(formData.dietaryRestrictions, (field, value) =>
            handleInputChange(field, value)
          )}
        {renderFormSongRequests(formData.songRequests, (field, value) =>
          handleInputChange(field, value)
        )}
        {renderFormSubmitButton()}
      </form>
    </div>
  );
}

function isTwoGuestsAttending(numberOfGuests: string) {
  return numberOfGuests === '2';
}

function isGuestAttending(attending: boolean) {
  return attending;
}

function renderFormSubmitButton() {
  return (
    <div>
      <Button
        type="submit"
        className="cursor-pointer w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Submit RSVP
      </Button>
    </div>
  );
}

function renderFormSongRequests(
  songRequests: string,
  handleInputChange: (field: string, value: string) => void
) {
  return (
    <Field>
      <Label
        htmlFor="songRequests"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Any song requests? 🎵
      </Label>
      <Textarea
        id="songRequests"
        value={songRequests}
        onChange={(e) => handleInputChange('songRequests', e.target.value)}
        className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800 min-h-24"
        placeholder="Share your favorite songs that would make you dance at our wedding! 💃🕺"
        rows={4}
      />
    </Field>
  );
}

function renderFormDietRestrictions(
  dietaryRestrictions: string,
  handleInputChange: (field: string, value: string) => void
) {
  return (
    <Field>
      <Label
        htmlFor="dietaryRestrictions"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Dietary restrictions?
      </Label>
      <Input
        id="dietaryRestrictions"
        type="text"
        value={dietaryRestrictions}
        onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
        className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800"
        placeholder="Please list any allergies or food intolerances"
      />
    </Field>
  );
}

function renderFormMealPref(
  mealPreference: string,
  handleInputChange: (field: string, value: string) => void
) {
  const mealOptions = [
    { value: 'meat', label: 'Meat' },
    { value: 'fish', label: 'Fish' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
  ];

  return (
    <Field>
      <Label
        htmlFor="mealPreference"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Meal Preference *
      </Label>
      <Listbox
        value={mealPreference}
        onChange={(value: string) => handleInputChange('mealPreference', value)}
      >
        <div className="relative">
          <ListboxButton className="relative w-full cursor-default rounded-lg border-2 border-sage-200 bg-ivory-50/50 py-4 pl-4 pr-10 text-left focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200">
            <span className="block truncate text-brown-800">
              {mealOptions.find((option) => option.value === mealPreference)?.label ||
                'Select your meal preference'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 text-sage-400" aria-hidden="true" />
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
            {mealOptions.map((option) => (
              <ListboxOption
                key={option.value}
                className="relative cursor-default select-none py-2 pl-4 pr-4 data-[focus]:bg-sage-100 data-[focus]:text-sage-900 text-brown-800"
                value={option.value}
              >
                <span className="block truncate data-[selected]:font-medium font-normal">
                  {option.label}
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
}

function renderFormGuestPlusOneName(
  secondGuestName: string,
  handleInputChange: (field: string, value: string) => void
) {
  return (
    <Field className="space-y-4">
      <Label
        htmlFor="secondGuestName"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Name of second guest *
      </Label>
      <Input
        id="secondGuestName"
        type="text"
        required
        value={secondGuestName}
        onChange={(e) => handleInputChange('secondGuestName', e.target.value)}
        className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800"
        placeholder="Enter second guest's full name"
      />
    </Field>
  );
}

function renderFormNumOfGuests(
  numberOfGuests: string,
  handleInputChange: (field: string, value: string) => void
) {
  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
  ];

  return (
    <Field className="space-y-4">
      <Label
        htmlFor="numberOfGuests"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Number of Guests (including yourself) *
      </Label>
      <Listbox
        value={numberOfGuests}
        onChange={(value: string) => handleInputChange('numberOfGuests', value)}
      >
        <div className="relative">
          <ListboxButton className="relative w-full cursor-default rounded-lg border-2 border-sage-200 bg-ivory-50/50 py-4 pl-4 pr-10 text-left focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200">
            <span className="block truncate text-brown-800">
              {guestOptions.find((option) => option.value === numberOfGuests)?.label ||
                'Select number of guests'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 text-sage-400" aria-hidden="true" />
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[200]">
            {guestOptions.map((option) => (
              <ListboxOption
                key={option.value}
                className="relative cursor-default select-none py-2 pl-4 pr-4 data-[focus]:bg-sage-100 data-[focus]:text-sage-900 text-brown-800"
                value={option.value}
              >
                <span className="block truncate data-[selected]:font-medium font-normal">
                  {option.label}
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
}

function renderFormAttendance(
  attending: boolean,
  handleInputChange: (field: string, value: boolean) => void
) {
  return (
    <Field className="p-6 bg-gradient-to-r from-sage-50/80 to-orange-50/80 rounded-lg border border-sage-100">
      <Label className="text-brown-800 block mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
        Will you be attending? *
      </Label>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <Switch
            checked={attending}
            onChange={(checked: boolean) => handleInputChange('attending', checked)}
            className={`group relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-sage-200/50 ${
              attending
                ? 'bg-gradient-to-r from-sage-500 to-sage-600'
                : 'bg-gradient-to-r from-gray-300 to-gray-400'
            }`}
          >
            <span className="sr-only">Enable attendance</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-1 ring-white transition-all duration-300 ease-in-out group-hover:scale-105 ${
                attending ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </Switch>
          <span
            className={`cursor-pointer select-none transition-all duration-200 ${attending ? 'text-sage-700 font-semibold scale-105' : 'text-brown-600 font-medium'}`}
            style={{ fontFamily: 'var(--font-serif)' }}
            onClick={() => handleInputChange('attending', !attending)}
          >
            {attending ? "Yes, I'll be there! ✨" : "Sorry, I can't make it 😔"}
          </span>
        </div>
      </div>
    </Field>
  );
}

function renderFormEmail(email: string, handleInputChange: (field: string, value: string) => void) {
  return (
    <Field className="space-y-4">
      <Label
        htmlFor="email"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Email Address *
      </Label>
      <Input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800"
        placeholder="your.email@example.com"
      />
    </Field>
  );
}

function renderFormGuestName(
  fullName: string,
  handleInputChange: (field: string, value: string) => void
) {
  return (
    <Field className="space-y-4">
      <Label
        htmlFor="fullName"
        className="text-brown-800 mb-2 block"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Guest Full Name *
      </Label>
      <Input
        id="fullName"
        type="text"
        required
        value={fullName}
        onChange={(e) => handleInputChange('fullName', e.target.value)}
        className="w-full p-4 border-2 border-sage-200 rounded-lg focus:border-sage-400 focus:ring-sage-200 bg-ivory-50/50 text-brown-800"
        placeholder="Enter your full name"
      />
    </Field>
  );
}

function renderFloralBottomRight() {
  return (
    <div className="absolute bottom-6 right-6">
      <div className="flex items-center space-x-1">
        <Leaf className="w-4 h-4 text-orange-300 opacity-60 transform rotate-45" />
        <Flower className="w-5 h-5 text-sage-400 opacity-60 transform rotate-180" />
      </div>
    </div>
  );
}

function renderFloralBottomLeft() {
  return (
    <div className="absolute bottom-6 left-6">
      <div className="flex items-center space-x-1">
        <Flower2 className="w-5 h-5 text-orange-300 opacity-60 transform rotate-180" />
        <Leaf className="w-4 h-4 text-sage-400 opacity-60 transform -rotate-45" />
      </div>
    </div>
  );
}

function renderFloralTopRight() {
  return (
    <div className="absolute top-6 right-6">
      <div className="flex items-center space-x-1">
        <Leaf className="w-4 h-4 text-sage-400 opacity-60 transform -rotate-45" />
        <Flower2 className="w-5 h-5 text-orange-300 opacity-60" />
      </div>
    </div>
  );
}

function renderFloralTopLeft() {
  return (
    <div className="absolute top-6 left-6">
      <div className="flex items-center space-x-1">
        <Flower className="w-5 h-5 text-sage-400 opacity-60" />
        <Leaf className="w-4 h-4 text-orange-300 opacity-60 transform rotate-45" />
      </div>
    </div>
  );
}

export default RSVPForm;
