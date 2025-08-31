import { CreateRSVPInput } from '@/lib/airtable/types';
import React, { useState } from 'react';
import {
  isAttendingChangedToNo,
  clearFormAndErrors,
  handleNumGuestsChange,
  touchAllFields,
  validateFieldWithData,
} from './utils';

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
  attendingRefreshments: false,
  attendingWedding: false,
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

  const validateField = (
    field: string,
    value: string | boolean,
    t: (key: string) => string
  ): string => {
    return validateFieldWithData(formData, field, value, t);
  };

  const handleInputChange = (
    field: string,
    value: string | boolean,
    t: (key: string) => string
  ) => {
    let newFormData = { ...formData, [field]: value };

    if (isAttendingChangedToNo(field, value)) {
      newFormData = clearFormAndErrors(newFormData, setErrors, errors);
    }

    setFormData(newFormData);

    if (field === 'numberOfGuests') {
      handleNumGuestsChange(value, errors, setErrors, setFormData, fieldTouched, t, newFormData);
      return;
    }
    if (fieldTouched[field as keyof TouchedFields] || errors[field as keyof FormErrors]) {
      const error = validateFieldWithData(newFormData, field, value, t);
      setErrors({ ...errors, [field]: error });
    }
  };

  const handleBlur = (
    field: string,
    t: (key: string) => string,
    currentValue?: string | boolean
  ) => {
    setFieldTouched({ ...fieldTouched, [field]: true });
    const value =
      currentValue !== undefined ? currentValue : formData[field as keyof CreateRSVPInput];
    const error = validateFieldWithData(formData, field, value, t);
    setErrors({ ...errors, [field]: error });
  };

  const isFormValid = (t: (key: string) => string): boolean => {
    const fullNameError = validateField('fullName', formData.fullName, t);
    const emailError = validateField('email', formData.email, t);
    const mealPreferenceError = validateField('mealPreference', formData.mealPreference, t);
    const secondGuestNameError = validateField('secondGuestName', formData.secondGuestName, t);

    return !fullNameError && !emailError && !mealPreferenceError && !secondGuestNameError;
  };

  const handleSubmit = (e: React.FormEvent, t: (key: string) => string) => {
    e.preventDefault();
    touchAllFields(setFieldTouched);
    const errors = {
      fullName: validateField('fullName', formData.fullName, t),
      email: validateField('email', formData.email, t),
      mealPreference: validateField('mealPreference', formData.mealPreference, t),
      secondGuestName: validateField('secondGuestName', formData.secondGuestName, t),
    };
    setErrors(errors);

    const isValid =
      !errors.fullName && !errors.email && !errors.mealPreference && !errors.secondGuestName;

    if (isValid) {
      submitRSVP(formData, t);
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

function submitRSVP(formData: CreateRSVPInput, t: (key: string) => string) {
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
        const errorMessage = errorData.error || `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .then((result) => {
      console.log('RSVP submitted successfully:', result);
      alert(t('success.rsvpSubmitted'));
    })
    .catch((error) => {
      console.error('RSVP submission failed:', error);
      alert(t('errors.submitError'));
    });
}
