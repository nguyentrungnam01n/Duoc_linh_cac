import { NextResponse } from 'next/server';

function getApiBase(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  if (!base) {
    return '';
  }
  return base.replace(/\/$/, '');
}

export async function POST(request: Request) {
  // Mock mode: accept lead without backend.
  if (!process.env.NEXT_PUBLIC_API_BASE) {
    await request.text();
    return NextResponse.json({ ok: true });
  }

  let res: Response;
  try {
    res = await fetch(`${getApiBase()}/api/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: await request.text(),
      cache: 'no-store',
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ ok: true });
    }
    throw err;
  }

  const body = await res.arrayBuffer();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      'Content-Type': res.headers.get('content-type') ?? 'application/json',
    },
  });
}
