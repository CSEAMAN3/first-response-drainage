import CoverageChecker from "./CoverageChecker";
import { FaMapSigns } from "react-icons/fa";

// import CoverageTabs from "./CoverageTabs";

interface HomeCoverageProps {
  classes: boolean;
}

export default function HomeCoverage({ classes }: HomeCoverageProps) {
  return (
    <section className="relative min-h-120 max-w-240 mx-auto">
      <div className="px-8 pt-16 pb-24">
        <h3 className="font-bold text-2xl mb-2 text-fr-primary text-center text-balance">
          Check Coverage In Your Area
        </h3>
        <p className="font-light md:max-w-[60ch] mx-auto text-balance mb-4 text-center">
          Enter your postal area code to see if our drainage engineers cover
          your location across Norfolk, Suffolk and Cambridge
        </p>
        <CoverageChecker classes={classes} />
        <FaMapSigns className="absolute -bottom-2 right-8 text-8xl text-fr-primary" />
      </div>
    </section>
  );
}
