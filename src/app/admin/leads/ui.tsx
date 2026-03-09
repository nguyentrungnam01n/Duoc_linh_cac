'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type { AdminLeadListResponse } from '@/types';

function UserIcon({ className }: { className?: string }) {
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

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
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#4D0000]">
            Danh sách Leads (Liên hệ)
          </h1>
          <p className="text-sm text-stone-600">
            Khách hàng quan tâm và để lại thông tin.
          </p>
        </div>
        <Link
          href="/api/admin/leads/export"
          className="inline-flex items-center gap-2 rounded-lg border border-[#E5E1DA] bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
        >
          <svg
            className="h-4 w-4 text-stone-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          Xuất Excel
        </Link>
      </div>

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
              <thead className="bg-[#4D0000] text-[#FFF9A7]">
                <tr>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Thông tin khách hàng
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Liên hệ
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Nguồn
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold">
                    Thời gian
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
                      Chưa có leads nào.
                    </td>
                  </tr>
                ) : (
                  data.items.map((lead) => (
                    <tr
                      key={lead.id}
                      className="group transition-colors hover:bg-stone-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-stone-100 p-1.5 text-stone-400">
                            <UserIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-[#4D0000]">
                              {lead.fullName}
                            </div>
                            {lead.message && (
                              <p
                                className="mt-1 line-clamp-2 text-xs text-stone-500 max-w-xs"
                                title={lead.message}
                              >
                                &ldquo;{lead.message}&rdquo;
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm">{lead.phone}</div>
                        <div className="text-xs text-stone-500">
                          {lead.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs">
                        {lead.sourceUrl ? (
                          <a
                            href={lead.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#E75739] hover:underline truncate max-w-[150px] inline-block"
                            title={lead.sourceUrl}
                          >
                            Link
                          </a>
                        ) : (
                          <span className="text-stone-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-stone-500 whitespace-nowrap">
                        {new Date(lead.createdAt || Date.now()).toLocaleString(
                          'vi-VN',
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {data && (
          <div className="border-t border-stone-100 bg-stone-50 px-6 py-3 text-xs text-stone-500 flex justify-between">
            <span>
              Tổng số leads: <strong>{data.total}</strong>
            </span>
            <span>
              Trang: {data.page} / {Math.ceil(data.total / data.pageSize)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
