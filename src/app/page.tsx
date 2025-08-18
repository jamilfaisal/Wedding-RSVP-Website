import HomePage from '@/components/pages/home-page';
import { coupleInfo } from '@/lib/config/wedding-config';

function Home() {
  return <HomePage weddingInfo={coupleInfo} />;
}

export default Home;
