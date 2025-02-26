import PostPreview from '@/app/ui/post/post-preview';
import { PageObj } from '@/lib/definitions';
import PostPagination from '@/app/ui/pagination';

export default async function PostList({ postPage }: { postPage: PageObj }) {
  const { records, pageIdx, pageSize, total } = postPage as PageObj;
  const pageCount = Math.ceil(total / pageSize);
  console.log(
    'total',
    total,
    'pageSize',
    pageSize,
    'pageSize hhhhhh',
    total / pageSize,
  );

  return (
    <>
      <div className="px-4 flex flex-col justify-center items-center gap-8">
        {records.map((post, idx) => {
          return <PostPreview key={`${post.uid}_${idx}`} post={post} />;
        })}
      </div>

      {pageCount > 1 && (
        <div className="flex flex-row justify-center my-16">
          <PostPagination pageCount={pageCount} pageIdx={pageIdx} />
        </div>
      )}
    </>
  );
}
