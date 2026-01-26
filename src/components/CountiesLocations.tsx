import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LocationArrayObject } from "../../types";

interface CountiesLocationsProps {
  heading: string;
  paraOne: string;
  paraTwo: string;
  locationsArray: LocationArrayObject[];
}

export default function CountiesLocations({
  heading,
  paraOne,
  paraTwo,
  locationsArray,
}: CountiesLocationsProps) {
  return (
    <div className="bg-fr-primary text-fr-white">
      <div className="px-8 py-16 max-w-300 mx-auto">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[28ch] mb-2">
          {heading}
        </h3>
        <p className="font-light text-balance mb-4 max-w-[90ch]">{paraOne}</p>
        <p className="font-bold text-fr-accent-two mb-8 text-balance">
          {paraTwo}
        </p>
        <ul className="grid grid-cols-one gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {locationsArray.map((l, id) => {
            return (
              <li key={id} className="capitalize">
                <Link
                  href={`/drainage-services/${l.slug}`}
                  className="flex items-center w-fit hover:text-fr-accent-two transition-all duration-300"
                >
                  <FaLocationDot className="inline-block mr-2" /> Drainage
                  Services in {l.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
