import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import HomeCoverage from "../components/HomeCoverage";
import Reviews from "../components/Reviews";
import Scrollbar from "../components/Scrollbar";
import Services from "../components/Services";
import WhyUseUs from "../components/WhyUseUs";

export default function Home() {
  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  return (
    <main>
      <Hero
        heading="Rapid Response Drainage Services Across Norfolk, Suffolk & Cambridgeshire"
        paraOne="Blocked drain? Need a pre-purchase CCTV drainage survey? Our local drainage engineers have you covered 24/7."
        photo="test.jpg"
      />
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      <Reviews />
      <Services />
      <WhyUseUs />
      <HomeCoverage />
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it&#39;s a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={true}
      />
      <Faq
        questionCat="main"
        heading="Your"
        paragraph="We&#39;ve answered some of the most common questions we receive about drainage issues, surveys and repairs to help you understand what to expect before you book."
      />
    </main>
  );
}
