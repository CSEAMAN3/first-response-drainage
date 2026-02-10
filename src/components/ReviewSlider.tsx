"use client";

import { FcGoogle } from "react-icons/fc";
import { MdStarRate, MdStarOutline, MdStarHalf } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { useState } from "react";
import { GoogleReview } from "@/lib/googleReviews";

interface ReviewSliderProps {
  reviews: GoogleReview[];
}

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  const [expanded, setExpanded] = useState(false);
  const [review, setReview] = useState(0);

  function nextReview() {
    if (review === reviews.length - 1) {
      setReview(0);
    } else {
      setReview((prev) => prev + 1);
    }
  }

  function previousReview() {
    if (review === 0) {
      setReview(reviews.length - 1);
    } else {
      setReview((prev) => prev - 1);
    }
  }

  function getInitials(name: string) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase() || "?";
  }

  const current = reviews[review];
  const rating = current.rating ?? 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  if (!reviews?.length) {
    return (
      <div className="bg-fr-light-grey rounded-sm p-8 shadow-xl">
        <p className="font-bold text-fr-primary">Reviews</p>
        <p className="font-light text-sm">No reviews available right now.</p>
      </div>
    );
  }
  return (
    <div className="bg-fr-light-grey rounded-sm p-8 relative shadow-xl">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-fr-accent-one grid place-content-center">
          {current.author_photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={current.author_photo_url}
              alt={`${current.author_name} profile photo`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-fr-white font-bold text-lg">
              {getInitials(current.author_name)}
            </span>
          )}
        </div>
        <div>
          <p className="font-bold ">{reviews[review].author_name}</p>
          <p className="font-light text-xs">
            {reviews[review].relative_time_description}
          </p>
        </div>
      </div>
      <FcGoogle className="absolute top-8 right-8" size={32} />
      <div
        key={review}
        className="flex text-xl mb-4 transition-opacity duration-300"
      >
        {Array.from({ length: fullStars }).map((_, i) => (
          <MdStarRate
            key={`full-${i}`}
            className="text-fr-accent-two drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] "
          />
        ))}

        {hasHalfStar && <MdStarHalf className="text-fr-accent-two" />}

        {Array.from({ length: emptyStars }).map((_, i) => (
          <MdStarOutline key={`empty-${i}`} className="text-gray-400" />
        ))}
      </div>
      <p
        className={`font-light mb-4 text-sm transition-all duration-300 ${expanded ? "" : "line-clamp-2"}`}
      >
        {reviews[review].text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-bold text-sm cursor-pointer hover:text-fr-accent-one transition-colors duration-300 mb-8"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
      <div className="flex justify-between font-bold text-sm">
        {/* back button */}
        <button
          onClick={previousReview}
          className="hover:text-fr-accent-one cursor-pointer"
        >
          <FaChevronLeft className="inline-block mb-0.5 mr-1" /> Previous
        </button>
        {/* forward button */}
        <button
          onClick={nextReview}
          className="hover:text-fr-accent-one cursor-pointer"
        >
          Next
          <FaChevronRight className="inline-block mb-0.5 ml-1" />
        </button>
      </div>
    </div>
  );
}
