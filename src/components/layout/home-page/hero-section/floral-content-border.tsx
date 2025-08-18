import { Flower, Flower2, Heart, Leaf } from 'lucide-react';
import { convertDateToString, weddingTimeAsNumberWord } from '../../utils';

function MainMessagePanel({
  brideFullName,
  groomFullName,
  weddingStartDate,
}: {
  brideFullName: string;
  groomFullName: string;
  weddingStartDate: Date;
}) {
  return (
    <div className="relative border-2 border-sage-100/60 rounded-lg p-12 bg-white/80 backdrop-blur-sm shadow-xl">
      {renderFloralTopBorder()}
      {renderFloralTopLeft()}
      {renderFloralTopRight()}
      {renderFloralBottomLeft()}
      {renderFloralBottomRight()}
      <h1
        className="text-6xl md:text-7xl text-brown-800 mb-6 leading-tight tracking-wide"
        style={{ fontFamily: 'var(--font-harrington)' }}
      >
        {groomFullName}
        <span className="block text-5xl md:text-6xl text-sage-600 my-2">&</span>
        {brideFullName}
      </h1>
      <p
        className="text-xl md:text-2xl text-brown-600 font-light tracking-wide mb-8"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        cordially invite you to celebrate their wedding
      </p>
      {renderWeddingStartDateCard(weddingStartDate)}
      {renderFloralBottomBorder()}
    </div>
  );
}

function renderFloralBottomBorder() {
  return (
    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border border-sage-200 shadow-md">
      <div className="flex items-center space-x-3">
        <Flower className="w-4 h-4 text-sage-400" />
        <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
        <Flower2 className="w-4 h-4 text-brown-400" />
        <div className="w-3 h-3 bg-sage-200 rounded-full"></div>
        <Leaf className="w-4 h-4 text-orange-300" />
      </div>
    </div>
  );
}

function renderWeddingStartDateCard(weddingStartDate: Date) {
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
            style={{ fontFamily: 'var(--font-script)' }}
          >
            {convertDateToString(weddingStartDate)}
          </p>
          <div className="w-4 h-px bg-sage-300"></div>
        </div>
        <p
          className="text-lg text-brown-600 font-light"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          at {weddingTimeAsNumberWord(weddingStartDate)} o&apos;clock in the evening
        </p>
      </div>
    </div>
  );
}

function renderFloralBottomRight() {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
        <Leaf className="w-4 h-4 text-sage-400 opacity-60" />
      </div>
    </div>
  );
}

function renderFloralBottomLeft() {
  return (
    <div className="absolute bottom-4 left-4">
      <div className="flex items-center space-x-1">
        <Leaf className="w-4 h-4 text-orange-300 opacity-60" />
        <div className="w-2 h-2 bg-sage-200 rounded-full"></div>
      </div>
    </div>
  );
}

function renderFloralTopRight() {
  return (
    <div className="absolute top-4 right-4">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-sage-200 rounded-full"></div>
        <Flower2 className="w-4 h-4 text-orange-300 opacity-60" />
      </div>
    </div>
  );
}

function renderFloralTopLeft() {
  return (
    <div className="absolute top-4 left-4">
      <div className="flex items-center space-x-1">
        <Flower className="w-4 h-4 text-sage-400 opacity-60" />
        <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
      </div>
    </div>
  );
}

function renderFloralTopBorder() {
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

export default MainMessagePanel;
