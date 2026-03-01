import CountiesLocations from "@/components/CountiesLocations";
import Cta from "@/components/Cta";
import FaqCounties from "@/components/FaqCounties";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ServiceHelp from "@/components/ServiceHelp";
import ServicesSlider from "@/components/ServicesSlider";
import { counties } from "@/lib/counties";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { getGoogleReviews } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Drainage Services in Norfolk | Fast Local Callouts",
  description:
    "Reliable drainage services in Norfolk for homes and businesses. Blocked drains, inspections and repairs by local engineers.",
  alternates: { canonical: "/locations/norfolk" },
};

export default async function NorfolkPage() {
  const reviewsData = await getGoogleReviews();

  const county = counties.find((c) => c.name === "Norfolk");

  if (!county) notFound();

  return (
    <main className="min-h-screen">
      <StructuredData
        id="breadcrumbs-locations-norfolk"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "Norfolk", path: "/locations/norfolk" },
        ])}
      />
      <Hero
        heading={county?.hero.heading}
        paraOne={county?.hero.paragraph}
        photo="test"
        reviewsData={reviewsData}
        alt="A drainage engineer unblocking a blocked drain a night"
      />
      <Reviews reviewsData={reviewsData} />
      <ServicesSlider
        heading={county.services.heading}
        paragraph={county.services.paragraph}
      />
      {/* local drainage section */}
      <CountiesLocations
        heading={county.locations.heading}
        paraOne={county.locations.openingParagraph}
        paraTwo={county.locations.closingParagraph}
        locationsArray={county.locations.locationArray}
      />
      {/* what we help section */}
      <ServiceHelp
        openingParagraph="We help resolve everything from everyday drain blockages to more complex issues affecting older and modern properties alike. Our engineers focus on identifying the cause of the problem and delivering reliable solutions that prevent repeat issues."
        closingParagraph="If the same issue keeps returning, we can inspect your drainage system with CCTV to identify the cause and recommend the most effective repair option."
        bullets={[
          { lineOne: "Blocked Toilets,", lineTwo: "Baths & Showers" },
          { lineOne: "External Drainage", lineTwo: "& Backing Up" },
          { lineOne: "Recurring Blockages", lineTwo: "& Slow Drainage" },
          {
            lineOne: "CCTV Drainage Surveys",
            lineTwo: "Diagnosis and Reporting",
          },
          { lineOne: "Drain Cleaning &", lineTwo: "No Dig Repairs" },
          {
            lineOne: "Root Intrusion Removal",
            lineTwo: "& Pipe Defect Repairs",
          },
        ]}
      />
      <Cta
        heading="Need Drainage Help In Norfolk?"
        paragraph="Call us any time, 24 hours a day, seven days a week to speak with our team or request a callout online. We'll respond as quickly as possible."
        classes={true}
      />
      <FaqCounties
        heading="Your Norfolk Drainage"
        paragraph="We've answered some of the most common questions customers ask about drainage support across Norfolk, to help you understand what to expect before booking a visit or requesting a callout."
        location="Norfolk"
      />
    </main>
  );
}
