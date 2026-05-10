// "The Cut" — featured before/after pair (one shown, link to portfolio).
// Keeps the home page from being too heavy; deeper exploration sits on /portfolio.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";

export function TheCut() {
  return (
    <section className="py-24 md:py-32 bg-tc-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <SectionEyebrow>The Cut</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display font-medium text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
              This is the difference a Top Cut makes.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-tc-charcoal/80 max-w-xl">
              Drag the handle. The work speaks for itself — every transformation
              done in a single day or weekend by Carson&rsquo;s in-house crew.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <BeforeAfterSlider
            beforeSrc="/images/ba-wyndham-before-new.png"
            afterSrc="/images/ba-wyndham-after.jpg"
            beforeAlt="Wyndham property before — overgrown, ragged edges, faded mulch."
            afterAlt="Wyndham property after — crisp stripes, fresh mulch, clean edges."
            caption="Wyndham · Spring Cleanup + Mulch Refresh · 1 day"
            aspectRatio="3/2"
          />
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
            >
              View all transformations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
