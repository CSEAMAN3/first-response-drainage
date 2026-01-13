import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/src/lib/locations";
import Hero from "@/src/components/Hero";
import Scrollbar from "@/src/components/Scrollbar";
import Services from "@/src/components/Services";
import Reviews from "@/src/components/Reviews";
import CommonIssues from "@/src/components/CommonIssues";
import SurroundingAreas from "@/src/components/SurroundingAreas";
import Cta from "@/src/components/Cta";
import FaqLocations from "@/src/components/FaqLocations";
// import Scrollbar from "@/src/components/Scrollbar";
// import Cta from "@/src/components/Cta";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

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
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: location.seo.metaTitle,
      description: location.seo.metaDescription,
      url: `/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) notFound();

  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  return (
    <main>
      {/* hero section */}
      <Hero
        heading={location.heroSection.heading}
        paraOne={location.heroSection.paragraph}
        photo={`test.jpg`}
      />
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* Reviews Section */}
      <Reviews />
      {/* services section */}
      <Services
        heading={`Our Drainage Services`}
        paragraph={location.servicesSection.paragraph}
      />
      {/* common issues section */}
      <CommonIssues
        heading={location.commonIssuesSection.heading}
        openingParagraph={location.commonIssuesSection.openingParagraph}
        bullets={location.commonIssuesSection.bullets}
        photo="test.jpg"
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
        heading={`Need Expert Drainage Help In ${location.location}`}
        paragraph={`Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help in ${location.location} and surrounding areas. Fast, reliable service, whenever you need it.`}
        classes={true}
      />
      {/* faq section */}
      <FaqLocations
        heading={`Your ${location.location}  Drianage`}
        paragraph={`We've answered some of the most common questions customers ask about drainage services in ${location.location}, so you know what to expect before booking a visit from our engineers.`}
        location="Cambridge"
      />
    </main>
  );
}
