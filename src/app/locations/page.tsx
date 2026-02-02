import CoverageChecker from "@/components/CoverageChecker";
import Cta from "@/components/Cta";
import DirectoryMain from "@/components/DirectoryMain";
import Scrollbar from "@/components/Scrollbar";
import ServicesArea from "@/components/ServicesArea";
import { MdStarRate } from "react-icons/md";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Locations | 1st Response Drainage - Locations Directory",
  description:
    "Covering all towns, villages and cities throughout Cambridgeshire, Norfolk & Suffolk. Find dedicated drainage services in a location near you.",
  alternates: { canonical: "/locations" },
};

export default function LocationHubPage() {
  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  return (
    <main>
      <StructuredData
        id="breadcrumbs-locations"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      {/* Hero Section */}
      <div className="px-8 py-16 bg-fr-primary">
        <h1 className="font-bold text-2xl text-fr-white text-balance max-w-[30ch] text-center mx-auto mb-2">
          Drainage Services Throughout Norfolk, Suffolk & Cambridgeshire
        </h1>
        <p className="text-fr-accent-two font-semibold text-sm mb-4 text-center">
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1 mr-1" />
          <span className="text-fr-white">
            5.0 Google Rating &#183; 85 reviews
          </span>
        </p>
        <p className="font-light text-fr-white text-balance sm:mx-auto text-center max-w-[60ch] mb-8">
          {/* We provide professional drainage services across East Anglia,
          supporting homes and businesses throughout Norfolk, Suffolk and
          Cambridge. Use the links below to find drainage services in your local
          area. */}
          Check your postal area code below to see if we have drainage engineers
          operating local to you.
        </p>
        <CoverageChecker classes={false} />
      </div>
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* directory section */}
      <DirectoryMain />
      {/* service availabilty section */}
      <ServicesArea />
      {/* cta section */}
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={false}
      />
    </main>
  );
}
