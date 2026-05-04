import Link from "next/link";
import { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export const metadata: Metadata = {
  title: "Privacy Policy | 1st Response Drainage",
  description:
    "Learn how 1st Response Drainage collects, uses, and protects your personal information. Read our privacy policy to understand your rights and our responsibilities.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="text-fr-primary p-8 pt-8 pb-16 max-w-200 mx-auto">
        <h1 className="font-bold text-center text-xl text-balance mb-8">
          Privacy Policy
        </h1>
        <p className="font-light text-sm mb-8 text-fr-primary-mid">
          Last updated: 29th January 2026
        </p>
        <p className="font-light mb-8">
          This Privacy Policy explains how 1st Response Drainage
          &#40;&#34;we&#34;, &#34;us&#34;, or &#34;our&#34;&#41; collects, uses,
          and protects any personal information you provide when using our
          website, https://www.1stresponsedrainage.co.uk
          &#40;&#34;Website&#34;&#41;. We are committed to protecting your
          privacy and ensuring that any personal information you provide is
          handled in accordance with the UK General Data Protection Regulation
          (UK GDPR) and the Data Protection Act 2018.
        </p>
        {/* point 1 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          1. What Information We Collect
        </h2>
        <p className="font-light mb-2">
          We may collect the following personal information when you fill out a
          contact form on our Website:
        </p>
        <ul className="list-disc px-8 mb-2">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number</li>
          <li>Any other information you voluntarily provide in your message</li>
        </ul>
        <p className="font-light mb-4">
          We do not collect any sensitive personal information.
        </p>
        {/* point 2 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          2. Cookies and Similar Technologies
        </h2>
        <p className="font-light mb-2">
          Our Website uses essential cookies only to ensure it functions
          correctly and securely.
        </p>
        <p className="font-light mb-2">
          These cookies are used for purposes such as:
        </p>
        <ul className="list-disc px-8 mb-2">
          <li>Delivering website content efficiently</li>
          <li>Protecting the Website against malicious traffic</li>
          <li>Improving performance and reliability</li>
        </ul>
        <p className="font-light mb-2">
          Some essential cookies are set by trusted third-party services we use
          to deliver and protect the Website, such as Cloudinary &#40;image
          hosting&#41; and Cloudflare &#40;security and performance&#41;.
        </p>
        <p className="font-light mb-2">These cookies:</p>
        <ul className="list-disc px-8 mb-2">
          <li>Do not intentionally collect personal data</li>
          <li>Are not used for tracking, advertising, or analytics</li>
          <li>
            Cannot be disabled via our Website as they are necessary for it to
            function properly
          </li>
        </ul>
        <p className="font-light mb-4">
          As these cookies are strictly necessary, user consent is not required
          under the UK data protection law.
        </p>
        {/* point 3 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          3. How We Use Your Information
        </h2>
        <p className="font-light mb-2">
          We only use your personal information to:
        </p>
        <ul className="list-disc px-8 mb-2">
          <li>Respond to your enquiries</li>
          <li>Provide information about our services</li>
          <li>Follow up on customer support or contact requests</li>
        </ul>
        <p className="font-light mb-2">
          We do not use your information for marketing purposes unless you have
          explicitly consented to it.
        </p>
        {/* point 4 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          4. Legal Basis for Processing
        </h2>
        <p className="font-light mb-2">
          Under UK GDPR, we rely on the following lawful bases to collect and
          process your personal information:
        </p>
        <ul className="list-disc px-8 mb-4">
          <li className="text-pretty">
            Consent - You provide clear consent for us to process your personal
            data when you submit an enquiry.
          </li>
          <li className="text-pretty">
            Legitimate interests - Where processing is necessary for our
            business to respond to your query.
          </li>
        </ul>
        {/* point 5 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          5. How We Store Your Information
        </h2>
        <p className="font-light mb-2">
          We take reasonable steps to ensure your data is secure. Your
          information is:
        </p>
        <ul className="list-disc px-8 mb-4">
          <li className="text-pretty">
            Stored securely on password-protected email or contact management
            systems
          </li>
          <li className="text-pretty">
            Not shared with or sold to third parties
          </li>
          <li className="text-pretty">
            Retained only for as long as necessary to fulfil the purpose for
            which it was collected
          </li>
        </ul>
        {/* point 6 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          6. Sharing Your Information
        </h2>
        <p className="font-light mb-4">
          We do not share your personal data with third parties unless required
          to do so by law or to protect our legal rights.
        </p>
        {/* point 7 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          7. Your Data Protection Right
        </h2>
        <p className="font-light mb-2">
          Under UK data protection law, you have rights including:
        </p>
        <ul className="list-disc px-8 mb-2">
          <li className="text-pretty">
            The right to access - You can request copies of your personal data.
          </li>
          <li className="text-pretty">
            The right to rectification - You can ask us to correct any
            inaccurate or incomplete information.
          </li>
          <li className="text-pretty">
            The right to erasure - You can ask us to delete your personal data.
          </li>
          <li className="text-pretty">
            The right to object to processing - You can object to how we use
            your data.
          </li>
          <li className="text-pretty">
            The right to data portability - You can request a copy of your data
            in a reusable format.
          </li>
        </ul>
        <p className="font-light mb-4">
          To exercise any of these rights, please contact us using the details
          at the end of this policy.
        </p>
        {/* point 8 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          8. Links to Other Websites
        </h2>
        <p className="font-light mb-4">
          Our Website does not contain links to other websites. However, if this
          changes in the future, we are not responsible for the privacy
          practices of those sites and recommend reading their individual
          privacy policies.
        </p>
        {/* point 9 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">
          9. Changes to This Policy
        </h2>
        <p className="font-light mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date. Please review
          this policy periodically to stay informed.
        </p>
        {/* point 10 */}
        <h2 className="font-bold mb-2 text-fr-accent-one">10. Contact Us</h2>
        <p className="font-light mb-2">
          If you have any questions about this Privacy Policy or wish to
          exercise your data protection rights, please contact us:
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
            href="tel:++447537149523"
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
        <p>
          If you are not satisfied with our response, you have the right to
          lodge a complaint with the Information Commissioner&#39;s Office
          &#40;ICO&#41; at{" "}
          <a
            href="https://www.ico.org.uk."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300"
          >
            www.ico.org.uk.
          </a>
        </p>
      </div>
    </main>
  );
}
