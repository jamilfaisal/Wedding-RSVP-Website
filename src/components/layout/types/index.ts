export interface WeddingInfo {
  brideFirstName: string;
  brideFullName: string;
  groomFirstName: string;
  groomFullName: string;
  weddingStartDate: Date; // UTC date with time
  weddingEndDate: Date; // UTC date with time
  weddingTimezone: string;
  weddingCity: string;
  weddingCountry: string;
  venueName: string;
  email: string;
  rsvpDeadline: Date;
}
