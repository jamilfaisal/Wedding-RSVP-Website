import { Resend } from 'resend';
import React from 'react';
import { APIResponse, AirtableRecord } from '../airtable/types';
import ConfirmationEmail, { ConfirmationEmailProps } from './emailTemplates/ConfirmationEmail';
import { isValidEmailFormat } from '../airtable/utils';

let _resendInstance: Resend | null = null;
function getResendClient(): Resend {
  if (_resendInstance) return _resendInstance;

  const key = process.env.RESEND_API_KEY || process.env.RESEND_KEY || '';
  if (!key) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }

  _resendInstance = new Resend(key);
  return _resendInstance;
}

export async function sendConfirmationEmail(
  record: AirtableRecord
): Promise<APIResponse<{ id?: string }>> {
  try {
    getResendClient();
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }

  const to = record.fields?.Email;
  if (validateRecipientEmailExists(to)) {
    return { success: false, error: 'No recipient email found on RSVP record' };
  }

  const name = record.fields?.Name || '';
  const attendance = record.fields?.Attendance || '';
  const guests = record.fields?.['Number of Guests'] ?? null;
  const editToken = record.fields?.['Edit Token (JWT)'];

  const from = process.env.RESEND_SENDER_EMAIL || 'Resend Dev <onboarding@resend.dev>';

  const editUrl = editToken
    ? process.env.RSVP_EDIT_URL
      ? `${process.env.RSVP_EDIT_URL}?token=${encodeURIComponent(String(editToken))}`
      : ''
    : '';

  const subject = `Thanks for your RSVP${name ? `, ${name}` : ''}!`;

  try {
    const props: ConfirmationEmailProps = {
      name: name || undefined,
      attendance: attendance || undefined,
      guests: typeof guests === 'number' ? guests : null,
      editUrl: editUrl || undefined,
    };

    const reactElement = React.createElement(ConfirmationEmail, props);

    const resend = getResendClient();

    const payload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to: [to],
      subject,
      react: reactElement,
    };

    const { data, error } = await resend.emails.send(payload);

    if (error) {
      return { success: false, error: String(error) };
    }

    const responseData = data as { id?: string } | undefined;
    return { success: true, data: { id: responseData?.id } };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

function validateRecipientEmailExists(to?: string): boolean {
  if (!to || typeof to !== 'string') {
    return true;
  }
  const email = to.trim();
  if (!email) {
    return true;
  }

  return !isValidEmailFormat(email);
}
