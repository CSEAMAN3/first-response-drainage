import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="px-8 pt-8 pb-16 max-w-300 mx-auto">
      <h3 className="text-balance font-bold text-xl text-fr-light-purple text-center md:text-2xl mb-2">
        Keeping your drains clear, safe and working properly
      </h3>
      <p className="text-center max-w-[86ch] text-pretty mx-auto mb-8">
        Our local engineers help homeowners and businesses across Norfolk,
        Suffolk & Cambridgeshire with everything from blocked drains to full
        drainage surveys, delivering a quick, dependable service every time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 sm:gap-x-8 lg:grid-cols-3">
        {/* <div className="flex sm:gap-x-8"> */}
        <ServiceCard
          photo="test.jpg"
          heading="Blocked Drains"
          paraOne="Blocked drains cleared fast. From toilets, sinks, baths and showers, to full system blockages."
          price="From £95 +VAT"
          terms="Terms and conditions apply"
          href="/blocked-drains"
        />
        <ServiceCard
          photo="test.jpg"
          heading="CCTV Drainage Surveys"
          paraOne="Pre-purchase, diagnostic and insurance approved CCTV drainage surveys."
          price="From £190 +VAT"
          terms="Terms and conditions apply"
          href="/cctv-drainage-surveys"
        />
        <ServiceCard
          photo="test.jpg"
          heading="High Pressure Water Jetting"
          paraOne="High pressure water jetting clears stubborn blockages and build-ups quickly and safely."
          price="From £95 +VAT"
          terms="Terms and conditions apply"
          href="/high-pressure-water-jetting"
        />
        <ServiceCard
          photo="test.jpg"
          heading="Patch Liners / No-Dig Repairs"
          paraOne="Fix cracked or broken pipes without the need for excavation."
          price="From £275 +VAT"
          terms="Terms and conditions apply"
          href="/no-dig-repairs"
        />
        <ServiceCard
          photo="test.jpg"
          heading="Root Intrusion Removal"
          paraOne="Our drainage engineers use specialist cutting tools to remove roots that are invading drains."
          price="Prices Vary"
          terms="Custom Pricing Applies"
          href="/root-intrusion-removal"
        />
        <ServiceCard
          photo="test.jpg"
          heading="Commercial Drainage"
          paraOne="Drainage services for commercial properties: restaurants, landlords, construction sites, facilities and more. "
          price="From £115 +VAT"
          terms="Terms and conditions apply"
          href="/commercial-drainage"
        />
      </div>
    </section>
  );
}
