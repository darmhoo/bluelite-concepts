import type { Metadata } from "next";
import { ArrowRight, Thermometer, ThermometerSun, Flame, Droplets, Recycle, Layers, Factory, Cog } from "lucide-react";
import SpecTag from "@/components/SpecTag";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProductCta from "@/components/ProductCta";

export const metadata: Metadata = {
  title: "Services — Bluelite Concept LTD",
  description:
    "PET bottles, PET flakes, PET shredding and PET washing — all of Bluelite Concept LTD's recycled PET materials and processing services on one page.",
};

const subNav = [
  { id: "pet-bottles", label: "PET Bottles" },
  { id: "pet-flakes", label: "PET Flakes" },
  { id: "pet-shredding", label: "PET Shredding" },
  { id: "pet-washing", label: "PET Washing" },
];

const bottleMaterials = [
  { code: "PET-BTL-CLR", title: "Clear PET Bottles", description: "Sorted transparent PET bottles suitable for recycling and further processing.", image: "Photo: baled clear PET bottles" },
  { code: "PET-BTL-GRN", title: "Green PET Bottles", description: "Sorted green PET bottles collected from post-consumer sources.", image: "Photo: baled green PET bottles" },
  { code: "PET-BTL-BLU", title: "Blue PET Bottles", description: "Sorted blue PET bottles suitable for recycling applications.", image: "Photo: baled blue PET bottles" },
  { code: "PET-BTL-MIX", title: "Mixed PET Bottles", description: "Mixed-colour PET bottles available according to customer requirements.", image: "Photo: mixed-colour PET bottle bale" },
];

const bottleProcess = ["Collection", "Aggregation", "Sorting", "Quality Inspection", "Packaging", "Delivery"];

const flakes = [
  { code: "PET-FLK-CLR", title: "Clear (White) PET Flakes", description: "Clean, transparent PET flakes suitable for a range of recycling and manufacturing applications.", applications: "Bottle recycling, polyester fibre, packaging, sheets and other industrial applications.", image: "Photo: clear PET flakes sample" },
  { code: "PET-FLK-GRN", title: "Green PET Flakes", description: "Processed green PET flakes suitable for applications where colour consistency requirements allow green recycled material.", applications: "Fibre, strapping, sheets and non-food applications.", image: "Photo: green PET flakes sample" },
  { code: "PET-FLK-BLU", title: "Blue PET Flakes", description: "Processed blue PET flakes suitable for various industrial recycling applications.", applications: "Fibre, sheets, industrial strapping and other manufacturing applications.", image: "Photo: blue PET flakes sample" },
  { code: "PET-FLK-MIX", title: "Mixed PET Flakes", description: "Mixed-colour PET flakes supplied for applications where colour separation is less critical.", applications: "Fibre, industrial products and other recycling applications.", image: "Photo: mixed PET flakes sample" },
];

const shreddingApplications = [
  { icon: Droplets, label: "Further washing" },
  { icon: Recycle, label: "Recycling" },
  { icon: Layers, label: "Flake production" },
  { icon: Factory, label: "Industrial processing" },
  { icon: Cog, label: "Manufacturing applications" },
];

