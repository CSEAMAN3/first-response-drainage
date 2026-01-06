import { reasons } from "../lib/reasons";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function WhyUseUs() {
  return (
    <section className="bg-fr-light-purple">
      <div className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:py-24 max-w-300 mx-auto">
        <div className="text-fr-white mb-8">
          <h3 className="font-bold text-3xl text-balance max-w-[22ch] mb-4">
            RELIABLE HELP WHEN YOU NEED IT MOST!
          </h3>
          <p className="font-light text-balance">
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
                  className="text-fr-yellow"
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
