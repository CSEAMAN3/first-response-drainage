const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type ServiceListItem = {
  service: string;
  slug: string;
};

export function buildServicesListSchema(services: ServiceListItem[]) {
  const url = `${SITE_URL}/drainage-services`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: "Drainage Services",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${url}#itemlist` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        url,
        name: "Drainage Services",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: services.length,
        itemListElement: services.map((s, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/drainage-services/${s.slug}`,
          name: s.service,
        })),
      },
    ],
  };
}
