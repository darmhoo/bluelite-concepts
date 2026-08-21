import type { Metadata } from "next";
import ProductCta from "@/components/ProductCta";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Anchor, FileText, Truck, Package, ClipboardList, Ship } from "lucide-react";
import Image from "next/image";
import exportReady from "@/public/images/export_ready.jpeg"

export const metadata: Metadata = {
  title: "Export & Logistics — Bluelite Concept LTD",
  description:
    "Bluelite Concept LTD supports international customers with FOB and CIF export coordination from Apapa and Tin Can Island ports, Lagos, to global destinations.",
};

const exportSupport = [
  { icon: FileText, label: "Export documentation" },
  { icon: Truck, label: "Inland transportation" },
  { icon: Package, label: "Container loading" },
  { icon: ClipboardList, label: "Packing and labeling" },
  { icon: Ship, label: "Shipping coordination" },
  { icon: FileText, label: "Commercial documentation" },
];

const markets = [
  "Europe",
  "Asia",
  "North America",
  "Middle East",
  "Africa",
  "Australia",
  "New Zealand",
];

export default function ExportLogisticsPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Shipping worldwide
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Export &amp; Logistics
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
            Bluelite Concept supports international customers with export
            coordination from Nigeria to global destinations.
          </p>
        </div>
      </section>

      {/* SHIPPING TERMS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Image
          alt="Photo: container loading / port operations"
          src={exportReady}
          className="mb-14 aspect-[21/9]"
        />
        <h2 className="font-display text-2xl font-bold text-navy">
          Shipping terms
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="spec-tag px-8 py-8">
            <span className="batch-code text-xs text-navy/40">FOB</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-navy">
              Free On Board
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">
              Arrangements from the agreed Nigerian port.
            </p>
          </div>
          <div className="spec-tag px-8 py-8">
            <span className="batch-code text-xs text-navy/40">CIF</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-navy">
              Cost, Insurance and Freight
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">
              Arrangements to the customer&apos;s nominated destination
              port.
            </p>
          </div>
        </div>

        {/* PORTS */}
        <div className="mt-10 flex flex-wrap gap-4">
          {["Apapa Port, Lagos", "Tin Can Island Port, Lagos"].map((port) => (
            <div
              key={port}
              className="flex items-center gap-2 rounded-sm border border-grey-dark bg-grey px-4 py-2.5 text-sm text-navy"
            >
              <Anchor className="h-4 w-4 text-emerald" />
              {port}
            </div>
          ))}
        </div>
      </section>

      {/* EXPORT SUPPORT */}
      <section className="border-t border-grey-dark bg-grey">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-2xl font-bold text-navy">
            Export support
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/60">
            Our logistics coordination can include:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exportSupport.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-sm border border-grey-dark bg-white px-5 py-4"
              >
                <item.icon className="h-5 w-5 shrink-0 text-emerald" />
                <span className="text-sm font-medium text-navy">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL MARKETS */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Global markets
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy/60">
          We aim to serve customers across:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {markets.map((m) => (
            <span
              key={m}
              className="rounded-full border border-grey-dark bg-grey px-4 py-1.5 text-sm text-navy"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      <ProductCta body="Tell us your destination port and preferred shipping term, and we'll include it in your quote." />
    </>
  );
}
