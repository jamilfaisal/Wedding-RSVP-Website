import { WeddingInfo } from '../types';
import RSVPFooter from './rsvp-footer';
import RSVPForm from './rsvp-form';
import RSVPHeader from './rsvp-header';

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
