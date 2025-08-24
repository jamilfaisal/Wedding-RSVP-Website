import { getMonthAsFullWord, getDayWithSuffix } from '@/components/layout/utils';
import { weddingCountry, weddingStartDate } from '@/lib/config/wedding-config';

// TODO: Implement Weather API integration
function WeatherWidget(locale: string) {
  return (
    <div className="bg-gradient-to-r from-sage-50 to-orange-50 rounded-lg p-6 shadow-md border-2 border-sage-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-ivory-200 to-ivory-300 rounded-lg flex items-center justify-center flex-shrink-0 border border-ivory-300">
          <div className="w-6 h-6 text-brown-700 flex items-center justify-center">
            <span className="text-lg">☁️</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">Weather</h4>
          <div className="bg-ivory-100/80 rounded p-4 border border-sage-200">
            <p className="text-brown-600 font-light text-center italic">
              Live weather widget coming soon
            </p>
            <p className="text-brown-500 text-sm text-center mt-2">
              {weddingCountry} weather forecast for {getMonthAsFullWord(weddingStartDate, locale)}{' '}
              {getDayWithSuffix(weddingStartDate, locale)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
