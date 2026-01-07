import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Dược Linh Các
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/chung-benh" className="hover:underline">
            Chứng bệnh
          </Link>
          <Link href="/dich-vu" className="hover:underline">
            Dịch vụ
          </Link>
          <Link href="/linh-duoc" className="hover:underline">
            Linh dược
          </Link>
          <Link href="/bai-dang" className="hover:underline">
            Bài đăng
          </Link>
          <Link href="/lien-he" className="hover:underline">
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}
