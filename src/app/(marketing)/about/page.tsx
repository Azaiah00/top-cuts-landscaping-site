// About — Carson's origin story, values, why we're called Top Cut.

import type { Metadata } from "next";
import Image from "next/image";
import { MagazineHero } from "@/components/sections/MagazineHero";
import { CTABand } from "@/components/sections/CTABand";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { Reveal } from "@/components/sections/Reveal";
import { SectionEyebrow } from "@/components/sections/SectionEyebrow";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Carson Tinsley has run Top Cut Landscaping out of Henrico, Virginia since 2008. Small crew on purpose. Owner-operator on every property.",
  path: "/about",
});

const values = [
  {
    title: "Craft",
    body: "We hand-prune, we sharpen blades twice a week, and we hand-edge every bed before we mulch. Faster isn't the goal — better is.",
  },
  {
    title: "Consistency",
    body: "Same day, same crew, same height, same standard. The yard you signed up for in March looks the same in November.",
  },
  {
    title: "Community",
    body: "Most of our work comes by neighbor referral. We treat every property like the one next door is watching — because it usually is.",
  },
];

const gear = [
  "Exmark Lazer Z (60-in deck)",
  "Stihl trimmers + edgers (FS series)",
  "Plug aerators (Ryan / Classen)",
  "Felco hand pruners",
  "Echo PB-9010 backpack blower",
  "Gravely walk-behinds for tight lots",
];

export default function AboutPage() {
  return (
    <>
      <MagazineHero
        eyebrow="About"
        title="A small Henrico crew, doing the work right, since 2008."
      />

      {/* Story */}
      <section className="py-20 md:py-28 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-tc-fog">
              <Image
                src="/images/founder-portrait.jpg"
                alt="Carson Tinsley, owner of Top Cut Landscaping, on a Wyndham property at golden hour."
                fill
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6 space-y-6 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
            <Reveal>
              <p className="drop-cap text-xl md:text-2xl text-tc-charcoal">
                I grew up cutting my dad&rsquo;s grass and arguing about the
                lines. Started Top Cut in 2008 out of a single-bay garage with
                a 21-inch push mower and a flyer I made in Word.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Seventeen years later, we&rsquo;re still small on purpose.
                I&rsquo;m on every property at least once a season. The crew has
                been with me an average of six years. We don&rsquo;t
                subcontract, we don&rsquo;t upsell, and we don&rsquo;t leave a
                yard until it looks like the picture in our heads.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                We could be twice the size and half the standard. We&rsquo;d
                rather grow slow, keep the same trucks, and let the work be the
                marketing.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-tc-stone pt-2">
                — Carson Tinsley, Owner
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-tc-pure-white border-y border-tc-fog">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <SectionEyebrow>What we believe</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-3xl font-display font-medium text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-tc-deep-navy">
              Three things we agreed on a long time ago.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="border-t border-tc-fog pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-fresh-cut">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-tc-deep-navy">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-tc-charcoal/80">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why "Top Cut" */}
      <section className="py-24 md:py-32 bg-tc-warm-cream">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <Reveal>
            <SectionEyebrow>The name</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
              Why we&rsquo;re called Top Cut.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-tc-charcoal/85">
              A &ldquo;top cut&rdquo; is the highest, cleanest setting on a
              mower deck — the one that lets the grass stay healthy and stripe
              the deepest. We named the company for the standard, not the
              shortcut.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gear we trust */}
      <section className="py-24 md:py-32 bg-tc-pure-white border-y border-tc-fog">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <SectionEyebrow>The shop</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-tc-deep-navy tracking-tight">
              Gear we trust.
            </h2>
            <p className="mt-4 text-base text-tc-stone max-w-md">
              The boring honest list. Nothing on here is sponsored — these are
              just the brands we&rsquo;ve broken, replaced, and bought again.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {gear.map((g) => (
                <li
                  key={g}
                  className="border-b border-tc-fog py-4 text-tc-deep-navy font-display text-lg"
                >
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FounderQuote
        quote="Same trucks, same crew, same standard. We grow slow on purpose."
      />

      <CTABand />
    </>
  );
}
