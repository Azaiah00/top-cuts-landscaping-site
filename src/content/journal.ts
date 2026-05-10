// Journal posts.
// We model posts as a typed tree of content blocks (heading, para, list, quote).
// This avoids MDX bundler complexity while still giving us editorial flexibility.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  hero: string;
  heroAlt: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  author: string;
  featured?: boolean;
  body: Block[];
}

// 6 seeded magazine-voice posts.
export const posts: Post[] = [
  {
    slug: "how-to-read-a-lawn",
    title:
      "How to read a lawn: a 30-second walk-around for Henrico homeowners",
    excerpt:
      "Before you call a landscaper, walk your own yard. Here's what Carson looks for in the first 30 seconds — thatch, edges, irrigation patterns, and the weeds that tell you what's actually wrong.",
    category: "Field Notes",
    hero: "/images/service-aeration.jpg",
    heroAlt:
      "Close-up of fescue plugs pulled from a Henrico lawn, illustrating soil compaction and root depth.",
    date: "2026-04-12",
    readingTime: "5 min read",
    author: "Carson Tinsley",
    featured: true,
    body: [
      {
        type: "p",
        text: "Before you call anyone — including us — walk your own yard. Most of what's wrong with a lawn is visible in 30 seconds if you know what to look for. Here's the order I do it in, every time, on every property I quote.",
      },
      { type: "h2", text: "1. Stand at the curb and squint." },
      {
        type: "p",
        text: "Lose the detail. You're looking for color uniformity. A healthy fescue lawn reads one color from the curb — maybe two if there's a shaded section. If you see five different greens (and a few yellows), you've got a mix of grass species, weed pressure, or different mowing heights from week to week.",
      },
      { type: "h2", text: "2. Walk the edge of one bed." },
      {
        type: "p",
        text: "Push the toe of your shoe under the mulch. If you hit hard, dry, root-bound dirt within an inch, the bed has been mulched on top of itself for years. The fix isn't more mulch — it's pulling the old layer off and starting clean.",
      },
      { type: "h2", text: "3. Look at the weeds, not the grass." },
      {
        type: "p",
        text: "Weeds are diagnostic. Clover means low nitrogen. Wild violet means too much shade and acidic soil. Crabgrass means thin turf and no spring pre-emergent. Nutsedge means drainage. The weed tells you the problem before you ever pull a soil sample.",
      },
      { type: "h2", text: "4. Pull a plug with your fingers." },
      {
        type: "p",
        text: "Grab a tuft of grass at the base and pull straight up. If two inches of thatch comes with it, you've got a thatch problem. If the soil clings to the roots in a brick-shaped block, you've got compaction. Both fix with fall aeration.",
      },
      { type: "h2", text: "5. Look at where water sits." },
      {
        type: "p",
        text: "Walk the property line a few hours after a rain. Standing water near the house is a drainage problem disguised as a lawn problem. No amount of grass will fix that — only grading or a French drain will.",
      },
      { type: "h2", text: "What this saves you." },
      {
        type: "p",
        text: "Knowing the shape of your problem before you call a landscaper saves you money and keeps you from being upsold. When someone tells you 'your whole lawn needs to be ripped out and re-sodded' — and you've already noticed the issue is a 6-foot shade band along the north fence — you know to push back.",
      },
      {
        type: "quote",
        text: "Most lawns don't need a rescue. They need three Saturdays and a guy who's willing to look before he sells.",
        cite: "Carson",
      },
    ],
  },

  {
    slug: "case-for-double-shredded-mulch",
    title:
      "The case for double-shredded hardwood mulch (and the case against the dyed black stuff)",
    excerpt:
      "The mulch you choose changes how your house reads from the curb — and how the bed looks in month nine. An opinionated take from a guy who has installed a few thousand cubic yards of the stuff.",
    category: "Materials",
    hero: "/images/service-mulch.jpg",
    heroAlt:
      "Hands placing rich brown double-shredded hardwood mulch in a freshly edged Virginia foundation bed.",
    date: "2026-03-22",
    readingTime: "6 min read",
    author: "Carson Tinsley",
    body: [
      {
        type: "p",
        text: "There are roughly five mulch options sold at every garden center within fifty miles of Richmond. We use one of them on almost every property: double-shredded hardwood. Here's why.",
      },
      { type: "h2", text: "What 'double-shredded' actually means." },
      {
        type: "p",
        text: "It means the wood has been run through a tub grinder twice. The first pass breaks pallets, branches, and stumps into rough chunks. The second pass shreds those chunks into long, fibrous pieces that lock together when you spread them. That interlocking is the whole game — it keeps mulch where you put it instead of washing into your driveway after the next storm.",
      },
      { type: "h2", text: "Why the color matters more than you think." },
      {
        type: "p",
        text: "Fresh, undyed hardwood is the color of strong coffee. Three months in, it lightens slightly to a deep cocoa. Six months in, it's still doing its job and reads as 'cared for' from the curb. Dyed black mulch starts dramatic and finishes worse — it bleaches gray within 60 days, bleeds onto sidewalks the first time it rains, and never breaks down into the soil.",
      },
      { type: "h2", text: "Hardwood feeds your soil. Dyed mulch doesn't." },
      {
        type: "p",
        text: "Real hardwood mulch is just wood. Over a season, the bottom layer breaks down into the bed and adds organic matter — exactly what central VA clay needs. Dyed mulch is usually pallet wood ground up and dyed with iron oxide; it doesn't compost meaningfully and it can lock up nitrogen as it sits.",
      },
      { type: "h2", text: "Pine fines have a place." },
      {
        type: "p",
        text: "We use pine fines on acid-loving plants — azaleas, blueberries, hydrangeas, anything in the rhododendron family. They're finer-textured, slightly acidic, and they look right against the foliage. But they don't hold a slope and they don't read as well from the curb, so we keep them to specific beds.",
      },
      { type: "h2", text: "How much you actually need." },
      {
        type: "p",
        text: "Two to three inches over the existing material. Anything thicker is wasted money and chokes plant roots. Never volcano around tree trunks. One yard covers about 100 sq ft at three inches; a typical Henrico front-and-side property runs three to five yards.",
      },
      {
        type: "quote",
        text: "If your mulch is gray and the edges are soft, the whole house starts to read tired. A fresh bed reset is the highest-leverage thing you can do for your curb appeal.",
        cite: "Carson",
      },
    ],
  },

  {
    slug: "why-we-mow-on-tuesdays",
    title: "Why we mow on Tuesdays in Wyndham",
    excerpt:
      "Operations as craft. The boring backstory of how we built a mowing route, and why your same-day-every-week service matters more than the deck size.",
    category: "Behind the Crew",
    hero: "/images/service-mowing.jpg",
    heroAlt:
      "A perfectly striped Virginia lawn at golden hour, showing the rotated diagonal pattern.",
    date: "2026-03-08",
    readingTime: "4 min read",
    author: "Carson Tinsley",
    body: [
      {
        type: "p",
        text: "Sounds boring, but it's one of the things I'm most proud of about how Top Cut runs: every property knows what day it gets mowed, and we hit that day rain-shifts notwithstanding.",
      },
      { type: "h2", text: "Routes are stitched, not assigned." },
      {
        type: "p",
        text: "Every Sunday night I sit at the kitchen table and lay out the next week. Wyndham gets Tuesday because the route stitches cleanly through Wyndham, Salisbury, and Tuckahoe in a single loop — minimum trailer time, maximum mower time. The crew starts at 7:30 a.m. on the south end and finishes by 4 on the north.",
      },
      { type: "h2", text: "Same day matters because grass remembers." },
      {
        type: "p",
        text: "A lawn cut every Tuesday at 3.5 inches behaves differently than one cut every Wednesday-or-maybe-Thursday at whatever height the trainee feels like. Same day, same crew, same height, blade rotation alternated each week — that's how stripes set deep and how you avoid the scalped patches that happen when grass got a week longer than expected.",
      },
      { type: "h2", text: "Sharp blades, every other day." },
      {
        type: "p",
        text: "Dull blades tear grass instead of cutting it. Torn tips brown out within 24 hours. The lawn looks fine on Tuesday, looks worse on Friday. We swap blades every other day in season — boring, expensive, non-negotiable.",
      },
      {
        type: "p",
        text: "If you're shopping for a mowing service and they can't tell you what day they'll be on your property — or how often they sharpen — keep shopping.",
      },
    ],
  },

  {
    slug: "spring-cleanup-october-planning",
    title: "Spring cleanup, October planning",
    excerpt:
      "The seasonal calendar that actually works in central Virginia. When to schedule what — and what to plan for in October if you want a great spring.",
    category: "Calendar",
    hero: "/images/service-cleanup.jpg",
    heroAlt:
      "Fall leaves swirling off a clean Virginia driveway in golden afternoon light.",
    date: "2026-02-18",
    readingTime: "5 min read",
    author: "Carson Tinsley",
    body: [
      {
        type: "p",
        text: "Most homeowners think about the yard in two windows: 'oh god the lawn is wet and ugly' and 'oh god it's full of leaves.' Here's the calendar that actually keeps a Henrico property looking right year-round, with the fewest surprise calls to us.",
      },
      { type: "h2", text: "Late February" },
      {
        type: "p",
        text: "Dormant pruning. Anything that needs structural cuts (crepe myrtle lift, ornamental tree shaping, hand-thinning of holly) happens before bud break.",
      },
      { type: "h2", text: "Early March" },
      {
        type: "p",
        text: "Pre-emergent herbicide on the lawn before forsythia blooms. This is how you cut crabgrass pressure for the whole season.",
      },
      { type: "h2", text: "Mid-March to mid-April" },
      {
        type: "p",
        text: "Spring cleanup. Hand-rake beds, cut back perennials, edge everything. Mulch refresh — two to three inches. First mow of the season at a slightly higher height to let the lawn recover.",
      },
      { type: "h2", text: "May–August" },
      {
        type: "p",
        text: "Weekly mowing at 3.5 inches. Light hand-shaping of boxwood and yew after the first growth flush. Watering — one inch per week, including rain.",
      },
      { type: "h2", text: "Mid-September to mid-October" },
      {
        type: "p",
        text: "The single most important window of the year for a fescue lawn. Core aeration + over-seed + starter fertilizer. Skip this and you fight thin turf all next summer.",
      },
      { type: "h2", text: "Late October" },
      {
        type: "p",
        text: "Fall mulch refresh — a thinner layer than spring, just enough to look set for winter and protect roots through the freeze. Cleanup of beds, ornamental grasses left for winter interest.",
      },
      { type: "h2", text: "November–December" },
      {
        type: "p",
        text: "Leaf cleanup, gutter coordination, dormant pruning if not done in February. Final mow at slightly lower height to discourage snow mold.",
      },
      {
        type: "quote",
        text: "If you do nothing else: aerate in October. It is the single best dollar a Henrico homeowner can spend on their lawn.",
        cite: "Carson",
      },
    ],
  },

  {
    slug: "five-plants-short-pump-colonial",
    title:
      "Five plants that look right in front of a Short Pump colonial",
    excerpt:
      "Boxwood, hydrangea, hellebore, liriope, dwarf nandina. The small list of plants we lean on when we want a foundation bed that holds up for fifteen years.",
    category: "Plant Notes",
    hero: "/images/service-install.jpg",
    heroAlt:
      "A foundation bed of boxwood, hydrangea, and dwarf nandina along a brick walkway in Short Pump.",
    date: "2026-01-30",
    readingTime: "7 min read",
    author: "Carson Tinsley",
    body: [
      {
        type: "p",
        text: "There are about a thousand plants that grow in central Virginia. We use the same five (give or take) for most foundation beds in front of brick colonials. Boring? Maybe. Here's why.",
      },
      { type: "h2", text: "1. Boxwood — the bones." },
      {
        type: "p",
        text: "'Green Velvet' or 'Winter Gem' for tighter forms, 'Wintergreen' for taller hedges. Evergreen, structured, deer-resistant. Hand-pruned (not sheared) once a year, they look like architecture for decades. Our default frame on every brick colonial install.",
      },
      { type: "h2", text: "2. Hydrangea — the moment." },
      {
        type: "p",
        text: "'Limelight' paniculata is our workhorse — full sun tolerant, blooms reliably, cuts back hard in late winter and comes back bigger every year. For shadier exposures we use 'Endless Summer' macrophylla, but they're fussier with frost and we tell clients honestly when not to plant them.",
      },
      { type: "h2", text: "3. Hellebore — the late-winter gift." },
      {
        type: "p",
        text: "Helleborus orientalis or 'Ivory Prince'. Evergreen ground-layer, deer-proof, blooms in February when nothing else does. We tuck them under hydrangeas and at the corner of porches. Almost no maintenance — cut last year's foliage off in January and let them go.",
      },
      { type: "h2", text: "4. Liriope — the edge." },
      {
        type: "p",
        text: "'Big Blue' or variegated. We use it as a clean edging line where bed meets lawn — keeps mulch from drifting onto turf and gives a soft finished line. Cut back hard in late winter. Easy.",
      },
      { type: "h2", text: "5. Dwarf nandina — the punctuation." },
      {
        type: "p",
        text: "'Firepower' or 'Gulf Stream'. Evergreen, color-shifting (green to red through fall and winter), tops out around two feet so it never outgrows the bed. Single plants at the corners of walks or at the entry — instant punctuation.",
      },
      { type: "h2", text: "Why we don't reach further." },
      {
        type: "p",
        text: "Could we plant something rarer? Sure. But the brief on most Short Pump foundation beds is 'looks right in 15 years and doesn't ask much of the homeowner.' These five do that. The clients who want collector plantings get a different conversation, and a different bed.",
      },
    ],
  },

  {
    slug: "truth-about-lawn-striping",
    title: "The truth about lawn striping",
    excerpt:
      "It's not paint, it's not magic. It's physics. Why stripes look the way they look, what equipment actually creates them, and the patterns that hold up best.",
    category: "Craft",
    hero: "/images/hero-stripes-overhead.jpg",
    heroAlt:
      "Top-down drone view of a striped suburban lawn with crisp diagonal stripes catching late afternoon sun.",
    date: "2026-01-15",
    readingTime: "4 min read",
    author: "Carson Tinsley",
    body: [
      {
        type: "p",
        text: "Lawn stripes look like magic. They're not. They're physics — the way light reflects off grass blades that have been bent in different directions.",
      },
      { type: "h2", text: "What actually causes the stripe." },
      {
        type: "p",
        text: "When a mower passes over grass, a roller (or roller-shaped device) on the back of the deck flattens the blades in the direction of travel. Light reflecting off the bent side of a blade looks darker; light reflecting off the cut top looks lighter. Mow north-to-south and a stripe is dark. Mow south-to-north right next to it and that stripe is light. Same lawn, same height, two colors.",
      },
      { type: "h2", text: "Why some stripes are deeper." },
      {
        type: "p",
        text: "Three things drive stripe depth: grass type (cool-season fescue stripes much better than warm-season Bermuda), grass length (3 to 4 inches stripes best — too short doesn't bend, too long flops), and the roller (a real striping kit holds the blades down longer than just a mower deck).",
      },
      { type: "h2", text: "Patterns we use." },
      {
        type: "ul",
        items: [
          "Diagonal — the most flattering for almost any lot. Lengthens the visual line of the property.",
          "Cross-hatch — diagonal one direction, then perpendicular. We use it for show events.",
          "Perpendicular to the street — clean and formal, best on rectangular front lawns.",
          "We rotate the direction every week to keep the turf from leaning permanently.",
        ],
      },
      { type: "h2", text: "Why it's not just for looks." },
      {
        type: "p",
        text: "Rotating mow directions keeps turf upright and reduces wheel ruts. So the same craft that gets you stripes also gets you healthier grass. Win-win.",
      },
      {
        type: "quote",
        text: "I've spent more than I should admit on striping kits over the years. Worth every dollar.",
        cite: "Carson",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
export const postSlugs = posts.map((p) => p.slug);

// Sorted newest first (used by index)
export const postsByDate = [...posts].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);
