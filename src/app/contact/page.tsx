import ContactForm from "@/components/ContactForm";

export default function page() {
  return (
    <main className="min-h-screen">
      <div className="bg-fr-primary px-8 pt-16 pb-32 text-fr-white">
        <h1 className="font-bold text-xl mb-2 sm:text-center sm:text-2xl">
          Contact 1st Response Drainage
        </h1>
        <p className="font-light text-balance mb-4 sm:text-center max-w-[80ch] sm:mx-auto">
          If you&#39;re dealing with a drainage issue or simply need some
          advice, Our team is here to help. With expert drainage engineers
          covering Norfolk, Suffolk and Cambridgeshire, we&#39;re ready to
          respond as quickly as possible.
        </p>
        <p className="text-lg font-bold sm:text-center">
          Call Now 24/7 on{" "}
          <a
            href="tel+447961609836"
            className="hover:text-fr-accent-two w-fit transition-colors duration-150"
          >
            07961 609836
          </a>
        </p>
        <p className="font-bold sm:text-center">
          Email us on{" "}
          <a
            href="mailto:info@1stresponsedrainage.co.uk"
            className="hover:text-fr-accent-two w-fit transition-colors duration-150"
          >
            info@1stresponsedrainage.co.uk
          </a>
        </p>
      </div>
      <div className="max-w-300 mx-auto">
        <div className="w-[80%] min-h-200 bg-fr-light-grey mx-auto -translate-y-16 shadow-lg rounded-xl">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
