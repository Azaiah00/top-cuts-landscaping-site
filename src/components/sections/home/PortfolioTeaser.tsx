// Horizontal-scroll carousel of recent transformations.
// On mobile: snap-x scroll. On desktop: still scroll but cards are wider.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/portfolio";
import { PortfolioCard } from "@/components/media/PortfolioCard";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function PortfolioTeaser() {
  // Surface 4 most editorial pieces
  const featured = caseStudies.slice(0, 4);
  return (
    <section className="py-24 md:py-32 bg-tc-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <SectionEyebrow>Recent transformations</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display font-medium text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
                A look around the route.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
            >
              All projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroll on small screens, contained on large.
          touch-action: pan-x lets vertical swipes pass straight through to the
          page, so this carousel can never hijack the user's downward scroll.
          overscroll-behavior-x: contain stops carousel-end bounces from
          bubbling out and shifting the whole page sideways. */}
      <div className="overflow-x-auto overflow-y-hidden pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x] [overscroll-behavior-x:contain]">
        <ul className="flex gap-5 pl-6 md:pl-8 lg:pl-[calc((100vw-1280px)/2+2rem)] pr-6 md:pr-8 snap-x snap-mandatory">
          {featured.map((project) => (
            <li
              key={project.slug}
              className="snap-start shrink-0 w-[78vw] sm:w-[55vw] md:w-[36vw] lg:w-[28vw] max-w-[420px]"
            >
              <PortfolioCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
