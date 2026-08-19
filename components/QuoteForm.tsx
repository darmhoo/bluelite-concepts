"use client";

import { useState, FormEvent } from "react";

const products = ["PET Bottles", "PET Flakes", "PET Shredding (service)", "Not sure yet"];
const colours = ["Clear", "Green", "Blue", "Mixed", "Not applicable"];
const washingTypes = ["Cold Washing", "Warm Washing", "Hot Washing", "Not applicable"];
const shippingTerms = ["FOB", "CIF", "Not sure — please advise"];

type Status = "idle" | "submitting" | "submitted" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
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
        <span className="batch-code text-xs text-navy/40">RFQ-SENT</span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-navy/60">
          Thank you. Our team will review your requirements and respond by
          email with available supply options.
        </p>
      </div>
    );
  }

  const inputClass =
    "rounded-sm border border-grey-dark bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-emerald focus:outline-none";
  const labelClass = "flex flex-col gap-1.5 text-sm";
  const spanClass = "font-medium text-navy/80";

  return (
    <form onSubmit={handleSubmit} className="spec-tag px-8 py-8">
      {/* honeypot */}
      <label className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          <span className={spanClass}>Company Name *</span>
          <input required type="text" name="companyName" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Country *</span>
          <input required type="text" name="country" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Contact Person *</span>
          <input required type="text" name="contactPerson" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Email *</span>
          <input required type="email" name="email" className={inputClass} />
        </label>

        <label className={`${labelClass} sm:col-span-2`}>
          <span className={spanClass}>WhatsApp / Phone *</span>
          <input required type="tel" name="phone" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Product Required</span>
          <select name="product" defaultValue={products[3]} className={inputClass}>
            {products.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Colour</span>
          <select name="colour" defaultValue={colours[4]} className={inputClass}>
            {colours.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Washing Type</span>
          <select name="washingType" defaultValue={washingTypes[3]} className={inputClass}>
            {washingTypes.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Preferred Shipping Term</span>
          <select name="shippingTerm" defaultValue={shippingTerms[2]} className={inputClass}>
            {shippingTerms.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Quantity Required</span>
          <input type="text" name="quantity" placeholder="e.g. 20 tons" className={inputClass} />
        </label>

        <label className={labelClass}>
          <span className={spanClass}>Monthly Demand</span>
          <input type="text" name="monthlyDemand" placeholder="e.g. 80 tons/month" className={inputClass} />
        </label>

        <label className={`${labelClass} sm:col-span-2`}>
          <span className={spanClass}>Delivery Port</span>
          <input type="text" name="deliveryPort" placeholder="Destination port" className={inputClass} />
        </label>

        <label className={`${labelClass} sm:col-span-2`}>
          <span className={spanClass}>Additional Specifications</span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Moisture content, contamination tolerance, packaging preferences, target price, etc."
            className={`${inputClass} resize-none`}
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
        className="mt-6 w-full rounded-sm bg-emerald py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
