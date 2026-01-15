import { IoShieldCheckmark } from "react-icons/io5";
import { HelpBullets } from "../../types";

interface ServiceHelpProps {
  openingParagraph: string;
  closingParagraph: string;
  bullets: HelpBullets[];
}

export default function ServiceHelp({
  openingParagraph,
  closingParagraph,
  bullets,
}: ServiceHelpProps) {
  return (
    <section className="px-8 py-16">
      <h4 className="font-bold text-center text-xl sm:text-2xl text-fr-primary mb-2">
        What We Help With
      </h4>
      <p className="font-light text-center text-balance mb-8 md:mb-16">
        {openingParagraph}
      </p>
      <ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:max-w-md md:grid-cols-3 md:max-w-160 place-content-center gap-8 mb-8 md:mb-16">
        {bullets.map((bullet, id) => {
          return (
            <li
              key={id}
              className="w-fit mx-auto font-light text-fr-primary-dark text-center"
            >
              <IoShieldCheckmark
                className="block mx-auto text-fr-primary mb-2"
                size={32}
              />
              {bullet.lineOne} <span className="block">{bullet.lineTwo}</span>
            </li>
          );
        })}
      </ul>
      <p className="font-light text-center text-balance max-w-[70ch] mx-auto">
        {closingParagraph}
      </p>
    </section>
  );
}
