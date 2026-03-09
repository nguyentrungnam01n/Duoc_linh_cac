import type { Metadata } from 'next';
import { LoginForm } from './ui';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Đăng nhập (Admin)',
  description: 'Đăng nhập quản trị.',
};

export default function AdminLoginPage() {
  return (
    <div
      className={`min-h-dvh flex items-center justify-center bg-[#4D0000] p-4 relative overflow-hidden ${beVietnamPro.className}`}
    >
      {/* Background decoration */}
      <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full bg-[#E75739] blur-[100px] opacity-20" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-[#FFF9A7] blur-[100px] opacity-10" />

      <div className="w-full max-w-sm relative z-10">
        <div className="rounded-xl border border-[#FFF9A7]/50 bg-white/95 backdrop-blur-md p-8 shadow-2xl">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold uppercase text-[#4D0000] tracking-wide">
              Dược Linh Các
            </h1>
            <p className="mt-1 text-sm font-medium text-[#760000]">
              Hệ thống quản trị
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center text-xs text-[#4D0000]/60">
            &copy; 2026 Duoc Linh Cac. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
