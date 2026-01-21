import Image from "next/image";
import CoverageChecker from "./CoverageChecker";
import { FaMapSigns } from "react-icons/fa";

// import CoverageTabs from "./CoverageTabs";

interface HomeCoverageProps {
  classes: boolean;
}

export default function HomeCoverage({ classes }: HomeCoverageProps) {
  return (
    <section className="relative">
      <div className="">
        <div className="px-8 pt-16 pb-28 md:pt-24 md:pb-40 lg:pt-32 lg:pb-60">
          <h3 className="font-bold text-2xl mb-2 text-fr-primary text-center text-balance md:text-3xl">
            Check Coverage In Your Area
          </h3>
          <p className="font-light md:max-w-[60ch] mx-auto text-balance mb-4 text-center">
            Enter your postal area code to see if our drainage engineers cover
            your location across Norfolk, Suffolk and Cambridge
          </p>
          <CoverageChecker classes={classes} />
          <FaMapSigns className="absolute bottom-0 right-[10vw] text-8xl text-fr-primary md:text-[150px] lg:text-[200px] -z-20" />
          <Image
            src="/images/purple-monster-walking.png"
            alt="update this"
            width={200}
            height={200}
            className="w-30 md:w-42 lg:w-60 absolute bottom-0 left-16 md:left-24 lg:left-40"
          />
          <div className="w-full h-2 absolute bg-fr-primary-mid bottom-0 left-0 -z-10" />
        </div>
      </div>
    </section>
  );
}
