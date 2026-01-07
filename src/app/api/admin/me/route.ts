import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const TOKEN_COOKIE_NAME = 'dlc_admin_token';

export async function GET() {
  const token = (await cookies()).get(TOKEN_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
