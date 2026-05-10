// Home page — composes the editorial sections in order.
// Goal: in 5 seconds the visitor knows this is craftsman work, sees a
// transformation, and can request a quote.

import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TheCut } from "@/components/sections/home/TheCut";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { PortfolioTeaser } from "@/components/sections/home/PortfolioTeaser";
import { QuotePreview } from "@/components/sections/home/QuotePreview";
import { HomeReviews } from "@/components/sections/home/HomeReviews";
import { InstagramGrid } from "@/components/media/InstagramGrid";
import { AreasMiniMap } from "@/components/sections/home/AreasMiniMap";
import { CTABand } from "@/components/sections/CTABand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Top Cut Landscaping | The yard your neighbors notice.",
  description:
    "Top Cut is a small Henrico crew obsessed with clean lines, deep mulch, and stripes you can see from the porch. Carson Tinsley, owner-operator, on every property.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TheCut />
      <ServicesGrid />
      <FounderQuote
        quote="I started Top Cut in '08 with one mower and a rule: leave every yard better than I found it. We still work that way."
        cta={{ href: "/about", label: "Read our story" }}
      />
      <PortfolioTeaser />
      <QuotePreview />
      <HomeReviews />
      <InstagramGrid />
      <AreasMiniMap />
      <CTABand />
    </>
  );
}
