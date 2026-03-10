'use client';

import { useMemo, useState } from 'react';
import { submitLead } from '@/lib/api';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  topic: string; // Changed from subject
  message: string;
  company: string; // honeypot
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
    company: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationError = useMemo(() => {
    if (!form.fullName.trim()) return 'Vui lòng nhập họ tên.';
    if (!form.phone.trim()) return 'Vui lòng nhập số điện thoại.';
    if (!form.message.trim()) return 'Vui lòng nhập nội dung.';
    return null;
  }, [form.fullName, form.phone, form.message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        fullName: form.fullName,
        phone: form.phone,
        email: form.email || undefined,
        topic: form.topic || undefined,
        message: form.message,
        company: form.company || undefined,
        sourceUrl: window.location.href,
      });
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submit failed');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <section
        className={`flex min-h-[400px] w-full flex-col items-center justify-center rounded-[4px] bg-[#F9FFDC] p-8 text-center shadow-sm ${beVietnamPro.className}`}
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#BF351C]/10 ring-1 ring-[#BF351C]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#BF351C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-[#BF351C]">
          Gửi liên hệ thành công!
        </h3>
        <p className="max-w-[80%] text-base text-[#3F3F3F]">
          Cảm ơn bạn đã quan tâm đến Dược Linh Các. Chúng tôi đã nhận được thông
          tin và sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </section>
    );
  }

  const inputClass = `h-[42px] w-full rounded-[4px] bg-[#F9FFDC] px-4 text-base placeholder-[#3F3F3F] text-[#3F3F3F] focus:outline-none focus:ring-1 focus:ring-[#BF351C] ${beVietnamPro.className}`;
  const textareaClass = `h-[157px] w-full rounded-[4px] bg-[#F9FFDC] px-4 py-3 text-base placeholder-[#3F3F3F] text-[#3F3F3F] focus:outline-none focus:ring-1 focus:ring-[#BF351C] ${beVietnamPro.className}`;

  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 ${beVietnamPro.className} text-[#3F3F3F]`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="fullName"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className={inputClass}
          placeholder="Họ và tên"
          autoComplete="name"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
          placeholder="Số điện thoại"
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="Email"
          autoComplete="email"
        />

        <input
          name="topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className={inputClass}
          placeholder="Chủ đề"
        />
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={textareaClass}
        placeholder="Nội dung tư vấn"
      />

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <div className="w-full">
        <button
          type="submit"
          disabled={submitting}
          className={`h-[35px] w-[153px] rounded-[4px] bg-[#BF351C] text-sm font-medium text-white disabled:opacity-60 ${beVietnamPro.className}`}
        >
          {submitting ? 'Đang gửi...' : 'Gửi liên hệ'}
        </button>
      </div>
    </form>
  );
}
