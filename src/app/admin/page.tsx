import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Tổng quan hệ thống Dược Linh Các.',
};

export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-[#E75739] pb-4">
        <h1 className="text-3xl font-bold text-[#4D0000]">Tổng quan</h1>
        <span className="text-sm font-medium text-[#760000] bg-[#FFF9A7] px-3 py-1 rounded-full">
          Live Status: 🟢 Online
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Nội dung */}
        <Link
          href="/admin/contents"
          className="group relative overflow-hidden rounded-xl border border-[#E75739]/30 bg-gradient-to-br from-[#FFF9A7] to-[#F9FFDC] p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-2rem] rounded-full bg-[#E75739]/10 blur-2xl group-hover:bg-[#E75739]/20" />
          <h3 className="text-xl font-bold text-[#760000]">📝 Nội dung</h3>
          <p className="mt-2 text-sm text-[#4D0000]/80">
            Quản lý bài viết, chuyên mục, và hình ảnh.
          </p>
          <div className="mt-4 flex items-center text-[#E75739] font-medium group-hover:text-[#4D0000]">
            Truy cập ngay →
          </div>
        </Link>

        {/* Card 2: Leads */}
        <Link
          href="/admin/leads"
          className="group relative overflow-hidden rounded-xl border border-[#E75739]/30 bg-gradient-to-br from-[#FFF9A7] to-[#F9FFDC] p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-2rem] rounded-full bg-[#E75739]/10 blur-2xl group-hover:bg-[#E75739]/20" />
          <h3 className="text-xl font-bold text-[#760000]">
            📬 Liên hệ (Leads)
          </h3>
          <p className="mt-2 text-sm text-[#4D0000]/80">
            Xem danh sách khách hàng đăng ký tư vấn.
          </p>
          <div className="mt-4 flex items-center text-[#E75739] font-medium group-hover:text-[#4D0000]">
            Xem danh sách →
          </div>
        </Link>

        {/* Card 3: Settings */}
        <Link
          href="/admin/settings"
          className="group relative overflow-hidden rounded-xl border border-[#E75739]/30 bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl hover:border-[#E75739]"
        >
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-2rem] rounded-full bg-zinc-200/50 blur-2xl" />
          <h3 className="text-xl font-bold text-zinc-700">⚙️ Cài đặt</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Cấu hình hệ thống & tài khoản.
          </p>
          <div className="mt-4 flex items-center text-zinc-400 font-medium group-hover:text-zinc-800">
            Cấu hình →
          </div>
        </Link>
      </div>

      {/* Recent Activity Section (Placeholder) */}
      <div className="rounded-xl border border-[#E75739]/20 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#4D0000] mb-4">
          Hoạt động gần đây
        </h2>
        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b last:border-0 border-dashed border-[#E75739]/20 pb-3 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#E75739]" />
                <span className="text-sm text-zinc-600">
                  Admin vừa cập nhật bài viết{' '}
                  <span className="font-semibold text-[#760000]">
                    "Sức khỏe mùa hè..."
                  </span>
                </span>
              </div>
              <span className="text-xs text-zinc-400">2 giờ trước</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
