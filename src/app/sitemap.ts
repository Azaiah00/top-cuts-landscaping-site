// Auto-generated XML sitemap. Includes static + dynamic routes.

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { serviceSlugs } from "@/content/services";
import { caseSlugs } from "@/content/portfolio";
import { areaSlugs } from "@/content/service-areas";
import { postSlugs } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticPaths: string[] = [
    "/",
    "/services",
    "/portfolio",
    "/about",
    "/journal",
    "/service-areas",
    "/reviews",
    "/contact",
    "/quote",
    "/privacy",
  ];

  const dynamicPaths = [
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...caseSlugs.map((s) => `/portfolio/${s}`),
    ...areaSlugs.map((s) => `/service-areas/${s}`),
    ...postSlugs.map((s) => `/journal/${s}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
