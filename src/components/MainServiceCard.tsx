import Link from "next/link";

interface MainServiceCardProps {
  graphic: string;
  heading: string;
  headingSplit: string;
  paragraph: string;
  paragraphTwo: string;
  link: string;
}

export default function MainServiceCard({
  graphic,
  heading,
  headingSplit,
  paragraph,
  paragraphTwo,
  link,
}: MainServiceCardProps) {
  return (
    <Link
      href={`/drainage-services/${link}`}
      aria-label={`Link to the ${heading} page`}
      className="bg-fr-light-grey block p-8 border-b-4 border-fr-red hover:border-fr-primary w-[90%] hover:w-full mx-auto transition-all duration-500 group"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${graphic}.svg`}
        // need to sort alt
        alt="description here"
        className="w-[40%] h-auto mx-auto mb-8"
      />
      <h3 className="text-center font-bold text-xl text-fr-primary-dark mb-4 max-w-[20ch] mx-auto text-balance group-hover:text-fr-primary transition-all duration-300">
        {heading} <span className="block">{headingSplit}</span>
      </h3>
      <p className="font-light text-xl text-center">{paragraph}</p>
      <p className="text-center mb-8">{paragraphTwo}</p>
      <p className="text-xl text-center block text-fr-primary-dark font-bold group-hover:text-fr-primary transition-all duration-300">
        Learn More
      </p>
    </Link>
  );
}
