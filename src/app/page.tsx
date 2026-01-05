import Hero from "../components/Hero";
import Scrollbar from "../components/Scrollbar";

export default function Home() {
  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  return (
    <main className="min-h-screen">
      <Hero
        heading="Rapid Response Drainage Services Across Norfolk, Cambridge & Suffolk"
        paraOne="Blocked drain? Need a pre-purchase CCTV drainage survey? Our local drainage engineers have you covered 24/7."
        photo="test.jpg"
      />
      <Scrollbar items={items} className="bg-fr-light-blue py-2" />
      <div></div>
    </main>
  );
}
