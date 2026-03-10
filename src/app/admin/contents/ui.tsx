'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import type {
  AdminContentListResponse,
  Category,
  PublishStatus,
} from '@/types';

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

function FunnelIcon({ className }: { className?: string }) {
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
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
      />
    </svg>
  );
}

function MagnifyingGlassIcon({ className }: { className?: string }) {
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
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export function ContentsPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [data, setData] = useState<AdminContentListResponse | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Search params
  const categoryId = sp.get('categoryId') ?? '';
  const status = (sp.get('status') as PublishStatus | null) ?? '';
  const page = parseInt(sp.get('page') ?? '1', 10);
  const pageSize = parseInt(sp.get('pageSize') ?? '20', 10);
  const search = sp.get('q') ?? '';

  useEffect(() => {
    adminApi.listCategories().then(setCategories).catch(console.error);
  }, []);

  // Local state for search input
  const [searchTerm, setSearchTerm] = useState(search);

  // Sync local search term with URL param
  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  const queryParams = useMemo(() => {
    const q = new URLSearchParams();
    if (categoryId && categoryId !== '') q.set('categoryId', categoryId);
    if (status) q.set('status', status);
    if (search) q.set('q', search);
    q.set('page', page.toString());
    q.set('pageSize', pageSize.toString());
    return q;
  }, [categoryId, status, page, pageSize, search]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    adminApi
      .listContents(`?${queryParams.toString()}`)
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [queryParams]);

  const handleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(queryParams.toString());
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set('page', '1'); // Reset pagination
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilter('q', searchTerm);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(queryParams.toString());
    newParams.set('page', newPage.toString());
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#4D0000]">
            Quản lý Bài viết
          </h1>
          <p className="text-sm text-stone-600">
            Danh sách các bài viết tin tức
          </p>
        </div>
        <Link
          href="/admin/contents/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#E75739] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#D1492E] focus:outline-none focus:ring-2 focus:ring-[#E75739] focus:ring-offset-2"
        >
          <PlusIcon className="h-5 w-5" />
          Tạo bài viết mới
        </Link>
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-[#E5E1DA] bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-stone-500">
              <FunnelIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Bộ lọc:</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={categoryId}
                onChange={(e) => handleFilter('categoryId', e.target.value)}
                className="rounded-lg border-stone-200 py-1.5 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
              >
                <option value="">Tất cả chuyên mục</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) => handleFilter('status', e.target.value)}
                className="rounded-lg border-stone-200 py-1.5 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
              >
                <option value="">Tất cả trạng thái</option>
                <option value="PUBLISHED">Đã xuất bản</option>
                <option value="DRAFT">Nháp</option>
                <option value="ARCHIVED">Lưu trữ</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full max-w-sm"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-stone-400" />
            </div>
            <input
              type="search"
              placeholder="Tìm kiếm bài viết..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-lg border-stone-200 py-1.5 pl-10 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
            />
          </form>
        </div>
      </div>

      {/* Content Table */}
      <div className="overflow-hidden rounded-xl border border-[#E5E1DA] bg-white shadow-sm">
        {loading && !data && (
          <div className="p-8 text-center text-stone-500">
            Đang tải dữ liệu...
          </div>
        )}

        {error && (
          <div className="bg-red-50 p-4 text-center text-sm text-red-600">
            Lỗi tải dữ liệu: {error}
          </div>
        )}

        {!loading && !error && data && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#760000]/90 text-[#FFF9A7]">
                <tr>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Tiêu đề
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Chuyên mục
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Trạng thái
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Cập nhật
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold text-right">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {data.items.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-8 text-center text-stone-500"
                    >
                      Không tìm thấy bài viết nào.
                    </td>
                  </tr>
                ) : (
                  data.items.map((item) => (
                    <tr
                      key={item.id}
                      className="group transition-colors hover:bg-stone-50"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/contents/${item.id}`}
                          className="font-medium text-[#4D0000] hover:text-[#E75739] hover:underline"
                        >
                          {item.title}
                        </Link>
                        <div
                          className="mt-1 text-xs text-stone-400 font-mono truncate max-w-xs"
                          title={item.slug}
                        >
                          /{item.slug}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800">
                          {item.category?.name || '—'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-4 text-stone-500">
                        {new Date(
                          item.updatedAt || item.createdAt || Date.now(),
                        ).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/contents/${item.id}`}
                          className="text-stone-400 hover:text-[#4D0000]"
                        >
                          Sửa
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {data && (
          <div className="flex items-center justify-between border-t border-stone-100 bg-stone-50 px-6 py-4">
            <span className="text-sm text-stone-600">
              Hiển thị{' '}
              <span className="font-medium">
                {data.items.length === 0 ? 0 : (page - 1) * pageSize + 1}
              </span>{' '}
              đến{' '}
              <span className="font-medium">
                {data.items.length === 0
                  ? 0
                  : (page - 1) * pageSize + data.items.length}
              </span>{' '}
              trong số <span className="font-medium">{data.total}</span> kết quả
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
                className="rounded border border-stone-300 bg-white px-3 py-1 text-sm text-stone-600 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Trước
              </button>
              <button
                disabled={page * pageSize >= data.total}
                onClick={() => handlePageChange(page + 1)}
                className="rounded border border-stone-300 bg-white px-3 py-1 text-sm text-stone-600 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: PublishStatus }) {
  if (status === 'PUBLISHED') {
    return (
      <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Xuất bản
      </span>
    );
  }
  if (status === 'DRAFT') {
    return (
      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Nháp
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 ring-1 ring-inset ring-stone-500/10">
      {status}
    </span>
  );
}
