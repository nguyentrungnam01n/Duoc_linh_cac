'use client';

import { useMemo, useState } from 'react';
import { submitLead } from '@/lib/api';

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
  company: string; // honeypot
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
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
      <section className="rounded-md border border-zinc-200 p-4">
        <p className="font-semibold">Gửi thành công</p>
        <p className="mt-2 text-sm text-zinc-600">
          Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm.
        </p>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm">Họ tên *</span>
          <input
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
            autoComplete="name"
          />
        </label>

        <label className="space-y-1">
          <span className="text-sm">Số điện thoại *</span>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-sm">Email</span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md border border-zinc-300 px-3 py-2"
          autoComplete="email"
        />
      </label>

      <label className="space-y-1">
        <span className="text-sm">Nội dung *</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="min-h-32 w-full rounded-md border border-zinc-300 px-3 py-2"
        />
      </label>

      <label className="hidden">
        <span>company</span>
        <input
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {submitting ? 'Đang gửi...' : 'Gửi liên hệ'}
      </button>
    </form>
  );
}
