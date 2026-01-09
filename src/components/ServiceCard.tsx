import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  photo: string;
  heading: string;
  paraOne: string;
  price: string;
  terms: string;
  href: string;
}

export default function ServiceCard({
  photo,
  heading,
  paraOne,
  price,
  terms,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-fr-primary rounded-xl relative">
      <Image
        src={`/images/${photo}`}
        alt="Image description here"
        width={500}
        height={500}
        className="w-full h-60 object-cover rounded-t-xl"
      />
      <div className="px-8 pt-8 pb-16 bg-fr-primary text-fr-white rounded-b-xl">
        <h3 className="font-bold text-xl mb-4 min-h-14">{heading}</h3>
        <p className="font-light text-pretty mb-4 min-h-22 max-w-[40ch]">
          {paraOne}
        </p>
        <p className="font-bold text-fr-accent-two">{price}</p>
        <p className="font-light text-sm text-fr-white">{terms}</p>
        <Link
          href={`${href}`}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-fr-white text-fr-primary px-8 py-4 w-[70%] text-center rounded-xl border border-fr-accent-one font-bold hover:bg-fr-accent-two transition-colors duration-150"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
