import type { Metadata } from 'next';
import { ContactForm } from './ui';

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Gửi thông tin liên hệ tới Dược Linh Các.',
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Liên hệ</h1>
      <p className="text-zinc-600">
        Vui lòng để lại thông tin. Chúng tôi sẽ liên hệ lại sớm.
      </p>
      <ContactForm />
    </div>
  );
}
