const steps = [
  { n: "01", title: "Collection", body: "Sourced through collectors, aggregators, community collection centres and commercial suppliers." },
  { n: "02", title: "Aggregation", body: "Materials are consolidated, weighed and prepared for sorting and processing." },
  { n: "03", title: "Sorting", body: "Bottles sorted by colour and quality, with unwanted materials and contaminants removed." },
  { n: "04", title: "Shredding", body: "Sorted PET bottles are mechanically processed into smaller pieces or flakes." },
  { n: "05", title: "Washing", body: "Cold, warm or hot washing, depending on customer requirements." },
  { n: "06", title: "Drying", body: "Washed PET flakes are properly drained and dried before packaging." },
  { n: "07", title: "Quality Inspection", body: "Checked against agreed specifications — cleanliness, colour, moisture, contamination." },
  { n: "08", title: "Packaging", body: "Approved materials are packed according to customer and shipping requirements." },
  { n: "09", title: "Export Logistics", body: "Documentation, inland transport, container loading and shipment via Nigerian ports." },
];

export default function ProcessFlow({ compact = false }: { compact?: boolean }) {
  const shown = compact ? steps.slice(0, 4) : steps;
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((step) => (
        <div key={step.n} className="relative pl-1">
          <div className="flex items-center gap-3">
            <span className="batch-code flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy text-sm font-semibold text-emerald">
              {step.n}
            </span>
            <h3 className="font-display text-base font-semibold text-navy">
              {step.title}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-navy/60">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}
