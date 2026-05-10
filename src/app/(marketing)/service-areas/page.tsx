// Service-areas index — all neighborhoods we cover.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceAreas } from "@/content/service-areas";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/sections/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Henrico County, Short Pump, West End, Glen Allen, Wyndham, Tuckahoe, Salisbury, Innsbrook, the Fan, and Midlothian.",
  path: "/service-areas",
});

export default function ServiceAreasIndex() {
  return (
    <>
      <MagazineHero
        eyebrow="Service Areas"
        title="Where we work."
        intro="Our trucks stay close to home — these are the neighborhoods on our standing routes. Click any to see what we typically do there."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 2) * 0.06} as="li">
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-6 border-b border-tc-fog hover:border-tc-deep-navy transition-colors"
                >
                  <div>
                    <p className="font-display text-2xl md:text-4xl text-tc-deep-navy tracking-tight">
                      {area.name}
                    </p>
                    <p className="mt-1 text-sm text-tc-stone">{area.blurb}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-tc-stone shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-tc-fresh-cut" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
