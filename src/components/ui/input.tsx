// Plain styled input shared by every form on the site.
import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Base — cream background, navy text, soft fog border, generous padding
          "flex h-12 w-full rounded-md border border-tc-fog bg-tc-pure-white px-4 py-2 text-base text-tc-charcoal",
          "placeholder:text-tc-stone/70",
          // Focus — brand green ring matches our global focus style
          "focus:border-tc-fresh-cut focus:outline-none focus:ring-2 focus:ring-tc-fresh-cut/40",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
