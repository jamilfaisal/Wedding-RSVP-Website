## Wedding RSVP Website

A multilingual (English + Arabic), mobile-first wedding website & RSVP system built with Next.js App Router, Tailwind CSS, Airtable, and Resend. It serves public event information and securely collects and lets guests later edit RSVPs via signed tokens.

## 1. Features

Guest-facing

- Home, details (dress code, transport, venue), accommodations, tourist info
- RSVP form (attendance for multiple events, second guest, dietary restrictions)
- Edit RSVP via secure tokenized link (expires in 30 days per JWT config)
- Language switcher (EN / AR) with proper RTL layout for Arabic
- QR code for photo sharing app (configurable URL)

Emails

- Guest confirmation email (includes edit link)
- Couple notification email with structured data

Security / Auth

- Password gate (one shared wedding password) → issues signed JWT stored in httpOnly cookie `wedding-auth`
- Middleware-enforced locale + auth + RSVP edit token validation

Resilience & Observability

- Airtable client with retry + exponential backoff & structured logging hooks

## 2. Architecture & Flow

High level request lifecycle (RSVP create):

1. Guest submits form → POST `/api/rsvp`
2. Input validated (required fields, email format, uniqueness by email)
3. Airtable record created with generated edit JWT stored in the `Edit Token (JWT)` column
4. If `SEND_EMAILS_FEATURE_TOGGLE=true`, send confirmation & couple notification via Resend
5. Response `{ success: true, code: 'RSVP_CREATED' }`

Edit flow:

1. Guest follows emailed link: `<RSVP_EDIT_URL>?token=<jwt>` (middleware checks token structure/purpose)
2. Client fetches existing RSVP via GET `/api/rsvp/edit?token=...`
3. Guest submits updates via PUT `/api/rsvp/edit?token=...`

Auth flow:

1. User enters wedding password (/login)
2. `/api/auth` validates against `WEDDING_PASSWORD`, signs JWT (24h) → sets `wedding-auth` cookie
3. Middleware attaches protection for routes except explicit bypasses.

Locale detection:

- Accept-Language header matched against `[en, ar]` using `@formatjs/intl-localematcher` + Negotiator, redirecting to prefixed path (e.g. `/en/...`).

## 3. Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript / React 19
- Styling: Tailwind CSS
- i18n: i18next + react-i18next (in-browser switch)
- Data Store: Airtable (REST API v0)
- Email: Resend
- Auth / Tokens: JSON Web Tokens (jsonwebtoken / jose for verification in middleware)
- Build / Tooling: ESLint (flat config), Prettier, TypeScript

## 4. Directory Structure (Key)

- `src/app/` – Next.js routes, layouts, API handlers
- `src/lib/airtable/` – Airtable client, RSVP logic, types
- `src/lib/resend/` – Email sender + React email templates
- `src/lib/config/` – Environment & wedding metadata
- `src/lib/i18n/` – i18n provider
- `src/components/` – UI modules (auth, layout, pages, shared, ui)
- `public/locales/` – Translation JSON files
- `src/middleware.ts` – Auth + locale + security headers
- `src/test-scripts/` – Manual test utilities (see note about missing script below)

## 5. Environment Variables

Required (runtime will throw if missing when accessed):

- `JWT_SECRET` – HMAC secret for RSVP edit tokens + auth cookie verification
- `WEDDING_PASSWORD` – Shared password to enter the site
- `AIRTABLE_API_KEY` – Airtable personal access token
- `AIRTABLE_BASE_ID` – Airtable base ID
- `AIRTABLE_TABLE_NAME` – Defaults to `RSVPs` if omitted
- `RESEND_API_KEY` (or `RESEND_KEY`) – Resend API key
- `RESEND_SENDER_EMAIL` – From address (fallback: Resend sandbox)
- `RSVP_EDIT_URL` – Absolute URL to client RSVP edit page (e.g. `https://yourdomain.com/en/rsvp/edit`)
- `SEND_EMAILS_FEATURE_TOGGLE` – Set to `true` to enable sending
- `NEXT_PUBLIC_SITE_URL` – Used for metadata base URL (SEO, sitemap)
- `NEXT_PUBLIC_POV_APP_URL` – URL encoded into QR code for photo sharing

