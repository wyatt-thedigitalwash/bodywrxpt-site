"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[36px] tracking-[0.04em] text-text md:text-[48px]">
        Something went wrong
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-text/60">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="border border-accent px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-text transition-colors duration-500 hover:bg-accent hover:text-bg"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-accent/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-text/60 transition-colors duration-500 hover:border-accent hover:text-text"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
