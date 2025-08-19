import RSVPHeader from '../layout/rsvp-page/rsvp-header';
import { WeddingInfo } from '../layout/types';
import RSVPForm from '../layout/rsvp-page/rsvp-form';
import RSVPFooter from '../layout/rsvp-page/rsvp-footer';

function RSVPPage({ weddingInfo }: { weddingInfo: WeddingInfo }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 via-sage-50/30 to-orange-50/20 pt-40 py-20">
      <div className="max-w-3xl mx-auto px-8">
        <RSVPHeader weddingInfo={weddingInfo} />
        <RSVPForm />
        <RSVPFooter />
      </div>
    </div>
  );
}

export default RSVPPage;
