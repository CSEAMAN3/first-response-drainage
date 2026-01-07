import ApproachSlider from "./ApproachSlider";

export default function Approach() {
  return (
    <section className="px-8 py-8 sm:py-16">
      <h4 className="text-fr-primary text-center text-balance font-bold text-xl sm:text-2xl mb-2">
        Our Approach to Solving Drainage Problems
      </h4>
      <p className="font-light text-center text-balance max-w-[80ch] mx-auto mb-8">
        Every drainage issue is different, but our approach is always the same:
        identify the problem accurately, explain your options clearly, and
        deliver a reliable solution designed to last.
      </p>
      <ApproachSlider />
    </section>
  );
}
