import { sendConfirmationEmail } from '../lib/resend/resend';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import type { AirtableRecord } from '../lib/airtable/types';

async function run() {
  const record: AirtableRecord = {
    id: 'test-record-jamil',
    createdTime: new Date().toISOString(),
    fields: {
      Name: 'Jamil Faisal',
      Email: 'rsvp@farisandzinawedding.com',
      'Attending Refreshments Dec 19th': 'Yes',
      'Attending Wedding Dec 20th': 'Yes',
      'Number of Guests': 1,
      'Guest 1 Dietary Restrictions': 'None',
      'Edit Token (JWT)': 'test-token-123',
    },
  };

  const result = await sendConfirmationEmail(record);
  console.log('sendConfirmationEmail result:', result);
}

run().catch((err) => {
  console.error('Error running test script:', err);
  process.exit(1);
});
