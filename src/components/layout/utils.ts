import { rsvpDeadline, weddingStartDate, weddingTimezone } from '@/lib/config/wedding-config';

export function checkIsHomePage(pathname: string): boolean {
  return (
    pathname === '/' ||
    pathname === '/en' ||
    pathname === '/ar' ||
    Boolean(pathname.match(/^\/[a-z]{2}$/))
  );
}

export function formatWeddingStartTime(locale: string): string {
  return formatTime(weddingStartDate, locale);
}

// Output example: 4:00 PM
function formatTime(time: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: weddingTimezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(time);
}

export function formatRSVPDeadline(locale: string): string {
  return formatDate(rsvpDeadline, locale);
}

export function formatWeddingStartDate(locale: string): string {
  return formatDate(weddingStartDate, locale);
}

// Output example: December 20, 2025
function formatDate(dateToFormat: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: weddingTimezone,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateToFormat);
}

// Output example: December
export function getMonthAsFullWord(date: Date, locale: string): string {
  return date.toLocaleString(locale, { month: 'long' });
}

// Output example: 20th (English) or ٢٠ (Arabic)
export function getDayWithSuffix(date: Date, locale: string): string {
  const day = date.getDate();

  if (locale === 'ar') {
    return new Intl.NumberFormat('ar-EG').format(day);
  }

  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';
  return `${day}${suffix}`;
}

// Output example: 20241220T180000 (for calendar events)
export function formatDateForCalendar(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

// Output example: 2025 (English) or ٢٠٢٥ (Arabic)
export function formatYear(year: number, locale: string): string {
  if (locale === 'ar') {
    return new Intl.NumberFormat('ar-EG', { useGrouping: false }).format(year);
  }
  return year.toString();
}

// Output example: 4:35 PM
export function formatCurrentTimeInTimezone(locale: string, timezone: string): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

// Output example: GMT+1
export function getTimezoneAbbreviation(timezone: string): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en', {
    timeZone: timezone,
    timeZoneName: 'short',
  });
  const parts = formatter.formatToParts(now);
  const timeZonePart = parts.find((part) => part.type === 'timeZoneName');
  return timeZonePart?.value || timezone;
}

export function getUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
