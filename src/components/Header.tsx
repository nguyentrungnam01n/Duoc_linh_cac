'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logo/logo-header.png';

const NAV_LINKS = [
  { href: '/chung-benh', label: 'Các chứng bệnh' },
  { href: '/dich-vu', label: 'Sản phẩm - dịch vụ' },
  { href: '/linh-duoc', label: 'Linh dược' },
  { href: '/bai-dang', label: 'Bài đăng' },
  { href: '/lien-he', label: 'Liên hệ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-screen bg-[#F9FFDC] z-50">
      <div className="absolute inset-x-0 top-0 h-[80px] lg:h-[105px] border-b-[3px] border-[#9A0009]" />

      <div className="relative mx-auto flex h-[80px] lg:h-[105px] w-full max-w-[1440px] items-center px-4 lg:justify-center">
        {/* Mobile Header: Logo + Hamburger */}
        <div className="flex w-full items-center justify-between lg:hidden z-50">
          <Link
            href="/"
            aria-label="Dược Linh Các"
            className="shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={logo}
              alt="Dược Linh Các"
              priority
              className="h-auto w-auto max-h-[50px]"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#771010] focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-[16px] font-medium uppercase leading-[25px] tracking-wide text-[#771010] lg:flex lg:gap-16"
          style={{ fontFamily: 'var(--font-saira)' }}
        >
          <Link href="/" aria-label="Dược Linh Các" className="shrink-0">
            <Image
              src={logo}
              alt="Dược Linh Các"
              priority
              className="h-auto w-auto max-h-[72px]"
            />
          </Link>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#5f0c0c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[80px] bottom-0 z-40 flex flex-col items-center bg-[#F9FFDC] pt-10 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav
          className="flex flex-col items-center gap-8 text-[18px] font-bold uppercase text-[#771010]"
          style={{ fontFamily: 'var(--font-saira)' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#5f0c0c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
