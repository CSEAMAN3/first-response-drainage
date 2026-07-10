import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { getSortedPostData } from "@/lib/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const isProd = process.env.VERCEL_ENV === "production";
  if (!isProd) return []; // don’t emit sitemap on preview/local

  const lastModified = new Date();

  // --- Static routes ---
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/drainage-services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal pages
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/website-terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // --- Service detail pages ---
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/drainage-services/${s.slug}`,
    lastModified: new Date(s.modified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // --- County pages (you said you have these) ---
  const countyRoutes: MetadataRoute.Sitemap = [
    "norfolk",
    "suffolk",
    "cambridgeshire",
  ].map((county) => ({
    url: `${SITE_URL}/locations/${county}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // --- Location detail pages (towns/villages/cities) ---
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: new Date(l.modified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // --- Blog detail pages from MD ---
  const posts = await getSortedPostData();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.modified ? new Date(p.modified) : new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...countyRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
