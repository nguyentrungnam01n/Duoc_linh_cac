import type { Metadata } from 'next';
import { Breadcrumb, RichText } from '@/components';
import { fetchContentDetail, fetchFeaturedContents } from '@/lib/api';
import { ContentSummary } from '@/types';
import { breadcrumbJsonLd, getRequestOrigin, safeJsonLd } from '../../_seo';
import localFont from 'next/font/local';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import bannerImage from '@/assets/banner/banner-bai-dang.png';
import backgroundImage from '@/assets/background/background-baidang.png';
import contentBox from '@/assets/boxes/content-box.png';
import smallBox from '@/assets/boxes/small-box.png';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const content = await fetchContentDetail(slug);
    const title = content.metaTitle || content.title;
    const description = content.metaDescription || content.excerpt || undefined;
    const image = content.coverImage?.url || undefined; // Updated to use coverImage url

    return {
      title,
      description,
      openGraph: image
        ? { title, description, images: [image] }
        : { title, description },
    };
  } catch (error) {
    console.error('Failed to generate metadata:', error);
    return {
      title: 'Bài đăng không tồn tại',
    };
  }
}

// 2. Cấu hình font
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const bigShouldersDisplay = localFont({
  src: [
    {
      path: '../../../../assets/fonts/BigShouldersDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../assets/fonts/BigShouldersStencil_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-big-shoulders-display',
  display: 'swap',
});

// Helper for category colors
const CATEGORY_COLORS = ['#F9FFDC', '#FFF9A7', '#D7F9FA', '#FFD6E0'];
function getCategoryColor(index: number) {
  return CATEGORY_COLORS[index % CATEGORY_COLORS.length];
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let content;
  try {
    content = await fetchContentDetail(slug);
  } catch (err) {
    console.error('Failed to fetch content:', err);
    return (
      <div className="min-h-screen pt-32 text-center text-white">
        Không tìm thấy bài viết
      </div>
    );
  }

  // Fetch related posts (random 3 with same category)
  let relatedPosts: ContentSummary[] = [];
  try {
    if (content.category?.slug) {
      // Fetch 4 to account for current post potentially being included
      const posts = await fetchFeaturedContents(content.category.slug, 4);
      console.log('Related posts fetched:', posts);
      // Ensure we don't show current post
      relatedPosts = posts.filter((p) => p.id !== content.id).slice(0, 3);
    }
  } catch (err) {
    console.error('Failed to fetch related posts:', err);
    relatedPosts = [];
  }

  const displayPost = content; // Alias for easier refactoring if needed

  const crumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bài đăng', href: '/bai-dang' },
    {
      label: displayPost.title,
      href: `/bai-dang/${displayPost.slug}`,
    },
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
    image: content.coverImage?.url || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Dược Linh Các',
    },
  };

  return (
    <div className={`${bigShouldersDisplay.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(breadcrumbLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={safeJsonLd(articleLd)}
      />
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner dịch vụ"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <article className="relative w-full min-h-screen overflow-hidden bg-[#4D0000]/90 flex flex-col items-center pb-20">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center pointer-events-none opacity-100"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 95%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 95%, transparent 100%)',
          }}
          priority
        />

        {/* Content Box */}
        <div
          className="relative z-10 box-border flex flex-col items-center"
          style={{
            width: '1167px',
            marginTop: '224px',
            paddingTop: '118px',
            paddingBottom: '118px',
            gap: '32px',
          }}
        >
          <Image
            src={contentBox}
            alt="Content Box"
            fill
            className="object-fill -z-10"
          />

          <div
            style={{
              width: '955px',
              marginBottom: '20px',
            }}
          >
            <Breadcrumb items={crumbs} />
          </div>

          {/* Title */}
          <div
            className={`flex items-center justify-center uppercase text-[#BA0B00]`}
            style={{
              width: '955px',
              fontFamily: 'var(--font-big-shoulders-display)',
              fontSize: '60.7788px',
              fontWeight: 600,
              lineHeight: '73px',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            {displayPost.title}
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span
                className={`text-[#760000] ${beVietnamPro.className} text-[14px]`}
              >
                Chuyên mục:
              </span>
              <div className="relative">
                <div className="bg-[#E75739] rounded-[10px] px-3 py-1">
                  <span
                    className={`${beVietnamPro.className} text-[12px] font-bold`}
                    style={{ color: getCategoryColor(0) }}
                  >
                    {displayPost.category?.name || 'Sức khỏe'}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[1px] h-[20px] bg-[#4D0000]/90"></div>

            <div
              className={`text-[#760000] ${beVietnamPro.className} text-[14px]`}
            >
              Ngày đăng:{' '}
              {displayPost.publishedAt
                ? new Date(displayPost.publishedAt).toLocaleDateString('vi-VN')
                : ''}
            </div>

            <div className="w-[1px] h-[20px] bg-[#4D0000]/90"></div>

            <div
              className={`text-[#760000] ${beVietnamPro.className} text-[14px]`}
            >
              Tác giả: {displayPost.authorName || 'Dược Linh Các'}
            </div>
          </div>

          {/* Body Content */}
          <div
            className={`w-[1029px] text-[#690F0C] ${beVietnamPro.className}`}
          >
            <RichText html={content.html} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div
            className="relative z-10 flex flex-col"
            style={{
              width: '1167px',
              marginTop: '120px',
              gap: '30px',
              paddingBottom: '100px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-big-shoulders-display)',
                fontWeight: 800,
                fontSize: '40px',
                lineHeight: '48px',
                color: '#FFE7B6',
                textTransform: 'uppercase',
                textAlign: 'left',
                paddingLeft: '10px',
              }}
            >
              CÁC BÀI VIẾT LIÊN QUAN
            </div>

            <div className="flex justify-between">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    width: '323px',
                    height: '406.4px',
                  }}
                >
                  <Image
                    src={smallBox}
                    alt={`Related Post ${post.id}`}
                    fill
                    className="object-fill"
                  />
                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className="absolute cursor-pointer"
                    style={{
                      width: '305px',
                      height: '203px',
                      left: '9px',
                      top: '12px',
                    }}
                  >
                    {post.coverImage?.url ? (
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-200" />
                    )}
                  </Link>

                  <div
                    className={`flex items-center text-[#760000] ${beVietnamPro.className}`}
                    style={{
                      height: '38.67px',
                      left: '21.23px',
                      top: '228.98px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '11.1951px',
                      lineHeight: '14px',
                    }}
                  >
                    Chuyên mục:
                  </div>

                  <div
                    className="absolute bg-[#E75739]"
                    style={{
                      width: '50.8px',
                      height: '15.63px',
                      left: '105.39px',
                      top: '240.35px',
                      borderRadius: '7.81546px',
                    }}
                  />

                  <div
                    className={`flex items-center text-[#FFF9A7] ${beVietnamPro.className}`}
                    style={{
                      left: '116.01px',
                      top: '244.5px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '6px',
                      lineHeight: '7px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.category?.name || 'Chung'}
                  </div>

                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className={`flex items-center uppercase text-[#760000] cursor-pointer ${beVietnamPro.className}`}
                    style={{
                      width: '280.54px',
                      height: '38.67px',
                      left: '21.23px',
                      top: '261.58px',
                      position: 'absolute',
                      fontWeight: 900,
                      fontSize: '11.1951px',
                      lineHeight: '14px',
                    }}
                  >
                    <span className="line-clamp-2">{post.title}</span>
                  </Link>

                  <div
                    className={`flex items-center text-[#760000] ${beVietnamPro.className}`}
                    style={{
                      width: '280.54px',
                      left: '21.23px',
                      top: '300.25px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '9.09859px',
                      lineHeight: '12px',
                    }}
                  >
                    <span className="line-clamp-3">
                      {post.excerpt || '...'}
                    </span>
                  </div>

                  <div
                    className={`flex items-center text-[#760000] ${beVietnamPro.className}`}
                    style={{
                      height: '38.67px',
                      left: '21.23px',
                      top: '342.71px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '9.09859px',
                      lineHeight: '12px',
                    }}
                  >
                    Ngày đăng:{' '}
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('vi-VN')
                      : ''}
                  </div>

                  <div
                    className={`flex items-center text-[#760000] ${beVietnamPro.className}`}
                    style={{
                      width: '6.82px',
                      height: '38.67px',
                      left: '124.35px',
                      top: '342.71px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '9.09859px',
                      lineHeight: '12px',
                    }}
                  >
                    |
                  </div>

                  <div
                    className={`flex items-center text-[#760000] ${beVietnamPro.className}`}
                    style={{
                      height: '38.67px',
                      left: '132.69px',
                      top: '342.71px',
                      position: 'absolute',
                      fontWeight: 400,
                      fontSize: '9.09859px',
                      lineHeight: '12px',
                    }}
                  >
                    Tác giả: {post.authorName}
                  </div>

                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className={`flex items-center text-[#760000] italic underline ${beVietnamPro.className}`}
                    style={{
                      width: '50.8px',
                      height: '9.1px',
                      left: '21.99px',
                      top: '378.35px',
                      position: 'absolute',
                      fontWeight: 700,
                      fontSize: '9.09859px',
                      lineHeight: '12px',
                      cursor: 'pointer',
                      textDecorationLine: 'underline',
                    }}
                  >
                    Đọc thêm
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
