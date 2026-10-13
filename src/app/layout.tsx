import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import StructuredData from "@/components/StructuredData";
import Providers from "./providers";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Plumber"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "1st Response Drainage",
      url: SITE_URL,
      hasMap: "https://www.google.com/maps?cid=14278897114182267037",
      logo: `${SITE_URL}/images/horizontal-logo-purple.svg`,
      image: [`${SITE_URL}/images/horizontal-logo-purple.svg`],
      telephone: "+447537149523",
      email: "info@1stresponsedrainage.co.uk",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+447537149523",
          contactType: "customer service",
          availableLanguage: ["en-GB"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "18 Riverside Way",
        addressLocality: "Brandon",
        addressRegion: "Suffolk",
        postalCode: "IP27 0AN",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.4528323,
        longitude: 0.624854,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Norfolk" },
        { "@type": "AdministrativeArea", name: "Suffolk" },
        { "@type": "AdministrativeArea", name: "Cambridgeshire" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: [
        "https://g.page/r/CZ1asMKZpSnGEBM",
        "https://www.facebook.com/p/1st-response-drainage-61575122397737/",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Blocked Drain Clearance" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "CCTV Drainage Surveys" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High Pressure Water Jetting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patch Lining / No-Dig Repairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Root Intrusion Removal" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Commercial Drainage" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Sonde and Tracing" },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "1st Response Drainage",
      publisher: { "@id": `${SITE_URL}/#localbusiness` },
      inLanguage: "en-GB",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Emergency Drain Services | Norfolk, Suffolk & Cambridgeshire",
  description:
    "Fast, reliable drainage services across Norfolk, Suffolk and Cambridgeshire. Blocked drains, CCTV surveys and urgent callouts for homes and businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "1st Response Drainage",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`, // or Cloudinary URL
        width: 1200,
        height: 630,
        alt: "1st Response Drainage - Emergency Drain Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const GTM_ID = "GTM-5GS358RF";

const COOKIEBOT_ID = "c0b07f5a-61d3-43dd-9ece-fb7b259ca910";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        {/* Google Consent Mode v2 defaults */}
        <Script
          id="google-consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag("consent", "default", {
                ad_personalization: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                personalization_storage: "denied",
                security_storage: "granted",
                wait_for_update: 500
              });

              gtag("set", "ads_data_redaction", true);
              gtag("set", "url_passthrough", false);
            `,
          }}
        />

        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={COOKIEBOT_ID}
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData id="site-schema" data={siteStructuredData} />
        <Header />
        <Providers>{children}</Providers>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
