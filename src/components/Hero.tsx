import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  heading: string;
  paraOne: string;
  photo: string;
}

export default function Hero({ heading, paraOne, photo }: HeroProps) {
  return (
    <div className="relative">
      <div className="w-full md:w-fit lg:w-1/2 px-8 py-16 bg-fr-primary  md:h-[50vw] md:min-h-120 lg:min-h-125 lg:max-h-125 grid md:place-content-center md:rounded-tr-full md:rounded-br-full overflow-hidden">
        <div>
          <h1 className="text-fr-white font-bold text-xl max-w-[36ch] md:max-w-[34ch] lg:max-w-[36ch] mb-4 text-balance">
            {heading}
          </h1>
          <p className="text-fr-white font-light mb-8 max-w-[50ch] md:max-w-[46ch] lg:max-w-[50ch] text-balance">
            {paraOne}
          </p>
          <Link
            href="/contact"
            className="text-fr-white bg-fr-accent-one px-8 py-4 rounded-sm block mb-6 w-fit font-bold hover:bg-fr-accent-one-mid transition-colors duration-300 cursor-pointer"
          >
            Request a Callout
          </Link>
          <a
            href="tel+447961609836"
            aria-label="Call First Response Drainage on 07961609836"
            className="text-fr-white font-bold block hover:text-fr-accent-two transition-colors duration-300"
          >
            Call today on 07961 609836
          </a>
        </div>
      </div>
      <Image
        src={`/images/${photo}`}
        alt="test image"
        width={700}
        height={700}
        className="w-full object-cover md:w-[80vw] h-[50vw] md:top-0 md:right-0 md:h-[50vw] md:min-h-120 lg:h-125 md:absolute -z-10"
        priority
      />
    </div>
  );
}
