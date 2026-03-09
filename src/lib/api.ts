import type {
  ContentDetail,
  ContentSummary,
  LeadPayload,
  PaginatedResponse,
  SettingsDto,
} from '@/types';

type PublicHomeResponse = {
  featured?: {
    posts: ContentSummary[];
    diseases: ContentSummary[];
    services: ContentSummary[];
    herbs: ContentSummary[];
  };
  latestPosts?: ContentSummary[];
  banner?: {
    title: string | null;
    subtitle: string | null;
    imageId: string | null;
  };
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
  return await fetchJson<PublicHomeResponse>('/api/public/home');
}

export async function fetchContentList(params: {
  category?: string;
  q?: string;
  tag?: string;
  page?: number;
  pageSize?: number;
}): Promise<PaginatedResponse<ContentSummary>> {
  const search = new URLSearchParams();
  if (params.category) search.set('category', params.category);
  if (params.q) search.set('q', params.q);
  if (params.tag) search.set('tag', params.tag);
  if (params.page) search.set('page', String(params.page));
  if (params.pageSize) search.set('pageSize', String(params.pageSize));

  return await fetchJson<PaginatedResponse<ContentSummary>>(
    `/api/public/contents?${search.toString()}`,
  );
}

export async function fetchContentDetail(slug: string): Promise<ContentDetail> {
  return await fetchJson<ContentDetail>(`/api/public/contents/${slug}`);
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
