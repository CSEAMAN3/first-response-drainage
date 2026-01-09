import ProblemCards from "./ProblemCards";

type ProblemCard = {
  graphic: string;
  title: string;
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
    <section className="px-8 py-8">
      <h2 className="font-bold text-xl text-fr-primary text-center mb-2">
        {heading} <span className="block">{headingSplit}</span>
      </h2>
      <p className="font-light text-center max-w-[60ch] text-balance mx-auto mb-2">
        {paragraphOne}
      </p>
      <p className="font-bold text-fr-primary text-center max-w-[60ch] text-balance mx-auto mb-8">
        {paragraphTwo}
      </p>
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
            />
          );
        })}
      </div>
    </section>
  );
}
