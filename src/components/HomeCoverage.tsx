import CoverageChecker from "./CoverageChecker";
import { FaMapSigns } from "react-icons/fa";

// import CoverageTabs from "./CoverageTabs";

export default function HomeCoverage() {
  return (
    // <section className="relative">
    //   <div className="bg-fr-white grid grid-cols-1 md:grid-cols-2 max-w-300 mx-auto">
    //     <div className="absolute bg-fr-primary top-0 left-0 right-1/2 bottom-0 -z-10" />
    //     {/* image container */}
    //     <div className="order-2 md:order-1">
    //       {/* eslint-disable-next-line @next/next/no-img-element */}
    //       <img
    //         src="/images/purple-map.svg"
    //         alt=""
    //         className="h-full max-h-120"
    //       />
    //     </div>
    //     {/* content container */}
    //     <div className="order-1 md:order-2 px-8 py-8 place-content-center">
    //       <h3 className="font-bold text-2xl mb-4 text-fr-primary">
    //         {/* Serving Communities Across East Anglia */}
    //         Check Coverage In Your Area
    //       </h3>
    //       <p className="font-light max-w-[60ch] mb-4 text-pretty">
    //         {/* Our coverage spans Norfolk, Suffolk and Cambridgeshire, with local
    //         engineers operating across all nearby towns and villages. Explore
    //         the Counties below to see which areas we cover. */}
    //         Enter your postcode to see if our drainage engineers cover your area
    //         across Norfolk, Suffolk and Cambridgeshire
    //       </p>
    //       {/* <CoverageTabs /> */}
    //       <CoverageChecker />
    //     </div>
    //   </div>
    // </section>
    <section className="relative min-h-120 max-w-240 mx-auto">
      <div className="px-8 pt-16 pb-24">
        <h3 className="font-bold text-2xl mb-2 text-fr-primary text-center text-balance">
          Check Coverage In Your Area
        </h3>
        <p className="font-light md:max-w-[60ch] mx-auto text-balance mb-4 text-center">
          Enter your postcode to see if our drainage engineers cover your area
          across Norfolk, Suffolk and Cambridge
        </p>
        <CoverageChecker />
        <FaMapSigns className="absolute -bottom-2 right-8 text-8xl text-fr-primary" />
      </div>
    </section>
  );
}
