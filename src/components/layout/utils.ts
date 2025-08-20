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
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const minutesStr = minutes.toString().padStart(2, '0');
  return `${hours}:${minutesStr} ${ampm}`;
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
