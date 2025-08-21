import HomePage from '@/components/layout/home-page';
import { weddingInfo } from '@/lib/config/wedding-config';

function Home() {
  return <HomePage weddingInfo={weddingInfo} />;
}

export default Home;
