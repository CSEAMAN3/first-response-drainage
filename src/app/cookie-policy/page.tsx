import type { Metadata } from "next";
import CookieDeclaration from "@/components/CookieDeclaration";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.1stresponsedrainage.co.uk";

export const metadata: Metadata = {
  title: "Cookie Policy | 1st Response Drainage",
  description:
    "Learn how 1st Response Drainage uses cookies and similar technologies, including how to manage your cookie preferences.",
  alternates: {
    canonical: `${SITE_URL}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <div className="text-fr-primary p-8 pt-8 pb-16 max-w-200 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-fr-primary">
          Cookie Policy
        </h1>

        <p className="font-light mb-4">Last updated: 14 October 2026</p>

        <p className="font-light mb-8">
          This Cookie Policy explains how 1st Response Drainage uses cookies and
          similar technologies on our website, what information they collect and
          how you can manage your preferences.
        </p>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            What Are Cookies?
          </h2>

          <p className="font-light mb-2">
            Cookies are small text files that websites can store on your device
            when you visit them. They help websites function, remember
            preferences and understand how visitors interact with their content.
          </p>

          <p className="font-light mb-2">
            Some cookies are necessary for a website to operate correctly.
            Others are used for analytics, advertising and improving the visitor
            experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            How We Use Cookies
          </h2>

          <p className="font-light mb-4">
            Our website uses the following categories of cookies and similar
            technologies:
          </p>

          <h3 className="font-bold mb-2">Necessary Cookies</h3>

          <p className="font-light mb-4">
            These cookies support essential website functions, including
            remembering your cookie consent preferences. They do not require
            your consent where they are strictly necessary to provide a service
            you have requested.
          </p>

          <h3 className="font-bold mb-2">Statistics Cookies</h3>

          <p className="font-light mb-4">
            We use Google Analytics 4 to understand how visitors use our
            website. This can include information about pages visited,
            interactions with website features and actions such as submitting an
            enquiry form or clicking a telephone link.
          </p>

          <p className="font-light mb-4">
            This information helps us understand website performance and
            identify opportunities to improve the experience for visitors.
          </p>

          <h3 className="font-bold mb-2">Marketing Cookies</h3>

          <p className="font-light mb-4">
            We use Google Ads to help measure the effectiveness of our
            advertising and understand whether advertisements lead to customer
            enquiries.
          </p>

          <p className="font-light mb-4">
            Depending on your consent choices, Google Ads may use cookies and
            other technologies for advertising measurement and related purposes.
          </p>

          <p className="font-light mb-2">
            Our website uses Google Consent Mode, which adjusts how Google
            services operate according to your consent choices. When consent is
            not granted, certain limited, cookieless measurement signals may
            still be transmitted to Google.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            Your Cookie Choices
          </h2>

          <p className="font-light mb-2">
            When you first visit our website, you can choose whether to accept
            or reject non-essential cookies through our cookie consent banner.
          </p>

          <p className="font-light mb-2">
            You can also change or withdraw your consent at any time using the
            Cookie Settings option available on our website.
          </p>

          <p className="font-light mb-2">
            You may also manage or delete cookies through your browser settings.
            Please be aware that restricting certain cookies may affect some
            website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            Cookies Used On This Website
          </h2>

          <p className="font-light mb-4">
            The following declaration provides details of the cookies and
            tracking technologies identified on our website, including their
            providers, purposes and durations.
          </p>

          <CookieDeclaration />
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            Third-Party Services
          </h2>

          <p className="font-light mb-4">
            We use services provided by Google, including Google Analytics 4 and
            Google Ads, for website analytics and advertising measurement.
          </p>

          <p className="font-light mb-4">
            We also use Cookiebot by Usercentrics to manage cookie consent and
            provide information about the cookies used on our website.
          </p>

          <p className="font-light mb-2">
            These providers may process information in accordance with their own
            privacy policies and applicable data protection requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2 text-fr-accent-one">
            Changes To This Cookie Policy
          </h2>

          <p className="font-light mb-2">
            We may update this Cookie Policy when our website, the technologies
            we use or applicable requirements change. The date at the top of
            this page indicates when it was last updated.
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2 text-fr-accent-one">Contact Us</h2>

          <p className="font-light mb-4">
            If you have any questions about our use of cookies, please contact:
          </p>

          <p className="font-light mb-2">
            <strong>1st Response Drainage</strong>
            <br />
            Andy Broadley
            <br />
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

          <p className="font-light">
            Email:{" "}
            <a
              href="mailto:info@1stresponsedrainage.co.uk"
              className="underline hover:text-fr-accent-one"
            >
              info@1stresponsedrainage.co.uk
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
