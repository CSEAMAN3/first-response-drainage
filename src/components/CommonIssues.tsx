import { firstResponseImages as Images } from "@/lib/firstResponseImages";
import { ResponseImageKey } from "@/lib/firstResponseImages";
import CloudinaryOptImage from "./CloudinaryOptImage";

interface CommonIssuesProps {
  heading: string;
  openingParagraph: string;
  bullets: string[];
  photo: ResponseImageKey;
}

export default function CommonIssues({
  heading,
  openingParagraph,
  bullets,
  photo,
}: CommonIssuesProps) {
  return (
    <section className="relative py-8 md:py-16">
      <div className="px-8 max-w-300 mx-auto mb-8">
        <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row md:items-start mb-8">
          <h3 className="font-bold text-3xl md:text-4xl text-fr-white text-balance shrink-0">
            Common Drainage <span className="block">{heading}</span>
          </h3>
          <p className="font-light text-fr-white flex-1 md:mt-1 max-w-[58ch]">
            {openingParagraph}
          </p>
        </div>
        <ul className="text-fr-white list-disc grid grid-cols-1 md:grid-cols-2 gap-2 max-w-200 mb-8 px-4">
          {bullets.map((bullet, id) => {
            return <li key={id}>{bullet}</li>;
          })}
        </ul>
        <p className="text-fr-accent-two font-bold max-w-[62ch] text-balance">
          {/* {closingParagraph} */}
          We&#39;ll clear the blockage quickly and advise whether a CCTV
          inspection or targeted repairs are needed to stop the problem
          returning.
        </p>
      </div>
      <div className="max-w-300 mx-auto">
        <CloudinaryOptImage
          {...Images[photo]}
          quality={75}
          sizes="(max-width: 767px) 95vw, 800px"
          className="w-[95%] max-w-200 h-60 md:h-80 object-cover mx-auto rounded-xl"
        />
      </div>
      <div className="absolute top-0 left-0 w-screen h-[80%] bg-fr-primary -z-10" />
    </section>
  );
}
