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
import { buildReviewsSchema } from "@/lib/schema/reviewsSchema";
import { getGoogleReviews } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Drainage Services in Suffolk | Fast Local Callouts",
  description:
    "Reliable drainage services in Suffolk for homes and businesses. Blocked drains, inspections and repairs by local engineers.",
  alternates: { canonical: "/locations/suffolk" },
};

export default async function SuffolkPage() {
  const reviewsData = await getGoogleReviews();

  const county = counties.find((c) => c.name === "Suffolk");

  if (!county) notFound();

  return (
    <main className="min-h-screen">
      <StructuredData
        id={`reviews-schema-locations-suffolk`}
        data={buildReviewsSchema({
          pagePath: "/locations",
          rating: reviewsData.rating ?? 0,
          reviewCount: reviewsData.user_ratings_total ?? 0,
          reviews: reviewsData.reviews.map((r) => ({
            author_name: r.author_name,
            rating: r.rating,
            text: r.text ?? "",
          })),
        })}
      />
      <StructuredData
        id="breadcrumbs-locations-suffolk"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "Suffolk", path: "/locations/suffolk" },
        ])}
      />
      <Hero
        heading={county?.hero.heading}
        paraOne={county?.hero.paragraph}
        photo="test"
        reviewsData={reviewsData}
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
        openingParagraph="We support Suffolk homeowners, landlords and businesses with drainage problems such as slow flow, recurring blockages and pipe defects. We always provide clear advice and practical solutions tailored to the property and drainage system."
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
        heading="Need A Drainage Engineer In Suffolk?"
        paragraph="Contact our team any time to discuss your drainage issue or request a callout online. We operate seven days a week and respond as quickly as possible across Suffolk."
        classes={true}
      />
      <FaqCounties
        heading="Your Suffolk Drainage"
        paragraph="These are some of the questions we're regularly asked by customers in Suffolk, covering our services, response times and what happens when you contact our team."
        location="Suffolk"
      />
    </main>
  );
}
