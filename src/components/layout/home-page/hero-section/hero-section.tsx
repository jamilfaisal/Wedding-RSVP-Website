import { useEffect, useState } from 'react';
import { WeddingInfo } from '../../types';
import { ArrowDown } from 'lucide-react';
import BackgroundImage from './background-image';
import BotanicalDecoration from './botanical-decoration';
import MainMessagePanel from './floral-content-border';
import WeddingCountdown from './wedding-countdown/wedding-countdown';
import SaveTheDate from './save-the-date';

function HeroSection({ weddingInfo }: { weddingInfo: WeddingInfo }) {
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
      {renderHeroSectionContent(isVisible, weddingInfo)}
      {renderBottomGradient()}
    </section>
  );
}

function renderHeroSectionContent(isVisible: boolean, weddingInfo: WeddingInfo) {
  return (
    <div className="relative z-10 text-center px-8 max-w-4xl mx-auto pt-40">
      <div
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MainMessagePanel
          brideFullName={weddingInfo.brideFullName}
          groomFullName={weddingInfo.groomFullName}
          weddingStartDate={weddingInfo.weddingStartDate}
        />

        {renderBilingualWelcomeMessages()}

        <div className="mb-12">
          <WeddingCountdown weddingStartDate={weddingInfo.weddingStartDate} />
        </div>

        <div className="mb-16">
          <SaveTheDate {...weddingInfo} />
        </div>

        {renderScrollDownIndicator()}
      </div>
    </div>
  );
}

function renderBilingualWelcomeMessages() {
  return (
    <div className="mb-12 space-y-8 mt-16">
      <div className="bg-gradient-to-r from-sage-50/90 to-ivory-100/90 backdrop-blur-sm rounded-lg px-8 py-6 shadow-sm border border-sage-100 text-center">
        <p
          className="text-lg md:text-xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          We invite you to join us as we begin this beautiful journey together, surrounded by the
          love of our family and friends
        </p>
      </div>

      <div className="bg-gradient-to-l from-orange-50/90 to-ivory-100/90 backdrop-blur-sm rounded-lg px-8 py-6 shadow-sm border border-orange-100">
        <p
          className="text-lg md:text-xl text-brown-700 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
          dir="rtl"
        >
          ندعوكم للانضمام إلينا ونحن نبدأ هذه الرحلة الجميلة معاً، محاطين بحب عائلتنا وأصدقائنا
        </p>
      </div>
    </div>
  );
}

function renderScrollDownIndicator() {
  return (
    <div className="animate-bounce">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-brown-300 to-transparent"></div>
        <ArrowDown className="w-5 h-5 text-brown-400" />
      </div>
    </div>
  );
}

function renderBottomGradient() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-ivory-50/80 to-transparent"></div>
  );
}

export default HeroSection;
