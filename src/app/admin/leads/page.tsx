import type { Metadata } from 'next';
import { LeadsPage } from './ui';

export const metadata: Metadata = {
  title: 'Leads (Admin)',
  description: 'Danh sách leads.',
};

export default function AdminLeadsPage() {
  return <LeadsPage />;
}
