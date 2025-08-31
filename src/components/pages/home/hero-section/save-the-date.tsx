'use client';
import { Button } from '@headlessui/react';
import { Calendar, Download, Plus } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

function SaveTheDate(t: (key: string) => string) {
  const router = useRouter();
  const pathname = usePathname();

  const handleRSVPNavigation = () => {
    const locale = pathname.split('/')[1] || 'en';
    router.push(`/${locale}/rsvp`);
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={handleRSVPNavigation}
        className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-sage-500 flex items-center justify-center w-full sm:w-auto cursor-pointer"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <Calendar className="w-5 h-5 me-3 flex-shrink-0" />
        {t('saveTheDate.rsvp')}
      </Button>
    </div>
  );
}

export default SaveTheDate;
