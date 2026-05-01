import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a concierge physical therapy session with Dr. Alexandra Mancuso in Tampa, FL. Every inquiry is read personally. Cash-pay, by appointment only.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | BodyWRX Physical Therapy & Wellness",
    description:
      "Book a concierge physical therapy session with Dr. Alexandra Mancuso in Tampa, FL. Every inquiry is read personally. Cash-pay, by appointment only.",
    url: "/contact",
    type: "website",
    siteName: "BodyWRX Physical Therapy & Wellness",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | BodyWRX Physical Therapy & Wellness",
    description:
      "Book a concierge physical therapy session with Dr. Alexandra Mancuso in Tampa, FL. Every inquiry is read personally. Cash-pay, by appointment only.",
    images: ["/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bodywrxpt.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://bodywrxpt.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 1. Header Section */}
      <section
        data-bg="ivory"
        className="bg-ivory px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-40"
        aria-label="Contact introduction"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
              Contact
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display max-w-[700px] text-[36px] leading-[1.08] tracking-[0.04em] text-bg md:text-[64px] lg:text-[80px]">
              Request your session.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* placeholder copy pending client review */}
            <p className="mt-8 max-w-[500px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:mt-10 md:text-[17px]">
              Every inquiry is read personally by Dr. Mancuso. Appointments are
              by request only. Share a bit about what you need and she will be
              in touch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Contact Details + Form */}
      <section
        data-bg="ivory"
        className="bg-ivory px-6 py-24 md:px-10 md:py-40"
        aria-label="Contact details and form"
      >
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[40%_1fr] md:gap-16 lg:gap-24">
          {/* Left Column — Details */}
          <FadeIn>
            <div>
              <ContactDetail label="Location">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4221+W+Boy+Scout+Blvd+Suite+170+Tampa+FL+33607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display block min-h-[44px] text-[22px] leading-[1.4] tracking-[0.02em] text-bg underline underline-offset-4 decoration-bg/20 transition-colors duration-500 hover:text-accent hover:decoration-accent md:text-[26px]"
                >
                  4221 W Boy Scout Blvd
                  <br />
                  Suite 170
                  <br />
                  Tampa, FL 33607
                </a>
              </ContactDetail>

              <ContactDetail label="Phone">
                <a
                  href="tel:3364209360"
                  className="font-display block min-h-[44px] text-[22px] tracking-[0.02em] text-bg underline underline-offset-4 decoration-bg/20 transition-colors duration-500 hover:text-accent hover:decoration-accent md:text-[26px]"
                >
                  336-420-9360
                </a>
              </ContactDetail>

              <ContactDetail label="Email">
                <a
                  href="mailto:dralexandramancuso@gmail.com"
                  className="font-display block min-h-[44px] text-[20px] tracking-[0.02em] text-bg underline underline-offset-4 decoration-bg/20 transition-colors duration-500 hover:text-accent hover:decoration-accent md:text-[24px]"
                >
                  dralexandramancuso@gmail.com
                </a>
              </ContactDetail>

              <ContactDetail label="Hours">
                <span className="font-display block text-[22px] font-medium tracking-[0.02em] text-bg/60 md:text-[26px]">
                  By Appointment Only
                </span>
              </ContactDetail>

              <ContactDetail label="Instagram" last>
                <a
                  href="https://instagram.com/bodywrxpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display block min-h-[44px] text-[22px] tracking-[0.02em] text-bg underline underline-offset-4 decoration-bg/20 transition-colors duration-500 hover:text-accent hover:decoration-accent md:text-[26px]"
                >
                  @bodywrxpt
                </a>
              </ContactDetail>

              <p className="mt-10 font-display text-[16px] italic leading-[1.5] tracking-[0.02em] text-bg/40 md:mt-14 md:text-[18px]">
                Every request is read personally.
              </p>
            </div>
          </FadeIn>

          {/* Right Column — Form */}
          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* 3. Map Section */}
      <section
        data-bg="ivory"
        className="bg-ivory px-6 py-24 md:px-10 md:py-40"
        aria-label="Location map"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-14 md:text-[12px]">
              Find Us
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.920345327377!2d-82.51718382415697!3d27.965725614047436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3ad957da84d%3A0x984f83f3d70f5f2e!2s4221%20W%20Boy%20Scout%20Blvd%2C%20Tampa%2C%20FL%2033607!5e0!3m2!1sen!2sus!4v1777659561995!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) contrast(1.1) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing BodyWRX Physical Therapy location at 4221 W Boy Scout Blvd, Tampa, FL"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 md:mt-14 md:flex-row md:items-end md:justify-between">
              <span className="font-display text-[20px] tracking-[0.02em] text-bg/70 md:text-[24px]">
                4221 W Boy Scout Blvd, Suite 170, Tampa, FL 33607
              </span>
              <Button
                href="https://www.google.com/maps/dir/?api=1&destination=4221+W+Boy+Scout+Blvd+Suite+170+Tampa+FL+33607"
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
              >
                Get Directions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Call directly"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Still Deciding?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-8 text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-10 md:text-[56px] lg:text-[64px]">
              Call directly.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href="tel:3364209360"
              className="font-display block text-[32px] tracking-[0.03em] text-text transition-colors duration-500 hover:text-accent md:text-[48px] lg:text-[56px]"
            >
              336-420-9360
            </a>
            <p className="mt-4 text-[14px] font-light tracking-[0.01em] text-text/50 md:mt-6 md:text-[15px]">
              Dr. Mancuso answers personally.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ContactDetail({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`py-6 md:py-8 ${!last ? "border-b border-bg/12" : ""}`}
    >
      <span className="mb-3 block text-[13px] font-normal uppercase tracking-[0.12em] text-bg/60">
        {label}
      </span>
      {children}
    </div>
  );
}
