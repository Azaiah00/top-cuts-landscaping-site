// Service-area detail — local copy + service shortcuts + related case studies.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  serviceAreas,
  areaSlugs,
  getAreaBySlug,
} from "@/content/service-areas";
import { caseStudies } from "@/content/portfolio";
import { services } from "@/content/services";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { PortfolioCard } from "@/components/media/PortfolioCard";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return areaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: `${area.name} Landscaping`,
    description: `Top Cut Landscaping serves ${area.name}. ${area.blurb}`,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  // Find any case studies in this neighborhood for the spread
  const localCases = caseStudies
    .filter((c) => c.neighborhood.toLowerCase() === area.name.toLowerCase())
    .slice(0, 3);

  // Map popularServices labels to the actual service definitions for slugs
  const popular = services.filter((s) =>
    area.popularServices.some(
      (label) =>
        s.short.toLowerCase().includes(label.toLowerCase()) ||
        s.name.toLowerCase().includes(label.toLowerCase())
    )
  );

  // Surrounding areas (siblings) for nav at the bottom
  const others = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <MagazineHero
        eyebrow={`Service Area · ${area.name}`}
        title={`${area.name} landscaping, by a small Henrico crew.`}
        intro={area.blurb}
      />

      {/* Local copy */}
      <section className="py-20 md:py-28 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
            {area.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-tc-pure-white border border-tc-fog rounded-sm p-6 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                What we see in {area.name}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-tc-charcoal">
                {area.characteristics.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-tc-fresh-cut">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popular services in this area */}
      <section className="py-20 md:py-28 bg-tc-pure-white border-y border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <SectionEyebrow>Most-requested in {area.name}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
              What we usually do here.
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block bg-tc-warm-cream border border-tc-fog rounded-sm p-5 hover:border-tc-fresh-cut transition-colors group h-full"
                >
                  <p className="font-display text-2xl text-tc-deep-navy">
                    {s.name}
                  </p>
                  <p className="mt-2 text-sm text-tc-stone">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-tc-deep-navy group-hover:text-tc-fresh-cut transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local case studies */}
      {localCases.length > 0 && (
        <section className="py-20 md:py-28 bg-tc-warm-cream">
          <div className="container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionEyebrow>From the {area.name} route</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
                Recent work nearby.
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {localCases.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <PortfolioCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other areas */}
      <section className="py-16 md:py-20 bg-tc-pure-white border-t border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone mb-4">
            Other areas we serve
          </p>
          <ul className="flex flex-wrap gap-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-tc-fog text-tc-deep-navy hover:border-tc-fresh-cut hover:text-tc-fresh-cut transition-colors text-sm"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
