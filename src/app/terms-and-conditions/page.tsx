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
          1st Response Drainage{" "}
          <span className="block">Terms and Conditions</span>
        </h1>
        <p className="mb-4 font-light">
          These Terms & Conditions apply to all drainage services provided by
          1st Response Drainage. They are intended to ensure clarity,
          transparency, and a mutual understanding of responsibilities between
          us and our customers. By booking or accepting our services, you
          confirm that you have read, understood, and agreed to the Terms &
          Conditions set out below. Nothing in these Terms & Conditions affects
          your statutory rights as a consumer.
        </p>
        <h2 className="font-bold mb-2 text-fr-primary">Business Details</h2>
        <ul className="font-light mb-4 grid gap-2">
          <li>
            <span className="font-semibold">Business Name:</span> 1st Response
            Drainage
          </li>
          <li>
            <span className="font-semibold">Sole Trader:</span> Andy Broadley
          </li>
          <li>
            <span className="font-semibold">Business Address:</span> 18
            Riverside Way, Brandon IP27 0AN
          </li>
          <li>
            <span className="font-semibold">Telephone:</span> 07961 609836
          </li>
          <li>
            <span className="font-semibold">VAT:</span> 503021266
          </li>
        </ul>
        {/* section 1 - Definitions */}
        <h2 className="font-bold mb-2 text-fr-primary">1. Definitions</h2>
        <ul className="font-light mb-4 list-disc pl-4 grid gap-2">
          <li>“We”, “Us”, “Our” refers to 1st Response Drainage.</li>
          <li>
            “Customer”, “You”, “Your” refers to any individual or organisation
            requesting or receiving our services.
          </li>
          <li>
            “Works” refers to all drainage-related services carried out by us,
            including but not limited to inspections, unblocking, repairs,
            maintenance, pipe replacement, lining works, and CCTV drainage
            surveys.
          </li>
          <li>
            “Guarantee” refers to the workmanship and materials guarantees
            provided, subject to the terms, conditions, and exclusions set out
            below.
          </li>
        </ul>
        {/* section 2 - Scope of Work */}
        <h2 className="font-bold mb-2 text-fr-primary">2. Scope of Works</h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">2.1 </span>All works are
            carried out based on the information provided by the customer and
            the visible condition of the drainage system at the time of
            attendance.
          </li>
          <li>
            <span className="text-fr-accent-one">2.2</span> We are not
            responsible for pre-existing defects, hidden damage, structural
            issues, or underlying conditions that could not reasonably be
            identified during our visit.
          </li>
          <li>
            <span className="text-fr-accent-one">2.3</span> Our responsibility
            is limited strictly to the specific works undertaken and does not
            extend to the overall condition or performance of the entire
            drainage system.
          </li>
          <li>
            <span className="text-fr-accent-one">2.4</span> Any additional
            issues identified during attendance will be discussed with the
            customer and agreed prior to proceeding, where reasonably possible.
          </li>
        </ul>
        {/* section 3 - Access & Site Safety */}
        <h2 className="font-bold mb-2 text-fr-primary">
          3. Access & Site Safety
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">3.1</span> The customer must
            provide safe, clear, and unrestricted access to the drainage system,
            work area, manholes, inspection chambers, and drainage access
            points.
          </li>
          <li>
            <span className="text-fr-accent-one">3.2</span> The customer is
            responsible for ensuring that all manholes, inspection chambers, and
            access points are located, uncovered, and fully accessible prior to
            our operatives&#39; arrival.
          </li>
          <li>
            <span className="text-fr-accent-one">3.3</span> We reserve the right
            to stop, suspend, or refuse works if site conditions are deemed
            unsafe or access is not provided.
          </li>
          <li>
            <span className="text-fr-accent-one">3.4</span> Where operatives
            attend site and works cannot proceed due to restricted access,
            unsafe conditions, incorrect information, or inadequate site
            preparation, the visit may be classed as an aborted visit and a
            charge may apply.
          </li>
          <li>
            <span className="text-fr-accent-one">3.5</span> Delays or aborted
            visits caused by lack of access, unsafe conditions, or incomplete
            site preparation are chargeable.
          </li>
        </ul>
        {/* section 4 - Pricing & Payment Terms */}
        <h2 className="font-bold mb-2 text-fr-primary">
          4. Pricing & Payment Terms
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">4.1</span> Any quoted prices
            are based on the information provided at the time and may be subject
            to change if site conditions differ.
          </li>
          <li>
            <span className="text-fr-accent-one">4.2</span> Domestic customers
            will be invoiced upon completion of works. Payment is due
            immediately upon completion unless otherwise agreed in writing.
          </li>
          <li>
            <span className="text-fr-accent-one">4.3</span> Commercial customers
            will be invoiced upon completion of works. Payment is required
            within 7 days of receipt of the invoice unless otherwise agreed in
            writing.
          </li>
          <li>
            <span className="text-fr-accent-one">4.4</span> Minimum charges,
            call-out fees, diagnostic fees, and aborted visit fees may apply and
            will be communicated at the time of booking or attendance.
          </li>
          <li>
            <span className="text-fr-accent-one">4.5</span> Failure to make
            payment may result in recovery action and additional charges being
            incurred.
          </li>
        </ul>
        {/* section 5 - CCTV Drainage Surveys */}
        <h2 className="font-bold mb-2 text-fr-primary">
          5. CCTV Drainage Surveys
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">5.1</span> CCTV drainage
            surveys are carried out based on site conditions and accessibility
            at the time of attendance.
          </li>
          <li>
            <span className="text-fr-accent-one">5.2</span> The customer is
            responsible for ensuring all relevant access points are available
            and that the drainage system is suitable for inspection prior to
            attendance.
          </li>
          <li>
            <span className="text-fr-accent-one">5.3</span> CCTV survey reports
            may take up to 7 days to be produced following completion of the
            survey.
          </li>
          <li>
            <span className="text-fr-accent-one">5.4</span> CCTV footage,
            reports, and findings will only be released once full payment has
            been received, unless otherwise agreed in writing.
          </li>
          <li>
            <span className="text-fr-accent-one">5.5</span> We are not
            responsible for delays in report production caused by restricted
            access, unsuitable site conditions, incomplete surveys, or the need
            for additional investigation.
          </li>
          <li>
            <span className="text-fr-accent-one">5.6</span> If operatives attend
            site and a CCTV survey cannot be completed due to lack of access,
            unsuitable conditions, or inadequate preparation, an aborted visit
            or cancellation charge will apply.
          </li>
        </ul>
        {/* section 6 - Guarantee - Patch Repairs */}
        <h2 className="font-bold mb-2 text-fr-primary">
          6. Guarantee - Patch Repairs
        </h2>
        <p className="mb-2">
          1st Response Drainage provides a 5-Year Guarantee on the structural
          integrity of the installed patch repair from the date of installation.
        </p>
        <p className="mb-2">This guarantee covers:</p>
        <ul className="px-4 list-disc mb-2 grid gap-2">
          <li>Failure of the patch material</li>
          <li>Delamination or bonding failure at the repair location</li>
          <li>Structural breakdown of the installed patch</li>
        </ul>
        <p className="mb-4">
          This guarantee applies strictly to the repaired section only.
        </p>
        {/* section 6 - Guarantee – Workmanship & Materials */}
        <h2 className="font-bold mb-2 text-fr-primary">
          7. Guarantee - Workmanship & Materials
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">7.1</span> We provide a 28-day
            workmanship guarantee on standard drainage works, subject to the
            exclusions and limitations outlined in these Terms & Conditions.
          </li>
          <li>
            <span className="text-fr-accent-one">7.2</span> The workmanship
            guarantee applies only to the specific work completed and only to
            the section of the drainage system worked on.
          </li>
          <li>
            <span className="text-fr-accent-one">7.3</span> The workmanship
            guarantee covers labour only and does not apply to recurring or new
            issues caused by misuse, pre-existing defects, or external factors.
          </li>
          <li>
            <span className="text-fr-accent-one">7.4</span> Materials supplied
            and installed by us, including pipework, fittings, joints, patch
            liners, and repair components, are covered by a materials guarantee
            in line with the manufacturer&#39;s specifications.
          </li>
          <li>
            <p className="mb-2">
              <span className="text-fr-accent-one">7.5</span> The materials
              guarantee:
            </p>
            <ul className="font-light mb-2 list-disc pl-6 grid gap-2">
              <li>Applies only to materials supplied and installed by us</li>
              <li>Applies only to the repaired, replaced, or lined section</li>
              <li>
                Is subject to correct installation, normal use, and system
                condition
              </li>
              <li>
                Does not cover failure caused by ground movement, structural
                defects, root ingress, misuse, neglect, or third-party
                interference
              </li>
            </ul>
          </li>
          <li>
            <span className="text-fr-accent-one">7.6</span> Where a material
            failure is confirmed to fall within the manufacturer&#39;s
            guarantee, our liability is limited to the repair or replacement of
            the affected material only.
          </li>
          <li>
            <span className="text-fr-accent-one">7.7</span> Any inspection,
            return visit, or remedial work found to be outside the scope of the
            workmanship or materials guarantee will be chargeable.
          </li>
        </ul>
        {/* section 8 - Guarantee Exclusions */}
        <h2 className="font-bold mb-2 text-fr-primary">
          8. Guarantee Exclusions
        </h2>
        <p className="font-light mb-2">
          The guarantee does not cover blockages, defects, or failures caused
          by:
        </p>
        <ul className="font-light mb-2 list-disc pl-4 grid gap-2">
          <li>
            Non-flushable items including wipes, sanitary products, nappies,
            paper towels, or foreign objects
          </li>
          <li>
            Fat, Oil and Grease &#40;FOG&#41;, food waste, or soap build-up
          </li>
          <li>
            Scale, mineral deposits, corrosion, or general pipe deterioration
          </li>
          <li>
            Root ingress, ground movement, pipe deformation, or collapsed
            pipework
          </li>
          <li>Structural defects not repaired as part of the original works</li>
          <li>
            Misuse, neglect, or continued improper use of the drainage system
          </li>
          <li>Issues occurring outside the repaired or treated section</li>
          <li>Third-party interference after completion</li>
        </ul>
        <p className="font-light mb-4">
          Recurring blockages resulting from any of the above are not considered
          workmanship or material failures.
        </p>
        {/* section 9 - Liability */}
        <h2 className="font-bold mb-2 text-fr-primary">9. Liability</h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">9.1</span> We shall not be held
            liable for indirect or consequential losses, including damage
            arising from pre-existing drainage defects or system failure.
          </li>
          <li>
            <span className="text-fr-accent-one">9.2</span> Our liability, where
            applicable, shall not exceed the value of the works carried out.
          </li>
          <li>
            <span className="text-fr-accent-one">9.3</span> Nothing in these
            Terms & Conditions shall limit or exclude any rights that consumers
            have under the Consumer Rights Act 2015 or any other applicable
            consumer protection legislation.
          </li>
        </ul>
        {/* section 10 - Cancellations & Abortive Visits */}
        <h2 className="font-bold mb-2 text-fr-primary">
          10. Cancellations & Abortive Visits
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">10.1</span> We reserve the
            right to charge for late cancellations or aborted visits where
            access is not provided, site preparation has not been completed,
            incorrect information has been supplied, or works cannot proceed for
            reasons outside of our control.
          </li>
        </ul>
        {/* section 11 - Complaints & Call-Backs */}
        <h2 className="font-bold mb-2 text-fr-primary">
          11. Complaints & Call-Backs
        </h2>
        <ul className="font-light mb-4 pl-4 grid gap-2">
          <li>
            <span className="text-fr-accent-one">11.1</span> Any concerns or
            complaints must be raised within the applicable guarantee period.
          </li>
          <li>
            <span className="text-fr-accent-one">11.2</span> If a call-back
            inspection determines that the issue falls outside the scope of
            workmanship or materials, or within the exclusions listed above, the
            visit and any further works will be chargeable.
          </li>
          <li>
            <span className="text-fr-accent-one">11.3</span> We reserve the
            right to request reasonable evidence of an issue before attending
            where appropriate.
          </li>
        </ul>
        {/* section 12 - Data Protection */}
        <h2 className="font-bold mb-2 text-fr-primary">12. Data Protection</h2>
        <p className="font-light mb-4">
          Any personal data collected during the provision of our services,
          including CCTV footage where applicable, will be processed in
          accordance with our Privacy Policy and applicable data protection
          legislation.
        </p>
        {/* section 13 - Force Majeure */}
        <h2 className="font-bold mb-2 text-fr-primary">13. Force Majeure</h2>
        <p className="font-light mb-4">
          We shall not be liable for delays or failure to perform our
          obligations where caused by events beyond our reasonable control,
          including but not limited to extreme weather, flooding, access
          restrictions, emergencies, or other unforeseen circumstances.
        </p>
        {/* section 14 - Governing Law */}
        <h2 className="font-bold mb-2 text-fr-primary">14. Governing Law</h2>
        <p className="font-light mb-2">
          These Terms & Conditions are governed by and construed in accordance
          with the laws of England and Wales.
        </p>
      </div>
    </main>
  );
}
