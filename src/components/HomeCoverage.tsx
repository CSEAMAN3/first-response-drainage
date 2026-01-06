import CoverageTabs from "./CoverageTabs";

export default function HomeCoverage() {
  return (
    <section className="relative">
      <div className="bg-fr-white grid grid-cols-1 md:grid-cols-2 max-w-300 mx-auto">
        <div className="absolute bg-fr-light-purple top-0 left-0 right-1/2 bottom-0 -z-10" />
        {/* image container */}
        <div className="order-2 md:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/purple-map.svg"
            alt=""
            className="h-full max-h-120"
          />
        </div>
        {/* content container */}
        <div className="order-1 md:order-2 px-8 py-8 place-content-center">
          <h3 className="font-bold text-3xl max-w-[20ch] mb-4 text-fr-light-purple">
            Serving Communities Across East Anglia
          </h3>
          <p className="font-light max-w-[60ch] mb-4 text-pretty">
            Our coverage spans Norfolk, Suffolk and Cambridgeshire, with local
            engineers operating across all nearby towns and villages. Explore
            the Counties below to see which areas we cover.
          </p>
          <CoverageTabs />
        </div>
      </div>
    </section>
  );
}
