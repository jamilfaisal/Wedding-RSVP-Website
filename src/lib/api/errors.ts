export interface APIErrorBody {
  success: false;
  error: string;
  code: string;
  details?: unknown;
}

export interface APISuccessBody<T = unknown> {
  success: true;
  code?: string;
  data?: T;
  [extra: string]: unknown;
}

export type APIResponseBody<T = unknown> = APIErrorBody | APISuccessBody<T>;

const isProd = process.env.NODE_ENV === 'production';

export function buildError(
  code: string,
  message: string,
  options: { details?: unknown; includeDetails?: boolean } = {}
): APIErrorBody {
  const body: APIErrorBody = {
    success: false,
    error: message,
    code,
  };
  if (!isProd && (options.includeDetails || options.details)) {
    body.details = options.details;
  }
  return body;
}

export function buildSuccess<T>(
  data?: T,
  options: { code?: string; extra?: Record<string, unknown> } = {}
): APISuccessBody<T> {
  return { success: true, data, code: options.code, ...(options.extra || {}) };
}

export function jsonError(code: string, message: string, status: number, details?: unknown) {
  return { body: buildError(code, message, { details }), init: { status } };
}

export function guessCreateRSVPErrorCode(message: string): string {
  const normalized = message.toLowerCase();
  if (normalized.includes('already exists')) return 'RSVP_ALREADY_EXISTS';
  if (normalized.includes('invalid email')) return 'INVALID_EMAIL_FORMAT';
  if (normalized.includes('required')) return 'MISSING_REQUIRED_FIELDS';
  if (normalized.includes('failed to create')) return 'RSVP_CREATE_FAILED';
  return 'RSVP_CREATE_ERROR';
}

export function guessUpdateRSVPErrorCode(message: string): string {
  const normalized = message.toLowerCase();
  if (normalized.includes('record id is required')) return 'MISSING_RECORD_ID';
  if (normalized.includes('invalid email')) return 'INVALID_EMAIL_FORMAT';
  if (normalized.includes('failed to update')) return 'RSVP_UPDATE_FAILED';
  return 'RSVP_UPDATE_ERROR';
}
