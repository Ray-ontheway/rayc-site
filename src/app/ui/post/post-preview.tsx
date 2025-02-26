'use client';

import { Article } from '@/lib/definitions';
import Link from 'next/link';
import { FolderIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

import Markdown from 'react-markdown';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

export default function PostPreview({ post }: { post: Article }) {
  const url = `/post/${post.uid}`;
  return (
    <Link href={url}>
      <Card
        sx={{
          maxWidth: 1140,
          display: 'flex',
          flexDirection: 'row',
          '&:hover': { boxShadow: 12 },
        }}
        className="h-auto"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={post.cover}
            alt={post.title}
            sx={{ height: { xs: 0, md: 240 }, minWidth: 320 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className="text-2xl font-bold"
              variant="h5"
            >
              {post.title}
            </Typography>
            <div className="flex flex-col items-start space-x-0 space-y-2 text-gray-500 md:flex-row md:space-x-2 md:space-y-0 md:justify-start md:items-center">
              <div className="flex justify-start items-center">
                <FolderIcon className="w-6 h-6" />
                <Typography
                  variant="subtitle2"
                  component="span"
                  className="w-auto"
                >
                  {post.type.name}
                </Typography>
              </div>
              <div className="flex justify-start items-center">
                <PencilSquareIcon className="w-6 h-6" />
                <Typography variant="subtitle2">{`${format(post.updateAt, 'yyyy-MM-dd')}`}</Typography>
              </div>
            </div>
            <Markdown>{`${post.summary}...`}</Markdown>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
