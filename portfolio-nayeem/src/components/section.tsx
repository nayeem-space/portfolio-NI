import type { ReactNode } from "react";
import { MotionEntrance } from "./motion-entrance";
import { sections, type SectionId } from "./sections";

export function Section({
  id,
  children,
}: {
  id: SectionId;
  children: ReactNode;
}) {
  const background =
    id === "home"
      ? "bg-on-accent bg-[radial-gradient(ellipse_at_82%_35%,#17324a,transparent_60%)]"
      : sections.findIndex((section) => section.id === id) % 2 === 1
        ? "bg-surface"
        : "bg-paper";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-4 sm:px-8 lg:px-20 ${id === "home" ? "overflow-x-clip pt-28 pb-12 sm:pt-32 lg:flex lg:min-h-svh lg:items-center lg:pt-28" : "scroll-mt-navbar border-t border-line/60 py-12 sm:py-16"} ${background}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Heading({
  section,
  children,
}: {
  section: SectionId;
  children: ReactNode;
}) {
  return (
    <MotionEntrance className="border-b border-line pb-4" revealOnScroll>
      <h2
        id={`${section}-title`}
        className={`font-sans text-4xl leading-tight font-bold tracking-tight sm:text-5xl ${section === "contact" ? "text-accent-hover" : "text-heading"}`}
      >
        {children}
      </h2>
    </MotionEntrance>
  );
}
