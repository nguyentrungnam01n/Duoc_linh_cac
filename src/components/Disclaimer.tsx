import type { ContentDetail } from '@/types';

export function Disclaimer({ content }: { content: ContentDetail }) {
  if (!content.disclaimerEnabled) return null;

  return (
    <section className="rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm">
      <p className="font-semibold">Lưu ý</p>
      {content.disclaimerText ? (
        <p className="mt-2 whitespace-pre-line text-zinc-700">
          {content.disclaimerText}
        </p>
      ) : (
        <p className="mt-2 text-zinc-700">Nội dung chỉ mang tính tham khảo.</p>
      )}
    </section>
  );
}
