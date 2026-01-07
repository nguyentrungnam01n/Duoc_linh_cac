import type { Metadata } from 'next';
import { SettingsPage } from './ui';

export const metadata: Metadata = {
  title: 'Cài đặt (Admin)',
  description: 'Cài đặt website.',
};

export default function AdminSettingsPage() {
  return <SettingsPage />;
}
