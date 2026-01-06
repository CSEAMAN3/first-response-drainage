import Link from "next/link";

interface MainServiceCardProps {
  graphic: string;
  heading: string;
  paragraph: string;
  link: string;
}

export default function MainServiceCard({
  graphic,
  heading,
  paragraph,
  link,
}: MainServiceCardProps) {
  return (
    <div className="bg-fr-light-grey">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${graphic}.svg`}
        alt=""
        className="w-40 md:w-44 h-auto"
      />
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <Link
        href={`/drainage-services/${link}`}
        aria-label={`go to the ${heading} page`}
      >
        Learn More
      </Link>
    </div>
  );
}
