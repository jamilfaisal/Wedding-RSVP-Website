'use client';

import CeremonyInfo from './ceremony-info/ceremony-info';
import EventTimeline from './event-timeline';
import HeroSection from './hero-section/hero-section';
import WeddingDetails from './wedding-details';
import WeddingPlaylist from './wedding-playlist';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <CeremonyInfo />
      <WeddingDetails />
      <EventTimeline />
      <WeddingPlaylist />
    </div>
  );
}

export default HomePage;
