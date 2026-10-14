import { websitetandcs } from "@/lib/websiteTandCs";
import Link from "next/link";
import { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export const metadata: Metadata = {
  title: "Website Terms & Conditions | 1st Response Drainage",
  description:
    "Read the terms and conditions for using the 1st Response Drainage website. Learn about user responsibilities, content use, and legal disclaimers.",
  alternates: { canonical: `${SITE_URL}/website-terms-and-conditions` },
};

export default function WebsiteTermsAndConditionsPage() {
  return (
    <main>
      <div className="max-w-200 text-fr-primary px-8 pt-8 pb-16 mx-auto">
        <h1 className="font-bold text-center text-xl text-balance mb-8">
          Website Terms and Conditions
        </h1>
        <p className="font-light text-sm mb-8 text-fr-primary-mid">
          Last updated: 14 October 2026
        </p>
        <p className="font-light mb-8">
          These Website Terms and Conditions explain the rules and conditions
          associated with using the 1st Response Drainage website. Please read
          them carefully when accessing or using our website.
        </p>
        <div className="grid grid-cols-1 gap-y-8 mb-8">
          {websitetandcs.map((t) => {
            return (
              <div key={t.heading}>
                <h2 className="font-bold mb-2 text-fr-accent-one">
                  {t.heading}
                </h2>
                <p className={`font-light ${t.paragraphTwo ? "mb-2" : ""}`}>
                  {t.paragraphOne}
                </p>
                {t.paragraphTwo && (
                  <p className="font-light">{t.paragraphTwo}</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            Related Policies
          </h2>

          <p className="font-light mb-4">
            For further information about how we operate our website and provide
            our services, please refer to the following:
          </p>

          <ul className="font-light list-disc pl-6 grid gap-2">
            <li>
              <Link
                href="/privacy-policy"
                className="underline hover:text-fr-accent-one transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/cookie-policy"
                className="underline hover:text-fr-accent-one transition"
              >
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-and-conditions"
                className="underline hover:text-fr-accent-one transition"
              >
                Drainage Service Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2 text-fr-accent-one">Contact Us</h2>
          <p className="mb-4 font-light">
            If you have questions about these Terms and Conditions, please
            contact us:
          </p>
          <div className="text-sm">
            <p className="mb-2 font-bold">1st Response Drainage</p>

            <p className="mb-2 font-light">
              18 Riverside Way
              <br />
              Brandon
              <br />
              Suffolk
              <br />
              IP27 0AN
              <br />
              United Kingdom
            </p>
            {/* <p className="mb-2 font-light">1st Response Drainage</p> */}
            <p className="mb-2 font-light">
              Email:{" "}
              <a
                href="mailto:info@1stresponsedrainage.co.uk"
                className="hover:underline transition duration-300"
              >
                info@1stresponsedrainage.co.uk
              </a>
            </p>
            <p className="mb-2 font-light">
              Phone:{" "}
              <a
                href="tel:07537149523"
                className="hover:underline transition duration-300"
              >
                07537149523
              </a>
            </p>
            <p className="mb-2 font-light">
              Website:{" "}
              <Link
                href="/contact"
                className="hover:underline transition duration-300"
              >
                https://www.1stresponsedrainage.co.uk/contact
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
