// Client-side filter for the /reviews page — by service tag.
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReviewCard } from "@/components/media/ReviewWall";
import type { Review } from "@/content/reviews";
import { cn } from "@/lib/utils";

export function ReviewsClient({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<string | null>(null);

  // Unique service tags drawn from the seeded reviews.
  const services = useMemo(() => {
    return Array.from(
      new Set(reviews.map((r) => r.service).filter(Boolean) as string[])
    ).sort();
  }, [reviews]);

  const filtered = filter
    ? reviews.filter((r) => r.service === filter)
    : reviews;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
            filter === null
              ? "bg-tc-deep-navy text-tc-warm-cream border-tc-deep-navy"
              : "bg-tc-warm-cream text-tc-deep-navy border-tc-fog hover:border-tc-deep-navy"
          )}
        >
          All ({reviews.length})
        </button>
        {services.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              filter === s
                ? "bg-tc-deep-navy text-tc-warm-cream border-tc-deep-navy"
                : "bg-tc-warm-cream text-tc-deep-navy border-tc-fog hover:border-tc-deep-navy"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
        <AnimatePresence>
          {filtered.map((r) => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 md:mb-6 break-inside-avoid"
            >
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
