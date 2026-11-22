"use client";

import { useSyncExternalStore } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const themeChange = "portfolio-theme-change";

function subscribe(onChange: () => void) {
  document.addEventListener(themeChange, onChange);
  return () => document.removeEventListener(themeChange, onChange);
}

export function ThemeSwitch() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );

  function toggleTheme() {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.dispatchEvent(new Event(themeChange));
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The current page can still switch themes when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-label="Dark mode"
      aria-checked={dark}
      onClick={toggleTheme}
      className="grid h-11 w-[4.75rem] shrink-0 cursor-pointer grid-cols-2 place-items-center rounded-full bg-[#f4f8fb] p-1 text-[#526579] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-checked:bg-[#0b1020] aria-checked:text-[#a9b8ce]"
    >
      <span
        className={`grid size-full place-items-center rounded-full ${dark ? "" : "bg-[#dce5ed] text-[#0b1624]"}`}
      >
        <HiOutlineSun aria-hidden="true" className="size-5" />
      </span>
      <span
        className={`grid size-full place-items-center rounded-full ${dark ? "bg-[#2c3550] text-white" : ""}`}
      >
        <HiOutlineMoon aria-hidden="true" className="size-5" />
      </span>
    </button>
  );
}
