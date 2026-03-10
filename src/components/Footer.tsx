import Image from 'next/image';
import Link from 'next/link';

import footerBackground from '@/assets/footer/footer-background.png';
import logo from '@/assets/logo/logo-footer.png';

export function Footer() {
  return (
    <footer
      className="relative w-screen overflow-hidden"
      style={{
        aspectRatio: `${footerBackground.width} / ${footerBackground.height}`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 -z-10"
      >
        <Image
          src={footerBackground}
          alt=""
          fill
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto h-auto w-full max-w-[1440px] mt-6">
        <div className="hidden lg:block">
          <div className="absolute left-[150px] top-[94px]">
            <Image
              src={logo}
              alt="Dược Linh Các"
              width={77}
              height={152}
              className="h-auto w-[77px]"
            />
          </div>

          <div
            className="absolute left-[65px] top-[268px] w-[245px] text-center text-[16.8094px] font-semibold uppercase leading-[20px] tracking-[-0.03em] text-[#771010]"
            style={{
              fontFamily: 'var(--font-big-shoulders-display)',
              fontFeatureSettings: "'salt' on, 'kern' off",
            }}
          >
            <p className="whitespace-nowrap">Y thuật nguyễn tộc đại tôn</p>
            <p className="mt-2 whitespace-nowrap">
              Vạn đại trường tồn danh kế thịnh
            </p>
          </div>

          <div className="absolute left-[330px] top-[94px] w-[220px] text-[#771010]">
            <h3 className="text-[18px] font-bold leading-[20px]">
              DƯỢC LINH CÁC
            </h3>
            <div className="mt-7 space-y-3 text-[16px] leading-[21px]">
              <Link href="/gioi-thieu" className="block hover:underline">
                VỀ CHÚNG TÔI - HỘI DUYÊN
              </Link>
              <Link href="/hoi-duyen" className="block hover:underline">
                HỘI DUYÊN
              </Link>
              <Link href="/chung-benh" className="block hover:underline">
                CÁC CHỨNG - BỆNH
              </Link>
              <Link href="/bai-dang" className="block hover:underline">
                BÀI ĐĂNG
              </Link>
            </div>
          </div>

          <div className="absolute left-[634px] top-[94px] w-[200px] text-[#771010]">
            <h3 className="text-[18px] font-bold leading-[20px]">DỊCH VỤ</h3>
            <div className="mt-7 space-y-3 text-[16px] leading-[21px]">
              <Link href="/dich-vu" className="block hover:underline">
                Y TRÀ DƯỠNG SINH
              </Link>
              <Link href="/lien-he" className="block hover:underline">
                LIÊN HỆ
              </Link>
              <Link href="/dich-vu" className="block hover:underline">
                KHÁM BỆNH
              </Link>
              <Link href="/linh-duoc" className="block hover:underline">
                LINH DƯỢC
              </Link>
            </div>
          </div>

          <div className="absolute left-[873px] top-[94px] w-[491px] text-[#771010]">
            <h3 className="text-[18px] font-bold leading-[20px]">LIÊN HỆ</h3>
            <div className="mt-7 space-y-3 text-[15px] font-medium leading-[20px]">
              <p className="uppercase">Tư vấn: 0366659999</p>
              <p>EMAIL: duoclinhcac@gmail.com</p>
              <p>ĐỊA CHỈ:</p>
              <p>290/2 Nam kì Khởi Nghĩa, phường Võ Thị Sáu, Quận 3, TP.HCM</p>
              <p>71 Phan Đăng Lưu, phường Suối Hoa, Bắc Ninh</p>
            </div>

            <div className="mt-6 inline-flex h-[38px] w-[191px] items-center justify-between bg-[#771010] px-4">
              <a href="#" aria-label="Facebook" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M21 7.2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2.1.9A3.3 3.3 0 0 0 12.8 8c0 .3 0 .6.1.9-2.7-.1-5.1-1.4-6.8-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4v.1c0 1.6 1.2 2.9 2.7 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.6 6.6 0 0 1 3 18.4 9.3 9.3 0 0 0 8 19.9c6 0 9.3-5 9.3-9.3v-.4c.7-.4 1.2-1 1.7-1.6z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM18 6.5a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6.9 6.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.1 21h3.6V9H3.1v12zM9 9h3.4v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21H17V15c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V21H9V9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:hidden px-4 py-10 text-[#771010]">
          <div className="flex items-start gap-4">
            <Image
              src={logo}
              alt="Dược Linh Các"
              width={77}
              height={152}
              className="h-auto w-[64px]"
            />
            <div
              className="text-[16.8094px] font-semibold uppercase leading-[20px] tracking-[-0.03em]"
              style={{
                fontFamily: 'var(--font-big-shoulders-display)',
                fontFeatureSettings: "'salt' on, 'kern' off",
              }}
            >
              <p className="whitespace-nowrap">Y thuật nguyễn tộc đại tôn</p>
              <p className="mt-2 whitespace-nowrap">
                Vạn đại trường tồn danh kế thịnh
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-[18px] font-bold leading-[20px]">
                DƯỢC LINH CÁC
              </h3>
              <div className="mt-4 space-y-2 text-[16px] leading-[21px]">
                <Link href="/gioi-thieu" className="block hover:underline">
                  VỀ CHÚNG TÔI - HỘI DUYÊN
                </Link>
                <Link href="/hoi-duyen" className="block hover:underline">
                  HỘI DUYÊN
                </Link>
                <Link href="/chung-benh" className="block hover:underline">
                  CÁC CHỨNG - BỆNH
                </Link>
                <Link href="/bai-dang" className="block hover:underline">
                  BÀI ĐĂNG
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-bold leading-[20px]">DỊCH VỤ</h3>
              <div className="mt-4 space-y-2 text-[16px] leading-[21px]">
                <Link href="/dich-vu" className="block hover:underline">
                  Y TRÀ DƯỠNG SINH
                </Link>
                <Link href="/dich-vu" className="block hover:underline">
                  TƯ VẤN
                </Link>
                <Link href="/dich-vu" className="block hover:underline">
                  KHÁM BỆNH
                </Link>
                <Link href="/linh-duoc" className="block hover:underline">
                  LINH DƯỢC
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-[18px] font-bold leading-[20px]">LIÊN HỆ</h3>
            <div className="mt-4 space-y-2 text-[15px] font-medium leading-[20px]">
              <p className="uppercase">Tư vấn: 0366659999</p>
              <p>EMAIL: duoclinhcac@gmail.com</p>
              <p>ĐỊA CHỈ:</p>
              <p>290/2 Nam kì Khởi Nghĩa, phường Võ Thị Sáu, Quận 3, TP.HCM</p>
              <p>71 Phan Đăng Lưu, phường Suối Hoa, Bắc Ninh</p>
            </div>

            <div className="mt-6 inline-flex h-[38px] w-[191px] items-center justify-between bg-[#771010] px-4">
              <a href="#" aria-label="Facebook" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M21 7.2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2.1.9A3.3 3.3 0 0 0 12.8 8c0 .3 0 .6.1.9-2.7-.1-5.1-1.4-6.8-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4v.1c0 1.6 1.2 2.9 2.7 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.6 6.6 0 0 1 3 18.4 9.3 9.3 0 0 0 8 19.9c6 0 9.3-5 9.3-9.3v-.4c.7-.4 1.2-1 1.7-1.6z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM18 6.5a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#F9FFDC]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6.9 6.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.1 21h3.6V9H3.1v12zM9 9h3.4v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21H17V15c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V21H9V9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
