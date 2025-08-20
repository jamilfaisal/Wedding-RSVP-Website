import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import {
  AirtableConfig,
  AirtableRecord,
  CreateRSVPInput,
  ListRSVPsQueryOptions,
  RSVPData,
  UpdateRSVPInput,
  MealSelection,
} from './types';

export function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateRSVPEditToken(email: string): string {
  const secret = process.env.JWT_SECRET || randomBytes(32).toString('hex');
  const payload = {
    email,
    purpose: 'rsvp_edit',
    timestamp: Date.now(),
  };

  return jwt.sign(payload, secret, {
    expiresIn: '30d',
    issuer: 'wedding-rsvp',
  });
}

export function verifyEditToken(token: string): { email: string; purpose: string } | null {
  try {
    const secret = process.env.JWT_SECRET || randomBytes(32).toString('hex');
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload;

    if (decoded.purpose === 'rsvp_edit' && decoded.email) {
      return {
        email: decoded.email as string,
        purpose: decoded.purpose,
      };
    }

    return null;
  } catch {
    return null;
  }
}

export function generateSecureId(length: number = 32): string {
  return randomBytes(length).toString('hex');
}

export function sanitizeFormInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX for US numbers
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } else if (digits.length === 11 && digits.startsWith('1')) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }

  // Return original if not a standard US format
  return phone;
}

export function validateRSVPInput(input: Record<string, unknown>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!input.name || typeof input.name !== 'string' || input.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!input.email || typeof input.email !== 'string' || !isValidEmailFormat(input.email)) {
    errors.push('Valid email address is required');
  }

  if (!input.attendance || !['Yes', 'No'].includes(input.attendance as string)) {
    errors.push('Attendance selection is required');
  }

  if (input.numberOfGuests !== undefined) {
    const numGuests = Number(input.numberOfGuests);
    if (isNaN(numGuests) || numGuests < 0 || numGuests > 20) {
      errors.push('Number of guests must be between 0 and 20');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function csvEscape(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

export function convertRSVPsToCSV(records: AirtableRecord[]): string {
  if (records.length === 0) {
    return '';
  }

  const headers = [
    'ID',
    'Created Date',
    'Name',
    'Email',
    'Phone',
    'Attendance',
    'Number of Guests',
    'Guest Names',
    'Meal Selection',
    'Dietary Restrictions',
    'Special Accommodations',
    'Song Request',
    'Notes',
    'Confirmation Sent',
  ];

  const csvRows = [headers.join(',')];

  records.forEach((record) => {
    const row = [
      csvEscape(record.id),
      csvEscape(record.createdTime),
      csvEscape(record.fields['Name']),
      csvEscape(record.fields['Email']),
      csvEscape(record.fields['Attendance']),
      csvEscape(record.fields['Number of Guests']),
      csvEscape(record.fields['Second Guest Name']),
      csvEscape(record.fields['Meal Selection']),
      csvEscape(record.fields['Dietary Restrictions']),
      csvEscape(record.fields['Song Request']),
      csvEscape(record.fields['Confirmation Sent'] ? 'Yes' : 'No'),
    ];

    csvRows.push(row.join(','));
  });

  return csvRows.join('\n');
}

export function constructListQueryParams(options: ListRSVPsQueryOptions) {
  const params: Record<string, string> = {};

  if (options.maxRecords) params.maxRecords = options.maxRecords.toString();
  if (options.pageSize) params.pageSize = options.pageSize.toString();
  if (options.offset) params.offset = options.offset;
  if (options.view) params.view = options.view;
  if (options.filterByFormula) params.filterByFormula = options.filterByFormula;
  if (options.fields) params.fields = options.fields.join(',');

  if (options.sort) {
    options.sort.forEach((sort, index) => {
      params[`sort[${index}][field]`] = sort.field;
      if (sort.direction) {
        params[`sort[${index}][direction]`] = sort.direction;
      }
    });
  }
  return params;
}

export function isRSVPRequiredFieldsMissing(input: CreateRSVPInput): boolean {
  return !input.fullName || !input.email || input.attending === undefined;
}

export function buildRSVPUpdatePayload(input: UpdateRSVPInput) {
  const updateData: Partial<RSVPData> = {};

  if (input.fullName !== undefined) updateData['Name'] = input.fullName;
  if (input.email !== undefined) updateData['Email'] = input.email;
  if (input.attending !== undefined) updateData['Attendance'] = input.attending ? 'Yes' : 'No';
  if (input.numberOfGuests !== undefined)
    updateData['Number of Guests'] = parseInt(input.numberOfGuests);
  if (input.secondGuestName !== undefined) updateData['Second Guest Name'] = input.secondGuestName;
  if (input.mealPreference !== undefined) {
    const mealMap: Record<string, string> = {
      Meat: 'Meat',
      Fish: 'Fish',
      Vegetarian: 'Vegetarian',
      Vegan: 'Vegan',
    };
    updateData['Meal Selection'] = mealMap[input.mealPreference] as MealSelection;
  }
  if (input.dietaryRestrictions !== undefined)
    updateData['Dietary Restrictions'] = input.dietaryRestrictions;
  if (input.songRequests !== undefined) updateData['Song Request'] = input.songRequests;
  return updateData;
}

export function validateEmailFormatIfProvided(input: UpdateRSVPInput) {
  return input.email && !isValidEmailFormat(input.email);
}

export function calculateRSVPStats(records: AirtableRecord[]) {
  const stats = {
    total: records.length,
    attending: 0,
    notAttending: 0,
    pending: 0,
    totalGuests: 0,
  };

  records.forEach((record) => {
    const attendance = record.fields['Attendance'];
    const numberOfGuests = record.fields['Number of Guests'] || 1;

    if (attendance === 'Yes') {
      stats.attending++;
      stats.totalGuests += numberOfGuests;
    } else if (attendance === 'No') {
      stats.notAttending++;
    } else {
      stats.pending++;
    }
  });
  return stats;
}

export function validateRequiredEnvVars(config: AirtableConfig) {
  if (!config.apiKey || !config.baseId) {
    throw new Error(
      'Missing required environment variables: AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set'
    );
  }
}
