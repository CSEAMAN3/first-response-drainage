import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

export default function Faq() {
  return (
    <section className="py-8 md:py-16">
      <div className="px-8">
        <h2 className="text-center font-bold text-xl md:text-2xl text-fr-primary">
          Your Questions, Answered
        </h2>
        <p className="font-light text-center text-balance max-w-[80ch] mx-auto mb-12">
          We&#39;ve answered some of the most common questions we receive about
          drainage issues, surveys and repairs to help you understand what to
          expect before you book.
        </p>
        <FaqAccordion />
        <Link
          href="/faq"
          className="font-bold bg-fr-accent-one text-fr-white hover:bg-fr-accent-one-mid px-8 py-4 mt-16 block mx-auto w-fit rounded-sm"
        >
          View More FAQs
        </Link>
      </div>
    </section>
  );
}
