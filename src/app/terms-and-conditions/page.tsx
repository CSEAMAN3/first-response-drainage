import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | 1st Response Drainage",
  description:
    "Read the terms and conditions for using our drainage services throughout Cambridgeshire, Norfolk and Suffolk. ",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <div className="px-8 py-16 max-w-200 mx-auto">
        <h1 className="font-bold text-fr-primary text-center text-2xl mb-4">
          First Response Drainage{" "}
          <span className="block">Terms and Conditions</span>
        </h1>
        <p>
          The terms and conditions for first response drainage will be added
          here. More info to come. This is just some filler text to add content
          to the page.
        </p>
      </div>
    </main>
  );
}
