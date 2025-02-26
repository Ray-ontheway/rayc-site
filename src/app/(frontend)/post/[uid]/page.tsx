import { fetchArticleByUid } from '@/lib/api/article';
import { Article } from '@/lib/definitions';
import MarkdownPreview from '@/app/ui/markdown-preview';
import { FolderIcon, CalendarIcon } from '@heroicons/react/24/outline';

import { format } from 'date-fns';
import { notFound } from 'next/navigation';

import { TagIcon } from '@heroicons/react/24/solid';

export default async function PostPage(props: {
  params: Promise<{ uid: string }>;
}) {
  const params = await props.params;
  const uid = params.uid;
  const postDetails = (await fetchArticleByUid(uid)) as Article;
  if (!postDetails) {
    notFound();
  }
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full p-8 pt-12 rounded-xl shadow-sm shadow-black flex flex-col gap-12 ">
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl">{postDetails.title}</div>
          <div className="flex gap-8 text-base text-gray-500">
            <div className="flex flex-row gap-2 items-end">
              <FolderIcon className="w-6 h-6" />
              {postDetails.type.name}
            </div>
            <div className="flex flex-row gap-2 items-end">
              <CalendarIcon className="w-6 h-6" />
              {`${format(postDetails.updateAt, 'yyyy-MM-dd')}`}
            </div>
          </div>
        </div>
        <div className="w-full block text-xl">
          <MarkdownPreview markdown={postDetails.content} />
        </div>
      </div>
      <div className="w-full p-4 flex flex-wrap">
        {postDetails.tags.map((tag) => (
          <div
            key={tag.uid}
            className="flex gap-1 ites-end shadow-md p-3 px-4 rounded-md"
          >
            <TagIcon className="w-6 h-6" />
            <p className="">{tag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
