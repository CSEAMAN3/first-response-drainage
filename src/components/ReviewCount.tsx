import { GoogleReviewsPayload } from "@/lib/googleReviews";
import { MdStarRate, MdStarHalf, MdStarOutline } from "react-icons/md";

interface ReviewCountProps {
  reviewsData: GoogleReviewsPayload;
  classes?: boolean;
  altClasses?: boolean;
  addAltClasses?: boolean;
}

export default function ReviewCount({
  reviewsData,
  classes,
  altClasses,
  addAltClasses,
}: ReviewCountProps) {
  const rating = reviewsData.rating ?? 0;
  const total = reviewsData.user_ratings_total;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={`flex items-center gap-2 mb-4 mt-4 ${classes ? "w-fit mx-auto lg:mx-0" : ""} ${altClasses ? "sm:w-fit mx-auto" : ""} ${addAltClasses ? "w-fit mx-auto" : ""}`}
    >
      <div className="flex mb-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <MdStarRate
            key={`full-${i}`}
            className="text-fr-accent-two text-lg"
          />
        ))}

        {hasHalfStar && <MdStarHalf className="text-fr-accent-two text-lg" />}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <MdStarOutline key={`empty-${i}`} className="text-gray-400 text-lg" />
        ))}
      </div>

      <p className="text-sm text-fr-white font-semibold">
        {rating.toFixed(1)} Google Rating · {total ?? "—"} reviews
      </p>
    </div>
  );
}
