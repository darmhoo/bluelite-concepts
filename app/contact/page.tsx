import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Bluelite Concept LTD",
  description:
    "For product enquiries, supply requirements, partnerships and export opportunities, contact Bluelite Concept LTD.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-grey-dark bg-navy">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="batch-code text-xs uppercase tracking-[0.25em] text-emerald">
            Let&apos;s build a partnership
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60">
            For product enquiries, supply requirements, partnerships and
            export opportunities, contact Bluelite Concept LTD.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div className="spec-tag px-8 py-7">
              <p className="batch-code text-xs text-navy/40">Company</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                Bluelite Concept LTD
              </h3>
              <p className="mt-1 text-sm text-navy/60">Nigeria</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-navy/40">
                <span>CAC Reg. No. 8222067</span>
                <span>Export Reg. No. 0044486</span>
              </div>
            </div>

            <div className="spec-tag px-8 py-7">
              <p className="batch-code text-xs text-navy/40">Email</p>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald" />
                  <div>
                    <a href="mailto:info@blueliteconceptltd.com" className="text-navy hover:text-emerald">
                      info@blueliteconceptltd.com
                    </a>
                    <p className="text-xs text-navy/40">General enquiries</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald" />
                  <div>
                    <a href="mailto:kayode@blueliteconceptltd.com" className="text-navy hover:text-emerald">
                      kayode@blueliteconceptltd.com
                    </a>
                    <p className="text-xs text-navy/40">Managing Director</p>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald" />
                  <div>
                    <a href="mailto:gabriel@blueliteconceptltd.com" className="text-navy hover:text-emerald">
                      gabriel@blueliteconceptltd.com
                    </a>
                    <p className="text-xs text-navy/40">Business Development / Sales</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="spec-tag px-8 py-7">
              <p className="batch-code text-xs text-navy/40">WhatsApp</p>
              <div className="mt-3 flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald" />
                <span className="text-sm text-navy/60">
                  Official number available on request
                </span>
              </div>
            </div>

            <Link
              href="/quote"
              className="flex items-center justify-between rounded-sm bg-emerald px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-dark"
            >
              Have a specific supply requirement? Request a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
