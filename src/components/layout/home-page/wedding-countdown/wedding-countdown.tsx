'use client';
import { useEffect, useState } from 'react';
import ExpiredWeddingCountdown from './expired-wedding-countdown';

type WeddingCountdownProps = {
  weddingDate: Date;
};

type CountDownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WeddingCountdown = ({ weddingDate }: WeddingCountdownProps) => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    calculateCountdown(weddingDate, setCountDownTime, setIsExpired);
  }, [weddingDate]);

  if (isExpired) {
    return <ExpiredWeddingCountdown />;
  }
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {Object.entries(countDownTime).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-amber-200 shadow-sm">
            <div className="text-2xl text-amber-800 font-medium min-w-[3rem]">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-amber-600 uppercase tracking-wide mt-1">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

function calculateCountdown(
  weddingDate: Date,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void
) {
  updateCountDown(weddingDate, setIsExpired, setCountDownTime);
  const timerId = updateCountDownEverySecond(weddingDate, setIsExpired, setCountDownTime);
  return () => clearInterval(timerId);
}

function updateCountDown(
  weddingDate: Date,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void
) {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();
  console.log('Time difference:', diff);
  if (diff <= 0) {
    setIsExpired(true);
    setCountDownTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  setCountDownTime({ days, hours, minutes, seconds });
  setIsExpired(false);
}

function updateCountDownEverySecond(
  weddingDate: Date,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void
) {
  return setInterval(() => {
    updateCountDown(weddingDate, setIsExpired, setCountDownTime);
  }, 1000);
}

export default WeddingCountdown;
