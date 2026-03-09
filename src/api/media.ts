import { adminFetch } from './client';

export const uploadMedia = (formData: FormData): Promise<unknown> => {
  return adminFetch<unknown>('/api/admin/media/upload', {
    method: 'POST',
    body: formData,
  });
};
