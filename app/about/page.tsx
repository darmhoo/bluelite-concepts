import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BlueLite Concepts",
  description:
    "BlueLite Concepts is a dry cleaning business built around a simple idea: nothing should get lost, and nothing should come back late.",
};

const facts = [
  { label: "Founded", value: "2019" },
  { label: "Tickets closed", value: "60,000+" },
  { label: "Avg. turnaround", value: "48 hrs" },
  { label: "Lost items", value: "0 tolerated" },
];

const values = [
  {
    title: "Every item gets a number",
    body: "The ticket system exists because memory fails and paper doesn't. From the moment something is dropped off, it's logged, tracked, and matched back to you.",
  },
  {
    title: "The right process, not the fastest one",
    body: "Solvent, wet clean, or hand clean — the fabric decides, not the schedule. We'd rather take an extra day than damage something you can't replace.",
  },
  {
    title: "Prices are printed, not negotiated",
    body: "What's quoted at drop-off is what's owed at pickup. If something needs a repair or extra work, we call first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-steam/70 bg-ink">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="ticket-number text-xs uppercase tracking-[0.3em] text-lite/70">
            About the shop
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-chalk sm:text-5xl">
            We built a dry cleaner the way you'd build a ticketing system
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-chalk/60">
            BlueLite Concepts started in Ibadan in 2019 after its founder, a
            former logistics coordinator, got tired of dry cleaners that
            couldn't tell her where her own clothes were. Everything since
            has been built around one question: can we account for every
            single item, every single time?
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="ticket px-5 py-6 text-center">
              <p className="ticket-number text-2xl font-semibold text-blue sm:text-3xl">
                {f.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-ink/50">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steam/70 bg-chalk">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center font-display text-3xl font-semibold text-ink">
            What that actually means, day to day
          </h2>
          <div className="mt-12 space-y-10">
            {values.map((v) => (
              <div
                key={v.title}
                className="border-l-2 border-blue/40 pl-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Run by people, not a franchise script
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/60">
          BlueLite Concepts is independently owned and operated out of a
          single facility in Ibadan. Every ticket is handled by a team that
          works out of that same building — nothing is subcontracted out of
          sight.
        </p>
      </section>
    </>
  );
}
