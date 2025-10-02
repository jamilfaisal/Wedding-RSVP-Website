import { WeddingInfo } from '@/types';

export const weddingInfo: WeddingInfo = {
  groomFirstName: 'Faris',
  brideFirstName: 'Zina',
  groomFullName: 'Faris Al-Ahmadi',
  brideFullName: 'Zina Al-Shaikhli',
  weddingStartDate: new Date('2025-12-20T17:30:00.000Z'), // 6:00 PM Rome time (UTC+1)
  weddingEndDate: new Date('2025-12-21T00:00:00.000Z'), // 1:00 AM Rome time (UTC+1)
  weddingTimezone: 'Europe/Rome',
  weddingCity: 'Rome',
  weddingCountry: 'Italy',
  email: 'rsvp@farisandzinawedding.com',
  venueName: 'Rome Cavalieri, A Waldorf Astoria Hotel',
  // October 15, 2025 at 21:59:59 Rome time (UTC+2 due to daylight savings time)
  rsvpDeadline: new Date('2025-10-15T21:59:59.000Z'),
};

export const spotifyPlaylistUrl = 'https://open.spotify.com/playlist/your-playlist-id';

export const {
  groomFirstName,
  brideFirstName,
  groomFullName,
  brideFullName,
  weddingStartDate,
  weddingEndDate,
  weddingTimezone,
  weddingCity,
  weddingCountry,
  email,
  rsvpDeadline,
  venueName,
} = weddingInfo;
