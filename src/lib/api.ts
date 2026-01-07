import type {
  ContentDetail,
  ContentSummary,
  ContentType,
  LeadPayload,
  PaginatedResponse,
  SettingsDto,
} from '@/types';

import { mockContentDetail, mockContentList, mockPublicHome } from './mockData';

type PublicHomeResponse = {
  featured?: ContentSummary[];
  latestPosts?: ContentSummary[];
  settings?: SettingsDto;
};

function getApiBase(): string | null {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  if (!base) return null;
  return base.replace(/\/$/, '');
}

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBase();
  if (!base) {
    throw new Error('Missing env: NEXT_PUBLIC_API_BASE');
  }
  const url = `${base}${path}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  return (await res.json()) as T;
}

export async function fetchPublicHome(): Promise<PublicHomeResponse> {
  if (!getApiBase()) {
    return mockPublicHome();
  }
  try {
    return await fetchJson<PublicHomeResponse>('/api/public/home');
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return mockPublicHome();
    }
    throw err;
  }
}

export async function fetchContentList(params: {
  type: ContentType;
  q?: string;
  page?: number;
  pageSize?: number;
}): Promise<PaginatedResponse<ContentSummary>> {
  if (!getApiBase()) {
    return mockContentList(params);
  }
  const search = new URLSearchParams();
  search.set('type', params.type);
  if (params.q) search.set('q', params.q);
  if (params.page) search.set('page', String(params.page));
  if (params.pageSize) search.set('pageSize', String(params.pageSize));

  try {
    return await fetchJson<PaginatedResponse<ContentSummary>>(
      `/api/public/contents?${search.toString()}`,
    );
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return mockContentList(params);
    }
    throw err;
  }
}

export async function fetchContentDetail(
  type: ContentType,
  slug: string,
): Promise<ContentDetail> {
  if (!getApiBase()) {
    return mockContentDetail(type, slug);
  }
  try {
    return await fetchJson<ContentDetail>(
      `/api/public/contents/${type}/${slug}`,
    );
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return mockContentDetail(type, slug);
    }
    throw err;
  }
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  // Allow UI dev without backend.
  if (!getApiBase()) {
    return { ok: true };
  }
  let res: Response;
  try {
    res = await fetch('/api/public/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      return { ok: true };
    }
    throw err;
  }

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const data = (await res.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  return (await res.json()) as { ok: true };
}
