import Link from "next/link";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="">
      <div className="px-8 py-4">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/horizontal-logo.svg"
            alt=""
            className="w-40 md:w-44 h-auto"
          />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
