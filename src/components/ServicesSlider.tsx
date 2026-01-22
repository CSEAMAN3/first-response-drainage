import ServicesCards from "./ServicesCards";

export default function ServicesSlider() {
  return (
    <section className="">
      <div className="px-8 py-8 md:py-16 max-w-300 mx-auto">
        <h3 className="font-bold text-xl text-fr-primary text-balance mb-2">
          Keeping Your Drains Clear, Safe & Working Properly
        </h3>
        <p className="font-light text-pretty mb-4 max-w-[90%]">
          Our local drainage engineers deliver reliable drainage solutions, from
          clearing blockages to full inspections.
        </p>
        <ServicesCards />
      </div>
    </section>
  );
}
