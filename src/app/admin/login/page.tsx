import type { Metadata } from 'next';
import { LoginForm } from './ui';

export const metadata: Metadata = {
  title: 'Đăng nhập (Admin)',
  description: 'Đăng nhập quản trị.',
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-dvh bg-zinc-50">
      <div className="mx-auto max-w-md px-4 py-16">
        <div className="rounded-md border border-zinc-200 bg-white p-6">
          <h1 className="text-lg font-semibold">Admin Login</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Token được lưu bằng cookie httpOnly.
          </p>
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
