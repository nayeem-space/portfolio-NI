"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import type { Project } from "@/content/portfolio";
import { MotionEntrance } from "./motion-entrance";

export function Projects({
  projects,
  featuredSlug,
}: {
  projects: readonly Project[];
  featuredSlug: string;
}) {
  const reduceMotion = useReducedMotion();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = [...new Set(projects.flatMap((project) => project.tags))];
  const visible =
    activeTag === null
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <>
      <MotionEntrance
        aria-label="Filter projects"
        revealOnScroll
        delay={0.06}
        className="mt-6 flex flex-wrap gap-2"
      >
        {[null, ...tags].map((tag) => (
          <button
            key={tag ?? "all-projects"}
            type="button"
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(tag)}
            className="min-h-11 cursor-pointer rounded-lg bg-card px-4 py-2 text-sm font-extrabold transition-colors hover:bg-accent hover:text-on-accent aria-pressed:bg-accent aria-pressed:text-on-accent"
          >
            {tag ?? "All"}
          </button>
        ))}
      </MotionEntrance>
      <MotionEntrance
        entrance="lift"
        delay={0.12}
        revealOnScroll
        className="relative mt-5 grid gap-4 sm:grid-cols-2 sm:gap-6"
      >
        <AnimatePresence
          initial={false}
          mode={reduceMotion ? "sync" : "popLayout"}
        >
          {visible.map((project) => {
            const featured =
              activeTag === null && project.slug === featuredSlug;
            return (
              <motion.article
                key={featured ? `${project.id}-featured` : project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                layout={reduceMotion ? false : "position"}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                  ease: "easeOut",
                  layout: { type: "spring", stiffness: 320, damping: 34 },
                }}
                className={`flex min-w-0 flex-col gap-4 rounded-2xl border p-4 shadow-sm sm:p-5 ${featured ? "border-navy bg-navy text-on-navy sm:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-8" : "border-line bg-surface"}`}
              >
                <Image
                  {...project.image}
                  alt={project.image.alt}
                  sizes={
                    featured
                      ? "(min-width: 1312px) 539px, (min-width: 1024px) calc((100vw - 234px) / 2), (min-width: 768px) calc((100vw - 138px) / 2), (min-width: 640px) calc(100vw - 106px), calc(100vw - 66px)"
                      : "(min-width: 1312px) 522px, (min-width: 1024px) calc((100vw - 268px) / 2), (min-width: 640px) calc((100vw - 172px) / 2), calc(100vw - 66px)"
                  }
                  className={`aspect-[16/10] w-full rounded-lg object-contain ${featured ? "bg-on-accent" : "bg-paper"}`}
                />
                <div
                  className={`flex flex-1 flex-col ${featured ? "md:pr-3" : ""}`}
                >
                  <p
                    className={`mb-2 text-sm font-semibold ${featured ? "text-accent-hover" : "text-accent-text"}`}
                  >
                    {project.tags[0]}
                  </p>
                  <h3
                    className={`leading-snug font-extrabold ${featured ? "font-sans text-3xl md:text-4xl" : "text-xl"}`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className={
                        featured
                          ? "hover:text-accent-hover"
                          : "hover:text-accent-text hover:underline"
                      }
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed ${featured ? "text-base text-on-navy/85" : "text-sm text-muted"}`}
                  >
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {featured && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-bold text-on-accent transition-colors hover:bg-accent-hover"
                      >
                        View case study <HiArrowRight aria-hidden="true" />
                      </Link>
                    )}
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-paper px-3 text-sm font-semibold text-accent-text transition-colors hover:bg-accent hover:text-on-accent"
                    >
                      <AiFillGithub className="size-5" aria-hidden="true" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </MotionEntrance>
    </>
  );
}
