// Reviews page — aggregate header + filterable masonry of seeded reviews.
// (Real Google Places API can be merged later; falls back to seeded data.)

import type { Metadata } from "next";
import { Star } from "lucide-react";
import { reviews, reviewStats } from "@/content/reviews";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { ReviewsClient } from "@/components/sections/ReviewsClient";
import { Reveal } from "@/components/sections/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description:
    "Real reviews from Top Cut customers across Wyndham, Salisbury, Short Pump, Tuckahoe, and the rest of the Henrico West End.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const stats = reviewStats();
  return (
    <>
      <MagazineHero
        eyebrow="Reviews"
        title="What neighbors say."
        intro="Aggregated from Google, Nextdoor, and LawnStarter. Real homes, real reviews."
      />

      {/* Aggregate header */}
      <section className="py-12 md:py-16 bg-tc-pure-white border-b border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                  Average rating
                </p>
                <p className="mt-2 font-display text-5xl md:text-6xl text-tc-deep-navy">
                  {stats.avg.toFixed(1)}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-tc-fresh-cut text-tc-fresh-cut"
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                  Reviews shown
                </p>
                <p className="mt-2 font-display text-5xl md:text-6xl text-tc-deep-navy">
                  {stats.total}
                </p>
                <p className="mt-2 text-xs text-tc-stone">of 100+ on file</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                  Google
                </p>
                <p className="mt-2 font-display text-5xl md:text-6xl text-tc-deep-navy">
                  {stats.sources.Google}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                  Nextdoor + LS
                </p>
                <p className="mt-2 font-display text-5xl md:text-6xl text-tc-deep-navy">
                  {stats.sources.Nextdoor + stats.sources.LawnStarter}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filterable masonry */}
      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <ReviewsClient reviews={reviews} />
        </div>
      </section>

      <CTABand
        headline="Ready to be a 4.9?"
        sub="Most of our reviews come from neighbors who waited too long to call."
      />
    </>
  );
}
