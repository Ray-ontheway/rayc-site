import type { Metadata } from 'next';
import BaseLayout from '@/app/ui/layouts/base-layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Rayc Blog',
    default: 'Rayc Blog',
  },
  description: 'Rayc Blog',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout>
      <div>NavBar</div>
      {children}
    </BaseLayout>
  );
}
