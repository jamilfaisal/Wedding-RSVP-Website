import React from 'react';

export type ConfirmationEmailProps = {
  name?: string;
  attendance?: string;
  guests?: number | null;
  editUrl?: string;
};

export default function ConfirmationEmail({
  name,
  attendance,
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
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '10px 16px',
    borderRadius: 6,
    textDecoration: 'none',
    marginTop: 16,
  } as React.CSSProperties;

  return (
    <div style={wrapperStyle}>
      <table width="100%" role="presentation" cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <div style={containerStyle}>
                <div style={{ padding: '16px 24px', borderBottom: '1px solid #f1f5f9' }}>
                  <h1 style={h1Style}>Thanks for your RSVP</h1>
                </div>
                <div style={contentStyle}>
                  <p style={{ marginTop: 0 }}>Hi {name || 'there'},</p>

                  <p>
                    Thanks for your RSVP. We received your response: <strong>{attendance}</strong>.
                  </p>

                  {guests ? (
                    <p>
                      Number of guests: <strong>{guests}</strong>
                    </p>
                  ) : null}

                  {editUrl ? (
                    <div>
                      <p>If you need to make changes, click the button below to edit your RSVP.</p>
                      <a href={editUrl} style={buttonStyle}>
                        Edit RSVP
                      </a>
                    </div>
                  ) : null}

                  <p style={{ marginTop: 20 }}>Looking forward to celebrating with you 🎂</p>

                  <p style={{ marginBottom: 0 }}>— The Wedding Team</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