const washes = [
  { icon: Thermometer, code: "PET-WSH-CLD", title: "Cold Washing", description: "Uses water and appropriate cleaning processes to remove dirt, dust, beverage residues and other surface contaminants." },
  { icon: ThermometerSun, code: "PET-WSH-WRM", title: "Warm Washing", description: "Provides enhanced cleaning compared with cold washing and can assist in removing more difficult residues and contaminants." },
  { icon: Flame, code: "PET-WSH-HOT", title: "Hot Washing", description: "A more intensive cleaning process designed to improve the purity of PET flakes by helping remove adhesives, labels, oils and other contaminants." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            What we supply
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            PET bottles, PET flakes, PET shredding and PET washing — all on
            one page. Jump to the section you need.
          </p>
        </div>
      </section>

      {/* SUB NAV */}
      <div className="sticky top-[113px] z-40 border-b border-grey-dark bg-white/95 backdrop-blur md:top-[73px]">
        <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-6 py-3">
          {subNav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium text-navy/60 transition-colors hover:text-emerald"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      {/* PET BOTTLES */}
      <section id="pet-bottles" className="scroll-mt-40 border-b border-grey-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-BTL
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            PET Bottles
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/60">
            We source post-consumer PET bottles from collection points,
            waste collectors, aggregators and commercial suppliers across
            Nigeria. Our PET bottle supply is available for customers
            seeking recyclable feedstock for further processing and
            manufacturing.
          </p>

          <h3 className="mt-10 font-display text-lg font-semibold text-navy">
            Available materials
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bottleMaterials.map((m) => (
              <SpecTag key={m.code} {...m} />
            ))}
          </div>

          <h3 className="mt-12 font-display text-lg font-semibold text-navy">
            Our process
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {bottleProcess.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-sm border border-grey-dark bg-grey px-4 py-2 text-sm font-medium text-navy">
                  {step}
                </span>
                {i < bottleProcess.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-navy/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PET FLAKES */}
      <section id="pet-flakes" className="scroll-mt-40 border-b border-grey-dark bg-grey">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-FLK
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            Recycled PET Flakes
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/60">
            We supply recycled PET flakes in different colours and
            processing grades according to customer specifications and
            intended applications.
          </p>

          <div className="mt-10 space-y-6">
            {flakes.map((f) => (
              <div key={f.code} className="spec-tag bg-white px-8 py-7 sm:flex sm:items-start sm:gap-8">
                <ImagePlaceholder
                  label={f.image}
                  aspect="aspect-square"
                  className="mb-4 w-full shrink-0 sm:mb-0 sm:w-36"
                />
                <div className="sm:flex-1">
                  <span className="batch-code text-xs text-navy/40">{f.code}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {f.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-dashed border-grey-dark pt-4 sm:mt-0 sm:w-56 sm:shrink-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald">
                    Applications
                  </p>
                  <p className="mt-2 text-sm text-navy/60">{f.applications}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-grey-dark bg-white px-8 py-6">
            <p className="text-sm font-medium text-navy">Packaging</p>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">
              Depending on customer requirements, flakes can be supplied in
              bulk bags or other agreed packaging formats.
            </p>
          </div>
        </div>
      </section>

      {/* PET SHREDDING */}
      <section id="pet-shredding" className="scroll-mt-40 border-b border-grey-dark">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-SHR
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            PET Shredding
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <p className="text-sm leading-relaxed text-navy/60">
              Bluelite Concept provides PET shredding services where
              collected PET bottles are mechanically reduced into smaller,
              uniform pieces suitable for further processing. Shredding can
              be carried out according to the intended processing
              requirements of the customer. Our shredding operations are
              supported by experienced processing partners and are designed
              to improve material handling and prepare PET bottles for
              subsequent processing.
            </p>
            <ImagePlaceholder label="Photo: PET shredding line / shredded PET output" aspect="aspect-video" />
          </div>

          <h3 className="mt-10 font-display text-lg font-semibold text-navy">
            Applications
          </h3>
          <p className="mt-2 text-sm text-navy/60">Shredded PET can be supplied for:</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {shreddingApplications.map((a) => (
              <div key={a.label} className="spec-tag px-5 py-6 text-center">
                <a.icon className="mx-auto h-6 w-6 text-emerald" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-medium text-navy">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PET WASHING */}
      <section id="pet-washing" className="scroll-mt-40 bg-grey">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Product — PET-WSH
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            PET Washing
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/60">
            We offer different PET washing options depending on the
            customer&apos;s specifications and intended end use.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {washes.map((w) => (
              <div key={w.code} className="spec-tag bg-white px-8 py-8">
                <w.icon className="h-7 w-7 text-emerald" strokeWidth={1.75} />
                <span className="batch-code mt-4 block text-xs text-navy/40">
                  {w.code}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {w.description}
                </p>
              </div>
            ))}
          </div>

          <ImagePlaceholder
            label="Photo: washing / drying equipment"
            aspect="aspect-[21/9]"
            className="mt-8"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-grey-dark bg-white px-8 py-6">
              <p className="text-sm font-medium text-navy">Important</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Washing method and final product specifications are agreed
                according to customer requirements.
              </p>
            </div>
            <div className="rounded-sm border border-grey-dark bg-white px-8 py-6">
              <p className="text-sm font-medium text-navy">Quality</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Our processing partners apply sorting, washing, rinsing,
                drying and quality-control procedures to prepare PET flakes
                for their intended applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductCta body="Tell us which product, colour, washing grade and quantity you need, and we'll confirm what's available." />
    </>
  );
}
