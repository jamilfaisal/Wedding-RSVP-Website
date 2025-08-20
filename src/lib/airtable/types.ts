export type AttendanceStatus = 'Yes' | 'No';

export type MealSelection = 'Meat' | 'Fish' | 'Vegetarian' | 'Vegan';

export type DietaryRestriction = 'Dairy-Free' | 'Nut-Free' | 'Other';

export type SpecialAccommodation =
  | 'Wheelchair access'
  | 'Large print menu'
  | 'Assistive listening device'
  | 'Close seating to exits'
  | 'Service animal accommodation'
  | 'Other (specify)';

export interface RSVPData {
  Name: string;
  Email: string;
  Phone?: string;
  Attendance: AttendanceStatus;
  'Number of Guests'?: number;
  'Guest Names'?: string;
  'Meal Selection': MealSelection;
  'Dietary Restrictions'?: DietaryRestriction[];
  'Special Accommodations'?: SpecialAccommodation[];
  'Song Request'?: string;
  Notes?: string;
  'RSVP Date'?: string;
  'Edit Token (JWT)'?: string;
  'Confirmation Sent'?: boolean;
}

export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: RSVPData;
}

export interface AirtableListResponse {
  records: AirtableRecord[];
  offset?: string;
}

export interface AirtableCreateUpdateResponse {
  records: AirtableRecord[];
}

export interface CreateRSVPInput {
  fullName: string;
  email: string;
  attending: boolean;
  numberOfGuests: string;
  secondGuestName: string;
  mealPreference: MealSelection | '';
  dietaryRestrictions: string;
  songRequests: string;
}

export interface UpdateRSVPInput extends Partial<CreateRSVPInput> {
  id: string;
}

export interface AirtableError {
  error: {
    type: string;
    message: string;
  };
}

export interface AirtableConfig {
  apiKey: string;
  baseId: string;
  tableName: string;
}

export interface ListRSVPsQueryOptions {
  maxRecords?: number;
  pageSize?: number;
  offset?: string;
  view?: string;
  sort?: Array<{
    field: string;
    direction?: 'asc' | 'desc';
  }>;
  filterByFormula?: string;
  fields?: string[];
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface RSVPStatistics {
  total: number;
  attending: number;
  notAttending: number;
  pending: number;
  totalGuests: number;
}
