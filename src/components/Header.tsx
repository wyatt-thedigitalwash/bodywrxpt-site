"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Testimonials", href: "/testimonials" }, // Hidden until real testimonials provided
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus trap for mobile menu
  const handleMenuKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!menuOpen || !menuRef.current) return;
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
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
    },
    [menuOpen]
  );

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("keydown", handleMenuKeyDown);
    }
    return () => window.removeEventListener("keydown", handleMenuKeyDown);
  }, [menuOpen, handleMenuKeyDown]);

  const showSolid = !isHome || scrolled;

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color] duration-500 ${
        showSolid ? "bg-bg" : ""
      }`}
      style={
        !showSolid
          ? {
              background:
                "linear-gradient(to bottom, rgba(28,28,26,0.9) 0%, rgba(28,28,26,0.6) 50%, rgba(28,28,26,0) 100%)",
              paddingBottom: "5rem",
            }
          : undefined
      }
      role="banner"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        {/* Wordmark */}
        <Link href="/" className="group flex flex-col" aria-label="BodyWRX home">
          <span className="font-display text-[22px] leading-none tracking-[0.08em] text-text md:text-[26px]">
            BODY WRX
          </span>
          <span className="mt-[3px] text-[9px] font-medium uppercase leading-none tracking-[0.14em] text-accent md:text-[10px]">
            Physical Therapy & Wellness
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-500 focus-visible:text-text focus-visible:outline-none ${
                isActive(link.href)
                  ? "text-text"
                  : "text-accent hover:text-text"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              <span
                className={`absolute bottom-[-3px] left-0 h-px bg-text transition-all duration-500 ${
                  isActive(link.href)
                    ? "w-full"
                    : "w-0 group-hover:w-full group-focus-visible:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-accent px-5 py-2 text-[13px] font-medium uppercase tracking-[0.1em] text-text transition-colors duration-500 hover:bg-accent hover:text-bg focus-visible:bg-accent focus-visible:text-bg focus-visible:outline-none"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={hamburgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Navigation menu"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setMenuOpen(false);
            hamburgerRef.current?.focus();
          }}
          className="absolute right-6 top-5 flex h-11 w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Close menu"
        >
          <span className="block h-px w-6 translate-y-[0.5px] rotate-45 bg-text" />
          <span className="absolute block h-px w-6 -rotate-45 bg-text" />
        </button>

        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setMenuOpen(false);
                hamburgerRef.current?.focus();
              }}
              className={`font-display min-h-[44px] text-[36px] tracking-[0.06em] transition-colors duration-500 ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-text hover:text-accent"
              } focus-visible:text-accent focus-visible:outline-none`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 flex flex-col items-center gap-5">
          <Link
            href="/contact"
            onClick={() => {
              setMenuOpen(false);
              hamburgerRef.current?.focus();
            }}
            className="border border-accent px-8 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-text transition-colors duration-500 hover:bg-accent hover:text-bg focus-visible:bg-accent focus-visible:text-bg focus-visible:outline-none"
          >
            Book a Session
          </Link>
          <a
            href="tel:3364209360"
            className="min-h-[44px] flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-accent transition-colors duration-500 hover:text-text focus-visible:text-text focus-visible:outline-none"
          >
            Call 336-420-9360
          </a>
        </div>
      </div>
    </header>
  );
}
