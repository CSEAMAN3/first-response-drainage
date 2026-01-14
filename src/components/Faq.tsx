import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

interface FaqProps {
  heading: string;
  paragraph?: string;
  questionCat: string;
  showViewMoreLink: boolean;
  classes: boolean;
}

export default function Faq({
  questionCat,
  heading,
  paragraph,
  showViewMoreLink,
  classes,
}: FaqProps) {
  return (
    <section className={`${classes ? "py-8 md:py-16" : "py-0"}`}>
      <div className="px-8">
        <h2
          className={`text-center font-bold text-xl md:text-2xl text-balance ${
            classes ? "mb-2 text-fr-primary" : "mb-4 text-fr-accent-one"
          }`}
        >
          {heading} Questions, Answered
        </h2>
        {paragraph && (
          <p className="font-light text-center text-balance max-w-[80ch] mx-auto mb-12">
            {paragraph}
          </p>
        )}
        <FaqAccordion questionCat={questionCat} />
        {showViewMoreLink && (
          <Link
            href="/faq"
            className="font-bold bg-fr-accent-one text-fr-white hover:bg-fr-accent-one-mid px-8 py-4 mt-16 block mx-auto w-fit rounded-sm"
          >
            View More FAQs
          </Link>
        )}
      </div>
    </section>
  );
}
