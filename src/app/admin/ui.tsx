'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { adminApi } from '@/lib/adminApi';

export function AdminActions() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Hide logout on login page
  if (pathname?.startsWith('/admin/login')) return null;

  async function onLogout() {
    setLoading(true);
    try {
      await adminApi.logout();
      window.location.href = '/admin/login';
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={loading}
      className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-60"
    >
      {loading ? 'Đang đăng xuất...' : 'Đăng xuất'}
    </button>
  );
}
