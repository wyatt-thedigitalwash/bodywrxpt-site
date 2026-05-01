import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const CATEGORIES = [
  {
    label: "Rehabilitation",
    services: [
      { num: "01", name: "Physical Therapy" },
      { num: "02", name: "Post-Surgical Rehabilitation" },
      { num: "03", name: "Vestibular Therapy" },
    ],
  },
  {
    label: "Performance & Corrective",
    services: [
      { num: "04", name: "Corrective Training" },
      { num: "05", name: "Prehabilitation" },
    ],
  },
  {
    label: "Recovery Modalities",
    services: [
      { num: "06", name: "Cupping Therapy" },
      { num: "07", name: "Graston Technique" },
      { num: "08", name: "Compression Boots" },
      { num: "09", name: "PEMF Mat Therapy" },
      { num: "10", name: "Red Light Therapy" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      data-bg="ivory"
      className="bg-ivory px-6 py-24 md:px-10 md:py-40"
      aria-label="Services"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-bg/60 md:mb-12 md:text-[14px]">
            02 -- Services
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display mb-16 text-[32px] leading-[1.1] tracking-[0.04em] text-bg md:mb-24 md:text-[56px] lg:text-[64px]">
            A complete approach to recovery and performance.
          </h2>
        </FadeIn>

        {/* Service list by category */}
        <div className="space-y-16 md:space-y-20">
          {CATEGORIES.map((category) => (
            <div key={category.label}>
              <FadeIn>
                <span className="mb-6 block text-[13px] font-normal uppercase tracking-[0.12em] text-bg/60 md:mb-8">
                  {category.label}
                </span>
              </FadeIn>

              <div className="border-t border-bg/12">
                {category.services.map((service) => (
                  <FadeIn key={service.num}>
                    <div className="flex items-baseline border-b border-bg/12 py-5 md:py-6">
                      <span className="mr-6 w-8 shrink-0 text-[12px] tracking-[0.08em] text-bg/30 md:mr-8">
                        {service.num}
                      </span>
                      <span className="font-display text-[22px] tracking-[0.03em] text-bg md:text-[32px] lg:text-[36px]">
                        {service.name}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>

        <FadeIn>
          <div className="mt-14 md:mt-20">
            <Button href="/services" variant="light">View All Services</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
