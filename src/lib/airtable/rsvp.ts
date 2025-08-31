import {
  RSVPData,
  CreateRSVPInput,
  UpdateRSVPInput,
  AirtableRecord,
  AirtableListResponse,
  AirtableCreateUpdateResponse,
  ListRSVPsQueryOptions,
  APIResponse,
  DietaryOption,
} from './types';
import { getAirtableClient } from './client';
import { isValidEmailFormat } from './utils';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';

export async function getRSVPByEditToken(
  token: string
): Promise<APIResponse<AirtableRecord | null>> {
  const response = await getAllRSVPs({
    filterByFormula: `{Edit Token (JWT)} = "${token}"`,
    maxRecords: 1,
  });

  if (!response.success) {
    return {
      success: false,
      error: response.error || 'Failed to fetch RSVP by token',
    };
  }

  const records = response.data || [];
  return {
    success: true,
    data: records.length > 0 ? records[0] : null,
  };
}

export async function createRSVP(input: CreateRSVPInput): Promise<APIResponse<AirtableRecord>> {
  if (isRSVPRequiredFieldsMissing(input)) {
    return {
      success: false,
      error: 'Full name, email, and attendance are required fields',
    };
  }

  if (!isValidEmailFormat(input.email)) {
    return {
      success: false,
      error: 'Invalid email address format',
    };
  }

  if (await isRSVPExisting(input.email)) {
    return {
      success: false,
      error: 'An RSVP already exists for this email address',
    };
  }

  const editToken = generateRSVPEditToken(input.email);

  const rsvpData: RSVPData = {
    Name: input.fullName,
    Email: input.email,
    'Attending Refreshments Dec 19th': input.attendingRefreshments ? 'Yes' : 'No',
    'Attending Wedding Dec 20th': input.attendingWedding ? 'Yes' : 'No',
    'Number of Guests': parseInt(input.numberOfGuests) || 1,
    'Second Guest Name': input.secondGuestName || undefined,
    'Guest 1 Dietary Restrictions':
      (input.attendingRefreshments || input.attendingWedding) && input.guest1DietaryRestrictions
        ? (input.guest1DietaryRestrictions as DietaryOption)
        : undefined,
    'Guest 2 Dietary Restrictions':
      (input.attendingRefreshments || input.attendingWedding) &&
      input.numberOfGuests === '2' &&
      input.guest2DietaryRestrictions
        ? (input.guest2DietaryRestrictions as DietaryOption)
        : undefined,
    'Edit Token (JWT)': editToken,
  };

  const client = getAirtableClient();
  const response = await client.post<AirtableCreateUpdateResponse>({
    records: [{ fields: rsvpData }],
  });

  if (response.success && response.data && response.data.records.length > 0) {
    return {
      success: true,
      data: response.data.records[0],
    };
  }

  return {
    success: false,
    error: response.error || 'Failed to create RSVP',
  };
}

export async function updateExistingRSVP(
  input: UpdateRSVPInput
): Promise<APIResponse<AirtableRecord>> {
  if (!input.id) {
    return {
      success: false,
      error: 'Record ID is required for updates',
    };
  }

  if (validateEmailFormatIfProvided(input)) {
    return {
      success: false,
      error: 'Invalid email address format',
    };
  }

  const updateData: Partial<RSVPData> = buildRSVPUpdatePayload(input);
  const client = getAirtableClient();
  const response = await client.patch<AirtableRecord>(input.id, {
    fields: updateData,
  });

  return response;
}

async function getAllRSVPs(
  options: ListRSVPsQueryOptions = {}
): Promise<APIResponse<AirtableRecord[]>> {
  const client = getAirtableClient();
  const params: Record<string, string> = constructListQueryParams(options);
  const response = await client.get<AirtableListResponse>(params);

  if (response.success && response.data) {
    return {
      success: true,
      data: response.data.records,
    };
  }

  return {
    success: false,
    error: response.error || 'Failed to fetch RSVPs',
  };
}

async function getSingleRSVPByEmail(email: string): Promise<APIResponse<AirtableRecord | null>> {
  if (!isValidEmailFormat(email)) {
    return {
      success: false,
      error: 'Invalid email address format',
    };
  }

  const response = await getAllRSVPs({
    filterByFormula: `{Email} = "${email}"`,
    maxRecords: 1,
  });

  if (!response.success) {
    return {
      success: false,
      error: response.error || 'Failed to fetch RSVP by email',
    };
  }

  const records = response.data || [];
  return {
    success: true,
    data: records.length > 0 ? records[0] : null,
  };
}

async function isRSVPExisting(email: string): Promise<boolean> {
  const existingRSVP = await getSingleRSVPByEmail(email);
  return existingRSVP.success && existingRSVP.data !== null;
}

function generateRSVPEditToken(email: string): string {
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

function constructListQueryParams(options: ListRSVPsQueryOptions) {
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

function isRSVPRequiredFieldsMissing(input: CreateRSVPInput): boolean {
  return (
    !input.fullName ||
    !input.email ||
    (input.attendingRefreshments === undefined && input.attendingWedding === undefined)
  );
}

function buildRSVPUpdatePayload(input: UpdateRSVPInput) {
  const updateData: Partial<RSVPData> = {};

  if (input.fullName !== undefined) updateData['Name'] = input.fullName;
  if (input.email !== undefined) updateData['Email'] = input.email;
  if (input.attendingRefreshments !== undefined)
    updateData['Attending Refreshments Dec 19th'] = input.attendingRefreshments ? 'Yes' : 'No';
  if (input.attendingWedding !== undefined)
    updateData['Attending Wedding Dec 20th'] = input.attendingWedding ? 'Yes' : 'No';
  if (input.numberOfGuests !== undefined)
    updateData['Number of Guests'] = parseInt(input.numberOfGuests);
  if (input.secondGuestName !== undefined) updateData['Second Guest Name'] = input.secondGuestName;
  if (input.guest1DietaryRestrictions !== undefined) {
    updateData['Guest 1 Dietary Restrictions'] = input.guest1DietaryRestrictions
      ? (input.guest1DietaryRestrictions as DietaryOption)
      : undefined;
  }
  if (input.guest2DietaryRestrictions !== undefined) {
    updateData['Guest 2 Dietary Restrictions'] = input.guest2DietaryRestrictions
      ? (input.guest2DietaryRestrictions as DietaryOption)
      : undefined;
  }
  return updateData;
}

function validateEmailFormatIfProvided(input: UpdateRSVPInput) {
  return input.email && !isValidEmailFormat(input.email);
}
