import { fetchAllArticleType, fetchAllArticleTag } from '@/lib/api/article';
import { PostCatItem } from './post-cat-item';
import { CatEnum } from '@/lib/definitions';

export async function PostCats({ catEnum }: { catEnum: CatEnum }) {
  const typeArray = [];
  if (catEnum == CatEnum.TYPE) {
    typeArray.push(...((await fetchAllArticleType()) || []));
  } else {
    typeArray.push(...((await fetchAllArticleTag()) || []));
  }
  return (
    <div className="flex flex-col gap-8 rounded-md shadow-gray-400 shadow-sm p-4">
      <div className="text-2xl font-bold">
        {catEnum == CatEnum.TYPE ? '分类' : '标签'}
        {typeArray && (
          <span className="text-base font-mono">
            &nbsp;--&nbsp;{typeArray.length}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-8 w-full">
        {typeArray &&
          typeArray.map((postCat) => {
            return (
              <PostCatItem
                catEnum={catEnum}
                key={postCat.uid}
                postType={postCat}
              />
            );
          })}
      </div>
    </div>
  );
}
