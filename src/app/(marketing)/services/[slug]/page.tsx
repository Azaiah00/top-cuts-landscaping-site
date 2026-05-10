// Single service detail — cinematic page.
// Hero image, founder note, what's included, FAQ, related case studies + CTAs.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/sections/CTABand";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { PortfolioCard } from "@/components/media/PortfolioCard";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { caseStudies } from "@/content/portfolio";
import { posts } from "@/content/journal";
import {
  getServiceBySlug,
  serviceSlugs,
  services,
} from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Find a few related case studies — match on the service name in their tags
  const related = caseStudies
    .filter((c) =>
      c.services.some((s) => s.toLowerCase().includes(service.short.toLowerCase()))
    )
    .slice(0, 3);

  // Suggest a related journal post if any title/category mentions this service
  const relatedPost = posts.find((p) =>
    `${p.title} ${p.category}`.toLowerCase().includes(service.short.toLowerCase())
  );

  // Pick "next" service for navigation
  const nextIndex =
    (services.findIndex((s) => s.slug === service.slug) + 1) % services.length;
  const nextService = services[nextIndex];

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-tc-deep-navy">
        <div className="absolute inset-0 ken-burns">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tc-deep-navy/30 via-transparent to-tc-deep-navy/85" />
        <div className="relative z-10 h-full container mx-auto px-6 md:px-8 flex flex-col justify-end pb-16 md:pb-24 text-tc-warm-cream">
          <Reveal>
            <SectionEyebrow tone="cream">Service · {service.short}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display font-medium text-[44px] md:text-[80px] leading-[1.02] tracking-[-0.02em] max-w-3xl">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base md:text-lg text-tc-warm-cream/85">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder note + body */}
      <section className="py-24 md:py-32 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 prose-column">
            <Reveal>
              <p className="font-display italic text-2xl md:text-[28px] leading-[1.3] text-tc-deep-navy">
                &ldquo;{service.founderNote}&rdquo;
                <br />
                <span className="not-italic text-sm font-mono uppercase tracking-[0.18em] text-tc-stone">
                  — Carson
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12 space-y-6 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
                {service.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-4">
            <div className="bg-tc-pure-white border border-tc-fog rounded-sm p-6 md:p-7 sticky top-32">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                What&rsquo;s included
              </p>
              <ul className="mt-4 space-y-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-tc-charcoal"
                  >
                    <Check className="w-4 h-4 mt-0.5 text-tc-fresh-cut shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="hairline my-6" />
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                Pricing
              </p>
              <p className="mt-2 text-sm text-tc-charcoal/85">
                {service.pricing}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                Cadence
              </p>
              <p className="mt-2 text-sm text-tc-charcoal/85">
                {service.cadence}
              </p>
              <Button
                asChild
                className="mt-6 w-full bg-tc-fresh-cut hover:bg-tc-deep-forest text-white"
              >
                <Link href={`/quote?service=${service.slug}`}>
                  Quote this service
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect — simple timeline */}
      <section className="py-20 md:py-28 bg-tc-pure-white border-y border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <SectionEyebrow>What to expect</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-tc-deep-navy max-w-2xl">
              How {service.short.toLowerCase()} works with us.
            </h2>
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              "Free walk + ballpark on the spot",
              "Firm written quote within 1 business day",
              "Scheduled work, same crew every visit",
              "Walk-back so you see what we did",
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                    Step {i + 1}
                  </p>
                  <p className="mt-3 font-display text-xl text-tc-deep-navy leading-snug">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionEyebrow>Common questions</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-tc-deep-navy tracking-tight">
                Things we get asked.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.12}>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-tc-pure-white border-y border-tc-fog">
          <div className="container mx-auto px-6 md:px-8">
            <Reveal>
              <SectionEyebrow>Recent {service.short.toLowerCase()} work</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
                See it on a real property.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <PortfolioCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Founder + related journal */}
      <FounderQuote
        quote={service.founderNote}
        cta={
          relatedPost
            ? { href: `/journal/${relatedPost.slug}`, label: `Read: ${relatedPost.title}` }
            : { href: "/journal", label: "Read the journal" }
        }
      />

      {/* Next service nav */}
      <section className="py-16 bg-tc-warm-cream border-t border-tc-fog">
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-tc-stone">
            Next service
          </p>
          <Link
            href={`/services/${nextService.slug}`}
            className="group inline-flex items-center gap-3 text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
          >
            <span className="font-display text-2xl md:text-3xl">
              {nextService.name}
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
