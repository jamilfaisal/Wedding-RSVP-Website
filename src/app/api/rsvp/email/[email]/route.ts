import { getRSVPByEmail } from '@/lib/airtable';
import { NextRequest } from 'next/server';

interface RouteParams {
  params: {
    email: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const email = decodeURIComponent(params.email);
    const result = await getRSVPByEmail(email);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVP by email:', error);
    return Response.json(
      {
        error: 'Failed to fetch RSVP by email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
