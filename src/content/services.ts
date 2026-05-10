// Service catalog — single source of truth.
// Used by Home grid, /services index, /services/[slug] detail, footer, calculator,
// and structured data. Add a new service here and it shows up everywhere.

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  // Short label for nav / cards
  short: string;
  // 1-line description shown on home / services index
  tagline: string;
  // Editorial 2-paragraph copy on service detail page
  paragraphs: [string, string];
  // Hero image (must exist in /public/images)
  image: string;
  // Alt text for the hero image
  imageAlt: string;
  // Bulleted "what's included" checklist
  included: string[];
  // Transparent pricing approach
  pricing: string;
  // Display label on cards e.g. "Starting at $40" or "Custom quote"
  priceFrom?: string;
  // When we typically perform this work in central VA
  cadence: string;
  // Founder voice — single sentence
  founderNote: string;
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "mowing",
    name: "Weekly Lawn Care",
    short: "Mowing",
    tagline:
      "Same day each week. Sharp blades. Stripes you can see from the porch.",
    paragraphs: [
      "We come on the same day each week, in a tight pattern, with sharp blades. The grass gets a clean cut — not torn, not scalped. Edges crisp. Sidewalks blown. Stripes set. We're in and out in under an hour on most lots.",
      "We rotate mowing direction weekly to keep the turf upright and reduce ruts. Blades are sharpened twice a week in season. If the lawn needs a different cut height for the weather, we adjust without being asked.",
    ],
    image: "/images/service-mowing.jpg",
    imageAlt:
      "Close-up of a sharp mower blade line carving stripes through bright green fescue at golden hour.",
    included: [
      "Mow at the correct height for season + grass type",
      "Edge all hard surfaces (sidewalks, driveway, beds)",
      "String-trim around obstacles",
      "Blow off all hard surfaces",
      "Stripe pattern rotated weekly",
      "Bag clippings on request",
    ],
    pricing:
      "Most weekly mows fall between $40 and $140 per visit, depending on lot size, slope, and number of obstacles. We give a firm price after a 10-minute walk of the property.",
    priceFrom: "From $40 / visit",
    cadence:
      "Weekly, March through November. Bi-weekly available in shoulder months.",
    founderNote:
      "I'm picky about edges and stripes. The lawn is the first thing your guests notice — it should be the best part.",
    faqs: [
      {
        q: "Do you mow in the rain?",
        a: "Only if conditions allow a clean cut without rutting. Otherwise we shift you to the next dry day on the route and let you know.",
      },
      {
        q: "Will you bag clippings?",
        a: "We mulch by default — it returns nitrogen to the lawn — but we'll bag at no extra charge if you prefer.",
      },
      {
        q: "How do you handle pet waste?",
        a: "We ask homeowners to clear the yard the night before. If we encounter it, we'll mow around and leave a polite note.",
      },
    ],
  },
  {
    slug: "mulch",
    name: "Mulch & Bed Work",
    short: "Mulch",
    tagline:
      "Hand-edged beds, deep brown hardwood, the whole property reading cared-for from the curb.",
    paragraphs: [
      "Premium hardwood, double-shredded, the color of strong coffee. We hand-edge the beds first, pull the weeds, lay a fresh 2–3 inches. The whole property reads as cared-for from the curb.",
      "We don't use dyed black or red mulch — it fades, it bleeds onto your driveway after the first rain, and it doesn't feed the soil. Real shredded hardwood breaks down into the bed, suppresses weeds for a full season, and looks better in month nine than dyed mulch does in week three.",
    ],
    image: "/images/service-mulch.jpg",
    imageAlt:
      "Hands in work gloves placing fresh dark hardwood mulch around a hydrangea in a clean-edged bed.",
    included: [
      "Hand-edge every bed with a half-moon edger",
      "Pull existing weeds and stray grass",
      "Apply granular pre-emergent (optional)",
      "Lay 2–3 inches of premium double-shredded hardwood",
      "Hand-tuck around plant crowns — no volcano mulching",
      "Blow off walks + driveway",
    ],
    pricing:
      "Installed at $90 per cubic yard, delivered. A typical Henrico front-and-side property runs 3–5 yards. We measure on the walk-through and quote firm.",
    priceFrom: "From $90 / yd installed",
    cadence:
      "Best windows: late March – early May (refresh) and late October (winter blanket).",
    founderNote:
      "If your mulch is gray and the edges are soft, the whole house starts to read tired. A fresh bed reset is the highest-leverage thing you can do for your curb appeal.",
    faqs: [
      {
        q: "Hardwood, dyed, or pine fines?",
        a: "Hardwood by default. Pine fines on request for acid-loving plant beds (azaleas, hydrangeas, blueberries). We don't recommend dyed.",
      },
      {
        q: "Can you do pre-emergent at the same time?",
        a: "Yes — it goes down before the mulch and gives roughly four months of weed suppression in central VA conditions.",
      },
      {
        q: "How thick should mulch be?",
        a: "2–3 inches over existing material. Anything thicker chokes roots and rots stems. We never volcano around tree trunks.",
      },
    ],
  },
  {
    slug: "cleanups",
    name: "Seasonal Cleanups",
    short: "Cleanups",
    tagline:
      "Spring puts the yard back to work. Fall puts it to bed. Both look like a different property when we leave.",
    paragraphs: [
      "Spring is when we put the yard back to work. Fall is when we put it to bed. Both look like a different property when we leave.",
      "We don't just blow leaves to the curb. We hand-rake bed interiors, pull dead annuals, cut back perennials at the right height, prune anything broken, and haul off everything we touch. The property gets a reset, not a vacuum.",
    ],
    image: "/images/service-cleanup.jpg",
    imageAlt:
      "A driveway corner being blown clean, swirl of fall leaves mid-air in golden afternoon light.",
    included: [
      "Hand-rake all beds + lawn perimeter",
      "Cut back perennials and ornamental grasses",
      "Prune any storm damage or broken branches",
      "Edge beds + walks for a clean reset",
      "Blow + bag all debris",
      "Haul-away included",
    ],
    pricing:
      "Most spring or fall cleanups land between $250 and $600 depending on lot size and tree cover. Estate properties quoted on the walk.",
    priceFrom: "From $250",
    cadence:
      "Spring: late February – mid-April. Fall: late October – early December.",
    founderNote:
      "A good cleanup is the difference between a yard that says 'someone lives here' and a yard that says 'someone takes care of this place.'",
    faqs: [
      {
        q: "Do you do gutters?",
        a: "We coordinate with a gutter partner we trust. Easier to do both at once than chase two appointments.",
      },
      {
        q: "Can you cut back my hydrangeas?",
        a: "Depends on the variety. We know which ones bloom on old wood — we won't accidentally cut next year's flowers.",
      },
      {
        q: "Do you remove storm debris?",
        a: "Yes. Anything we can lift goes in the truck. Larger limbs we coordinate with our tree partner.",
      },
    ],
  },
  {
    slug: "installation",
    name: "Landscape Installation",
    short: "Installation",
    tagline:
      "We plant for fifteen years from now, not next April.",
    paragraphs: [
      "We start with what you actually live with — the view from the kitchen window, the path the dog walks, the corner that floods. Then we plant for fifteen years from now, not next April.",
      "Every install starts with a 90-minute walk and a sketch on the truck tailgate. We tell you what works, what doesn't, what's worth the money, and what isn't. You'll get a plant list with mature sizes, a layout drawing, and a firm quote — before any shovel hits the ground.",
    ],
    image: "/images/service-install.jpg",
    imageAlt:
      "Newly installed boxwood hedge running along a brick walkway with fresh mulch in soft early-evening light.",
    included: [
      "On-site walk + sketch + plant list",
      "Sourcing from local growers we trust",
      "Soil amendment for each planting hole",
      "Installation + first-week watering plan",
      "Mulch + edge after planting",
      "One-year plant warranty",
    ],
    pricing:
      "Installs are custom — most front-yard refreshes land between $2,500 and $9,000. We always start with a free walk and sketch before quoting.",
    priceFrom: "Custom — schedule a walk",
    cadence:
      "Best windows: October – November (rooting season) and March – May.",
    founderNote:
      "If a designer talks about 'pop' and 'curb appeal' before they ask where you sit on the porch, walk away. We design from how you live first.",
    faqs: [
      {
        q: "Do you do hardscape too?",
        a: "We coordinate hardscape (patios, walls, walks) with masons we've worked with for years. One quote, one schedule, no finger-pointing.",
      },
      {
        q: "What if a plant dies?",
        a: "Year-one warranty on anything we plant. We replace it once at no charge — the second time we look at why and adjust the bed.",
      },
      {
        q: "Can I see plans first?",
        a: "Yes. Every install gets a sketched layout and a plant list with mature sizes before you commit. No surprises.",
      },
    ],
  },
  {
    slug: "aeration",
    name: "Aeration & Overseeding",
    short: "Aeration",
    tagline:
      "Fall core aeration plus premium fescue blend. The single best investment a Henrico lawn can make.",
    paragraphs: [
      "We pull plugs in late September, drop a custom fescue blend in the same day, and starter-fertilize. By the second mowing in October, you can see the new grass coming in. By spring, the lawn is thicker than it's been in years.",
      "Central Virginia clay packs hard by August. Without aeration, water and nutrients sit on top and run off. The plugs we pull let everything reach the roots — and the new fescue fills in the thin spots before crabgrass gets a vote in spring.",
    ],
    image: "/images/service-aeration.jpg",
    imageAlt:
      "Plug aerator pulling cores from a thick fescue lawn, cores visible on the surface in late-September light.",
    included: [
      "Core aeration (pull plugs, not spike)",
      "Custom fescue blend at proper rate",
      "Starter fertilizer with phosphorus",
      "Watering schedule + first-mow guidance",
      "Optional lime + soil test",
    ],
    pricing:
      "Most properties run $180 – $400 depending on square footage. We over-seed at 6–8 lbs per 1,000 sq ft of premium turf-type fescue.",
    priceFrom: "From $180",
    cadence:
      "Mid-September through mid-October. Earlier on shaded lawns, later on full-sun.",
    founderNote:
      "If you only do one extra service a year on a fescue lawn, make it this. Skip everything else and aerate.",
    faqs: [
      {
        q: "What seed do you use?",
        a: "A custom three-way turf-type tall fescue blend selected for central Virginia summers. We can match what you've already established.",
      },
      {
        q: "How long until I see growth?",
        a: "Germination in 10–14 days with proper watering. First mow at the new grass usually around week 4.",
      },
      {
        q: "Do I need to water?",
        a: "Yes — light, daily watering for the first two weeks. We leave a one-page schedule on the door.",
      },
    ],
  },
  {
    slug: "pruning",
    name: "Pruning & Hedge Care",
    short: "Pruning",
    tagline:
      "Shrubs shaped, ornamentals structured, hand-pruned where it matters.",
    paragraphs: [
      "Hand-prune where it matters, hedge-trim where it doesn't. We shape boxwood and yew with shears, but we open up dogwoods and Japanese maples with hand pruners — one cut at a time — so the shape lasts a year, not a month.",
      "Most landscapers shear everything. It's faster, but it ruins the structure of ornamental trees and forces shrubs into stress regrowth. We charge a little more and take a little longer because we'd rather do this right.",
    ],
    image: "/images/service-pruning.jpg",
    imageAlt:
      "Hands with hand-pruners shaping a boxwood in soft side light, focused composition.",
    included: [
      "Structural pruning of ornamental trees",
      "Shaping of boxwood, holly, yew, laurel",
      "Crepe myrtle: lift + thin (no crepe murder)",
      "Removal of dead, crossing, and inward growth",
      "Cleanup + haul-away",
    ],
    pricing:
      "Per visit, scoped to the property. Small foundation pruning starts at $250; full estate pruning runs $600+.",
    priceFrom: "From $250",
    cadence:
      "Late winter for structure. Light shaping in early summer after first flush.",
    founderNote:
      "If you've ever seen a crepe myrtle topped to a fist, you know why we hand-prune. The tree spends years recovering — we just take a little extra time the first time.",
    faqs: [
      {
        q: "When do you prune hydrangeas?",
        a: "Depends on the variety. Old-wood bloomers (mophead) get a light shape after they flower. New-wood (Annabelle, Limelight) get cut back in late winter.",
      },
      {
        q: "Will you 'crepe murder' my crepe myrtles?",
        a: "Never. We lift the canopy and thin out crossing branches. They'll bloom heavier and look right in winter too.",
      },
      {
        q: "How tall can you reach?",
        a: "Hand work to about 14 feet from a ladder. Anything taller we coordinate with our tree partner.",
      },
    ],
  },
  {
    slug: "gravel",
    name: "Gravel & Drainage",
    short: "Gravel & Drainage",
    tagline:
      "Driveway gravel, French drains, and dry creek beds that move water where it belongs.",
    paragraphs: [
      "If your basement smells like dirt after a hard rain, the answer is usually outside, not inside. We grade away from the house, put in French drains where the soil won't drain, and finish with dry creek beds that look intentional — not like a fix.",
      "Gravel work is similar — we grade properly, lay fabric, and use the right stone for the right job. A driveway needs different stone than a path, and both need an edge to keep them tight.",
    ],
    image: "/images/service-gravel.jpg",
    imageAlt:
      "Freshly raked tan gravel driveway curving toward a brick home at golden hour.",
    included: [
      "Site grading + slope assessment",
      "French drain trenching + sock pipe",
      "Dry creek bed (cobble + edging)",
      "Driveway top-dress + grading",
      "Pop-up emitters at outlets",
      "Cleanup + final compaction",
    ],
    pricing:
      "Drainage work scoped on-site. Driveway top-dress runs $400–$1,500 depending on length. French drain installs typically $1,800–$5,000.",
    priceFrom: "Custom — schedule a walk",
    cadence:
      "Year-round, weather permitting. Best done before fall leaf drop.",
    founderNote:
      "Drainage is invisible work. The compliment is when nothing happens during the next storm — and your basement stays dry.",
    faqs: [
      {
        q: "Do you do regrading?",
        a: "Light regrading yes — major earth-moving we partner with an excavator we trust.",
      },
      {
        q: "Will the dry creek look fake?",
        a: "Not the way we build them. We use varied river cobble and curve the channel — it reads natural and moves real volume.",
      },
      {
        q: "How long does a French drain last?",
        a: "Properly installed (sock pipe, washed stone, fabric wrap) — 20+ years.",
      },
    ],
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    short: "Tree Care",
    tagline:
      "Light tree work in-house. Bigger jobs through a crew we trust.",
    paragraphs: [
      "We handle small ornamental trimming, deadwood removal up to about 20 feet, and small tree removal. Anything bigger — old oaks, anything near the house, anything requiring climbing rigs — we hand off to a certified arborist crew we've worked with for years.",
      "We won't quote work we shouldn't be doing. If it needs a real arborist, we'll tell you and put you in touch.",
    ],
    image: "/images/service-trees.jpg",
    imageAlt:
      "A small ornamental tree being limb-trimmed by a worker on a ladder in soft afternoon light.",
    included: [
      "Light pruning + deadwood up to ~20 ft",
      "Small tree removal (under 6 in. trunk)",
      "Stump grinding (coordinated)",
      "Coordination with certified arborist for large work",
    ],
    pricing:
      "Small trim/removal $150–$600. Larger jobs quoted by our partner arborist.",
    priceFrom: "From $150",
    cadence:
      "Year-round for deadwood. Structural pruning in dormancy (Dec–Feb).",
    founderNote:
      "Trees are the most valuable thing in your landscape. I'd rather pass on the work than risk one.",
    faqs: [
      {
        q: "Can you remove a large oak?",
        a: "We don't do large take-downs in-house — but we'll coordinate the whole job with our arborist partner so you only have one point of contact.",
      },
      {
        q: "Do you grind stumps?",
        a: "Yes, on small to mid-size stumps. We can coordinate larger stumps with our partner.",
      },
      {
        q: "Do you spray for pests?",
        a: "We don't apply pesticides ourselves — we'll refer you to a licensed arborist if something needs treatment.",
      },
    ],
  },
];

// Convenience lookup helpers
export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
