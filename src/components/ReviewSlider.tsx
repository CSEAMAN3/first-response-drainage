"use client";

import { FcGoogle } from "react-icons/fc";
import { MdStarRate } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { useState } from "react";

export default function ReviewSlider() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-fr-light-grey rounded-sm p-8 relative">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-16 h-16 bg-fr-accent-one rounded-full text-fr-white font-bold text-3xl grid place-content-center">
          B
        </div>
        <div>
          <p className="font-bold text-lg">Bruce Cracknell</p>
          <p className="font-light text-sm">October 2025</p>
        </div>
      </div>
      <FcGoogle className="absolute top-8 right-8" size={40} />
      <div className="flex text-xl text-fr-primary mb-4">
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
      </div>
      <p
        className={`font-light mb-4 text-sm ${expanded ? "" : "line-clamp-3"}`}
      >
        Thank you for the 5-star review, Bruce. We&#39;re so pleased to hear
        that you were happy with the service you received and that you would
        recommend 1st Response Drainage as a friendly and efficient emergency
        drainage company. Please don&#39;t hesitate to reach out anytime you
        need professional help with your drains.
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-bold text-sm cursor-pointer hover:text-fr-accent-one transition-colors duration-300 mb-8"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
      <div className="flex justify-between font-bold text-sm">
        {/* back button */}
        <button className="hover:text-fr-primary cursor-pointer">
          <FaChevronLeft className="inline-block mb-0.5 mr-1" /> Previous
        </button>
        {/* forward button */}
        <button className="hover:text-fr-primary cursor-pointer">
          Next
          <FaChevronRight className="inline-block mb-0.5 ml-1" />
        </button>
      </div>
    </div>
  );
}
