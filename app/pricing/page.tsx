import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — BlueLite Concepts",
  description:
    "Simple, per-item dry cleaning pricing plus subscription plans for households and offices that clean on a regular schedule.",
};

const perItem = [
  { item: "Dress shirt", price: "₦900" },
  { item: "Blouse", price: "₦950" },
  { item: "Trousers / skirt", price: "₦1,100" },
  { item: "2-piece suit", price: "₦4,200" },
  { item: "3-piece suit", price: "₦5,400" },
  { item: "Evening gown", price: "₦6,500" },
  { item: "Overcoat", price: "₦4,800" },
  { item: "Duvet (single–queen)", price: "₦3,000" },
  { item: "Curtain, per panel", price: "₦2,500" },
  { item: "Necktie", price: "₦700" },
];

const plans = [
  {
    number: "BLC-P1",
    name: "Occasional",
    price: "Pay per item",
    tagline: "For drop-ins and one-off tickets.",
    features: [
      "Standard 48-hour turnaround",
      "SMS updates per ticket",
      "No minimum order",
    ],
    highlight: false,
  },
  {
    number: "BLC-P2",
    name: "Household",
    price: "₦25,000/mo",
    tagline: "Weekly pickup for a family's regular wash.",
    features: [
      "Up to 20 items per week",
      "Free weekly pickup & delivery",
      "24-hour rush on request",
      "Priority ticket handling",
    ],
    highlight: true,
  },
  {
    number: "BLC-P3",
    name: "Business",
    price: "Custom",
    tagline: "Uniforms, linens, and staff wear on contract.",
    features: [
      "Volume-based pricing",
      "Dedicated account ticket log",
      "Scheduled bulk pickup",
      "Monthly invoicing",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-steam/70 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <p className="ticket-number text-xs uppercase tracking-[0.3em] text-lite/70">
            Rate card
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-chalk sm:text-5xl">
            What's quoted is what's charged
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-chalk/60">
            Per-item rates for occasional visits, or a standing plan if
            BlueLite is picking up on a schedule.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.number}
              className={`ticket ticket-perf flex flex-col px-8 py-8 ${
                plan.highlight ? "ring-2 ring-blue" : ""
              }`}
            >
              {plan.highlight && (
                <span className="ticket-number mb-4 inline-block w-fit rounded-sm bg-blue px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-chalk">
                  Most booked
                </span>
              )}
              <span className="ticket-number text-xs text-steam-dark">
                Plan №&nbsp;{plan.number}
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                {plan.name}
              </h2>
              <p className="mt-1 text-sm text-ink/60">{plan.tagline}</p>
              <p className="ticket-number mt-6 text-3xl font-semibold text-ink">
                {plan.price}
              </p>

              <div className="crease my-6" />

              <ul className="flex-1 space-y-3 text-sm text-ink/70">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 rounded-sm px-5 py-3 text-center text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-blue text-chalk hover:bg-blue-dark"
                    : "bg-ink text-chalk hover:bg-blue"
                }`}
              >
                Start with {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PER ITEM TABLE */}
      <section className="border-t border-steam/70 bg-chalk">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center font-display text-3xl font-semibold text-ink">
            Standard per-item rates
          </h2>
          <div className="ticket ticket-perf mt-10 px-8 py-6">
            <ul>
              {perItem.map((row, i) => (
                <li key={row.item}>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-ink/80">{row.item}</span>
                    <span className="ticket-number text-sm font-medium text-blue">
                      {row.price}
                    </span>
                  </div>
                  {i < perItem.length - 1 && (
                    <div className="border-t border-dashed border-steam" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-center text-xs text-steam-dark">
            Heavily soiled items, leather, or repairs are quoted separately
            and confirmed before cleaning begins.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink">
          Not sure which plan fits?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
          Send us a rough weekly load and we'll tell you honestly whether a
          plan saves you money — or if pay-per-item is enough.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-sm bg-blue px-7 py-3 text-sm font-semibold text-chalk transition-transform hover:scale-[1.02]"
        >
          Ask us directly
        </Link>
      </section>
    </>
  );
}
