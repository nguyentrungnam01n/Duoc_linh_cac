import { headers } from 'next/headers';

import type { Crumb } from '@/components';

export async function getRequestOrigin(): Promise<string> {
  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'http';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000';
  return `${proto}://${host}`;
}

export function breadcrumbJsonLd(params: {
  origin: string;
  items: Array<Crumb & { href?: string }>;
}) {
  const elements = params.items
    .filter((x) => x.href)
    .map((x, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: x.label,
      item: `${params.origin}${x.href}`,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements,
  };
}

export function safeJsonLd(obj: unknown) {
  return { __html: JSON.stringify(obj) };
}
