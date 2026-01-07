import type { Metadata } from 'next';
import { Breadcrumb, Disclaimer, RichText } from '@/components';
import { fetchContentDetail } from '@/lib/api';
import { breadcrumbJsonLd, getRequestOrigin, safeJsonLd } from '../../_seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await fetchContentDetail('SERVICE', slug);

  const title = content.metaTitle || content.title;
  const description = content.metaDescription || content.excerpt || undefined;
  const image = content.ogImage || content.cover || undefined;

  return {
    title,
    description,
    openGraph: image
      ? {
          title,
          description,
          images: [image],
        }
      : {
          title,
          description,
        },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await fetchContentDetail('SERVICE', slug);

  const crumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Dịch vụ', href: '/dich-vu' },
    { label: content.title, href: `/dich-vu/${content.slug}` },
  ];

  const origin = await getRequestOrigin();

  return (
    <article className="space-y-6">
      <Breadcrumb items={crumbs} />
      <h1 className="text-2xl font-semibold">{content.title}</h1>
      <Disclaimer content={content} />
      <RichText html={content.html} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(
          breadcrumbJsonLd({ origin, items: crumbs }),
        )}
      />
    </article>
  );
}
