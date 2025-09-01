import { AirtableConfig, AirtableError, APIResponse, AirtableRecord } from './types';
import { logger } from '@/lib/api/logger';

export class AirtableClient {
  private config: AirtableConfig;
  private baseUrl: string;
  private AIRTABLE_API_BASE = 'https://api.airtable.com/v0';
  private maxRetries = 3;
  private initialBackoffMs = 500;

  constructor(config: AirtableConfig) {
    this.config = config;
    this.baseUrl = `${this.AIRTABLE_API_BASE}/${config.baseId}/${config.tableName}`;
  }

  private getAuthHeaders(): HeadersInit {
    return {
      Authorization: `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  private async handleAPIResponse<T>(
    response: Response,
    attempts: number
  ): Promise<APIResponse<T>> {
    let raw: unknown = null;
    try {
      raw = await response.json();
    } catch {
      raw = null;
    }

    if (!response.ok) {
      const airtableError = raw as AirtableError | null;
      const message =
        airtableError?.error?.message || `HTTP ${response.status}: ${response.statusText}`;
      const type = airtableError?.error?.type;

      return {
        success: false,
        error: message,
        statusCode: response.status,
        airtableErrorType: type,
        attempts,
      };
    }

    return {
      success: true,
      data: raw as T,
      statusCode: response.status,
      attempts,
    };
  }

  private isRetriable(status: number | undefined) {
    if (!status) return true;
    if (status === 429) return true;
    if (status >= 500 && status < 600) return true;
    return false;
  }

  private async delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  private async fetchWithRetry<T>(
    input: RequestInfo | URL,
    init: RequestInit,
    context: Record<string, unknown>
  ): Promise<APIResponse<T>> {
    let attempt = 0;
    let lastError: APIResponse<T> | null = null;
    while (attempt <= this.maxRetries) {
      const attemptInfo = { attempt, maxRetries: this.maxRetries, ...context };
      try {
        const response = await fetch(input, init);
        const apiResp = await this.handleAPIResponse<T>(response, attempt + 1);
        if (!apiResp.success) {
          const retriable = this.isRetriable(apiResp.statusCode);
          logger[retriable && attempt < this.maxRetries ? 'warn' : 'error'](
            'Airtable request failed',
            {
              ...attemptInfo,
              statusCode: apiResp.statusCode,
              airtableErrorType: apiResp.airtableErrorType,
              error: apiResp.error,
              retriable,
            }
          );
          if (retriable && attempt < this.maxRetries) {
            const backoff = this.initialBackoffMs * 2 ** attempt;
            logger.debug('Backing off before retry', { backoffMs: backoff, ...attemptInfo });
            await this.delay(backoff);
            attempt++;
            lastError = apiResp;
            continue;
          }
        } else {
          if (attempt > 0) {
            logger.info('Airtable request succeeded after retries', attemptInfo);
          } else {
            logger.debug('Airtable request succeeded', attemptInfo);
          }
        }
        return apiResp;
      } catch (err) {
        const retriable = this.isRetriable(undefined);
        logger[retriable && attempt < this.maxRetries ? 'warn' : 'error']('Airtable fetch threw', {
          ...attemptInfo,
          error: err instanceof Error ? err.message : String(err),
          retriable,
        });
        if (retriable && attempt < this.maxRetries) {
          const backoff = this.initialBackoffMs * 2 ** attempt;
          await this.delay(backoff);
          attempt++;
          continue;
        }
        return {
          success: false,
          error: err instanceof Error ? err.message : 'Unknown network error',
          attempts: attempt + 1,
        };
      }
    }
    return (
      lastError || {
        success: false,
        error: 'Unknown Airtable error after retries',
        attempts: this.maxRetries + 1,
      }
    );
  }

  async get<T>(params?: Record<string, string>): Promise<APIResponse<T>> {
    const url = new URL(this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value);
        }
      });
    }
    return this.fetchWithRetry<T>(
      url.toString(),
      { method: 'GET', headers: this.getAuthHeaders() },
      { method: 'GET', params }
    );
  }

  async post<T>(body: Record<string, unknown>): Promise<APIResponse<T>> {
    return this.fetchWithRetry<T>(
      this.baseUrl,
      {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body),
      },
      { method: 'POST' }
    );
  }

  async patch<T>(recordId: string, body: Record<string, unknown>): Promise<APIResponse<T>> {
    return this.fetchWithRetry<T>(
      `${this.baseUrl}/${recordId}`,
      {
        method: 'PATCH',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body),
      },
      { method: 'PATCH', recordId }
    );
  }

  async delete(recordId: string): Promise<APIResponse<{ deleted: boolean; id: string }>> {
    return this.fetchWithRetry<{ deleted: boolean; id: string }>(
      `${this.baseUrl}/${recordId}`,
      {
        method: 'DELETE',
        headers: this.getAuthHeaders(),
      },
      { method: 'DELETE', recordId }
    );
  }

  async getRecordById(recordId: string): Promise<APIResponse<AirtableRecord>> {
    return this.fetchWithRetry<AirtableRecord>(
      `${this.baseUrl}/${recordId}`,
      {
        method: 'GET',
        headers: this.getAuthHeaders(),
      },
      { method: 'GET', recordId }
    );
  }
}

export function createAirtableClient(): AirtableClient {
  const config: AirtableConfig = {
    apiKey: process.env.AIRTABLE_API_KEY!,
    baseId: process.env.AIRTABLE_BASE_ID!,
    tableName: process.env.AIRTABLE_TABLE_NAME || 'RSVPs',
  };
  validateRequiredEnvVars(config);
  return new AirtableClient(config);
}

function validateRequiredEnvVars(config: AirtableConfig) {
  if (!config.apiKey || !config.baseId) {
    throw new Error(
      'Missing required environment variables: AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set'
    );
  }
}

let airtableClientInstance: AirtableClient | null = null;

export function getAirtableClient(): AirtableClient {
  if (!airtableClientInstance) {
    airtableClientInstance = createAirtableClient();
  }
  return airtableClientInstance;
}
