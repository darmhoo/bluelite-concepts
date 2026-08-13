import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steam/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-ink">
            <span className="h-3 w-3 rounded-full bg-lite transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            BlueLite<span className="text-blue"> Concepts</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-chalk transition-colors hover:bg-blue"
        >
          Book pickup
        </Link>
      </div>
    </header>
  );
}
