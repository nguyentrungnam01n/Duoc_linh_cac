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

export async function adminFetch<T>(
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

  if (res.status === 204) {
    return {} as T;
  }

  const text = await res.text();
  if (!text) {
    return {} as T;
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Invalid JSON response');
  }
}
