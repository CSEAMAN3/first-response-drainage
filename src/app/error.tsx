"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-fr-primary">
      <h1 className="text-xl sm:text-4xl font-bold mb-4 text-fr-white">
        Something has gone wrong
      </h1>
      <p className="text-base sm:text-lg mb-6 max-w-md text-fr-white">
        There has been an error. We are working hard to resolve the issue.
      </p>
      <button
        onClick={reset}
        className="inline-block bg-fr-accent-one hover:bg-fr-accent-one-dark text-fr-white transition-colors duration-300 font-bold py-3 px-6 rounded-sm cursor-pointer"
      >
        Try Again
      </button>
    </main>
  );
}
