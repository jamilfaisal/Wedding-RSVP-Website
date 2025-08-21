import AccommodationsPage from '@/components/layout/accommodations-page';
import { weddingInfo } from '@/lib/config/wedding-config';

function Accommodations() {
  return <AccommodationsPage weddingInfo={weddingInfo} />;
}

export default Accommodations;
