import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Khu vực quản trị Dược Linh Các.',
};

export default function AdminHomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Tổng quan</h1>
      <p className="text-sm text-zinc-600">
        Skeleton admin UI. Mọi request admin đi qua <code>/api/admin/*</code>.
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link className="hover:underline" href="/admin/contents">
          Quản lý nội dung
        </Link>
        <Link className="hover:underline" href="/admin/leads">
          Leads
        </Link>
        <Link className="hover:underline" href="/admin/settings">
          Cài đặt
        </Link>
      </div>
    </div>
  );
}
