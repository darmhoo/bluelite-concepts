import type { Metadata } from "next";
import ProcessFlow from "@/components/ProcessFlow";
import ProductCta from "@/components/ProductCta";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FlaskConical, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ourProcess from "@/public/images/our_process.jpeg"
import labAnalysis from "@/public/images/lab_analysis.jpg"

export const metadata: Metadata = {
  title: "Our Process — Bluelite Concept LTD",
  description:
    "From collection to global supply: how Bluelite Concept LTD collects, sorts, processes and exports recycled PET materials, and how quality is controlled throughout.",
};

const qcAreas = [
  "Colour separation",
  "Contamination control",
  "PVC and other plastic contamination",
  "Metal removal",
  "Moisture control",
  "Flake consistency",
  "Packaging",
  "Batch inspection",
];

export default function OurProcessPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            From collection to global supply
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Our Process
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            Our operations connect PET collection, processing and export
            logistics through an integrated supply network.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Image
        src={ourProcess}
        alt="Our Process"
          className="mb-14 aspect-[21/9]"
        />
        <ProcessFlow />
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="border-t border-grey-dark bg-grey">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <FlaskConical className="h-7 w-7 text-emerald" strokeWidth={1.75} />
          <h2 className="mt-4 font-display text-3xl font-bold text-navy">
            Quality Assurance
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/60">
            Quality and consistency are important throughout our PET supply
            chain. We work with processing partners and suppliers to
            control material quality from collection through processing and
            final shipment.
          </p>

          <p className="mt-8 text-sm font-medium text-navy">
            Quality control areas
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {qcAreas.map((area) => (
              <div
                key={area}
                className="flex items-start gap-2 rounded-sm border border-grey-dark bg-white px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                <span className="text-sm text-navy/70">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center rounded-sm border border-grey-dark bg-white px-8 py-6">
            <div>
              <p className="text-sm font-medium text-navy">Lab analysis</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Where required by the customer, laboratory analysis and
                third-party inspection can be arranged to verify agreed
                product specifications before shipment.
              </p>
            </div>
            <Image
              src={labAnalysis}
              alt="Photo: lab / quality inspection"
              className="sm:w-40 aspect-square"
            />
          </div>
        </div>
      </section>

      <ProductCta body="Ask about our process and quality control for a specific product or grade, and get a quote back with your requirements." />
    </>
  );
}
