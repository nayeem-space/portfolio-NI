"use client";

import { useState, type FormEvent } from "react";
import { HiArrowRight } from "react-icons/hi";

const field =
  "block min-h-12 w-full rounded-lg border border-line bg-card px-3 py-2.5 text-base text-ink outline-offset-2 focus-visible:outline-accent";

export function ContactForm({ email }: { email: string }) {
  const [draftOpened, setDraftOpened] = useState(false);

  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  }

  return (
    <form
      onSubmit={openDraft}
      className="flex min-w-0 flex-col items-start gap-4"
    >
      <div className="grid w-full gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm font-semibold">
          Name
          <input autoComplete="name" name="name" required className={field} />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-semibold">
          Email
          <input
            autoComplete="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </label>
      </div>
      <label className="grid w-full gap-2 text-sm font-semibold">
        Message
        <textarea
          name="message"
          required
          className={`${field} min-h-32 resize-y`}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
      >
        Open email draft <HiArrowRight aria-hidden="true" className="size-4" />
      </button>
      <p role="status" className="text-sm text-muted">
        {draftOpened ? (
          <>
            Send the draft from your email app, or{" "}
            <a
              href={`mailto:${email}`}
              className="font-semibold text-accent-text underline"
            >
              email me directly
            </a>
            .
          </>
        ) : (
          "Review and send the draft from your email app."
        )}
      </p>
    </form>
  );
}
