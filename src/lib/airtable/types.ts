export type AttendanceStatus = 'Yes' | 'No';

export type DietaryOption =
  | 'None'
  | 'Vegan'
  | 'Vegetarian'
  | 'Lactose Intolerant'
  | 'Gluten Allergy';

export interface RSVPData {
  Name: string;
  Email: string;
  'Attending Refreshments Dec 19th': AttendanceStatus;
  'Attending Wedding Dec 20th': AttendanceStatus;
  'Number of Guests'?: number;
  'Second Guest Name'?: string;
  'Guest 1 Dietary Restrictions'?: DietaryOption;
  'Guest 2 Dietary Restrictions'?: DietaryOption;
  'RSVP Date'?: string;
  'Edit Token (JWT)'?: string;
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
  attendingRefreshments: boolean;
  attendingWedding: boolean;
  numberOfGuests: string;
  secondGuestName: string;
  guest1DietaryRestrictions: DietaryOption | '';
  guest2DietaryRestrictions: DietaryOption | '';
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
  statusCode?: number;
  airtableErrorType?: string;
  attempts?: number;
}

export interface RSVPStatistics {
  total: number;
  attending: number;
  notAttending: number;
  pending: number;
  totalGuests: number;
}
