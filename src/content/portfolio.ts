// Portfolio case studies — 8 seeded projects.
// Each case study renders on /portfolio/[slug] as an editorial spread.

export interface CaseStudy {
  slug: string;
  name: string;
  neighborhood: string;
  // Tags used by the portfolio filter UI
  services: string[];
  size: "Small" | "Medium" | "Large" | "Estate";
  duration: string;
  hero: string;
  heroAlt: string;
  // Optional before/after pair (some projects have one)
  beforeAfter?: {
    before: string;
    after: string;
    caption: string;
  };
  // Three editorial sections — magazine layout
  brief: string;
  approach: string;
  result: string;
  // Plant list (where install). Optional.
  plants?: string[];
  // Client testimonial
  testimonial?: {
    quote: string;
    name: string;
  };
  // Gallery (3–4 images). Falls back to hero + before/after if not set.
  gallery?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wyndham-reset",
    name: "The Wyndham Reset",
    neighborhood: "Wyndham",
    services: ["Mulch", "Cleanups", "Mowing"],
    size: "Large",
    duration: "1 day",
    hero: "/images/case-wyndham-reset.jpg",
    heroAlt:
      "Front yard of a brick Virginia colonial in Wyndham after a full reset — fresh stripes, edged beds, deep brown mulch.",
    beforeAfter: {
      before: "/images/ba-wyndham-before.jpg",
      after: "/images/ba-wyndham-after.jpg",
      caption: "Wyndham · Spring Cleanup + Mulch Refresh · 1 day",
    },
    brief:
      "Owners of a 1.2-acre Wyndham colonial called us in March after firing a national franchise that had let the beds drift for two seasons. They wanted the property back to magazine condition before their son's outdoor wedding in May.",
    approach:
      "Two-truck day. One crew handled spring cleanup, edging every bed by hand and pulling two seasons of leaf litter out of the boxwood interiors. The second crew laid four yards of double-shredded hardwood and reset the mowing pattern with sharp blades and a 3.25-inch deck height. We were on and off the property in seven hours.",
    result:
      "The owners called the next morning to ask how the lawn looked striped from the upstairs windows. They moved us to the weekly schedule that week. Wedding photos in May ran in Richmond Magazine.",
    testimonial: {
      quote:
        "We've used three companies in seven years. Carson is the only one I've ever called back. The yard looks like a different property.",
      name: "M. Halverson, Wyndham",
    },
    gallery: [
      "/images/case-wyndham-reset.jpg",
      "/images/ba-wyndham-before.jpg",
      "/images/ba-wyndham-after.jpg",
      "/images/service-mulch.jpg",
    ],
  },
  {
    slug: "salisbury-refresh",
    name: "Salisbury Front Yard Refresh",
    neighborhood: "Salisbury",
    services: ["Installation", "Mulch"],
    size: "Medium",
    duration: "2 days",
    hero: "/images/case-salisbury-refresh.jpg",
    heroAlt:
      "Salisbury front foundation refreshed with a new hydrangea + boxwood install, deep mulch, and clean-edged beds.",
    beforeAfter: {
      before: "/images/ba-salisbury-before.jpg",
      after: "/images/ba-salisbury-after.jpg",
      caption: "Salisbury · Foundation Install · 2 days",
    },
    brief:
      "A 1990s brick rancher whose foundation beds had been ignored since the original landscaping went in. The owners were retiring in the house and wanted something they wouldn't have to rebuild for 15 years.",
    approach:
      "We pulled out the overgrown junipers and three half-dead azaleas. Amended the soil with compost — Salisbury clay is brutal. Planted nine 'Limelight' hydrangeas as the anchors with a boxwood frame on the corners and a hellebore underplanting for late-winter interest. Three yards of hardwood and a clean half-moon edge to finish.",
    result:
      "The 'Limelights' hit four feet by July of the same year. The hellebores bloomed the following February — the owners sent a photo. The bed will look better every year for the next decade.",
    plants: [
      "Hydrangea paniculata 'Limelight' (×9)",
      "Buxus 'Green Velvet' (×6)",
      "Helleborus orientalis (×12)",
      "Liriope muscari 'Big Blue' edge (×24)",
    ],
    testimonial: {
      quote:
        "Carson sketched it on the tailgate of his truck. Two days later it looked like that. Best money we've spent on the house.",
      name: "D. & J. Whitlow, Salisbury",
    },
  },
  {
    slug: "shortpump-stripes",
    name: "Short Pump Colonial Stripes",
    neighborhood: "Short Pump",
    services: ["Mowing", "Aeration"],
    size: "Medium",
    duration: "Recurring",
    hero: "/images/case-shortpump-stripes.jpg",
    heroAlt:
      "A Short Pump colonial with a deeply striped front lawn at golden hour, edged sidewalks, fresh-mulched foundation beds.",
    brief:
      "Three-quarter-acre lot, full sun, fescue lawn that hadn't been aerated in five years. Owner wanted the cleanest lawn in the cul-de-sac. Said he was 'tired of being beaten by the guy across the street.'",
    approach:
      "Started with a fall aeration + overseed (8 lbs / 1,000 sq ft of a custom turf-type fescue blend). Moved to weekly mowing the following spring at 3.5-inch height with a 60-inch deck and a fresh blade swap each Tuesday. Striped diagonal one week, perpendicular the next.",
    result:
      "By August of year one, the lawn was the densest on the street. The neighbor across the street called us in July. We now mow both sides of the cul-de-sac.",
    testimonial: {
      quote:
        "I've watched these stripes from my home office for two summers now. Worth every dollar. Best decision I've made on this house.",
      name: "R. Mathieson, Short Pump",
    },
  },
  {
    slug: "tuckahoe-rebuild",
    name: "Tuckahoe Backyard Rebuild",
    neighborhood: "Tuckahoe",
    services: ["Drainage", "Installation"],
    size: "Large",
    duration: "5 days",
    hero: "/images/case-tuckahoe-rebuild.jpg",
    heroAlt:
      "A Tuckahoe backyard rebuilt with new drainage, fresh sod, dry creek bed, and clean planting beds.",
    brief:
      "Backyard pooled water against the foundation after every storm. The previous lawn was 60% moss, 40% mud. Owners had a new patio coming in and wanted the yard to actually function before they entertained.",
    approach:
      "Day one: trench a 90-foot French drain along the foundation, sock pipe, washed stone, fabric wrap. Day two: build a dry creek bed to carry overflow to the back property line. Day three: regrade and lay 1,800 sq ft of sod over amended topsoil. Days four–five: install a privacy hedge of nellie stevens holly along the fence line and finish with mulch.",
    result:
      "Three storm events later — basement still bone dry. The sod knit in by week six. The owners hosted 40 people on the new patio in June.",
    plants: [
      "Ilex 'Nellie R. Stevens' (×11)",
      "Itea virginica 'Henry's Garnet' along creek",
      "Carex pensylvanica drift",
      "Tall fescue sod (1,800 sq ft)",
    ],
    testimonial: {
      quote:
        "We had two contractors before Carson tell us 'it's just how the lot drains.' He fixed it in a week.",
      name: "K. Ramos, Tuckahoe",
    },
  },
  {
    slug: "glenallen-beds",
    name: "Glen Allen Bed Reclamation",
    neighborhood: "Glen Allen",
    services: ["Cleanups", "Mulch", "Pruning"],
    size: "Medium",
    duration: "1 day",
    hero: "/images/case-glenallen-beds.jpg",
    heroAlt:
      "A Glen Allen brick rancher with foundation beds reclaimed — boxwoods structurally pruned, deep mulch, edged crisply.",
    brief:
      "Foundation beds were a knee-high mat of liriope, weeds, and English ivy that had climbed five feet up the boxwoods. Owner had recently inherited the house and wanted to see what was actually planted under there.",
    approach:
      "Cut everything back to grade and pulled the ivy by the root. Discovered four mature boxwoods in remarkably good shape and three azaleas worth saving. Hand-pruned the boxwoods back to a clean mounded form, dug out the worst of the liriope, applied pre-emergent, and laid two yards of fresh hardwood.",
    result:
      "What looked unsalvageable turned out to be a 25-year-old foundation planting in good bones. Saved the owner an install. We come back twice a year for shape.",
    testimonial: {
      quote:
        "I'd written the front yard off as a tear-out. Carson saved me probably eight grand by knowing what was worth keeping.",
      name: "T. Wexler, Glen Allen",
    },
  },
  {
    slug: "fan-townhouse",
    name: "The Fan Townhouse",
    neighborhood: "The Fan",
    services: ["Installation"],
    size: "Small",
    duration: "1 day",
    hero: "/images/case-fan-townhouse.jpg",
    heroAlt:
      "A small Italianate townhouse front yard in Richmond's Fan district — pea gravel path, boxwood squares, hellebores, fresh mulch.",
    beforeAfter: {
      before: "/images/ba-fan-before.jpg",
      after: "/images/ba-fan-after.jpg",
      caption: "The Fan · Small-space Install · 1 day",
    },
    brief:
      "Eight-by-twelve foot front yard between sidewalk and porch — bare dirt and weeds. Owners wanted something formal that worked with the 1910 Italianate architecture and required almost no maintenance.",
    approach:
      "Designed a four-square boxwood parterre with a small pea-gravel path bisecting it. Hellebores in the four planting squares for late-winter bloom. Dwarf nandina at the corners for evergreen color. Steel edging to keep the gravel and mulch separate. Done by lunch.",
    result:
      "The house went on the market in the fall and sold above asking. Realtor credited the front yard in the listing.",
    plants: [
      "Buxus microphylla 'Winter Gem' (×16)",
      "Helleborus 'Ivory Prince' (×8)",
      "Nandina 'Firepower' (×4)",
    ],
    testimonial: {
      quote:
        "Tiny yard, huge difference. We had three people stop on the sidewalk while you were still working.",
      name: "S. Aldridge, The Fan",
    },
  },
  {
    slug: "innsbrook-commercial",
    name: "Innsbrook Office Park",
    neighborhood: "Innsbrook",
    services: ["Mowing", "Mulch", "Cleanups"],
    size: "Estate",
    duration: "Recurring",
    hero: "/images/case-innsbrook-commercial.jpg",
    heroAlt:
      "Manicured commercial campus in Innsbrook — striped lawns, neatly edged beds, clipped hedges fronting a brick office building.",
    brief:
      "30,000 sq ft of turf and 1,800 linear feet of bed line across a four-building campus. Property manager was juggling two vendors and tired of complaints from tenants about inconsistent appearance.",
    approach:
      "Single-vendor takeover. Built a route plan that puts us on-site every Wednesday at 7 a.m. so tenants arrive to a finished property. Spring and fall cleanups baked into the contract. Quarterly mulch refresh on the front entrance beds. Monthly walk with the property manager to flag anything off.",
    result:
      "Three-year contract renewed. Tenant complaints to the property manager about grounds: zero in 14 months. Two of the building tenants asked for residential quotes for their own homes.",
    testimonial: {
      quote:
        "The property has never looked better and I haven't gotten a single tenant email. That's the highest compliment I can give a vendor.",
      name: "L. Greene, Property Manager",
    },
  },
  {
    slug: "midlothian-estate",
    name: "Midlothian Estate Annual Plan",
    neighborhood: "Midlothian",
    services: ["Mowing", "Installation", "Pruning", "Cleanups"],
    size: "Estate",
    duration: "Annual",
    hero: "/images/case-midlothian-estate.jpg",
    heroAlt:
      "Sweeping estate front lawn in Midlothian with mature plantings, brick courtyard, and immaculately maintained beds at golden hour.",
    brief:
      "2.4-acre Midlothian estate with mature plantings, a circular drive, and three garden rooms that the owners wanted maintained at the level the previous owner had — but with a single point of contact instead of four vendors.",
    approach:
      "Drafted a 12-month calendar covering weekly mowing (April–November), spring + fall cleanups, biannual mulch refresh, dormant pruning, summer hand-shaping, and a fall aeration on the front lawn. Carson personally walks the property the first Monday of every month with the homeowner.",
    result:
      "Year-three of the relationship. The garden rooms have evolved with new plantings. The owners now travel six months a year and don't think about the property when they're gone.",
    testimonial: {
      quote:
        "We've worked with Carson for three years. He treats the property like he owns it. We don't worry about it anymore.",
      name: "Mr. & Mrs. Caldwell, Midlothian",
    },
  },
];

export function getCaseBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
export const caseSlugs = caseStudies.map((c) => c.slug);

// Used by the portfolio filter — collected sets of unique values
export const allServices = Array.from(
  new Set(caseStudies.flatMap((c) => c.services))
).sort();
export const allNeighborhoods = Array.from(
  new Set(caseStudies.map((c) => c.neighborhood))
).sort();
export const allSizes: Array<CaseStudy["size"]> = [
  "Small",
  "Medium",
  "Large",
  "Estate",
];
