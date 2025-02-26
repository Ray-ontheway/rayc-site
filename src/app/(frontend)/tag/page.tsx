import { Suspense } from 'react';
import { PostCats } from '@/app/ui/post/post-cat-list';
import { CatEnum } from '@/lib/definitions';

export default function TagsPage() {
  return (
    <Suspense>
      <PostCats catEnum={CatEnum.TAG} />
    </Suspense>
  );
}
