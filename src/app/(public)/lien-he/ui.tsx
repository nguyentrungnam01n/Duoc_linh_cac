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
  address: string;
  email: string;
  subject: string;
  message: string;
  file: File | null;
  company: string; // honeypot
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    address: '',
    email: '',
    subject: '',
    message: '',
    file: null,
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
      // Append extra fields to message since backend doesn't support them directly
      const fullMessage = [
        form.subject ? `Chủ đề: ${form.subject}` : '',
        form.address ? `Địa chỉ: ${form.address}` : '',
        form.file ? `File đính kèm: ${form.file.name}` : '',
        '\nNội dung:',
        form.message,
      ]
        .filter(Boolean)
        .join('\n');

      await submitLead({
        fullName: form.fullName,
        phone: form.phone,
        email: form.email || undefined,
        message: fullMessage,
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
          name="address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className={inputClass}
          placeholder="Địa chỉ"
          autoComplete="street-address"
        />

        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
          placeholder="Email"
          autoComplete="email"
        />
      </div>

      <input
        name="subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className={inputClass}
        placeholder="Chủ đề"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={textareaClass}
        placeholder="Nội dung tư vấn"
      />

      {/* File Attachment Section */}
      <div className={`flex w-full items-center`}>
        <label className="flex h-[35px] w-full cursor-pointer items-center rounded-[2px] bg-[#F9FFDC] overflow-hidden">
          <span className="flex-1 px-4 text-[#3F3F3F] underline decoration-1 underline-offset-2 truncate">
            {form.file ? form.file.name : 'Đính kèm file'}
          </span>
          <input
            name="file"
            type="file"
            onChange={(e) =>
              setForm({ ...form, file: e.target.files?.[0] || null })
            }
            className="hidden"
          />
          <div className="flex h-full w-[90px] items-center justify-center bg-[#BF351C]">
            <span className="text-base text-[#F9FFDC]">Chọn</span>
          </div>
        </label>
      </div>

      <label className="hidden">
        <span>company</span>
        <input
          name="company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

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
