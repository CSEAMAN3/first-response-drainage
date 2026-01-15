import Cta from "@/components/Cta";
import Faq from "@/components/Faq";

export default function FaqPage() {
  return (
    <main className="px-8 py-8 ">
      <h1 className="font-bold text-2xl text-center text-fr-primary mb-2">
        Frequently Asked Questions{" "}
        <span className="block">About Our Drainage Services</span>
      </h1>
      <p className="text-center font-light mb-8 max-w-[80ch] text-balance mx-auto">
        We&#39;ve answered some of the most common questions customers ask about
        our drainage services across Norfolk, Suffolk and Cambridgeshire. The
        information below will help you understand how we work and what to
        expect.
      </p>
      <Faq
        heading="General Drainage"
        questionCat="main"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="Blocked Drain"
        questionCat="drains"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="CCTV Drainage Survey"
        questionCat="cctv"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="High Pressure Water Jetting"
        questionCat="jetting"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="Patch Liner / No-Dig Repair"
        questionCat="repairs"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="Root Intrusion Removal"
        questionCat="roots"
        showViewMoreLink={false}
        classes={false}
      />
      <Faq
        heading="Commercial Drainage"
        questionCat="commercial"
        showViewMoreLink={false}
        classes={false}
      />
      <Cta
        heading="Have A Question We Didn't Answer?"
        paragraph="If you couldn't find the answer you were looking for, our team is happy to help. Whether you need advice, want to book a service or have an urgent drainage issue, get in touch and we'll respond as quickly as possible."
        classes={false}
      />
    </main>
  );
}
