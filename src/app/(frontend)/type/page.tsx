import { Suspense } from 'react';
import { PostCats } from '@/app/ui/post/post-cat-list';
import { CatEnum } from '@/lib/definitions';

export default function Page() {
  return (
    <Suspense>
      <PostCats catEnum={CatEnum.TYPE} />
    </Suspense>
  );
}
