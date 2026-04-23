import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
        404
      </span>
      <h1 className="mt-4 font-display text-[36px] tracking-[0.04em] text-text md:text-[48px]">
        Page not found
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-text/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border border-accent px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-text transition-colors duration-500 hover:bg-accent hover:text-bg"
      >
        Go Home
      </Link>
    </main>
  );
}
