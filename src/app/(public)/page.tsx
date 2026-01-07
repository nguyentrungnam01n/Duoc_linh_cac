import Link from 'next/link';
import type { Metadata } from 'next';
import { fetchPublicHome } from '@/lib/api';
import { ContentCard } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description:
    'Dược Linh Các – nội dung sức khỏe, dược liệu, dịch vụ và bài đăng.',
};

export default async function HomePage() {
  const data = await fetchPublicHome();

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold">Dược Linh Các</h1>
        <p className="text-zinc-600">
          Skeleton frontend (Next.js App Router + TypeScript + Tailwind).
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">Nổi bật</h2>
          <Link href="/bai-dang" className="text-sm hover:underline">
            Xem tất cả
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {(data.featured ?? []).map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              href={`/bai-dang/${item.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Bài đăng mới</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {(data.latestPosts ?? []).map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              href={`/bai-dang/${item.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
