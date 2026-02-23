import StructuredData from "@/components/StructuredData";
import { getGoogleReviews } from "@/lib/googleReviews";
import { buildLocalBusinessAggregateRatingSchema } from "@/lib/schema/aggregateRatingSchema";

export default async function WithRatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let rating: number | undefined;
  let ratingCount: number | undefined;

  try {
    const data = await getGoogleReviews();
    rating = data.rating;
    ratingCount = data.user_ratings_total;
  } catch {
    // don’t crash – just omit schema if API fails
  }

  return (
    <>
      <StructuredData
        id="localbusiness-aggregate-rating"
        data={buildLocalBusinessAggregateRatingSchema({
          rating,
          ratingCount,
        })}
      />
      {children}
    </>
  );
}
