import { WeddingInfo } from '@/components/layout/types';

export const weddingInfo: WeddingInfo = {
  groomFirstName: 'Faris',
  brideFirstName: 'Zina',
  groomFullName: 'Faris Al-Ahmadi',
  brideFullName: 'Zina Al-Shaikhli',
  weddingStartDate: new Date('2025-12-20T17:00:00.000Z'), // 6:00 PM Rome time (UTC+1)
  weddingEndDate: new Date('2025-12-21T00:00:00.000Z'), // 1:00 AM Rome time (UTC+1)
  weddingTimezone: 'Europe/Rome',
  weddingCity: 'Rome',
  weddingCountry: 'Italy',
  email: 'info@farisandzina.com',
  venueName: 'Rome Cavalieri, A Waldorf Astoria Hotel',
  rsvpDeadline: new Date('2025-09-30T23:59:59'),
};

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
