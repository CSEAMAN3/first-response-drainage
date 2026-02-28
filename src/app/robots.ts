import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";

  return isProd
    ? {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
      }
    : {
        // Block indexing on preview & local
        rules: [{ userAgent: "*", disallow: "/" }],
      };
}
