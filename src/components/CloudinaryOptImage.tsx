import Image from "next/image";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
  throw new Error(
    "Missing Cloudinary cloud name. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local",
  );
}

type CloudinaryImageProps = {
  src: string; // Cloudinary public ID e.g. "autumn-leaves-blocking-a-drain_kputl3.png"
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function CloudinaryOptImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  sizes = "100vw",
}: CloudinaryImageProps) {
  const normalizedSrc = src.replace(/^\/+/, "");

  const cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,dpr_auto,c_limit,w_${width}/${normalizedSrc}`;

  return (
    <Image
      src={cloudinaryUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
