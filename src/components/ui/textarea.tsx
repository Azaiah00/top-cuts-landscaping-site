// Multi-line input — used by contact + quote calculator notes.
import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full min-h-[120px] rounded-md border border-tc-fog bg-tc-pure-white px-4 py-3 text-base text-tc-charcoal",
          "placeholder:text-tc-stone/70",
          "focus:border-tc-fresh-cut focus:outline-none focus:ring-2 focus:ring-tc-fresh-cut/40",
          "disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
