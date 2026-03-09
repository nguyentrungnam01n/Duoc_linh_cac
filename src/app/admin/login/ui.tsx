'use client';

import { useState } from 'react';
import { adminApi } from '@/lib/adminApi';

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EyeSlashIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
      <path d="M6.75 12c0-.619.107-1.205.302-1.754L3.895 6.995A15.102 15.102 0 011.323 11.45c-.12.36-.12.75 0 1.112 1.489 4.472 5.705 7.698 10.678 7.698.47 0 .933-.03 1.388-.088l-2.909-2.91a5.25 5.25 0 01-3.73-5.262z" />
    </svg>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await adminApi.login({ email, password });
      console.log('Login response:', response);
      if (!response?.ok) {
        throw new Error(
          response?.error || 'Đăng nhập thất bại. Vui lòng thử lại.',
        );
      } else {
        window.location.href = '/admin';
      }
    } catch (err: unknown) {
      let message =
        err instanceof Error
          ? err.message
          : 'Đăng nhập thất bại. Vui lòng thử lại.';

      // Dịch các lỗi phổ biến từ Backend sang Tiếng Việt
      if (message === 'Invalid credentials' || message === 'Unauthorized') {
        message = 'Email hoặc mật khẩu không chính xác.';
      } else if (message === 'Account disabled') {
        message = 'Tài khoản này đã bị vô hiệu hóa.';
      } else if (message.includes('Too Many Requests')) {
        message = 'Bạn đã nhập sai quá nhiều lần. Vui lòng đợi 1 phút.';
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-stone-700">
            Email quản trị
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-[#E75739] focus:outline-none focus:ring-1 focus:ring-[#E75739] disabled:bg-stone-50 disabled:text-stone-500"
            placeholder="admin@duoclinhcac.com"
            type="email"
            autoComplete="email"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-stone-700">
            Mật khẩu
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              className="w-full rounded-lg border border-stone-200 px-4 py-2.5 pr-10 text-stone-900 placeholder-stone-400 focus:border-[#E75739] focus:outline-none focus:ring-1 focus:ring-[#E75739] disabled:bg-stone-50 disabled:text-stone-500"
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 flex items-start gap-2 animate-in fade-in slide-in-from-top-1 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 shrink-0 mt-0.5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#4D0000] px-4 py-3 text-sm font-bold text-[#FFF9A7] shadow-sm transition-all hover:bg-[#3A0000] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#4D0000] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
      >
        <span className={loading ? 'opacity-0' : 'opacity-100'}>
          ĐĂNG NHẬP HỆ THỐNG
        </span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-[#FFF9A7]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </button>
    </form>
  );
}
