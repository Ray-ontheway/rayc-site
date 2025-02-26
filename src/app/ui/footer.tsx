import Link from 'next/link';
import { inter } from './fonts';

export default function Footer() {
  return (
    <div
      className={`w-full h-auto flex flex-col rounded-2xl bg-gray-50 p-4 mb-4 text-sm space-y-1 justify-center items-start  ${inter.className}`}
    >
      <div className="text-base">
        ©2024&nbsp;&nbsp;
        <Link href="https://rayc.top" className="underline">
          废物请思考人生
        </Link>
      </div>
      <div className="text-sm">
        <Link
          href="https://beian.miit.gov.cn"
          className="underline text-gray-500 hover:text-blue-950"
        >
          蜀ICP备2021024072号-1
        </Link>
      </div>
    </div>
  );
}
