import TouristInfoPage from '@/components/layout/tourist-info-page';
import { weddingInfo } from '@/lib/config/wedding-config';

function TouristInfo() {
  return <TouristInfoPage weddingCity={weddingInfo.weddingCity} />;
}

export default TouristInfo;
