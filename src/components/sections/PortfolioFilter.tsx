// Client-side filter for the portfolio grid.
// Three filter axes: service, neighborhood, size. All-or-one selection per axis.
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  caseStudies,
  allServices,
  allNeighborhoods,
  allSizes,
  type CaseStudy,
} from "@/content/portfolio";
import { PortfolioCard } from "@/components/media/PortfolioCard";
import { cn } from "@/lib/utils";

type Axis = "service" | "neighborhood" | "size";

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
        active
          ? "bg-tc-deep-navy text-tc-warm-cream border-tc-deep-navy"
          : "bg-tc-warm-cream text-tc-deep-navy border-tc-fog hover:border-tc-deep-navy"
      )}
    >
      {children}
    </button>
  );
}

export function PortfolioFilter() {
  const [filters, setFilters] = useState<{
    service: string | null;
    neighborhood: string | null;
    size: CaseStudy["size"] | null;
  }>({ service: null, neighborhood: null, size: null });

  function toggle(axis: Axis, value: string) {
    setFilters((f) => ({
      ...f,
      [axis]: f[axis] === value ? null : value,
    }));
  }

  const filtered = useMemo(() => {
    return caseStudies.filter((c) => {
      if (filters.service && !c.services.includes(filters.service)) return false;
      if (filters.neighborhood && c.neighborhood !== filters.neighborhood)
        return false;
      if (filters.size && c.size !== filters.size) return false;
      return true;
    });
  }, [filters]);

  const hasFilter =
    filters.service !== null ||
    filters.neighborhood !== null ||
    filters.size !== null;

  return (
    <div>
      {/* Filter rows */}
      <div className="space-y-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone mb-3">
            Service
          </p>
          <div className="flex flex-wrap gap-2">
            {allServices.map((s) => (
              <Pill
                key={s}
                active={filters.service === s}
                onClick={() => toggle("service", s)}
              >
                {s}
              </Pill>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone mb-3">
            Neighborhood
          </p>
          <div className="flex flex-wrap gap-2">
            {allNeighborhoods.map((n) => (
              <Pill
                key={n}
                active={filters.neighborhood === n}
                onClick={() => toggle("neighborhood", n)}
              >
                {n}
              </Pill>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone mb-3">
            Project size
          </p>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((s) => (
              <Pill
                key={s}
                active={filters.size === s}
                onClick={() => toggle("size", s)}
              >
                {s}
              </Pill>
            ))}
          </div>
        </div>
        {hasFilter && (
          <button
            type="button"
            onClick={() =>
              setFilters({ service: null, neighborhood: null, size: null })
            }
            className="text-sm text-tc-stone hover:text-tc-deep-navy underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-tc-stone">
        Showing {filtered.length} of {caseStudies.length} projects
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-tc-stone">
          No projects match those filters yet. Try clearing one.
        </p>
      )}
    </div>
  );
}
