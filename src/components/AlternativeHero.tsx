import Link from "next/link";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function AlternativeHero() {
  return (
    <div className="bg-fr-primary relative z-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-300 mx-auto gap-16 px-8 pt-16 pb-8">
        <div className="lg:flex-1 z-10">
          <h1 className="font-bold text-2xl text-fr-white text-balance max-w-[40ch] mb-2 text-center mx-auto lg:mx-0 lg:text-start lg:max-w-[80ch]">
            Rapid Response Drainage Services Across Norfolk, Suffolk &
            Cambridgeshire
          </h1>
          <p className="font-bold text-fr-accent-two mb-4 text-center lg:text-start">
            <MdStarRate className="inline-block mb-1" />
            <MdStarRate className="inline-block mb-1" />
            <MdStarRate className="inline-block mb-1" />
            <MdStarRate className="inline-block mb-1" />
            <MdStarRate className="inline-block mb-1" />
            <span className="text-fr-white ml-2 text-sm">
              5.0 Google Rating &#183; 85 Reviews
            </span>
          </p>
          <p className="text-fr-white font-light mb-8 max-w-[50ch] text-balance text-center mx-auto lg:text-start lg:mx-0">
            Blocked drain? Need a pre-purchase CCTV drainage survey? Our local
            drainage engineers have you covered 24/7.
          </p>
          {/* <Link
            href={"#coverage"}
            className="block text-center font-bold text-fr-accent-two hover:text-fr-white mb-8 lg:text-start transition-colors duration-300"
          >
            CHECK COVERAGE IN YOUR AREA{" "}
            <FaArrowRight className="inline-block mb-1" />
          </Link> */}
          <div className="flex gap-8 place-content-center mb-8">
            <Link
              href="/contact"
              className="text-sm sm:text-base text-fr-white bg-fr-accent-one px-8 py-4 rounded-sm mb-6 font-bold hover:bg-fr-accent-one-mid transition-colors duration-300 cursor-pointer w-full max-w-60 text-center grid place-content-center"
            >
              Request Callout
            </Link>
            <a
              href="tel:+447961609836"
              aria-label="Call First Response Drainage on 07961609836"
              className="text-fr-white border-2 border-fr-accent-two px-8 py-4 rounded-sm mb-6 font-bold hover:bg-fr-primary-dark transition-colors duration-300 cursor-pointer w-full text-center max-w-60 text-sm sm:text-base grid place-content-center"
            >
              Call Now
            </a>
          </div>
          <Link
            href={"#coverage"}
            className="block text-center font-bold text-fr-white hover:text-fr-accent-two lg:text-start transition-colors duration-300 lg:mb-8"
          >
            CHECK COVERAGE IN YOUR AREA{" "}
            <FaArrowRight className="inline-block mb-1" />
          </Link>
        </div>
        <div className="w-full lg:flex-1 place-content-center">
          <Image
            // src="/images/monster-group-vibrant.png"
            src="/images/bright-monster-group.png"
            alt="update this"
            width={867}
            height={867}
            className="w-full max-w-120 mx-auto z-10 pl-6"
            priority
          />
        </div>
      </div>
      {/* pattern div  */}
      <div className="w-[200vw] h-[24vw] bg-fr-primary-dark/30 rounded-tl-[98%] absolute -z-20 bottom-0 -left-16 lg:-bottom-16 xl:-bottom-28" />
      <div className="w-[200%] h-[36vw] bg-fr-primary-dark/20 rounded-tr-[99%] absolute -z-10 max-h-70 rotate-8 -bottom-28 md:-bottom-42 lg:-bottom-68 xl:-bottom-90 -left-12 " />
    </div>
  );
}
