import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — BlueLite Concepts",
  description:
    "Book a pickup, ask about pricing, or find BlueLite Concepts' hours and location in Ibadan.",
};

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-steam/70 bg-ink">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <p className="ticket-number text-xs uppercase tracking-[0.3em] text-lite/70">
            Open a ticket
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-chalk sm:text-5xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-chalk/60">
            Book a pickup, ask about an item that isn't listed, or drop off
            directly at the shop.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div className="ticket px-8 py-7">
              <p className="ticket-number text-xs text-steam-dark">
                Shop location
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                214 Ridgeway Avenue
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                Ibadan, Oyo State, Nigeria
              </p>
              <p className="mt-4 text-sm text-ink/60">
                Free pickup and delivery within 8km of the shop. Outside that
                radius, a small logistics fee applies — quoted before
                booking.
              </p>
            </div>

            <div className="ticket px-8 py-7">
              <p className="ticket-number text-xs text-steam-dark">
                Hours
              </p>
              <ul className="mt-3 divide-y divide-dashed divide-steam">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="text-ink/70">{h.day}</span>
                    <span className="ticket-number text-ink/80">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ticket px-8 py-7">
              <p className="ticket-number text-xs text-steam-dark">
                Direct contact
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+2340000000"
                    className="text-blue hover:text-ink"
                  >
                    +234 000 000 0000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@bluelite.co"
                    className="text-blue hover:text-ink"
                  >
                    hello@bluelite.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
