import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export const metadata: Metadata = {
  title: "Privacy Policy | 1st Response Drainage",
  description:
    "Learn how 1st Response Drainage collects, uses, and protects your personal information. Read our privacy policy to understand your rights and our responsibilities.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const headingClass = "font-bold mb-2 text-fr-accent-one";
const paragraphClass = "font-light mb-4";
const listClass = "list-disc px-8 mb-4 space-y-1 font-light";
const linkClass = "underline hover:text-fr-accent-one transition duration-300";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="text-fr-primary p-8 pt-8 pb-16 max-w-200 mx-auto">
        <h1 className="font-bold text-center text-xl text-balance mb-8">
          Privacy Policy
        </h1>
        <p className="font-light text-sm mb-8 text-fr-primary-mid">
          Last updated: 14 October 2026
        </p>

        <p className={paragraphClass}>
          This Privacy Policy explains how 1st Response Drainage collects, uses,
          stores and protects personal information when you use our website,
          contact us or enquire about our drainage services. We handle personal
          information in accordance with applicable UK data protection law,
          including the UK General Data Protection Regulation (UK GDPR) and the
          Data Protection Act 2018.
        </p>
        <h2 className={headingClass}>1. Who We Are</h2>
        <p className={paragraphClass}>
          1st Response Drainage is the trading name of Mr Andy Joseph Broadley,
          a sole trader providing drainage services across Norfolk, Suffolk and
          Cambridgeshire. Mr Andy Joseph Broadley is the data controller
          responsible for deciding how and why personal information is processed
          in connection with our website and services.
        </p>
        <p className={paragraphClass}>
          Our business correspondence address is 18 Riverside Way, Brandon, IP27
          0AN, United Kingdom. Further contact details are provided at the end
          of this policy.
        </p>
        <h2 className={headingClass}>2. Information We Collect</h2>
        <p className="font-light mb-2">
          Depending on how you contact or interact with us, we may collect:
        </p>
        <ul className={listClass}>
          <li>Your name, email address and telephone number.</li>
          <li>
            Your property or service address, where needed to discuss or carry
            out drainage work.
          </li>
          <li>
            Details of your enquiry, the drainage issue and any other
            information you choose to provide.
          </li>
          <li>
            Relevant appointment, job and customer correspondence records.
          </li>
          <li>
            Website usage information, such as pages visited, interactions with
            contact forms and telephone links, and information about how you
            reached our website, where permitted by your cookie preferences.
          </li>
        </ul>
        <p className={paragraphClass}>
          Please avoid including unnecessary sensitive personal information in
          an enquiry. If such information is provided, we will handle it in
          accordance with applicable data protection requirements.
        </p>
        <h2 className={headingClass}>3. How We Use Your Information</h2>
        <p className="font-light mb-2">We use information to:</p>
        <ul className={listClass}>
          <li>
            Respond to enquiries and provide information about our services.
          </li>
          <li>
            Arrange visits, provide quotations and carry out drainage work.
          </li>
          <li>Maintain relevant customer correspondence and job records.</li>
          <li>Meet legal, tax and accounting obligations.</li>
          <li>
            Understand website performance and measure enquiries and advertising
            effectiveness, where permitted.
          </li>
        </ul>
        <p className={paragraphClass}>
          We do not sell customer contact information or use contact form
          details for unsolicited marketing campaigns.
        </p>
        <h2 className={headingClass}>4. Contact Forms and Email Enquiries</h2>
        <p className={paragraphClass}>
          When you submit our website contact form, the details you provide are
          processed through Resend, an email delivery provider, and delivered to
          our business email account. Contact form submissions are not stored in
          a dedicated website enquiry database. Copies may remain in email
          systems and, where work is arranged, relevant details may be recorded
          on customer job sheets.
        </p>
        <h2 className={headingClass}>5. Google Analytics and Google Ads</h2>
        <p className={paragraphClass}>
          We use Google Analytics 4 to understand how visitors use our website
          and to measure interactions, including successful contact form
          submissions and clicks on telephone links. We also use Google Ads to
          measure advertising performance and enquiries generated through our
          website.
        </p>
        <p className={paragraphClass}>
          These services may collect information about your device, browser,
          website activity and interactions through cookies or similar
          technologies. Non-essential analytics and advertising storage is
          subject to your consent choices. We do not intentionally include
          names, email addresses, telephone numbers or the contents of enquiry
          messages in the analytics events we send to Google.
        </p>
        <p className={paragraphClass}>
          We do not currently use website visitor remarketing audiences. If our
          advertising practices change, we will review this policy and our
          consent arrangements.
        </p>
        <h2 className={headingClass}>6. Cookies and Your Choices</h2>
        <p className={paragraphClass}>
          Our website uses essential cookies and, if you consent, optional
          statistics and marketing cookies or similar technologies. We use
          Cookiebot by Usercentrics to present cookie choices and manage
          consent. You can accept, reject or customise optional cookies, and
          change or withdraw your consent using the cookie settings control
          available on our website.
        </p>
        <p className={paragraphClass}>
          For more information about the technologies used, their purposes and
          retention periods, please read our{" "}
          <Link href="/cookie-policy" className={linkClass}>
            Cookie Policy
          </Link>
          .
        </p>
        <h2 className={headingClass}>7. Legal Bases for Processing</h2>
        <p className="font-light mb-2">
          Depending on the circumstances, we rely on the following lawful bases
          under UK GDPR:
        </p>
        <ul className={listClass}>
          <li>
            <strong>Legitimate interests:</strong> responding to enquiries,
            communicating with customers and managing our business, where those
            interests are not overridden by your rights.
          </li>
          <li>
            <strong>Contract:</strong> taking steps you request before entering
            into a contract, and providing agreed services.
          </li>
          <li>
            <strong>Legal obligation:</strong> retaining and processing
            information where required by law, including applicable financial
            record-keeping requirements.
          </li>
          <li>
            <strong>Consent:</strong> processing personal information through
            optional analytics and advertising technologies where consent is
            required. You can withdraw this consent through our cookie settings.
          </li>
        </ul>
        <h2 className={headingClass}>8. How Long We Keep Information</h2>
        <p className={paragraphClass}>
          We keep personal information only for as long as reasonably necessary
          for the purpose for which it was collected, or where a longer period
          is required by law.
        </p>
        <ul className={listClass}>
          <li>
            <strong>General enquiries that do not result in work:</strong>{" "}
            normally up to 12 months after the last relevant contact.
          </li>
          <li>
            <strong>Customer correspondence and job sheets:</strong> normally up
            to six years after the work is completed, to maintain business
            records and address potential disputes or legal claims.
          </li>
          <li>
            <strong>Financial records:</strong> retained for the period required
            by applicable tax and accounting rules, which may differ from the
            periods above.
          </li>
          <li>
            <strong>Analytics and consent records:</strong> retained in
            accordance with the applicable settings and retention arrangements
            of Google Analytics and Cookiebot, and reviewed as necessary.
          </li>
        </ul>
        <p className={paragraphClass}>
          We may retain relevant information for longer where necessary to
          comply with a legal obligation or establish, exercise or defend a
          legal claim. Records are reviewed and securely deleted or disposed of
          when no longer needed.
        </p>
        <h2 className={headingClass}>9. Security and Service Providers</h2>
        <p className={paragraphClass}>
          We take reasonable steps to protect personal information against
          unauthorised access, loss or misuse. Information may be held in
          business email systems and customer job records, and accessed only
          where needed for legitimate business purposes.
        </p>
        <p className={paragraphClass}>
          We use third-party services to operate our website and support our
          business, including Vercel for website hosting, Resend for contact
          form email delivery, Google for analytics and advertising measurement,
          and Cookiebot by Usercentrics for cookie consent management. Our
          business email provider also processes correspondence. These providers
          may process information on our behalf or, where applicable, as
          independent controllers. We may disclose information where required by
          law.
        </p>

        <h2 className={headingClass}>10. International Data Transfers</h2>
        <p className={paragraphClass}>
          Some of our service providers may process information outside the
          United Kingdom. Where UK data protection law requires safeguards for
          an international transfer, we seek to use appropriate arrangements,
          such as applicable adequacy regulations or approved contractual
          safeguards.
        </p>

        <h2 className={headingClass}>11. Your Data Protection Rights</h2>
        <p className={paragraphClass}>
          Depending on the circumstances, you have rights to request access to
          your personal information, ask for inaccurate information to be
          corrected, request erasure, restrict processing, object to certain
          processing and request data portability. Where processing is based on
          consent, you may withdraw that consent at any time. Some rights are
          subject to legal conditions and exceptions.
        </p>
        <p className={paragraphClass}>
          To exercise your rights, contact us using the details below. You also
          have the right to complain to the Information Commissioner&apos;s
          Office (ICO) if you are unhappy with how we handle your information.
        </p>
        <h2 className={headingClass}>12. Links to Other Websites</h2>
        <p className={paragraphClass}>
          Our website may link to external websites. We are not responsible for
          their privacy practices and recommend reviewing their own privacy
          notices when you visit them.
        </p>

        <h2 className={headingClass}>13. Changes to This Policy</h2>
        <p className={paragraphClass}>
          We may update this Privacy Policy to reflect changes in our services,
          technology or legal obligations. The latest version will appear on
          this page with an updated revision date.
        </p>

        <h2 className={headingClass}>14. Contact Us</h2>
        <p className="font-light mb-2">
          If you have questions about this policy or wish to exercise your data
          protection rights, please contact:
        </p>
        <address className="not-italic font-light mb-4">
          <strong>Mr Andy Joseph Broadley</strong>
          <br />
          Trading as 1st Response Drainage
          <br />
          18 Riverside Way
          <br />
          Brandon
          <br />
          IP27 0AN
          <br />
          United Kingdom
        </address>
        <p className="font-light mb-2">
          Email:{" "}
          <a href="mailto:info@1stresponsedrainage.co.uk" className={linkClass}>
            info@1stresponsedrainage.co.uk
          </a>
        </p>
        <p className="font-light mb-2">
          Phone:{" "}
          <a href="tel:+447537149523" className={linkClass}>
            07537 149523
          </a>
        </p>
        <p className="font-light mb-4">
          Website:{" "}
          <Link href="/contact" className={linkClass}>
            Contact Us
          </Link>
        </p>
        <p className="font-light">
          If you are dissatisfied with our response, you can contact the{" "}
          <a
            href="https://ico.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </div>
    </main>
  );
}
