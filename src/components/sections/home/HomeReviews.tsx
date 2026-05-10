// Home review section — show 9 reviews in a masonry layout, link to /reviews.

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { reviews } from "@/content/reviews";
import { ReviewWall } from "@/components/media/ReviewWall";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function HomeReviews() {
  // Pick a varied set of 9 — different sources, neighborhoods, lengths.
  const featured = reviews.slice(0, 9);
  return (
    <section className="py-24 md:py-32 bg-tc-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <SectionEyebrow>What neighbors say</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display font-medium text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
                4.9 across 100+ reviews.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-4 flex items-center gap-2 text-tc-stone">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-tc-fresh-cut text-tc-fresh-cut"
                  />
                ))}
                <span className="text-sm">
                  Google · Nextdoor · LawnStarter
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
            >
              Read all reviews
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <ReviewWall reviews={featured} />
        </Reveal>
      </div>
    </section>
  );
}
