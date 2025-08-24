import {
  brideFirstName,
  groomFirstName,
  email,
  weddingCity,
  weddingCountry,
} from '@/lib/config/wedding-config';
import { Flower, Flower2, Leaf, Users, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-sage-100 relative">
        <div className="absolute top-4 start-4">
          <Flower className="w-5 h-5 text-sage-400 opacity-50" />
        </div>
        <div className="absolute top-4 end-4">
          <Flower2 className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 start-4">
          <Leaf className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-4 end-4">
          <Leaf className="w-5 h-5 text-sage-400 opacity-50" />
        </div>

        {renderHeader()}
        <div className="space-y-6">
          <div className="text-center">
            {renderCoupleNames()}
            {renderEmail()}
          </div>
          {renderWeddingVenue()}
          {renderWeddingParty()}
        </div>
      </div>
    </div>
  );
}

function renderWeddingParty() {
  return (
    <div className="border-t border-sage-100 pt-6">
      <div className="text-center">
        <h4
          className="text-lg text-brown-700 mb-3"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Wedding Party
        </h4>
        <p className="text-brown-600 text-sm" style={{ fontFamily: 'var(--font-serif)' }}>
          For questions about accommodations, transportation, or other wedding details, please
          don&apos;t hesitate to reach out to us directly.
        </p>
      </div>
    </div>
  );
}

function renderWeddingVenue() {
  return (
    <div className="border-t border-sage-100 pt-6">
      <div className="text-center">
        <h4
          className="text-lg text-brown-700 mb-3"
          style={{ fontFamily: 'var(--font-harrington)' }}
        >
          Wedding Venue
        </h4>
        <div className="flex items-center justify-center gap-2 text-brown-600">
          <MapPin className="w-4 h-4 text-sage-600" />
          <span style={{ fontFamily: 'var(--font-serif)' }}>
            {weddingCity}, {weddingCountry}
          </span>
        </div>
        <p
          className="text-sm text-brown-500 mt-2 italic"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Specific venue details TBA
        </p>
      </div>
    </div>
  );
}

function renderEmail() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-3">
        <Mail className="w-5 h-5 text-sage-600" />
        <a
          href={`mailto:${email}`}
          className="text-sage-700 hover:text-sage-800 transition-colors duration-200 font-medium"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {email}
        </a>
      </div>
    </div>
  );
}

function renderCoupleNames() {
  return (
    <h3 className="text-xl text-brown-800 mb-4" style={{ fontFamily: 'var(--font-harrington)' }}>
      {groomFirstName} & {brideFirstName}
    </h3>
  );
}

function renderHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-px bg-sage-300"></div>
        <div className="w-8 h-8 bg-gradient-to-br from-sage-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-sage-200">
          <Users className="w-4 h-4 text-brown-600" />
        </div>
        <div className="w-12 h-px bg-sage-300"></div>
      </div>
      <h2 className="text-3xl text-brown-800 mb-6" style={{ fontFamily: 'var(--font-harrington)' }}>
        Contact Us
      </h2>
    </div>
  );
}

export default Contact;
