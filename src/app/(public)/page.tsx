import type { Metadata } from 'next';
import Image from 'next/image';
import { Protest_Strike, Be_Vietnam_Pro } from 'next/font/google';
import backgroundSection1 from '@/assets/background/background-section-1.png';
import backgroundSection2 from '@/assets/background/background-section-2.png';
import box1 from '@/assets/boxes/box-1.png';
import box2 from '@/assets/boxes/box-2.png';
import box3 from '@/assets/boxes/box-3.png';
import box4 from '@/assets/boxes/box-4.png';
import textBox1 from '@/assets/boxes/text-box-1.png';
import textBox2 from '@/assets/boxes/text-box-2.png';
import textBox3 from '@/assets/boxes/text-box-3.png';
import bigBox from '@/assets/boxes/big-box.png';
import bannerImage from '@/assets/banner/banner.png';
import bigLine from '@/assets/line/big-line.png';
import smallLine from '@/assets/line/small-line.png';
import localFont from 'next/font/local';
import { Reveal } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description:
    'Dược Linh Các – nội dung sức khỏe, dược liệu, dịch vụ và bài đăng.',
};

// 2. Cấu hình font
const protestStrike = Protest_Strike({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const bigShouldersDisplay = localFont({
  src: [
    {
      path: '../../assets/fonts/BigShouldersDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/BigShouldersStencil_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-big-shoulders-display',
  display: 'swap',
});

// Load thêm font Stencil nếu cần hoặc dùng chung biến variable
const bigShouldersStencilDisplay = localFont({
  src: [
    {
      path: '../../assets/fonts/BigShouldersStencil_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-big-shoulders-stencil-display',
  display: 'swap',
});

export default async function HomePage() {
  return (
    <div className="">
      <section className="relative min-h-[1000px] w-full overflow-hidden bg-[#4D0000]/90 ">
        <Image
          src={backgroundSection1}
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
          <div className="relative w-full max-w-[1200px]">
            <Image
              src={bannerImage}
              alt="Dược Linh Các Banner"
              width={1200}
              height={600}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
            {/* DƯỢC LINH CÁC */}
            <h1
              className={`${protestStrike.className} absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center whitespace-nowrap animate-glow-text`}
              style={{
                top: '47.5%',
                fontSize: 'clamp(28px, 5vw, 90px)', // Tăng size chữ lên một chút
                lineHeight: '1',
                color: '#FFF017',
                textTransform: 'uppercase',
                WebkitTextStroke: '2px #ED333E',
              }}
            >
              DƯỢC LINH CÁC
            </h1>

            {/* VƯỢT TRÊN KỲ VỌNG CỦA BẠN */}
            <p
              className="absolute top-[65%] left-1/2 -translate-x-1/2 w-full text-center"
              style={{
                top: '54%',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(10px, 1vw, 16px)',
                color: '#FFF017',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              - VƯỢT TRÊN KỲ VỌNG CỦA BẠN -
            </p>
            {/* BIG LINE DECORATION */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: '85%',
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
            {/* 3 DÒNG TEXT MỚI */}
            <div
              className={`absolute top-[110%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-2 ${bigShouldersDisplay.className}`}
              style={{
                color: '#FDE3B1',
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '-0.03em',
              }}
            >
              {/* Dòng 1: y thuật nguyễn tộc đại tôn */}
              <p
                style={{
                  fontSize: 'clamp(20px, 3vw, 40px)',
                  lineHeight: '1.2',
                }}
              >
                y thuật nguyễn tộc đại tôn
              </p>

              {/* Dòng 2: vạn đại trường tồn danh kế thịnh */}
              <p
                style={{
                  fontSize: 'clamp(20px, 3vw, 40px)',
                  lineHeight: '1.2',
                }}
              >
                vạn đại trường tồn danh kế thịnh
              </p>

              {/* Dòng 3: Tông chủ đời thứ 8... */}
              <p
                style={{
                  fontSize: 'clamp(20px, 3vw, 40px)',
                  lineHeight: '1.2',
                }}
              >
                Tông chủ đời thứ 8 – Tiến sĩ - Lương y Hùng Phi Nguyễn
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[3000px] w-full overflow-hidden bg-[#4D0000]/90">
        <Image
          src={backgroundSection2}
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

        {/* CONTAINER CHO 3 BOX */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CỘT TRÁI: Box 1 nằm trên, Box 2 nằm dưới - Auto height */}
            <div className="flex flex-col gap-8">
              {/* Box 1 */}
              <div className="w-full group">
                <Image
                  src={box1}
                  alt="Box 1"
                  className="!w-full !h-auto block"
                  style={{ width: '100%', height: 'auto' }} // Ép buộc width 100%
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Box 2 */}
              <div className="w-full">
                <Image
                  src={box2}
                  alt="Box 2"
                  className="!w-full !h-auto block"
                  style={{ width: '100%', height: 'auto' }} // Ép buộc width 100%
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* CỘT PHẢI: Box 3 - Height bằng tổng cột trái */}
            <div className="relative w-full h-full min-h-[500px] lg:min-h-0">
              <Image
                src={box3}
                alt="Box 3"
                fill
                className="object-fill rounded-lg shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* TEXT OVERLAY 1: Intro */}
              <p
                className={`${bigShouldersDisplay.className} absolute top-[10%] left-1/2 -translate-x-1/2 text-center uppercase pointer-events-none z-10`}
                style={{
                  width: '337px',
                  maxWidth: '90%',
                  fontWeight: 600,
                  fontSize: '26.85px',
                  lineHeight: '32px',
                  letterSpacing: '-0.03em',
                  color: '#BA0B00',
                  fontFeatureSettings: "'salt' on, 'kern' off",
                }}
              >
                Vốn là một tiên sinh ẩn danh lấy pháp hiệu là Nguyên Quốc - mọi
                người thường gọi là Nguyên Quốc tiên sinh.
              </p>

              {/* TEXT OVERLAY 2: Header Title */}
              <div
                className={`${bigShouldersDisplay.className} absolute top-[35%] left-1/2 -translate-x-1/2 text-center z-10 flex flex-col items-center`}
                style={{
                  width: '586px',
                  maxWidth: '95%',
                  fontWeight: 600,
                  fontSize: '26.85px',
                  lineHeight: '32px',
                  letterSpacing: '0.01em',
                  fontVariant: 'all-small-caps',
                  color: '#BA0B00',
                }}
              >
                <span>Về Nguyên Quốc Tiên Sinh</span>
                <span>(Tiến Sĩ Nguyễn Phi Hùng)</span>
              </div>

              {/* TEXT OVERLAY 3: Body List */}
              <div
                className={`${beVietnamPro.className} absolute top-[45%] left-1/2 -translate-x-1/2 z-10 flex flex-col gap-3`}
                style={{
                  width: '355px',
                  maxWidth: '90%',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#690F0C',
                }}
              >
                <p>
                  - Không chỉ thừa hưởng Y Tông truyền thừa của gia tộc từ năm
                  Cảnh Thịnh thứ II (thế kỷ XVII).
                </p>
                <p>
                  - Từ 1988–1991: Thụ giáo Minh Sư – đệ tử Đại Sư Thi Kim Mặc
                  (TQ).
                </p>
                <p>- Tổng hợp tinh hoa – huyền cơ – y thuật YHCT VN & TQ.</p>
                <p>
                  - Từ 1991 đến nay: Nguyên Quốc Tiên Sinh đã qua các lớp đào
                  tạo YHCT chính quy trong & ngoài nước.
                </p>
                <p>
                  - Từng công tác trong Quân đội tại Đông Bắc & Tây Bắc. Với bản
                  tính khiêm hạ, ý chí ham học hỏi nên đã thụ học được nhiều bài
                  thuốc quý dân gian của bà con dân tộc Dao, Mường, Tày, Mông;
                  thông thạo hàng trăm vị thuốc Nam của rừng nguyên sinh khu vực
                  Đông Bắc và Tây Bắc Việt Nam.
                </p>
                <p>
                  - Theo đó những bài thuốc quý hiếm ấy đã chữa lành nhiều bệnh
                  hiểm nghèo, nhiều ca bệnh khó mà các bệnh nhân đã từng chữa
                  trị trong và ngoài nước không khỏi.
                </p>
              </div>
            </div>
            {/* BOX 4: Nằm dưới Box 2 và Box 3, full width */}
            <div className="col-span-1 lg:col-span-2 w-full pt-8 flex flex-col items-center">
              {/* Box 4 Image & Overlay Wrapper */}
              <div className="relative w-full">
                <Image
                  src={box4}
                  alt="Box 4"
                  className="!w-full !h-auto rounded-lg shadow-xl block"
                  style={{ width: '100%', height: 'auto' }}
                  sizes="100vw"
                />

                {/* Box 4 Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 pt-4">
                  {/* Title */}
                  <Reveal>
                    <h3
                      className={`${bigShouldersDisplay.className} text-center uppercase`}
                      style={{
                        width: '386px',
                        maxWidth: '100%',
                        fontWeight: 600,
                        fontSize: '40.6px',
                        lineHeight: '49px',
                        letterSpacing: '-0.03em',
                        color: '#B90407',
                        marginBottom: '64px',
                      }}
                    >
                      Phương châm của dược linh các
                    </h3>
                  </Reveal>

                  {/* Slogan */}
                  <Reveal delay={200}>
                    <p
                      className={`${bigShouldersDisplay.className} text-center uppercase`}
                      style={{
                        width: '380px',
                        maxWidth: '100%',
                        fontWeight: 600,
                        fontSize: '26.85px',
                        lineHeight: '32px',
                        letterSpacing: '-0.03em',
                        color: '#B90407',
                        fontFeatureSettings: "'salt' on, 'kern' off",
                      }}
                    >
                      “Thuận Theo Tự Nhiên – Thân Khỏe Tâm An
                      <br className="hidden md:block" />
                      Nghiệp Chướng Tiêu Tan – Chân Mệnh Vững Bền"
                    </p>
                  </Reveal>
                </div>
              </div>

              {/* Decoration Line below Box 4 */}
              <Reveal className="mt-16 w-full max-w-[700px] flex items-center justify-center">
                <Image
                  src={bigLine}
                  alt="Decoration Line"
                  className="object-contain"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Reveal>

              {/* New Footer Text */}
              <Reveal delay={200}>
                <h3
                  className={`${bigShouldersDisplay.className} text-center uppercase mt-12 block`}
                  style={{
                    width: '666px',
                    maxWidth: '100%',
                    fontWeight: 600,
                    fontSize: '44.6px',
                    lineHeight: '53px',
                    letterSpacing: '-0.03em',
                    color: '#FFE7B6',
                    fontFeatureSettings: "'salt' on, 'kern' off",
                  }}
                >
                  "Chúc mừng bạn hữu duyên biết đến DƯỢC LINH CÁC
                  <br /> Tại sao vậy?"
                </h3>
              </Reveal>

              {/* SECTION: NĂNG LỰC CHẨN ĐOÁN */}
              <Reveal
                width="w-full"
                className="flex flex-col items-center mt-12 relative max-w-[800px]"
                delay={400}
              >
                {/* Header with Small Line Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-[86px] h-[86px] flex-shrink-0">
                    <Image
                      src={smallLine}
                      alt="Small Line"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4
                    className={`${bigShouldersStencilDisplay.className} uppercase`}
                    style={{
                      width: '492px',
                      maxWidth: '100%',
                      fontWeight: 400,
                      fontSize: '31.96px',
                      lineHeight: '38px',
                      letterSpacing: '0.01em',
                      color: '#FFE7B6',
                    }}
                  >
                    NĂNG LỰC CHẨN ĐOÁN CỦA DƯỢC LINH CÁC
                  </h4>
                </div>

                {/* Content Body */}
                <div
                  className={`${beVietnamPro.className} pl-[100px]`} // Padding left để thẳng hàng với text title (bỏ qua icon)
                  style={{
                    width: '737px',
                    maxWidth: '95%',
                    fontWeight: 400,
                    fontSize: '13.5px',
                    lineHeight: '17px',
                    color: '#FFE7B6',
                  }}
                >
                  <p className="mb-2">
                    Nhiều bệnh nhân từng khám ở các bệnh viện và các cơ sở Khám
                    Chữa bệnh nhưng không tìm ra nguyên nhân.
                  </p>
                  <p>
                    Nhưng tại Dược Linh Các:
                    <br />
                    - Nguyên Quốc tiên sinh & các đội ngũ Y – Bác sỹ chẩn đoán
                    đúng gốc bệnh.
                    <br />
                    - Luận giải chính xác triệu chứng mà bệnh nhân đang mắc phải
                    nhưng không khai bệnh.
                    <br />- Đặc biệt các pháp điều trị và phương thuốc Nam Dược
                    của Dược Linh Các đã chữa khỏi bệnh; giải quyết các vấn đề
                    “vượt trên kỳ vọng”của bệnh nhân
                  </p>
                </div>
              </Reveal>

              {/* 3 TEXT BOXES (1, 2, 3) */}
              <div className="flex flex-col gap-10 mt-12 w-full max-w-[1000px] items-center pb-20">
                {/* Box 1 */}
                <Reveal width="w-full" className="relative" dir="left">
                  <Image
                    src={textBox1}
                    alt="Text Box 1"
                    className="w-full h-auto object-contain"
                  />
                  <p
                    className={`${beVietnamPro.className} absolute top-[8%] left-0 w-full flex items-center justify-center text-center`}
                    style={{
                      fontWeight: 700,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFF017',
                    }}
                  >
                    Giá trị cốt lõi của DLC – Bí truyền Nam Dược
                  </p>
                  <div
                    className={`${beVietnamPro.className} absolute top-[30%] left-[58%] -translate-x-1/2 w-[80%] flex flex-col gap-2`}
                    style={{
                      fontWeight: 400,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFE7B6',
                      textAlign: 'left',
                    }}
                  >
                    <p>
                      - Các vị thuốc gia truyền là những vị thuốc quý từ rừng
                      nguyên sinh VN, nhiều vị thuốc bộ dây có tuổi thọ từ 60–80
                      năm chỉ có ở rừng nguyên sinh, nhiều bộ rễ, củ được tìm
                      kiếm ở các vị trí cheo leo, khó khai thác nhưng công dụng
                      bí truyền vô cùng vi diệu.
                    </p>
                    <p>
                      - Thuốc nam được bào chế nguyên chất, không xao tẩm hương
                      liệu, không có chất bảo quản.
                    </p>
                    <p>
                      - Khi bào chế còn được lựa chọn điểm Phơi–Sấy trên nền Đất
                      Cát Mạch để hấp thụ Thiên Khí và Địa Tinh của Trời Đất –
                      theo đó dược tính được phát huy công hiệu mà khoa học
                      không giải thích được nên gọi đó là Huyền Cơ.
                    </p>
                    <p>
                      - Thực tiễn cho thấy vẫn những vị thuốc đó không may phơi
                      trên nền đất Địa Tinh là Hung Mạch (đặc bệt xấu nếu hung
                      mạch đó thuộc mạch Thọ Tử Kim Lâu hoặc mạch Vãng Lai Tâm)
                      → công dụng giảm đi rất nhiều.
                    </p>
                    <p>
                      - Nguồn nguyên liệu của DLC phát huy được tất cả những thế
                      mạnh Huyền Cơ và khắc phục những điểm yếu nêu trên.
                    </p>
                  </div>
                </Reveal>

                {/* Box 2 */}
                <Reveal width="w-full" className="relative" dir="right">
                  <Image
                    src={textBox2}
                    alt="Text Box 2"
                    className="w-full h-auto object-contain"
                  />
                  <p
                    className={`${beVietnamPro.className} absolute top-[11%] left-10 w-full flex items-center justify-center text-center`}
                    style={{
                      fontWeight: 700,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFF017',
                    }}
                  >
                    Tại sao thuốc Nam tốt, quý và hiệu quả hơn thuốc Bắc?
                  </p>
                  <div
                    className={`${beVietnamPro.className} absolute top-[45%] left-[58%] -translate-x-1/2 w-[80%] flex flex-col gap-2`}
                    style={{
                      fontWeight: 400,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFE7B6',
                      textAlign: 'left',
                    }}
                  >
                    <p>
                      - Thuốc Bắc ở TQ là trồng ở các vùng nguyên liệu có thời
                      hạn tối đa 5 năm là khai thác, do TQ có chính sách bảo tồn
                      rừng nguyên sinh, không cho người dân tiếp cận, khai thác
                      dược liệu.
                    </p>
                    <p>
                      - Ngoài ra để bảo quản và vẫn chuyển xuất khẩu thuốc Bắc
                      thường được xông chất chống mốc để vận chuyển .Nên phần
                      nào ảnh hưởng đến dược tính và sự phụ thuộc vào nguồn
                      nguyên liệu của nhiều Y Gia.
                    </p>
                  </div>
                </Reveal>

                {/* Box 3 */}
                <Reveal width="w-full" className="relative" dir="left">
                  <Image
                    src={textBox3}
                    alt="Text Box 3"
                    className="w-full h-auto object-contain"
                  />
                  <p
                    className={`${beVietnamPro.className} absolute top-[11%] left-10 w-full flex items-center justify-center text-center`}
                    style={{
                      fontWeight: 700,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFF017',
                    }}
                  >
                    Năng lực tự chữa bệnh của con người là vô cùng vi diệu nên
                    dù <br />
                    thuốc quý đến đâu bạn cũng nên hợp tác với DLC để chỉnh tâm
                    - sửa tính.
                  </p>
                  <div
                    className={`${beVietnamPro.className} absolute top-[60%] left-[58%] -translate-x-1/2 w-[80%] flex flex-col gap-2`}
                    style={{
                      fontWeight: 400,
                      fontSize: '16.9px',
                      lineHeight: '21px',
                      color: '#FFE7B6',
                      textAlign: 'left',
                    }}
                  >
                    <p>
                      - Năng lực tự chữa bệnh của con người là vô cùng vi diệu
                      nên dù thuốc quý đến đâu bạn cũng nên hợp tác vs DLC để
                      chỉnh tâm-sửa tính.
                    </p>
                  </div>
                </Reveal>

                <div className="flex flex-col w-full items-center gap-4">
                  {/* Decoration Line below Box 3 */}
                  <Reveal
                    width="w-full"
                    className="max-w-[700px] flex items-center justify-center"
                  >
                    <Image
                      src={bigLine}
                      alt="Decoration Line"
                      className="object-contain"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </Reveal>

                  {/* Text 1: ĐỂ HỘI ĐỦ DUYÊN... */}
                  <Reveal delay={200}>
                    <h3
                      className={`${bigShouldersDisplay.className} text-center uppercase`}
                      style={{
                        width: '782px',
                        maxWidth: '100%',
                        fontWeight: 600,
                        fontSize: '44.6px',
                        lineHeight: '53px',
                        letterSpacing: '-0.03em',
                        color: '#FFE7B6',
                        fontFeatureSettings: "'salt' on, 'kern' off",
                      }}
                    >
                      ĐỂ HỘI ĐỦ DUYÊN ĐẾN DƯỢC LINH CÁC BẠN CẦN BIẾT THÊM
                    </h3>
                  </Reveal>

                  {/* Text 2: Thông điệp di huấn... */}
                  <Reveal delay={400}>
                    <h4
                      className={`${bigShouldersStencilDisplay.className} text-center`}
                      style={{
                        width: '492px',
                        maxWidth: '100%',
                        fontWeight: 400,
                        fontSize: '31.96px',
                        lineHeight: '38px',
                        letterSpacing: '0.01em',
                        color: '#FFE7B6',
                      }}
                    >
                      Thông điệp di huấn của Tông Môn:
                    </h4>
                  </Reveal>

                  {/* Big Box Image */}
                  <Reveal
                    width="w-full"
                    className="relative max-w-[800px] flex justify-center"
                    delay={600}
                  >
                    <Image
                      src={bigBox}
                      alt="Big Box"
                      className="w-full h-auto object-contain"
                    />
                    <p
                      className={`${bigShouldersDisplay.className} absolute top-[15%] left-1/2 -translate-x-1/2 text-center uppercase`}
                      style={{
                        width: '368px',
                        maxWidth: '100%',
                        fontWeight: 600,
                        fontSize: '27px',
                        lineHeight: '32px',
                        letterSpacing: '-0.03em',
                        color: '#FFF017',
                        fontFeatureSettings: "'salt' on, 'kern' off",
                      }}
                    >
                      THIÊN VŨ TUY KHOAN BẤT NHUẬN VÔ CĂN CHI THẢO THẦN Y QUẢNG
                      ĐẠI NAN ĐỘ BẤT TÍN CHI NHÂN
                    </p>
                    <p
                      className={`${bigShouldersDisplay.className} absolute top-[50%] left-1/2 -translate-x-1/2 text-center uppercase pt-6`}
                      style={{
                        width: '630px',
                        maxWidth: '100%',
                        fontWeight: 600,
                        fontSize: '27px',
                        lineHeight: '32px',
                        letterSpacing: '-0.03em',
                        color: '#FFF017',
                        fontFeatureSettings: "'salt' on, 'kern' off",
                      }}
                    >
                      Trời có cho mưa thuận gió hoà cũng không làm tươi nhuận
                      những cây đã hỏng gốc rễ.
                      <br />
                      Tài giỏi độ lượng như Thần Y cũng không chữa khỏi cho
                      người thiếu lòng tin – tâm còn bất tín.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
