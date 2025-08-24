import {
  rsvpDeadline,
  weddingEndDate,
  weddingStartDate,
  weddingTimezone,
} from '@/lib/config/wedding-config';

export function checkIsHomePage(pathname: string): boolean {
  return (
    pathname === '/' ||
    pathname === '/en' ||
    pathname === '/ar' ||
    Boolean(pathname.match(/^\/[a-z]{2}$/))
  );
}

export function formatWeddingStartTime(): string {
  return formatTime(weddingStartDate);
}

export function formatWeddingEndTime(): string {
  return formatTime(weddingEndDate);
}

// Output example: 4:00 PM
function formatTime(time: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: weddingTimezone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(time);
}

export function formatRSVPDeadline(): string {
  return formatDate(rsvpDeadline);
}

export function formatWeddingStartDate(): string {
  return formatDate(weddingStartDate);
}

export function formatWeddingEndDate(): string {
  return formatDate(weddingEndDate);
}

// Output example: December 20, 2025
function formatDate(dateToFormat: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: weddingTimezone,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateToFormat);
}

// Output example: December
export function getMonthAsFullWord(date: Date): string {
  return date.toLocaleString('en-US', { month: 'long' });
}

// Output example: 20th
export function getDayWithSuffix(date: Date): string {
  const day = date.getDate();
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
