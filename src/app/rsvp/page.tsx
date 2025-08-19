import RSVPPage from '@/components/pages/rsvp-page';
import { weddingInfo } from '@/lib/config/wedding-config';

function RSVP() {
  return <RSVPPage weddingInfo={weddingInfo} />;
}

export default RSVP;
