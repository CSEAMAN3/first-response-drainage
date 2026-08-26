// import Image from "next/image";

// const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// if (!cloudName) {
//   throw new Error(
//     "Missing Cloudinary cloud name. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local",
//   );
// }

// type CloudinaryImageProps = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   className?: string;
//   preload?: boolean;
//   fetchPriority?: "high" | "low" | "auto";
//   sizes?: string;
//   fill?: boolean;
//   quality?: number;
//   loading?: "eager" | "lazy";
// };

// export default function CloudinaryOptImage({
//   src,
//   alt,
//   width,
//   height,
//   className,
//   preload,
//   fetchPriority,
//   sizes = "100vw",
//   fill = false,
//   quality,
//   loading,
// }: CloudinaryImageProps) {
//   const normalizedSrc = src.replace(/^\/+/, "");

//   const cloudinaryUrl =
//     `https://res.cloudinary.com/${cloudName}` +
//     `/image/upload/f_auto,q_auto,c_limit,w_${width}` +
//     `/${normalizedSrc}`;

//   if (fill) {
//     return (
//       <Image
//         src={cloudinaryUrl}
//         alt={alt}
//         fill
//         className={className}
//         preload={preload}
//         fetchPriority={fetchPriority}
//         loading={loading}
//         sizes={sizes}
//         quality={quality}
//       />
//     );
//   }

//   return (
//     <Image
//       src={cloudinaryUrl}
//       alt={alt}
//       width={width}
//       height={height}
//       className={className}
//       preload={preload}
//       fetchPriority={fetchPriority}
//       loading={loading}
//       sizes={sizes}
//       quality={quality}
//     />
//   );
// }

import Image from "next/image";

type CloudinaryImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  preload?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "lazy" | "eager";
  sizes?: string;
  fill?: boolean;
};

export default function CloudinaryOptImage({
  src,
  alt,
  width,
  height,
  className,
  preload,
  fetchPriority,
  loading,
  sizes = "100vw",
  fill = false,
}: CloudinaryImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        preload={preload}
        fetchPriority={fetchPriority}
        loading={loading}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      preload={preload}
      fetchPriority={fetchPriority}
      loading={loading}
      sizes={sizes}
    />
  );
}
