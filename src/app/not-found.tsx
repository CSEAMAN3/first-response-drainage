import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-fr-white px-8 pt-[10vh]">
      <h1 className="text-fr-primary text-center font-bold text-xl sm:text-2xl mb-2">
        Oh No.... This Page Has a Blockage
      </h1>
      <p className="font-light text-center max-w-[44ch] mx-auto text-pretty mb-4">
        The page you&#39;re looking for isn&#39;t part of the website. If you
        navigate back to the homepage you&#39;ll be able to continue looking
        through the pages on our site.
      </p>
      <Link
        href="/"
        className="block w-fit mx-auto bg-fr-accent-one px-8 py-4 font-bold text-fr-white cursor-pointer hover:bg-fr-accent-one-mid transition-colors duration-300 rounded-sm"
      >
        Back to Home
      </Link>
    </main>
  );
}
