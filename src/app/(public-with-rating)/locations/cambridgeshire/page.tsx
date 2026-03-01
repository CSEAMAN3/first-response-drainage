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
import { buildFaqSchema } from "@/lib/schema/faqSchema";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { getGoogleReviews } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Drainage Services in Cambridgeshire | Fast Local Callouts",
  description:
    "Reliable drainage services in Cambridgeshire for homes and businesses. Blocked drains, inspections and repairs by local engineers.",
  alternates: { canonical: "/locations/cambridgeshire" },
};

export default async function CambridgeshirePage() {
  const reviewsData = await getGoogleReviews();

  const county = counties.find((c) => c.name === "Cambridgeshire");

  if (!county) notFound();

  return (
    <main className="min-h-screen">
      <StructuredData
        id={`county-faq-${county.name.toLowerCase}`}
        data={buildFaqSchema({
          pagePath: `/locations/${county.name.toLowerCase()}`,
          pageTitle: `Drainage Services in ${county.name} | 1st Response Drainage`,
          faqs: county.Faqs.map(({ question, answer }) => ({
            question,
            answer,
          })),
        })}
      />
      <StructuredData
        id="breadcrumbs-locations-cambridgeshire"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "Cambridgeshire", path: "/locations/cambridgeshire" },
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
        openingParagraph="We assist with both urgent drainage problems and underlying issues that cause repeat disruption. Our engineers diagnose faults accurately and recommend solutions designed to keep systems running smoothly."
        closingParagraph="We'll assess your drainage system properly and recommend the most effective solution based on what's actually causing the problem."
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
        heading="Drainage Problems in Cambridgeshire?"
        paragraph="Need drainage support in Cambridgeshire? Contact our team by phone or request a callout online. We're available around the clock and respond quickly."
        classes={true}
      />
      <FaqCounties
        heading="Your Cambridgeshire Drainage"
        paragraph="Below are answers to common drainage questions from customers across Cambridgeshire, designed to give you clarity before arranging a visit from our engineers."
        location="Cambridgeshire"
      />
    </main>
  );
}
