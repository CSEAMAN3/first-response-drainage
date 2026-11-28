"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  checkPostcode,
  type PostcodeCheckResult,
} from "@/utils/postcodeChecker";

interface CoverageCheckerProps {
  classes: boolean;
}

export default function CoverageChecker({ classes }: CoverageCheckerProps) {
  const postcodeId = useId();
  const errorId = `${postcodeId}-error`;

  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<PostcodeCheckResult | null>(null);

  const onCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(checkPostcode(postcode));
  };

  return (
    <section>
      <form onSubmit={onCheck} className="max-w-96 mx-auto mb-8">
        <label htmlFor={postcodeId} className="w-full sm:max-w-sm mb-4 block">
          <span className="sr-only">Postcode</span>
          <input
            id={postcodeId}
            name="postcode"
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. NR1, CB2, IP3"
            className={`w-full rounded-sm border ${classes ? "border-fr-primary text-fr-primary" : "border-fr-white placeholder:text-fr-accent-two text-fr-white"} p-3`}
            autoComplete="postal-code"
            autoCapitalize="characters"
            spellCheck={false}
            aria-invalid={result?.status === "invalid"}
            aria-describedby={
              result?.status === "invalid" ? errorId : undefined
            }
            required
          />
        </label>

        <button
          type="submit"
          className="font-bold bg-fr-accent-one text-fr-white px-6 py-3 rounded-sm hover:bg-fr-accent-one-mid transition cursor-pointer w-full tracking-tight"
        >
          Check
        </button>
      </form>

      <div aria-live="polite" aria-atomic="true">
        {result && (
          <div className="mt-4 md:mt-0 max-w-96 mx-auto">
            {result.status === "invalid" ? (
              <div
                id={errorId}
                className="p-4 rounded-sm bg-red-50 border border-red-200"
              >
                <p className="font-semibold text-red-800">
                  Please enter a valid postcode.
                </p>
                <p className="mt-2 text-red-900/90">
                  Enter your full postcode or the first part of your postcode,
                  such as NR1, CB2 or IP3.
                </p>
              </div>
            ) : result.status === "covered" ? (
              <div className="p-4 rounded-sm bg-green-50 border border-green-200">
                <p className="font-semibold text-green-800">
                  ✅ Good news — we cover {result.outcode}.
                </p>
                <p className="mt-2 text-green-900/90">
                  Get in touch and we&#39;ll arrange a visit at a time that
                  works for you.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="font-bold bg-fr-primary text-fr-white px-5 py-3 rounded-sm hover:bg-fr-primary-dark transition tracking-tight"
                  >
                    Request a Callout
                  </Link>
                  <a
                    href="tel:+447537149523"
                    className="font-bold border border-fr-primary text-fr-primary px-5 py-3 rounded-sm hover:bg-fr-primary hover:text-fr-white transition tracking-tight"
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
                    className="font-bold bg-fr-primary text-fr-white px-5 py-3 rounded-sm hover:bg-fr-primary-dark transition inline-block tracking-tight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
