'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function AutoScrollContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    const element = document.getElementById('post-list-top');
    if (element) {
      const topStart = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topStart - 20,
        behavior: 'smooth',
      });
    }
  }, [page]);

  return null;
}

export function AutoScroll() {
  return (
    <Suspense>
      <AutoScrollContent />
    </Suspense>
  );
}
