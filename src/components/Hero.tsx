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
      <div className="w-full md:w-fit lg:w-1/2 px-8 py-16 bg-fr-dark-blue  md:min-h-[40vw] lg:min-h-125 lg:max-h-125 grid md:place-content-center md:rounded-tr-full md:rounded-br-full overflow-hidden">
        <div className="">
          <h1 className="text-fr-white font-bold text-xl max-w-[34ch] mb-4 text-balance">
            {heading}
          </h1>
          <p className="text-fr-white font-light mb-8 max-w-[50ch] md:max-w-[46ch] lg:max-w-[50ch] text-pretty">
            {paraOne}
          </p>
          <Link
            href="/contact"
            className="text-fr-white bg-fr-red px-8 py-4 rounded-sm block mb-6 w-fit font-bold hover:bg-fr-dark-red transition-colors duration-300 cursor-pointer"
          >
            Request a Callout
          </Link>
          <a
            href=""
            className="text-fr-white font-bold block hover:text-fr-yellow transition-colors duration-300"
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
        className="w-full object-cover h-[50vw] md:top-0 md:left-0 md:h-[40vw] md:min-h-102 lg:h-125 absolute -z-10"
      />
    </div>
  );
}
