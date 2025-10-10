import { brideFirstName, groomFirstName } from '@/lib/config/wedding-config';
import React from 'react';

export type ConfirmationEmailProps = {
  name?: string;
  refreshmentsAttendance?: string;
  weddingAttendance?: string;
  guests?: number | null;
  editUrl?: string;
};

export default function ConfirmationEmail({
  name,
  refreshmentsAttendance,
  weddingAttendance,
  guests,
  editUrl,
}: ConfirmationEmailProps) {
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

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '12px 20px',
    marginTop: 20,
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: 6,
    textDecoration: 'none',
    fontWeight: 600,
  };

  return (
    <div style={wrapperStyle}>
      <table width="100%" role="presentation" cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <div style={containerStyle}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <h1 style={h1Style}>Your RSVP is Confirmed 🎉</h1>
                </div>
                <div style={contentStyle}>
                  <p style={{ marginTop: 0 }}>Hi {name || 'friend'},</p>

                  <p>We&apos;re thrilled to have received your RSVP! Your response:</p>

                  {(refreshmentsAttendance === 'Yes' || weddingAttendance === 'Yes') && guests ? (
                    <p>
                      Guests attending: <strong>{guests}</strong>
                    </p>
                  ) : null}

                  {refreshmentsAttendance === 'Yes' && (
                    <p
                      style={{
                        margin: '8px 0',
                        padding: '8px',
                        backgroundColor: '#e6f7ff',
                        borderRadius: '4px',
                      }}
                    >
                      ✅ <strong>Attending Dec 19th Henna Party</strong>
                    </p>
                  )}

                  {weddingAttendance === 'Yes' && (
                    <p
                      style={{
                        margin: '8px 0',
                        padding: '8px',
                        backgroundColor: '#e6f7ff',
                        borderRadius: '4px',
                      }}
                    >
                      ✅ <strong>Attending Wedding on Dec 20th</strong>
                    </p>
                  )}

                  {refreshmentsAttendance === 'No' && weddingAttendance === 'No' && (
                    <p
                      style={{
                        margin: '8px 0',
                        padding: '8px',
                        backgroundColor: '#fff2e8',
                        borderRadius: '4px',
                      }}
                    >
                      😔 <strong>Unable to attend either event</strong>
                    </p>
                  )}

                  {refreshmentsAttendance === 'Yes' || weddingAttendance === 'Yes' ? (
                    <p style={{ marginTop: 20 }}>
                      We can&apos;t wait to celebrate this special day with you 🎂
                    </p>
                  ) : (
                    <p style={{ marginTop: 20 }}>
                      We&apos;re sorry you can&apos;t make it, but thank you for letting us know!
                      We&apos;ll miss you 💕
                    </p>
                  )}

                  <p>If you need to make changes to your RSVP, you can do so here:</p>

                  <a href={editUrl} style={buttonStyle}>
                    Edit My RSVP
                  </a>

                  <p style={{ margin: '16px 0 0', fontSize: 14 }}>
                    Or copy & paste this link into your browser: <br />
                    <a href={editUrl}>{editUrl}</a>
                  </p>

                  <p style={{ marginTop: 20, marginBottom: 0 }}>
                    With love,
                    <br />
                    {`${groomFirstName} & ${brideFirstName}` || 'Your Wedding Hosts'}
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
