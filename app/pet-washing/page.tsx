import type { Metadata } from "next";
import ProductCta from "@/components/ProductCta";
import { Thermometer, ThermometerSun, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "PET Washing — Bluelite Concept LTD",
  description:
    "Cold, warm and hot washing options for PET flakes, depending on customer specifications and intended end use.",
};

const washes = [
  {
    icon: Thermometer,
    code: "PET-WSH-CLD",
    title: "Cold Washing",
    description:
      "Uses water and appropriate cleaning processes to remove dirt, dust, beverage residues and other surface contaminants.",
  },
  {
    icon: ThermometerSun,
    code: "PET-WSH-WRM",
    title: "Warm Washing",
    description:
      "Provides enhanced cleaning compared with cold washing and can assist in removing more difficult residues and contaminants.",
  },
  {
    icon: Flame,
    code: "PET-WSH-HOT",
    title: "Hot Washing",
    description:
      "A more intensive cleaning process designed to improve the purity of PET flakes by helping remove adhesives, labels, oils and other contaminants.",
  },
];

export default function PetWashingPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-WSH
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            PET Washing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            We offer different PET washing options depending on the
            customer&apos;s specifications and intended end use.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {washes.map((w) => (
            <div key={w.code} className="spec-tag px-8 py-8">
              <w.icon className="h-7 w-7 text-emerald" strokeWidth={1.75} />
              <span className="batch-code mt-4 block text-xs text-navy/40">
                {w.code}
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                {w.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                {w.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-grey-dark bg-grey px-8 py-6">
          <p className="text-sm font-medium text-navy">Important</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">
            Washing method and final product specifications are agreed
            according to customer requirements.
          </p>
        </div>

        <div className="mt-6 rounded-sm border border-grey-dark px-8 py-6">
          <p className="text-sm font-medium text-navy">Quality</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">
            Our processing partners apply sorting, washing, rinsing, drying
            and quality-control procedures to prepare PET flakes for their
            intended applications.
          </p>
        </div>
      </section>

      <ProductCta
        title="Request Washed PET Flakes"
        body="Specify cold, warm or hot washing and your target quantity — we'll confirm availability and lead time."
      />
    </>
  );
}
