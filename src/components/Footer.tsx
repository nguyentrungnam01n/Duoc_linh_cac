import Image from 'next/image';
import Link from 'next/link';

import footerBackground from '@/assets/footer/footer-background.png';
import logo from '@/assets/logo/logo-footer.png';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#FCF8EE]">
      {/* Background Image - Absolute cover */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={footerBackground}
          alt=""
          fill
          className="object-cover object-bottom opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-8 text-[#771010] lg:grid-cols-12 lg:gap-8">
          {/* Cột 1: Logo & Slogan */}
          <div className="flex flex-col items-center lg:col-span-3 lg:items-center">
            <div className="relative h-[100px] w-[50px] lg:h-[152px] lg:w-[77px]">
              <Image
                src={logo}
                alt="Dược Linh Các"
                fill
                className="object-contain"
              />
            </div>

            <div
              className="mt-4 text-center text-[14px] font-semibold uppercase leading-[1.2] tracking-[-0.03em] lg:mt-6 lg:text-[16.8px]"
              style={{
                fontFamily: 'var(--font-big-shoulders-display)',
                fontFeatureSettings: "'salt' on, 'kern' off",
              }}
            >
              <p className="whitespace-nowrap">Y thuật nguyễn tộc đại tôn</p>
              <p className="mt-1 whitespace-nowrap lg:mt-2">
                Vạn đại trường tồn danh kế thịnh
              </p>
            </div>
          </div>

          {/* Cột 2: Về Chúng Tôi */}
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left lg:pl-10">
            <h3 className="text-[18px] font-bold leading-[20px]">
              DƯỢC LINH CÁC
            </h3>
            <div className="mt-4 space-y-3 text-[16px] leading-[21px] lg:mt-7">
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

          {/* Cột 3: Dịch Vụ */}
          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <h3 className="text-[18px] font-bold leading-[20px]">DỊCH VỤ</h3>
            <div className="mt-4 space-y-3 text-[16px] leading-[21px] lg:mt-7">
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

          {/* Cột 4: Liên Hệ - Chiếm rộng nhất */}
          <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <h3 className="text-[18px] font-bold leading-[20px]">LIÊN HỆ</h3>
            <div className="mt-4 space-y-3 text-[15px] font-medium leading-[20px] lg:mt-7">
              <p className="uppercase">Tư vấn: 0366659999</p>
              <p>EMAIL: duoclinhcac@gmail.com</p>
              <p>ĐỊA CHỈ:</p>
              <p>290/2 Nam kì Khởi Nghĩa, phường Võ Thị Sáu, Quận 3, TP.HCM</p>
              <p>71 Phan Đăng Lưu, phường Suối Hoa, Bắc Ninh</p>
            </div>

            <div className="mt-6 flex h-[38px] w-[191px] items-center justify-between bg-[#771010] px-4 text-[#F9FFDC]">
              <a href="#" aria-label="Facebook">
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
              <a href="#" aria-label="Twitter">
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
              <a href="#" aria-label="Instagram">
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
              <a href="#" aria-label="LinkedIn">
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
