import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testRSVPWithEmails() {
  const rsvpData = {
    fullName: 'Test Guest Email',
    email: 'jamilfaisal43@gmail.com',
    attending: true,
    numberOfGuests: '2',
    secondGuestName: 'Guest Plus One',
    mealPreference: 'Meat',
    dietaryRestrictions: 'None',
    songRequests: 'Happy songs for testing the couple notification!',
  };

  try {
    console.log('Creating RSVP via API...');
    const response = await fetch('http://localhost:3000/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rsvpData),
    });

    const result = await response.json();
    console.log('API Response:', result);

    if (response.ok && result.success) {
      console.log('✅ RSVP created successfully!');
      console.log(
        '✅ Both guest confirmation and couple notification emails should have been sent!'
      );
    } else {
      console.error('❌ RSVP creation failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Error testing RSVP API:', error);
  }
}

testRSVPWithEmails().catch((error) => {
  console.error('Error running test:', error);
  process.exit(1);
});
