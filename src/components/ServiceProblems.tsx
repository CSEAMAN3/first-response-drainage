interface ServiceProblemProps {
  heading: string;
  headingSplit: string;
  paragraphOne: string;
  paragraphTwo: string;
}

export default function ServiceProblems({
  heading,
  headingSplit,
  paragraphOne,
  paragraphTwo,
}: ServiceProblemProps) {
  return (
    <section className="px-8 py-8">
      <h2 className="font-bold text-xl text-fr-primary text-center mb-2">
        {heading} <span className="block">{headingSplit}</span>
      </h2>
      <p className="font-light text-center max-w-[60ch] text-balance mx-auto mb-2">
        {paragraphOne}
      </p>
      <p className="font-bold text-fr-primary text-center max-w-[60ch] text-balance mx-auto">
        {paragraphTwo}
      </p>
    </section>
  );
}
