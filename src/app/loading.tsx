import React, { JSX } from 'react';

export default function Loading(): JSX.Element {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        padding: 16,
      }}
      aria-busy="true"
      aria-live="polite"
    >
      <div style={{ textAlign: 'center' }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 50 50"
          role="img"
          aria-label="Loading"
          style={{ display: 'block', margin: '0 auto' }}
        >
          <g>
            <circle cx="25" cy="25" r="20" fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <g>
              <path
                d="M25 5 A20 20 0 0 1 45 25"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 25 25;360 25 25"
                dur="1s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </svg>
        <div style={{ marginTop: 12, color: '#374151', fontSize: 14 }}>Loading...</div>
      </div>
    </div>
  );
}
