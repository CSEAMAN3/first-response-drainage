import ProblemCards from "./ProblemCards";
import ServiceProblemsSlider from "./ServiceProblemsSlider";

export type ProblemCard = {
  graphic: string;
  title: string;
  alt: string;
};

interface ServiceProblemProps {
  heading: string;
  headingSplit: string;
  paragraphOne: string;
  paragraphTwo: string;
  cards: ProblemCard[];
}

export default function ServiceProblems({
  heading,
  headingSplit,
  paragraphOne,
  paragraphTwo,
  cards,
}: ServiceProblemProps) {
  return (
    <section className="px-8 py-8 max-w-300 mx-auto">
      <div>
        <h2 className="font-bold text-xl text-fr-primary md:text-center text-balance mb-2">
          {heading} <span className="md:block">{headingSplit}</span>
        </h2>
        <p className="font-light md:text-center md:max-w-[60ch] text-pretty mx-auto mb-2">
          {paragraphOne}
        </p>
        <p className="font-bold text-fr-primary mb-4 md:text-center text-balance mx-auto md:mb-8">
          {paragraphTwo}
        </p>
      </div>
      <ServiceProblemsSlider cards={cards} />
      <div className="hidden md:block">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            cards.length > 4 ? "lg:grid-cols-3 lg:max-w-178" : ""
          } max-w-116 mx-auto gap-8 items-center`}
        >
          {cards.map((card) => {
            return (
              <ProblemCards
                key={card.title}
                graphic={card.graphic}
                title={card.title}
                alt={card.alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
