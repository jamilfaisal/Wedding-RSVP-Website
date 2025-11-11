import React from 'react';

export type BroadcastUpdatesEmailProps = {
  name?: string;
};

export default function BroadcastUpdatesEmail({ name }: BroadcastUpdatesEmailProps) {
  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#f6f8fa',
    padding: '24px 0',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: '#111827',
    boxSizing: 'border-box',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 640,
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  };

  const headerStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderBottom: '1px solid #f1f5f9',
  };

  const h1Style: React.CSSProperties = {
    margin: 0,
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 700,
    color: '#0f172a',
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px',
    lineHeight: 1.6,
    fontSize: 16,
  };

  const sectionTitle: React.CSSProperties = {
    fontWeight: 600,
    color: '#0f172a',
    marginTop: 16,
    marginBottom: 8,
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: 18,
    marginTop: 4,
    marginBottom: 12,
  };

  const small: React.CSSProperties = { color: '#64748b', fontSize: 13 };

  return (
    <div style={wrapperStyle}>
      <table width="100%" role="presentation" cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <div style={containerStyle}>
                <div style={headerStyle}>
                  <h1 style={h1Style}>Updates on Faris & Zina’s Wedding 💍</h1>
                </div>
                <div style={contentStyle}>
                  <p style={{ marginTop: 0 }}>Hi {name || 'everyone'},</p>

                  <p>
                    We’re so excited to be counting down the days until the wedding and wanted to
                    share a few updates with you.
                  </p>

                  <p style={sectionTitle as React.CSSProperties}>What’s new on the website:</p>
                  <ul style={listStyle}>
                    <li>
                      <strong>Gift Registry:</strong> You can now find all the registry details on
                      the new “Gift Registry” page.
                    </li>
                    <li>
                      <strong>Guest Playlist:</strong> Add your favorite songs to our wedding
                      playlist in the “Wedding Playlist” section.
                    </li>
                    <li>
                      <strong>Henna Party:</strong> Details about the Henna Party (the evening
                      before the wedding) are now included in the “Ceremony” section.
                    </li>
                    <li>
                      <strong>Accommodation:</strong> We’ve secured a special rate for all our
                      guests at our main hotel, the Rome Cavalieri. You can find booking details and
                      more information in the “Accommodation” section.
                    </li>
                    <li>
                      <strong>FAQs:</strong> We’ve started filling out the FAQ section with answers
                      to common questions about dress code, transportation, timing, dietary
                      restrictions, and more.
                    </li>
                  </ul>

                  <p>
                    In the coming weeks, we’ll also be adding a full timeline of events so you can
                    plan ahead. Feel free to explore the updates and check back soon for more
                    details. We can’t wait to celebrate with all of you!
                  </p>

                  <p style={{ marginTop: 20, marginBottom: 0 }}>
                    Warmly,
                    <br />
                    Faris & Zina
                  </p>

                  <p style={{ ...small, marginTop: 20 }}>
                    You received this email because you previously submitted an RSVP on our website.
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
