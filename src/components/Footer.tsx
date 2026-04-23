import Link from "next/link";

const SITE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Testimonials", href: "/testimonials" }, // Hidden until real testimonials provided
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg" role="contentinfo">
      {/* Wordmark */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-12 md:px-10 md:pt-32 md:pb-16">
        <span className="font-display block text-[48px] leading-none tracking-[0.06em] text-text md:text-[72px]">
          BODY WRX
        </span>
        <span className="mt-2 block text-[12px] font-medium uppercase tracking-[0.14em] text-accent md:text-[14px]">
          Physical Therapy & Wellness
        </span>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px bg-accent/30" />
      </div>

      {/* Three Columns */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-12 md:grid-cols-3 md:gap-8 md:px-10 md:py-16">
        {/* Contact */}
        <div>
          <h3 className="mb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
            Contact
          </h3>
          <address className="flex flex-col gap-3 text-[16px] not-italic leading-relaxed text-text/85">
            <span>
              4221 W Boy Scout Blvd
              <br />
              Suite 170
              <br />
              Tampa, FL 33607
            </span>
            <a
              href="tel:3364209360"
              className="min-h-[44px] flex items-center underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              336-420-9360
            </a>
            <a
              href="mailto:dralexandramancuso@gmail.com"
              className="min-h-[44px] flex items-center underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              dralexandramancuso@gmail.com
            </a>
            <span className="text-accent font-medium">By Appointment Only</span>
          </address>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="mb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
            Navigate
          </h3>
          <nav className="flex flex-col gap-1" aria-label="Footer navigation">
            {SITE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative min-h-[44px] flex items-center w-fit text-[16px] text-text/85 transition-colors duration-500 hover:text-text"
              >
                {link.label}
                <span className="absolute bottom-2 left-0 h-px w-0 bg-text transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
            Connect
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://instagram.com/bodywrxpt"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center w-fit text-[16px] text-text/85 underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
              aria-label="Follow BodyWRX on Instagram"
            >
              @bodywrxpt
            </a>
            <p className="font-display text-[20px] italic leading-snug tracking-[0.02em] text-text/50 md:text-[22px]">
              Where recovery meets performance.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="h-px bg-accent/30" />
      </div>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <span className="text-[12px] tracking-[0.04em] text-text/50">
          &copy; {new Date().getFullYear()} BodyWRX Physical Therapy & Wellness
        </span>
        <a
          href="https://thedigitalwash.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] tracking-[0.04em] text-text/50 transition-colors duration-500 hover:text-accent"
        >
          Site by The Digital Wash<span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </footer>
  );
}
