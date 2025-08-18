'use client';
import { WeddingInfo } from '../layout/types';
import HeroSection from '../layout/home-page/hero-section/hero-section';

function HomePage({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <div>
      <HeroSection weddingInfo={weddingInfo} />
    </div>
  );
}

export default HomePage;
