import Link from "next/link";
import { services } from "../lib/services";

export default function ServicesArea() {
  return (
    <section className="bg-fr-primary px-8 py-16">
      <div className="min-h-100 max-w-300 mx-auto">
        <h4 className="font-bold text-2xl text-fr-white text-balance text-center mx-auto mb-2">
          Drainage Services Available In Every Area We Cover
        </h4>
        <p className="font-light text-fr-white text-balance text-center max-w-[80ch] mx-auto mb-8">
          All of our drainage services are available throughout Norfolk, Suffolk
          and Cambridge. No matter which location you choose, our local
          engineers provide the same professional service, equipment and fast
          response times across the entire region.
        </p>
        <div className="text-fr-white font-bold grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-100 sm:max-w-140 md:max-w-180 mx-auto">
          {services.map((s) => {
            return (
              <Link
                href={`/drainage-services/${s.slug}`}
                key={s.slug}
                className=""
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/blocked-drains-white.svg`}
                  // need to sort alt
                  alt="description here"
                  className="w-[30%] h-auto mx-auto mb-4"
                />
                <h5 className="max-w-[14ch] text-center mx-auto">
                  {s.service}
                </h5>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
