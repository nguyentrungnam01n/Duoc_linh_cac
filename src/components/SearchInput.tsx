'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <input
      type="text"
      className={`absolute flex items-center justify-center outline-none bg-[#4D0000]/90 text-[#FFF9A7] placeholder-[#FFF9A7]/70 ${beVietnamPro.className} p-2`}
      style={{
        width: '299px',
        height: '40px',
        left: '13px',
        top: '12px',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '15px',
        border: 'none',
      }}
      placeholder="Tìm kiếm bài viết..."
      defaultValue={searchParams.get('query')?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}
