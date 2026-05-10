// Tile used in portfolio grid + home carousel.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/portfolio";

export function PortfolioCard({
  project,
  className,
}: {
  project: CaseStudy;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block ${className ?? ""}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-tc-fog">
        <Image
          src={project.hero}
          alt={project.heroAlt}
          fill
          sizes="(min-width:1024px) 30vw, 80vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tc-deep-navy/55 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] bg-tc-warm-cream/95 text-tc-deep-navy px-3 py-1.5 rounded-full">
            {project.neighborhood}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-tc-warm-cream text-xl md:text-2xl leading-tight">
              {project.name}
            </h3>
            <p className="mt-1 text-tc-warm-cream/80 text-sm">
              {project.services.join(" · ")}
            </p>
          </div>
          <span className="shrink-0 w-10 h-10 rounded-full bg-tc-warm-cream/95 text-tc-deep-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
