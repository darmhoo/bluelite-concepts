import type { Metadata } from "next";
import Link from "next/link";
import TicketCard from "@/components/TicketCard";

export const metadata: Metadata = {
  title: "Services — BlueLite Concepts",
  description:
    "Garment care services from BlueLite Concepts: shirts, suits, gowns, household linens, repairs, and same-week turnaround.",
};

const categories = [
  {
    heading: "Everyday wear",
    eyebrow: "Series BLC-1—",
    items: [
      { number: "BLC-101", title: "Dress shirts", description: "Hand-pressed collar and cuff, starched to preference.", meta: "₦900" },
      { number: "BLC-112", title: "Blouses", description: "Steam-set finish, buttons checked and reinforced.", meta: "₦950" },
      { number: "BLC-126", title: "Trousers & skirts", description: "Crease-pressed with hem and lining inspection.", meta: "₦1,100" },
      { number: "BLC-140", title: "Everyday dresses", description: "Wet or dry clean depending on fabric label.", meta: "₦1,600" },
    ],
  },
  {
    heading: "Tailoring & formalwear",
    eyebrow: "Series BLC-2—",
    items: [
      { number: "BLC-204", title: "2-piece suit", description: "Jacket and trouser pressed as a matched set.", meta: "₦4,200" },
      { number: "BLC-218", title: "3-piece suit", description: "Waistcoat included, seams and buttons checked.", meta: "₦5,400" },
      { number: "BLC-233", title: "Tuxedo", description: "Satin lapel steamed separately to protect sheen.", meta: "₦5,900" },
      { number: "BLC-247", title: "Overcoat", description: "Deep clean for wool and cashmere blends.", meta: "₦4,800" },
    ],
  },
  {
    heading: "Occasion & delicate",
    eyebrow: "Series BLC-3—",
    items: [
      { number: "BLC-318", title: "Evening gowns", description: "Beadwork-safe solvent clean, boxed for transport.", meta: "₦6,500" },
      { number: "BLC-329", title: "Wedding dresses", description: "Preservation-grade clean and archival boxing.", meta: "from ₦18,000" },
      { number: "BLC-341", title: "Silk & lace", description: "Hand-clean only, no mechanical pressing.", meta: "₦3,200" },
      { number: "BLC-356", title: "Traditional agbada & aso-oke", description: "Fabric-specific care for embroidery and starch.", meta: "from ₦5,000" },
    ],
  },
  {
    heading: "Home & repairs",
    eyebrow: "Series BLC-4—",
    items: [
      { number: "BLC-447", title: "Duvets & comforters", description: "High-capacity wash and full-flat press.", meta: "₦3,000" },
      { number: "BLC-459", title: "Curtains", description: "Measured, cleaned, and re-hung to size.", meta: "from ₦2,500/panel" },
      { number: "BLC-471", title: "Alterations", description: "Hemming, taking in, and button repair.", meta: "from ₦1,200" },
      { number: "BLC-483", title: "Leather & suede", description: "Specialist off-site clean, 10–14 day turnaround.", meta: "from ₦7,000" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-steam/70 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <p className="ticket-number text-xs uppercase tracking-[0.3em] text-lite/70">
            Full ticket catalogue
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-chalk sm:text-5xl">
            Every garment, its own ticket series
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-chalk/60">
            Prices shown are standard rates. Heavily soiled items, repairs,
            or rush requests are quoted and confirmed with you before we
            start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.heading}>
              <div className="flex items-baseline justify-between border-b border-steam/70 pb-3">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {cat.heading}
                </h2>
                <span className="ticket-number text-xs text-steam-dark">
                  {cat.eyebrow}
                </span>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((item) => (
                  <TicketCard key={item.number} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steam/70 bg-chalk">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Don't see your item listed?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
            Tell us what it is and we'll open a ticket with a quote before
            anything is cleaned.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-ink px-6 py-3 text-sm font-medium text-chalk transition-colors hover:bg-blue"
          >
            Ask about an item
          </Link>
        </div>
      </section>
    </>
  );
}
