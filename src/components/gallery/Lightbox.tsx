"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    return () => {
      previousFocus.current?.focus();
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const closeBtn = dialogRef.current?.querySelector<HTMLElement>("button");
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const current = images[activeIndex];
  const isPortrait = current.height > current.width;

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${activeIndex + 1} of ${images.length}: ${current.alt}`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-10 md:top-8"
        aria-label="Close lightbox"
      >
        <span className="block h-px w-6 translate-y-[0.5px] rotate-45 bg-text" />
        <span className="absolute block h-px w-6 -rotate-45 bg-text" />
      </button>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex min-h-[44px] min-w-[44px] items-center justify-center text-accent/60 transition-colors duration-300 hover:text-text focus-visible:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:left-8"
        aria-label="Previous image"
      >
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          className="stroke-current"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M16 2L4 16L16 30" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex min-h-[44px] min-w-[44px] items-center justify-center text-accent/60 transition-colors duration-300 hover:text-text focus-visible:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-8"
        aria-label="Next image"
      >
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          className="stroke-current"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M4 2L16 16L4 30" />
        </svg>
      </button>

      {/* Image area */}
      <div
        className={`relative flex items-center justify-center px-16 md:px-24 ${
          isPortrait ? "max-h-[85vh] max-w-[600px]" : "max-h-[80vh] max-w-[900px]"
        } w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes="(max-width: 768px) 90vw, 60vw"
          className="editorial-image max-h-[80vh] w-auto object-contain"
        />
      </div>

      {/* Counter */}
      <span
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.1em] text-accent/40 md:bottom-8"
        aria-live="polite"
      >
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </span>
    </div>
  );
}
