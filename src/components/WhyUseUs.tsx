import { reasons } from "../lib/reasons";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import CloudinaryOptImage from "./CloudinaryOptImage";
import { firstResponseImages as Images } from "@/lib/firstResponseImages";

export default function WhyUseUs() {
  return (
    <section className="bg-fr-primary">
      <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
        <CloudinaryOptImage
          {...Images.wideRoadsideDrainageMonsters}
          alt="The drainage monster crew unblocking a blocked drain in the road"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:py-24 max-w-280 mx-auto">
        <div className="text-fr-white mb-8">
          <h3 className="font-bold text-3xl text-balance max-w-[24ch] mb-4 tracking-tight">
            <span className="block text-xl">Reliable Help</span>When You Need It
            Most!
          </h3>
          <p className="font-light text-pretty max-w-[48ch] text-lg">
            We take pride in supporting homes and businesses throughout East
            Anglia, ensuring fast response times and dependable results. Our
            engineers offer honest guidance, rapid assistance and solutions
            designed to last.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-y-4">
          {reasons.map((reason) => {
            return (
              <li
                key={reason.reason}
                className="text-fr-white flex items-center gap-2"
              >
                <IoMdCheckmarkCircleOutline
                  className="text-fr-accent-two shrink-0"
                  size={24}
                />
                {reason.reason}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
