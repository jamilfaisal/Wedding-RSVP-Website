'use client';

import { useEffect, useState } from 'react';
import {
  formatCurrentTimeInTimezone,
  getUserTimezone,
  getTimezoneAbbreviation,
} from '@/components/layout/utils';
import { weddingTimezone } from '@/lib/config/wedding-config';

interface LiveTimeDisplayProps {
  locale: string;
  t: (key: string) => string;
}

export default function LiveTimeDisplay({ locale, t }: LiveTimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState<{
    userTime: string;
    romeTime: string;
    userTimezone: string;
    romeTimezone: string;
  }>({
    userTime: '',
    romeTime: '',
    userTimezone: '',
    romeTimezone: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const userTimezone = getUserTimezone();
      const userTime = formatCurrentTimeInTimezone(locale, userTimezone);
      const romeTime = formatCurrentTimeInTimezone(locale, weddingTimezone);
      const userTimezoneAbbr = getTimezoneAbbreviation(userTimezone);
      const romeTimezoneAbbr = getTimezoneAbbreviation(weddingTimezone);

      setCurrentTime({
        userTime,
        romeTime,
        userTimezone: userTimezoneAbbr,
        romeTimezone: romeTimezoneAbbr,
      });
    };

    updateTimes();
    const interval = updateTimesEveryMinute(updateTimes);

    return () => clearInterval(interval);
  }, [locale]);

  if (!currentTime.userTime) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md border-2 border-brown-100">
        <div className="animate-pulse">
          <div className="h-4 bg-brown-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-brown-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 text-brown-600">
      <div className="flex justify-between items-center">
        <span className="font-serif">
          {t('ceremony.yourTime')} ({currentTime.userTimezone}):
        </span>
        <span className="font-light font-mono text-lg">{currentTime.userTime}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-serif">
          {t('ceremony.romeTime')} ({currentTime.romeTimezone}):
        </span>
        <span className="font-light font-mono text-lg">{currentTime.romeTime}</span>
      </div>
      {currentTime.userTimezone !== currentTime.romeTimezone && (
        <div className="text-sm text-brown-500 italic pt-2 border-t border-brown-100">
          <span className="text-xs">🕐</span> {t('ceremony.liveTimeHelper')}
        </div>
      )}
    </div>
  );
}

function updateTimesEveryMinute(updateTimes: () => void) {
  return setInterval(updateTimes, 60000);
}
