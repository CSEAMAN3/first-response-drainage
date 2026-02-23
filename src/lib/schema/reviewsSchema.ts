const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type ReviewInput = {
  author_name: string;
  rating: number;
  text?: string;
};

type ReviewsSchemaInput = {
  pagePath: string;
  rating: number;
  reviewCount: number;
  reviews?: ReviewInput[]; // optional (since some pages only show rating/count)
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildReviewsSchema(input: ReviewsSchemaInput) {
  const url = absoluteUrl(input.pagePath);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "1st Response Drainage",
        url: SITE_URL,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: input.rating,
          reviewCount: input.reviewCount,
        },
        ...(input.reviews?.length
          ? {
              review: input.reviews.map((r) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: r.author_name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: r.rating,
                  bestRating: 5,
                },
                ...(r.text ? { reviewBody: r.text } : {}),
              })),
            }
          : {}),
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        about: { "@id": `${SITE_URL}/#localbusiness` },
      },
    ],
  };
}
