// Instagram strip — pulls real posts via /api/instagram if a token is set,
// otherwise falls back to a curated grid of generated images.
//
// Server component by default — fetches at request time, cached 1 hour.

import Image from "next/image";
import { Instagram } from "lucide-react";

interface IGItem {
  id: string;
  src: string;
  alt: string;
  permalink: string;
  caption?: string;
}

// Six curated fallback tiles — used when no IG token is configured.
// We reuse our own generated photography so the grid still looks like a real route week.
const fallback: IGItem[] = [
  {
    id: "fb-1",
    src: "/images/case-shortpump-stripes.jpg",
    alt: "Striped Short Pump colonial lawn",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Tuesdays in Short Pump.",
  },
  {
    id: "fb-2",
    src: "/images/service-mulch.jpg",
    alt: "Hardwood mulch around hydrangea",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Bed reset before lunch.",
  },
  {
    id: "fb-3",
    src: "/images/case-wyndham-reset.jpg",
    alt: "Wyndham reset hero",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Wyndham reset, one day.",
  },
  {
    id: "fb-4",
    src: "/images/service-mowing.jpg",
    alt: "Mower pass over fescue",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Sharp blades. Always.",
  },
  {
    id: "fb-5",
    src: "/images/ba-fan-after.jpg",
    alt: "Small Fan townhouse install",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Eight feet of front yard. Big difference.",
  },
  {
    id: "fb-6",
    src: "/images/service-cleanup.jpg",
    alt: "Driveway leaf blow",
    permalink: "https://instagram.com/topcutlandscaping804",
    caption: "Leaf season is here.",
  },
];

async function fetchIG(): Promise<IGItem[]> {
  // No token? Show the fallback grid.
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) return fallback;
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink,media_type&limit=6&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
      // Cache 1 hour — IG's not a live feed for our purposes.
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    return (data.data ?? []).map(
      (item: {
        id: string;
        caption?: string;
        media_url: string;
        thumbnail_url?: string;
        permalink: string;
        media_type: string;
      }) => ({
        id: item.id,
        src: item.media_type === "VIDEO" ? item.thumbnail_url ?? "" : item.media_url,
        alt: item.caption?.slice(0, 80) ?? "Top Cut Landscaping work in Henrico",
        permalink: item.permalink,
        caption: item.caption,
      })
    );
  } catch {
    return fallback;
  }
}

export async function InstagramGrid() {
  const items = await fetchIG();
  return (
    <section className="py-24 md:py-32 bg-tc-warm-cream">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-tc-fresh-cut">
              From this week&rsquo;s route
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-tc-deep-navy tracking-tight">
              @topcutlandscaping804
            </h2>
          </div>
          <a
            href="https://instagram.com/topcutlandscaping804"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-tc-deep-navy hover:text-tc-fresh-cut transition-colors"
          >
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {items.slice(0, 6).map((it) => (
            <li key={it.id}>
              <a
                href={it.permalink}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-tc-fog"
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width:1024px) 16vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-tc-deep-navy/0 group-hover:bg-tc-deep-navy/55 transition-colors duration-500" />
                {it.caption && (
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-tc-warm-cream text-xs leading-snug line-clamp-3">
                      {it.caption}
                    </p>
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
