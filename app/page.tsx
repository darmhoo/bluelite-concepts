import Link from "next/link";
import {
  Recycle,
  Layers,
  Scissors,
  Droplets,
  Network,
  SlidersHorizontal,
  Ship,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import SpecTag from "@/components/SpecTag";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const products = [
  {
    icon: Recycle,
    code: "PET-BTL",
    title: "PET Bottles",
    description: "Post-consumer PET bottles sourced through our collection and aggregation network.",
    href: "/services#pet-bottles",
    image: "Photo: PET bottles",
  },
  {
    icon: Layers,
    code: "PET-FLK",
    title: "PET Flakes",
    description: "Clear, Green, Blue and Mixed PET flakes processed to customer requirements.",
    href: "/services#pet-flakes",
    image: "Photo: PET flakes",
  },
  {
    icon: Scissors,
    code: "PET-SHR",
    title: "PET Shredding",
    description: "Mechanical shredding of PET bottles into smaller, uniform material.",
    href: "/services#pet-shredding",
    image: "Photo: shredded PET",
  },
  {
    icon: Droplets,
    code: "PET-WSH",
    title: "PET Washing",
    description: "Cold, warm and hot washing options depending on end-use requirements.",
    href: "/services#pet-washing",
    image: "Photo: PET washing/drying",
  },
];

const whyUs = [
  { icon: Network, title: "Reliable PET sourcing network" },
  { icon: SlidersHorizontal, title: "Multiple processing options" },
  { icon: UserCheck, title: "Customer-focused specifications" },
  { icon: Ship, title: "Export logistics support" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-grey-dark bg-navy">
        <div className="bg-grid-lines bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
                Trusted Nigerian Supplier of Recycled PET Materials
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Connecting Nigeria&apos;s PET Recovery Networks to Global
                Manufacturing Industries
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                Bluelite Concept LTD supplies recycled PET bottles and PET
                flakes through a growing network of collectors, aggregators,
                processing partners and logistics providers across Nigeria.
                We focus on reliable sourcing, quality processing and
                international supply for manufacturers and recycling
                companies worldwide.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              label="Photo: baled PET bottles / processing facility"
              aspect="aspect-square"
              className="border-white/20 bg-white/5 [&_p]:text-white/40 [&_svg]:text-white/30"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
          What we supply
        </p>
        <h2 className="mt-2 max-w-lg font-display text-3xl font-bold text-navy">
          Product highlights
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.code} href={p.href} className="group block">
              <SpecTag code={p.code} title={p.title} description={p.description} image={p.image}>
                <div className="mt-1 flex items-center justify-between">
                  <p.icon className="h-6 w-6 text-emerald" />
                  <span className="text-xs font-medium text-navy/40 transition-colors group-hover:text-emerald">
                    Learn more →
                  </span>
                </div>
              </SpecTag>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY BLUELITE */}
      <section className="border-y border-grey-dark bg-grey">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Why Bluelite Concept
          </p>
          <h2 className="mt-2 max-w-lg font-display text-3xl font-bold text-navy">
            A supply partner built for reliability
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title}>
                <item.icon className="h-7 w-7 text-emerald" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-navy/60">
            <span>Flexible supply arrangements</span>
            <span>·</span>
            <span>FOB &amp; CIF shipping options</span>
            <span>·</span>
            <span>Growing Nigerian supply network</span>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
              Sustainability
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Turning plastic waste into valuable resources
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/60">
              We recover post-consumer PET bottles and transform them into
              valuable recycled materials for global manufacturing, helping
              reduce plastic pollution and support the circular economy.
            </p>
            <ImagePlaceholder
              label="Photo: baled recycled PET ready for export"
              aspect="aspect-video"
              className="mt-6"
            />
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald-dark"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="spec-tag flex flex-col gap-6 bg-navy px-8 py-10 text-white">
            <span className="batch-code text-xs text-emerald">
              CIRCULAR ECONOMY
            </span>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-display text-2xl font-bold text-white">
                  Collect
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">
                  Process
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">
                  Export
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Every recovered bottle re-enters global manufacturing as raw
              material — reducing dependence on virgin plastic and creating
              economic opportunity throughout Nigeria&apos;s recycling
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-grey-dark bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Tell us what you need
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
            PET bottles, shredded PET, or cold, warm and hot-washed flakes —
            our team can discuss your requirements and available supply
            options.
          </p>
          <Link
            href="/quote"
            className="mt-7 inline-flex items-center gap-2 rounded-sm bg-emerald px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
