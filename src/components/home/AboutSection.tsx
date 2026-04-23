import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export default function AboutSection() {
  return (
    <section
      data-bg="paper"
      className="bg-paper px-6 py-24 md:px-10 md:py-40"
      aria-label="About Dr. Mancuso"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Treatment image */}
        <FadeIn>
          <div className="relative aspect-[3/4] overflow-hidden md:aspect-[2/3]">
            <Image
              src="/images/treatment-glute-bridge.webp"
              alt="Dr. Mancuso guiding a client through a banded glute bridge exercise during a one-on-one session at BodyWRX."
              width={1800}
              height={1800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="editorial-image h-full w-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <FadeIn>
            <span className="mb-6 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-8 md:text-[12px]">
              03 -- Dr. Alexandra Mancuso, PT, DPT
            </span>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-display mb-8 text-[32px] leading-[1.1] tracking-[0.04em] text-bg md:mb-10 md:text-[48px] lg:text-[56px]">
              Built on precision
              <br />
              and presence.
            </h2>
          </FadeIn>

          <FadeIn delay={0.25}>
            {/* placeholder copy pending client review */}
            <p className="max-w-[520px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-bg/80 md:text-[17px]">
              Dr. Alexandra Mancuso is a Doctor of Physical Therapy and the
              founder of BodyWRX Physical Therapy & Wellness. With advanced
              training in orthopedic and sports rehabilitation, she built
              BodyWRX around a simple principle: every patient deserves
              undivided attention. Her concierge model ensures that each session
              is fully dedicated to one client, combining hands-on manual
              therapy with corrective movement strategies and recovery
              modalities.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-10 md:mt-12">
              <Button href="/about" variant="light">Read full story</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
