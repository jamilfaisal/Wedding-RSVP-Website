'use client';

import { useEffect, useState } from 'react';
import { getMonthAsFullWord, getDayWithSuffix } from '@/components/layout/utils';
import { weddingStartDate } from '@/lib/config/wedding-config';
import { WeatherData } from '@/lib/api/weather';

interface WeatherWidgetProps {
  locale: string;
  t: (key: string) => string;
}

function WeatherWidget({ locale, t }: WeatherWidgetProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(false);

        const weddingDate = weddingStartDate.toISOString().split('T')[0];

        const response = await fetch(`/api/weather?city=Rome&country=IT&date=${weddingDate}`);

        if (!response.ok) {
          console.log('Weather API not available, showing coming soon message');
          setError(true);
          return;
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.log('Weather fetch error:', err, '- showing coming soon message');
        setError(true);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [locale]);

  const formatDescription = (description: string) => {
    return description
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-gradient-to-r from-sage-50 to-orange-50 rounded-lg p-6 shadow-md border-2 border-sage-100">
      <div className="flex items-start gap-4">
        {renderWeatherIcon(loading, weatherData)}
        <div className="flex-1">
          <h4 className="text-xl font-serif text-brown-800 mb-3">{t('weather.title')}</h4>

          {loading ? (
            renderLoadingMessage(t)
          ) : weatherData ? (
            <div className="bg-ivory-100/80 rounded p-4 border border-sage-200 space-y-3">
              {displayTemperature(weatherData, t, formatDescription)}
              {displayWeatherDetails(t, weatherData)}
              {displayDateAndLocation(weatherData, t, locale)}
            </div>
          ) : (
            renderWeatherComingSoon(error, t, locale)
          )}
        </div>
      </div>
    </div>
  );
}

function renderWeatherIcon(loading: boolean, weatherData: WeatherData | null) {
  return (
    <div className="w-12 h-12 bg-gradient-to-br from-ivory-200 to-ivory-300 rounded-lg flex items-center justify-center flex-shrink-0 border border-ivory-300">
      <div className="w-6 h-6 text-brown-700 flex items-center justify-center">
        <span className="text-lg">{loading ? '⏳' : weatherData?.icon || '☁️'}</span>
      </div>
    </div>
  );
}

function renderLoadingMessage(t: (key: string) => string) {
  return (
    <div className="bg-ivory-100/80 rounded p-4 border border-sage-200">
      <p className="text-brown-600 font-light text-center italic">{t('weather.loading')}</p>
    </div>
  );
}

function renderWeatherComingSoon(error: boolean, t: (key: string) => string, locale: string) {
  return (
    <div className="bg-ivory-100/80 rounded p-4 border border-sage-200">
      <p className="text-brown-600 font-light text-center italic">
        {error ? t('weather.detailsComingSoon') : t('weather.liveWidgetComingSoon')}
      </p>
      <p className="text-brown-500 text-sm text-center mt-2">
        {t('weddingInfo.weddingCountry')} {t('weather.forecast')}{' '}
        {getMonthAsFullWord(weddingStartDate, locale)} {getDayWithSuffix(weddingStartDate, locale)}
      </p>
    </div>
  );
}

function displayDateAndLocation(
  weatherData: WeatherData,
  t: (key: string) => string,
  locale: string
) {
  return (
    <div className="text-center pt-2 border-t border-sage-200">
      <p className="text-brown-500 text-sm">
        {weatherData.city} {t('weather.on')} {getMonthAsFullWord(weddingStartDate, locale)}{' '}
        {getDayWithSuffix(weddingStartDate, locale)}
      </p>
    </div>
  );
}

function displayWeatherDetails(t: (key: string) => string, weatherData: WeatherData) {
  return (
    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-sage-200">
      <div className="text-center">
        <div className="text-xs text-brown-500 font-medium uppercase tracking-wide">
          {t('weather.humidity')}
        </div>
        <div className="text-brown-700 font-medium">
          {weatherData.humidity}
          {t('weather.percent')}
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs text-brown-500 font-medium uppercase tracking-wide">
          {t('weather.windSpeed')}
        </div>
        <div className="text-brown-700 font-medium">
          {weatherData.windSpeed} {t('weather.kmh')}
        </div>
      </div>
    </div>
  );
}

function displayTemperature(
  weatherData: WeatherData,
  t: (key: string) => string,
  formatDescription: (description: string) => string
) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-brown-800 mb-1">
        {weatherData.temperature}
        {t('weather.celsius')}
      </div>
      <div className="text-sm text-brown-600 mb-2">
        {formatDescription(weatherData.description)}
      </div>
      <div className="text-sm text-brown-500">
        {t('weather.feelsLike')} {weatherData.feelsLike}
        {t('weather.celsius')}
      </div>
    </div>
  );
}

export default WeatherWidget;
