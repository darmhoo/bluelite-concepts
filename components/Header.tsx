import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/our-process", label: "Our Process" },
  { href: "/export-logistics", label: "Export & Logistics" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-grey-dark bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy">
            <span className="h-3.5 w-3.5 rounded-sm bg-emerald" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Bluelite <span className="font-medium text-navy/70">Concept</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className="rounded-sm bg-emerald px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark"
        >
          Request a Quote
        </Link>
      </div>

      {/* compact link row for small viewports, since there's no hamburger menu */}
      <div className="border-t border-grey-dark bg-grey md:hidden">
        <nav className="mx-auto flex max-w-7xl flex-wrap gap-x-5 gap-y-2 px-6 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
