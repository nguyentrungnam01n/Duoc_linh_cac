'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense, useRef } from 'react';

function AutoScrollContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const query = searchParams.get('query');
  const prevQueryRef = useRef(query);

  useEffect(() => {
    // If the query changed, do not scroll
    if (prevQueryRef.current !== query) {
      prevQueryRef.current = query;
      return;
    }
    prevQueryRef.current = query;

    const element = document.getElementById('post-list-top');
    if (element) {
      const topStart = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topStart - 20,
        behavior: 'smooth',
      });
    }
  }, [page, query]);

  return null;
}

export function AutoScroll() {
  return (
    <Suspense>
      <AutoScrollContent />
    </Suspense>
  );
}
