'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type { AdminLeadListResponse } from '@/types';

export function LeadsPage() {
  const [data, setData] = useState<AdminLeadListResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    adminApi
      .listLeads('?page=1&pageSize=50')
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
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Leads</h1>
        <Link
          href="/api/admin/leads/export"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          Export
        </Link>
      </div>

      {loading ? <p className="text-sm">Đang tải…</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="rounded-md border border-zinc-200">
        <div className="overflow-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-50 text-xs text-zinc-600">
              <tr>
                <th className="px-3 py-2 font-medium">Họ tên</th>
                <th className="px-3 py-2 font-medium">SĐT</th>
                <th className="px-3 py-2 font-medium">Email</th>
                <th className="px-3 py-2 font-medium">Nguồn</th>
                <th className="px-3 py-2 font-medium">Tạo lúc</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {(data?.items ?? []).map((lead) => (
                <tr key={lead.id} className="align-top">
                  <td className="px-3 py-2">
                    <div className="font-medium">{lead.fullName}</div>
                    {lead.message ? (
                      <div className="mt-1 line-clamp-2 text-xs text-zinc-600">
                        {lead.message}
                      </div>
                    ) : null}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs">{lead.phone}</td>
                  <td className="px-3 py-2 text-xs">{lead.email ?? '-'}</td>
                  <td className="px-3 py-2 text-xs">
                    {lead.sourceUrl ? (
                      <a
                        href={lead.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        Link
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-600">
                    {lead.createdAt ?? '-'}
                  </td>
                </tr>
              ))}

              {data && data.items.length === 0 ? (
                <tr>
                  <td className="px-3 py-6 text-sm text-zinc-600" colSpan={5}>
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
