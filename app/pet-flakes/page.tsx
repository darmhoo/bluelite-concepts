import type { Metadata } from "next";
import ProductCta from "@/components/ProductCta";

export const metadata: Metadata = {
  title: "PET Flakes — Bluelite Concept LTD",
  description:
    "Recycled PET flakes in Clear, Green, Blue and Mixed colours and processing grades, supplied according to customer specifications.",
};

const flakes = [
  {
    code: "PET-FLK-CLR",
    title: "Clear (White) PET Flakes",
    description: "Clean, transparent PET flakes suitable for a range of recycling and manufacturing applications.",
    applications: "Bottle recycling, polyester fibre, packaging, sheets and other industrial applications.",
  },
  {
    code: "PET-FLK-GRN",
    title: "Green PET Flakes",
    description: "Processed green PET flakes suitable for applications where colour consistency requirements allow green recycled material.",
    applications: "Fibre, strapping, sheets and non-food applications.",
  },
  {
    code: "PET-FLK-BLU",
    title: "Blue PET Flakes",
    description: "Processed blue PET flakes suitable for various industrial recycling applications.",
    applications: "Fibre, sheets, industrial strapping and other manufacturing applications.",
  },
  {
    code: "PET-FLK-MIX",
    title: "Mixed PET Flakes",
    description: "Mixed-colour PET flakes supplied for applications where colour separation is less critical.",
    applications: "Fibre, industrial products and other recycling applications.",
  },
];

export default function PetFlakesPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-FLK
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Recycled PET Flakes
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            We supply recycled PET flakes in different colours and
            processing grades according to customer specifications and
            intended applications.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6">
          {flakes.map((f) => (
            <div key={f.code} className="spec-tag px-8 py-7 sm:flex sm:items-start sm:justify-between sm:gap-8">
              <div className="sm:flex-1">
                <span className="batch-code text-xs text-navy/40">{f.code}</span>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                  {f.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {f.description}
                </p>
              </div>
              <div className="mt-4 border-t border-dashed border-grey-dark pt-4 sm:mt-0 sm:w-64 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald">
                  Applications
                </p>
                <p className="mt-2 text-sm text-navy/60">{f.applications}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-grey-dark bg-grey px-8 py-6">
          <p className="text-sm font-medium text-navy">Packaging</p>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">
            Depending on customer requirements, flakes can be supplied in
            bulk bags or other agreed packaging formats.
          </p>
        </div>
      </section>

      <ProductCta
        title="Request PET Flakes"
        body="Let us know the colour, washing grade and quantity you need, and where it's shipping to."
      />
    </>
  );
}
