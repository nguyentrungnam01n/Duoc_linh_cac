import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import bannerImage from '@/assets/banner/banner-dich-vu.png';
import backgroundImage from '@/assets/background/background-dichvu.png';
import titleBanner from '@/assets/banner/title-banner.png';
import titlePattern from '@/assets/patterns/title-pattern.png';
import dvuPattern1 from '@/assets/patterns/dvu-pattern-1.png';
import dvuPattern2 from '@/assets/patterns/dvu-pattern-2.png';
import dvuPattern3 from '@/assets/patterns/dvu-pattern-3.png';
import dvuPattern4 from '@/assets/patterns/dvu-pattern-4.png';
import localFont from 'next/font/local';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dịch vụ',
  description: 'Danh sách nội dung về dịch vụ.',
};

// 2. Cấu hình font
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
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

export default function ServiceListPage() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner dịch vụ"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative w-full min-h-screen md:min-h-[3550px] overflow-hidden bg-[#4D0000]/90 pb-20 md:pb-0">
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
        <div className="relative z-10 flex flex-col items-center h-full w-full px-4 md:px-0 gap-12 md:gap-0 mt-8 md:mt-0">
          {/* Banner Title */}
          <div className="relative md:absolute flex items-center justify-center p-8 md:ml-4 w-full md:w-[568.61px] aspect-[568/320] md:top-[45px]">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4 font-semibold text-[#FDE3B1] leading-[1.2] tracking-[-0.03em]`}
            >
              <span className="text-[20px] md:text-[32.73px]">
                SẢN PHẨM - DỊCH VỤ
              </span>
            </h1>
          </div>

          {/* Item 1: Y TRÀ DƯỠNG SINH */}
          <div className="w-full flex flex-col items-center md:block">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[335px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.5px]">
                  Y TRÀ DƯỠNG SINH
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:block w-full items-center gap-6 md:gap-0">
              {/* Image */}
              <div className="relative md:absolute md:top-[540px] w-full max-w-[443px] aspect-[443/571] md:left-1/2 md:-translate-x-[519px]">
                <Image
                  src={dvuPattern1}
                  alt="Dvu Pattern 1"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div
                className={`relative md:absolute z-0 ${beVietnamPro.className} md:top-[660px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:translate-x-[16px] text-[#FFE7B6] flex items-center text-justify text-[12px] md:text-[16.68px] leading-[1.5] md:leading-[21px] font-normal`}
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.&quot;
                  <br />
                  <br />
                  Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                  written by Cicero in 45 BC
                  <br />
                  &quot;Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qu
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: TƯ VẤN THẦY TẠI NHÀ... */}
          <div className="w-full flex flex-col items-center md:block">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[1120px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.5px]">
                  TƯ VẤN THẦY TẠI NHÀ - THUỐC TẠI VƯỜN
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:block w-full items-center gap-6 md:gap-0">
              {/* Image (Mobile Order 2) */}
              <div className="relative md:absolute md:top-[1365px] w-full max-w-[443px] aspect-[443/481] md:left-1/2 md:translate-x-[74px] md:order-none">
                <Image
                  src={dvuPattern2}
                  alt="Dvu Pattern 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text (Mobile Order 3) */}
              <div
                className={`relative md:absolute z-0 ${beVietnamPro.className} md:top-[1440px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:-translate-x-[509px] text-[#FFE7B6] flex items-center text-justify text-[12px] md:text-[16.68px] leading-[1.5] md:leading-[21px] font-normal md:order-none`}
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.&quot;
                  <br />
                  <br />
                  Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                  written by Cicero in 45 BC
                  <br />
                  &quot;Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qu
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: TƯ VẤN PHONG THỦY */}
          <div className="w-full flex flex-col items-center md:block">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[1888px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.5px]">
                  TƯ VẤN PHONG THỦY CẢI BỆNH
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:block w-full items-center gap-6 md:gap-0">
              {/* Image */}
              <div className="relative md:absolute md:top-[2092px] w-full max-w-[443px] aspect-[443/566] md:left-1/2 md:-translate-x-[516px]">
                <Image
                  src={dvuPattern3}
                  alt="Dvu Pattern 3"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div
                className={`relative md:absolute z-0 ${beVietnamPro.className} md:top-[2213px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:translate-x-[16px] text-[#FFE7B6] flex items-center text-justify text-[12px] md:text-[16.68px] leading-[1.5] md:leading-[21px] font-normal`}
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.&quot;
                  <br />
                  <br />
                  Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                  written by Cicero in 45 BC
                  <br />
                  &quot;Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qu
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: PHƯƠNG PHÁP Y HỌC CỔ TRUYỀN */}
          <div className="w-full flex flex-col items-center md:block">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[2663px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.5px]">
                  PHƯƠNG PHÁP Y HỌC CỔ TRUYỀN
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:block w-full items-center gap-6 md:gap-0">
              {/* Image (Mobile Order 2) */}
              <div className="relative md:absolute md:top-[2869px] w-full max-w-[443px] aspect-[443/481] md:left-1/2 md:translate-x-[74px] md:order-none">
                <Image
                  src={dvuPattern4}
                  alt="Dvu Pattern 4"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text (Mobile Order 3) */}
              <div
                className={`relative md:absolute z-0 ${beVietnamPro.className} md:top-[2954px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:-translate-x-[509px] text-[#FFE7B6] flex items-center text-justify text-[12px] md:text-[16.68px] leading-[1.5] md:leading-[21px] font-normal md:order-none`}
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.&quot;
                  <br />
                  <br />
                  Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                  written by Cicero in 45 BC
                  <br />
                  &quot;Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
