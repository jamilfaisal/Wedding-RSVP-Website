import { WeddingInfo } from '@/components/layout/types';

export const weddingInfo: WeddingInfo = {
  groomFirstName: 'Faris',
  brideFirstName: 'Zina',
  groomFullName: 'Faris Al-Ahmadi',
  brideFullName: 'Zina Jamil',
  weddingStartDate: new Date('2025-12-20T18:00:00'),
  weddingEndDate: new Date('2025-12-21T01:00:00'),
  weddingCity: 'Rome',
  weddingCountry: 'Italy',
  email: 'info@farisandzina.com',
  venueName: 'Rome Cavalieri, A Waldorf Astoria Hotel',
};

export const {
  groomFirstName,
  brideFirstName,
  groomFullName,
  brideFullName,
  weddingStartDate,
  venueName,
} = weddingInfo;
