// Service area landing pages — pure SEO play.
// Each neighborhood gets a small page at /service-areas/[slug].

export interface ServiceArea {
  slug: string;
  name: string;
  // 1-line tag used on the index
  blurb: string;
  // 2 paragraphs of local copy for the detail page
  paragraphs: [string, string];
  // Common architecture / lot characteristics in this area
  characteristics: string[];
  // What we typically do here
  popularServices: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "short-pump",
    name: "Short Pump",
    blurb: "Newer colonials on quarter to half-acre lots. Heavy fescue country.",
    paragraphs: [
      "Most homes in Short Pump sit on quarter- to half-acre fescue lawns with full or partial sun. The neighborhoods went in between 1995 and 2010, which means the trees are mature enough to throw real shade and the irrigation systems are old enough to need adjusting.",
      "Our Short Pump route runs Tuesdays. We lean heavy into fall aeration here — Short Pump fescue without aeration thins out by year three. Mulch and bed work in spring usually means deep beds along long brick foundations.",
    ],
    characteristics: [
      "Brick colonials, 2,800–4,500 sq ft",
      "Quarter to half-acre lots",
      "Full sun to partial shade fescue",
      "Mature deciduous canopy",
    ],
    popularServices: ["Mowing", "Aeration", "Mulch", "Pruning"],
  },
  {
    slug: "glen-allen",
    name: "Glen Allen",
    blurb:
      "Brick ranchers and split-levels with mature plantings worth saving.",
    paragraphs: [
      "Glen Allen has some of the area's best brick ranchers and split-levels — homes that have been here since the 60s and 70s. The plantings are usually older too, which means we spend more time on reclamation than tear-out.",
      "Our typical Glen Allen project starts with a structural prune of 25-year-old boxwoods and azaleas before we ever talk about installing anything new. Saves homeowners money and keeps the character of the property intact.",
    ],
    characteristics: [
      "Brick rancher / split-level",
      "Quarter-acre lots, established",
      "Mature foundation plantings",
      "Heavy clay soil",
    ],
    popularServices: ["Pruning", "Cleanups", "Mulch", "Mowing"],
  },
  {
    slug: "wyndham",
    name: "Wyndham",
    blurb: "Half-acre+ estates, formal landscaping, the highest standard in Henrico.",
    paragraphs: [
      "Wyndham is where Henrico's highest standard for residential landscaping lives. Lots are typically half an acre to two acres, formal foundation plantings, often a circular drive or a rear water feature.",
      "We mow Wyndham on Tuesdays in tight time windows because the homeowners notice. Mulch refresh is twice a year here — late March and again in October. Our crews know which mailboxes to dodge and which dogs are friendly.",
    ],
    characteristics: [
      "Half-acre to multi-acre estates",
      "Formal foundation plantings",
      "Circular drives, side-load garages",
      "Active HOA standards",
    ],
    popularServices: ["Mowing", "Mulch", "Pruning", "Installation"],
  },
  {
    slug: "tuckahoe",
    name: "Tuckahoe",
    blurb: "Mid-century neighborhoods with mature trees and tricky drainage.",
    paragraphs: [
      "Tuckahoe is one of Henrico's oldest established neighborhoods — beautiful mid-century homes, gigantic oak canopies, and almost without exception some kind of drainage challenge. Half our Tuckahoe work starts as a leaf cleanup and becomes a French drain.",
      "Lawns here struggle with shade. We over-seed with shade-tolerant fescue blends and adjust mowing height up by a quarter inch versus our full-sun routes. In some yards we recommend ground cover instead of grass.",
    ],
    characteristics: [
      "Mid-century homes, mature canopy",
      "Heavy shade lawns",
      "Drainage challenges common",
      "Quarter to third-acre lots",
    ],
    popularServices: ["Drainage", "Cleanups", "Aeration", "Mulch"],
  },
  {
    slug: "salisbury",
    name: "Salisbury",
    blurb: "Established community, brick homes, classic Virginia plantings.",
    paragraphs: [
      "Salisbury homes are mostly 1980s and 90s brick, on third to half-acre lots. The community standards here are high but informal — no two yards are the same, but every yard is well-kept.",
      "We do a lot of foundation refresh installs in Salisbury — replacing original juniper plantings with hydrangeas, boxwood, and underplantings of hellebore. The clay is brutal so every planting hole gets compost amendment.",
    ],
    characteristics: [
      "Brick traditional, 1980s–1990s",
      "Third to half-acre lots",
      "Heavy clay soil",
      "Mixed sun/shade",
    ],
    popularServices: ["Installation", "Mulch", "Mowing", "Cleanups"],
  },
  {
    slug: "innsbrook",
    name: "Innsbrook",
    blurb: "Office-park commercial work, condos, and townhome communities.",
    paragraphs: [
      "Innsbrook is our biggest commercial footprint — multi-building office campuses and HOA-managed townhome communities. We're typically on Wednesdays before the work day starts so tenants arrive to a finished property.",
      "Commercial here means consistency and communication. We send the property manager a one-page weekly recap with photos. Anything outside the contract scope — a broken irrigation head, a fallen branch — is flagged the same morning.",
    ],
    characteristics: [
      "Class-A office parks",
      "Townhome HOA communities",
      "High-traffic curb-appeal pressure",
      "Professional property management",
    ],
    popularServices: ["Mowing", "Mulch", "Cleanups", "Pruning"],
  },
  {
    slug: "the-fan",
    name: "The Fan",
    blurb: "Small-space row-house yards in Richmond's most walkable district.",
    paragraphs: [
      "The Fan is small yards and big personality. We mostly do small-space installs and ongoing maintenance on row-house front yards and tucked alley patios. Brick walls, tight access, and zero room for error on the cleanup.",
      "We bring small-format equipment for The Fan — battery mowers, no big trailers blocking a one-way street. Most projects start and finish in a single morning before the alley gets busy.",
    ],
    characteristics: [
      "Italianate / Victorian row houses",
      "Front yards under 200 sq ft",
      "Brick courtyards + alleys",
      "Tight street parking",
    ],
    popularServices: ["Installation", "Cleanups", "Pruning"],
  },
  {
    slug: "west-end",
    name: "West End",
    blurb:
      "Broad mix of established neighborhoods between Richmond and Henrico.",
    paragraphs: [
      "'West End' covers a wide swath — from inside the city limits out through Henrico. We work the West End across a mix of small lots, larger estates, and everything in between.",
      "Most West End projects come to us through neighbor referral. Our crews know which way to point the mower in which neighborhood, and which side streets get blocked by trash trucks on Tuesdays.",
    ],
    characteristics: [
      "Broad mix of housing stock",
      "Lot sizes vary widely",
      "Strong referral-driven community",
      "Mostly fescue lawns",
    ],
    popularServices: ["Mowing", "Mulch", "Cleanups", "Installation"],
  },
  {
    slug: "midlothian",
    name: "Midlothian",
    blurb: "Estate-scale properties south of the river, full-service contracts.",
    paragraphs: [
      "Midlothian is where we run our most full-service contracts — multi-acre properties with garden rooms, mature plantings, and homeowners who want one point of contact for every blade of grass.",
      "Annual contracts here typically include weekly mowing, twice-yearly mulch, biannual structural pruning, fall aeration, and seasonal cleanups, all on a calendar that the homeowner approves once a year and forgets about.",
    ],
    characteristics: [
      "Estate properties, 1+ acre",
      "Mature mixed plantings",
      "Multi-room landscape design",
      "Annual maintenance contracts",
    ],
    popularServices: ["Mowing", "Pruning", "Installation", "Cleanups"],
  },
];

export function getAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
export const areaSlugs = serviceAreas.map((a) => a.slug);
