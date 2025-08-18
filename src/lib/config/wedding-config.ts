import { WeddingInfo } from '@/components/layout/types';

export const coupleInfo: WeddingInfo = {
  groomName: 'Faris',
  brideName: 'Zina',
  weddingDate: new Date('2025-12-20T15:00:00'),
  venueName: 'Rome Cavalieri, A Waldorf Astoria Hotel',
};

// Export individual pieces if needed
export const { groomName, brideName, weddingDate, venueName } = coupleInfo;
