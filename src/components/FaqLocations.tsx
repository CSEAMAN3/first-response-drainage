import Link from "next/link";
import FaqAccordionLoc from "./FaqAccordionLoc";

interface FaqLocationsProps {
  heading: string;
  paragraph: string;
  location: string;
}

export default function FaqLocations({
  heading,
  paragraph,
  location,
}: FaqLocationsProps) {
  return (
    <section className="py-8 md:py-16">
      <div className="px-8">
        <h2 className="text-center font-bold text-xl md:text-2xl text-fr-primary text-balance mb-2">
          {heading} <span className="block">Questions, Answered</span>
        </h2>
        <p className="font-light text-center text-balance max-w-[80ch] mx-auto mb-12">
          {paragraph}
        </p>
        <FaqAccordionLoc location={location} />
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
