import type { Metadata } from 'next';
import BaseLayout from '@/app/ui/layouts/base-layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Rayc Dashboard',
    default: 'Rayc Dashboard',
  },
  description: 'Rayc Dashboard',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
