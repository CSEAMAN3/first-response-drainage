import CountiesLocations from "@/components/CountiesLocations";
import Cta from "@/components/Cta";
import FaqCounties from "@/components/FaqCounties";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ServiceHelp from "@/components/ServiceHelp";
import ServicesSlider from "@/components/ServicesSlider";
import { counties } from "@/lib/Counties";
import { notFound } from "next/navigation";

export default function NorfolkPage() {
  const county = counties.find((c) => c.name === "Norfolk");

  if (!county) notFound();

  return (
    <main className="min-h-screen">
      <Hero
        heading={county?.hero.heading}
        paraOne={county?.hero.paragraph}
        photo="test"
      />
      <Reviews />
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
