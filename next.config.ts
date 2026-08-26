import type { NextConfig } from "next";
import redirects from "./redirects.json" with { type: "json" };

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://res.cloudinary.com https://lh3.googleusercontent.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  // allow fetch/XHR to google for maps/places if you ever add frontend usage
  "connect-src 'self' https://places.googleapis.com https://maps.googleapis.com",
  "frame-src https://www.google.com https://maps.google.com",
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
