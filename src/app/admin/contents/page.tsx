import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContentsPage } from './ui';

export const metadata: Metadata = {
  title: 'Nội dung (Admin)',
  description: 'Quản lý nội dung.',
};

export default function AdminContentsPage() {
  return (
    <Suspense fallback={<p className="text-sm">Đang tải…</p>}>
      <ContentsPage />
    </Suspense>
  );
}
