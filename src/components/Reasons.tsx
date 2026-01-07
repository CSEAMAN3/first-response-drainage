import ReasonCards from "./ReasonCards";

export default function Reasons() {
  return (
    <section className="px-8 py-8 sm:py-16 max-w-200 mx-auto">
      <h4 className="font-bold text-center text-xl text-balance text-fr-primary mb-2">
        Relaible Support From Local Drainage Specialists
      </h4>
      <p className="font-light text-center text-balance mb-8">
        We combine professional equipment, experienced engineers and fast local
        response times to deliver dependable drainage services across East
        Anglia.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        <ReasonCards
          graphic="stopwatch"
          heading="Fast, local"
          headingSplit="response times"
          paragraph="Engineers operating across 
Norfolk, Suffolk and Cambridge."
        />
        <ReasonCards
          graphic="callout-fee"
          heading="No call"
          headingSplit="out fees"
          paragraph="Clear, honest pricing with no hidden costs."
        />
        <ReasonCards
          graphic="insured"
          heading="Fully insured &"
          headingSplit="experienced engineers"
          paragraph="Professional service carried out to industry standards."
        />
        <ReasonCards
          graphic="high-pressure-water-jetting"
          heading="Advanced"
          headingSplit="drainage equipment"
          paragraph="CCTV cameras, high-pressure jetting and no-dig repair solutions."
        />
        <ReasonCards
          graphic="commercial-drainage"
          heading="Domestic &"
          headingSplit="commercial services"
          paragraph="Supporting homeowners, landlords and businesses of all sizes."
        />
        <ReasonCards
          graphic="shield-solution"
          heading="Long lasting"
          headingSplit="solutions"
          paragraph="We fix the cause of the problem, not just the symptoms."
        />
      </div>
    </section>
  );
}
