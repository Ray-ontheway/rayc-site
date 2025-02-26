'use client';

import { ArticleType, CatEnum } from '@/lib/definitions';
import { useRouter } from 'next/navigation';

export function PostCatItem({
  catEnum,
  postType,
}: {
  catEnum: CatEnum;
  postType: ArticleType;
}) {
  const router = useRouter();
  return (
    <div
      key={postType.uid}
      className="block p-4 bg-gray-400 shadow-md rounded-xl transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 active:translate-y-1"
      onClick={() => {
        console.log(catEnum);
        // TODO 跳转别传递参数
        router.push(`${catEnum}/${postType.catKey}`);
      }}
    >
      {postType.name}
    </div>
  );
}
