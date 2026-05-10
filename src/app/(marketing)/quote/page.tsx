// Standalone quote calculator page.
// Full-width version of the wizard.

import type { Metadata } from "next";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { Reveal } from "@/components/sections/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Get a Quote",
  description:
    "Tell us about your property in 30 seconds. Carson texts back within one business day with a firm quote.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <MagazineHero
        eyebrow="Free Quote"
        title="Tell us about your yard."
        intro="Six quick questions, then a ballpark on the spot. Carson follows up by text within one business day with a firm quote."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <Reveal>
            <QuoteCalculator variant="page" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
