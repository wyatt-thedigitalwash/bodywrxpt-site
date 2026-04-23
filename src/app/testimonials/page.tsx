// Testimonials page disabled until client provides real testimonials. Re-enable by restoring the original export.
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/* --- Original testimonials page content preserved below for quick restoration --- */

/*
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Patient experiences at BodyWRX in Tampa. Real outcomes from athletes, professionals, and post-surgical recoveries with Dr. Alexandra Mancuso.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Testimonials | BodyWRX Physical Therapy & Wellness",
    description:
      "Patient experiences at BodyWRX in Tampa. Real outcomes from athletes, professionals, and post-surgical recoveries.",
    url: "/testimonials",
  },
};

const TESTIMONIALS = [
  {
    num: "01",
    descriptor: "A Return to Running",
    quote:
      "I had been to three different PTs before finding BodyWRX. The difference was immediate. Dr. Mancuso actually listened, spent the full hour working with me, and within six weeks I was back to running without pain.",
    name: "Sarah K.",
    context: "Runner, returned to training in 6 weeks",
  },
  {
    num: "02",
    descriptor: "Post-Surgical Recovery",
    quote:
      "After my ACL reconstruction, I needed someone who would take the time to do it right. Dr. Mancuso never rushed a single session. My surgeon said my recovery was ahead of schedule.",
    name: "Marcus T.",
    context: "ACL reconstruction, ahead of surgical timeline",
  },
  {
    num: "03",
    descriptor: "Chronic Pain, Finally Understood",
    quote:
      "I came in for chronic lower back pain that I had dealt with for years. What stood out was how thorough the evaluation was. She found things no one else had caught. I finally feel like I understand my body.",
    name: "Jennifer L.",
    context: "Chronic lower back pain, multi-year resolution",
  },
  {
    num: "04",
    descriptor: "Overhead Mobility Restored",
    quote:
      "The combination of manual therapy and corrective exercises changed everything for me. I went from barely being able to lift overhead to training pain-free. Cannot recommend enough.",
    name: "David R.",
    context: "Shoulder rehabilitation, full return to training",
  },
  {
    num: "05",
    descriptor: "Care Without Compromise",
    quote:
      "As someone who is particular about the quality of care I receive, BodyWRX exceeded every expectation. The space is beautiful, the treatment is world-class, and you never feel like just another patient.",
    name: "Natalie P.",
    context: "Concierge patient, ongoing wellness",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section
        data-bg="charcoal"
        className="bg-bg px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-40"
        aria-label="Testimonials introduction"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Testimonials
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display max-w-[600px] text-[36px] leading-[1.08] tracking-[0.04em] text-text md:text-[64px] lg:text-[80px]">
              In their words.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-[500px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:mt-10 md:text-[17px]">
              Athletes, professionals, and patients rebuilding after surgery.
              Their recoveries are different. What they share is the experience
              of care that never cuts corners.
            </p>
          </FadeIn>
        </div>
      </section>

      {TESTIMONIALS.map((t, i) => {
        const isEven = i % 2 === 1;
        const offsetRight = i % 2 === 0;

        return (
          <section
            key={t.num}
            data-bg={isEven ? "bone" : "charcoal"}
            className={`px-6 py-24 md:px-10 md:py-40 ${
              isEven ? "bg-text" : "bg-bg"
            }`}
            aria-label={`Testimonial from ${t.name}`}
          >
            <div className="mx-auto max-w-[1400px]">
              <FadeIn duration={1.2}>
                <span
                  className={`mb-10 block text-[11px] font-normal uppercase tracking-[0.14em] md:mb-14 md:text-[12px] ${
                    isEven ? "text-bg/40" : "text-accent"
                  }`}
                >
                  {t.num} &mdash; {t.descriptor}
                </span>

                <div
                  className={`${
                    offsetRight
                      ? "md:ml-auto md:w-[60%] lg:w-[55%]"
                      : "md:mr-auto md:w-[60%] lg:w-[55%]"
                  }`}
                >
                  <blockquote
                    className={`font-display text-[24px] italic leading-[1.3] tracking-[0.02em] md:text-[36px] lg:text-[44px] ${
                      isEven ? "text-bg" : "text-text"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div
                    className={`mt-10 h-px w-12 md:mt-14 md:w-16 ${
                      isEven ? "bg-bg/20" : "bg-accent/40"
                    }`}
                  />

                  <p
                    className={`mt-6 text-[15px] font-normal tracking-[0.04em] ${
                      isEven ? "text-bg/50" : "text-accent/70"
                    }`}
                  >
                    {t.name}
                    <span className={isEven ? "text-bg/25" : "text-accent/30"}>
                      {" "}
                      /{" "}
                    </span>
                    {t.context}
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      <section
        data-bg="charcoal"
        className="bg-bg px-6 py-24 md:px-10 md:py-40"
        aria-label="Your story next"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
              Your Story Next
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display mb-8 max-w-[700px] text-[36px] leading-[1.1] tracking-[0.04em] text-text md:mb-10 md:text-[64px] lg:text-[80px]">
              Recovery looks different for everyone.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-[420px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:text-[17px]">
              Book a session and start yours.
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
*/

export default function TestimonialsPage() {
  redirect("/");
}
