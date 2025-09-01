# 💒 Wedding RSVP Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Airtable](https://img.shields.io/badge/Airtable-API-orange?style=flat&logo=airtable)](https://airtable.com/)

A **multilingual (English + Arabic), mobile-first wedding website** with secure RSVP system built with Next.js, Tailwind CSS, Airtable, and Resend.

## ✨ Features

- 📱 **Mobile-first responsive design** with English/Arabic support (RTL)
- 🔐 **Password-protected access** with JWT authentication
- 📋 **Complete RSVP system** - attendance tracking, plus-ones, dietary restrictions
- ✏️ **Editable RSVPs** via secure tokenized links (30-day expiration)
- 📧 **Email notifications** for guests and couple
- 🏨 **Event information** - accommodations, tourist info, venue details
- 📱 **QR code integration** for photo sharing

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/jamilfaisal/Wedding-RSVP-Website.git
cd Wedding-RSVP-Website
npm install

# Set up environment (see .env.example)
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

Visit [http://localhost:3000/en](http://localhost:3000/en) to see your wedding website!

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── [locale]/       # Localized pages (en/ar)
│   └── api/            # API routes
├── components/         # React components
├── lib/               # Utilities
│   ├── airtable/      # Database operations
│   ├── resend/        # Email service
│   └── config/        # Settings
└── middleware.ts      # Auth & locale handling
```

## 🛠️ Tech Stack

| Category                 | Technology                                                                                     | Purpose                         |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------- |
| **Framework**            | ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)              | React framework with App Router |
| **Language**             | ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)       | Type-safe JavaScript            |
| **Styling**              | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat&logo=tailwind-css)   | Utility-first CSS framework     |
| **Internationalization** | ![i18next](https://img.shields.io/badge/i18next-React-green?style=flat)                        | Client-side translations        |
| **Database**             | ![Airtable](https://img.shields.io/badge/Airtable-API-orange?style=flat&logo=airtable)         | No-code database solution       |
| **Email**                | ![Resend](https://img.shields.io/badge/Resend-API-purple?style=flat)                           | Transactional email service     |
| **Authentication**       | ![JWT](https://img.shields.io/badge/JWT-Tokens-red?style=flat)                                 | JSON Web Tokens                 |
| **Tooling**              | ![ESLint](https://img.shields.io/badge/ESLint-Flat_Config-4B32C3?style=flat&logo=eslint)       | Code linting                    |
|                          | ![Prettier](https://img.shields.io/badge/Prettier-Code_Format-F7B93E?style=flat&logo=prettier) | Code formatting                 |

## 🚀 Development Guide

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/jamilfaisal/Wedding-RSVP-Website.git
cd Wedding-RSVP-Website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local  # Edit with your values

# 4. Start development server
npm run dev
```

### 🖥️ Available Scripts

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `npm run dev`             | Start development server  |
| `npm run build`           | Build for production      |
| `npm run start`           | Start production server   |
| `npm run lint`            | Run ESLint                |
| `npm run typecheck`       | TypeScript type checking  |
| `npm run format`          | Format code with Prettier |
| `npm run clean`           | Clean build artifacts     |
| `npm run reset:deps`      | Reset node_modules        |
| `npm run send-test-email` | Send test email           |
| `npm run sitemap`         | Generate sitemap          |

## 🔌 API Reference

### Authentication Endpoints

#### `POST /api/auth`

**Authenticate with wedding password**

```json
{
  "password": "your-wedding-password"
}
```

**Response:**

- ✅ Success: Sets `wedding-auth` cookie, returns `{ success: true }`
- ❌ Error: `{ success: false, code: "INVALID_PASSWORD" }`

#### `GET /api/auth`

**Check authentication status**

**Response:**

```json
{
  "authenticated": true
}
```

### RSVP Endpoints

#### `POST /api/rsvp`

**Create new RSVP**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "attendingRefreshments": true,
  "attendingWedding": true,
  "numberOfGuests": 2,
  "secondGuestName": "Jane Doe",
  "guest1DietaryRestrictions": "Vegetarian",
  "guest2DietaryRestrictions": "No restrictions"
}
```

**Response:**

```json
{
  "success": true,
  "code": "RSVP_CREATED"
}
```

#### `GET /api/rsvp/edit?token=<jwt>`

**Fetch existing RSVP for editing**

**Response:**

```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
    // ... other RSVP fields
  }
}
```

#### `PUT /api/rsvp/edit?token=<jwt>`

**Update existing RSVP**

Same request body as `POST /api/rsvp`

**Response:**

```json
{
  "success": true,
  "code": "RSVP_UPDATED"
}
```

## 📧 Email System

The application sends two types of emails when `SEND_EMAILS_FEATURE_TOGGLE=true`:

### 📬 Guest Confirmation Email

- **Sent to:** Guest who submitted RSVP
- **Contains:** RSVP confirmation details + secure edit link
- **Template:** `src/lib/resend/emailTemplates/confirmation-email.tsx`

### 📊 Couple Notification Email

- **Sent to:** Wedding couple (configured in email template)
- **Contains:** Structured RSVP data for wedding planning
- **Template:** `src/lib/resend/emailTemplates/couple-notification-email.tsx`

## 🌍 Internationalization (i18n)

### Supported Languages

- 🇺🇸 **English** (`/en/...`)
- 🇸🇦 **Arabic** (`/ar/...`) with full RTL support

### Translation Files

- `public/locales/en/common.json` - English translations
- `public/locales/ar/common.json` - Arabic translations

## 🔒 Security Features

### 🛡️ Authentication & Authorization

- **Password-protected access** with shared wedding password
- **JWT-based session management** (24-hour expiration)
- **httpOnly cookies** prevent XSS attacks
- **Secure token-based RSVP editing** (30-day expiration)

## 📈 Performance Optimization

- **Server-side rendering** for faster initial page loads
- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports where beneficial
- **Lazy loading** for non-critical components
- **Efficient API calls** with proper error handling and retries

## 📜 License & Acknowledgments

This project is licensed under the terms specified in the `LICENSE` file.
