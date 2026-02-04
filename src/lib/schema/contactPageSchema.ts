const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

export function buildContactPageSchema() {
  const url = `${SITE_URL}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    url,
    name: "Contact 1st Response Drainage",
    description:
      "Contact 1st Response Drainage for blocked drains, CCTV surveys and emergency drainage services across Norfolk, Suffolk and Cambridgeshire.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
  };
}
