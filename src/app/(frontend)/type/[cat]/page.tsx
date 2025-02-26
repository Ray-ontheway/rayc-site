import PostList from '@/app/ui/post/post-list';

import { fetchArticlePageByType } from '@/lib/api/article';

export default async function TypesPage({
  params,
  searchParams,
}: {
  params: Promise<{ cat: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { cat } = await params;
  const { page, size } = await searchParams;
  const pageIdx = Number(page) || 1;
  const pageSize = Number(size) || 10;

  const postPage = await fetchArticlePageByType(pageIdx, pageSize, cat);
  console.log(postPage);

  const hasRecords = postPage && postPage.records.length > 0;

  if (!hasRecords) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center shadow-md p-8">
        <div className="text-xl">没有任何内容</div>
      </div>
    );
  }

  return <PostList postPage={postPage} />;
}
