import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside the BodyWRX practice in Tampa, FL. See the private treatment space designed for focused, one-on-one concierge physical therapy with Dr. Mancuso.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | BodyWRX Physical Therapy & Wellness",
    description:
      "Inside the BodyWRX practice in Tampa, FL. See the private treatment space designed for focused, one-on-one concierge physical therapy with Dr. Mancuso.",
    url: "/gallery",
    type: "website",
    siteName: "BodyWRX Physical Therapy & Wellness",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | BodyWRX Physical Therapy & Wellness",
    description:
      "Inside the BodyWRX practice in Tampa, FL. See the private treatment space designed for focused, one-on-one concierge physical therapy with Dr. Mancuso.",
    images: ["/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bodywrxpt.com" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://bodywrxpt.com/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header Section */}
      <section
        data-bg="ivory"
        className="bg-ivory px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-40"
        aria-label="Gallery introduction"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
              Gallery
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display max-w-[600px] text-[36px] leading-[1.08] tracking-[0.04em] text-bg md:text-[64px] lg:text-[80px]">
              Inside the practice.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* placeholder copy pending client review */}
            <p className="mt-8 max-w-[480px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:mt-10 md:text-[17px]">
              The space was designed to feel private, warm, and focused. Every
              detail supports the work that happens here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        data-bg="ivory"
        className="bg-ivory px-6 pb-24 md:px-10 md:pb-40"
        aria-label="Gallery images"
      >
        <div className="mx-auto max-w-[1400px]">
          <GalleryGrid />
        </div>
      </section>

      {/* Contact CTA */}
      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Experience it"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Experience It
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-8 max-w-[600px] text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-10 md:text-[64px] lg:text-[80px]">
              See it for yourself.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* placeholder copy pending client review */}
            <p className="max-w-[420px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:text-[17px]">
              Book a session and step into the space.
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
