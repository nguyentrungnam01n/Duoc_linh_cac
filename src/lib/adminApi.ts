import type {
  AdminContentCreateInput,
  AdminContentListResponse,
  AdminContentResponse,
  AdminContentUpdateInput,
  AdminLeadListResponse,
  AdminLoginInput,
  AdminSettingsResponse,
  AdminSettingsUpdateInput,
  ApiOk,
} from '@/types';

type AdminFetchOptions = Omit<RequestInit, 'headers'> & {
  headers?: Record<string, string>;
};

async function readErrorMessage(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { message?: string };
    if (data?.message) return data.message;
  } catch {
    // ignore
  }
  return `Request failed (${res.status})`;
}

async function adminFetch<T>(
  path: string,
  init?: AdminFetchOptions,
): Promise<T> {
  const res = await fetch(path, {
    ...init,
    credentials: 'include',
    headers: {
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }

  return (await res.json()) as T;
}

export const adminApi = {
  login(input: AdminLoginInput): Promise<ApiOk> {
    return adminFetch<ApiOk>('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
  },

  logout(): Promise<ApiOk> {
    return adminFetch<ApiOk>('/api/admin/auth/logout', {
      method: 'POST',
    });
  },

  me(): Promise<ApiOk> {
    return adminFetch<ApiOk>('/api/admin/me');
  },

  listContents(query: string): Promise<AdminContentListResponse> {
    return adminFetch<AdminContentListResponse>(`/api/admin/contents${query}`);
  },

  createContent(
    payload: AdminContentCreateInput,
  ): Promise<AdminContentResponse> {
    return adminFetch<AdminContentResponse>('/api/admin/contents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },

  updateContent(
    id: string,
    payload: AdminContentUpdateInput,
  ): Promise<AdminContentResponse> {
    return adminFetch<AdminContentResponse>(`/api/admin/contents/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },

  publishContent(id: string): Promise<AdminContentResponse> {
    return adminFetch<AdminContentResponse>(
      `/api/admin/contents/${id}/publish`,
      {
        method: 'POST',
      },
    );
  },

  unpublishContent(id: string): Promise<AdminContentResponse> {
    return adminFetch<AdminContentResponse>(
      `/api/admin/contents/${id}/unpublish`,
      {
        method: 'POST',
      },
    );
  },

  uploadMedia(formData: FormData): Promise<unknown> {
    return adminFetch<unknown>('/api/admin/media', {
      method: 'POST',
      body: formData,
    });
  },

  listLeads(query: string): Promise<AdminLeadListResponse> {
    return adminFetch<AdminLeadListResponse>(`/api/admin/leads${query}`);
  },

  getSettings(): Promise<AdminSettingsResponse> {
    return adminFetch<AdminSettingsResponse>('/api/admin/settings');
  },

  updateSettings(
    payload: AdminSettingsUpdateInput,
  ): Promise<AdminSettingsResponse> {
    return adminFetch<AdminSettingsResponse>('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  },
};
