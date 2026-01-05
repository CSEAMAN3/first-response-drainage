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
        heading="Rapid Response Drainage Services Across Norfolk, Cambridge & Suffolk"
        paraOne="Blocked drain? Need a pre-purchase CCTV drainage survey? Our local drainage engineers have you covered 24/7."
        photo="test.jpg"
      />
      <Scrollbar items={items} className="bg-fr-light-blue py-2" />
      <Reviews />
      <Services />
      <WhyUseUs />
      <HomeCoverage />
    </main>
  );
}
