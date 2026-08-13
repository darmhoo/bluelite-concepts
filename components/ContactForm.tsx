"use client";

import { useState, FormEvent } from "react";

const services = [
  "Everyday wear",
  "Tailoring & formalwear",
  "Occasion & delicate",
  "Home & repairs",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="ticket ticket-perf px-8 py-10 text-center">
        <p className="ticket-number text-xs text-steam-dark">
          Ticket queued — BLC-PENDING
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          Request received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          We'll text or email you a confirmed pickup window within one
          business hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ticket ticket-perf px-8 py-8">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-ink">
          Request a pickup
        </span>
        <span className="ticket-number text-xs text-steam-dark">
          BLC-NEW
        </span>
      </div>
      <div className="crease my-5" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink/80">Name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Your full name"
            className="rounded-sm border border-steam bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-blue focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink/80">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            placeholder="080X XXX XXXX"
            className="rounded-sm border border-steam bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-blue focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink/80">Email</span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="rounded-sm border border-steam bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-blue focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink/80">What needs cleaning</span>
          <select
            name="service"
            defaultValue={services[services.length - 1]}
            className="rounded-sm border border-steam bg-paper px-3 py-2.5 text-sm text-ink focus:border-blue focus:outline-none"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink/80">
            Pickup address & notes
          </span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Address, preferred pickup window, and any items that need special care"
            className="resize-none rounded-sm border border-steam bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-blue focus:outline-none"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-blue py-3 text-sm font-semibold text-chalk transition-colors hover:bg-blue-dark"
      >
        Submit pickup request
      </button>
      <p className="mt-3 text-center text-xs text-steam-dark">
        No payment required now — you'll get a quoted ticket at pickup.
      </p>
    </form>
  );
}
