import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { ContentType, PublishStatus } from '@/types';

import {
  mockAdminContentResponse,
  mockAdminContentsList,
  mockAdminLeadsList,
  mockAdminSettings,
} from '@/lib/mockData';

const TOKEN_COOKIE_NAME = 'dlc_admin_token';

function getApiBase(): string {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  if (!base) {
    return '';
  }
  return base.replace(/\/$/, '');
}

function isMockMode() {
  return !process.env.NEXT_PUBLIC_API_BASE;
}

function filterHeaders(headers: Headers): Record<string, string> {
  const out: Record<string, string> = {};
  headers.forEach((value, key) => {
    const k = key.toLowerCase();
    if (k === 'host' || k === 'cookie' || k === 'authorization') return;
    out[key] = value;
  });
  return out;
}

function parseContentType(value: string | null): ContentType | undefined {
  if (
    value === 'POST' ||
    value === 'DISEASE' ||
    value === 'SERVICE' ||
    value === 'HERB'
  ) {
    return value;
  }
  return undefined;
}

function parsePublishStatus(value: string | null): PublishStatus | undefined {
  if (value === 'DRAFT' || value === 'PUBLISHED' || value === 'ARCHIVED') {
    return value;
  }
  return undefined;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== 'object' || value === null) return null;
  if (Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

async function handleMockAdmin(request: Request, pathParts: string[]) {
  const url = new URL(request.url);
  const method = request.method.toUpperCase();
  const [resource, id, action] = pathParts;

  if (resource === 'contents') {
    if (method === 'GET') {
      const type = parseContentType(url.searchParams.get('type'));
      const status = parsePublishStatus(url.searchParams.get('status'));
      const page = Number(url.searchParams.get('page') ?? '1') || 1;
      const pageSize = Number(url.searchParams.get('pageSize') ?? '20') || 20;
      return NextResponse.json(
        mockAdminContentsList({ type, status, page, pageSize }),
      );
    }

    if (method === 'POST' && !id) {
      const payload = asRecord(await request.json().catch(() => null));
      const slug = typeof payload?.slug === 'string' ? payload.slug : 'new';
      return NextResponse.json(mockAdminContentResponse(slug));
    }

    if ((method === 'PATCH' || method === 'PUT') && id) {
      await request.json().catch(() => ({}));
      return NextResponse.json(mockAdminContentResponse(id));
    }

    if (
      method === 'POST' &&
      id &&
      (action === 'publish' || action === 'unpublish')
    ) {
      return NextResponse.json(mockAdminContentResponse(id));
    }
  }

  if (resource === 'leads') {
    if (method === 'GET') {
      const page = Number(url.searchParams.get('page') ?? '1') || 1;
      const pageSize = Number(url.searchParams.get('pageSize') ?? '50') || 50;
      return NextResponse.json(mockAdminLeadsList({ page, pageSize }));
    }
    if (method === 'GET' && id === 'export') {
      return NextResponse.json(
        { message: 'Not implemented in mock mode' },
        { status: 501 },
      );
    }
  }

  if (resource === 'settings') {
    if (method === 'GET') {
      return NextResponse.json(mockAdminSettings());
    }
    if (method === 'PUT' || method === 'PATCH') {
      const payload = asRecord(await request.json().catch(() => null));
      return NextResponse.json({ ...mockAdminSettings(), ...(payload ?? {}) });
    }
  }

  return NextResponse.json(
    { message: 'Not implemented in mock mode' },
    { status: 501 },
  );
}

async function handleProxy(request: Request, pathParts: string[]) {
  const token = (await cookies()).get(TOKEN_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Mock mode: return stable fake data so admin UI can be developed without backend.
  if (isMockMode()) {
    return handleMockAdmin(request, pathParts);
  }

  const url = new URL(request.url);
  const target = `${getApiBase()}/api/admin/${pathParts.join('/')}${url.search}`;

  const method = request.method.toUpperCase();
  const hasBody = method !== 'GET' && method !== 'HEAD';

  const body = hasBody ? await request.arrayBuffer() : undefined;

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method,
      headers: {
        ...filterHeaders(request.headers),
        Authorization: `Bearer ${token}`,
      },
      body,
      cache: 'no-store',
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return handleMockAdmin(request, pathParts);
    }
    throw err;
  }

  const buf = await upstream.arrayBuffer();
  const response = new NextResponse(buf, {
    status: upstream.status,
    headers: {
      'Content-Type':
        upstream.headers.get('content-type') ?? 'application/json',
    },
  });

  return response;
}

export async function GET(
  request: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  return handleProxy(request, path);
}

export async function POST(
  request: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  return handleProxy(request, path);
}

export async function PUT(
  request: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  return handleProxy(request, path);
}

export async function PATCH(
  request: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  return handleProxy(request, path);
}

export async function DELETE(
  request: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path } = await ctx.params;
  return handleProxy(request, path);
}
