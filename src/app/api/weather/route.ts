import { NextRequest, NextResponse } from 'next/server';
import { getWeatherData } from '@/lib/api/weather';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city') || 'Rome';
    const countryCode = searchParams.get('country') || 'IT';
    const dateStr = searchParams.get('date');

    let date: Date | undefined;
    if (dateStr) {
      date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
      }
    }

    const weatherData = await getWeatherData(city, countryCode, date);

    return NextResponse.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}
