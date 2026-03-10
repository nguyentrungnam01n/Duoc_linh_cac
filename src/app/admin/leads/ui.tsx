'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type { AdminLead, AdminLeadListResponse } from '@/types';

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

function LeadDetailModal({
  lead,
  onClose,
}: {
  lead: AdminLead;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b p-6 pb-4">
          <h2 className="text-xl font-bold text-[#4D0000]">Chi tiết Lead</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-stone-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-stone-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-stone-500 mb-1">Họ và tên</p>
              <p className="font-semibold text-stone-900">{lead.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Thời gian tạo</p>
              <p className="font-medium text-stone-900">
                {new Date(lead.createdAt || Date.now()).toLocaleString('vi-VN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Số điện thoại</p>
              <p className="font-medium text-stone-900">{lead.phone}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Email</p>
              <p className="font-medium text-stone-900">{lead.email || '-'}</p>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-4">
            <p className="text-sm text-stone-500 mb-2">Chủ đề (Topic)</p>
            <p className="font-medium text-[#4D0000] text-lg">
              {lead.topic || 'Không có chủ đề'}
            </p>
          </div>

          <div>
            <p className="text-sm text-stone-500 mb-2">Nội dung tin nhắn</p>
            <div className="rounded-lg bg-stone-50 p-4 text-stone-700 whitespace-pre-wrap leading-relaxed border border-stone-100">
              {lead.message}
            </div>
          </div>
        </div>
        <div className="bg-stone-50 px-6 py-4 flex justify-end rounded-b-lg">
          <button
            onClick={onClose}
            className="rounded-md bg-white border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 shadow-sm transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export function LeadsPage() {
  const [data, setData] = useState<AdminLeadListResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedLead, setSelectedLead] = useState<AdminLead | null>(null);

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
              <thead className="bg-[#760000]/90 text-[#FFF9A7]">
                <tr>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold w-[25%]">
                    Tên khách hàng
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold w-[25%]">
                    Liên hệ
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold w-[35%]">
                    Nội dung tư vấn
                  </th>
                  <th className="whitespace-nowrap px-6 py-3 font-semibold w-[15%]">
                    Thời gian
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {data.items.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-8 text-center text-stone-500"
                    >
                      Chưa có leads nào.
                    </td>
                  </tr>
                ) : (
                  data.items.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="group cursor-pointer transition-colors hover:bg-stone-50"
                    >
                      <td className="px-6 py-4 align-top">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-stone-100 p-1.5 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600 transition-colors">
                            <UserIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-[#4D0000] group-hover:underline decoration-stone-300 underline-offset-2">
                              {lead.fullName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 align-top">
                        <div className="font-mono text-sm font-medium text-stone-700">
                          {lead.phone}
                        </div>
                        <div className="text-xs text-stone-500 mt-0.5">
                          {lead.email || '-'}
                        </div>
                      </td>

                      <td className="px-6 py-4 align-top">
                        <div className="font-medium text-sm text-[#4D0000] mb-1">
                          {lead.topic || 'Không có chủ đề'}
                        </div>
                        {lead.message && (
                          <p
                            className="line-clamp-2 text-xs text-stone-500 max-w-md leading-relaxed"
                            title={lead.message}
                          >
                            {lead.message}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-4 align-top text-stone-500 whitespace-nowrap text-xs">
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

      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
}
