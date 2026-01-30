import { websitetandcs } from "@/lib/websiteTandCs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Terms & Conditions | 1st Response Drainage",
  description:
    "Read the terms and conditions for using the 1st Response Drainage website. Learn about user responsibilities, content use, and legal disclaimers.",
  alternates: { canonical: "/website-terms-and-conditions" },
};

export default function WebsiteTermsAndConditionsPage() {
  return (
    <main>
      <div className="max-w-200 text-fr-primary px-8 pt-8 pb-16 mx-auto">
        <h1 className="font-bold text-center text-xl text-balance mb-8">
          Website Terms and Conditions
        </h1>
        <p className="font-light text-sm mb-8 text-fr-primary-mid">
          Last updated: 29th January 2026
        </p>
        <p className="font-light mb-8">
          Welcome to the website of 1st Response Drainage, located at
          https://www.1stresponsedrainage.co.uk &#40;&#34;Website&#34;&#41;. By
          accessing or using this Website, you agree to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms,
          please do not use our Website.
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
        <div>
          <h2 className="font-bold mb-2 text-fr-accent-one">Contact Us</h2>
          <p className="mb-2 font-light">
            If you have questions about these Terms and Conditions, please
            contact us:
          </p>
          <p className="mb-2 font-light">1st Response Drainage</p>
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
              href="tel:+447961609836"
              className="hover:underline transition duration-300"
            >
              07961 609836
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
    </main>
  );
}
