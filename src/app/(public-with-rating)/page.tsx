import AlternativeHero from "@/components/AlternativeHero";
import Cta from "../../components/Cta";
import Faq from "../../components/Faq";
// import Hero from "../components/Hero";
import HomeCoverage from "../../components/HomeCoverage";
import Reviews from "../../components/Reviews";
import Scrollbar from "../../components/Scrollbar";
import WhyUseUs from "../../components/WhyUseUs";
import ServicesSlider from "@/components/ServicesSlider";
import StructuredData from "@/components/StructuredData";
import { buildFaqSchema } from "@/lib/schema/faqSchema";
import { faQuestions } from "@/lib/faQuestion";
import { getGoogleReviews } from "@/lib/googleReviews";

export default async function Home() {
  const reviewsData = await getGoogleReviews();

  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  const homeFaqs = faQuestions
    .filter((q) => q.category === "main")
    .map(({ question, answer }) => ({ question, answer }));

  return (
    <main>
      <StructuredData
        id={`home-faq`}
        data={buildFaqSchema({
          pagePath: "/",
          pageTitle: "Drainage Services in East Anglia | 1st Response Drainage",
          faqs: homeFaqs,
        })}
      />
      {/* <Hero
        heading="Rapid Response Drainage Services Across Norfolk, Suffolk & Cambridgeshire"
        paraOne="Blocked drain? Need a pre-purchase CCTV drainage survey? Our local drainage engineers have you covered 24/7."
        photo="test.jpg"
      /> */}
      <AlternativeHero reviewsData={reviewsData} />
      <Scrollbar items={items} className="bg-fr-primary-dark py-2" />
      <Reviews reviewsData={reviewsData} />
      <ServicesSlider
        headingOpening="Keeping Your Drains"
        heading="Clear, Safe & Working"
        paragraph="Our local drainage engineers deliver reliable drainage solutions, from clearing blockages to full inspections."
      />
      <WhyUseUs />
      <div id="coverage">
        <HomeCoverage classes={true} />
      </div>
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it&#39;s a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={true}
      />
      <Faq
        questionCat="main"
        heading="Your"
        paragraph="We&#39;ve answered some of the most common questions we receive about drainage issues, surveys and repairs to help you understand what to expect before you book."
        showViewMoreLink={true}
        classes={true}
      />
    </main>
  );
}
