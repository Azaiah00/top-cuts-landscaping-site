// Tiny mono uppercase label that sits above editorial section titles.
// Keeps brand voice consistent across pages.
import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
  tone = "green",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "green" | "navy" | "cream" | "stone";
}) {
  const tones = {
    green: "text-tc-fresh-cut",
    navy: "text-tc-deep-navy",
    cream: "text-tc-warm-cream/80",
    stone: "text-tc-stone",
  } as const;
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] uppercase tracking-[0.2em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
