import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export default function TestimonialSection() {
  return (
    <section
      data-bg="charcoal"
      className="bg-bg px-6 py-24 md:px-10 md:py-40"
      aria-label="Testimonial"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-10 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-14 md:text-[14px]">
            05 -- In Their Words
          </span>
        </FadeIn>

        <div>
          <FadeIn delay={0.15} duration={1.2}>
            {/* placeholder copy pending client review */}
            <blockquote className="font-display text-[26px] italic leading-[1.3] tracking-[0.02em] text-text md:text-[40px] lg:text-[48px]">
              &ldquo;As someone who is particular about the quality of care I
              receive, BodyWRX exceeded every expectation. The space is
              beautiful, the treatment is world-class, and you never feel like
              just another patient.&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-[15px] font-normal tracking-[0.06em] text-accent md:mt-10">
              Natalie P., Hyde Park
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 md:mt-14">
              <Button href="/testimonials">More Testimonials</Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// TO RE-ENABLE TESTIMONIALS:
// 1. Restore the Testimonials nav link in Header (desktop + mobile) and Footer
// 2. Restore the TestimonialSection import and render on the home page (src/app/page.tsx)
// 3. Restore the original export in src/app/testimonials/page.tsx (uncomment the full page, remove the redirect)
// 4. Add /testimonials back to src/app/sitemap.ts
// 5. Remove robots: { index: false, follow: false } from the testimonials page metadata
