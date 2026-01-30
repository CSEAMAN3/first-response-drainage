import Link from "next/link";
import Cta from "@/components/Cta";
// import MainServices from "@/components/MainServices";
import Reasons from "@/components/Reasons";
import Scrollbar from "@/components/Scrollbar";
import WhatWeHelpWith from "@/components/WhatWeHelpWith";
import { MdStarRate } from "react-icons/md";
import HomeCoverage from "@/components/HomeCoverage";
import ServicesSlider from "@/components/ServicesSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drainage Services in Cambrdigeshire, Norfolk & Suffolk",
  description:
    "Need expert drainage services in East Anglia? From blocked drain clearance and CCTV surveys to 24/7 emergency callouts, 1st Response Drainage provides reliable support for domestic and commercial property.",
  alternates: { canonical: "/drainage-services" },
};

export default function DrainageServicesPage() {
  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;
  return (
    <main className="min-h-screen">
      <section className="bg-fr-primary px-8 py-16">
        <h1 className="font-bold text-fr-white text-2xl text-balance sm:text-center max-w-[30ch] sm:max-w-[40ch] sm:mx-auto mb-2">
          Drainage Services for Homes & Businesses Across Norfolk, Suffolk &
          Cambridgeshire
        </h1>
        <p className="text-fr-accent-two font-semibold text-sm mb-4 sm:text-center">
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1 mr-1" />
          <span className="text-fr-white">
            5.0 Google Rating &#183; 85 reviews
          </span>
        </p>
        <p className="font-light text-fr-white max-w-[80ch] text-balance sm:text-center sm:mx-auto mb-4">
          We support homeowners and businesses across East Anglia with a wide
          range of drainage services, providing honest advice, rapid assistance
          and dependable results.
        </p>
        <Link
          href="/contact"
          className="text-fr-white bg-fr-accent-one px-8 py-4 rounded-sm block mb-6 w-fit font-bold hover:bg-fr-accent-one-mid transition-colors duration-300 cursor-pointer sm:mx-auto"
        >
          Request a Callout
        </Link>
        <a
          href="tel+:447961609836"
          className="text-fr-accent-two font-bold text-xl hover:text-fr-white w-fit transition-colors duration-150 sm:mx-auto block"
        >
          Call today on 07961 609836
        </a>
      </section>
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* <MainServices /> */}
      <ServicesSlider
        heading="1st Response Drainage Services"
        paragraph="Explore our full range of professional drainage services, designed to resolve problems quickly and keep drainage systems working reliably."
      />
      <WhatWeHelpWith />
      <Reasons />
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={true}
      />
      <HomeCoverage classes={true} />
    </main>
  );
}
