import Link from "next/link";

interface CtaProps {
  heading: string;
  paragraph: string;
  classes: boolean;
}

export default function Cta({ heading, paragraph, classes }: CtaProps) {
  return (
    <section
      className={`${
        classes ? "bg-fr-primary" : "bg-fr-white"
      } px-8 py-16 md:py-24`}
    >
      <h3
        className={`text-center text-balance font-bold text-xl mb-4 md:text-2xl lg:text-3xl ${
          classes ? "text-fr-white" : "text-fr-primary"
        }`}
      >
        {heading}{" "}
        <span
          className={`block ${
            classes ? "text-fr-accent-two" : "text-fr-accent-one"
          }`}
        >
          We&#39;re Ready To Respond!
        </span>
      </h3>
      <p
        className={`font-light text-center text-balance max-w-[80ch] mx-auto mb-8 ${
          classes ? "text-fr-white" : "text-fr-primary-dark"
        }`}
      >
        {paragraph}
      </p>
      <Link
        href={"/contact"}
        className="bg-fr-accent-one px-8 py-4 rounded-sm block w-fit mx-auto font-bold hover:bg-fr-accent-one-mid transition-colors duration-150 mb-8 text-fr-white"
      >
        Request a Callout
      </Link>
      <a
        href="tel+447961609836"
        className={`font-bold block w-fit ${
          classes
            ? "text-fr-white hover:text-fr-accent-two"
            : "text-fr-primary hover:text-fr-accent-one"
        } transition-colors duration-150 mx-auto`}
      >
        Call today on 07961 609836
      </a>
    </section>
  );
}
