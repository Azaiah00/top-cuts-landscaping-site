// Portfolio index — filterable grid of seeded case studies.

import type { Metadata } from "next";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Recent transformations across Wyndham, Salisbury, Short Pump, Tuckahoe, Glen Allen, the Fan, Innsbrook, and Midlothian.",
  path: "/portfolio",
});

export default function PortfolioIndex() {
  return (
    <>
      <MagazineHero
        eyebrow="Portfolio"
        title="A look around the route."
        intro="A small selection of recent work — homes we've been on, beds we've reset, lawns we've put back together. Filter by service, neighborhood, or size."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <PortfolioFilter />
        </div>
      </section>

      <CTABand
        headline="See yours next."
        sub="Send us a few photos of your property and we'll tell you what's possible."
        primaryLabel="Inquire about a project"
      />
    </>
  );
}
