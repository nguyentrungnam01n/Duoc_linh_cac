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
  const content = await fetchContentDetail('POST', slug);

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

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await fetchContentDetail('POST', slug);

  const crumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bài đăng', href: '/bai-dang' },
    { label: content.title, href: `/bai-dang/${content.slug}` },
  ];

  const origin = await getRequestOrigin();
  const canonical = `${origin}/bai-dang/${content.slug}`;

  const breadcrumbLd = breadcrumbJsonLd({ origin, items: crumbs });
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    mainEntityOfPage: canonical,
    datePublished: content.publishedAt ?? undefined,
    dateModified: content.updatedAt ?? undefined,
    image: content.ogImage || content.cover || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Dược Linh Các',
    },
  };

  return (
    <article className="space-y-6">
      <Breadcrumb items={crumbs} />
      <h1 className="text-2xl font-semibold">{content.title}</h1>
      <Disclaimer content={content} />
      <RichText html={content.html} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(articleLd)}
      />
    </article>
  );
}
