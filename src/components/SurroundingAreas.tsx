import { FaLocationDot } from "react-icons/fa6";

interface SurroundingAreasProps {
  location: string;
  nearByLocations: string[];
}

export default function SurroundingAreas({
  location,
  nearByLocations,
}: SurroundingAreasProps) {
  return (
    <section className="px-8 pb-8 md:pb-16">
      <h3 className="font-bold text-xl md:text-2xl text-balance text-center text-fr-primary mb-2">
        We Also Cover Surrounding Areas Near {location}
      </h3>
      <p className="font-light text-center text-balance max-w-[72ch] mx-auto mb-8">
        here is some placeholder text just to fill this space whilst I am
        designing. Soon I will return and write the real paragraph that goes
        here. Don&#39;t have a good day, have a great day.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 w-fit mx-auto gap-y-2 md:gap-y-4 lg:grid-cols-3 gap-x-4 mb-8">
        {nearByLocations.map((location, id) => {
          return (
            <li key={id} className="flex items-center">
              <FaLocationDot className="inline-block mr-2 text-fr-primary" />
              Drainage Services {location}
            </li>
          );
        })}
      </ul>
      <p className="font-light text-center text-balance max-w-[72ch] mx-auto">
        here is some placeholder text just to fill this space whilst I am
        designing. Soon I will return and write the real paragraph that goes
        here. Don&#39;t have a good day, have a great day.
      </p>
    </section>
  );
}
