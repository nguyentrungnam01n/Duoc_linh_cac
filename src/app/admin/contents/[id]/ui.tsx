'use client';

import { useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type { AdminContentResponse, JsonObject } from '@/types';

export function ContentEditor({ id }: { id: string }) {
  const [json, setJson] = useState('{}');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdminContentResponse | null>(null);

  async function run(action: 'update' | 'publish' | 'unpublish') {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      if (action === 'update') {
        const payload = JSON.parse(json) as JsonObject;
        setResult(await adminApi.updateContent(id, payload));
      }
      if (action === 'publish') {
        setResult(await adminApi.publishContent(id));
      }
      if (action === 'unpublish') {
        setResult(await adminApi.unpublishContent(id));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Action failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Nội dung: {id}</h1>

      <label className="space-y-1">
        <span className="text-sm">Payload JSON (PATCH)</span>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          className="min-h-40 w-full rounded-md border border-zinc-300 px-3 py-2 font-mono text-xs"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => run('update')}
          disabled={loading}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-60"
        >
          Cập nhật
        </button>
        <button
          type="button"
          onClick={() => run('publish')}
          disabled={loading}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-60"
        >
          Publish
        </button>
        <button
          type="button"
          onClick={() => run('unpublish')}
          disabled={loading}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm disabled:opacity-60"
        >
          Unpublish
        </button>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      {result ? (
        <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3">
          <pre className="overflow-auto text-xs">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      ) : null}
    </div>
  );
}
