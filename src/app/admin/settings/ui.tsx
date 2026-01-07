'use client';

import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/adminApi';
import type { AdminSettingsResponse, AdminSettingsUpdateInput } from '@/types';

export function SettingsPage() {
  const [json, setJson] = useState('{}');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdminSettingsResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    adminApi
      .getSettings()
      .then((res) => {
        if (!cancelled) setJson(JSON.stringify(res ?? {}, null, 2));
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  async function onSave() {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const payload = JSON.parse(json) as AdminSettingsUpdateInput;
      setResult(await adminApi.updateSettings(payload));
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError('JSON không hợp lệ. Vui lòng kiểm tra lại.');
      } else {
        setError(err instanceof Error ? err.message : 'Save failed');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Cài đặt</h1>
        <button
          type="button"
          onClick={onSave}
          disabled={loading}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          Lưu
        </button>
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <p className="text-xs text-zinc-600">
        Dữ liệu được lưu dưới dạng JSON (tối giản cho skeleton).
      </p>

      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        className="min-h-80 w-full rounded-md border border-zinc-300 px-3 py-2 font-mono text-xs"
      />

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
