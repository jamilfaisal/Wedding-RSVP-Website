import { getRSVPByToken } from '@/lib/airtable';
import { NextRequest } from 'next/server';

interface RouteParams {
  params: Promise<{
    token: string;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { token } = await params;
    const result = await getRSVPByToken(token);

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVP by token:', error);
    return Response.json(
      {
        error: 'Failed to fetch RSVP by token',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
