"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { sections, type SectionId } from "./sections";
import { ThemeSwitch } from "./theme-switch";

export function Navbar() {
  const menu = useRef<HTMLDialogElement>(null);
  const isHome = usePathname() === "/";
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    if (!isHome) return;

    let frame = 0;
    function updateActiveSection() {
      const readingLine = Math.max(
        80,
        Math.min(160, window.innerHeight * 0.35),
      );
      const current = sections.findLast(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= readingLine;
      });
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      // Contact can reach the bottom before its top crosses the reading line.
      const atBottom = scrollHeight - scrollTop - clientHeight <= 2;
      setActive(atBottom ? "contact" : (current?.id ?? "home"));
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    const layout = new ResizeObserver(scheduleUpdate);
    layout.observe(document.body);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      layout.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isHome]);

  function currentLocation(id: SectionId) {
    return isHome && active === id ? "location" : undefined;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 h-navbar border-b border-white/15 bg-navy shadow-sm backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-full max-w-[96rem] items-center justify-between gap-2 px-4 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]"
        >
          <Link
            href="/#home"
            className="min-w-0 justify-self-start text-base font-semibold text-on-navy sm:text-xl lg:text-lg xl:text-xl"
          >
            &lt;/&gt; islam nayeemul
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  aria-current={currentLocation(id)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-on-navy/85 transition-colors hover:bg-white/10 hover:text-on-navy aria-[current=location]:bg-accent aria-[current=location]:text-on-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2 lg:justify-self-end">
            <ThemeSwitch />
            <button
              type="button"
              aria-label="Open navigation"
              aria-haspopup="dialog"
              onClick={() => menu.current?.showModal()}
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-white/25 text-on-navy hover:bg-white/10 lg:hidden"
            >
              <HiMenuAlt4 className="size-6" />
            </button>
          </div>
        </nav>
      </header>
      <dialog
        ref={menu}
        aria-labelledby="navigation-title"
        className="fixed inset-y-0 right-0 left-auto z-30 m-0 h-dvh max-h-none w-[min(22rem,90vw)] max-w-none overflow-y-auto overscroll-contain border-l border-line bg-surface p-5 shadow-xl backdrop:bg-on-accent/60 motion-safe:open:animate-drawer"
      >
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-4">
          <h2 id="navigation-title" className="text-lg font-bold">
            Navigation
          </h2>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => menu.current?.close()}
            className="grid size-11 cursor-pointer place-items-center rounded-xl border border-line text-ink hover:bg-paper"
          >
            <HiX className="size-6" />
          </button>
        </div>
        <ul className="grid gap-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                aria-current={currentLocation(id)}
                onClick={() => menu.current?.close()}
                className="flex min-h-11 items-center rounded-lg px-3 font-semibold text-muted hover:bg-paper hover:text-ink aria-[current=location]:bg-accent-soft aria-[current=location]:text-accent-text"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
      {isHome && (
        <nav
          aria-label="Section shortcuts"
          className="fixed top-1/2 right-3 z-10 hidden -translate-y-1/2 flex-col rounded-full border border-line bg-surface p-1 shadow-sm lg:flex wide:right-6"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1 left-1 size-10 rounded-full bg-accent-soft motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
            style={{
              transform: `translateY(${sections.findIndex(({ id }) => id === active) * 100}%)`,
            }}
          />
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={currentLocation(id)}
              className="group relative grid size-10 place-items-center rounded-full text-muted hover:text-accent-text aria-[current=location]:text-accent-text motion-safe:transition-colors"
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-current group-aria-[current=location]:scale-y-150 motion-safe:transition-transform motion-safe:duration-200"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-full mr-2 rounded-md border border-line bg-card px-3 py-1 text-sm font-semibold text-ink opacity-0 shadow-sm group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:transition-opacity"
              >
                {label}
              </span>
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
