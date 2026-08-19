import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote — Bluelite Concept LTD",
  description:
    "Request a quote for PET bottles, shredded PET, or cold, warm and hot-washed PET flakes from Bluelite Concept LTD.",
};

export default function QuotePage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Request for Quote
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Tell us what you need
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60">
            Whether you are looking for PET bottles, shredded PET,
            cold-washed flakes, warm-washed flakes or hot-washed PET flakes,
            our team can discuss your requirements and available supply
            options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <QuoteForm />
      </section>
    </>
  );
}
