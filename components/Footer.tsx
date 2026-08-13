import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-steam/70 bg-ink text-chalk/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-lite/20">
                <span className="h-3 w-3 rounded-full bg-lite" />
              </span>
              <span className="font-display text-lg font-semibold text-chalk">
                BlueLite Concepts
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-chalk/60">
              Garment care run like a proper ticketing system: every piece
              logged, tracked, and pressed on schedule. Drop it off, we take
              it from there.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-chalk">
              Visit
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic text-chalk/60">
              <p>214 Ridgeway Avenue</p>
              <p>Ibadan, Oyo State</p>
              <p className="pt-2 font-mono text-xs tracking-wide text-lite/80">
                MON–SAT · 7:00–19:00
              </p>
            </address>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-chalk">
              Contact
            </p>
            <ul className="mt-4 space-y-1 text-sm text-chalk/60">
              <li>
                <a href="tel:+2340000000" className="hover:text-lite">
                  +234 000 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@bluelite.co" className="hover:text-lite">
                  hello@bluelite.co
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-lite hover:text-lite/80">
                  Book a pickup →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="crease mt-12 !bg-none border-t border-chalk/10" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-chalk/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BlueLite Concepts. All rights reserved.</p>
          <p className="font-mono">TICKET SERIES BLC-0001 — BLC-9999</p>
        </div>
      </div>
    </footer>
  );
}
