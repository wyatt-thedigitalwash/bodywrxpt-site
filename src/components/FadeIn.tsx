"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : inView
            ? { opacity: 1 }
            : { opacity: 0 }
      }
      transition={prefersReducedMotion ? { duration: 0 } : { duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
