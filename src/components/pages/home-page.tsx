'use client';
import { WeddingInfo } from '../layout/types';
import HeroSection from '../layout/home-page/hero-section/hero-section';
import CeremonyInfo from '../layout/home-page/ceremony-info/ceremony-info';

function HomePage({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <div>
      <HeroSection weddingInfo={weddingInfo} />
      <CeremonyInfo weddingInfo={weddingInfo} />
    </div>
  );
}

export default HomePage;
