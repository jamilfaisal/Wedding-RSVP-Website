import { createRSVP, sendConfirmationEmail, sendCoupleNotificationEmail } from '@/lib/airtable';
import { CreateRSVPInput } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data: CreateRSVPInput = await request.json();
    const rsvpResult = await createRSVP(data);
    if (!rsvpResult.success) {
      const errorMessage =
        typeof rsvpResult.error === 'string' ? rsvpResult.error : 'Failed to create RSVP';

      return Response.json({ success: false, error: errorMessage }, { status: 400 });
    }

    const sendEmailsEnabled = process.env.SEND_EMAILS_FEATURE_TOGGLE === 'true';
    if (sendEmailsEnabled) {
      const emailResult = await sendConfirmationEmail(rsvpResult.data!);
      if (!emailResult.success) {
        const errorMessage =
          typeof emailResult.error === 'string'
            ? emailResult.error
            : JSON.stringify(emailResult.error);

        return Response.json(
          {
            success: false,
            error: `RSVP created but email sending failed: ${errorMessage}`,
            rsvpCreated: true,
            rsvpId: rsvpResult.data?.id,
          },
          { status: 500 }
        );
      }

      const coupleEmailResult = await sendCoupleNotificationEmail(rsvpResult.data!);
      if (!coupleEmailResult.success) {
        console.warn('Failed to send couple notification email:', coupleEmailResult.error);
      }
    } else {
      console.log('Email sending is disabled');
    }

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Unexpected error in RSVP API:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
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
