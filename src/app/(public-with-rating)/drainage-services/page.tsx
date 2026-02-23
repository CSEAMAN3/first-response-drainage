import Link from "next/link";
import Cta from "@/components/Cta";
import Reasons from "@/components/Reasons";
import Scrollbar from "@/components/Scrollbar";
import WhatWeHelpWith from "@/components/WhatWeHelpWith";
// import { MdStarRate } from "react-icons/md";
import HomeCoverage from "@/components/HomeCoverage";
import ServicesSlider from "@/components/ServicesSlider";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { buildServicesListSchema } from "@/lib/schema/servicesListSchema";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { services } from "@/lib/services";
import ReviewCount from "@/components/ReviewCount";
import { buildReviewsSchema } from "@/lib/schema/reviewsSchema";
import { getGoogleReviews } from "@/lib/googleReviews";

export const metadata: Metadata = {
  title: "Expert Drainage Services in Cambrdigeshire, Norfolk & Suffolk",
  description:
    "Explore our full range of drainage services including blocked drains, CCTV surveys and repairs. Local engineers covering East Anglia 24/7.",
  alternates: { canonical: "/drainage-services" },
};

export default async function DrainageServicesPage() {
  const reviewsData = await getGoogleReviews();

  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;
  return (
    <main className="min-h-screen">
      <StructuredData
        id={`reviews-schema-drainage-services`}
        data={buildReviewsSchema({
          pagePath: "/drainage-services",
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
        id="drainage-services-schema"
        data={buildServicesListSchema(services)}
      />
      <StructuredData
        id="breadcrumbs-drainage-services"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Drainage Services", path: "drainage-services" },
        ])}
      />
      <section className="bg-fr-primary px-8 py-16">
        <h1 className="font-bold text-fr-white text-2xl text-balance sm:text-center max-w-[30ch] sm:max-w-[40ch] sm:mx-auto mb-2">
          Drainage Services for Homes & Businesses Across Norfolk, Suffolk &
          Cambridgeshire
        </h1>
        <ReviewCount reviewsData={reviewsData} altClasses={true} />
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
          href="tel:+447961609836"
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
