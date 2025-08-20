import { getRSVPById, updateRSVP, deleteRSVP } from '@/lib/airtable';
import { UpdateRSVPInput } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const result = await getRSVPById(params.id);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVP:', error);
    return Response.json(
      {
        error: 'Failed to fetch RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const data = await request.json();
    const updateData: UpdateRSVPInput = { ...data, id: params.id };

    const result = await updateRSVP(updateData);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error updating RSVP:', error);
    return Response.json(
      {
        error: 'Failed to update RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const result = await deleteRSVP(params.id);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error deleting RSVP:', error);
    return Response.json(
      {
        error: 'Failed to delete RSVP',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
