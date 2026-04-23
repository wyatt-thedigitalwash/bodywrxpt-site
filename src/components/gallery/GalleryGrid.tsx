"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const IMAGES = [
  {
    id: 1,
    src: "/images/training-deadlift.webp",
    alt: "Client performing a barbell deadlift as part of a strength and conditioning session at BodyWRX.",
    width: 2400,
    height: 1800,
    span: "col-span-2 md:col-span-6 aspect-[16/9]",
  },
  {
    id: 2,
    src: "/images/treatment-cupping-outdoor.webp",
    alt: "Dr. Mancuso performing cupping therapy on a client's back in an outdoor setting.",
    width: 2400,
    height: 1800,
    span: "col-span-1 md:col-span-3 aspect-[3/4]",
  },
  {
    id: 3,
    src: "/images/treatment-cupping-applied.webp",
    alt: "Cupping therapy cups applied to a client's upper back during treatment at BodyWRX.",
    width: 2400,
    height: 1800,
    span: "col-span-1 md:col-span-3 aspect-[3/4]",
  },
  {
    id: 4,
    src: "/images/treatment-graston.webp",
    alt: "Dr. Mancuso using the Graston Technique on a client's shoulder during a treatment session.",
    width: 1043,
    height: 2400,
    span: "col-span-1 md:col-span-2 aspect-[2/3]",
  },
  {
    id: 5,
    src: "/images/training-dumbbell-press.webp",
    alt: "Client performing a dumbbell press with kinesio tape during corrective training at BodyWRX.",
    width: 2400,
    height: 1800,
    span: "col-span-1 md:col-span-4 aspect-[3/2]",
  },
  {
    id: 6,
    src: "/images/treatment-glute-bridge.webp",
    alt: "Dr. Mancuso guiding a client through a banded glute bridge exercise during rehabilitation.",
    width: 1800,
    height: 1800,
    span: "col-span-1 md:col-span-3 aspect-[3/4] md:row-span-2",
  },
  {
    id: 7,
    src: "/images/treatment-hamstring-stretch.webp",
    alt: "Hamstring mobility stretch during a physical therapy session at BodyWRX in Tampa.",
    width: 1800,
    height: 1800,
    span: "col-span-1 md:col-span-3 aspect-[3/4] md:row-span-2",
  },
  {
    id: 8,
    src: "/images/treatment-cupping-marks.webp",
    alt: "Post-cupping therapy marks on a client's back showing the treatment pattern at BodyWRX.",
    width: 2400,
    height: 1800,
    span: "col-span-1 md:col-span-2 aspect-square",
  },
  {
    id: 9,
    src: "/images/training-overhead-reach.webp",
    alt: "Client performing an overhead reach exercise in the BodyWRX treatment room.",
    width: 2400,
    height: 1800,
    span: "col-span-2 md:col-span-4 aspect-[21/9]",
  },
  {
    id: 10,
    src: "/images/training-lat-pulldown.webp",
    alt: "Client on a lat pulldown machine with cupping marks visible, combining treatment and training at BodyWRX.",
    width: 1206,
    height: 1871,
    span: "col-span-1 md:col-span-2 aspect-[4/3]",
  },
  {
    id: 11,
    src: "/images/training-barbell-squat.webp",
    alt: "Client performing a barbell back squat during a corrective training session at BodyWRX.",
    width: 1206,
    height: 1773,
    span: "col-span-1 md:col-span-2 aspect-[4/3]",
  },
];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6 lg:gap-7">
        {IMAGES.map((img, i) => (
          <button
            key={img.id}
            data-gallery-image={img.id}
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${img.span}`}
            aria-label={`View image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading={i < 3 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="editorial-image h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-80"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={IMAGES}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((prev) =>
              prev !== null ? (prev - 1 + IMAGES.length) % IMAGES.length : 0
            )
          }
          onNext={() =>
            setActiveIndex((prev) =>
              prev !== null ? (prev + 1) % IMAGES.length : 0
            )
          }
        />
      )}
    </>
  );
}
