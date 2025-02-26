'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => console.log(error), [error]);

  return (
    <main className="flex flex-col h-full items-center justify-center">
      <h1 className="text-center">呀，发生一点小意外</h1>
      <div className="text-5xl">
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={() => reset()}
        >
          刷新
        </button>
      </div>
    </main>
  );
}
