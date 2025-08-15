import {
  getAllRSVPs,
  createRSVP,
  getRSVPByEmail,
  updateRSVP,
  deleteRSVP,
  getRSVPStats,
  validateEmail,
  generateEditToken,
  convertToCSV,
} from './airtable';

export function exampleEmailValidation() {
  console.log('Email validation examples:');
  console.log('Valid email:', validateEmail('user@example.com')); // true
  console.log('Invalid email:', validateEmail('invalid-email')); // false
}

export function exampleTokenGeneration() {
  const email = 'user@example.com';
  const token = generateEditToken(email);
  console.log('Generated edit token for', email, ':', token);
}

export async function exampleCreateRSVP() {
  /*
  try {
    const result = await createRSVP({
      name: 'John Doe',
      email: 'john.doe@example.com',
      attendance: 'Yes',
      numberOfGuests: 2,
      guestNames: 'Jane Doe',
      mealSelection: 'Vegetarian',
      dietaryRestrictions: ['Vegetarian'],
      notes: 'Looking forward to celebrating with you!',
    });

    if (result.success) {
      console.log('✅ RSVP created successfully:', result.data?.fields.Name);
      return result.data;
    } else {
      console.error('❌ Failed to create RSVP:', result.error);
    }
  } catch (error) {
    console.error('❌ Error creating RSVP:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test RSVP creation');
}

export async function exampleGetAllRSVPs() {
  /*
  try {
    const result = await getAllRSVPs({
      maxRecords: 10,
      sort: [{ field: 'RSVP Date', direction: 'desc' }],
      filterByFormula: '{Attendance} = "Yes"', // Only attending guests
    });

    if (result.success) {
      console.log(`✅ Found ${result.data?.length} RSVPs`);
      result.data?.forEach((rsvp) => {
        const { Name, Email, Attendance } = rsvp.fields;
        console.log(`- ${Name} (${Email}): ${Attendance}`);
      });
    } else {
      console.error('❌ Failed to fetch RSVPs:', result.error);
    }
  } catch (error) {
    console.error('❌ Error fetching RSVPs:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test RSVP fetching');
}

export async function exampleGetRSVPByEmail() {
  /*
  try {
    const result = await getRSVPByEmail('john.doe@example.com');

    if (result.success && result.data) {
      console.log('✅ Found RSVP:', result.data.fields);
    } else if (result.success && !result.data) {
      console.log('⚠️ No RSVP found for that email');
    } else {
      console.error('❌ Error searching for RSVP:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test RSVP lookup by email');
}

export async function exampleUpdateRSVP() {
  /*
  try {
    // First find the RSVP by email
    const findResult = await getRSVPByEmail('john.doe@example.com');
    
    if (findResult.success && findResult.data) {
      const recordId = findResult.data.id;
      
      const updateResult = await updateRSVP({
        id: recordId,
        numberOfGuests: 3,
        guestNames: 'Jane Doe, Baby Doe',
        notes: 'Updated guest count - bringing the baby!',
      });

      if (updateResult.success) {
        console.log('✅ RSVP updated successfully');
      } else {
        console.error('❌ Failed to update RSVP:', updateResult.error);
      }
    } else {
      console.log('⚠️ RSVP not found for update');
    }
  } catch (error) {
    console.error('❌ Error updating RSVP:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test RSVP updates');
}

export async function exampleGetRSVPStats() {
  /*
  try {
    const result = await getRSVPStats();

    if (result.success && result.data) {
      const { total, attending, notAttending, pending, totalGuests } = result.data;
      console.log('📊 RSVP Statistics:');
      console.log(`  Total RSVPs: ${total}`);
      console.log(`  Attending: ${attending}`);
      console.log(`  Not Attending: ${notAttending}`);
      console.log(`  Pending: ${pending}`);
      console.log(`  Total Guests: ${totalGuests}`);
    } else {
      console.error('❌ Failed to get RSVP stats:', result.error);
    }
  } catch (error) {
    console.error('❌ Error getting stats:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test RSVP statistics');
}

export async function exampleExportToCSV() {
  /*
  try {
    const result = await getAllRSVPs();
    
    if (result.success && result.data) {
      const csvData = convertToCSV(result.data);
      console.log('📄 CSV Export Sample:');
      console.log(csvData.split('\n').slice(0, 5).join('\n')); // Show first 5 lines
      
      // In a real application, you would save this to a file or download it
      // fs.writeFileSync('rsvps.csv', csvData);
      // or create a download link for the user
    } else {
      console.error('❌ Failed to export RSVPs:', result.error);
    }
  } catch (error) {
    console.error('❌ Error exporting RSVPs:', error);
  }
  */
  console.log('⚠️ Uncomment and configure to test CSV export');
}

// Log helpful information
console.log('🎉 Airtable RSVP utilities loaded successfully!');
console.log('💡 To test these functions:');
console.log('   1. Make sure your .env.local has the correct Airtable credentials');
console.log('   2. Uncomment the example functions you want to test');
console.log('   3. Run the functions in your Next.js application');
