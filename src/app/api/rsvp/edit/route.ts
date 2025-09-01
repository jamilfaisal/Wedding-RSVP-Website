import { getRSVPByToken, updateRSVP } from '@/lib/airtable';
import { UpdateRSVPInput, CreateRSVPInput, DietaryOption } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';
import { buildError, guessUpdateRSVPErrorCode } from '@/lib/api/errors';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return Response.json(buildError('MISSING_TOKEN', 'Token is required to fetch RSVP.'), {
        status: 400,
      });
    }

    const result = await getRSVPByToken(token);

    if (!result.success) {
      return Response.json(
        buildError('RSVP_NOT_FOUND', result.error || 'Failed to fetch RSVP using that token.'),
        { status: 404 }
      );
    }

    if (!result.data) {
      return Response.json(buildError('RSVP_NOT_FOUND', 'RSVP not found.'), { status: 404 });
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

    return Response.json({ success: true, code: 'RSVP_FETCHED', data: rsvpData }, { status: 200 });
  } catch (error) {
    return Response.json(
      buildError('RSVP_FETCH_ERROR', 'Failed to fetch RSVP.', {
        details: error instanceof Error ? error.message : 'Unknown error',
        includeDetails: true,
      }),
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return Response.json(buildError('MISSING_TOKEN', 'Token is required to update RSVP.'), {
        status: 400,
      });
    }

    const existingRSVP = await getRSVPByToken(token);
    if (!existingRSVP.success || !existingRSVP.data) {
      return Response.json(
        buildError(
          'INVALID_OR_EXPIRED_TOKEN',
          'The provided RSVP edit token is invalid or expired.'
        ),
        { status: 404 }
      );
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
      return Response.json(buildError(guessUpdateRSVPErrorCode(errorMessage), errorMessage), {
        status: 400,
      });
    }

    return Response.json(
      { success: true, code: 'RSVP_UPDATED', data: result.data },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      buildError('INTERNAL_SERVER_ERROR', 'An unexpected error occurred while updating RSVP.', {
        details: error instanceof Error ? error.message : String(error),
        includeDetails: true,
      }),
      { status: 500 }
    );
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
