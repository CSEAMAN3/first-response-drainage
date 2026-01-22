import ServicesCards from "./ServicesCards";

interface ServicesSliderProps {
  heading: string;
  paragraph: string;
}

export default function ServicesSlider({
  heading,
  paragraph,
}: ServicesSliderProps) {
  return (
    <section className="bg-fr-light-grey">
      <div className="px-8 py-8 md:py-16 max-w-300 mx-auto">
        <h3 className="font-bold text-xl text-fr-primary text-balance mb-2">
          {heading}
        </h3>
        <p className="font-light text-pretty mb-4 max-w-[60ch]">{paragraph}</p>
        <ServicesCards />
      </div>
    </section>
  );
}
