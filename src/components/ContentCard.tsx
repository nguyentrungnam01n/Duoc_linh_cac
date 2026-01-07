import Link from 'next/link';
import type { ContentSummary } from '@/types';

export function ContentCard({
  item,
  href,
}: {
  item: ContentSummary;
  href: string;
}) {
  return (
    <article className="rounded-md border border-zinc-200 p-4">
      <h3 className="text-base font-semibold">
        <Link href={href} className="hover:underline">
          {item.title}
        </Link>
      </h3>
      {item.excerpt ? (
        <p className="mt-2 text-sm text-zinc-600">{item.excerpt}</p>
      ) : null}
    </article>
  );
}
