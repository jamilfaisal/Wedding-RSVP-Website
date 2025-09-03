import { OPENWEATHER_API_KEY } from '@/lib/config/env';

export interface WeatherData {
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  city: string;
  date: string;
}

export interface WeatherIconMap {
  [key: string]: string;
}

interface OpenWeatherForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind?: {
    speed: number;
  };
}

interface OpenWeatherForecastResponse {
  list: OpenWeatherForecastItem[];
  city: {
    name: string;
  };
}

interface OpenWeatherCurrentResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind?: {
    speed: number;
  };
  name: string;
}

export const weatherIconMap: WeatherIconMap = {
  '01d': '☀️', // clear sky day
  '01n': '🌙', // clear sky night
  '02d': '⛅', // few clouds day
  '02n': '☁️', // few clouds night
  '03d': '☁️', // scattered clouds
  '03n': '☁️', // scattered clouds
  '04d': '☁️', // broken clouds
  '04n': '☁️', // broken clouds
  '09d': '🌧️', // shower rain
  '09n': '🌧️', // shower rain
  '10d': '🌦️', // rain day
  '10n': '🌧️', // rain night
  '11d': '⛈️', // thunderstorm
  '11n': '⛈️', // thunderstorm
  '13d': '❄️', // snow
  '13n': '❄️', // snow
  '50d': '🌫️', // mist
  '50n': '🌫️', // mist
};

export async function getWeatherData(
  city: string = 'Rome',
  countryCode: string = 'IT',
  date?: Date
): Promise<WeatherData> {
  try {
    const apiKey = OPENWEATHER_API_KEY();
    const targetDate = date || new Date();

    const now = new Date();
    const diffInDays = Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    let url: string;
    let weatherData: WeatherData;

    if (diffInDays <= 5 && diffInDays >= 0) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data: OpenWeatherForecastResponse = await response.json();

      const targetDateStr = targetDate.toISOString().split('T')[0];
      const forecastItem =
        data.list.find((item: OpenWeatherForecastItem) => {
          const itemDate = new Date(item.dt * 1000).toISOString().split('T')[0];
          return itemDate === targetDateStr;
        }) || data.list[0]; // Fallback to first item if exact date not found

      weatherData = {
        temperature: Math.round(forecastItem.main.temp),
        feelsLike: Math.round(forecastItem.main.feels_like),
        description: forecastItem.weather[0].description,
        humidity: forecastItem.main.humidity,
        windSpeed: Math.round(forecastItem.wind?.speed || 0),
        icon: weatherIconMap[forecastItem.weather[0].icon] || '☁️',
        city: data.city.name,
        date: new Date(forecastItem.dt * 1000).toLocaleDateString(),
      };
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data: OpenWeatherCurrentResponse = await response.json();

      weatherData = {
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind?.speed || 0),
        icon: weatherIconMap[data.weather[0].icon] || '☁️',
        city: data.name,
        date: new Date().toLocaleDateString(),
      };
    }

    return weatherData;
  } catch (error) {
    console.log('Weather API not available:', error);
    throw error;
  }
}
