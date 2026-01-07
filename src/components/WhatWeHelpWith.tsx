export default function WhatWeHelpWith() {
  return (
    <section className="bg-fr-primary px-8 py-16">
      <div className="max-w-200 mx-auto">
        <h3 className="font-bold text-fr-white text-2xl sm:text-3xl md:text-4xl mb-2">
          WHAT WE HELP WITH!
        </h3>
        <p className="font-light text-fr-white max-w-[80ch] text-balance mb-8 md:mb-8">
          From minor blockages to more complex drainage faults, we help
          homeowners and businesses resolve a wide range of drainage issues
          quickly and effectively.
        </p>
        <div className="flex flex-col md:flex-row gap-y-2 gap-x-8 text-fr-white font-bold mb-8 md:mb-8">
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Blocked toilets, sinks and showers</li>
            <li>Bad smells coming from drains</li>
            <li>Tree roots invading drainage pipes</li>
            <li>Properties affected by poor drainage or flooding</li>
            <li>Buying a property and need a pre-purchase drain survey</li>
          </ul>
          <ul className="list-disc pl-4 flex flex-col gap-2">
            <li>Slow draining water or recurring blockages</li>
            <li>Overflowing or backing-up drains</li>
            <li>Cracked, collapsed or damaged drains</li>
            <li>Ongoing drainage issues at commercial properties</li>
          </ul>
        </div>
        <div className="text-fr-white font-bold">
          <p className="text-xl text-fr-accent-two">
            Not sure which service you need?
          </p>
          <p className="font-light mb-4">
            Speak with our team 24/7 for honest advice.
          </p>
          <a
            href="tel+447961609836"
            className="hover:text-fr-accent-two w-fit transition-colors duration-150 sm:text-xl"
          >
            Call us now on 07961 609836
          </a>
        </div>
      </div>
    </section>
  );
}
