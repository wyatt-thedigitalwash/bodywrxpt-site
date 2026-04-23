import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Alexandra Mancuso, PT, DPT. Founder of BodyWRX, a concierge physical therapy practice in Tampa, FL built on one-on-one care, precision, and presence.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | BodyWRX Physical Therapy & Wellness",
    description:
      "Meet Dr. Alexandra Mancuso, PT, DPT. Founder of BodyWRX, a concierge physical therapy practice in Tampa, FL built on one-on-one care, precision, and presence.",
    url: "/about",
    type: "website",
    siteName: "BodyWRX Physical Therapy & Wellness",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | BodyWRX Physical Therapy & Wellness",
    description:
      "Meet Dr. Alexandra Mancuso, PT, DPT. Founder of BodyWRX, a concierge physical therapy practice in Tampa, FL built on one-on-one care, precision, and presence.",
    images: ["/og-image.png"],
  },
};

const CREDENTIALS = ["Doctor of Physical Therapy"];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Alexandra Mancuso",
  jobTitle: "Doctor of Physical Therapy",
  worksFor: { "@id": "https://bodywrxpt.com/#business" },
  url: "https://bodywrxpt.com/about",
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Doctor of Physical Therapy" },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bodywrxpt.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://bodywrxpt.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 1. Header Section */}
      <section
        data-bg="paper"
        className="bg-paper px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-40"
        aria-label="About introduction"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text */}
          <div className="md:w-[58%]">
            <FadeIn>
              <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
                About
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-[36px] leading-[1.08] tracking-[0.04em] text-bg md:text-[64px] lg:text-[80px]">
                Two names,
                <br />
                one practice.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* placeholder copy pending client review */}
              <p className="mt-8 max-w-[520px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:mt-10 md:text-[17px]">
                BodyWRX is Dr. Alexandra Mancuso. The practice and the
                practitioner are inseparable. Every session, every plan, every
                outcome runs through one set of hands.
              </p>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="w-full md:w-[36%]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/treatment-glute-bridge.webp"
                alt="Dr. Alexandra Mancuso guiding a client through a banded glute bridge at BodyWRX in Tampa."
                width={1800}
                height={1800}
                priority
                sizes="(max-width: 768px) 100vw, 36vw"
                className="editorial-image h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Practice Section */}
      <section
        data-bg="paper"
        className="bg-paper px-6 py-24 md:px-10 md:py-40"
        aria-label="The Practice"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
              01 &mdash; The Practice
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-14 max-w-[700px] text-[32px] leading-[1.1] tracking-[0.04em] text-bg md:mb-20 md:text-[56px] lg:text-[64px]">
              A different kind of physical therapy.
            </h2>
          </FadeIn>

          <div>
            <div>
              <FadeIn delay={0.25}>
                <div className="space-y-6 text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:text-[17px]">
                  {/* placeholder copy pending client review */}
                  <p>
                    Concierge physical therapy means one thing above all else:
                    your session belongs entirely to you. There is no second
                    patient being seen in the next room, no aide running your
                    exercises while the therapist checks on someone else. From
                    the first minute to the last, the focus is singular.
                  </p>
                  <p>
                    The cash-pay model exists to protect that focus. Without
                    insurance dictating visit counts, session lengths, or
                    treatment methods, Dr. Mancuso designs your plan around what
                    your body actually needs. Sessions run longer. Treatment
                    progresses faster. Outcomes improve because nothing is
                    compromised for a billing code.
                  </p>
                  <p>
                    BodyWRX was built for people who expect more from their care.
                    Athletes who need precision. Professionals who cannot afford
                    to lose time. Post-surgical patients who want their recovery
                    handled with the same seriousness as the procedure itself.
                    This is physical therapy for people who understand that
                    quality is not a luxury. It is the baseline.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Divider */}
      <div className="bg-paper px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex flex-col items-center py-10 md:py-16">
              <span className="mb-4 text-[13px] tracking-[0.08em] text-bg/30">
                02
              </span>
              <span className="mb-6 text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:text-[14px]">
                The Practitioner
              </span>
              <div className="h-px w-full bg-bg/10" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 4. Dr. Mancuso Section */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Dr. Alexandra Mancuso"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-[45%_1fr] md:gap-16 lg:gap-24">
            {/* Portrait */}
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/dr-mancuso-portrait-copy.webp"
                  alt="Dr. Alexandra Mancuso, PT, DPT, founder of BodyWRX Physical Therapy & Wellness in Tampa."
                  width={961}
                  height={1387}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="editorial-image h-full w-full object-cover object-top"
                />
              </div>
            </FadeIn>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <FadeIn>
                <span className="mb-6 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-8 md:text-[12px]">
                  Dr. Alexandra Mancuso, PT, DPT
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="font-display mb-10 text-[30px] leading-[1.1] tracking-[0.04em] text-text md:mb-12 md:text-[44px] lg:text-[52px]">
                  Precision, presence, and a practice of her own.
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-5 text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:text-[17px]">
                  <p>
                    Dr. Alexandra Mancuso completed her Bachelor&apos;s degree
                    in Psychology at the University of North Carolina Wilmington
                    and went on to obtain a Doctorate in Physical Therapy from
                    the University of St. Augustine in Miami, FL.
                  </p>
                  <p>
                    With a background in psychology, she prioritizes addressing
                    patients&apos; mental and emotional needs alongside their
                    physical treatment. She opened BodyWRX in 2024 to bring a
                    more personal, focused approach to physical therapy in
                    Tampa.
                  </p>
                </div>
              </FadeIn>

              {/* Credential */}
              <FadeIn delay={0.3}>
                <div className="mt-12 pt-10 md:mt-16 md:pt-12">
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent/50 md:text-[13px]">
                    {CREDENTIALS[0]}
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Philosophy Pull-Quote */}
      <section
        data-bg="paper"
        className="bg-paper px-6 py-24 md:px-10 md:py-40"
        aria-label="Philosophy"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-14 md:text-[14px]">
              In Practice
            </span>
          </FadeIn>

          <div className="md:ml-[10%] md:w-[70%] lg:ml-[15%] lg:w-[60%]">
            <FadeIn delay={0.15} duration={1.2}>
              {/* placeholder copy pending client review */}
              <blockquote className="font-display text-[26px] italic leading-[1.3] tracking-[0.02em] text-bg md:text-[40px] lg:text-[48px]">
                &ldquo;I built BodyWRX because care should feel personal. Your
                body is not a template, and neither is your recovery.&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-8 text-[15px] font-normal tracking-[0.06em] text-bg/60 md:mt-10">
                &mdash; Dr. Alexandra Mancuso
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Work together"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Work Together
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-10 max-w-[700px] text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-12 md:text-[64px] lg:text-[80px]">
              Let&apos;s build something for your body.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 md:mt-16">
              <Button href="/contact">Request Appointment</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
