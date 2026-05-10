// Small pill — used for review source tags, project tags, etc.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "navy" | "green" | "fog";
}

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
    default: "bg-tc-fog text-tc-deep-navy",
    navy: "bg-tc-deep-navy text-tc-warm-cream",
    green: "bg-tc-fresh-cut text-white",
    fog: "bg-tc-warm-cream text-tc-stone border border-tc-fog",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
