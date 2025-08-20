import { getRSVPStats } from '@/lib/airtable';

export async function GET() {
  try {
    const result = await getRSVPStats();

    return Response.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error('Error fetching RSVP statistics:', error);
    return Response.json(
      {
        error: 'Failed to fetch RSVP statistics',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
