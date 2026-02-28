interface ProblemCardsProps {
  graphic: string;
  title: string;
}

export default function ProblemCards({ graphic, title }: ProblemCardsProps) {
  return (
    <div className="bg-fr-light-grey mx-auto p-8 max-w-54 h-54 grid grid-cols-1 place-content-center border-b-4 border-fr-accent-one">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${graphic}.svg`}
        // decorative only
        alt=""
        className="w-[40%] h-auto mx-auto mb-4"
      />
      <h3 className="max-w-[20ch] text-balance text-center mx-auto font-bold text-fr-primary">
        {title}
      </h3>
    </div>
  );
}
