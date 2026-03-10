import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import backgroundImage from '@/assets/background/background-chungbenh.png';
import bannerImage from '@/assets/banner/banner-chung-benh.png';
import titleBanner from '@/assets/banner/title-banner.png';
import chungBenhBox from '@/assets/boxes/chung-benh-box.png';
import redBox from '@/assets/boxes/red-box.png';
import cranePattern from '@/assets/patterns/crane-pattern.png';
import Image from 'next/image';
import { Reveal } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Chứng bệnh',
  description: 'Danh sách nội dung về chứng bệnh.',
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

export default async function DiseaseListPage() {
  return (
    <div className="">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner chứng bệnh"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative min-h-[2500px] w-full overflow-hidden bg-[#760000]/90">
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
            className="absolute z-10 flex items-center justify-center p-8 ml-10"
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
              CÁC CHỨNG TRẠNG BỆNH NHÂN THƯỜNG GẶP
            </h1>
          </div>
          <div className="mt-[380px] z-10 relative">
            <Image
              src={chungBenhBox}
              alt="Chứng bệnh box"
              className="object-contain"
              width={1167}
              height={1180}
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} absolute text-center uppercase`}
              style={{
                width: '711px',
                height: '73px',
                left: '222px',
                top: '95px',
                fontWeight: 600,
                fontSize: '60.7788px',
                lineHeight: '73px',
                letterSpacing: '-0.03em',
                color: '#BA0B00',
              }}
            >
              HỤT HƠI, THỞ NGẮN, VẬN ĐỘNG NHANH MỆT
            </h2>
            <div
              className={`${beVietnamPro.className} absolute flex items-center`}
              style={{
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '221px',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.6802px',
                lineHeight: '21px',
                color: '#690F0C',
              }}
            >
              Chứng hụt hơi, thở ngắn, vận động nhanh mệt, có thể kèm theo bụng
              hay chướng đầy, mắc tiểu phải đi ngay không nhịn được lâu. Hoặc có
              thể kèm theo chứng dễ ho, ngứa họng khi trời mưa ẩm hoặc thời tiết
              thay đổi; thỉnh thoảng trí nhớ hay quên cục bộ. Bạn có bao giờ bị
              như vậy không? Khi bị như vậy bạn thường nghĩ đến mình bị bệnh gì?
              Nguyên nhân tại sao? <br />
              Phần lớn bệnh nhân khi thấy hụt hơi, thở ngắn, nhanh mệt thường
              hay nghĩ đến Phổi và tìm bệnh ở Phổi và đường hô hấp trên. Nếu kèm
              theo thỉnh thoảng hay quên cục bộ sẽ hay cho rằng ảnh hưởng hậu
              COVID.
            </div>
            <div
              className={`${beVietnamPro.className} absolute flex items-center`}
              style={{
                width: '1137px',
                height: '25px',
                left: '77px',
                top: '357px',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '25px',
                color: '#771010',
              }}
            >
              Nếu bạn phán đoán như vậy thì không sai nhưng chưa ĐÚNG, ĐỦ
            </div>
            <div
              className={`${beVietnamPro.className} absolute flex items-center`}
              style={{
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '382px',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.6802px',
                lineHeight: '21px',
                color: '#690F0C',
              }}
            >
              Chẩn đoán theo chuyên môn, chứng bệnh gặp phải ở phổi và hầu họng,
              đường hô hấp trên; y học cổ truyền gọi đây là chứng “NGỰC ĐẦY KHÍ
              ĐOẢN”. Để hiểu rõ nguyên nhân cần kiểm tra tổng quát thông qua bắt
              mạch, quan sát và trò chuyện, trao đổi với bệnh nhân “Tứ Chuẩn”,
              thậm chí kiểm tra một số sinh nguyệt và một số điểm phản ứng trên
              cơ thể (Án Chẩn). Thông thường có một số căn nguyên sau đây:
            </div>
            <h3
              className={`${bigShouldersDisplay.className} absolute text-center uppercase`}
              style={{
                width: '263px',
                height: '49px',
                left: '449px',
                top: '562px',
                fontWeight: 600,
                fontSize: '40.5863px',
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              DO THẬN HƯ KHÍ NGHỊCH
            </h3>
            <div
              className={`${beVietnamPro.className} absolute flex items-center`}
              style={{
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '688px',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.6802px',
                lineHeight: '21px',
                color: '#690F0C',
              }}
            >
              Tức là thận dương nạp khí kém; lượng khí do phổi hô hấp không được
              thận dương nạp đủ đầy dẫn đến dư, ứ khí ở phế (phổi). Lượng khí
              này tuy là thanh khí nhưng khi bị dư đầy ở phế sẽ làm cho lượng
              khí mới hít vào không có chỗ chứa, do đó có cảm giác hơi thở ngắn,
              ngực đầy tức gọi là chứng “NGỰC ĐẦY KHÍ ĐOẢN”. Lượng khí thừa ử
              phế như lớp sương mù, “quá mù sẽ ra mưa”, khí ứ dễ hóa dịch gây ho
              ở hầu họng và có thể gây sổ mũi. Hoặc khi ăn đồ có canh nóng như
              phở, hủ tiếu, canh nóng… dễ chảy nước mũi.
            </div>
            <h3
              className={`${bigShouldersDisplay.className} absolute text-center uppercase`}
              style={{
                width: '437px',
                height: '49px',
                left: '365px',
                top: '868px',
                fontWeight: 600,
                fontSize: '40.5863px',
                lineHeight: '49px',
                letterSpacing: '-0.03em',
                color: '#B90407',
              }}
            >
              CƠ THỂ SẼ TỰ CHỮA BỆNH NHƯ THẾ NÀO?
            </h3>
            <div
              className={`${beVietnamPro.className} absolute flex items-center`}
              style={{
                width: '1029px',
                height: '120px',
                left: '77px',
                top: '952px',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.6802px',
                lineHeight: '21px',
                color: '#690F0C',
              }}
            >
              Thường cơ thể con người rất vi diệu khi gặp những biến động bất
              thường nó sẽ tự điều chỉnh tạo ra các phản ứng để “sữa chữa” ví
              dụ: thường sẽ hay ngáp , hoặc vương vai thở dài đây là phản ứng tự
              nhiên để tống tháo khi thừa trong lòng ngực ra.
            </div>
          </div>
          <div
            className="absolute z-10"
            style={{
              top: '1436px',
              width: '1200px',
              height: '675px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Reveal width="w-full" className="h-full">
              <Image
                src={cranePattern}
                alt="Crane Pattern"
                fill
                className="object-contain"
              />
            </Reveal>
          </div>

          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              top: '2000px',
              width: '757.05px',
              height: '382.31px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={redBox}
              alt="Red Box"
              fill
              className="object-contain -z-10"
            />
            <Reveal>
              <div
                className={`${bigShouldersDisplay.className} text-center uppercase`}
                style={{
                  width: '630px',
                  fontSize: '27px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  letterSpacing: '-0.03em',
                  color: '#FFF017',
                  fontFeatureSettings: "'salt' on, 'kern' off",
                }}
              >
                Pháp trị của DLC tùy theo từng bệnh nhân với các chứng trạng kèm
                theo khác nhau để lập pháp trị. Thường chứng trạng trên nếu ở
                thể nhẹ chỉ cần lập phác đồ châm cứu hoặc bấm huyệt phục hồi
                công năng nạp khí của thận dương là phế thông họng thoáng.
                <br />
                <br />
                Trường hợp bệnh nặng hơn hay kèm theo các chứng bụng chướng đầy,
                mắc tiểu không nhịn lâu do tùy khí hạ hãm, khí chèn bàng quan
                gây áp lực mắc tiểu không nhịn lâu thì có thể phải lập phương
                dụng dược “kê thuốc” dùng thuốc nam để điều trị.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
