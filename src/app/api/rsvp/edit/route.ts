import { getRSVPByToken, updateRSVP } from '@/lib/airtable';
import { UpdateRSVPInput, CreateRSVPInput, DietaryOption } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return Response.json({ success: false, error: 'Token is required' }, { status: 400 });
    }

    const result = await getRSVPByToken(token);

    if (!result.success) {
      return Response.json(
        { success: false, error: result.error || 'Failed to fetch RSVP' },
        { status: 404 }
      );
    }

    if (!result.data) {
      return Response.json({ success: false, error: 'RSVP not found' }, { status: 404 });
    }

    const rsvpData = {
      id: result.data.id,
      fullName: result.data.fields.Name || '',
      email: result.data.fields.Email || '',
      attendingRefreshments: result.data.fields['Attending Refreshments Dec 19th'] === 'Yes',
      attendingWedding: result.data.fields['Attending Wedding Dec 20th'] === 'Yes',
      numberOfGuests: String(result.data.fields['Number of Guests'] || 1),
      secondGuestName: result.data.fields['Second Guest Name'] || '',
      guest1DietaryRestrictions: result.data.fields['Guest 1 Dietary Restrictions'] || '',
      guest2DietaryRestrictions: result.data.fields['Guest 2 Dietary Restrictions'] || '',
      createdTime: result.data.createdTime,
    };

    return Response.json({ success: true, data: rsvpData }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to fetch RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return Response.json({ success: false, error: 'Token is required' }, { status: 400 });
    }

    const existingRSVP = await getRSVPByToken(token);
    if (!existingRSVP.success || !existingRSVP.data) {
      return Response.json({ success: false, error: 'Invalid or expired token' }, { status: 404 });
    }

    const data: Omit<CreateRSVPInput, 'id'> = await request.json();

    const updateInput: UpdateRSVPInput = {
      id: existingRSVP.data.id,
      fullName: data.fullName,
      email: data.email,
      attendingRefreshments: data.attendingRefreshments,
      attendingWedding: data.attendingWedding,
      numberOfGuests: data.numberOfGuests,
      secondGuestName: data.secondGuestName,
      guest1DietaryRestrictions: data.guest1DietaryRestrictions as DietaryOption,
      guest2DietaryRestrictions: data.guest2DietaryRestrictions as DietaryOption,
    };

    const result = await updateRSVP(updateInput);

    if (!result.success) {
      const errorMessage =
        typeof result.error === 'string' ? result.error : 'Failed to update RSVP';

      return Response.json({ success: false, error: errorMessage }, { status: 400 });
    }

    return Response.json({ success: true, data: result.data }, { status: 200 });
  } catch {
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
