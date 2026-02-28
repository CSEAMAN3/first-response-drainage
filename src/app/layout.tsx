import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import StructuredData from "@/components/StructuredData";
import Providers from "./providers";

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
      telephone: "+447961609836",
      email: "info@1stresponsedrainage.co.uk",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+447961609836",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
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
