// Embedded quote calculator on the home page.
// Uses the smaller "embed" variant of the wizard.

import Link from "next/link";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function QuotePreview() {
  return (
    <section className="py-24 md:py-32 bg-tc-pure-white border-y border-tc-fog">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — pitch */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <SectionEyebrow>30-second quote</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display font-medium text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
                Get a ballpark in 30 seconds.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg text-tc-charcoal/80">
                Tell us a few things about your property. We&rsquo;ll give you a
                ballpark range right here, then Carson texts back within one
                business day with a firm quote.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-4 text-sm text-tc-stone">
                <span>Prefer to talk?</span>
                <Link
                  href="tel:8049125530"
                  className="font-medium text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
                >
                  (804) 912-5530
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — wizard */}
          <Reveal delay={0.16} className="lg:col-span-7">
            <QuoteCalculator variant="embed" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
