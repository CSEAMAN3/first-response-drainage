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
        <div className="w-12 h-12 bg-fr-accent-one rounded-full text-fr-white font-bold text-2xl grid place-content-center">
          K
        </div>
        <div>
          <p className="font-bold ">Kevin Hurst</p>
          <p className="font-light text-xs">October 2025</p>
        </div>
      </div>
      <FcGoogle className="absolute top-8 right-8" size={32} />
      <div className="flex text-xl text-fr-primary mb-4">
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
        <MdStarRate className="inline-block mb-1" />
      </div>
      <p
        className={`font-light mb-4 text-sm ${expanded ? "" : "line-clamp-2"}`}
      >
        If I could score 10 stars I would. We called on a Sunday morning due to
        a blocked drain and Andy replied instantly when we message him and was
        with us within the hour. After some investigation the drain was
        unblocked and everything left clean and tidy. A very friendly service at
        a fraction of the cost of the bigger well known companies. In fact I was
        very pleasantly surprised by the cost. Thank you
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
