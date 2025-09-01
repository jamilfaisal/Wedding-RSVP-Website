import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { buildError } from '@/lib/api/errors';

const WEDDING_PASSWORD = process.env.WEDDING_PASSWORD || 'changeme123';
const JWT_SECRET = process.env.JWT_SECRET || 'wedding-secret-key-change-in-production';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (password !== WEDDING_PASSWORD) {
      return NextResponse.json(
        buildError('INVALID_PASSWORD', 'The password you entered is incorrect.'),
        { status: 401 }
      );
    }
    const token = jwt.sign({ authenticated: true }, JWT_SECRET, { expiresIn: '24h' });
    const response = NextResponse.json({ success: true });

    response.cookies.set('wedding-auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      buildError('AUTHENTICATION_ERROR', 'Authentication failed. Please try again later.', {
        details: error instanceof Error ? error.message : String(error),
        includeDetails: true,
      }),
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('wedding-auth')?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false, code: 'MISSING_TOKEN' });
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ authenticated: true });
  } catch {
    return NextResponse.json({ authenticated: false, code: 'INVALID_TOKEN' });
  }
}
