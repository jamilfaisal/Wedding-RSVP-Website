import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createRSVP, deleteRSVP, getRSVPByEmail } from '../lib/airtable';
import type { CreateRSVPInput } from '../lib/airtable';
import { exit } from 'process';

async function runTest() {
  const email = `test+${Date.now()}@example.com`;
  await createRSVPTest(email);
  const recordId = await getRSVPIdByEmailTest(email);
  await deleteRSVPTest(recordId);
}

async function createRSVPTest(email: string) {
  const input: CreateRSVPInput = {
    name: 'Test User',
    email: email,
    attendance: 'Yes',
    numberOfGuests: 1,
    guestNames: 'Guest One',
    mealSelection: 'Vegetarian',
    dietaryRestrictions: ['Other'],
    notes: 'Created by automated test script',
  };

  try {
    const result = await createRSVP(input);
    console.log('createRSVP result:', result);

    if (result.success && result.data) {
      console.log('✅ RSVP created successfully. Record ID:', result.data.id);
    } else {
      console.error('❌ Failed to create RSVP:', result.error);
      exit(2);
    }
  } catch (err) {
    console.error('❌ Error running createRSVP test:', err);
    exit(1);
  }
}

async function getRSVPIdByEmailTest(email: string): Promise<string> {
  try {
    const result = await getRSVPByEmail(email);
    console.log('getRSVPByEmail result:', result);
    if (result.data?.id) {
      return result.data.id;
    } else {
      console.error('❌ Failed to retrieve RSVP ID:', result.error);
      exit(2);
    }
  } catch (err) {
    console.error('❌ Error running getRSVPByEmail test:', err);
    exit(1);
  }
}

async function deleteRSVPTest(recordId: string) {
  try {
    console.log('Deleting test RSVP record:', recordId);
    const result = await deleteRSVP(recordId);
    console.log('deleteRSVP result:', result);

    if (result.success) {
      console.log('✅ RSVP deleted successfully.');
    } else {
      console.error('❌ Failed to delete RSVP:', result.error);
      exit(3);
    }
  } catch (err) {
    console.error('❌ Error running deleteRsvpTest:', err);
    exit(1);
  }
}

runTest();
