import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] pt-32 px-8">
      <h2 className="text-center font-bold text-xl text-fr-primary text-balance mb-2">
        The location You&#39;re Looking For Could Not Be Found
      </h2>
      <p className="font-light text-center max-w-[68ch] mx-auto text-balance mb-8">
        Please click the button below to return to our locations directory page.
        If you think we may cover your area, but you&#39;re unsure, please
        don&#39;t hesitate to contact us directly on{" "}
        <a
          href="tel+447961609836"
          className="hover:text-fr-accent-one underline"
        >
          07961 609836
        </a>
        .
      </p>
      <Link
        href="/locations"
        className="font-bold bg-fr-accent-one text-fr-white px-8 py-4 rounded-sm hover:bg-fr-accent-one-mid transition-colors duration-150 block mx-auto w-fit text-balance"
      >
        Return To Locations Directory
      </Link>
    </div>
  );
}
