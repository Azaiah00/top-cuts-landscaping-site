// Asymmetric, magazine-style services grid for the home page.
// 8 service cards, varying heights — broken into two visual rows on desktop.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Reveal } from "@/components/sections/Reveal";

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-tc-pure-white border-y border-tc-fog">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>What we do</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display font-medium text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
                A handful of things, done in a way that holds up the second
                time you walk past.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors shrink-0"
            >
              See all services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric grid — 12 cols, mix of 4/5/3 width to feel editorial */}
        <div className="grid grid-cols-12 gap-x-5 gap-y-12 md:gap-y-16">
          {services.map((service, idx) => {
            // Repeat layout pattern of 4 / 4 / 4 / 5 / 4 / 3 / 4 / 4 columns
            const spans = [
              "col-span-12 md:col-span-4",
              "col-span-12 sm:col-span-6 md:col-span-4 md:mt-12",
              "col-span-12 sm:col-span-6 md:col-span-4",
              "col-span-12 md:col-span-5",
              "col-span-12 sm:col-span-6 md:col-span-4 md:mt-12",
              "col-span-12 sm:col-span-6 md:col-span-3",
              "col-span-12 sm:col-span-6 md:col-span-4",
              "col-span-12 sm:col-span-6 md:col-span-4 md:mt-12",
            ];
            return (
              <Reveal
                key={service.slug}
                delay={(idx % 4) * 0.05}
                className={spans[idx]}
              >
                <ServiceCard service={service} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
