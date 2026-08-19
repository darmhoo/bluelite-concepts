import type { Metadata } from "next";
import { Target, Compass, Globe2, Users, Leaf } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Us — Bluelite Concept LTD",
  description:
    "Bluelite Concept LTD is a Nigerian recycling and export company specializing in the collection, processing and international supply of recycled PET materials.",
};

const network = [
  "PET collectors",
  "Aggregators",
  "Community collection centres",
  "Processing partners",
  "Recycling facilities",
  "Logistics providers",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Who we are
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Building Nigeria&apos;s PET recovery-to-export supply chain
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            Bluelite Concept LTD is a Nigerian recycling and export company
            specializing in the collection, processing and international
            supply of recycled Polyethylene Terephthalate (PET) materials.
            We transform post-consumer PET bottles into valuable industrial
            raw materials through a supply chain built around quality,
            reliability and sustainability.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            Through strategic partnerships with collectors, aggregators,
            processing facilities and logistics providers, we are building
            an efficient supply network capable of serving manufacturers and
            recycling companies across international markets.
          </p>
          <ImagePlaceholder
            label="Photo: Bluelite Concept team or facility"
            aspect="aspect-[21/9]"
            className="mx-auto mt-10 max-w-2xl border-white/20 bg-white/5 [&_p]:text-white/40 [&_svg]:text-white/30"
          />
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="spec-tag px-8 py-8">
            <Compass className="h-7 w-7 text-emerald" strokeWidth={1.75} />
            <h2 className="mt-4 font-display text-xl font-semibold text-navy">
              Our Vision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">
              To become Africa&apos;s most trusted and reliable supplier of
              recycled PET materials, connecting Nigeria&apos;s recycling
              industry with manufacturers worldwide through sustainable and
              innovative solutions.
            </p>
          </div>
          <div className="spec-tag px-8 py-8">
            <Target className="h-7 w-7 text-emerald" strokeWidth={1.75} />
            <h2 className="mt-4 font-display text-xl font-semibold text-navy">
              Our Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">
              To consistently supply quality recycled PET materials that
              meet customer requirements through responsible sourcing,
              efficient processing, reliable logistics and long-term
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NIGERIA */}
      <section className="border-y border-grey-dark bg-grey">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Globe2 className="h-7 w-7 text-emerald" strokeWidth={1.75} />
              <h2 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">
                Why Nigeria
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/60">
                Nigeria&apos;s large population, growing beverage
                consumption and developing recycling sector create
                significant opportunities for PET recovery and recycling.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Bluelite Concept is positioned to develop an efficient PET
                collection, processing and export network that transforms
                this resource into valuable recycled PET products for
                international markets.
              </p>
            </div>

            <div className="spec-tag px-8 py-8">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-emerald" strokeWidth={1.75} />
                <h3 className="font-display text-lg font-semibold text-navy">
                  Our Supplier Network
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Our operations are supported by a growing network of:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {network.map((n) => (
                  <li
                    key={n}
                    className="flex items-center gap-2 text-sm text-navy/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy/40">
                This network enables us to build dependable supply while
                continuously expanding our collection and processing
                capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY COMMITMENT */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Leaf className="mx-auto h-8 w-8 text-emerald" strokeWidth={1.75} />
        <h2 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">
          Our Commitment to Sustainability
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy/60">
          Sustainability is at the core of our business. By recovering and
          recycling post-consumer PET bottles, we help reduce plastic
          pollution, conserve resources, support the circular economy and
          create economic opportunities throughout the local supply chain.
        </p>
      </section>
    </>
  );
}
