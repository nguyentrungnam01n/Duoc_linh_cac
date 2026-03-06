import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import bannerImage from '@/assets/banner/banner-bai-dang.png';
import backgroundImage from '@/assets/background/background-baidang.png';
import titleBanner from '@/assets/banner/title-banner.png';
import navbarBox from '@/assets/boxes/navbar-box.png';
import templateImg1 from '@/assets/img/template-img-1.png';
import templateImg2 from '@/assets/img/template-img-2.png';
import templateImg3 from '@/assets/img/template-img-3.png';
import templateImg4 from '@/assets/img/template-img-4.png';
import templateImg5 from '@/assets/img/template-img-5.png';
import templateImg6 from '@/assets/img/template-img-6.png';
import templateImg7 from '@/assets/img/template-img-7.png';
import baidangBox from '@/assets/boxes/baidang-box.png';
import paginationBox from '@/assets/boxes/pagination-box.png';
import { AutoScroll, SearchInput } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bài đăng',
  description: 'Danh sách bài đăng.',
};

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
      path: '../../../assets/fonts/BigShouldersDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/BigShouldersStencil_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-big-shoulders-display',
  display: 'swap',
});

// Mock Data (Mở rộng lên 12 bài để test phân trang)
const BASE_POSTS = [
  {
    id: 1,
    image: templateImg4,
    category: 'Sức khỏe',
    categoryColor: '#F9FFDC',
    title: 'GIỮ GÌN SỨC KHỎE CỘNG ĐỒNG BẰNG TINH HOA DÂN TÔC',
    slug: 'giu-gin-suc-khoe-cong-dong-bang-tinh-hoa-dan-toc',
    description:
      'Y học Cổ truyền là một kho tàng tri thức y học được truyền lại qua hàng nghìn năm, dựa trên nguyên lý cân bằng âm dương, điều hòa khí huyết và sử dụng dược liệu thiên nhiên.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 2,
    image: templateImg5,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title: 'VÌ SAO NÊN ĐI KHÁM Ở DƯỢC LINH CÁC?',
    slug: 'vi-sao-nen-di-kham-o-duoc-linh-cac',
    description:
      'Dược Linh Các với những giá trị lâu đời không chỉ mang đến phương pháp chữa bệnh tự nhiên, toàn diện mà còn mở ra nhiều hướng nghiên cứu tiềm năng trong lĩnh vực khoa học sức khỏe.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 3,
    image: templateImg6,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title: 'BỘ PHẬN QUAN TRỌNG KHÔNG THỂ TÁCH RỜI TRONG CHĂM SÓC SỨC KHỎE',
    slug: 'bo-phan-quan-trong-khong-the-tach-roi-trong-cham-soc-suc-khoe',
    description:
      'Y học cổ truyền (YHCT) Việt Nam đã được xác định là một bộ phận quan trọng trong hệ thống y tế để bảo vệ, chăm sóc sức khỏe nhân dân.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
  {
    id: 4,
    image: templateImg7,
    category: 'Sức khỏe',
    categoryColor: '#FFF9A7',
    title:
      'Y HỌC CỔ TRUYỀN LÀ DI SẢN VĂN HOÁ QUÝ CẦN ĐƯỢC BẢO TỒN VÀ PHÁT TRIỂN',
    slug: 'y-hoc-co-truyen-la-di-san-van-hoa-quy-can-duoc-bao-ton-va-phat-trien',
    description:
      'Theo Thứ trưởng Bộ Y tế Đỗ Xuân Tuyên, y học cổ truyền không chỉ là phương pháp chữa bệnh mà còn là biểu tượng của trí tuệ và tinh thần tự cường dân tộc.',
    date: '24.1.2026',
    author: 'Nguyễn Văn A',
  },
];

const MOCK_POSTS = [
  ...BASE_POSTS,
  ...BASE_POSTS.map((p) => ({
    ...p,
    id: p.id + 4,
    title: p.title + ' (Trang 2)',
  })),
  ...BASE_POSTS.map((p) => ({
    ...p,
    id: p.id + 8,
    title: p.title + ' (Trang 3)',
  })),
];

const FEATURED_POSTS = [
  {
    id: 1,
    img: templateImg1,
    title: 'Có nên sử dụng thuốc nam?',
    slug: 'co-nen-su-dung-thuoc-nam',
    date: '24.01.2026',
  },
  {
    id: 2,
    img: templateImg2,
    title: 'Triển lãm "Di sản của Hải Thượng Lãn Ông Lê Hữu Trác"',
    slug: 'trien-lam-di-san-hai-thuong-lan-ong',
    date: '20.01.2026',
  },
  {
    id: 3,
    img: templateImg3,
    title: 'Chữa bệnh bằng y học cổ truyền an toàn, hiệu quả',
    slug: 'chua-benh-bang-y-hoc-co-truyen',
    date: '15.01.2026',
  },
];

const MOCK_CATEGORIES = [
  { id: 1, name: 'Sức khỏe' },
  { id: 2, name: 'Đông Y' },
  { id: 3, name: 'Châm cứu' },
  { id: 4, name: 'Dược liệu' },
  { id: 5, name: 'Mẹo vặt' },
];

const ITEMS_PER_PAGE = 4;

export default async function PostListPage(props: {
  searchParams: Promise<{ page?: string; query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const lowerQuery = query.toLowerCase();

  const filteredPosts = MOCK_POSTS.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
    );
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const rowsCount = Math.ceil(currentPosts.length / 2);
  const paginationTop = 400 + (rowsCount > 0 ? rowsCount : 1) * 592;

  const renderPaginationLinks = () => {
    const links = [];
    if (totalPages <= 1) return null; // Hide pagination if 1 page
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      const params = new URLSearchParams();
      if (query) params.set('query', query);
      params.set('page', i.toString());

      links.push(
        <Link
          key={i}
          href={`?${params.toString()}`}
          scroll={false}
          className={`w-[45px] h-[46px] flex items-center justify-center text-[20px] font-bold transition-all
                  ${isActive ? 'text-[#3E2723] scale-110' : 'text-[#8D6E63] hover:text-[#5D4037]'}
                `}
          style={{
            fontFamily: 'var(--font-big-shoulders-display)',
          }}
        >
          {i}
        </Link>,
      );
    }
    return links;
  };

  return (
    <div className="">
      <AutoScroll />
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner dịch vụ"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <section
        id="post-list-top"
        className="relative min-h-[3550px] w-full overflow-hidden bg-[#4D0000]"
      >
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
        <div className="relative z-10 flex flex-col items-center h-full">
          <div
            className="absolute z-10 flex items-center justify-center p-8 ml-4"
            style={{ top: '45px', width: '568.61px', height: '319.84px' }}
          >
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase mr-4`}
              style={{
                fontSize: '32.7345px',
                fontWeight: 600,
                lineHeight: '39px',
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              BÀI ĐĂNG
            </h1>
          </div>

          <div
            className="absolute z-10"
            style={{
              width: '324px',
              height: '560px',
              left: '1064px',
              top: '400px',
            }}
          >
            <Image
              src={navbarBox}
              alt="Navbar Box"
              fill
              className="object-fill"
            />
            {/* Nav Items */}
            {/* Tìm kiếm */}
            <SearchInput />

            {/* Chuyên mục */}
            <div
              className={`absolute flex items-center uppercase ${beVietnamPro.className}`}
              style={{
                width: '180px',
                height: '51px',
                left: '13px',
                top: '52px',
                fontWeight: 900,
                fontSize: '14.7651px',
                lineHeight: '19px',
                color: '#AF0000',
              }}
            >
              Chuyên mục
            </div>

            {/* Render Categories */}
            {MOCK_CATEGORIES.map((category, index) => (
              <div
                key={category.id}
                className={`absolute flex items-center cursor-pointer hover:underline ${beVietnamPro.className}`}
                style={{
                  width: '180px',
                  height: '18px',
                  left: '19px',
                  top: `${92 + index * 22}px`, // Spacing of 22px
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#AF0000',
                }}
              >
                {category.name}
              </div>
            ))}

            {/* CÁC BÀI VIẾT NỔI BẬT */}
            <div
              className={`absolute flex items-center uppercase ${beVietnamPro.className}`}
              style={{
                width: '223px',
                height: '51px',
                left: '13px',
                top: '210px',
                fontWeight: 900,
                fontSize: '14.7651px',
                lineHeight: '19px',
                color: '#AF0000',
              }}
            >
              CÁC BÀI VIẾT NỔI BẬT
            </div>

            {/* List 3 bài nổi bật */}
            {FEATURED_POSTS.map((post, index) => (
              <div
                key={post.id}
                className="absolute flex items-start gap-3"
                style={{
                  width: '290px',
                  left: '18px',
                  top: `${260 + index * 95}px`, // Cách nhau 95px
                }}
              >
                {/* Thumbnail */}
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className="relative w-[80px] h-[80px] shrink-0 border border-[#AF0000]/20 rounded-md overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </Link>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className={`text-sm font-bold text-[#AF0000] hover:underline line-clamp-2 ${beVietnamPro.className}`}
                    style={{ lineHeight: '1.4' }}
                  >
                    {post.title}
                  </Link>
                  <span
                    className={`text-xs text-[#760000]/80 italic ${beVietnamPro.className}`}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Baidang Boxes */}
          {currentPosts.map((post, index) => {
            const isColumn2 = index % 2 !== 0;
            const rowIndex = Math.floor(index / 2);
            const topPosition = 400 + rowIndex * 592;
            const leftPosition = isColumn2 ? 602 : 149;

            return (
              <div
                key={post.id}
                className="absolute z-10"
                style={{
                  width: '426px',
                  height: '536px',
                  left: `${leftPosition}px`,
                  top: `${topPosition}px`,
                }}
              >
                <Image
                  src={baidangBox}
                  alt={`Bai Dang Box ${post.id}`}
                  fill
                  className="object-contain"
                />

                {/* Image */}
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className="absolute cursor-pointer"
                  style={{
                    width: '400px',
                    height: '267px',
                    left: '14px',
                    top: '16px',
                  }}
                >
                  <Image
                    src={post.image}
                    alt={`Template Img ${post.id}`}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Chuyên mục: */}
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '98px',
                    height: '51px',
                    left: '28px',
                    top: '302px',
                    fontWeight: 400,
                    fontSize: '14.7651px',
                    lineHeight: '19px',
                    color: '#760000',
                  }}
                >
                  Chuyên mục:
                </div>

                {/* Category background */}
                <div
                  className="absolute bg-[#E75739]"
                  style={{
                    width: '67px',
                    height: '20.62px',
                    left: '139px',
                    top: '317px',
                    borderRadius: '10.3077px',
                  }}
                />

                {/* Category Name */}
                <div
                  className={`flex items-center ${beVietnamPro.className}`}
                  style={{
                    height: '27px',
                    left: '153px',
                    top: '314px',
                    position: 'absolute',
                    fontWeight: 400,
                    fontSize: '7.8168px',
                    lineHeight: '10px',
                    color: post.categoryColor,
                  }}
                >
                  {post.category}
                </div>

                {/* Title */}
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className={`absolute flex items-center uppercase cursor-pointer ${beVietnamPro.className}`}
                  style={{
                    width: '370px',
                    height: '51px',
                    left: '28px',
                    top: '345px',
                    fontWeight: 900,
                    fontSize: '14.7651px',
                    lineHeight: '19px',
                    color: '#760000',
                  }}
                >
                  {post.title}
                </Link>

                {/* Description */}
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '370px',
                    height: '51px',
                    left: '28px',
                    top: '396px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  {post.description}
                </div>

                {/* Date */}
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '132px',
                    height: '51px',
                    left: '28px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Ngày đăng: {post.date}
                </div>

                {/* | */}
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '9px',
                    height: '51px',
                    left: '164px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  |
                </div>

                {/* Author */}
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '132px',
                    height: '51px',
                    left: '175px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Tác giả: {post.author}
                </div>

                {/* Read more */}
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className={`absolute flex items-center italic cursor-pointer underline ${beVietnamPro.className}`}
                  style={{
                    width: '67px',
                    height: '12px',
                    left: '29px',
                    top: '499px',
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Đọc thêm
                </Link>
              </div>
            );
          })}

          {/* Pagination Box */}
          <div
            className="absolute z-10"
            style={{
              width: '879px',
              height: '67px',
              left: '149px',
              top: `${paginationTop}px`,
            }}
          >
            <Image
              src={paginationBox}
              alt="Pagination Box"
              fill
              className="object-contain"
            />

            {/* Trang trước */}
            <div
              className={`absolute flex items-center justify-center ${beVietnamPro.className}`}
              style={{
                width: '110px',
                height: '100%',
                left: '30px',
              }}
            >
              {currentPage > 1 && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), page: (currentPage - 1).toString() }).toString()}`}
                  scroll={false}
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#760000',
                  }}
                >
                  &lt; Trang trước
                </Link>
              )}
            </div>

            {/* Pagination Numbers */}
            <div
              className={`absolute flex items-center justify-center gap-6 ${beVietnamPro.className}`}
              style={{
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                margin: 'auto',
                width: 'fit-content',
                height: '100%',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#760000',
              }}
            >
              {renderPaginationLinks()}
            </div>

            {/* Trang sau */}
            <div
              className={`absolute flex items-center justify-center ${beVietnamPro.className}`}
              style={{
                width: '110px',
                height: '100%',
                right: '30px',
              }}
            >
              {currentPage < totalPages && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), page: (currentPage + 1).toString() }).toString()}`}
                  scroll={false}
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#760000',
                  }}
                >
                  Trang sau &gt;
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
