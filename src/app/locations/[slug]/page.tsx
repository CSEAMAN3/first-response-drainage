import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/src/lib/locations";
// import Hero from "@/src/components/Hero";
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

  return (
    <div>
      <p>This is a location page for {location.location}</p>
    </div>
  );
}
