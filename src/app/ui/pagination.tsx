'use client';

import { Pagination } from '@mui/material';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function PostPagination({
  pageIdx,
  pageCount,
}: {
  pageIdx: number;
  pageCount: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const curPage = Number(searchParams.get('page')) || 1;
  const curSize = Number(searchParams.get('size')) || 10;
  return (
    <Pagination
      page={pageIdx}
      count={pageCount}
      color="primary"
      onChange={(e, page) => {
        if (page === curPage) {
          return;
        }
        console.log('page', page);
        router.push(`${pathname}?page=${page}&size=${curSize}`);
      }}
    />
  );
}
