import type { ReactNode } from "react";
import { ExperienceTrack } from "./experience-track";
import { MotionEntrance } from "./motion-entrance";
import { Heading, Section } from "./section";

export function Timeline({
  id,
  title,
  children,
}: {
  id: "experience" | "education";
  title: string;
  children: ReactNode;
}) {
  const entries = (
    <ol className="border-l border-line pl-6 sm:pl-8">{children}</ol>
  );

  return (
    <Section id={id}>
      <div className="grid gap-8">
        <Heading section={id}>{title}</Heading>
        {id === "experience" ? (
          <ExperienceTrack>{entries}</ExperienceTrack>
        ) : (
          <div className="ml-2 lg:ml-56">{entries}</div>
        )}
      </div>
    </Section>
  );
}

export function TimelineEntry({
  featured,
  children,
}: {
  featured: boolean;
  children: ReactNode;
}) {
  return (
    <MotionEntrance
      as="li"
      entrance="timeline"
      revealOnScroll
      className="relative pb-5 last:pb-0"
    >
      <span
        aria-hidden="true"
        className={`absolute top-6 -left-[1.875rem] size-3 rounded-full border-2 border-surface sm:-left-[2.375rem] ${featured ? "bg-accent" : "bg-muted"}`}
      />
      {children}
    </MotionEntrance>
  );
}

export function TimelineMeta({
  dates,
  location,
}: {
  dates: string;
  location: string;
}) {
  return (
    <span className="grid gap-1 text-muted lg:absolute lg:top-4 lg:right-[calc(100%+3.25rem)] lg:w-48 lg:text-right">
      <span className="text-base font-semibold tabular-nums lg:text-lg lg:leading-7 lg:whitespace-nowrap">
        {dates}
      </span>
      <span className="text-sm">{location}</span>
    </span>
  );
}
