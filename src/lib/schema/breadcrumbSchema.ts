const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk"
).replace(/\/$/, "");

export type Crumb = {
  name: string;
  path: string;
};

function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  const safe = crumbs.filter((c) => c?.name && c?.path);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: safe.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
