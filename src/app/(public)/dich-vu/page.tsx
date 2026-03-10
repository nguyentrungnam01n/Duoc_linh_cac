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
    <div className="">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner dịch vụ"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative min-h-[3550px] w-full overflow-hidden bg-[#4D0000]/90">
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
              SẢN PHẨM - DỊCH VỤ
            </h1>
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '335px',
              width: '572px',
              height: '193px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={titlePattern}
              alt="Title Pattern"
              fill
              className="object-contain -z-10"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                fontSize: '40.5863px',
                fontWeight: 600,
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              Y TRÀ DƯỠNG SINH
            </h2>
          </div>

          <div
            className="absolute z-0"
            style={{
              top: '540px',
              width: '443px',
              height: '571px',
              left: '50%',
              transform: 'translateX(-519px)',
            }}
          >
            <Image
              src={dvuPattern1}
              alt="Dvu Pattern 1"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '660px',
              width: '539px',
              height: '357px',
              left: '50%',
              transform: 'translateX(16px)',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              color: '#FFE7B6',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </div>
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '1120px',
              width: '572px',
              height: '193px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={titlePattern}
              alt="Title Pattern"
              fill
              className="object-contain -z-10"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                fontSize: '40.5863px',
                fontWeight: 600,
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              TƯ VẤN THẦY TẠI NHÀ - THUỐC TẠI VƯỜN
            </h2>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '1440px',
              width: '539px',
              height: '357px',
              left: '50%',
              transform: 'translateX(-509px)',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              color: '#FFE7B6',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </div>
          </div>

          <div
            className="absolute z-0"
            style={{
              top: '1365px',
              width: '443px',
              height: '481px',
              left: '50%',
              transform: 'translateX(74px)',
            }}
          >
            <Image
              src={dvuPattern2}
              alt="Dvu Pattern 2"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '1888px',
              width: '572px',
              height: '193px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={titlePattern}
              alt="Title Pattern"
              fill
              className="object-contain -z-10"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                fontSize: '40.5863px',
                fontWeight: 600,
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              TƯ VẤN PHONG THỦY CẢI BỆNH
            </h2>
          </div>

          <div
            className="absolute z-0"
            style={{
              top: '2092px',
              width: '443px',
              height: '566px',
              left: '50%',
              transform: 'translateX(-516px)',
            }}
          >
            <Image
              src={dvuPattern3}
              alt="Dvu Pattern 3"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '2213px',
              width: '539px',
              height: '357px',
              left: '50%',
              transform: 'translateX(16px)',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              color: '#FFE7B6',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </div>
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '2663px',
              width: '572px',
              height: '193px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={titlePattern}
              alt="Title Pattern"
              fill
              className="object-contain -z-10"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                fontSize: '40.5863px',
                fontWeight: 600,
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              PHƯƠNG PHÁP Y HỌC CỔ TRUYỀN
            </h2>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '2954px',
              width: '539px',
              height: '357px',
              left: '50%',
              transform: 'translateX(-509px)',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16.6802px',
              lineHeight: '21px',
              color: '#FFE7B6',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </div>
          </div>

          <div
            className="absolute z-0"
            style={{
              top: '2869px',
              width: '443px',
              height: '481px',
              left: '50%',
              transform: 'translateX(74px)',
            }}
          >
            <Image
              src={dvuPattern4}
              alt="Dvu Pattern 4"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
