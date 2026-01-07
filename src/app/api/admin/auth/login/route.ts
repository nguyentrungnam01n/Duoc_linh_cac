import { NextResponse } from 'next/server';

const TOKEN_COOKIE_NAME = 'dlc_admin_token';

function getApiBase(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  if (!base) {
    return '';
  }
  return base.replace(/\/$/, '');
}

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };

  // Mock mode: accept any credentials.
  if (!process.env.NEXT_PUBLIC_API_BASE) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: TOKEN_COOKIE_NAME,
      value: 'mock-token',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60,
    });
    return response;
  }

  let res: Response;
  try {
    res = await fetch(`${getApiBase()}/api/admin/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
      cache: 'no-store',
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      const response = NextResponse.json({ ok: true });
      response.cookies.set({
        name: TOKEN_COOKIE_NAME,
        value: 'mock-token',
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        path: '/',
        maxAge: 60 * 60,
      });
      return response;
    }
    throw err;
  }

  if (!res.ok) {
    let message = `Login failed (${res.status})`;
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore
    }
    return NextResponse.json({ message }, { status: res.status });
  }

  const data = (await res.json()) as { accessToken?: string };
  if (!data?.accessToken) {
    return NextResponse.json(
      { message: 'Missing accessToken from backend response' },
      { status: 502 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: TOKEN_COOKIE_NAME,
    value: data.accessToken,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60,
  });

  return response;
}
