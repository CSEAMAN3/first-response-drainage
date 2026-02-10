const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

if (!PLACE_ID) throw new Error("Missing GOOGLE_PLACE_ID in env");
if (!API_KEY) throw new Error("Missing GOOGLE_MAPS_API_KEY in env");

// ✅ TypeScript-safe assertions AFTER runtime checks
const SAFE_PLACE_ID = PLACE_ID as string;
const SAFE_API_KEY = API_KEY as string;

/**
 * Places API (New) - Place Details (v1)
 * https://developers.google.com/maps/documentation/places/web-service/place-details
 */
const endpoint = `https://places.googleapis.com/v1/places/${SAFE_PLACE_ID}`;

export type GoogleReview = {
  author_name: string;
  author_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text?: string;
};

export type GoogleReviewsPayload = {
  name: string;
  rating?: number;
  user_ratings_total?: number;
  reviews: GoogleReview[];
  fetchedAt: string;
};

// ✅ Minimal, safe API review shape (no `any`)
// type GoogleApiReview = {
//   rating?: number;
//   relativePublishTimeDescription?: string;
//   authorAttribution?: {
//     displayName?: string;
//   };
//   text?: {
//     text?: string;
//   };
// };

// function mapReview(r: GoogleApiReview): GoogleReview {
//   return {
//     author_name: r.authorAttribution?.displayName ?? "Google user",
//     rating: Number(r.rating ?? 0),
//     relative_time_description: r.relativePublishTimeDescription,
//     text: r.text?.text,
//   };
// }
function mapReview(r: unknown): GoogleReview {
  const review = r as {
    authorAttribution?: {
      displayName?: string;
      photoUri?: string;
    };
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
  };

  return {
    author_name: review.authorAttribution?.displayName ?? "Google User",
    author_photo_url: review.authorAttribution?.photoUri,
    rating: Number(review.rating ?? 0),
    relative_time_description: review.relativePublishTimeDescription,
    text: review.text?.text ?? "",
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewsPayload> {
  const fieldMask = [
    "displayName",
    "rating",
    "userRatingCount",
    "reviews",
  ].join(",");

  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "X-Goog-Api-Key": SAFE_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    // ✅ Cache for 24 hours
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Places API error (${res.status} ${res.statusText}): ${text}`,
    );
  }

  const data = await res.json();

  return {
    name: data?.displayName?.text ?? "1st Response Drainage",
    rating: typeof data?.rating === "number" ? data.rating : undefined,
    user_ratings_total:
      typeof data?.userRatingCount === "number"
        ? data.userRatingCount
        : undefined,
    reviews: Array.isArray(data?.reviews) ? data.reviews.map(mapReview) : [],
    fetchedAt: new Date().toISOString(),
  };
}
