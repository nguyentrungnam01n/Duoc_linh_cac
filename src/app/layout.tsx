import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dược Linh Các',
    template: '%s | Dược Linh Các',
  },
  description:
    'Nội dung sức khỏe, dược liệu, dịch vụ và bài đăng từ Dược Linh Các.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
