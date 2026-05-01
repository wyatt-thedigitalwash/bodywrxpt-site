import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export default function ManifestoSection() {
  return (
    <section
      data-bg="ivory"
      className="bg-ivory px-6 py-24 md:px-10 md:py-40"
      aria-label="The Practice"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
            01 -- The Practice
          </span>
        </FadeIn>

        <div>
          <FadeIn delay={0.15} duration={1.2}>
            {/* placeholder copy pending client review */}
            <blockquote className="font-display text-[28px] leading-[1.25] tracking-[0.02em] text-bg md:text-[44px] lg:text-[52px]">
              Every session is fully focused on you. No shared attention, no
              rushed hours. Just one-on-one care built around your body and your
              goals.
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 md:mt-14">
              <Button href="/about" variant="light">More about BodyWRX</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
