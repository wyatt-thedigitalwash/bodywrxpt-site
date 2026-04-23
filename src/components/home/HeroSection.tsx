"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/Button";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const fade = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2, delay, ease } };

  return (
    <section
      data-bg="charcoal"
      className="relative flex min-h-[600px] flex-col bg-bg pb-24 md:min-h-[700px] md:pb-40"
      style={{ minHeight: "100svh" }}
      aria-label="Introduction"
    >
      {/* Mobile portrait -- top */}
      <div className="relative h-[60svh] w-full shrink-0 overflow-hidden md:hidden">
        <Image
          src="/images/dr-mancuso-portrait.webp"
          alt="Dr. Alexandra Mancuso, physical therapist and founder of BodyWRX, in the Tampa practice."
          width={961}
          height={1387}
          priority
          sizes="100vw"
          className="editorial-image h-full w-full object-cover object-top"
        />
        {/* Gradient fade into content below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Desktop layout: text left, portrait right */}
      <div className="relative flex flex-1 md:flex-none md:h-[100svh]">
        {/* Text content -- left 55% */}
        <div className="flex w-full flex-col justify-start px-6 pt-6 pb-10 md:flex-1 md:w-[55%] md:items-start md:justify-center md:pt-[88px] md:pb-0 md:pl-10 lg:pl-20 xl:pl-28">
          <div className="mx-auto w-full max-w-[1400px] md:mx-0">
            <motion.span
              {...fade(0.2)}
              className="mb-4 block text-[13px] font-normal uppercase tracking-[0.14em] text-accent md:mb-8 md:text-[14px]"
            >
              Concierge Physical Therapy &mdash; Tampa, FL
            </motion.span>

            <motion.h1
              {...fade(0.5)}
              className="font-display text-[36px] leading-[1.05] tracking-[0.04em] text-text md:max-w-[65vw] md:text-[72px] md:tracking-[0.05em] lg:text-[90px]"
            >
              Where recovery
              <br />
              meets performance.
            </motion.h1>

            <motion.p
              {...fade(0.8)}
              className="mt-4 max-w-[420px] text-[16px] font-light leading-[1.7] tracking-[0.01em] text-text/85 md:mt-8 md:text-[17px]"
            >
              One-on-one physical therapy, tailored to your body and your goals.
            </motion.p>

            <motion.div {...fade(1.0)} className="mt-8 md:mt-10">
              <Button href="/contact">Book a Session</Button>
            </motion.div>
          </div>
        </div>

        {/* Portrait -- right 45%, desktop only */}
        <div className="relative hidden w-[45%] overflow-hidden md:block">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, delay: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src="/images/dr-mancuso-portrait.webp"
              alt="Dr. Alexandra Mancuso, physical therapist and founder of BodyWRX, in the Tampa practice."
              width={961}
              height={1387}
              priority
              sizes="45vw"
              className="editorial-image h-full w-full object-cover object-top"
            />
          </motion.div>
          {/* Gradient blend from charcoal into portrait */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent lg:w-40" />
        </div>
      </div>
    </section>
  );
}
