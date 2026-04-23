import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "One-on-one physical therapy in Tampa: rehabilitation, Graston Technique, cupping, corrective training, and more. Cash-pay concierge care by appointment.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | BodyWRX Physical Therapy & Wellness",
    description:
      "One-on-one physical therapy in Tampa: rehabilitation, Graston Technique, cupping, corrective training, and more. Cash-pay concierge care by appointment.",
    url: "/services",
    type: "website",
    siteName: "BodyWRX Physical Therapy & Wellness",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | BodyWRX Physical Therapy & Wellness",
    description:
      "One-on-one physical therapy in Tampa: rehabilitation, Graston Technique, cupping, corrective training, and more. Cash-pay concierge care by appointment.",
    images: ["/og-image.png"],
  },
};

const CATEGORIES = [
  {
    num: "01",
    label: "Rehabilitation",
    services: [
      {
        num: "01",
        name: "Physical Therapy",
        /* placeholder copy pending client review */
        description:
          "Comprehensive one-on-one physical therapy sessions designed to restore function, reduce pain, and rebuild strength. Each treatment plan is built around your specific condition, movement patterns, and recovery goals.",
      },
      {
        num: "02",
        name: "Post-Surgical Rehabilitation",
        /* placeholder copy pending client review */
        description:
          "Structured rehabilitation following orthopedic, spinal, and soft tissue surgeries. Treatment begins with restoring range of motion and progresses through strengthening and return-to-activity benchmarks tailored to your surgical protocol.",
      },
      {
        num: "03",
        name: "Vestibular Therapy",
        /* placeholder copy pending client review */
        description:
          "Specialized treatment for dizziness, vertigo, and balance disorders. Sessions use targeted repositioning maneuvers and progressive balance training to recalibrate the vestibular system and restore confidence in movement.",
      },
    ],
  },
  {
    num: "02",
    label: "Performance & Corrective",
    services: [
      {
        num: "04",
        name: "Corrective Training",
        /* placeholder copy pending client review */
        description:
          "Movement-based sessions that identify and address compensatory patterns, muscle imbalances, and joint restrictions. Corrective training bridges the gap between rehabilitation and high-level performance.",
      },
      {
        num: "05",
        name: "Prehabilitation",
        /* placeholder copy pending client review */
        description:
          "Proactive preparation for upcoming surgery or intensive training. Pre-hab strengthens the areas most vulnerable to stress, improving surgical outcomes and reducing recovery timelines before the procedure even begins.",
      },
    ],
  },
  {
    num: "03",
    label: "Recovery Modalities",
    services: [
      {
        num: "06",
        name: "Cupping Therapy",
        /* placeholder copy pending client review */
        description:
          "Myofascial decompression using silicone or traditional cups to release deep tissue restrictions, increase blood flow, and accelerate recovery. Often integrated into broader treatment sessions for targeted relief.",
      },
      {
        num: "07",
        name: "Graston Technique",
        /* placeholder copy pending client review */
        description:
          "Instrument-assisted soft tissue mobilization that breaks down scar tissue and fascial adhesions. Stainless steel tools allow precise treatment of chronic tendinopathies, post-surgical scarring, and overuse injuries.",
      },
      {
        num: "08",
        name: "Compression Boots",
        /* placeholder copy pending client review */
        description:
          "Sequential pneumatic compression that flushes metabolic waste, reduces swelling, and enhances circulation in the lower extremities. Used for athletic recovery, post-surgical edema management, and general wellness.",
      },
      {
        num: "09",
        name: "PEMF Mat Therapy",
        /* placeholder copy pending client review */
        description:
          "Pulsed electromagnetic field therapy delivered through a full-body mat to promote cellular repair, reduce inflammation, and support bone and tissue healing at a systemic level.",
      },
      {
        num: "10",
        name: "Red Light Therapy",
        /* placeholder copy pending client review */
        description:
          "Near-infrared and red wavelength light panels used to stimulate mitochondrial function, reduce inflammation, and accelerate tissue repair. Applied locally or as full-body exposure depending on treatment goals.",
      },
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: CATEGORIES.flatMap((cat) =>
    cat.services.map((s) => ({
      "@type": "ListItem",
      position: parseInt(s.num),
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": "https://bodywrxpt.com/#business" },
      },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bodywrxpt.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://bodywrxpt.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header Section */}
      <section
        data-bg="paper"
        className="bg-paper px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-40"
        aria-label="Services introduction"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text */}
          <div className="md:w-[58%]">
            <FadeIn>
              <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
                Services
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-[36px] leading-[1.08] tracking-[0.04em] text-bg md:text-[64px] lg:text-[80px]">
                Treatment built
                <br />
                around you,
                <br />
                not a schedule.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* placeholder copy pending client review */}
              <p className="mt-8 max-w-[520px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:mt-10 md:text-[17px]">
                Every session is one-on-one with Dr. Mancuso. No shared
                appointments, no revolving door. A cash-pay model that gives you
                the time, attention, and results that insurance-based clinics
                cannot.
              </p>
            </FadeIn>
          </div>

          {/* Image */}
          <div className="w-full md:w-[36%]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/treatment-graston.webp"
                alt="Dr. Mancuso using the Graston Technique on a client's shoulder at BodyWRX in Tampa."
                width={1043}
                height={2400}
                priority
                sizes="(max-width: 768px) 100vw, 36vw"
                className="editorial-image h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category 1: Rehabilitation */}
      <section
        data-bg="paper"
        className="bg-paper px-6 py-24 md:px-10 md:py-40"
        aria-label="Rehabilitation services"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-14 md:text-[14px]">
              01 &mdash; Rehabilitation
            </span>

            <div className="border-t border-bg/10">
              {CATEGORIES[0].services.map((service) => (
                <ServiceRow key={service.num} service={service} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category 2: Performance & Corrective */}
      <section
        data-bg="paper"
        className="bg-paper px-6 py-24 md:px-10 md:py-40"
        aria-label="Performance and corrective services"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-14 md:text-[14px]">
              02 &mdash; Performance & Corrective
            </span>

            <div className="border-t border-bg/10">
              {CATEGORIES[1].services.map((service) => (
                <ServiceRow key={service.num} service={service} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Interstitial */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-32 md:px-10 md:py-48"
        aria-label="Our approach"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <FadeIn>
              <div className="mb-10 h-px w-16 bg-accent/20 md:mb-14" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-14 md:text-[12px]">
                Our Approach
              </span>
            </FadeIn>

            <FadeIn delay={0.2} duration={1.2}>
              {/* placeholder copy pending client review */}
              <blockquote className="font-display text-[26px] italic leading-[1.25] tracking-[0.02em] text-text md:text-[40px] lg:text-[48px]">
                Modalities are tools. The real treatment is knowing when, how,
                and why to use them on you specifically.
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-10 h-px w-16 bg-accent/20 md:mt-14" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Category 3: Recovery Modalities */}
      <section
        data-bg="paper"
        className="bg-paper px-6 py-24 md:px-10 md:py-40"
        aria-label="Recovery modality services"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-14 md:text-[14px]">
              03 &mdash; Recovery Modalities
            </span>

            <div className="border-t border-bg/10">
              {CATEGORIES[2].services.map((service) => (
                <ServiceRow key={service.num} service={service} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Begin your care"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Begin Your Care
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-8 max-w-[700px] text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-10 md:text-[64px] lg:text-[80px]">
              Every session starts with a conversation.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* placeholder copy pending client review */}
            <p className="max-w-[480px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:text-[17px]">
              Tell me what you&apos;re working through. We&apos;ll build a plan
              that fits.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 md:mt-16">
              <Button href="/contact">Request Appointment</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ServiceRow({
  service,
}: {
  service: { num: string; name: string; description: string };
}) {
  return (
    <div className="group border-b border-bg/10 py-8 md:flex md:gap-10 md:py-10 lg:gap-16">
      <span className="mb-3 block text-[14px] tracking-[0.08em] text-bg/30 md:mb-0 md:w-12 md:shrink-0 md:pt-2 md:text-[16px]">
        {service.num}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[28px] tracking-[0.03em] text-bg transition-colors duration-500 group-hover:text-accent md:text-[48px] lg:text-[56px]">
          {service.name}
        </h3>
        <p className="mt-4 max-w-[600px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/65 md:mt-5 md:text-[17px]">
          {service.description}
        </p>
      </div>
    </div>
  );
}
