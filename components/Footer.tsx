import Link from "next/link";

const productLinks = [
  { href: "/services#pet-bottles", label: "PET Bottles" },
  { href: "/services#pet-flakes", label: "PET Flakes" },
  { href: "/services#pet-shredding", label: "PET Shredding" },
  { href: "/services#pet-washing", label: "PET Washing" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-process", label: "Our Process" },
  { href: "/export-logistics", label: "Export & Logistics" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-grey-dark bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-emerald/20">
                <span className="h-3.5 w-3.5 rounded-sm bg-emerald" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Bluelite Concept LTD
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Connecting Nigeria&apos;s PET recovery networks to global
              manufacturing industries — recycled PET bottles, flakes, and
              processed materials, sourced and exported responsibly.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
              <span>CAC Reg. No. 8222067</span>
              <span>Export Reg. No. 0044486</span>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">
              Products
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/quote"
                  className="font-medium text-emerald hover:text-emerald-dark"
                >
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p>
                General:{" "}
                <a href="mailto:info@blueliteconceptltd.com" className="hover:text-emerald">
                  info@blueliteconceptltd.com
                </a>
              </p>
              <p>
                Business Development:{" "}
                <a href="mailto:gabriel@blueliteconceptltd.com" className="hover:text-emerald">
                  gabriel@blueliteconceptltd.com
                </a>
              </p>
            </div>
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Bluelite Concept LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
