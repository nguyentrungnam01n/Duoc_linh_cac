import type { Metadata } from 'next';
import { NewContentForm } from './ui';

export const metadata: Metadata = {
  title: 'Tạo nội dung (Admin)',
  description: 'Tạo nội dung mới.',
};

export default function AdminNewContentPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Tạo nội dung</h1>
      <NewContentForm />
    </div>
  );
}
