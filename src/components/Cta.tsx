import Link from "next/link";

interface CtaProps {
  heading: string;
  paragraph: string;
}

export default function Cta({ heading, paragraph }: CtaProps) {
  return (
    <section className="bg-fr-dark-blue text-fr-white px-8 py-16 md:py-24">
      <h3 className="text-center font-bold text-xl mb-4 md:text-2xl lg:text-3xl">
        {heading}{" "}
        <span className="block text-fr-light-blue">
          We&#39;re Ready To Respond!
        </span>
      </h3>
      <p className="font-light text-center text-pretty max-w-[80ch] mx-auto mb-8">
        {paragraph}
      </p>
      <Link
        href={"/contact"}
        className="bg-fr-red px-8 py-4 rounded-sm block w-fit mx-auto font-bold hover:bg-fr-dark-red transition-colors duration-150 mb-8"
      >
        Request a Callout
      </Link>
      <a
        href="tel+447961609836"
        className="font-bold block w-fit hover:text-fr-yellow transition-colors duration-150 mx-auto"
      >
        Call today on 07961609836
      </a>
    </section>
  );
}
