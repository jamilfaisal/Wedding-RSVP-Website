import { NextResponse, NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { jwtVerify } from 'jose';

const locales = ['en', 'ar'];
const defaultLocale = 'en';
const JWT_SECRET_STRING = process.env.JWT_SECRET || 'wedding-secret-key-change-in-production';
const JWT_SECRET_ENCODED = new TextEncoder().encode(JWT_SECRET_STRING);

function getLocale(request: NextRequest): string {
  const acceptedLanguage = request.headers.get('Accept-Language') ?? undefined;
  const headers = { 'accept-language': acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

function getReturnToUrl(request: NextRequest): string {
  return request.nextUrl.pathname + request.nextUrl.search;
}

async function isUserAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get('wedding-auth')?.value;
  if (!token) {
    return false;
  }

  try {
    await jwtVerify(token, JWT_SECRET_ENCODED);
    return true;
  } catch {
    return false;
  }
}

async function isValidRsvpToken(tokenString: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(tokenString, JWT_SECRET_ENCODED);
    const decoded = payload as {
      purpose?: string;
      email?: string;
    };

    console.log('Token validation debug:', {
      decoded: decoded,
      purpose: decoded.purpose,
      email: decoded.email,
      isRsvpEdit: decoded.purpose === 'rsvp_edit',
      hasEmail: !!decoded.email,
    });

    return decoded.purpose === 'rsvp_edit' && !!decoded.email;
  } catch (error) {
    console.log('Token validation error:', error);
    return false;
  }
}

function addSecurityHeaders(response: NextResponse): NextResponse {
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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (skipMiddleware(pathname)) {
    const isLoginPage = pathname === '/login' || /^\/(en|ar)\/login$/.test(pathname);
    if (isLoginPage && (await isUserAuthenticated(request))) {
      return redirectToHomepage(request);
    }
    return NextResponse.next();
  }

  if (isRsvpEditPageWithToken(pathname, request)) {
    const rsvpToken = request.nextUrl.searchParams.get('token');
    const authenticated = await isUserAuthenticated(request);
    const validRsvpToken = rsvpToken ? await isValidRsvpToken(rsvpToken) : false;

    console.log('RSVP Debug:', {
      pathname,
      hasToken: !!rsvpToken,
      authenticated,
      validRsvpToken,
      token: rsvpToken ? `${rsvpToken.substring(0, 20)}...` : 'none',
    });

    if (isNotAuthenticatedOrTokenInvalid(authenticated, validRsvpToken)) {
      const locale = getLocale(request);
      const authRequiredUrl = new URL(`/${locale}/auth-required`, request.url);
      authRequiredUrl.searchParams.set('returnTo', getReturnToUrl(request));
      return NextResponse.redirect(authRequiredUrl, { status: 302 });
    }
    return addSecurityHeaders(NextResponse.next());
  }

  if (await requiresAuthentication(pathname, request)) {
    return redirectToLoginPage(request);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    return redirectToPathNameWithLocale(request, pathname);
  }

  return addSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|\\.well-known).*)'],
};

async function requiresAuthentication(pathname: string, request: NextRequest) {
  return !pathname.startsWith('/api/auth') && !(await isUserAuthenticated(request));
}

function isNotAuthenticatedOrTokenInvalid(authenticated: boolean, validRsvpToken: boolean) {
  return !(authenticated || validRsvpToken);
}

function isRsvpEditPageWithToken(pathname: string, request: NextRequest) {
  return pathname.includes('/rsvp/edit') && request.nextUrl.searchParams.has('token');
}

function redirectToLoginPage(request: NextRequest) {
  const locale = getLocale(request);
  const loginUrl = new URL(`/${locale}/login`, request.url);
  loginUrl.searchParams.set('returnTo', getReturnToUrl(request));
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
  const staticPaths = ['/_next/', '/api/', '/static/'];
  const authPaths = ['/login', '/auth-required', '/invalid-token'];
  const localeAuthPaths = authPaths.flatMap((path) => [`/en${path}`, `/ar${path}`]);

  return (
    staticPaths.some((path) => pathname.startsWith(path)) ||
    localeAuthPaths.includes(pathname) ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  );
}
