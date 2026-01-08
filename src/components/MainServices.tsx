import MainServiceCard from "./MainServiceCard";

export default function MainServices() {
  return (
    <section className="px-8 py-8 sm:py-16">
      <h2 className="font-bold text-fr-primary text-xl sm:text-2xl text-center mb-2">
        1st Response Drainage Services
      </h2>
      <p className="font-light text-center text-balance max-w-[60ch] mx-auto mb-8">
        Explore our full range of professional drainage services, designed to
        resolve problems quickly and keep drainage systems working reliably.
      </p>
      <div className="px-8 sm:px-0 grid grid-cols-1 mx-1-80 sm:grid-cols-2 sm:max-w-150 lg:grid-cols-3 lg:max-w-200 gap-x-4 gap-y-8 max-w-300 mx-auto">
        <MainServiceCard
          graphic="blocked-drains"
          heading="Blocked"
          headingSplit="Drains"
          paragraph="From £95 +VAT"
          paragraphTwo="Terms & Conditions apply"
          link="blocked-drains"
        />
        <MainServiceCard
          graphic="cctv-drainage-surveys"
          heading="CCTV"
          headingSplit="Drainage Surveys"
          paragraph="From £190 +VAT"
          paragraphTwo="Terms & Conditions apply"
          link="cctv-drainage-surveys"
        />
        <MainServiceCard
          graphic="high-pressure-water-jetting"
          heading="High Pressure"
          headingSplit="Water Jetting"
          paragraph="From £95 +VAT"
          paragraphTwo="Terms & Conditions apply"
          link="high-pressure-water-jetting"
        />
        <MainServiceCard
          graphic="patch-liners"
          heading="Patch Liners /"
          headingSplit="No-Dig Repairs"
          paragraph="From £275 +VAT"
          paragraphTwo="Terms & Conditions apply"
          link="patch-liners-and-no-dig-repairs"
        />
        <MainServiceCard
          graphic="commercial-drainage"
          heading="Commercial"
          headingSplit="Drainage"
          paragraph="From £115 +VAT"
          paragraphTwo="Terms & Conditions apply"
          link="commercial-drainage"
        />
        <MainServiceCard
          graphic="root-intrusion-removal"
          heading="Root Intrusion"
          headingSplit="Removal"
          paragraph="Custom Pricing"
          paragraphTwo="Terms & Conditions apply"
          link="root-intrusion-removal"
        />
      </div>
    </section>
  );
}
