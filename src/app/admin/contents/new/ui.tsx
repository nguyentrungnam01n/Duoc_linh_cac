'use client';

import { useState } from 'react';
import type {
  AdminContentCreateInput,
  AdminContentResponse,
  ContentType,
} from '@/types';
import { adminApi } from '@/lib/adminApi';

export function NewContentForm() {
  const [type, setType] = useState<ContentType>('POST');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdminContentResponse | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const payload: AdminContentCreateInput = { type, title, slug, html };
      const res = await adminApi.createContent(payload);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Create failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm">Type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as ContentType)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="DISEASE">DISEASE</option>
            <option value="SERVICE">SERVICE</option>
            <option value="HERB">HERB</option>
            <option value="POST">POST</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-sm">Slug</span>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2"
          />
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-sm">Title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md border border-zinc-300 px-3 py-2"
        />
      </label>

      <label className="space-y-1">
        <span className="text-sm">HTML</span>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="min-h-40 w-full rounded-md border border-zinc-300 px-3 py-2 font-mono text-xs"
        />
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? 'Đang tạo...' : 'Tạo'}
      </button>

      {result ? (
        <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3">
          <pre className="overflow-auto text-xs">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      ) : null}
    </form>
  );
}
