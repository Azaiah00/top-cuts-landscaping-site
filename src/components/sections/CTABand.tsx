// Final CTA band — full bleed dark navy, single Fraunces line, big green button.
// Used at the bottom of every major page.

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABand({
  headline = "Your yard is calling.",
  sub = "Tell us a little about your property — Carson texts back within one business day.",
  primaryHref = "/quote",
  primaryLabel = "Request your free quote",
}: {
  headline?: string;
  sub?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative bg-tc-deep-navy text-tc-warm-cream py-24 md:py-32 overflow-hidden">
      {/* Subtle radial light to keep the navy from feeling flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 0%, rgba(107,190,60,0.18), transparent 50%)",
        }}
      />
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="font-display font-medium text-[44px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-tc-warm-cream">
              {headline}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-lg md:text-xl text-tc-fog/85 max-w-xl">
              {sub}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-3 bg-tc-fresh-cut text-white font-medium text-base md:text-lg px-7 py-4 rounded-sm hover:bg-tc-deep-forest transition-colors group"
              >
                {primaryLabel}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:8049125530"
                className="inline-flex items-center gap-2 text-tc-warm-cream/85 hover:text-tc-fresh-cut font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                or call (804) 912-5530
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
