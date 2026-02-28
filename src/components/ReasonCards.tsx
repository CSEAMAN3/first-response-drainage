interface ReasonCardsProps {
  graphic: string;
  heading: string;
  headingSplit: string;
  paragraph: string;
  altText: string;
}

export default function ReasonCards({
  graphic,
  heading,
  headingSplit,
  paragraph,
  altText,
}: ReasonCardsProps) {
  return (
    <div className="px-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${graphic}.svg`}
        alt={altText}
        className="h-24 mx-auto mb-4"
      />
      <h4 className="font-bold text-center text-fr-primary mb-2">
        {heading}
        <span className="block">{headingSplit}</span>
      </h4>
      <p className="font-light text-center text-balance max-w-[30ch] mx-auto">
        {paragraph}
      </p>
    </div>
  );
}
