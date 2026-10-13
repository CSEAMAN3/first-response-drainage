import type { NextConfig } from "next";
import redirects from "./redirects.json" with { type: "json" };

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",

  // JavaScript: Next.js, Cookiebot and Google Tag Manager
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://consent.cookiebot.com https://consentcdn.cookiebot.com https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com https://www.gstatic.com`,

  // Styles
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

  // Images, including tracking pixels
  "img-src 'self' data: blob: https://res.cloudinary.com https://lh3.googleusercontent.com https://consent.cookiebot.com https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.google.co.uk https://www.googleadservices.com https://googleads.g.doubleclick.net",

  // Fonts
  "font-src 'self' https://fonts.gstatic.com data:",

  // API requests, Cookiebot and Google tracking
  "connect-src 'self' https://places.googleapis.com https://maps.googleapis.com https://consent.cookiebot.com https://consentcdn.cookiebot.com https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://www.google.com https://www.google.co.uk https://googleads.g.doubleclick.net",

  // Frames
  "frame-src https://www.google.com https://maps.google.com https://consentcdn.cookiebot.com",

  // Existing security restrictions
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 375, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 192, 256, 320, 384],
    qualities: [60, 75],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      // if you render Google profile photos in <img> this isn’t needed,
      // but if you ever switch them to next/image, you’ll want it:
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },

  async redirects() {
    return redirects;
  },
};

export default nextConfig;
