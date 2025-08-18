import { WeddingInfo } from '@/components/layout/types';

export const generateCalendarEvent = (weddingInfo: WeddingInfo) => {
  const event = getWeddingInfo(
    weddingInfo.groomFirstName,
    weddingInfo.brideFirstName,
    weddingInfo.weddingStartDate,
    weddingInfo.weddingEndDate,
    weddingInfo.weddingCity,
    weddingInfo.weddingCountry
  );
  const emailAfterAtSign = weddingInfo.email.split('@')[1];
  const UID = `${Date.now()}@${emailAfterAtSign}`;
  const PRODID = `-//${weddingInfo.groomFirstName} & ${weddingInfo.brideFirstName}//Wedding//EN`;

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:${PRODID}
BEGIN:VEVENT
UID:${UID}
DTSTAMP:${new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')}
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
  link.download = `${weddingInfo.groomFirstName}-${weddingInfo.brideFirstName}-wedding.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const addToGoogleCalendar = (weddingInfo: WeddingInfo) => {
  const event = getWeddingInfo(
    weddingInfo.groomFirstName,
    weddingInfo.brideFirstName,
    weddingInfo.weddingStartDate,
    weddingInfo.weddingEndDate,
    weddingInfo.weddingCity,
    weddingInfo.weddingCountry
  );

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDateTime}/${event.endDateTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
  window.open(googleCalendarUrl, '_blank');
};

function getWeddingInfo(
  groomFirstName: string,
  brideFirstName: string,
  weddingStartDate: Date,
  weddingEndDate: Date,
  weddingCity: string,
  weddingCountry: string
) {
  return {
    title: `${groomFirstName} & ${brideFirstName}'s Wedding`,
    startDateTime: weddingStartDate
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, ''),
    endDateTime: weddingEndDate
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, ''),
    description: 'Join us as we celebrate our love and begin this beautiful journey together!',
    location: `${weddingCity}, ${weddingCountry}`,
  };
}
