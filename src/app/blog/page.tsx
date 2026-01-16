import { getSortedPostData } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import getFormattedDate from "@/utils/getFormattedDate";
import Cta from "@/components/Cta";

export default async function BlogPage() {
  const blogs = await getSortedPostData();

  return (
    <main>
      <div className="py-16 px-8 bg-fr-primary">
        {/* hero */}
        <div className="pb-16 flex flex-col sm:flex-row gap-2 max-w-200 mx-auto">
          <div className="place-content-center">
            <h1 className="font-bold text-center sm:text-start text-2xl sm:text-3xl mb-2 text-balance text-fr-white">
              Drainage Advice, Tips & Insights
            </h1>
            <p className="mb-4 max-w-[60ch] font-light text-center sm:text-start text-balance text-fr-white">
              Practical guidance, expert advice and helpful insights from our
              drainage engineers to help you prevent problems and make informed
              decisions.
            </p>
          </div>
          <Image
            src="/images/monster-hands.png"
            alt="monster"
            width={200}
            height={200}
            className="mx-auto w-[40%] h-auto max-w-60 mt-auto lg:mr-auto lg:ml-0"
          />
        </div>
        {/* blog posts */}
        {/* <h2 className="font-bold text-fr-accent-two text-center mb-8 text-lg">
          Read Our Latest Posts
        </h2> */}
        <nav>
          <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-100 sm:max-w-200 md:max-w-300">
            {blogs.map((post) => {
              const {
                slug,
                title,
                date,
                // description,
                coverImage,
                coverImageAlt,
                author,
                // tags,
              } = post;
              const formattedDate = getFormattedDate(date);
              return (
                <li
                  key={slug}
                  className="group border-b border-transparent hover:border-primary_green transition-colors duration-300 pb-4 group"
                >
                  <Link href={`/blog/${slug}`} className="text-fr-white">
                    <div className="h-50 rounded-sm shadow-md mb-4 relative">
                      <Image
                        src={`${coverImage}`}
                        alt={`${coverImageAlt}`}
                        fill
                        sizes="100%"
                        //   quality={80}
                        className="object-cover rounded-sm group-hover:brightness-75 transition-all duration-300"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <h2
                        className={`font-bold mb-2 text-primary_green order-2 group-hover:text-fr-accent-two transition-all duration-300`}
                      >
                        {title}
                      </h2>
                      <p className="order-1 mb-2 text-sm text-fr-accent-two">
                        Uploaded on {formattedDate}
                      </p>
                      <p className="text-sm order-3 text-fr-accent-two">
                        created by {author}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={false}
      />
    </main>
  );
}
