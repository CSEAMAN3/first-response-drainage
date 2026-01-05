// needs to feed in actual reviews

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdStarRate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <section className="py-8 px-8 max-w-300 mx-auto">
      <h2 className="text-center font-light mb-8">
        Our Customers say <span className="font-bold text-lg">Excellent</span>{" "}
        <span className="text-fr-yellow text-xl inline-block">
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />
          <MdStarRate className="inline-block mb-1" />{" "}
        </span>{" "}
        5 out of 5 based on 70 reviews{" "}
        <FcGoogle className="inline-block mb-1" size={32} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <div className="place-content-center">
          <h3 className="font-bold text-fr-mid-blue text-xl text-balance max-w-[40ch] mb-2">
            Tristed by Homeowners & Businesses Across East Anglia
          </h3>
          <p className="font-light text-balance max-w-[60ch] mb-4">
            We&#39;re proud to support customers across the east of England with
            fast, reliable drainage services. Here&#39;s what our customers say
            about their experience with our team.
          </p>
          <Link
            target="_blank"
            href="https://www.google.com/search?q=first+response+drainage&oq=first+response+drainage&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCTEwOTIzajBqN6gCCLACAfEFvvbssswiqDjxBb727LLMIqg4&sourceid=chrome&ie=UTF-8&zx=1767615264294&no_sw_cr=1&lqi=ChdmaXJzdCByZXNwb25zZSBkcmFpbmFnZUiqqvvUrbOAgAhaJRAAEAEQAhgAGAEYAiIXZmlyc3QgcmVzcG9uc2UgZHJhaW5hZ2WSARBkcmFpbmFnZV9zZXJ2aWNlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJreFdWcHFSblJrYlhBMldURktkR1JXU25kUmJHaFdXV3QwUWxSc1JSQUL6AQQIHRBG#lkt=LocalPoiReviews&rlimm=14279126173369784989&lrd=0x47d831309e4c57b9:0xc629a599c2b05a9d,3,,,,"
            className="font-bold text-fr-mid-blue hover:text-fr-dark-red transition-colors duration-300"
          >
            Review us on Google <FaArrowRight className="inline-block mb-0.5" />
          </Link>
        </div>
        <ReviewSlider />
      </div>
    </section>
  );
}
