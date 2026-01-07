'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';
import type {
  AdminContentListResponse,
  ContentType,
  PublishStatus,
} from '@/types';

export function ContentsPage() {
  const sp = useSearchParams();
  const [data, setData] = useState<AdminContentListResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const type = (sp.get('type') as ContentType | null) ?? 'POST';
  const status = (sp.get('status') as PublishStatus | null) ?? 'PUBLISHED';

  const query = useMemo(() => {
    const q = new URLSearchParams();
    q.set('type', type);
    q.set('status', status);
    q.set('page', sp.get('page') ?? '1');
    q.set('pageSize', sp.get('pageSize') ?? '20');
    return `?${q.toString()}`;
  }, [sp, status, type]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    adminApi
      .listContents(query)
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
  }, [query]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Nội dung</h1>
        <Link
          href="/admin/contents/new"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          Tạo mới
        </Link>
      </div>

      <form className="flex flex-wrap items-end gap-3" action="/admin/contents">
        <label className="space-y-1">
          <span className="text-sm">Type</span>
          <select
            name="type"
            defaultValue={type}
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="DISEASE">DISEASE</option>
            <option value="SERVICE">SERVICE</option>
            <option value="HERB">HERB</option>
            <option value="POST">POST</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-sm">Status</span>
          <select
            name="status"
            defaultValue={status}
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="DRAFT">DRAFT</option>
            <option value="PUBLISHED">PUBLISHED</option>
            <option value="ARCHIVED">ARCHIVED</option>
          </select>
        </label>

        <button
          type="submit"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          Lọc
        </button>
      </form>

      {loading ? <p className="text-sm">Đang tải…</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="rounded-md border border-zinc-200">
        <div className="overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-50 text-xs text-zinc-600">
              <tr>
                <th className="px-3 py-2 font-medium">Tiêu đề</th>
                <th className="px-3 py-2 font-medium">Type</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Cập nhật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {(data?.items ?? []).map((item) => (
                <tr key={item.id} className="align-top">
                  <td className="px-3 py-2">
                    <Link
                      href={`/admin/contents/${item.id}`}
                      className="font-medium hover:underline"
                    >
                      {item.title}
                    </Link>
                    <div className="text-xs text-zinc-600">/{item.slug}</div>
                  </td>
                  <td className="px-3 py-2 font-mono text-xs">{item.type}</td>
                  <td className="px-3 py-2 font-mono text-xs">
                    {item.publishStatus}
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-600">
                    {item.updatedAt ?? item.createdAt ?? '-'}
                  </td>
                </tr>
              ))}

              {data && data.items.length === 0 ? (
                <tr>
                  <td className="px-3 py-6 text-sm text-zinc-600" colSpan={4}>
                    Không có dữ liệu.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>

      {data ? (
        <p className="text-xs text-zinc-600">
          Tổng: {data.total} • Trang: {data.page} • Page size: {data.pageSize}
        </p>
      ) : null}
    </div>
  );
}
