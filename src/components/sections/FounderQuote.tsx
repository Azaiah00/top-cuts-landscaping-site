// Two-column founder moment. Image left, italic Fraunces quote right.
// Used on home + about + service detail pages.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FounderQuote({
  quote,
  name = "Carson Tinsley",
  role = "Owner, Top Cut Landscaping",
  image = "/images/founder-portrait.jpg",
  imageAlt = "Carson Tinsley, owner of Top Cut Landscaping, leaning on a mower at golden hour.",
  cta,
}: {
  quote: string;
  name?: string;
  role?: string;
  image?: string;
  imageAlt?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="py-24 md:py-32 bg-tc-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Portrait */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-tc-fog">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Quote */}
          <Reveal delay={0.12} className="md:col-span-7">
            <p className="font-display italic text-2xl md:text-[34px] leading-[1.25] text-tc-deep-navy">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-tc-fresh-cut" aria-hidden />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-tc-stone">
                {name} — {role}
              </p>
            </div>
            {cta && (
              <Link
                href={cta.href}
                className="mt-8 inline-flex items-center gap-2 text-tc-deep-navy hover:text-tc-fresh-cut font-medium transition-colors group"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
