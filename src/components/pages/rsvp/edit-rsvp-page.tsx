'use client';
import RSVPHeader from './rsvp-header';
import RSVPFooter from './rsvp-footer';
import EditRSVPForm from './edit-rsvp-form';
import { useSearchParams } from 'next/navigation';

export default function EditRSVPPage() {
  const searchParams = useSearchParams();
  const token = searchParams?.get('token') ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-ivory-50 to-warm-brown-50 flex flex-col pt-30">
      <div className="flex-grow flex flex-col justify-center px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <RSVPHeader editMode />
          <EditRSVPForm token={token} />
          <RSVPFooter />
        </div>
      </div>
    </div>
  );
}
