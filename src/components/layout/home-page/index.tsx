'use client';

import { WeddingInfo } from '../types';
import CeremonyInfo from './ceremony-info/ceremony-info';
import EventTimeline from './event-timeline';
import HeroSection from './hero-section/hero-section';
import WeddingDetails from './wedding-details';

function HomePage({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <div>
      <HeroSection weddingInfo={weddingInfo} />
      <CeremonyInfo weddingInfo={weddingInfo} />
      <WeddingDetails weddingInfo={weddingInfo} />
      <EventTimeline />
    </div>
  );
}

export default HomePage;
