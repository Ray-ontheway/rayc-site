import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PostNotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <FaceFrownIcon className="w-10 text-gray-100" />
      <h2 className="text-4xl">不存在的文章</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        返回首页
      </Link>
    </div>
  );
}
