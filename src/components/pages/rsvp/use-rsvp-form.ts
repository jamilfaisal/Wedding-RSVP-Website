import { CreateRSVPInput } from '@/lib/airtable/types';
import React, { useState } from 'react';
import {
  shouldClearDietaryRestrictions,
  clearFormAndErrors,
  handleNumGuestsChange,
  touchAllFields,
  validateFieldWithData,
} from './utils';

export interface FormErrors {
  fullName: string;
  email: string;
  guest1DietaryRestrictions: string;
  guest2DietaryRestrictions: string;
  secondGuestName: string;
}

export interface TouchedFields {
  fullName: boolean;
  email: boolean;
  guest1DietaryRestrictions: boolean;
  guest2DietaryRestrictions: boolean;
  secondGuestName: boolean;
}

const initialFormData: CreateRSVPInput = {
  fullName: '',
  email: '',
  attendingRefreshments: false,
  attendingWedding: false,
  numberOfGuests: '1',
  secondGuestName: '',
  guest1DietaryRestrictions: '',
  guest2DietaryRestrictions: '',
};

const initialErrors: FormErrors = {
  fullName: '',
  email: '',
  guest1DietaryRestrictions: '',
  guest2DietaryRestrictions: '',
  secondGuestName: '',
};

const initialTouched: TouchedFields = {
  fullName: false,
  email: false,
  guest1DietaryRestrictions: false,
  guest2DietaryRestrictions: false,
  secondGuestName: false,
};

export function useRSVPForm() {
  const [formData, setFormData] = useState<CreateRSVPInput>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [fieldTouched, setFieldTouched] = useState<TouchedFields>(initialTouched);
  const [submitting, setSubmitting] = useState(false);

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

    if (shouldClearDietaryRestrictions(field, value, newFormData)) {
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
    const guest1DietaryRestrictionsError = validateField(
      'guest1DietaryRestrictions',
      formData.guest1DietaryRestrictions,
      t
    );
    const guest2DietaryRestrictionsError = validateField(
      'guest2DietaryRestrictions',
      formData.guest2DietaryRestrictions,
      t
    );
    const secondGuestNameError = validateField('secondGuestName', formData.secondGuestName, t);

    return (
      !fullNameError &&
      !emailError &&
      !guest1DietaryRestrictionsError &&
      !guest2DietaryRestrictionsError &&
      !secondGuestNameError
    );
  };

  const handleSubmit = (e: React.FormEvent, t: (key: string) => string, language: string) => {
    e.preventDefault();
    if (submitting) return;

    touchAllFields(setFieldTouched);
    const errors = {
      fullName: validateField('fullName', formData.fullName, t),
      email: validateField('email', formData.email, t),
      guest1DietaryRestrictions: validateField(
        'guest1DietaryRestrictions',
        formData.guest1DietaryRestrictions,
        t
      ),
      guest2DietaryRestrictions: validateField(
        'guest2DietaryRestrictions',
        formData.guest2DietaryRestrictions,
        t
      ),
      secondGuestName: validateField('secondGuestName', formData.secondGuestName, t),
    };
    setErrors(errors);

    const isValid =
      !errors.fullName &&
      !errors.email &&
      !errors.guest1DietaryRestrictions &&
      !errors.guest2DietaryRestrictions &&
      !errors.secondGuestName;

    if (isValid) {
      submitRSVP(formData, t, setSubmitting, language);
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
    submitting,
  };
}

function submitRSVP(
  formData: CreateRSVPInput,
  t: (key: string) => string,
  setSubmitting: (submitting: boolean) => void,
  language: string
) {
  setSubmitting(true);

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

      const params = new URLSearchParams({
        attendingRefreshments: formData.attendingRefreshments.toString(),
        attendingWedding: formData.attendingWedding.toString(),
      });

      window.location.href = `/${language}/thank-you?${params.toString()}`;
    })
    .catch((error) => {
      console.error('RSVP submission failed:', error);
      alert(t('errors.submitError'));
    })
    .finally(() => {
      setSubmitting(false);
    });
}
