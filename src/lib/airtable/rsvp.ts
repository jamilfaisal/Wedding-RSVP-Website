import {
  RSVPData,
  CreateRSVPInput,
  UpdateRSVPInput,
  AirtableRecord,
  AirtableListResponse,
  AirtableCreateUpdateResponse,
  ListRSVPsQueryOptions,
  APIResponse,
  RSVPStatistics,
  DietaryRestriction,
  MealSelection,
} from './types';
import { getAirtableClient } from './client';
import {
  buildRSVPUpdatePayload,
  calculateRSVPStats,
  constructListQueryParams,
  generateRSVPEditToken,
  isRSVPRequiredFieldsMissing,
  isValidEmailFormat,
  validateEmailFormatIfProvided,
} from './utils';

export async function getAllRSVPs(
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

export async function getSingleRSVPById(recordId: string): Promise<APIResponse<AirtableRecord>> {
  const client = getAirtableClient();
  return client.getRecordById(recordId);
}

export async function getSingleRSVPByEmail(
  email: string
): Promise<APIResponse<AirtableRecord | null>> {
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

export async function getRSVPByEditToken(
  token: string
): Promise<APIResponse<AirtableRecord | null>> {
  if (!token) {
    return {
      success: false,
      error: 'Token is required',
    };
  }

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
    Attendance: input.attending ? 'Yes' : 'No',
    'Number of Guests': parseInt(input.numberOfGuests) || 1,
    'Guest Names': input.secondGuestName || undefined,
    'Meal Selection': input.mealPreference as MealSelection,
    'Dietary Restrictions': input.dietaryRestrictions
      ? [input.dietaryRestrictions as DietaryRestriction]
      : undefined,
    'Song Request': input.songRequests || undefined,
    'Edit Token (JWT)': editToken,
    'Confirmation Sent': false,
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

async function isRSVPExisting(email: string): Promise<boolean> {
  const existingRSVP = await getSingleRSVPByEmail(email);
  return existingRSVP.success && existingRSVP.data !== null;
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

export async function deleteExistingRSVP(recordId: string): Promise<APIResponse<boolean>> {
  if (!recordId) {
    return {
      success: false,
      error: 'Record ID is required',
    };
  }

  const client = getAirtableClient();
  const response = await client.delete(recordId);

  if (response.success) {
    return {
      success: true,
      data: true,
    };
  }

  return {
    success: false,
    error: response.error || 'Failed to delete RSVP',
  };
}

export async function markConfirmationEmailAsSent(
  recordId: string
): Promise<APIResponse<AirtableRecord>> {
  return updateExistingRSVP({
    id: recordId,
  });
}

export async function getRSVPStatistics(): Promise<APIResponse<RSVPStatistics>> {
  const response = await getAllRSVPs();

  if (!response.success || !response.data) {
    return {
      success: false,
      error: response.error || 'Failed to fetch RSVPs for stats',
    };
  }

  const records = response.data;
  const stats = calculateRSVPStats(records);

  return {
    success: true,
    data: stats,
  };
}
