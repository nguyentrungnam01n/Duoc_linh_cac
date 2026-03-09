'use client';

import { useEffect, useState } from 'react';
import {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '@/api/categories';
import type { Category } from '@/types';

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function PencilSquareIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

export function CategoriesPage() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', slug: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    listCategories()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleCreate = async () => {
    try {
      await createCategory(formData.name, formData.slug);
      setIsFormOpen(false);
      setFormData({ name: '', slug: '' });
      loadData();
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    try {
      await updateCategory(editingId, formData.name, formData.slug);
      setIsFormOpen(false);
      setEditingId(null);
      setFormData({ name: '', slug: '' });
      loadData();
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa chuyên mục này?')) return;
    try {
      await deleteCategory(id);
      alert('Xóa thành công');
      loadData();
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setFormData({ name: cat.name, slug: cat.slug || '' });
    setIsFormOpen(true);
  };

  const startCreate = () => {
    setEditingId(null);
    setFormData({ name: '', slug: '' });
    setIsFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#4D0000]">
            Quản lý Chuyên mục
          </h1>
          <p className="text-sm text-stone-600">
            Danh sách các chuyên mục bài viết
          </p>
        </div>
        <button
          onClick={startCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-[#E75739] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#D1492E]"
        >
          <PlusIcon className="h-5 w-5" />
          Thêm chuyên mục
        </button>
      </div>

      {isFormOpen && (
        <div className="rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#4D0000]">
            {editingId ? 'Chỉnh sửa chuyên mục' : 'Thêm chuyên mục mới'}
          </h2>
          <form
            onSubmit={handleSave}
            className="flex flex-col gap-4 sm:flex-row sm:items-end"
          >
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-stone-700">
                Tên chuyên mục
              </label>
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border-stone-200 focus:border-[#4D0000] focus:ring-[#4D0000]"
                placeholder="Nhập tên chuyên mục..."
              />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-stone-700">Slug</label>
              <input
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                className="w-full rounded-lg border-stone-200 focus:border-[#4D0000] focus:ring-[#4D0000]"
                placeholder="Tự động tạo nếu để trống"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="rounded-lg bg-[#4D0000] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#3A0000]"
              >
                {editingId ? 'Cập nhật' : 'Tạo mới'}
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-[#E5E1DA] bg-white shadow-sm">
        {loading && (
          <div className="p-8 text-center text-stone-500">Đang tải...</div>
        )}
        {error && (
          <div className="bg-red-50 p-4 text-center text-red-600">{error}</div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#4D0000] text-[#FFF9A7]">
                <tr>
                  <th className="px-6 py-3 font-semibold">Tên chuyên mục</th>
                  <th className="px-6 py-3 font-semibold">Slug (Đường dẫn)</th>
                  <th className="px-6 py-3 font-semibold text-center">
                    Số bài viết
                  </th>
                  <th className="px-6 py-3 font-semibold text-right">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-8 text-center text-stone-500"
                    >
                      Chưa có chuyên mục nào.
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr
                      key={item.id}
                      className="group transition-colors hover:bg-stone-50"
                    >
                      <td className="px-6 py-4 font-medium text-[#4D0000]">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 font-mono text-stone-500">
                        {item.slug}
                      </td>
                      <td className="px-6 py-4 text-center text-stone-500">
                        {item.contentsCount}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => startEdit(item)}
                            className="rounded p-1 text-stone-400 hover:bg-stone-100 hover:text-[#4D0000]"
                            title="Sửa"
                          >
                            <PencilSquareIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="rounded p-1 text-stone-400 hover:bg-red-50 hover:text-red-600"
                            title="Xóa"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
