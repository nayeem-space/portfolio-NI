"use client";

import { motion, useScroll } from "motion/react";
import { useRef, type ReactNode } from "react";

export function ExperienceTrack({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 70%", "end 70%"],
  });

  return (
    <div ref={track} className="relative ml-2 lg:ml-56">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-px inset-y-0 w-0.5 origin-top bg-accent motion-reduce:hidden"
        style={{ scaleY: scrollYProgress }}
      />
      {children}
    </div>
  );
}
