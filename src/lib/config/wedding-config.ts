import { WeddingInfo } from '@/components/layout/types';

export const weddingInfo: WeddingInfo = {
  groomFirstName: 'Faris',
  brideFirstName: 'Zina',
  groomFullName: 'Faris Al-Ahmadi',
  brideFullName: 'Zina Al-Shaikhli',
  weddingStartDate: new Date(2025, 11, 20), // December 20, 2025 (month is 0-indexed)
  weddingEndDate: new Date(2025, 11, 21), // December 21, 2025
  weddingStartTime: '6:00 PM',
  weddingEndTime: '1:00 AM',
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
  venueName,
} = weddingInfo;
