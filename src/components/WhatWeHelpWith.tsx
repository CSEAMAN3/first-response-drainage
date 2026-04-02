export default function WhatWeHelpWith() {
  return (
    <section className="bg-fr-primary px-8 py-16 border">
      <div className="max-w-300 mx-auto">
        <h3 className="font-bold text-fr-white text-2xl sm:text-3xl md:text-4xl mb-2">
          WHAT WE HELP WITH!
        </h3>
        <p className="font-light text-fr-white max-w-[80ch] text-balance mb-8 md:mb-8">
          From minor blockages to more complex drainage faults, we help
          homeowners and businesses resolve a wide range of drainage issues
          quickly and effectively.
        </p>
        <div className="flex flex-col md:flex-row gap-y-2 gap-x-8 text-fr-white font-bold mb-8 md:mb-8">
          <ul className="list-disc pl-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8">
            <li>Blocked toilets, sinks and showers</li>
            <li>Bad smells coming from drains</li>
            <li>Tree roots invading drainage pipes</li>
            <li>Properties affected by poor drainage</li>
            <li>Property Pre-purchase drain survey</li>
            <li>Slow draining water</li>
            <li>Recuring blockages</li>
            <li>Overflowing or backing-up drains</li>
            <li>Cracked, collapsed or damaged drains</li>
            <li>Ongoing drainage issues</li>
            <li>Commercial property drainage</li>
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
            href="tel:+447961609836"
            className="hover:text-fr-accent-two w-fit transition-colors duration-150 sm:text-xl"
          >
            Call us now on 07961 609836
          </a>
        </div>
      </div>
    </section>
  );
}
