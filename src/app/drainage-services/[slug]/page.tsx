import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/src/lib/services";
import Hero from "@/src/components/Hero";
import ServiceProblems from "@/src/components/ServiceProblems";
import Scrollbar from "@/src/components/Scrollbar";
import HowServiceWorks from "@/src/components/HowServiceWorks";
import ServiceHelp from "@/src/components/ServiceHelp";
import Cta from "@/src/components/Cta";
import Faq from "@/src/components/Faq";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | 1st Response Drainage",
      description:
        "The service you're looking for could not be found. View our drainage services or contact our team for help.",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    alternates: {
      canonical: `/drainage-services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: `/drainage-services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  console.log(service.faqSection.category);

  return (
    <main>
      {/* hero */}
      <Hero
        heading={service.hero.heading}
        paraOne={service.hero.paragraph}
        photo={service.hero.photo.src}
      />
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* Problem Section */}
      <ServiceProblems
        heading={service.problemSection.heading}
        headingSplit={service.problemSection.headingSplit}
        paragraphOne={service.problemSection.paragraphOne}
        paragraphTwo={service.problemSection.paragraphTwo}
        cards={service.problemSection.cards}
      />
      {/* How Section */}
      <HowServiceWorks
        heading={service.howSection.heading}
        paragraphOne={service.howSection.paragraphOne}
        paragraphTwo={service.howSection.paragraphTwo}
        bullets={service.howSection.bullets}
        closingParagraph={service.howSection.closingParagraph}
      />
      {/* Help Section */}
      <ServiceHelp
        openingParagraph={service.helpSection.openingParagraph}
        closingParagraph={service.helpSection.closingParagraph}
        bullets={service.helpSection.bullets}
      />
      {/* CTA Section */}
      <Cta
        heading={service.ctaSection.heading}
        paragraph={service.ctaSection.paragraph}
        classes={true}
      />
      {/* Faq Section */}
      <Faq
        questionCat={service.faqSection.category}
        heading={service.faqSection.heading}
        paragraph={service.faqSection.paragraph}
        showViewMoreLink={true}
        classes={true}
      />
    </main>
  );
}
