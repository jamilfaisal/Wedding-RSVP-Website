export function checkIsHomePage(pathname: string): boolean {
  return pathname === '/';
}

// Output example: December 20, 2025
export function formatDateToMonthDayYear(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Output example: 6:00 PM
export function extractTimeFromDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleString('en-US', options);
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
