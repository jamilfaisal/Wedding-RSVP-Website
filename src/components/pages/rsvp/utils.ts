import { CreateRSVPInput } from '@/lib/airtable';
import { FormErrors, TouchedFields } from './use-rsvp-form';

export function isAttendingChangedToNo(field: string, value: string | boolean) {
  return (field === 'attendingRefreshments' || field === 'attendingWedding') && value === false;
}

export function clearFormAndErrors(
  newFormData: CreateRSVPInput,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
  errors: FormErrors
): CreateRSVPInput {
  if (!newFormData.attendingRefreshments && !newFormData.attendingWedding) {
    setErrors({
      ...errors,
      guest1DietaryRestrictions: '',
      guest2DietaryRestrictions: '',
      secondGuestName: '',
    });

    return {
      ...newFormData,
      numberOfGuests: '1',
      secondGuestName: '',
      guest1DietaryRestrictions: '',
      guest2DietaryRestrictions: '',
    };
  }

  return newFormData;
}

export function handleNumGuestsChange(
  value: string | boolean,
  errors: FormErrors,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
  setFormData: React.Dispatch<React.SetStateAction<CreateRSVPInput>>,
  fieldTouched: TouchedFields,
  t: (key: string) => string,
  newFormData: CreateRSVPInput
) {
  if (changingFromTwoGuestsToOne()) {
    setFormData((prevData) => ({
      ...prevData,
      secondGuestName: '',
    }));
    setErrors({ ...errors, secondGuestName: '' });
  }

  if (newFormData.secondGuestName !== '' && isTwoGuestsSelectedAndTouched()) {
    const secondGuestNameError = validateSecondGuestName(
      newFormData,
      newFormData.secondGuestName,
      '',
      t
    );
    setErrors({ ...errors, secondGuestName: secondGuestNameError });
  }

  function changingFromTwoGuestsToOne() {
    return value === '1';
  }

  function isTwoGuestsSelectedAndTouched() {
    return value === '2' && fieldTouched.secondGuestName;
  }
}

export function touchAllFields(
  setFieldTouched: React.Dispatch<React.SetStateAction<TouchedFields>>
) {
  setFieldTouched({
    fullName: true,
    email: true,
    guest1DietaryRestrictions: true,
    guest2DietaryRestrictions: true,
    secondGuestName: true,
  });
}

export function validateFieldWithData(
  formData: CreateRSVPInput,
  field: string,
  value: string | boolean,
  t: (key: string) => string
): string {
  let error = '';

  switch (field) {
    case 'fullName':
      error = validateFullName(value, error, t);
      break;
    case 'email':
      error = validateEmail(value, error, t);
      break;
    case 'guest1DietaryRestrictions':
      error = validateGuest1DietaryRestrictions(formData, value, error, t);
      break;
    case 'guest2DietaryRestrictions':
      error = validateGuest2DietaryRestrictions(formData, value, error, t);
      break;
    case 'secondGuestName':
      error = validateSecondGuestName(formData, value, error, t);
      break;
  }

  return error;
}

function validateSecondGuestName(
  formData: CreateRSVPInput,
  value: string | boolean,
  error: string,
  t: (key: string) => string
) {
  if (
    (formData.attendingRefreshments || formData.attendingWedding) &&
    formData.numberOfGuests === '2' &&
    typeof value === 'string' &&
    value.trim().length === 0
  ) {
    error = t('errors.invalidSecondGuestName');
  }
  return error;
}

function validateGuest1DietaryRestrictions(
  formData: CreateRSVPInput,
  value: string | boolean,
  error: string,
  t: (key: string) => string
) {
  if (
    (formData.attendingRefreshments || formData.attendingWedding) &&
    typeof value === 'string' &&
    value.trim().length === 0
  ) {
    error = t('errors.invalidGuest1DietaryRestrictions');
  }
  return error;
}

function validateGuest2DietaryRestrictions(
  formData: CreateRSVPInput,
  value: string | boolean,
  error: string,
  t: (key: string) => string
) {
  if (
    (formData.attendingRefreshments || formData.attendingWedding) &&
    formData.numberOfGuests === '2' &&
    typeof value === 'string' &&
    value.trim().length === 0
  ) {
    error = t('errors.invalidGuest2DietaryRestrictions');
  }
  return error;
}

function validateEmail(value: string | boolean, error: string, t: (key: string) => string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof value === 'string') {
    if (value.trim().length === 0) {
      error = t('errors.missingEmail');
    } else if (!emailRegex.test(value)) {
      error = t('errors.invalidEmail');
    }
  }
  return error;
}

function validateFullName(value: string | boolean, error: string, t: (key: string) => string) {
  if (typeof value === 'string' && value.trim().length === 0) {
    error = t('errors.invalidFullName');
  }
  return error;
}
