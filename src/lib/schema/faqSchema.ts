const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqSchema(params: {
  pagePath: string; // e.g. "/faq" or `/drainage-services/blocked-drains`
  pageTitle: string; // e.g. "FAQs" or "Blocked Drains FAQs"
  faqs: FaqItem[];
}) {
  const { pagePath, pageTitle, faqs } = params;

  const url = `${SITE_URL}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    name: pageTitle,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
