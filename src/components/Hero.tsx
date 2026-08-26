import Link from "next/link";
import CloudinaryOptImage from "./CloudinaryOptImage";
import {
  firstResponseImages as Images,
  ResponseImageKey,
} from "@/lib/firstResponseImages";
import ReviewCount from "./ReviewCount";
import { GoogleReviewsPayload } from "@/lib/googleReviews";

interface HeroProps {
  heading: string;
  paraOne: string;
  photo: ResponseImageKey;
  alt: string;
  reviewsData: GoogleReviewsPayload;
}

export default function Hero({
  heading,
  paraOne,
  photo,
  alt,
  reviewsData,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 grid w-full overflow-hidden bg-fr-primary px-8 py-16 md:h-[50vw] md:min-h-120 md:w-fit md:place-content-center md:rounded-r-full lg:h-125 lg:max-h-125 lg:min-h-125 lg:w-1/2">
        <div>
          <h1 className="mb-2 max-w-[36ch] text-balance text-xl font-bold text-fr-white md:max-w-[34ch] lg:max-w-[36ch]">
            {heading}
          </h1>

          <ReviewCount reviewsData={reviewsData} classes={false} />

          <p className="mb-8 max-w-[50ch] text-balance font-light text-fr-white md:max-w-[46ch] lg:max-w-[50ch]">
            {paraOne}
          </p>

          <Link
            href="/contact"
            className="mb-6 block w-fit cursor-pointer rounded-sm bg-fr-accent-one px-8 py-4 font-bold text-fr-white transition-colors duration-300 hover:bg-fr-accent-one-mid"
          >
            Request a Callout
          </Link>

          <a
            href="tel:+447537149523"
            aria-label="Call First Response Drainage on 07537 149523"
            className="block w-fit font-bold text-fr-white transition-colors duration-300 hover:text-fr-accent-two"
          >
            Call today on 07537 149523
          </a>
        </div>
      </div>

      <div className="relative h-64 w-full md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[80vw] lg:h-125">
        <CloudinaryOptImage
          {...Images[photo]}
          alt={alt}
          fill
          quality={75}
          fetchPriority="high"
          loading="eager"
          sizes="(max-width: 767px) 100vw, 80vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
