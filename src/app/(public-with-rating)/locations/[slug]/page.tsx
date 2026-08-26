import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/lib/locations";
import Hero from "@/components/Hero";
import Scrollbar from "@/components/Scrollbar";
import Reviews from "@/components/Reviews";
import CommonIssues from "@/components/CommonIssues";
import SurroundingAreas from "@/components/SurroundingAreas";
import Cta from "@/components/Cta";
import FaqLocations from "@/components/FaqLocations";
import ServicesSlider from "@/components/ServicesSlider";
import StructuredData from "@/components/StructuredData";
import { buildFaqSchema } from "@/lib/schema/faqSchema";
import { countyToSlug } from "@/utils/countyToSlug";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { getGoogleReviews } from "@/lib/googleReviews";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | 1st Response Drainage",
      description:
        "The location you're looking for could not be found. View our locations directory or contact our team for help.",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: location.seo.metaTitle,
    description: location.seo.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
      url: `${SITE_URL}/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;

  const location = locations.find((l) => l.slug === slug);

  if (!location) notFound();

  const reviewsData = await getGoogleReviews();

  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  const countySlug = countyToSlug(location.county);

  return (
    <main>
      <StructuredData
        id={`breadcrumbs-location-${slug}`}
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.county, path: `/locations/${countySlug}` },
          { name: location.location, path: `/locations/${location.slug}` },
        ])}
      />
      <StructuredData
        id={`location-faq-${slug}`}
        data={buildFaqSchema({
          pagePath: `/locations/${slug}`,
          pageTitle: location.seo.metaTitle,
          faqs: location.LocationFaqs.map(({ question, answer }) => ({
            question,
            answer,
          })),
        })}
      />
      {/* hero section */}
      <Hero
        heading={location.heroSection.heading}
        paraOne={location.heroSection.paragraph}
        photo={location.heroSection.photo}
        reviewsData={reviewsData}
        alt={location.heroSection.alt}
      />
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* Reviews Section */}
      <Reviews reviewsData={reviewsData} />
      {/* services section */}
      <ServicesSlider
        heading={`Drain Unblocking & Drainage Services in ${location.location}`}
        paragraph={location.servicesSection.paragraph}
      />
      {/* common issues section */}
      <CommonIssues
        heading={location.commonIssuesSection.heading}
        openingParagraph={location.commonIssuesSection.openingParagraph}
        bullets={location.commonIssuesSection.bullets}
        photo={location.heroSection.photo}
      />
      {/* Surrounding Areas Section */}
      <SurroundingAreas
        location={location.location}
        openingParagraph={location.surroundingAreas.openingParagraph}
        nearByLocations={location.surroundingAreas.nearByLocations}
        closingParagraph={location.surroundingAreas.closingParagraph}
      />
      {/* cta section */}
      <Cta
        heading={`Need Drain Unblocking in ${location.location}?`}
        paragraph={`Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are ready to help with fast, reliable drain unblocking in ${location.location} and surrounding areas. 24/7 when you need it most.`}
        classes={true}
      />
      {/* faq section */}
      <FaqLocations
        heading={`Your ${location.location} Drainage`}
        paragraph={`We've answered some of the most common questions about drain unblocking in ${location.location}, so you know what to expect before booking a visit from our engineers.`}
        location={location.location}
      />
    </main>
  );
}
