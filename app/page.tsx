import Link from "next/link";
import TicketCard from "@/components/TicketCard";
import Steam from "@/components/Steam";

const services = [
  {
    number: "BLC-101",
    title: "Shirts & blouses",
    description: "Hand-finished collars and cuffs, boxed or on hangers.",
    meta: "from ₦900",
  },
  {
    number: "BLC-204",
    title: "Suits & tailoring",
    description: "Two-piece press with seam and lining checked before bagging.",
    meta: "from ₦4,200",
  },
  {
    number: "BLC-318",
    title: "Gowns & occasion wear",
    description: "Beadwork-safe solvent clean for delicate fabric and trim.",
    meta: "from ₦6,500",
  },
  {
    number: "BLC-447",
    title: "Household linens",
    description: "Duvets, curtains, and upholstery cleaned and pressed flat.",
    meta: "from ₦3,000",
  },
];

const steps = [
  {
    n: "01",
    title: "Pickup",
    body: "Schedule online or drop in. Every piece is logged against a ticket number before it leaves your hands.",
  },
  {
    n: "02",
    title: "Clean",
    body: "Sorted by fabric and stain profile, then run through the right process — solvent, wet, or hand clean.",
  },
  {
    n: "03",
    title: "Press",
    body: "Finished on calibrated presses so creases fall where they should, every time.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Back on schedule, boxed or hung, with the same ticket number you started with.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-steam/70 bg-ink">
        <div className="bg-press-lines absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
          <div className="relative mx-auto max-w-3xl text-center">
            <Steam />
            <p className="ticket-number text-xs uppercase tracking-[0.3em] text-lite/70">
              Ticket №&nbsp;BLC-0001 · Est. Ibadan
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-chalk sm:text-6xl">
              Pressed, picked up,
              <br />
              <span className="text-lite">and back on time.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-chalk/60">
              BlueLite Concepts runs garment care like a ticketing system —
              every shirt, suit, and gown logged, tracked, and returned
              exactly when we say it will be.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-sm bg-lite px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Book a pickup
              </Link>
              <Link
                href="/pricing"
                className="rounded-sm border border-chalk/20 px-6 py-3 text-sm font-medium text-chalk/80 transition-colors hover:border-chalk/40 hover:text-chalk"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="ticket-number text-xs uppercase tracking-[0.25em] text-blue">
              What we clean
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Four ticket categories, one standard
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-medium text-blue hover:text-ink sm:block"
          >
            All services →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <TicketCard key={s.number} {...s} />
          ))}
        </div>
      </section>

      {/* PROCESS — real sequence, numbering earns its keep */}
      <section className="border-y border-steam/70 bg-chalk">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="ticket-number text-xs uppercase tracking-[0.25em] text-blue">
            How a ticket moves
          </p>
          <h2 className="mt-2 max-w-lg font-display text-3xl font-semibold text-ink">
            The same four stages, whether it's one shirt or forty
          </h2>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-steam lg:block"
            />
            {steps.map((step) => (
              <div key={step.n} className="relative pl-1">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-lite">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="ticket-number text-xs uppercase tracking-[0.25em] text-blue">
              Pricing, printed plainly
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              No estimates. The ticket price is the price.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
              What's quoted at drop-off is what's charged at pickup — stains
              and repairs are flagged and confirmed with you first, never
              added on silently.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 text-sm font-medium text-chalk transition-colors hover:bg-blue"
            >
              View full price list
            </Link>
          </div>

          <div className="ticket ticket-perf ticket-stub-top ticket-stub-bottom mx-auto w-full max-w-sm px-8 py-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-ink">
                Sample ticket
              </span>
              <span className="ticket-number text-xs text-steam-dark">
                BLC-2481
              </span>
            </div>
            <div className="crease my-5" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between text-ink/70">
                <span>2× Dress shirt</span>
                <span className="ticket-number">₦1,800</span>
              </li>
              <li className="flex items-center justify-between text-ink/70">
                <span>1× Wool suit, 2-piece</span>
                <span className="ticket-number">₦4,200</span>
              </li>
              <li className="flex items-center justify-between text-ink/70">
                <span>1× Silk tie</span>
                <span className="ticket-number">₦700</span>
              </li>
            </ul>
            <div className="crease my-5" />
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-ink">
                Total
              </span>
              <span className="ticket-number font-semibold text-blue">
                ₦6,700
              </span>
            </div>
            <p className="mt-4 text-center text-xs text-steam-dark">
              Ready for pickup — Thursday, 4:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-t border-steam/70 bg-ink">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="ticket-number text-xs uppercase tracking-[0.25em] text-lite/70">
            Ticket BLC-1904 · Closed, satisfied
          </p>
          <p className="mt-6 font-display text-2xl font-medium leading-snug text-chalk sm:text-3xl">
            I stopped writing reminders to pick up my dry cleaning. BlueLite
            texts me before I even remember to check.
          </p>
          <p className="mt-6 text-sm text-chalk/50">
            — Folake A., weekly customer since 2023
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          First ticket's on us.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
          New customers get 20% off their first order — pickup, clean, and
          press included.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-sm bg-blue px-7 py-3 text-sm font-semibold text-chalk transition-transform hover:scale-[1.02]"
        >
          Book your first pickup
        </Link>
      </section>
    </>
  );
}
