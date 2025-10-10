import { brideFirstName, groomFirstName } from '@/lib/config/wedding-config';
import React from 'react';

export type CoupleNotificationEmailProps = {
  guestName?: string;
  guestEmail?: string;
  refreshmentsAttendance?: string;
  weddingAttendance?: string;
  guests?: number | null;
  secondGuestName?: string;
  guest1DietaryRestrictions?: string;
  guest2DietaryRestrictions?: string;
  submittedAt?: string;
};

export default function CoupleNotificationEmail({
  guestName,
  guestEmail,
  refreshmentsAttendance,
  weddingAttendance,
  guests,
  secondGuestName,
  guest1DietaryRestrictions,
  guest2DietaryRestrictions,
  submittedAt,
}: CoupleNotificationEmailProps) {
  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#f6f8fa',
    padding: '24px 0',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: '#111827',
    boxSizing: 'border-box',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 600,
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px',
    lineHeight: 1.5,
    fontSize: 16,
  };

  const h1Style: React.CSSProperties = {
    margin: 0,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: 600,
    color: '#0f172a',
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '16px',
    borderRadius: 6,
    marginTop: 16,
    border: '1px solid #e2e8f0',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 600,
    color: '#475569',
    marginBottom: 4,
    display: 'block',
  };

  const valueStyle: React.CSSProperties = {
    color: '#1e293b',
    marginBottom: 12,
  };

  const refreshmentsColor = refreshmentsAttendance === 'Yes' ? '#059669' : '#dc2626';
  const weddingColor = weddingAttendance === 'Yes' ? '#059669' : '#dc2626';
  const isAttendingAny = refreshmentsAttendance === 'Yes' || weddingAttendance === 'Yes';

  return (
    <div style={wrapperStyle}>
      <table width="100%" role="presentation" cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <div style={containerStyle}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <h1 style={h1Style}>New RSVP Received 📬</h1>
                </div>
                <div style={contentStyle}>
                  <p style={{ marginTop: 0 }}>Hello {`${groomFirstName} & ${brideFirstName}`},</p>

                  <p>You&apos;ve received a new RSVP for your wedding! Here are the details:</p>

                  <div style={sectionStyle}>
                    <div style={{ marginBottom: 12 }}>
                      <span style={labelStyle}>Guest Name:</span>
                      <span style={valueStyle}>{guestName || 'Not provided'}</span>
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <span style={labelStyle}>Email:</span>
                      <span style={valueStyle}>{guestEmail || 'Not provided'}</span>
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <span style={labelStyle}>Dec 19th Henna Party:</span>
                      <span style={{ ...valueStyle, color: refreshmentsColor, fontWeight: 600 }}>
                        {refreshmentsAttendance === 'Yes' ? '✅ Attending' : '❌ Not Attending'}
                      </span>
                    </div>

                    <div style={{ marginBottom: 12 }}>
                      <span style={labelStyle}>Dec 20th Wedding:</span>
                      <span style={{ ...valueStyle, color: weddingColor, fontWeight: 600 }}>
                        {weddingAttendance === 'Yes' ? '✅ Attending' : '❌ Not Attending'}
                      </span>
                    </div>

                    {isAttendingAny && (
                      <>
                        <div style={{ marginBottom: 12 }}>
                          <span style={labelStyle}>Number of Guests:</span>
                          <span style={valueStyle}>{guests || 1}</span>
                        </div>

                        {secondGuestName && (
                          <div style={{ marginBottom: 12 }}>
                            <span style={labelStyle}>Second Guest Name:</span>
                            <span style={valueStyle}>{secondGuestName}</span>
                          </div>
                        )}

                        {guest1DietaryRestrictions && (
                          <div style={{ marginBottom: 12 }}>
                            <span style={labelStyle}>Guest 1 Dietary Restrictions:</span>
                            <span style={valueStyle}>{guest1DietaryRestrictions}</span>
                          </div>
                        )}

                        {guest2DietaryRestrictions && guests && guests > 1 && (
                          <div style={{ marginBottom: 12 }}>
                            <span style={labelStyle}>Guest 2 Dietary Restrictions:</span>
                            <span style={valueStyle}>{guest2DietaryRestrictions}</span>
                          </div>
                        )}
                      </>
                    )}

                    {submittedAt && (
                      <div style={{ marginBottom: 0 }}>
                        <span style={labelStyle}>Submitted At:</span>
                        <span style={valueStyle}>{new Date(submittedAt).toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <p style={{ marginTop: 20, marginBottom: 0 }}>
                    This is an automated notification from your wedding RSVP website.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
