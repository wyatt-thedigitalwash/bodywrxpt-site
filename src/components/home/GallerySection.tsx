import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

const GALLERY_IMAGES = [
  {
    src: "/images/training-deadlift.webp",
    alt: "Client performing a barbell deadlift during a strength and conditioning session at BodyWRX.",
    width: 2400,
    height: 1800,
    className: "col-span-2 aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto",
  },
  {
    src: "/images/treatment-cupping-outdoor.webp",
    alt: "Dr. Mancuso performing cupping therapy on a client's back in an outdoor setting.",
    width: 2400,
    height: 1800,
    className: "aspect-[3/2] md:col-span-5 md:aspect-auto",
  },
  {
    src: "/images/treatment-graston.webp",
    alt: "Dr. Mancuso using the Graston Technique on a client's shoulder at BodyWRX.",
    width: 1043,
    height: 2400,
    className: "aspect-[3/2] md:col-span-5 md:aspect-auto",
  },
  {
    src: "/images/training-overhead-reach.webp",
    alt: "Client performing an overhead reach exercise in the BodyWRX treatment room.",
    width: 2400,
    height: 1800,
    className: "aspect-[4/3] md:col-span-4 md:aspect-auto",
  },
  {
    src: "/images/treatment-cupping-applied.webp",
    alt: "Cupping therapy cups applied to a client's upper back during treatment at BodyWRX.",
    width: 2400,
    height: 1800,
    className: "aspect-[4/3] md:col-span-8 md:aspect-auto",
  },
];

export default function GallerySection() {
  return (
    <section
      data-bg="charcoal"
      className="bg-bg px-6 py-24 md:px-10 md:py-40"
      aria-label="Gallery preview"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-8 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-12 md:text-[14px]">
            04 -- The Space
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display mb-14 max-w-[500px] text-[32px] leading-[1.1] tracking-[0.04em] text-text md:mb-20 md:text-[56px] lg:text-[64px]">
            Where it happens.
          </h2>
        </FadeIn>

        {/* Irregular magazine-style layout */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[280px_200px_200px] md:gap-4 lg:grid-rows-[340px_240px_240px]">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.src} className={`relative overflow-hidden ${img.className}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 60vw"
                  className="editorial-image h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-14 md:mt-20">
            <Button href="/gallery">View Gallery</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
