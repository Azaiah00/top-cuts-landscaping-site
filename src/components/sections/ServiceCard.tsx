// ServiceCard — used in home asymmetric grid + services index.
// Image on top, copy below, hover reveals price + arrow.

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/content/services";

export function ServiceCard({
  service,
  // Variable heights make the home grid feel editorial
  size = "md",
  priority = false,
}: {
  service: Service;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}) {
  const aspect = {
    sm: "aspect-[4/5]",
    md: "aspect-[4/5]",
    lg: "aspect-[3/4]",
    xl: "aspect-[3/4]",
  }[size];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block focus:outline-none"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-sm bg-tc-fog",
          aspect
        )}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle navy tint on hover for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-tc-deep-navy/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Hover-revealed price chip */}
        {service.priceFrom && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] bg-tc-warm-cream/95 text-tc-deep-navy px-3 py-1.5 rounded-full">
              {service.priceFrom}
            </span>
          </div>
        )}

        {/* Bottom: title sits over image */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-3">
          <h3 className="font-display text-tc-warm-cream text-2xl md:text-[28px] leading-tight tracking-tight">
            {service.name}
          </h3>
          <span className="shrink-0 w-10 h-10 rounded-full bg-tc-warm-cream/95 text-tc-deep-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      <p className="mt-4 text-tc-charcoal/80 text-base leading-relaxed">
        {service.tagline}
      </p>
    </Link>
  );
}
