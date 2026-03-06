import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import localFont from 'next/font/local';
import bannerImage from '@/assets/banner/banner-linh-duoc.png';
import backgroundImage from '@/assets/background/background-linhduoc.png';
import titleBanner from '@/assets/banner/title-banner.png';
import titlePattern from '@/assets/patterns/title-pattern.png';
import thuocNamPattern from '@/assets/patterns/thuoc-nam-pattern.png';
import thuocBacPattern from '@/assets/patterns/thuoc-bac-pattern.png';
import linhDuocBox from '@/assets/boxes/linh-duoc-box.png';
import bigLine from '@/assets/line/big-line.png';
import dvuPattern1 from '@/assets/patterns/dvu-pattern-1.png';
import dvuPattern2 from '@/assets/patterns/dvu-pattern-2.png';
import dvuPattern4 from '@/assets/patterns/dvu-pattern-4.png';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Linh dược',
  description: 'Danh sách nội dung về linh dược.',
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

export default function HerbListPage() {
  return (
    <div className="">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner linh dược"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative min-h-[7150px] w-full overflow-hidden bg-[#4D0000]">
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
              LINH DƯỢC
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
              NGUYÊN TẮC DỤNG DƯỢC CẦN BIẾT
            </h2>
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '576px',
              width: '1167px',
              height: '1155px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={linhDuocBox}
              alt="Linh Duoc Box"
              fill
              className="object-contain"
              priority
            />

            {/* Block 1 */}
            <h3
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                position: 'absolute',
                width: '624px',
                height: '73px',
                left: '265px',
                top: '95px',
                fontSize: '60.7788px',
                fontWeight: 600,
                lineHeight: '73px',
                letterSpacing: '-0.03em',
                color: '#BA0B00',
              }}
            >
              tại sao phải có kiến thức về thuốc?
            </h3>
            <p
              className={beVietnamPro.className}
              style={{
                position: 'absolute',
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '221px',
                fontSize: '16.6802px',
                fontWeight: 400,
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                color: '#690F0C',
              }}
            >
              Lorsem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qu
            </p>

            {/* Block 2 */}
            <h3
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                position: 'absolute',
                width: '781px',
                height: '73px',
                left: '187px',
                top: '425px',
                fontSize: '60.7788px',
                fontWeight: 600,
                lineHeight: '73px',
                letterSpacing: '-0.03em',
                color: '#BA0B00',
              }}
            >
              TẠI SAO PHẢI PHỐI THUỐC KHÔNG DÙNG ĐƠN LẺ?
            </h3>
            <p
              className={beVietnamPro.className}
              style={{
                position: 'absolute',
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '551px',
                fontSize: '16.6802px',
                fontWeight: 400,
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                color: '#690F0C',
              }}
            >
              Lorsem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qu
            </p>

            {/* Block 3 */}
            <h3
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                position: 'absolute',
                width: '624px',
                height: '73px',
                left: '265px',
                top: '745px',
                fontSize: '60.7788px',
                fontWeight: 600,
                lineHeight: '73px',
                letterSpacing: '-0.03em',
                color: '#BA0B00',
              }}
            >
              tại sao phải có kiến thức về thuốc?
            </h3>
            <p
              className={beVietnamPro.className}
              style={{
                position: 'absolute',
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '891px',
                fontSize: '16.6802px',
                fontWeight: 400,
                lineHeight: '21px',
                display: 'flex',
                alignItems: 'center',
                color: '#690F0C',
              }}
            >
              Lorsem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qu
            </p>
          </div>

          {/* BIG LINE DECORATION */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '1791px',
              width: '100%',
              maxWidth: '700px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={bigLine}
              alt="Decoration Line"
              className="object-contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          <div
            className="absolute z-10 flex items-center justify-center p-8 ml-4"
            style={{ top: '1891px', width: '568.61px', height: '319.84px' }}
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
              TẠI SAO NAM DƯỢC LÀ LINH DƯỢC?
            </h1>
          </div>

          {/* THUOC NAM PATTERN + CONTENT */}
          <div
            className="absolute z-0"
            style={{
              top: '2131px',
              width: '537.25px',
              height: '760px',
              left: '50%',
              transform: 'translateX(-520px)',
            }}
          >
            <Image
              src={thuocNamPattern}
              alt="Thuoc Nam Pattern"
              fill
              className="object-contain"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                position: 'absolute',
                width: '191px',
                height: '70px',
                left: '173px',
                top: '95px',
                fontSize: '58.7272px',
                fontWeight: 600,
                lineHeight: '70px',
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              THUỐC NAM
            </h2>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '2361px',
              width: '452px',
              height: '300px',
              left: '50%',
              transform: 'translateX(85px)',
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

          {/* THUOC BAC PATTERN + CONTENT */}
          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '2983px',
              width: '452px',
              height: '300px',
              left: '50%',
              transform: 'translateX(-477px)',
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
              top: '2753px',
              width: '537.25px',
              height: '760px',
              left: '50%',
              transform: 'translateX(0px)',
            }}
          >
            <Image
              src={thuocBacPattern}
              alt="Thuoc Bac Pattern"
              fill
              className="object-contain"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase`}
              style={{
                position: 'absolute',
                width: '175px',
                height: '70px',
                left: '181px',
                top: '96px',
                fontSize: '58.7272px',
                fontWeight: 600,
                lineHeight: '70px',
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              THUỐC BẮC
            </h2>
          </div>

          {/* BIG LINE DECORATION */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '3443px',
              width: '100%',
              maxWidth: '700px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={bigLine}
              alt="Decoration Line"
              className="object-contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          <div
            className="absolute z-10 flex items-center justify-center p-8 ml-4"
            style={{ top: '3583px', width: '568.61px', height: '319.84px' }}
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
              HUYỀN CƠ TẠO NÊN LINH DƯỢC
            </h1>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '3946px',
              width: '1032px',
              height: '212px',
              left: '50%',
              transform: 'translateX(-516px)',
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
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '4214px',
              width: '1045px',
              height: '212px',
              left: '50%',
              transform: 'translateX(-519.5px)',
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
            className="absolute z-10 flex items-center justify-center p-8 ml-4"
            style={{ top: '4484px', width: '568.61px', height: '319.84px' }}
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
              CÁC VỊ THUỐC DÂN TỘC
            </h1>
          </div>

          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: '4820px',
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
              THUỐC 1
            </h2>
          </div>

          <div
            className="absolute z-0"
            style={{
              top: '4990px',
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
              top: '5100px',
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
              top: '5570px',
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
              THUỐC 2
            </h2>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '5870px',
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
              top: '5790px',
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
              top: '6330px',
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
              THUỐC 3
            </h2>
          </div>

          <div
            className={`absolute z-0 ${beVietnamPro.className}`}
            style={{
              top: '6630px',
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
              top: '6560px',
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
