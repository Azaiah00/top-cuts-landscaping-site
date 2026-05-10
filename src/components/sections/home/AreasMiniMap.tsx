// Areas mini-map — text-based service area block, no map API needed.
// Each neighborhood is a link to its detail page.

import Link from "next/link";
import { serviceAreas } from "@/content/service-areas";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function AreasMiniMap() {
  return (
    <section className="py-24 md:py-32 bg-tc-pure-white border-y border-tc-fog">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-5">
            <SectionEyebrow>Where we work</SectionEyebrow>
            <h2 className="mt-4 font-display font-medium text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
              We serve the West End and beyond.
            </h2>
            <p className="mt-6 text-lg text-tc-charcoal/80 max-w-md">
              Our trucks stay close to home — every neighborhood below is on a
              standing route. Click yours to see what we typically do there.
            </p>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal delay={0.16}>
              <ul className="flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="inline-flex items-center px-5 py-3 rounded-full border border-tc-fog text-tc-deep-navy font-medium hover:border-tc-fresh-cut hover:text-tc-fresh-cut transition-colors"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
