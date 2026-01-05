import CoverageTabs from "./CoverageTabs";

export default function HomeCoverage() {
  return (
    <section className="relative">
      <div className="bg-fr-white grid grid-cols-1 md:grid-cols-2 max-w-300 mx-auto">
        <div className="absolute bg-fr-dark-blue top-0 left-0 right-1/2 bottom-0 -z-10" />
        {/* image container */}
        <div className="order-2 md:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/blue-map.svg" alt="" className="h-full max-h-120" />
        </div>
        {/* content container */}
        <div className="order-1 md:order-2 px-8 py-8 place-content-center">
          <h3 className="font-bold text-3xl max-w-[20ch] mb-4 text-fr-mid-blue">
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

// import CoverageTabs from "./CoverageTabs";

// export default function HomeCoverage() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 relative">
//       <div className="bg-fr-dark-blue h-90 md:h-125" />
//       <div className="bg-fr-white h-150 md:h-125" />
//       <div className="min-h-75 absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-300 bg-fr-white grid grid-cols-1 md:grid-cols-2">
//         {/* image div */}
//         <div className="order-2 md:order-1 h-90 md:h-125">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/blue-map.svg"
//             alt="map"
//             className="h-90 md:h-125 w-auto"
//           />
//         </div>
//         {/* content div */}
//         <div className="order-1 md:order-2 px-8 py-8 place-content-center h-160">
//           <h3 className="font-bold text-3xl text-balance mb-4 text-fr-mid-blue max-w-[20ch]">
//             Serving Communities Across East Anglia
//           </h3>
//           <p className="font-light mb-4 text-balance mx-w-[40ch]">
//             Our coverage spans Norfolk, Suffolk and Cambridgeshire, with local
//             engineers operating across all nearby towns and villages. Explore
//             the Counties below to see which areas we cover.
//           </p>
//           <CoverageTabs />
//         </div>
//       </div>
//     </section>
//   );
// }

//  <section className="grid grid-cols-1 md:grid-cols-2 bg-fr-dark-blue">
//       <div className="order-2 md:order-1 bg-fr-white">
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="/images/blue-map.svg"
//           alt="map illustration of East Anglia with location marks for Norfolk, Suffolk and Cambridgeshire"
//           className="max-w-[90%] max-h-100 md:max-h-auto"
//         />
//       </div>
//       <div className="order-1 md:order-2 bg-fr-white">
//         <h3>Serving Communities Across East Anglia</h3>
//         <p>
//           Our coverage spans Norfolk, Suffolk and Cambridgeshire, with local
//           engineers operating across all nearby towns and villages. Explore the
//           Counties below to see which areas we cover.
//         </p>
//         <CoverageTabs />
//       </div>
//     </section>
