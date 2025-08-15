# Wedding RSVP Website

A clean, multilingual wedding website and RSVP system built with Next.js and Tailwind — optimized for ease of use, accessibility, and a smooth guest experience.

This repository contains a guest-facing site (event details, travel guides, photo galleries) and an admin dashboard for managing RSVPs backed by Airtable.

## Table of contents

- [Quick overview](#quick-overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project layout](#project-layout)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment variables](#environment-variables)
  - [Development](#development)
  - [Build & run](#build--run)
- [Security & privacy notes](#security--privacy-notes)
- [License & acknowledgements](#license--acknowledgements)

## Quick overview

- Purpose: public-facing wedding site + RSVP collection with an admin view.
- Goals: accessible, mobile-first, multilingual, easy to deploy to Vercel.

## Features

Guest-facing

- Home: hero, date & location, welcome message, countdown, photo gallery
- Event details: venue info + map, timezone-aware schedule, dress code, downloadable .ics
- RSVP form: attendance, meal choices, accessibility needs, song requests, editable confirmation email
- Travel & stay: hotels, maps, and transit tips
- Dining & activities: curated restaurant and attraction guides

Admin

- Secure admin login
- Browse, search, filter RSVPs
- Export RSVPs to CSV
- Send reminders
- Toggle RSVP availability

## Tech stack

- Frontend: Next.js (App Router), React, Tailwind CSS, Headless UI
- Backend: Vercel Serverless Functions (API routes)
- Database: Airtable
- Email: Resend API
- Maps: Google Maps
- Utilities: day.js, ics.js, i18next

## Project layout

Key folders (under `src/`):

- `components/` — UI components
- `app/` — Next.js App Router pages & layout
- `lib/` — utilities, API helpers
- `public/` — static assets

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn
- Airtable account + API key
- Google Maps API key (optional but recommended for maps)
- Resend API key (for emails)

### Install

Clone and install dependencies:

```bash
npm install
```

### Environment variables

Create a `.env.local` in the project root with the variables below (replace values):

```env
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
GOOGLE_MAPS_API_KEY=your_google_maps_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://example.com
```

### Development

Start the dev server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000

### Build & run

```bash
npm run build
npm run start
```

# Airtable Schema

## Table: RSVPs

| Field Name             | Field Type       | Example / Options                                                                                                                                                         |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                   | Single line text | "John Smith"                                                                                                                                                              |
| Email                  | Email            | "guest@example.com"                                                                                                                                                       |
| Phone                  | Phone number     | "+1 (555) 123-4567"                                                                                                                                                       |
| Attendance             | Single select    | Yes, No                                                                                                                                                                   |
| Number of Guests       | Number (integer) | 3                                                                                                                                                                         |
| Guest Names            | Long text        | "Jane Smith, Alex Smith"                                                                                                                                                  |
| Meal Selection         | Single select    | Standard, Vegetarian, Vegan, Gluten-Free, No meal                                                                                                                         |
| Dietary Restrictions   | Multi-select     | Vegetarian, Vegan, Gluten-Free, Dairy-Free, Nut-Free, Shellfish-Free, Kosher, Halal, Other                                                                                |
| Special Accommodations | Multi-select     | Wheelchair access, Large print menu, Sign language interpreter, Assistive listening device, Close seating to exits, Step-free access, Service animal accommodation, Other |
| Song Request           | Long text        | "Perfect - Ed Sheeran"                                                                                                                                                    |
| Notes                  | Long text        | "Will arrive late"                                                                                                                                                        |
| RSVP Date              | Created time     | Auto-generated                                                                                                                                                            |
| Edit Token (JWT)       | Single line text | (System-generated secure link token)                                                                                                                                      |
| Confirmation Sent      | Checkbox         | ☑                                                                                                                                                                        |

## Security & privacy notes

- Use HTTPS in production (Vercel provides this by default).
- Add CAPTCHA (hCaptcha) on RSVP submissions to reduce spam.
- Rate limiting: consider server-side limits (e.g., 1 submission / 5s / IP) on the API route handling RSVPs.
- If storing guest data, document retention and deletion policies to remain GDPR-friendly.

## License & acknowledgements

This project is licensed under the terms in `LICENSE`.

Thanks to: Next.js, Tailwind CSS, Airtable, Google Maps, Resend, Headless UI
