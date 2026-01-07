"use client";

import { useState } from "react";
import { approachSteps } from "../lib/approachSteps";

export default function ApproachSlider() {
  const [approach, setApproach] = useState<0 | 1 | 2>(0);

  const approachdata = approachSteps;

  return (
    <div>
      <h5 className="font-bold text-fr-accent-one text-xl text-center mb-4">
        {approachdata[approach].heading}
      </h5>
      <p className="font-light text-fr-primary text-center text-balance max-w-[80ch] mx-auto mb-8">
        {approachdata[approach].paragraph}
      </p>
      <div className="flex gap-2 justify-center">
        <button
          className={`w-4 h-4 border-4 rounded-full cursor-pointer ${
            approach === 0
              ? "border-fr-accent-one bg-fr-accent-one"
              : "border-fr-primary bg-fr-primary"
          }`}
          onClick={() => setApproach(0)}
        />
        <button
          className={`w-4 h-4 border-4 rounded-full cursor-pointer ${
            approach === 1
              ? "border-fr-accent-one bg-fr-accent-one"
              : "border-fr-primary bg-fr-primary"
          }`}
          onClick={() => setApproach(1)}
        />
        <button
          className={`w-4 h-4 border-4 rounded-full cursor-pointer ${
            approach === 2
              ? "border-fr-accent-one bg-fr-accent-one"
              : "border-fr-primary bg-fr-primary"
          }`}
          onClick={() => setApproach(2)}
        />
      </div>
    </div>
  );
}
