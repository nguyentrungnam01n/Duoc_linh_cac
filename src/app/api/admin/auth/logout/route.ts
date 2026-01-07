import { NextResponse } from 'next/server';

const TOKEN_COOKIE_NAME = 'dlc_admin_token';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: TOKEN_COOKIE_NAME,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
  return response;
}
