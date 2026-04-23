import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export default function ContactSection() {
  return (
    <section
      data-bg="charcoal"
      className="bg-bg px-6 py-24 md:px-10 md:py-40"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
            06 -- Book Your Session
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display mb-14 max-w-[600px] text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-20 md:text-[64px] lg:text-[80px]">
            Ready when you are.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-[480px] space-y-5 text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:text-[17px]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=4221+W+Boy+Scout+Blvd+Suite+170+Tampa+FL+33607"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-h-[44px] underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              4221 W Boy Scout Blvd, Suite 170
              <br />
              Tampa, FL 33607
            </a>

            <a
              href="tel:3364209360"
              className="block min-h-[44px] underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              336-420-9360
            </a>

            <a
              href="mailto:dralexandramancuso@gmail.com"
              className="block min-h-[44px] underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              dralexandramancuso@gmail.com
            </a>

            <p className="font-medium text-accent">By Appointment Only</p>

            <a
              href="https://instagram.com/bodywrxpt"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-h-[44px] underline underline-offset-4 decoration-accent/30 transition-colors duration-500 hover:text-text hover:decoration-text"
            >
              @bodywrxpt
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-14 md:mt-20">
            <Button href="/contact">Request Appointment</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
