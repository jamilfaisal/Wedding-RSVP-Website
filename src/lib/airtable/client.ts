import { AirtableConfig, AirtableError, APIResponse, AirtableRecord } from './types';
import { validateRequiredEnvVars } from './utils';

export class AirtableClient {
  private config: AirtableConfig;
  private baseUrl: string;
  private AIRTABLE_API_BASE = 'https://api.airtable.com/v0';

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

  private async handleAPIResponse<T>(response: Response): Promise<APIResponse<T>> {
    try {
      const data = await response.json();

      if (!response.ok) {
        const error = data as AirtableError;
        return {
          success: false,
          error: error.error?.message || `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      return {
        success: true,
        data: data as T,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  async get<T>(params?: Record<string, string>): Promise<APIResponse<T>> {
    try {
      const url = new URL(this.baseUrl);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.append(key, value);
          }
        });
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: this.getAuthHeaders(),
      });

      return this.handleAPIResponse<T>(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  async post<T>(body: Record<string, unknown>): Promise<APIResponse<T>> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body),
      });

      return this.handleAPIResponse<T>(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  async patch<T>(recordId: string, body: Record<string, unknown>): Promise<APIResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}/${recordId}`, {
        method: 'PATCH',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body),
      });

      return this.handleAPIResponse<T>(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  async delete(recordId: string): Promise<APIResponse<{ deleted: boolean; id: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/${recordId}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders(),
      });

      return this.handleAPIResponse<{ deleted: boolean; id: string }>(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  async getRecordById(recordId: string): Promise<APIResponse<AirtableRecord>> {
    try {
      const response = await fetch(`${this.baseUrl}/${recordId}`, {
        method: 'GET',
        headers: this.getAuthHeaders(),
      });

      return this.handleAPIResponse(response);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
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

let airtableClientInstance: AirtableClient | null = null;

export function getAirtableClient(): AirtableClient {
  if (!airtableClientInstance) {
    airtableClientInstance = createAirtableClient();
  }
  return airtableClientInstance;
}
