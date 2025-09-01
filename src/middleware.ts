import { NextResponse, NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { jwtVerify } from 'jose';

const locales = ['en', 'ar'];
const defaultLocale = 'en';
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'wedding-secret-key-change-in-production'
);

function getLocale(request: NextRequest): string {
  const acceptedLanguage = request.headers.get('Accept-Language') ?? undefined;
  const headers = { 'accept-language': acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('wedding-auth')?.value;
  if (!token) {
    return false;
  }

  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (skipMiddleware(pathname)) {
    if (pathname === '/login' && (await isAuthenticated(request))) {
      return redirectToHomepage(request);
    }
    // Handle locale-based login redirects
    const loginPathRegex = /^\/(en|ar)\/login$/;
    if (loginPathRegex.test(pathname) && (await isAuthenticated(request))) {
      return redirectToHomepage(request);
    }
    return NextResponse.next();
  }

  if (
    pathname.includes('/rsvp/edit') &&
    request.nextUrl.searchParams.has('token') &&
    !(await isAuthenticated(request))
  ) {
    const locale = getLocale(request);
    const authRequiredUrl = new URL(`/${locale}/auth-required`, request.url);
    authRequiredUrl.searchParams.set('returnTo', request.nextUrl.pathname + request.nextUrl.search);
    return NextResponse.redirect(authRequiredUrl, { status: 302 });
  }

  if (!pathname.startsWith('/api/auth') && !(await isAuthenticated(request))) {
    return redirectToLoginPage(request);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    return redirectToPathNameWithLocale(request, pathname);
  }

  const response = NextResponse.next();
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://images.unsplash.com https://unsplash.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  const securityHeaders = {
    'Content-Security-Policy': cspHeader,
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'X-DNS-Prefetch-Control': 'off',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|\\.well-known).*)'],
};

function redirectToLoginPage(request: NextRequest) {
  const locale = getLocale(request);
  const loginUrl = new URL(`/${locale}/login`, request.url);
  loginUrl.searchParams.set('returnTo', request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(loginUrl);
}

function redirectToHomepage(request: NextRequest) {
  const locale = getLocale(request);
  const homeUrl = new URL(`/${locale}`, request.url);
  return NextResponse.redirect(homeUrl);
}

function redirectToPathNameWithLocale(request: NextRequest, pathname: string) {
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

function skipMiddleware(pathname: string) {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname === '/en/login' ||
    pathname === '/ar/login' ||
    pathname === '/en/auth-required' ||
    pathname === '/ar/auth-required' ||
    pathname === '/en/invalid-token' ||
    pathname === '/ar/invalid-token' ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  );
}
