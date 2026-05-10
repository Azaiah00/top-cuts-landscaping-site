// Services index — long-form page. One section per service, sticky side-rail
// on desktop lets visitors jump.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Weekly mowing, mulch, cleanups, installation, aeration, pruning, gravel + drainage, and tree work in Henrico, Short Pump, and the West End.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <MagazineHero
        eyebrow="What we do"
        title="A handful of things, done right."
        intro="We don't do everything. We do a handful of things, and we do them in a way that holds up the second time you walk past."
      />

      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky side rail — desktop quick jump */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-tc-stone mb-4">
                  Jump to
                </p>
                <ul className="flex flex-col gap-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <a
                        href={`#${s.slug}`}
                        className="text-sm text-tc-deep-navy/85 hover:text-tc-fresh-cut transition-colors"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Long-form sections */}
            <div className="lg:col-span-9 flex flex-col gap-24 md:gap-32">
              {services.map((s, idx) => (
                <Reveal
                  key={s.slug}
                  as="article"
                  delay={0}
                  className="scroll-mt-32"
                >
                  <section id={s.slug} aria-labelledby={`${s.slug}-title`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-tc-fog mb-8">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width:1024px) 60vw, 100vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                      {s.short}
                    </p>
                    <h2
                      id={`${s.slug}-title`}
                      className="mt-3 font-display text-4xl md:text-5xl text-tc-deep-navy tracking-tight"
                    >
                      {s.name}
                    </h2>
                    <p className="mt-3 text-lg text-tc-stone">{s.tagline}</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-5 text-base leading-relaxed text-tc-charcoal/85">
                        {s.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      <div className="bg-tc-pure-white border border-tc-fog rounded-sm p-6 md:p-7">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                          What&rsquo;s included
                        </p>
                        <ul className="mt-4 space-y-3">
                          {s.included.map((item) => (
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
                          {s.pricing}
                        </p>
                        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
                          When we do this
                        </p>
                        <p className="mt-2 text-sm text-tc-charcoal/85">
                          {s.cadence}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Button
                        asChild
                        className="bg-tc-fresh-cut hover:bg-tc-deep-forest text-white"
                      >
                        <Link href={`/quote?service=${s.slug}`}>
                          Quote this service
                        </Link>
                      </Button>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors"
                      >
                        See full {s.short.toLowerCase()} page
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
