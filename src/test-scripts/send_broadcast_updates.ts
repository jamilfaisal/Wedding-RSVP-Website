import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { getAirtableClient } from '../lib/airtable/client';
import type { AirtableListResponse, AirtableRecord } from '../lib/airtable/types';
import { isValidEmailFormat } from '../lib/airtable/utils';
import { sendBroadcastUpdateToSingleEmail } from '../lib/resend/resend';
import fs from 'fs';

const DRY_RUN = process.env.DRY_RUN === '1' || process.env.DRY_RUN === 'true';
const ONLY_TO = process.env.ONLY_TO?.split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

async function fetchAllRSVPEmails(): Promise<AirtableRecord[]> {
  const client = getAirtableClient();
  const emails: AirtableRecord[] = [];
  let offset: string | undefined = undefined;

  do {
    const params: Record<string, string> = {};
    if (offset) params.offset = offset;

    const res = await client.get<AirtableListResponse>(params);
    if (!res.success || !res.data) {
      throw new Error(`Failed to list RSVPs: ${res.error || 'unknown error'}`);
    }
    emails.push(...res.data.records);
    offset = res.data.offset;
  } while (offset);

  return emails;
}

function filterValidEmails(records: AirtableRecord[]): AirtableRecord[] {
  const seen = new Set<string>();
  const result: AirtableRecord[] = [];

  for (const r of records) {
    const email = r.fields?.Email?.trim() || '';
    if (!email || !isValidEmailFormat(email)) continue;

    const key = email.toLowerCase();
    if (ONLY_TO && ONLY_TO.length > 0 && !ONLY_TO.includes(key)) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(r);
  }

  return result;
}

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function sendWithRetry(record: AirtableRecord, subject: string) {
  const maxAttempts = 5;
  const baseDelay = parseInt(process.env.RATE_DELAY_MS || '600', 10); // default ~600ms (≈1.6 req/sec)
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await sendBroadcastUpdateToSingleEmail(record, { subject });
    if (res.success) {
      return { success: true, id: res.data?.id, attempts: attempt };
    }
    const isRateLimit = res.error?.includes('rate_limit_exceeded');
    if (!isRateLimit) {
      return { success: false, error: res.error, attempts: attempt };
    }
    const backoff = baseDelay + attempt * 200; // linear backoff
    console.warn(
      `↻ Rate limit for ${record.fields?.Email} (attempt ${attempt}/${maxAttempts}). Retrying after ${backoff}ms.`
    );
    await sleep(backoff);
  }
  return { success: false, error: 'rate_limit_exceeded after retries', attempts: maxAttempts };
}

async function main() {
  console.log('Fetching RSVP list from Airtable...');
  const allEmails = await fetchAllRSVPEmails();
  const recipients = filterValidEmails(allEmails);

  console.log(`Found ${recipients.length} unique valid recipient(s).`);
  if (recipients.length === 0) {
    console.log('Nothing to do. Exiting.');
    return;
  }

  const subject = 'Updates on Faris & Zina\u2019s Wedding \uD83D\uDC8D';

  if (DRY_RUN) {
    return logDryRunRecipients(recipients, subject);
  }

  console.log('\nSending emails with rate-limit aware retry...');
  const failedRecipients: { email: string; name?: string; error: string }[] = [];
  await sendEmailWithRetry(recipients, subject, failedRecipients);
  logFailedEmails(failedRecipients);
}

function logFailedEmails(failedRecipients: { email: string; name?: string; error: string }[]) {
  if (failedRecipients.length) {
    console.log('Failed recipients (first 5):');
    failedRecipients
      .slice(0, 5)
      .forEach((f, i) => console.log(`  ${i + 1}. ${f.name || 'Guest'} <${f.email}> - ${f.error}`));
    if (process.env.OUTPUT_FAILED_FILE === '1') {
      const fileName = `failed_broadcast_${Date.now()}.json`;
      fs.writeFileSync(fileName, JSON.stringify(failedRecipients, null, 2));
      console.log(`Failed recipient list written to ${fileName}`);
    }
  }
}

async function sendEmailWithRetry(
  recipients: AirtableRecord[],
  subject: string,
  failedRecipients: { email: string; name?: string; error: string }[]
) {
  let success = 0;
  let failure = 0;

  for (const r of recipients) {
    const email = r.fields?.Email || 'unknown';
    try {
      const result = await sendWithRetry(r, subject);
      if (result.success) {
        success++;
        console.log(
          `✔ Sent to ${email} (id: ${result.id || 'n/a'}, attempts: ${result.attempts})`
        );
      } else {
        failure++;
        failedRecipients.push({ email, name: r.fields?.Name, error: result.error || 'unknown' });
        console.warn(`✖ Failed to ${email}: ${result.error} (attempts: ${result.attempts})`);
      }
    } catch (err) {
      failure++;
      const errorMsg = err instanceof Error ? err.message : String(err);
      failedRecipients.push({ email, name: r.fields?.Name, error: errorMsg });
      console.error(`✖ Exception for ${email}:`, errorMsg);
    }
    await sleep(parseInt(process.env.BASE_DELAY_MS || '100', 10));
  }
  console.log(`\nDone. Success: ${success}, Failed: ${failure}`);
}

function logDryRunRecipients(recipients: AirtableRecord[], subject: string) {
  console.log('\nDRY RUN (no emails will be sent)');
  console.log('Sample recipients:');
  recipients.slice(0, 5).forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.fields?.Name || 'Guest'} <${r.fields?.Email}>`);
  });
  console.log('\nSubject:', subject);
  console.log('Body template: BroadcastUpdatesEmail');
  return;
}

main().catch((err) => {
  console.error('Broadcast script error:', err);
  process.exit(1);
});
