// src/lib/cloudinaryLoader.ts

import type { ImageLoaderProps } from "next/image";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local");
}

export default function cloudinaryLoader({ src, width }: ImageLoaderProps) {
  const normalizedSrc = src.replace(/^\/+/, "");

  return (
    `https://res.cloudinary.com/${cloudName}/image/upload/` +
    `c_limit,w_${width},f_auto,q_auto/` +
    normalizedSrc
  );
}
