import Cta from "@/components/Cta";
import DirectoryMain from "@/components/DirectoryMain";
import Scrollbar from "@/components/Scrollbar";
import ServicesArea from "@/components/ServicesArea";
import Link from "next/link";

export default function LocationHubPage() {
  const items = [
    { label: "No callout fees", iconKey: "badge" },
    { label: "Local engineers", iconKey: "building" },
    { label: "Fast response", iconKey: "clock" },
    { label: "Domestic & commercial", iconKey: "phone" },
  ] as const;

  return (
    <main>
      {/* Hero Section */}
      <div className="px-8 py-16 bg-fr-primary">
        <h1 className="font-bold text-2xl text-fr-white text-balance max-w-[30ch] sm:text-center sm:mx-auto mb-4">
          Drainage Services Throughout Norfolk, Suffolk & Cambridgeshire
        </h1>
        <p className="font-light text-fr-white text-balance sm:mx-auto sm:text-center sm:max-w-[80ch] mb-8">
          We provide professional drainage services across East Anglia,
          supporting homes and businesses throughout Norfolk, Suffolk and
          Cambridge. Use the links below to find drainage services in your local
          area.
        </p>
        <Link
          href="/contact"
          className="text-fr-white bg-fr-accent-one px-8 py-4 rounded-sm block mb-6 w-fit font-bold hover:bg-fr-accent-one-mid transition-colors duration-300 cursor-pointer sm:mx-auto"
        >
          Request a Callout
        </Link>
        <a
          href="tel+447961609836"
          className="text-fr-accent-two font-bold text-xl hover:text-fr-white w-fit transition-colors duration-150 sm:mx-auto block"
        >
          Call today on 07961 609836
        </a>
      </div>
      <Scrollbar items={items} className="bg-fr-primary-mid py-2" />
      {/* directory section */}
      <DirectoryMain />
      {/* service availabilty section */}
      <ServicesArea />
      {/* cta section */}
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={false}
      />
    </main>
  );
}
