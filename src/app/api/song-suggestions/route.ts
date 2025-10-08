import { NextRequest, NextResponse } from 'next/server';
import { AirtableClient } from '@/lib/airtable/client';
import { logger } from '@/lib/api/logger';
import { AirtableCreateUpdateResponse } from '@/lib/airtable/types';

const client = new AirtableClient({
  apiKey: process.env.AIRTABLE_API_KEY!,
  baseId: process.env.AIRTABLE_BASE_ID!,
  tableName: 'Song Suggestions', // You'll need to create this table in Airtable
});

interface SongSuggestionData {
  'Song Name': string;
  'Artist Name': string;
  'Guest Name'?: string;
  'Submitted Date'?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { songName, artistName, guestName } = body;

    const errors = validateRequest(songName, artistName, guestName);
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(', ') }, { status: 400 });
    }
    const response = await submitSongSuggestion(songName, artistName, guestName);

    if (!response.success) {
      logger.error('Failed to create song suggestion', {
        error: response.error,
        statusCode: response.statusCode,
      });
      return NextResponse.json(
        { error: 'Failed to save song suggestion. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Song suggestion saved successfully!', data: response.data },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error in song-suggestions API:', { error: errorMessage });
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

async function submitSongSuggestion(songName: string, artistName: string, guestName?: string) {
  const songData: SongSuggestionData = {
    'Song Name': songName.trim(),
    'Artist Name': artistName.trim(),
    'Guest Name': guestName?.trim() || 'Anonymous',
    'Submitted Date': new Date().toISOString(),
  };

  const response = await client.post<AirtableCreateUpdateResponse>({
    records: [{ fields: songData }],
  });
  return response;
}

function validateRequest(songName: string, artistName: string, guestName?: string) {
  const errors: string[] = [];

  if (!songName || !artistName) {
    errors.push('Song name and artist name are required');
  }

  if (songName.length > 200 || artistName.length > 200) {
    errors.push('Song name and artist name must be less than 200 characters');
  }

  if (guestName && guestName.length > 200) {
    errors.push('Guest name must be less than 200 characters');
  }

  return errors;
}
