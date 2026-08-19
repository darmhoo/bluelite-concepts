import type { Metadata } from "next";
import SpecTag from "@/components/SpecTag";
import ProductCta from "@/components/ProductCta";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PET Bottles — Bluelite Concept LTD",
  description:
    "Post-consumer PET bottles sourced from collection points, waste collectors, aggregators and commercial suppliers across Nigeria.",
};

const materials = [
  { code: "PET-BTL-CLR", title: "Clear PET Bottles", description: "Sorted transparent PET bottles suitable for recycling and further processing." },
  { code: "PET-BTL-GRN", title: "Green PET Bottles", description: "Sorted green PET bottles collected from post-consumer sources." },
  { code: "PET-BTL-BLU", title: "Blue PET Bottles", description: "Sorted blue PET bottles suitable for recycling applications." },
  { code: "PET-BTL-MIX", title: "Mixed PET Bottles", description: "Mixed-colour PET bottles available according to customer requirements." },
];

const process = ["Collection", "Aggregation", "Sorting", "Quality Inspection", "Packaging", "Delivery"];

export default function PetBottlesPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-BTL
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            PET Bottles
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            We source post-consumer PET bottles from collection points,
            waste collectors, aggregators and commercial suppliers across
            Nigeria. Our PET bottle supply is available for customers
            seeking recyclable feedstock for further processing and
            manufacturing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold text-navy">
          Available materials
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m) => (
            <SpecTag key={m.code} {...m} />
          ))}
        </div>
      </section>

      <section className="border-t border-grey-dark bg-grey">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center font-display text-2xl font-bold text-navy">
            Our process
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {process.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-sm border border-grey-dark bg-white px-4 py-2 text-sm font-medium text-navy">
                  {step}
                </span>
                {i < process.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-navy/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductCta body="Tell us the colour, quantity and destination port for your PET bottle requirement, and our team will get back to you with available supply options." />
    </>
  );
}
