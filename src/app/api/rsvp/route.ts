import { createRSVP, sendConfirmationEmail, sendCoupleNotificationEmail } from '@/lib/airtable';
import { CreateRSVPInput } from '@/lib/airtable/types';
import { NextRequest } from 'next/server';
import { buildError, guessCreateRSVPErrorCode } from '@/lib/api/errors';

export async function POST(request: NextRequest) {
  try {
    const data: CreateRSVPInput = await request.json();
    const rsvpResult = await createRSVP(data);
    if (!rsvpResult.success) {
      const errorMessage =
        typeof rsvpResult.error === 'string' ? rsvpResult.error : 'Failed to create RSVP';
      return Response.json(buildError(guessCreateRSVPErrorCode(errorMessage), errorMessage), {
        status: 400,
      });
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
          buildError('EMAIL_SEND_FAILED', `RSVP created but confirmation email failed to send.`, {
            details: errorMessage,
            includeDetails: true,
          }),
          { status: 500 }
        );
      }

      const coupleEmailResult = await sendCoupleNotificationEmail(rsvpResult.data!);
      if (!coupleEmailResult.success) {
      }
    }

    return Response.json({ success: true, code: 'RSVP_CREATED' }, { status: 201 });
  } catch (error) {
    return Response.json(
      buildError('INTERNAL_SERVER_ERROR', 'An unexpected error occurred while creating RSVP.', {
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
