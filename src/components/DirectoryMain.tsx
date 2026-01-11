import Link from "next/link";
import { locations } from "../lib/locations";
import { FaArrowRight } from "react-icons/fa";

export default function DirectoryMain() {
  const cambridgeshireLocations = locations.filter(
    (l) => l.county === "Cambridgeshire"
  );
  const norfolkLocations = locations.filter((l) => l.county === "Norfolk");
  const suffolkLocations = locations.filter((l) => l.county === "Suffolk");

  return (
    <section className="px-8 py-16">
      <h2 className="font-bold text-2xl mb-2 text-balance text-fr-primary sm:text-center">
        Local Engineers Covering East Anglia
      </h2>
      <p className="font-light text-balance max-w-[80ch] mb-4 sm:mb-8 sm:text-center sm:mx-auto">
        With local engineers operating across East Anglia, we&#39;re able to
        respond quickly to drainage issues in both towns and surrounding rural
        areas. Whether you need help with a blocked drain, a CCTV survey or
        specialist repairs, our team is never far away.
      </p>
      <div className="max-w-300 lg:mx-auto">
        {/* Cambridgeshire directory */}
        <div className="grid grid-cols-1 gap-y-8">
          <div>
            <h3 className="font-bold sm:text-lg text-fr-primary mb-2">
              <Link
                href="/locations/cambridgeshire"
                className="hover:text-fr-accent-one"
              >
                Drainage Services in Cambridgeshire
                <FaArrowRight className="inline-block ml-2 mb-0.5" size={14} />
              </Link>
            </h3>
            <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
              {cambridgeshireLocations.map((l) => {
                return (
                  <Link
                    href={l.slug}
                    key={l.location}
                    className="hover:text-fr-accent-one w-fit"
                  >
                    Drainage Services in {l.location}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Norfolk Directory */}
          <div>
            <h3 className="font-bold sm:text-lg text-fr-primary mb-2">
              <Link
                href="/locations/norfolk"
                className="hover:text-fr-accent-one w-fit"
              >
                Drainage Services in Norfolk
                <FaArrowRight className="inline-block ml-2 mb-0.5" size={14} />
              </Link>
            </h3>
            <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
              {norfolkLocations.map((l) => {
                return (
                  <Link
                    href={l.slug}
                    key={l.location}
                    className="hover:text-fr-accent-one w-fit"
                  >
                    Drainage Services in {l.location}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Suffolk Directroy */}
          <div>
            <h3 className="font-bold sm:text-lg text-fr-primary mb-2">
              <Link
                href="/locations/suffolk"
                className="hover:text-fr-accent-one"
              >
                Drainage Services in Suffolk
                <FaArrowRight className="inline-block ml-2 mb-0.5" size={14} />
              </Link>
            </h3>
            <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
              {suffolkLocations.map((l) => {
                return (
                  <Link
                    href={l.slug}
                    key={l.location}
                    className="hover:text-fr-accent-one"
                  >
                    Drainage Services in {l.location}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
