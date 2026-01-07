import type { Metadata } from 'next';
import { ContentEditor } from './ui';

export const metadata: Metadata = {
  title: 'Chi tiết nội dung (Admin)',
  description: 'Cập nhật nội dung.',
};

export default async function AdminContentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ContentEditor id={id} />;
}
