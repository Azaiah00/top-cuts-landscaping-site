// Seeded reviews — used as fallback for /reviews and home review wall.
// Real Google Places API reviews can be merged in later via /api/reviews.

export type ReviewSource = "Google" | "Nextdoor" | "LawnStarter";

export interface Review {
  id: string;
  name: string;
  neighborhood: string;
  source: ReviewSource;
  rating: number;
  date: string; // ISO month-precision
  service?: string;
  body: string;
}

export const reviews: Review[] = [
  // —————— Wyndham ——————
  {
    id: "r-001",
    name: "Maggie H.",
    neighborhood: "Wyndham",
    source: "Google",
    rating: 5,
    date: "2025-09",
    service: "Cleanups",
    body: "Carson came out the same week, walked the property with my husband, gave a quote that was lower than two others, and left the yard looking like a magazine. We've been on the weekly schedule for two years.",
  },
  {
    id: "r-002",
    name: "Rich P.",
    neighborhood: "Wyndham",
    source: "Google",
    rating: 5,
    date: "2025-08",
    service: "Mowing",
    body: "Best mow on the street.",
  },
  {
    id: "r-003",
    name: "Anya R.",
    neighborhood: "Wyndham",
    source: "Nextdoor",
    rating: 5,
    date: "2025-06",
    service: "Mulch",
    body: "Three yards of hardwood, hand-edged beds, gone before lunch. Driveway swept cleaner than I left it. Worth every penny.",
  },
  {
    id: "r-004",
    name: "Trent W.",
    neighborhood: "Wyndham",
    source: "Google",
    rating: 5,
    date: "2024-11",
    service: "Aeration",
    body: "Aerated and overseeded in October. By April my lawn looked like a Bermuda grass commercial. First time in 8 years it's actually thick.",
  },

  // —————— Tuckahoe ——————
  {
    id: "r-005",
    name: "Kara R.",
    neighborhood: "Tuckahoe",
    source: "Google",
    rating: 5,
    date: "2025-07",
    service: "Drainage",
    body: "Two contractors told us 'that's just how the lot drains.' Carson fixed it in a week with a French drain and a dry creek bed. Basement is dry through three storms now.",
  },
  {
    id: "r-006",
    name: "Beth L.",
    neighborhood: "Tuckahoe",
    source: "Nextdoor",
    rating: 5,
    date: "2025-05",
    service: "Mowing",
    body: "On time every Tuesday. Polite crew. They notice things — last week they pointed out a sprinkler head that was leaking. I would not have caught that.",
  },
  {
    id: "r-007",
    name: "Drew M.",
    neighborhood: "Tuckahoe",
    source: "Google",
    rating: 4,
    date: "2025-04",
    service: "Cleanups",
    body: "Spring cleanup was great. Wished they could have done my gutters too — they have a partner they refer but I had to schedule that separately. Otherwise top notch.",
  },

  // —————— Salisbury ——————
  {
    id: "r-008",
    name: "Don W.",
    neighborhood: "Salisbury",
    source: "Google",
    rating: 5,
    date: "2025-03",
    service: "Installation",
    body: "Carson sketched the whole foundation install on the back of his truck. Two days later it looked exactly like the sketch. The hydrangeas hit four feet by July. Best money we've spent on this house.",
  },
  {
    id: "r-009",
    name: "Janelle W.",
    neighborhood: "Salisbury",
    source: "Google",
    rating: 5,
    date: "2025-02",
    service: "Pruning",
    body: "He hand-prunes everything — does not just shear it like the company we had before. Boxwoods look like architecture now.",
  },
  {
    id: "r-010",
    name: "Phil D.",
    neighborhood: "Salisbury",
    source: "Nextdoor",
    rating: 5,
    date: "2024-10",
    service: "Mulch",
    body: "Good people, fair price, real hardwood mulch (not the dyed black stuff). Front yard looks like the day we moved in.",
  },

  // —————— Short Pump ——————
  {
    id: "r-011",
    name: "Ryan M.",
    neighborhood: "Short Pump",
    source: "Google",
    rating: 5,
    date: "2025-09",
    service: "Mowing",
    body: "I've watched the stripes on my lawn from my home office for two summers. Best money I spend every month.",
  },
  {
    id: "r-012",
    name: "Erin K.",
    neighborhood: "Short Pump",
    source: "LawnStarter",
    rating: 5,
    date: "2025-06",
    service: "Aeration",
    body: "Showed up on the day they said. Did the work. Sent the invoice. Lawn looks like it should. I have nothing else to say — that is the highest compliment I give a vendor.",
  },
  {
    id: "r-013",
    name: "Hannah B.",
    neighborhood: "Short Pump",
    source: "Google",
    rating: 5,
    date: "2025-05",
    service: "Cleanups",
    body: "We had a baby in March and the yard was a mess. They squeezed us in on a Saturday and the property looked brand new by the end of the day. Lifesavers.",
  },
  {
    id: "r-014",
    name: "Mark V.",
    neighborhood: "Short Pump",
    source: "Google",
    rating: 5,
    date: "2024-09",
    service: "Mowing",
    body: "Three years on the weekly schedule. Never had to call about anything. They mow Tuesdays and the yard looks identical week to week.",
  },

  // —————— Glen Allen ——————
  {
    id: "r-015",
    name: "Tara W.",
    neighborhood: "Glen Allen",
    source: "Google",
    rating: 5,
    date: "2025-08",
    service: "Cleanups",
    body: "I had written my front beds off as a tear-out. Carson saved me probably eight grand by knowing what was worth keeping. Honest guys.",
  },
  {
    id: "r-016",
    name: "Eli C.",
    neighborhood: "Glen Allen",
    source: "Nextdoor",
    rating: 5,
    date: "2025-04",
    service: "Mowing",
    body: "Reliable. Same crew every week. Quiet, professional, in and out in 45 minutes.",
  },
  {
    id: "r-017",
    name: "Vanessa O.",
    neighborhood: "Glen Allen",
    source: "Google",
    rating: 4,
    date: "2025-03",
    service: "Mulch",
    body: "Mulch job looked great. Took a couple days longer to schedule than I hoped because they were booked, but the work itself was perfect.",
  },

  // —————— The Fan ——————
  {
    id: "r-018",
    name: "Sam A.",
    neighborhood: "The Fan",
    source: "Google",
    rating: 5,
    date: "2025-07",
    service: "Installation",
    body: "Tiny front yard, huge difference. They had three people stop on the sidewalk while the install was still going on.",
  },
  {
    id: "r-019",
    name: "Liz F.",
    neighborhood: "The Fan",
    source: "Nextdoor",
    rating: 5,
    date: "2025-05",
    service: "Cleanups",
    body: "Did a small backyard cleanup at our row house. They were respectful, careful with the brick, and left the alley spotless. Hard combo to find in the city.",
  },

  // —————— Midlothian ——————
  {
    id: "r-020",
    name: "Hugh C.",
    neighborhood: "Midlothian",
    source: "Google",
    rating: 5,
    date: "2025-09",
    service: "Mowing",
    body: "We've worked with Carson three years now. He treats the property like he owns it. We don't worry about it anymore.",
  },
  {
    id: "r-021",
    name: "Marisol C.",
    neighborhood: "Midlothian",
    source: "Google",
    rating: 5,
    date: "2025-04",
    service: "Pruning",
    body: "He saved a Japanese maple another company had hacked into. Three seasons later it's recovered and looks better than it did when we bought the house.",
  },
  {
    id: "r-022",
    name: "Joe T.",
    neighborhood: "Midlothian",
    source: "LawnStarter",
    rating: 5,
    date: "2024-11",
    service: "Aeration",
    body: "Came out same week. Did core aeration and overseeded. Easy to work with. Good blend of seed.",
  },

  // —————— Innsbrook ——————
  {
    id: "r-023",
    name: "Lin G.",
    neighborhood: "Innsbrook",
    source: "Google",
    rating: 5,
    date: "2025-08",
    service: "Mowing",
    body: "We manage a four-building campus. Top Cut took over from two vendors a year ago. Tenant complaints since: zero.",
  },
  {
    id: "r-024",
    name: "Pat S.",
    neighborhood: "Innsbrook",
    source: "Google",
    rating: 5,
    date: "2025-06",
    service: "Mulch",
    body: "Mulched our entire entrance bed line in a single day. Looked like a magazine for a month.",
  },

  // —————— West End ——————
  {
    id: "r-025",
    name: "Carl J.",
    neighborhood: "West End",
    source: "Google",
    rating: 5,
    date: "2025-09",
    service: "Mowing",
    body: "Switched from a national company. Different universe. The crew talks to me, the work is better, the price is the same.",
  },
  {
    id: "r-026",
    name: "Megan T.",
    neighborhood: "West End",
    source: "Nextdoor",
    rating: 5,
    date: "2025-07",
    service: "Pruning",
    body: "Hand-prunes everything. The boxwoods finally look like boxwoods again instead of green meatballs.",
  },
  {
    id: "r-027",
    name: "Tom B.",
    neighborhood: "West End",
    source: "Google",
    rating: 5,
    date: "2025-05",
    service: "Cleanups",
    body: "They do my mom's house. She's 81. They never charge her for the little extras and they always tell her what they did. That's how I know who I'm hiring.",
  },

  // —————— Henrico (broad) ——————
  {
    id: "r-028",
    name: "Kelly N.",
    neighborhood: "Henrico",
    source: "Google",
    rating: 5,
    date: "2025-08",
    service: "Installation",
    body: "Designed our front entry refresh. Listened more than he talked, which I appreciated. Bed has matured beautifully into year two.",
  },
  {
    id: "r-029",
    name: "James R.",
    neighborhood: "Henrico",
    source: "LawnStarter",
    rating: 5,
    date: "2025-04",
    service: "Mowing",
    body: "Quietest mowing crew I've had. Done before my dog notices.",
  },
  {
    id: "r-030",
    name: "Whitney L.",
    neighborhood: "Henrico",
    source: "Google",
    rating: 5,
    date: "2024-12",
    service: "Cleanups",
    body: "Booked our fall cleanup. Property had four large oaks and a thousand leaves. Done in three hours. Driveway spotless. Just hire them already.",
  },
];

// Aggregate statistics for the page header
export function reviewStats() {
  const total = reviews.length;
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / Math.max(total, 1);
  const sources = reviews.reduce<Record<ReviewSource, number>>(
    (acc, r) => ({ ...acc, [r.source]: (acc[r.source] ?? 0) + 1 }),
    { Google: 0, Nextdoor: 0, LawnStarter: 0 }
  );
  return { total, avg: Math.round(avg * 10) / 10, sources };
}
