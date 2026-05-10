// Case study — magazine-style spread.
// Full-bleed hero, drop-cap intro, before/after, gallery, brief/approach/result,
// plant list (where applicable), testimonial, related work, CTA.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import {
  caseStudies,
  caseSlugs,
  getCaseBySlug,
} from "@/content/portfolio";
import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import { CTABand } from "@/components/sections/CTABand";
import { PortfolioCard } from "@/components/media/PortfolioCard";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return buildMetadata({
    title: c.name,
    description: `${c.brief.slice(0, 150)}…`,
    path: `/portfolio/${c.slug}`,
    image: c.hero,
  });
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const related = caseStudies
    .filter((other) => other.slug !== c.slug)
    .slice(0, 3);

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-tc-deep-navy">
        <div className="absolute inset-0 ken-burns">
          <Image
            src={c.hero}
            alt={c.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tc-deep-navy/30 via-transparent to-tc-deep-navy/85" />
        <div className="relative z-10 h-full container mx-auto px-6 md:px-8 flex flex-col justify-end pb-16 md:pb-24 text-tc-warm-cream">
          <Reveal>
            <SectionEyebrow tone="cream">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> {c.neighborhood}
              </span>
            </SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-medium text-[44px] md:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-3xl">
              {c.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {c.services.map((s) => (
                <Badge key={s} tone="green">
                  {s}
                </Badge>
              ))}
              <Badge tone="navy">{c.size}</Badge>
              <Badge tone="navy">{c.duration}</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Drop-cap intro */}
      <section className="py-24 md:py-32 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <Reveal>
            <p className="drop-cap text-xl md:text-2xl leading-[1.5] text-tc-charcoal">
              {c.brief}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Before/After (if available) */}
      {c.beforeAfter && (
        <section className="pb-16 md:pb-24 bg-tc-warm-cream">
          <div className="container mx-auto px-6 md:px-8">
            <Reveal>
              <BeforeAfterSlider
                beforeSrc={c.beforeAfter.before}
                afterSrc={c.beforeAfter.after}
                caption={c.beforeAfter.caption}
                aspectRatio="3/2"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Brief / Approach / Result */}
      <section className="py-20 md:py-28 bg-tc-pure-white border-y border-tc-fog">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {[
            { label: "The brief", body: c.brief },
            { label: "The approach", body: c.approach },
            { label: "The result", body: c.result },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.08}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                  {block.label}
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
                  {block.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Plant list (if install) */}
      {c.plants && (
        <section className="py-20 md:py-28 bg-tc-warm-cream">
          <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <SectionEyebrow>The plant list</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-tc-deep-navy tracking-tight">
                What we planted.
              </h2>
              <p className="mt-4 text-base text-tc-stone">
                Sourced from local growers we trust. Soil amended for each
                planting hole.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {c.plants.map((plant) => (
                  <li
                    key={plant}
                    className="border-b border-tc-fog py-4 text-tc-deep-navy font-display text-lg"
                  >
                    {plant}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* Gallery */}
      {c.gallery && c.gallery.length > 0 && (
        <section className="py-20 md:py-28 bg-tc-pure-white border-t border-tc-fog">
          <div className="container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionEyebrow>From the property</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
                Around the work.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {c.gallery.map((src, i) => (
                <Reveal key={src + i} delay={i * 0.05}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-tc-fog">
                    <Image
                      src={src}
                      alt={`${c.name} — gallery image ${i + 1}`}
                      fill
                      sizes="(min-width:1024px) 22vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {c.testimonial && (
        <section className="py-20 md:py-28 bg-tc-warm-cream">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
            <Reveal>
              <p className="font-display italic text-2xl md:text-[34px] leading-[1.25] text-tc-deep-navy">
                &ldquo;{c.testimonial.quote}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-tc-stone">
                — {c.testimonial.name}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related work */}
      <section className="py-20 md:py-28 bg-tc-pure-white border-t border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Reveal>
                <SectionEyebrow>More from the route</SectionEyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
                  Other transformations.
                </h2>
              </Reveal>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
            >
              All projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PortfolioCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Want one like this?"
        sub="Send us a few photos of your property — we'll tell you honestly what's possible."
        primaryLabel="Inquire about a project"
      />
    </>
  );
}
