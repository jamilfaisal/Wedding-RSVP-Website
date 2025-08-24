import { formatDateForCalendar } from '@/components/layout/utils';
import {
  groomFirstName,
  brideFirstName,
  weddingStartDate,
  weddingCity,
  weddingCountry,
  weddingEndDate,
  email,
} from './config/wedding-config';

export const generateCalendarEvent = () => {
  const event = getWeddingInfo();
  const emailAfterAtSign = email.split('@')[1];
  const UID = `${Date.now()}@${emailAfterAtSign}`;
  const PRODID = `-//${groomFirstName} & ${brideFirstName}//Wedding//EN`;

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:${PRODID}
BEGIN:VEVENT
UID:${UID}
DTSTAMP:${formatDateForCalendar(new Date())}
DTSTART:${event.startDateTime}
DTEND:${event.endDateTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${groomFirstName}-${brideFirstName}-wedding.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const addToGoogleCalendar = () => {
  const event = getWeddingInfo();

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDateTime}/${event.endDateTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  window.open(googleCalendarUrl, '_blank');
};

function getWeddingInfo() {
  return {
    title: `${groomFirstName} & ${brideFirstName}'s Wedding`,
    startDateTime: formatDateForCalendar(weddingStartDate),
    endDateTime: formatDateForCalendar(weddingEndDate),
    description: 'Join us as we celebrate our love and begin this beautiful journey together!',
    location: `${weddingCity}, ${weddingCountry}`,
  };
}
