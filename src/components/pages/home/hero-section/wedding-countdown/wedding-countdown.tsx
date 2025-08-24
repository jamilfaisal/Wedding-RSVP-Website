'use client';
import { useEffect, useState } from 'react';
import ExpiredWeddingCountdown from './expired-wedding-countdown';
import { Flower, Flower2, Leaf } from 'lucide-react';
import { weddingStartDate } from '@/lib/config/wedding-config';

type CountDownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const WeddingCountdown = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    calculateCountdown(weddingStartDate, setCountDownTime, setIsExpired);
  }, []);

  const countDownTimeCSSInfo = [
    {
      label: 'Days',
      value: countDownTime.days,
      bgColor: 'from-sage-100 to-sage-200',
      textColor: 'text-sage-700',
      borderColor: 'border-sage-200',
    },
    {
      label: 'Hours',
      value: countDownTime.hours,
      bgColor: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200',
    },
    {
      label: 'Minutes',
      value: countDownTime.minutes,
      bgColor: 'from-brown-100 to-brown-200',
      textColor: 'text-brown-700',
      borderColor: 'border-brown-200',
    },
    {
      label: 'Seconds',
      value: countDownTime.seconds,
      bgColor: 'from-ivory-200 to-ivory-300',
      textColor: 'text-brown-700',
      borderColor: 'border-ivory-300',
    },
  ];

  if (isExpired) {
    return <ExpiredWeddingCountdown />;
  }
  return (
    <div className="mb-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl border-2 border-sage-100 relative">
        {/* Corner floral decorations */}
        <div className="absolute top-3 start-3">
          <Flower className="w-5 h-5 text-sage-400 opacity-50" />
        </div>
        <div className="absolute top-3 end-3">
          <Flower2 className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-3 start-3">
          <Leaf className="w-5 h-5 text-orange-300 opacity-50" />
        </div>
        <div className="absolute bottom-3 end-3">
          <Leaf className="w-5 h-5 text-sage-400 opacity-50" />
        </div>

        {renderCountDownTitleText()}

        {renderCountdown(countDownTimeCSSInfo)}

        {renderDecorativeBottomAccent()}
      </div>
    </div>
  );
};

function renderCountDownTitleText() {
  return (
    <div className="text-center mb-8 relative z-10">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-8 h-px bg-sage-300"></div>
        <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="w-8 h-px bg-sage-300"></div>
      </div>
      <h3 className="text-3xl text-brown-800" style={{ fontFamily: 'var(--font-harrington)' }}>
        Until we say &ldquo;I do&rdquo;
      </h3>
    </div>
  );
}

function renderCountdown(
  countDownTimeCSSInfo: {
    label: string;
    value: number;
    bgColor: string;
    textColor: string;
    borderColor: string;
  }[]
) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
      {countDownTimeCSSInfo.map(({ label, value, bgColor, textColor, borderColor }) => (
        <div key={label} className="text-center">
          <div
            className={`bg-gradient-to-br ${bgColor} ${borderColor} border-2 rounded-lg p-4 md:p-6 shadow-lg mb-3 transform hover:scale-105 transition-all duration-300`}
          >
            <div
              className={`text-3xl md:text-4xl ${textColor}`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {value.toString().padStart(2, '0')}
            </div>
          </div>
          <p
            className={`text-sm ${textColor} uppercase tracking-wider`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function renderDecorativeBottomAccent() {
  return (
    <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-sage-100 relative z-10">
      <div className="w-2 h-2 bg-sage-300 rounded-full"></div>
      <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
      <div className="w-2 h-2 bg-brown-300 rounded-full"></div>
      <div className="w-3 h-3 bg-sage-300 rounded-full"></div>
      <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
    </div>
  );
}

function calculateCountdown(
  weddingStartDate: Date,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void
) {
  updateCountDown(weddingStartDate, setIsExpired, setCountDownTime);
  const timerId = updateCountDownEverySecond(weddingStartDate, setIsExpired, setCountDownTime);
  return () => clearInterval(timerId);
}

function updateCountDown(
  weddingStartDate: Date,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void
) {
  const now = new Date();
  const diff = weddingStartDate.getTime() - now.getTime();
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
  weddingStartDate: Date,
  setIsExpired: (value: boolean | ((prev: boolean) => boolean)) => void,
  setCountDownTime: (value: CountDownTime | ((prev: CountDownTime) => CountDownTime)) => void
) {
  return setInterval(() => {
    updateCountDown(weddingStartDate, setIsExpired, setCountDownTime);
  }, 1000);
}

export default WeddingCountdown;
