import Link from "next/link";

interface HeroProps {
  heading: string;
  paraOne: string;
}

export default function Hero({ heading, paraOne }: HeroProps) {
  return (
    <div>
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
    </div>
  );
}
