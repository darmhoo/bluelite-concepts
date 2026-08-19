import type { Metadata } from "next";
import ProductCta from "@/components/ProductCta";
import { Droplets, Recycle, Layers, Factory, Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "PET Shredding — Bluelite Concept LTD",
  description:
    "Mechanical shredding of PET bottles into smaller, uniform pieces suitable for further processing, washing and flake production.",
};

const applications = [
  { icon: Droplets, label: "Further washing" },
  { icon: Recycle, label: "Recycling" },
  { icon: Layers, label: "Flake production" },
  { icon: Factory, label: "Industrial processing" },
  { icon: Cog, label: "Manufacturing applications" },
];

export default function PetShreddingPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-SHR
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            PET Shredding
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            Bluelite Concept provides PET shredding services where
            collected PET bottles are mechanically reduced into smaller,
            uniform pieces suitable for further processing. Shredding can
            be carried out according to the intended processing
            requirements of the customer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold text-navy">
          Applications
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/60">
          Shredded PET can be supplied for:
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {applications.map((a) => (
            <div key={a.label} className="spec-tag px-5 py-6 text-center">
              <a.icon className="mx-auto h-6 w-6 text-emerald" strokeWidth={1.75} />
              <p className="mt-3 text-sm font-medium text-navy">{a.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-navy/60">
          Our shredding operations are supported by experienced processing
          partners and are designed to improve material handling and
          prepare PET bottles for subsequent processing.
        </p>
      </section>

      <ProductCta body="Tell us the shredded PET specification and volume you need, and we'll confirm what's available." />
    </>
  );
}
