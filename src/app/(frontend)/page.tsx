import { Metadata } from 'next';

import PostList from '@/app/ui/post/post-list';
import { fetchArticlePage } from '@/lib/api/article';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Home',
  description: "Rayc's Blog",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, size } = await searchParams;

  const postPage = await fetchArticlePage(
    Number(page) || 1,
    Number(size) || 10,
  );

  if (!postPage) {
    notFound();
  }

  return <PostList postPage={postPage} />;
}
