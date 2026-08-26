import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-fr-primary">
      <div className="px-8 py-8 max-w-300 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* company info */}
          <div className="grid grid-cols-1 gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/horizontal-logo-white.svg"
              alt="1st Response Drainage logo"
              width={1000}
              height={355}
              className="w-40 md:w-44 h-auto"
            />
            <a
              href="tel:+447537149523"
              className="text-fr-white font-bold hover:text-fr-accent-two w-fit transition-colors duration-150 tracking-tight"
            >
              <span className="tracking-normal">24/7</span> callout on
              07537149523
            </a>
            <a
              href="mailto:info@1stresponsedrainage.co.uk"
              className="text-fr-white font-bold hover:text-fr-accent-two w-fit transition-colors duration-150 tracking-tight"
            >
              info@1stresponsedrainage.co.uk
            </a>
            <Link
              href="/contact"
              className="font-bold bg-fr-accent-one w-fit px-8 py-4 text-fr-white rounded-sm hover:bg-fr-accent-one-mid transition-colors duration-150 tracking-tight"
            >
              Contact Us Online
            </Link>
            <div>
              <h2 className="font-bold text-fr-accent-two-light mb-2 tracking-tight">
                Visit Us On Social
              </h2>
              <Link
                href="https://www.facebook.com/p/1st-response-drainage-61575122397737/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="1st Response Drainage on Facebook"
                className="block w-fit"
              >
                <FaFacebook
                  className="text-fr-white hover:text-fr-accent-two transition-colors duration-150"
                  size="32"
                />
              </Link>
            </div>
          </div>
          {/* navigation */}
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-fr-accent-two-light font-bold tracking-tight">
              Navigation
            </h2>
            <Link
              href="/"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Home
            </Link>
            <Link
              href="/drainage-services"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Drainage Services
            </Link>
            <Link
              href="/locations"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Locations
            </Link>
            <Link
              href="/faq"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Blog
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              T&Cs
            </Link>
            <Link
              href="/contact"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Contact
            </Link>
          </div>
          {/* Services */}
          <div className="grid grid-cols-1 gap-4">
            <h2 className="font-bold text-fr-accent-two-light tracking-tight">
              Drainage Services
            </h2>
            <Link
              href="/drainage-services/blocked-drains"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Blocked Drains
            </Link>
            <Link
              href="/drainage-services/cctv-drainage-surveys"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              CCTV Drainage Surveys
            </Link>
            <Link
              href="/drainage-services/high-pressure-water-jetting"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              High Pressure Water Jetting
            </Link>
            <Link
              href="/drainage-services/patch-liners-and-no-dig-repairs"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Patch Liners / No-Dig Repairs
            </Link>
            <Link
              href="/drainage-services/root-intrusion-removal"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Root Intrusion Removal
            </Link>
            <Link
              href="/drainage-services/commercial-drainage"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Commercial Drainage
            </Link>
            <Link
              href="/drainage-services/sonde-and-tracing"
              className="text-fr-white hover:text-fr-accent-two transition-colors duration-150 w-fit tracking-tight"
            >
              Sonde & Tracing
            </Link>
          </div>
        </div>
        {/* small print */}
        <div className="grid grid-cols-1 gap-y-4 mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:mx-auto max-w-200 w-fit">
            <p className="font-light text-sm text-fr-white">
              &#169; 1st Response Drainage. All Rights Reserved
            </p>
            <Link
              href="/website-terms-and-conditions"
              className="font-light text-sm text-fr-white hover:text-fr-accent-two transition-colors duration-150 tracking-tight"
            >
              Website Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="font-light text-sm text-fr-white hover:text-fr-accent-two transition-colors duration-150 tracking-tight"
            >
              Privacy Policy
            </Link>
          </div>
          <a
            href="https://www.betterknownas.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website designed and built by Better Known As"
            className="font-light text-sm text-fr-white hover:text-fr-accent-two sm:mx-auto tracking-tight"
          >
            Website designed, built and maintained with{" "}
            <FaHeart aria-hidden="true" className="inline-block" /> by Better
            Known As
          </a>
        </div>
      </div>
    </footer>
  );
}
