// Journal index — large featured post on top, grid of remaining posts.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postsByDate } from "@/content/journal";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/sections/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Journal",
  description:
    "Field notes from a Henrico landscape crew — mulch, mowing, design, and the boring craft details behind a great-looking yard.",
  path: "/journal",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function JournalIndex() {
  const [featured, ...rest] = postsByDate;
  return (
    <>
      <MagazineHero
        eyebrow="Journal"
        title="Field notes from the route."
        intro="Plant lists, opinionated takes on mulch, the calendar that actually works in central Virginia. Written by Carson, between properties."
      />

      {/* Featured post — full bleed */}
      <section className="py-16 md:py-24 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <Link
              href={`/journal/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-tc-fog">
                <Image
                  src={featured.hero}
                  alt={featured.heroAlt}
                  fill
                  sizes="(min-width:1024px) 60vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                  Featured · {featured.category}
                </p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy leading-[1.05] tracking-tight">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-tc-charcoal/80">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-tc-stone">
                  <span>{formatDate(featured.date)}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readingTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-tc-deep-navy group-hover:text-tc-fresh-cut font-medium transition-colors">
                  Read the post
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rest of the posts */}
      <section className="pb-24 md:pb-32 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06} as="li">
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-tc-fog">
                    <Image
                      src={post.hero}
                      alt={post.heroAlt}
                      fill
                      sizes="(min-width:1024px) 32vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-tc-deep-navy leading-snug group-hover:text-tc-fresh-cut transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-tc-charcoal/75 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-tc-stone">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        headline="Reading is great. Doing is better."
        sub="Send Carson a note about your property and we'll show up to look."
      />
    </>
  );
}
