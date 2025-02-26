// 使用 tailwindcss 进行响应式设计，暂时不考虑不同的组件的分离
'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { akayaKanadaka } from './fonts';
import {
  HomeIcon,
  TagIcon,
  FolderIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { Button, Menu, MenuItem } from '@mui/material';

const links = [
  { name: '主页', href: '/', icon: HomeIcon },
  { name: '类型', href: '/type', icon: FolderIcon },
  { name: '标签', href: '/tag', icon: TagIcon },
];

export default function HomeNav() {
  const [currentPath, setCurrentPath] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="md:hidden flex justify-between h-auto px-16 shadow-md bg-white backdrop-blur-lg bg-opacity-80">
        <Link href="/">
          <div
            className={`text-3xl text-black font-bold h-full flex justify-center items-center ${akayaKanadaka.className}`}
          >
            CoderRC
          </div>
        </Link>
        <div className="h-auto flex items-center justify-center">
          <Button
            id="nav-btn"
            aria-controls={open ? 'nav-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <QueueListIcon className="w-4 h-4" />
          </Button>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'nav-btn',
            }}
          >
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <MenuItem key={link.name} onClick={handleClose}>
                  <Link href={link.href}>
                    <div className="flex items-center space-x-2">
                      <LinkIcon className="w-6 h-6" />
                      <p>{link.name}</p>
                    </div>
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </div>
      <div className="w-full h-20 hidden md:flex items-center justify-between rounded-2xl shadow-sm px-36 bg-white backdrop-blur-lg bg-opacity-80 space-x-12">
        <Link href="/">
          <div
            className={`text-5xl text-black h-full flex justify-center items-center ${akayaKanadaka.className}`}
          >
            CoderRC
          </div>
        </Link>
        <div className="flex flex-row justify-between space-x-8">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex h-auto w-auto grow items-center justify-center text-xl font-bold text-gray-800 hover:text-blue-500 ',
                  {
                    'text-blue-500 text-3xl': currentPath === link.href,
                  },
                )}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
