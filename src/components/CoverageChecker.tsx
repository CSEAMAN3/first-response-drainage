"use client";

import { useState } from "react";
import Link from "next/link";
import {
  isCoveredPostcode,
  normalisePostcode,
  getOutcode,
} from "@/utils/postcodeChecker";

export default function CoverageChecker() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<null | {
    covered: boolean;
    outcode: string;
  }>(null);

  const onCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalised = normalisePostcode(postcode);
    const outcode = getOutcode(normalised);
    const covered = isCoveredPostcode(normalised);
    setResult({ covered, outcode });
  };

  return (
    <section className="">
      {/* <h3>Check Coverage In Your Area</h3> */}
      {/* <p>
        Enter your postcode to see if our drainage engineers cover your area
        across Norfolk, Suffolk and Cambridgeshire
      </p> */}
      <form onSubmit={onCheck} className="max-w-96 mx-auto mb-8">
        <label className="w-full sm:max-w-sm mb-4 block">
          <span className="sr-only">Postcode</span>
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. NR1 3AB"
            className="w-full rounded-sm border border-dr-primary p-3"
            autoComplete="postal-code"
          />
        </label>
        <button
          type="submit"
          className="font-bold bg-fr-accent-one text-fr-white px-6 py-3 rounded-sm hover:bg-fr-accent-one-mid transition cursor-pointer w-full"
        >
          Check
        </button>
      </form>
      {result && (
        <div className="mt-4 md:mt-0 max-w-96 mx-auto">
          {result.covered ? (
            <div className="p-4 rounded-sm bg-green-50 border border-green-200">
              <p className="font-semibold text-green-800">
                ✅ Good news — we cover {result.outcode}.
              </p>
              <p className="mt-2 text-green-900/90">
                Get in touch and we&#39;ll arrange a visit at a time that works
                for you.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="font-bold bg-fr-primary text-fr-white px-5 py-3 rounded-sm hover:bg-fr-primary-dark transition"
                >
                  Request a Callout
                </Link>
                <a
                  // replace number
                  href="tel:01603XXXXXX"
                  className="font-bold border border-fr-primary text-fr-primary px-5 py-3 rounded-sm hover:bg-fr-primary hover:text-fr-white transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-sm bg-amber-50 border border-amber-200">
              <p className="font-semibold text-amber-900">
                ⚠️ We may not cover {result.outcode}.
              </p>
              <p className="mt-2 text-amber-900/90">
                Coverage can vary — send us a message and we&#39;ll confirm
                availability.
              </p>
              <div className="mt-3">
                <Link
                  href="/contact"
                  className="font-bold bg-fr-primary text-fr-white px-5 py-3 rounded-sm hover:bg-fr-primary-dark transition inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
