const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

export function buildLocalBusinessAggregateRatingSchema(input: {
  rating?: number;
  ratingCount?: number;
}) {
  const rating =
    typeof input.rating === "number" && input.rating > 0
      ? input.rating
      : undefined;

  const ratingCount =
    typeof input.ratingCount === "number" && input.ratingCount > 0
      ? input.ratingCount
      : undefined;

  // If we don't have both, don't output aggregateRating at all
  if (!rating || !ratingCount) {
    return {
      "@context": "https://schema.org",
      "@graph": [],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // IMPORTANT: same @id as your existing LocalBusiness in layout
        "@id": `${SITE_URL}/#localbusiness`,
        "@type": "LocalBusiness",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating,
          reviewCount: ratingCount,
        },
      },
    ],
  };
}
