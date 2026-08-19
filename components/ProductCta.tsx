import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCta({
  title = "Request a Quote",
  body,
}: {
  title?: string;
  body: string;
}) {
  return (
    <section className="border-t border-grey-dark bg-navy">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/60">
          {body}
        </p>
        <Link
          href="/quote"
          className="mt-7 inline-flex items-center gap-2 rounded-sm bg-emerald px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
