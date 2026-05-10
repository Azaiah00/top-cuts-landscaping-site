// HomeHero — full-viewport hero with Ken-Burns background.
// Keeps the magazine-cover feel: small mono eyebrow, huge Fraunces H1, generous sub.
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function HomeHero() {
  const reduce = useReducedMotion();
  // Animation defaults match brand motion language (see brand book).
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-tc-deep-navy text-tc-warm-cream">
      {/* Background — slow Ken Burns zoom, no animation if user prefers reduced motion */}
      <div className="absolute inset-0">
        <div className={reduce ? "absolute inset-0" : "absolute inset-0 ken-burns"}>
          <Image
            src="/images/hero-dawn-colonial.jpg"
            alt="A two-story brick Virginia colonial home at golden-hour dawn with a perfectly striped emerald lawn and morning mist."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Editorial gradient — keeps text legible without flattening the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-tc-deep-navy/30 via-transparent to-tc-deep-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-tc-deep-navy/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          // Tighter tracking + smaller size on mobile so the line never
          // overflows narrow phone viewports (was causing horizontal scroll).
          className="block max-w-full font-mono text-[10px] tracking-[0.14em] sm:text-[11px] sm:tracking-[0.2em] md:text-xs uppercase text-tc-fresh-cut"
        >
          Henrico · Short Pump · West End · Since 2008
        </motion.span>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mt-6 font-display font-medium text-[44px] leading-[1.02] sm:text-[64px] md:text-[84px] md:leading-[0.98] tracking-[-0.02em] text-tc-warm-cream max-w-4xl"
        >
          The yard your <span className="italic font-light">neighbors</span>{" "}
          notice.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-tc-warm-cream/85"
        >
          Top Cut is a small Henrico crew obsessed with clean lines, deep
          mulch, and stripes you can see from the porch. Carson Tinsley,
          owner-operator, on every property.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <Link
            href="/quote"
            className="group inline-flex items-center gap-3 bg-tc-fresh-cut text-white font-medium text-base md:text-lg px-7 py-4 rounded-sm hover:bg-tc-deep-forest transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-tc-warm-cream font-medium hover:text-tc-fresh-cut transition-colors"
          >
            See the Portfolio
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.85 }}
          className="mt-10 md:mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-tc-warm-cream/80"
        >
          <span className="inline-flex items-center gap-2">
            <Star className="w-4 h-4 fill-tc-fresh-cut text-tc-fresh-cut" />
            4.9 across 100+ reviews
          </span>
          <span aria-hidden className="hidden sm:inline">·</span>
          <span>1,000+ properties</span>
          <span aria-hidden className="hidden sm:inline">·</span>
          <span>Licensed &amp; Insured</span>
        </motion.div>
      </div>
    </section>
  );
}
