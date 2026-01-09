import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface HowServiceWorksProps {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  bullets: string[];
  closingParagraph: string;
}

export default function HowServiceWorks({
  heading,
  paragraphOne,
  paragraphTwo,
  bullets,
  closingParagraph,
}: HowServiceWorksProps) {
  return (
    <section className="bg-fr-primary relative">
      <div className="px-8 py-16 sm:py-20 text-fr-white max-w-250 mx-auto">
        <h4 className="font-bold text-xl mb-2 sm:text-3xl">{heading}</h4>
        <p className="font-light text-fr-white mb-2 max-w-[52ch]">
          {paragraphOne}
        </p>
        <p className="font-bold mb-4 text-fr-accent-two">{paragraphTwo}</p>
        <ul className="px-4 mb-8 grid gap-4 font-bold">
          {bullets.map((bullet, id) => {
            return (
              <li key={id} className="flex gap-2">
                {" "}
                <IoMdCheckmarkCircleOutline
                  className="text-fr-accent-two"
                  size={24}
                />
                {bullet}
              </li>
            );
          })}
        </ul>
        <p className="max-w-[52ch]">{closingParagraph}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/house.svg`}
          // need to sort alt
          alt="description here"
          className="hidden sm:block absolute bottom-0 right-0 sm:w-[20%] md:w-[24%] lg:w-[40%] max-w-90"
        />
      </div>
    </section>
  );
}
