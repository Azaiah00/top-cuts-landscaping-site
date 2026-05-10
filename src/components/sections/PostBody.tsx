// Renders a journal post's typed Block[] as semantic HTML.
// Lives separately so the page route can stay slim.

import type { Block } from "@/content/journal";

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-tc-charcoal/85">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            // First paragraph gets a drop cap for editorial rhythm
            if (i === 0)
              return (
                <p key={i} className="drop-cap text-xl md:text-2xl text-tc-charcoal">
                  {b.text}
                </p>
              );
            return <p key={i}>{b.text}</p>;
          case "h2":
            return (
              <h2
                key={i}
                className="font-display text-2xl md:text-3xl text-tc-deep-navy tracking-tight pt-4"
              >
                {b.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 marker:text-tc-fresh-cut">
                {b.items.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 marker:text-tc-fresh-cut">
                {b.items.map((it, k) => (
                  <li key={k}>{it}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-tc-fresh-cut pl-6 my-8 font-display italic text-2xl md:text-[28px] leading-[1.3] text-tc-deep-navy"
              >
                &ldquo;{b.text}&rdquo;
                {b.cite && (
                  <footer className="mt-3 not-italic font-mono text-xs uppercase tracking-[0.18em] text-tc-stone">
                    — {b.cite}
                  </footer>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
