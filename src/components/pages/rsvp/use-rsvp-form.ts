import { CreateRSVPInput, MealSelection } from '@/lib/airtable/types';
import React, { useState } from 'react';

export interface FormErrors {
  fullName: string;
  email: string;
  mealPreference: string;
  secondGuestName: string;
}

export interface TouchedFields {
  fullName: boolean;
  email: boolean;
  mealPreference: boolean;
  secondGuestName: boolean;
}

const initialFormData: CreateRSVPInput = {
  fullName: '',
  email: '',
  attending: true,
  numberOfGuests: '1',
  secondGuestName: '',
  mealPreference: '',
  dietaryRestrictions: '',
  songRequests: '',
};

const initialErrors: FormErrors = {
  fullName: '',
  email: '',
  mealPreference: '',
  secondGuestName: '',
};

const initialTouched: TouchedFields = {
  fullName: false,
  email: false,
  mealPreference: false,
  secondGuestName: false,
};

export function useRSVPForm() {
  const [formData, setFormData] = useState<CreateRSVPInput>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [fieldTouched, setFieldTouched] = useState<TouchedFields>(initialTouched);

  const validateFieldWithData = (
    formData: CreateRSVPInput,
    field: string,
    value: string | boolean
  ): string => {
    let error = '';

    switch (field) {
      case 'fullName':
        error = validateFullName(value, error);
        break;
      case 'email':
        error = validateEmail(value, error);
        break;
      case 'mealPreference':
        error = validateMealPreference(formData, value, error);
        break;
      case 'secondGuestName':
        error = validateSecondGuestName(formData, value, error);
        break;
    }

    return error;
  };

  const validateField = (field: string, value: string | boolean): string => {
    return validateFieldWithData(formData, field, value);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    let newFormData = { ...formData, [field]: value };

    if (isAttendingChangedToNo(field, value)) {
      newFormData = clearFormAndErrors(newFormData, setErrors, errors);
    }

    setFormData(newFormData);

    if (field === 'numberOfGuests') {
      handleNumGuestsChange(
        value,
        errors,
        setErrors,
        setFormData,
        fieldTouched,
        validateFieldWithData,
        newFormData
      );
      return;
    }
    updateErrorsForTouchedField(
      fieldTouched,
      field,
      errors,
      validateFieldWithData,
      newFormData,
      value,
      setErrors
    );
  };

  const handleBlur = (field: string, currentValue?: string | boolean) => {
    setFieldTouched({ ...fieldTouched, [field]: true });
    // Use the provided currentValue if available, otherwise fall back to formData
    const value =
      currentValue !== undefined ? currentValue : formData[field as keyof CreateRSVPInput];
    const error = validateFieldWithData(formData, field, value);
    setErrors({ ...errors, [field]: error });
  };

  const isFormValid = (): boolean => {
    const fullNameError = validateField('fullName', formData.fullName);
    const emailError = validateField('email', formData.email);
    const mealPreferenceError = validateField('mealPreference', formData.mealPreference);
    const secondGuestNameError = validateField('secondGuestName', formData.secondGuestName);

    return !fullNameError && !emailError && !mealPreferenceError && !secondGuestNameError;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    touchAllFields(setFieldTouched);
    const errors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      mealPreference: validateField('mealPreference', formData.mealPreference),
      secondGuestName: validateField('secondGuestName', formData.secondGuestName),
    };
    setErrors(errors);

    const isValid =
      !errors.fullName && !errors.email && !errors.mealPreference && !errors.secondGuestName;

    if (isValid) {
      submitRSVP(formData);
    }
  };

  return {
    formData,
    errors,
    fieldTouched,
    handleInputChange,
    handleBlur,
    handleSubmit,
    isFormValid,
  };
}

function updateErrorsForTouchedField(
  fieldTouched: TouchedFields,
  field: string,
  errors: FormErrors,
  validateFieldWithData: (
    formData: CreateRSVPInput,
    field: string,
    value: string | boolean
  ) => string,
  newFormData: CreateRSVPInput,
  value: string | boolean,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) {
  if (fieldTouched[field as keyof TouchedFields] || errors[field as keyof FormErrors]) {
    const error = validateFieldWithData(newFormData, field, value);
    setErrors({ ...errors, [field]: error });
  }
}

function clearFormAndErrors(
  newFormData: {
    fullName: string;
    email: string;
    attending: boolean;
    numberOfGuests: string;
    secondGuestName: string;
    mealPreference: MealSelection | '';
    dietaryRestrictions: string;
    songRequests: string;
  },
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
  errors: FormErrors
) {
  newFormData = {
    ...newFormData,
    numberOfGuests: '1',
    secondGuestName: '',
    mealPreference: '',
    dietaryRestrictions: '',
  };
  setErrors({
    ...errors,
    mealPreference: '',
    secondGuestName: '',
  });
  return newFormData;
}

function isAttendingChangedToNo(field: string, value: string | boolean) {
  return field === 'attending' && value === false;
}

function submitRSVP(formData: CreateRSVPInput) {
  fetch('/api/rsvp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log('RSVP submitted successfully:', result);
      alert('RSVP submitted successfully!');
    })
    .catch((error) => {
      console.error('Error submitting RSVP:', error);
      alert('Error submitting RSVP. Please contact support for further assistance.');
    });
}

function handleNumGuestsChange(
  value: string | boolean,
  errors: FormErrors,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
  setFormData: React.Dispatch<React.SetStateAction<CreateRSVPInput>>,
  fieldTouched: TouchedFields,
  validateFieldWithData: (
    formData: CreateRSVPInput,
    field: string,
    value: string | boolean
  ) => string,
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
    const secondGuestNameError = validateFieldWithData(
      newFormData,
      'secondGuestName',
      newFormData.secondGuestName
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

function touchAllFields(setFieldTouched: React.Dispatch<React.SetStateAction<TouchedFields>>) {
  setFieldTouched({
    fullName: true,
    email: true,
    mealPreference: true,
    secondGuestName: true,
  });
}

function validateSecondGuestName(
  formData: CreateRSVPInput,
  value: string | boolean,
  error: string
) {
  if (
    formData.attending &&
    formData.numberOfGuests === '2' &&
    typeof value === 'string' &&
    value.trim().length === 0
  ) {
    error = 'Second guest name is required';
  }
  return error;
}

function validateMealPreference(formData: CreateRSVPInput, value: string | boolean, error: string) {
  if (formData.attending && typeof value === 'string' && value.trim().length === 0) {
    error = 'Please select a meal preference';
  }
  return error;
}

function validateEmail(value: string | boolean, error: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof value === 'string') {
    if (value.trim().length === 0) {
      error = 'Email address is required';
    } else if (!emailRegex.test(value)) {
      error = 'Please enter a valid email address';
    }
  }
  return error;
}

function validateFullName(value: string | boolean, error: string) {
  if (typeof value === 'string' && value.trim().length === 0) {
    error = 'Full name is required';
  }
  return error;
}
