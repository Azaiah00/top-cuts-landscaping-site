// Drag-to-reveal before/after slider.
// Pure CSS clip-path with React state. Pointer + touch + keyboard support.
// Caption sits below.
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  /** Aspect ratio CSS value, e.g. "16/9", "3/2" */
  aspectRatio?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  caption,
  aspectRatio = "16/9",
  className,
}: BeforeAfterSliderProps) {
  // Position is 0–100, percent of width where the divider sits.
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Compute new position from a clientX coordinate
  const updateFromX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  // Pointer drag — works for mouse and touch.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      updateFromX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromX]);

  // Keyboard — arrow keys move the handle.
  const onKey: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <figure className={cn("w-full", className)}>
      <div
        ref={wrapRef}
        role="slider"
        aria-label="Before and after image comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={(e) => {
          dragging.current = true;
          document.body.style.userSelect = "none";
          updateFromX(e.clientX);
        }}
        // touch-action: pan-y lets the page scroll vertically when the user's
        // finger drifts onto the slider mid-scroll. Horizontal pan is consumed
        // by us for the drag handle. (Was "touch-none", which blocked scroll.)
        className="relative w-full overflow-hidden rounded-sm bg-tc-fog cursor-ew-resize select-none [touch-action:pan-y] focus:outline-none focus-visible:ring-2 focus-visible:ring-tc-fresh-cut"
        style={{ aspectRatio }}
      >
        {/* AFTER — sits as base layer */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width:1024px) 80vw, 100vw"
          className="object-cover"
        />

        {/* BEFORE — overlaid with clip-path, only the left portion shows */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(min-width:1024px) 80vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10">
          <Badge tone="navy">Before</Badge>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <Badge tone="green">After</Badge>
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute inset-y-0 z-10 w-[2px] bg-tc-warm-cream shadow-[0_0_10px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-tc-warm-cream shadow-lg flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
              className="text-tc-deep-navy"
            >
              <path
                d="M7 5L3 10L7 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5L17 10L13 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-tc-stone">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
