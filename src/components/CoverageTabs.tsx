"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CoverageTabs() {
  const [coverageArea, setCoverageArea] = useState("Norfolk");

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 md:gap-4 mb-4 max-w-100">
        <button
          onClick={() => setCoverageArea("Norfolk")}
          className={`w-fit font-bold cursor-pointer hover:underline hover:text-fr-light-blue transition-colors duration-150 ${
            coverageArea === "Norfolk"
              ? "text-fr-light-blue underline"
              : "text-fr-mid-blue"
          }`}
        >
          Norfolk
        </button>
        <button
          onClick={() => setCoverageArea("Suffolk")}
          className={`w-fit font-bold cursor-pointer hover:underline hover:text-fr-light-blue transition-colors duration-150 ${
            coverageArea === "Suffolk"
              ? "text-fr-light-blue underline"
              : "text-fr-mid-blue"
          }`}
        >
          Suffolk
        </button>
        <button
          onClick={() => setCoverageArea("Cambridgeshire")}
          className={`w-fit font-bold cursor-pointer hover:underline hover:text-fr-light-blue transition-colors duration-150 ${
            coverageArea === "Cambridgeshire"
              ? "text-fr-light-blue underline"
              : "text-fr-mid-blue"
          }`}
        >
          Cambridgeshire
        </button>
      </div>
      {coverageArea === "Norfolk" && (
        <p className="font-light text-base text-fr-mid-blue mb-8 min-h-14 max-w-[60ch]">
          We cover the whole of Norfolk including the following locations:
          Norwich, Dereham, Kings Lynn, Great Yarmouth, North Norfolk Coast,
          Thetford and all surrounding towns and villages.
        </p>
      )}
      {coverageArea === "Suffolk" && (
        <p className="font-light mb-8 max-w-[60ch] text-base text-fr-mid-blue">
          We cover the whole of Suffolk including the following locations:
        </p>
      )}
      {coverageArea === "Cambridgeshire" && (
        <p className="font-light mb-8 max-w-[60ch] text-base text-fr-mid-blue">
          We cover the whole of Cambridgeshire including the following
          locations:{" "}
        </p>
      )}
      <Link
        href="/locations"
        className="font-bold hover:text-fr-red transition-colors duration-150"
      >
        Locations Directory <FaArrowRight className="inline-block mb-0.5" />
      </Link>
    </div>
  );
}
