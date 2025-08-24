import { useEffect, useState } from 'react';
import { ArrowDown, Flower, Flower2, Heart, Leaf } from 'lucide-react';
import BackgroundImage from './background-image';
import BotanicalDecoration from './botanical-decoration';
import ArabicVerse from './arabic-verse';
import WeddingCountdown from './wedding-countdown/wedding-countdown';
import SaveTheDate from './save-the-date';
import { formatWeddingStartDate, formatWeddingStartTime } from '../../utils';
import {
  groomFullName,
  brideFullName,
  weddingCity,
  weddingCountry,
} from '@/lib/config/wedding-config';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ivory-50 via-white to-sage-50/20"
    >
      <BackgroundImage />
      <BotanicalDecoration />
      {renderHeroSectionContent(isVisible)}
      {renderBottomGradient()}
    </section>
  );
}

function renderHeroSectionContent(isVisible: boolean) {
  return (
    <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
      <div
        className={`pt-35 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="relative border-2 border-sage-100/60 rounded-lg p-12 bg-white/80 backdrop-blur-sm shadow-xl ">
          {renderTopBorderFloralDecor()}
          {renderTopLeftCornerFloralDecor()}
          {renderTopRightFloralDecor()}
          {renderBottomLeftFloralDecor()}
          {renderBottomRightFloralDecor()}
          <ArabicVerse />
          {renderGroomAndBrideNames()}
          {renderWeddingInvitationMessage()}
          {renderWeddingDateCard()}
          <WeddingCountdown />
          <div className="space-y-6">
            <SaveTheDate />
            {renderScrollDownIndicator()}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderWeddingInvitationMessage() {
  return (
    <p
      className="text-xl md:text-2xl text-brown-600 font-light tracking-wide mb-8"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      cordially invite you to celebrate their wedding
    </p>
  );
}

function renderGroomAndBrideNames() {
  return (
    <h1
      className="text-6xl md:text-6xl text-brown-800 mb-6 leading-tight tracking-wide"
      style={{ fontFamily: 'var(--font-harrington)' }}
    >
      {groomFullName}
      <span className="block text-5xl md:text-6xl text-sage-600 my-2">&</span>
      {brideFullName}
    </h1>
  );
}

function renderWeddingDateCard() {
  return (
    <div className="inline-block bg-gradient-to-r from-sage-50 to-orange-50 rounded-lg px-10 py-8 shadow-lg border-2 border-sage-100 mb-8">
      <div className="text-center">
        <p
          className="text-brown-600 mb-3 tracking-wide"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Join us on
        </p>
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="w-4 h-px bg-sage-300"></div>
          <p
            className="text-3xl md:text-4xl text-sage-700"
            style={{ fontFamily: 'var(--font-harrington)' }}
          >
            {formatWeddingStartDate()}
          </p>
          <div className="w-4 h-px bg-sage-300"></div>
        </div>
        <p className="text-brown-500" style={{ fontFamily: 'var(--font-serif)' }}>
          {formatWeddingStartTime()} • {weddingCity}, {weddingCountry}
        </p>
      </div>
    </div>
  );
}

function renderBottomRightFloralDecor() {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
        <Leaf className="w-4 h-4 text-sage-400 opacity-60" />
      </div>
    </div>
  );
}

function renderBottomLeftFloralDecor() {
  return (
    <div className="absolute bottom-4 left-4">
      <div className="flex items-center space-x-1">
        <Leaf className="w-4 h-4 text-orange-300 opacity-60" />
        <div className="w-2 h-2 bg-sage-200 rounded-full"></div>
      </div>
    </div>
  );
}

function renderTopRightFloralDecor() {
  return (
    <div className="absolute top-4 right-4">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-sage-200 rounded-full"></div>
        <Flower2 className="w-4 h-4 text-orange-300 opacity-60" />
      </div>
    </div>
  );
}

function renderTopLeftCornerFloralDecor() {
  return (
    <div className="absolute top-4 left-4">
      <div className="flex items-center space-x-1">
        <Flower className="w-4 h-4 text-sage-400 opacity-60" />
        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
      </div>
    </div>
  );
}

function renderTopBorderFloralDecor() {
  return (
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-sage-200 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Leaf className="w-4 h-4 text-sage-400" />
          <Flower className="w-5 h-5 text-orange-300" />
        </div>
        <Heart className="w-6 h-6 text-brown-400" />
        <div className="flex items-center space-x-1">
          <Flower2 className="w-5 h-5 text-sage-400" />
          <Leaf className="w-4 h-4 text-orange-300" />
        </div>
      </div>
    </div>
  );
}

function renderScrollDownIndicator() {
  return (
    <div className="flex justify-center">
      <ArrowDown className="w-6 h-6 text-brown-400 animate-bounce" />
    </div>
  );
}

function renderBottomGradient() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-ivory-50/80 to-transparent"></div>
  );
}

export default HeroSection;
