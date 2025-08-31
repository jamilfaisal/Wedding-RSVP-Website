import { CreateRSVPInput } from '@/lib/airtable/types';
import React, { useState, useEffect } from 'react';
import { FormErrors, TouchedFields } from './use-rsvp-form';
import {
  isAttendingChangedToNo,
  clearFormAndErrors,
  handleNumGuestsChange,
  touchAllFields,
  validateFieldWithData,
} from './utils';

export interface EditRSVPData extends CreateRSVPInput {
  id: string;
  createdTime?: string;
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

export function useEditRSVPForm(token: string | null) {
  const [formData, setFormData] = useState<CreateRSVPInput>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [fieldTouched, setFieldTouched] = useState<TouchedFields>(initialTouched);
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState<EditRSVPData | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const loadRSVPData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/rsvp/edit?token=${encodeURIComponent(token)}`);
        const result = await response.json();

        if (result.success && result.data) {
          const data = result.data as EditRSVPData;
          const newFormData: CreateRSVPInput = {
            fullName: data.fullName,
            email: data.email,
            attendingRefreshments: data.attendingRefreshments,
            attendingWedding: data.attendingWedding,
            numberOfGuests: data.numberOfGuests,
            secondGuestName: data.secondGuestName,
            mealPreference: data.mealPreference,
            dietaryRestrictions: data.dietaryRestrictions,
            songRequests: data.songRequests,
          };

          setFormData(newFormData);
          setOriginalData(data);
        } else {
          console.error('Failed to load RSVP data:', result.error);
        }
      } catch (error) {
        console.error('Error loading RSVP data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRSVPData();
  }, [token]);

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
    }

    if (fieldTouched[field as keyof TouchedFields]) {
      const fieldError = validateFieldWithData(newFormData, field, value, t);
      setErrors({ ...errors, [field]: fieldError });
    }
  };

  const handleBlur = (field: string, t: (key: string) => string, value?: string) => {
    setFieldTouched({ ...fieldTouched, [field]: true });
    const fieldValue = value !== undefined ? value : formData[field as keyof CreateRSVPInput];
    const error = validateFieldWithData(formData, field, fieldValue, t);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, t: (key: string) => string) => {
    e.preventDefault();

    if (!token) {
      console.error('No token provided for RSVP update');
      return;
    }

    setSubmitting(true);

    try {
      touchAllFields(setFieldTouched);
      const newErrors = validateAllFields(formData, t);
      setErrors(newErrors);

      const hasErrors = Object.values(newErrors).some((error) => error !== '');
      if (hasErrors) {
        setSubmitting(false);
        return;
      }

      const response = await fetch(`/api/rsvp/edit?token=${encodeURIComponent(token)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(t('rsvp.updateSuccess'));
      } else {
        alert(result.error || 'Failed to update RSVP');
      }
    } catch (error) {
      console.error('Error updating RSVP:', error);
      alert('An error occurred while updating your RSVP');
    } finally {
      setSubmitting(false);
    }
  };

  const validateAllFields = (data: CreateRSVPInput, t: (key: string) => string): FormErrors => {
    return {
      fullName: validateFieldWithData(data, 'fullName', data.fullName, t),
      email: validateFieldWithData(data, 'email', data.email, t),
      mealPreference: validateFieldWithData(data, 'mealPreference', data.mealPreference, t),
      secondGuestName: validateFieldWithData(data, 'secondGuestName', data.secondGuestName, t),
    };
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleBlur,
    handleSubmit,
    loading,
    originalData,
    submitting,
  };
}
