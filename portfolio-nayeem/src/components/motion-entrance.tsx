"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, type ReactNode } from "react";

const entrances = {
  rise: { opacity: [0.35, 1], y: [24, 0] },
  lift: { opacity: [0.5, 1], y: [28, 0], scale: [0.97, 1] },
  timeline: { opacity: [0.5, 1], x: [-12, 0], y: [20, 0] },
  left: { opacity: [0.08, 1], x: [-80, 0], y: [24, 0], scale: [0.94, 1] },
  heroCopy: { opacity: [0.1, 1], y: [44, 0] },
  depth: { opacity: [0.1, 1], y: [56, 0], scale: [0.65, 1] },
};

export function MotionEntrance({
  as: Element = "div",
  delay = 0,
  entrance = "rise",
  revealOnScroll = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  as?: "div" | "li";
  delay?: number;
  entrance?: keyof typeof entrances;
  revealOnScroll?: boolean | "replay";
}) {
  const elementRef = useRef<HTMLElement>(null);
  const setNode = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);
  const reduceMotion = useReducedMotion();
  const inView = useInView(elementRef, {
    initial: !revealOnScroll,
    once: revealOnScroll !== "replay",
    margin: "0px 0px -56px 0px",
  });

  useEffect(() => {
    if (reduceMotion || !inView || !elementRef.current) return;

    const isHeroEntrance =
      entrance === "left" || entrance === "heroCopy" || entrance === "depth";
    const animation = animate(elementRef.current, entrances[entrance], {
      duration: isHeroEntrance ? 0.95 : 0.64,
      delay,
      ease: [0.22, 0.65, 0.32, 1],
    });

    return () => animation.cancel();
  }, [delay, entrance, inView, reduceMotion]);

  return <Element {...props} ref={setNode} />;
}
