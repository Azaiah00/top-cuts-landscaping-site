// MagazineHero — interior page hero block. Eyebrow + Fraunces H1 + sub.
// Generous whitespace, no image. Used on services index, about, journal etc.

import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

export function MagazineHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="pt-36 pb-16 md:pt-48 md:pb-24 bg-tc-warm-cream border-b border-tc-fog">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <Reveal>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display font-medium text-[44px] leading-[1.05] md:text-[72px] md:leading-[1.02] tracking-[-0.02em] text-tc-deep-navy">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-tc-charcoal/80">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
