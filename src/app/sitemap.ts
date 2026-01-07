import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

async function getOrigin(): Promise<string> {
  const h = await headers();
  const proto = h.get('x-forwarded-proto') ?? 'http';
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000';
  return `${proto}://${host}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await getOrigin();
  const now = new Date();

  const paths = [
    '/',
    '/chung-benh',
    '/dich-vu',
    '/linh-duoc',
    '/bai-dang',
    '/lien-he',
  ];

  return paths.map((p) => ({
    url: `${origin}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.7,
  }));
}
