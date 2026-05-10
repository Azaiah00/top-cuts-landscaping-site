// Centralized SEO helper.
// All pages call buildMetadata() so titles, OG, and Twitter cards stay
// consistent. We default to a single OG image; pages can override with
// their own hero image when one fits.

import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://topcutlandscaping.com";

export const SITE_NAME = "Top Cut Landscaping";
export const SITE_TAGLINE = "The yard your neighbors notice.";

export interface SeoInput {
  title: string;
  description: string;
  path?: string; // e.g. "/services" — leading slash required
  image?: string; // absolute or starts with "/"
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og/og-default.png",
}: SeoInput): Metadata {
  // Resolve a fully-qualified URL for OG/Twitter image previews.
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// JSON-LD helpers. We render these inside <script type="application/ld+json">
// in pages/layouts that want structured data. Kept here so the schema for
// "Top Cut Landscaping" is one source of truth.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  image: `${SITE_URL}/images/founder-portrait.jpg`,
  url: SITE_URL,
  telephone: "+1-804-912-5530",
  email: "info@topcutlandscaping804.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3206 Brewster Dr",
    addressLocality: "Henrico",
    addressRegion: "VA",
    postalCode: "23233",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.6512,
    longitude: -77.6088,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    "Henrico County",
    "Short Pump",
    "West End Richmond",
    "Glen Allen",
    "The Fan",
    "Midlothian",
    "Wyndham",
    "Tuckahoe",
    "Salisbury",
    "Innsbrook",
  ],
  sameAs: ["https://instagram.com/topcutlandscaping804"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
  },
};
