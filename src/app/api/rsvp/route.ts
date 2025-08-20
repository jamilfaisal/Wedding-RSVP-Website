import { createRSVP, getAllRSVPs } from '@/lib/airtable';
import { CreateRSVPInput } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());

    const result = await getAllRSVPs(params);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return Response.json(
      {
        error: 'Failed to fetch RSVPs',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: CreateRSVPInput = await request.json();
    const result = await createRSVP(data);

    if (result.success) {
      return Response.json({ success: true, data: result.data }, { status: 201 });
    } else {
      return Response.json(
        {
          success: false,
          error: result.error || 'Failed to create RSVP',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error creating RSVP:', error);
    return Response.json(
      {
        success: false,
        error: 'Failed to create RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
