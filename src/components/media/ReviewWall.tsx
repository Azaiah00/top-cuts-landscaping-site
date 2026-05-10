// Masonry review wall — varied card heights, source badge per card.
// Pure CSS columns. Avoids JS layout libraries; the column-break
// utility tells each child not to split between columns.

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Review } from "@/content/reviews";
import { cn } from "@/lib/utils";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "fill-tc-fresh-cut text-tc-fresh-cut" : "text-tc-fog"
          )}
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="break-inside-avoid bg-tc-pure-white border border-tc-fog rounded-sm p-6 md:p-7 shadow-[0_1px_0_rgba(20,22,26,0.04)] transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <StarRow rating={review.rating} />
        <Badge tone="fog">{review.source}</Badge>
      </div>
      <p className="font-display text-lg md:text-xl leading-snug text-tc-deep-navy">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 text-sm">
        <div>
          <p className="font-medium text-tc-charcoal">{review.name}</p>
          <p className="text-tc-stone text-xs">{review.neighborhood}</p>
        </div>
        {review.service && (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-tc-stone">
            {review.service}
          </span>
        )}
      </div>
    </article>
  );
}

export function ReviewWall({
  reviews,
  className,
}: {
  reviews: Review[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        // CSS columns give us masonry without a JS lib.
        "columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]",
        className
      )}
    >
      {reviews.map((r) => (
        <div key={r.id} className="mb-5 md:mb-6">
          <ReviewCard review={r} />
        </div>
      ))}
    </div>
  );
}
