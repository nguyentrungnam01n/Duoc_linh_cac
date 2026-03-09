import type { Metadata } from 'next';
import { Breadcrumb } from '@/components';
import { fetchContentDetail } from '@/lib/api';
import { breadcrumbJsonLd, getRequestOrigin, safeJsonLd } from '../../_seo';
import localFont from 'next/font/local';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import bannerImage from '@/assets/banner/banner-bai-dang.png';
import backgroundImage from '@/assets/background/background-baidang.png';
import contentBox from '@/assets/boxes/content-box.png';
import smallBox from '@/assets/boxes/small-box.png';
import templateImg8 from '@/assets/img/template-img-8.png';
import templateImg9 from '@/assets/img/template-img-9.png';
import templateImg10 from '@/assets/img/template-img-10.png';
import templateImg11 from '@/assets/img/template-img-11.png';
import templateImg12 from '@/assets/img/template-img-12.png';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await fetchContentDetail(slug);

  const title = content.metaTitle || content.title;
  const description = content.metaDescription || content.excerpt || undefined;
  const image = content.coverImageId || undefined;

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

const MOCK_RELATED_POSTS = [
  {
    id: 1,
    image: templateImg10, // Assuming these are imported, which I verified earlier
    category: 'Sức khỏe',
    title: 'SỨC KHỎE THỂ CHẤT LÀ GÌ?',
    slug: 'suc-khoe-the-chat-la-gi',
    description:
      'Y học Cổ truyền là một kho tàng tri thức y học được truyền lại qua hàng nghìn năm, dựa trên nguyên lý cân bằng âm dương, điều hòa khí huyết và sử dụng dược liệu thiên nhiên.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 2,
    image: templateImg11,
    category: 'Sức khỏe',
    title: 'GIỮ GÌN SỨC KHỎE CỘNG ĐỒNG BẰNG TINH HOA DÂN TÔC',
    slug: 'giu-gin-suc-khoe-cong-dong-bang-tinh-hoa-dan-toc',
    description:
      'Y học Cổ truyền là một kho tàng tri thức y học được truyền lại qua hàng nghìn năm, dựa trên nguyên lý cân bằng âm dương, điều hòa khí huyết và sử dụng dược liệu thiên nhiên.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 3,
    image: templateImg12,
    category: 'Sức khỏe',
    title: 'NHỮNG KIẾN THỨC CƠ BẢN VỀ THUỐC NAM',
    slug: 'nhung-kien-thuc-co-ban-ve-thuoc-nam',
    description:
      'Y học Cổ truyền là một kho tàng tri thức y học được truyền lại qua hàng nghìn năm, dựa trên nguyên lý cân bằng âm dương, điều hòa khí huyết và sử dụng dược liệu thiên nhiên.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
];

const MOCK_POSTS_DATA = [
  {
    id: 1,
    category: 'Sức khỏe',
    categoryColor: '#F9FFDC',
    title: 'GIỮ GÌN SỨC KHỎE CỘNG ĐỒNG BẰNG TINH HOA DÂN TÔC',
    slug: 'giu-gin-suc-khoe-cong-dong-bang-tinh-hoa-dan-toc',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 2,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title: 'VÌ SAO NÊN ĐI KHÁM Ở DƯỢC LINH CÁC?',
    slug: 'vi-sao-nen-di-kham-o-duoc-linh-cac',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 3,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title: 'BỘ PHẬN QUAN TRỌNG KHÔNG THỂ TÁCH RỜI TRONG CHĂM SÓC SỨC KHỎE',
    slug: 'bo-phan-quan-trong-khong-the-tach-roi-trong-cham-soc-suc-khoe',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 4,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title:
      'Y HỌC CỔ TRUYỀN LÀ DI SẢN VĂN HOÁ QUÝ CẦN ĐƯỢC BẢO TỒN VÀ PHÁT TRIỂN',
    slug: 'y-hoc-co-truyen-la-di-san-van-hoa-quy-can-duoc-bao-ton-va-phat-trien',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
];

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await fetchContentDetail(slug);
  const displayPost =
    MOCK_POSTS_DATA.find((p) => p.slug === slug) || MOCK_POSTS_DATA[0];

  const crumbs = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bài đăng', href: '/bai-dang' },
    {
      label: displayPost?.title || content.title,
      href: `/bai-dang/${content.slug}`,
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
    image: content.coverImageId || undefined,
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
      <article className="relative w-full min-h-screen overflow-hidden bg-[#4D0000] flex flex-col items-center pb-20">
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
            // Removed fixed height to allow auto-grow
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

          {/* Title: Gìn giữ sức khỏe cộng đồng... */}
          <div
            className={`flex items-center justify-center uppercase text-[#BA0B00]`}
            style={{
              width: '955px',
              // Auto height for title
              fontFamily: 'var(--font-big-shoulders-display)',
              fontSize: '60.7788px',
              fontWeight: 600,
              lineHeight: '73px',
              textAlign: 'center',
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            {displayPost?.title ||
              'Gìn giữ sức khỏe cộng đồng bằng tinh hoa dân tộc'}
          </div>

          {/* Metadata: Category, Date, Author */}
          <div className="flex items-center justify-center gap-6">
            {/* Category */}
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
                    style={{ color: displayPost?.categoryColor || '#F9FFDC' }}
                  >
                    {displayPost?.category || 'Sức khỏe'}
                  </span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-[1px] h-[20px] bg-[#760000]"></div>

            {/* Date */}
            <div
              className={`text-[#760000] ${beVietnamPro.className} text-[14px]`}
            >
              Ngày đăng: {displayPost?.date || '24.1.2026'}
            </div>

            {/* Separator */}
            <div className="w-[1px] h-[20px] bg-[#760000]"></div>

            {/* Author */}
            <div
              className={`text-[#760000] ${beVietnamPro.className} text-[14px]`}
            >
              Tác giả: {displayPost?.author || 'Nguyễn Văn A'}
            </div>
          </div>

          {/* Paragraph 1: Trong bối cảnh... */}
          <div
            className={`flex items-center text-[#690F0C] ${beVietnamPro.className}`}
            style={{
              width: '1029px',
              // height: '120px', // Auto height for text content
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
            }}
          >
            Trong bối cảnh hiện đại hóa và hội nhập quốc tế, Y học cổ truyền
            (YHCT) vẫn giữ một vị trí quan trọng trong việc chăm sóc sức khỏe
            cộng đồng. Được đúc kết từ hàng ngàn năm lịch sử, Y học cổ truyền
            Việt Nam là kho tàng kiến thức quý giá, các vị thuốc Đông Y (các
            loại dược liệu, thảo mộc từ thiên nhiên) cơ bản rất gần gũi trong
            đời sống hằng ngày kết hợp giữa lý thuyết triết học phương Đông và
            các bài thuốc từ thảo dược thiên nhiên. Tại Trường Đại học Hòa Bình,
            chúng tôi tự hào mang đến chương trình đào tạo YHCT với sứ mệnh gìn
            giữ và phát huy tinh hoa dân tộc, đồng thời trang bị cho sinh viên
            những kiến thức vững chắc về y học.
          </div>

          {/* Image 8 */}
          <div
            className="relative"
            style={{
              width: '1020px',
              height: '465px',
              flexShrink: 0,
            }}
          >
            <Image
              src={templateImg8}
              alt="Template 8"
              fill
              className="object-cover"
            />
          </div>

          {/* Heading 2: Tầm quan trọng... */}
          <div
            className={`flex items-center text-[#690F0C] ${beVietnamPro.className}`}
            style={{
              width: '1011px',
              // height: '42px',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '40px',
              flexShrink: 0,
              marginTop: '32px', // Add extra margin for section separation
            }}
          >
            Tầm quan trọng của Y học cổ truyền trong chăm sóc sức khỏe
          </div>

          {/* Paragraph 2: Y học cổ truyền là một phương pháp... */}
          <div
            className={`flex items-center text-[#690F0C] ${beVietnamPro.className}`}
            style={{
              width: '1014px',
              // height: '521px',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              whiteSpace: 'pre-line',
            }}
          >
            {`Y học cổ truyền là một phương pháp toàn diện và hệ thống kết hợp giữa dưỡng sinh, châm cứu, bấm huyệt và chế độ ăn uống hợp lý để cải thiện sức khỏe từ bên trong. Một trong những điểm đặc biệt của phương pháp chẩn đoán bệnh bằng cách sử dụng ngoại quan tứ chẩn: Vọng, Văn, Vấn, và Thiết. Đây là những kỹ thuật quan sát và phân tích sâu rộng giúp xác định tình trạng sức khỏe của bệnh nhân từ nhiều góc độ khác nhau.
Phòng bệnh hơn chữa bệnh: Một trong những nguyên tắc cốt lõi của Y học cổ truyền là việc duy trì sự cân bằng giữa cơ thể và môi trường xung quanh, từ đó phòng ngừa bệnh tật trước khi chúng xuất hiện. Thay vì chỉ tập trung vào việc điều trị khi bệnh đã xảy ra, Y học cổ truyền nhấn mạnh việc sử dụng thảo dược thiên nhiên và các phương pháp dưỡng sinh để thanh lọc cơ thể, tăng cường sức đề kháng và tạo ra sự hài hòa nội tại. Ví dụ: các bài thuốc từ thảo dược không chỉ giúp cải thiện sức khỏe mà còn giúp cân bằng các yếu tố âm dương và khí huyết trong cơ thể.
Điều trị tận gốc: Y học cổ truyền không chỉ giảm triệu chứng mà còn hướng đến việc tìm hiểu nguyên nhân gốc rễ của bệnh tật. Các phương pháp điều trị như châm cứu, bấm huyệt, xoa bóp không chỉ giúp điều trị các triệu chứng mà còn giúp khôi phục sự cân bằng nội tại, từ đó cải thiện sức khỏe toàn diện. Châm cứu, chẳng hạn, không chỉ giảm đau mà còn kích thích cơ thể tự chữa lành và điều chỉnh các rối loạn chức năng. Tương tự, xoa bóp và bấm huyệt giúp giải tỏa căng thẳng, tăng cường lưu thông máu và phục hồi năng lượng.
Ứng dụng trong cuộc sống hiện đại: Trong thời đại mà con người phải đối mặt với nhiều áp lực từ công việc, môi trường và lối sống, YHCT đã trở thành một lựa chọn phổ biến để ngăn ngừa và điều trị các bệnh lý mãn tính. Với sự gia tăng của các bệnh lý liên quan đến lối sống như căng thẳng, béo phì, và các bệnh mãn tính như tiểu đường, huyết áp cao, các phương pháp không chỉ cung cấp giải pháp điều trị hiệu quả mà còn giúp cải thiện chất lượng cuộc sống. Các phương pháp dưỡng sinh như thiền, khí công, và chế độ ăn uống hợp lý có thể hỗ trợ cơ thể trong việc duy trì sức khỏe và phòng ngừa bệnh tật.`}
          </div>

          {/* Image 9 */}
          <div
            className="relative"
            style={{
              width: '1007px',
              height: '467px',
              flexShrink: 0,
              marginTop: '32px',
            }}
          >
            <Image
              src={templateImg9}
              alt="Template 9"
              fill
              className="object-cover"
            />
          </div>

          {/* Heading 3: Y học Cổ truyền là gì? */}
          <div
            className={`flex items-center text-[#690F0C] ${beVietnamPro.className}`}
            style={{
              width: '1011px',
              // height: '42px',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '40px',
              flexShrink: 0,
              marginTop: '32px',
            }}
          >
            Y học Cổ truyền là gì?
          </div>

          {/* Paragraph 3 */}
          <div
            className={`flex items-center text-[#690F0C] ${beVietnamPro.className}`}
            style={{
              width: '1014px',
              // height: '369px',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              whiteSpace: 'pre-line',
            }}
          >
            {`Y học Cổ truyền (Traditional medicine) là một hệ thống y học dựa trên quan niệm triết học phương Đông, đặc biệt là nguyên lý âm dương – ngũ hành, khí huyết và kinh lạc. Phương pháp này tập trung vào việc điều chỉnh sự cân bằng trong cơ thể, giúp cơ thể tự phục hồi thay vì chỉ chữa trị triệu chứng như Tây Y.
Nguyên lý cơ bản trong Y học Cổ truyền: 
Nguyên lý Âm Dương – Ngũ Hành
Y học cổ truyền dựa trên thuyết Âm Dương – Ngũ Hành, trong đó:
Âm – Dương đại diện cho hai mặt đối lập nhưng bổ sung cho nhau của sự sống. Khi Âm Dương cân bằng, cơ thể khỏe mạnh; khi mất cân bằng, bệnh tật xuất hiện.
Ngũ Hành (Kim, Mộc, Thủy, Hỏa, Thổ) tương ứng với các cơ quan trong cơ thể, phản ánh mối quan hệ giữa nội tạng và môi trường xung quanh.
Khí, huyết, tạng phủ
Khí: Là nguồn năng lượng duy trì sự sống, giúp cơ thể hoạt động nhịp nhàng.
Huyết: Đóng vai trò cung cấp dưỡng chất và lưu thông khắp cơ thể.
Tạng phủ: Bao gồm ngũ tạng (Tâm, can, tỳ, phế, thận) và lục phủ (Đại trường, tiểu trường, vị, đởm, bàng quang, tam tiêu), hoạt động phối hợp để duy trì sức khỏe.`}
          </div>
        </div>

        {/* Related Posts Section - Now flows naturally below the Content Box */}
        <div
          className="relative z-10 flex flex-col"
          style={{
            width: '1167px',
            marginTop: '120px',
            gap: '40px',
            paddingBottom: '100px', // Extra bottom spacing
          }}
        >
          {/* Related Posts Title */}
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

          {/* Related Posts List - Flexbox instead of absolute positioning */}
          <div className="flex flex-wrap justify-between">
            {MOCK_RELATED_POSTS.map((post) => (
              <div
                key={post.id}
                className="relative"
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
                {/* Post Image */}
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
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Chuyên mục: */}
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

                {/* Badge Background */}
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

                {/* Category Text */}
                <div
                  className={`flex items-center text-[#FFF9A7] ${beVietnamPro.className}`}
                  style={{
                    height: '20.47px',
                    left: '116.01px',
                    top: '238.08px',
                    position: 'absolute',
                    fontWeight: 400,
                    fontSize: '5.92682px',
                    lineHeight: '7px',
                  }}
                >
                  {post.category}
                </div>

                {/* Title */}
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
                  {post.title}
                </Link>

                {/* Description */}
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
                  {post.description}
                </div>

                {/* Date */}
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
                  Ngày đăng: {post.date}
                </div>

                {/* Separator */}
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

                {/* Author */}
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
                  Tác giả: {post.author}
                </div>

                {/* Read More */}
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
      </article>
    </div>
  );
}
