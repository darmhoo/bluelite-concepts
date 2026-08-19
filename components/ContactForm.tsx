"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("submitted");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "submitted") {
    return (
      <div className="spec-tag px-8 py-10 text-center">
        <h3 className="font-display text-xl font-semibold text-navy">
          Message sent
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-navy/60">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="spec-tag px-8 py-8">
      <label className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-5">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-navy/80">Name</span>
          <input
            required
            type="text"
            name="name"
            className="rounded-sm border border-grey-dark bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-emerald focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-navy/80">Email</span>
          <input
            required
            type="email"
            name="email"
            className="rounded-sm border border-grey-dark bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-emerald focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-navy/80">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="resize-none rounded-sm border border-grey-dark bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-emerald focus:outline-none"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-sm bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
