import type { ReactNode } from 'react';
import Link from 'next/link';
import { AdminActions } from './ui';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/admin" className="text-sm font-semibold">
            Admin · Dược Linh Các
          </Link>
          <AdminActions />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-md border border-zinc-200 bg-white p-4">
          <nav className="space-y-2 text-sm">
            <Link href="/admin" className="block hover:underline">
              Tổng quan
            </Link>
            <Link href="/admin/contents" className="block hover:underline">
              Nội dung
            </Link>
            <Link href="/admin/leads" className="block hover:underline">
              Leads
            </Link>
            <Link href="/admin/settings" className="block hover:underline">
              Cài đặt
            </Link>
          </nav>
        </aside>

        <main className="rounded-md border border-zinc-200 bg-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
