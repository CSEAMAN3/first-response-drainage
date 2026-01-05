import Link from "next/link";

interface CtaProps {
  heading: string;
  paragraph: string;
}

export default function Cta({ heading, paragraph }: CtaProps) {
  return (
    <section className="bg-fr-dark-blue text-fr-white">
      <h3>
        {heading}{" "}
        <span className="block text-fr-light-blue">
          We&#39;re Ready To Respond!
        </span>
      </h3>
      <p>{paragraph}</p>
      <Link href={"/contact"}> Request a Callout</Link>
      <a href="tel+447961609836">Call today on 07961609836</a>
    </section>
  );
}