## 6. Running the Project

Install dependencies:

```
npm install
```

Development:

```
npm run dev
```

Visit: http://localhost:3000/en (or /ar)

Type check & lint:

```
npm run typecheck
npm run lint
```

Production build:

```
npm run build
npm run start
```

Sitemap generation runs automatically post-build (`next-sitemap`).

## 7. API Endpoints

`POST /api/auth` – Body: `{ password }` → Sets auth cookie or returns `INVALID_PASSWORD`.
`GET /api/auth` – Check authentication status.

`POST /api/rsvp` – Create RSVP. Body shape (CreateRSVPInput):

```
{
  fullName: string;
  email: string;
  attendingRefreshments: boolean;
  attendingWedding: boolean;
  numberOfGuests: string; // numeric string
  secondGuestName: string;
  guest1DietaryRestrictions: 'None'|'Vegan'|'Vegetarian'|'Lactose Intolerant'|'Gluten Allergy'|'';
  guest2DietaryRestrictions: same as above;
}
```

Responses codes: `RSVP_CREATED`, or errors like `RSVP_ALREADY_EXISTS`, `INVALID_EMAIL_FORMAT`.

`GET /api/rsvp/edit?token=...` – Fetch existing RSVP (validated token).
`PUT /api/rsvp/edit?token=...` – Update RSVP (same shape minus `id` field, token maps to record).

Common error codes defined in `src/lib/api/errors.ts`

## 8. Airtable Schema

Table: `RSVPs`

- Name (text)
- Email (email)
- Attending Refreshments Dec 19th (single select: Yes/No)
- Attending Wedding Dec 20th (single select: Yes/No)
- Number of Guests (number)
- Second Guest Name (text, optional)
- Guest 1 Dietary Restrictions (single select)
- Guest 2 Dietary Restrictions (single select)
- RSVP Date (created time – optional in type, automatically present)
- Edit Token (JWT) (text)

## 9. Email Workflows

Located in `src/lib/resend/`:

- `confirmation-email.tsx` – React template rendered & sent to guest.
- `couple-notification-email.tsx` – Sent to couple email from `wedding-config`.

Trigger conditions:

- Emails only send if `SEND_EMAILS_FEATURE_TOGGLE=true`.
- Edit URL assembled using `RSVP_EDIT_URL` + token.

## 10. Internationalization (i18n)

- Managed entirely client-side via i18next.
- Resource bundles: `public/locales/{en,ar}/common.json`.
- `I18nProvider` sets and updates language; middleware ensures URL prefixes.
- Arabic uses RTL direction; components ask for `locale` to set `dir` when needed.

## 11. Security Notes

- httpOnly cookie auth + JWT verification via `jose` in middleware.
- CSP, HSTS, Frame busting, Permissions-Policy, Referrer-Policy headers added in middleware.
- Tokenized RSVP edit links (purpose + email claim validated; expiration handled by JWT lib).
- Exponential retry for Airtable to reduce transient failures.

## 12. Developer Tooling & Scripts

Package scripts:

- `dev` – Start Next.js dev server
- `build` – Type check, build, generate sitemap
- `start` – Run production server
- `lint` – Run Next.js lint + ESLint
- `typecheck` – Run `tsc --noEmit`
- `format` – Prettier format
- `sitemap` / `postbuild` – Generate sitemap via `next-sitemap`
- `send-test-email` – Execute `src/test-scripts/send_test_email.ts`
- `clean` – Remove `.next` + `node_modules`
- `reset:deps` – Also removes lockfile for a fresh install

Manual test utilities (existing):

- `src/test-scripts/send_test_email.ts` – Sends a test email (requires email env vars)
- `src/test-scripts/test_full_rsvp_flow.ts` – End-to-end create/edit flow (ensure env + Airtable configured)

## 13. License & Acknowledgements

Licensed under the terms in `LICENSE`.

---
