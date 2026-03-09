import { Category } from '@/types';
import { adminFetch } from './client';

export const listCategories = (): Promise<Category[]> => {
  return adminFetch<Category[]>('/api/admin/categories');
};

export const createCategory = (
  name: string,
  slug?: string,
): Promise<Category> => {
  return adminFetch<Category>('/api/admin/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, slug }),
  });
};

export const updateCategory = (
  id: string,
  name: string,
  slug?: string,
): Promise<Category> => {
  return adminFetch<Category>(`/api/admin/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, slug }),
  });
};

export const deleteCategory = (id: string): Promise<void> => {
  return adminFetch<void>(`/api/admin/categories/${id}`, {
    method: 'DELETE',
  });
};
