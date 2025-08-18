export function checkIsHomePage(pathname: string): boolean {
  return pathname === '/';
}

// Output example: December 20, 2025
export function formatDateToLocaleString(date: Date): string {
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
