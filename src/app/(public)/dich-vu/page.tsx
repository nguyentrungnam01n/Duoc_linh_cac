import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchContentList } from '@/lib/api';
import { ContentCard } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dịch vụ',
  description: 'Danh sách nội dung về dịch vụ.',
};

export default async function ServiceListPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const q = sp.q?.trim() || undefined;
  const page = Math.max(1, Number(sp.page || '1') || 1);

  const data = await fetchContentList({
    type: 'SERVICE',
    q,
    page,
    pageSize: 10,
  });

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page * data.pageSize < data.total ? page + 1 : null;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Dịch vụ</h1>
        <form
          className="flex items-center gap-2"
          action="/dich-vu"
          method="get"
        >
          <input
            name="q"
            defaultValue={q}
            placeholder="Tìm kiếm..."
            className="w-full max-w-sm rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            Tìm
          </button>
        </form>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {data.items.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            href={`/dich-vu/${item.slug}`}
          />
        ))}
      </div>

      <nav className="flex items-center justify-between text-sm">
        {prevPage ? (
          <Link
            className="hover:underline"
            href={{
              pathname: '/dich-vu',
              query: { ...(q ? { q } : {}), page: String(prevPage) },
            }}
          >
            ← Trang trước
          </Link>
        ) : (
          <span />
        )}
        {nextPage ? (
          <Link
            className="hover:underline"
            href={{
              pathname: '/dich-vu',
              query: { ...(q ? { q } : {}), page: String(nextPage) },
            }}
          >
            Trang sau →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
