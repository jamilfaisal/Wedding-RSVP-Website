import { Flower, Flower2, Leaf } from 'lucide-react';

function ArabicVerse() {
  return (
    <div className="mb-8">
      <div className="relative">
        {renderFloralAccent()}
        {renderVerseDecoration()}
        {renderArabicVerseDisplay()}
        {renderUnderlineDecoration()}
      </div>
    </div>
  );
}

function renderUnderlineDecoration() {
  return (
    <div className="flex items-center justify-center mt-4 gap-2">
      <div className="w-8 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
      <div className="w-2 h-2 bg-orange-300 rounded-full opacity-60"></div>
      <div className="w-12 h-px bg-gradient-to-r from-sage-400 via-orange-300 to-sage-400 opacity-50"></div>
      <div className="w-2 h-2 bg-sage-400 rounded-full opacity-60"></div>
      <div className="w-8 h-px bg-gradient-to-l from-transparent via-sage-400 to-transparent"></div>
    </div>
  );
}

function renderArabicVerseDisplay() {
  return (
    <p
      className="text-lg md:text-xl leading-relaxed text-center px-12"
      style={{
        fontFamily: 'var(--font-arabic)',
        color: '#3E7C59',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 2px 4px rgba(62, 124, 89, 0.4)',
        direction: 'rtl',
        fontWeight: '600',
      }}
    >
      وَمِنْ آيَاتِهِ أَنَّ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
      وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
    </p>
  );
}

function renderVerseDecoration() {
  return (
    <div className="absolute -end-8 top-1/2 transform -translate-y-1/2 opacity-40">
      <div className="flex flex-col items-center space-y-2">
        <Flower2 className="w-4 h-4 text-orange-300" />
        <div className="w-1 h-8 bg-gradient-to-b from-orange-200 via-sage-300 to-orange-200"></div>
        <Leaf className="w-3 h-3 text-sage-400" />
      </div>
    </div>
  );
}

function renderFloralAccent() {
  return (
    <div className="absolute -start-8 top-1/2 transform -translate-y-1/2 opacity-40">
      <div className="flex flex-col items-center space-y-2">
        <Flower className="w-4 h-4 text-sage-400" />
        <div className="w-1 h-8 bg-gradient-to-b from-sage-300 via-orange-200 to-sage-300"></div>
        <Leaf className="w-3 h-3 text-orange-300" />
      </div>
    </div>
  );
}

export default ArabicVerse;
