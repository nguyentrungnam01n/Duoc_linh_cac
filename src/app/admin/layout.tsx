import type { ReactNode } from 'react';
import Link from 'next/link';
import { AdminActions } from './ui';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const NAV_CLASSES =
  'block px-4 py-2 rounded-md transition-colors hover:bg-[#760000]/90 hover:text-[#FFF9A7]';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`min-h-dvh bg-[#FDFBF7] ${beVietnamPro.className}`}>
      {/* Header */}
      <header className="border-b border-[#E75739]/20 bg-white sticky top-0 z-50 shadow-sm">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-lg font-bold text-[#4D0000]"
          >
            <span className="text-2xl">🛡️</span>
            Admin · Dược Linh Các
          </Link>
          <div className="flex items-center gap-4">
            <AdminActions />
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-[#760000]/90 text-[#FFF9A7] hidden md:block shrink-0 shadow-lg">
          <nav className="p-4 space-y-2 text-sm font-medium">
            <Link href="/admin" className={NAV_CLASSES}>
              📊 Tổng quan
            </Link>
            <div className="px-4 py-2 mt-4 text-xs font-bold text-[#E75739] uppercase tracking-wider">
              Quản lý
            </div>
            <Link href="/admin/contents" className={NAV_CLASSES}>
              📝 Nội dung
            </Link>
            <Link href="/admin/categories" className={NAV_CLASSES}>
              🏷️ Chuyên mục
            </Link>
            <Link href="/admin/leads" className={NAV_CLASSES}>
              📬 Leads (Liên hệ)
            </Link>
            <div className="px-4 py-2 mt-4 text-xs font-bold text-[#E75739] uppercase tracking-wider">
              Hệ thống
            </div>
            <Link href="/admin/settings" className={NAV_CLASSES}>
              ⚙️ Cài đặt
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
