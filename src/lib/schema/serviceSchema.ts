const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type ServiceFromLib = {
  service: string;
  slug: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
};

export function buildServiceSchema(service: ServiceFromLib) {
  const url = `${SITE_URL}/drainage-services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.service,
        description: service.seo.metaDescription,
        url,
        serviceType: service.service,

        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },

        areaServed: ["Norfolk", "Suffolk", "Cambridgeshire"].map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
      },
    ],
  };
}
