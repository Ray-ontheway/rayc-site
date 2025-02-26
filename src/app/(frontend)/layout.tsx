import type { Metadata } from 'next';
import BaseLayout from '@/app/ui/layouts/base-layout';
import HomeNav from '@/app/ui/home-nav';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Rayc Blog',
    default: 'Rayc Blog',
  },
  description: 'Rayc Blog',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseLayout>
      <div className="w-full flex flex-col justify-center space-x-4 min-h-screen">
        <div className="w-full fixed top-0 left-0 z-50 h-auto">
          <HomeNav />
        </div>
        <div className="px-4 flex flex-col min-h-screen justify-center gap-16">
          <div className="flex-grow px-16 md:px-40 pt-20 md:pt-32">
            {children}
          </div>
          <div className="w-full px-4 md:px-36 h-auto">
            <Footer />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
