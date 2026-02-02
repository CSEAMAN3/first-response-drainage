import { getSortedPostData } from "@/lib/posts";
import Link from "next/link";
import getFormattedDate from "@/utils/getFormattedDate";
import Cta from "@/components/Cta";
import CloudinaryOptImage from "@/components/CloudinaryOptImage";
import CloudinaryUnOptImage from "@/components/CloudinaryUnOptImage";
import { firstResponseImages as Images } from "@/lib/firstResponseImages";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { buildBlogIndexSchema } from "@/lib/schema/blogIndexSchema";

export const metadata: Metadata = {
  title: "Blog | 1st Response Drainage - Drainage Advice, Tips & Insights",
  description:
    "Need help with your domestic & commercial drainage? Check out our posts for useful advice to help you resolve your drainage issues.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const blogs = await getSortedPostData();

  // This was regards to building the schema
  // One small practical tip
  // If you end up with lots of posts, you can cap the ItemList to (say) the most recent 12:
  // const recent = posts.slice(0, 12);

  const recent = blogs.slice(0, 12);

  return (
    <main>
      <StructuredData
        id="breadcrumbs-blog"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <StructuredData
        id="blog-index-schema"
        data={buildBlogIndexSchema(
          blogs.map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            description: p.description,
            author: p.author ?? "1st Response Drainage",
            imagePublicId: p.coverImage ? Images[p.coverImage].src : undefined,
            imageAlt: p.coverImageAlt ?? p.title,
          })),
        )}
      />
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

          <CloudinaryOptImage
            {...Images.pinkMonsterWaterJetting}
            className="mx-auto w-[40%] h-auto max-w-60 mt-auto lg:mr-auto lg:ml-0"
            sizes="(max-width: 640px) 40vw, 240px"
          />
        </div>

        {/* blog posts */}
        <nav>
          <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-100 sm:max-w-200 md:max-w-300">
            {blogs.map((post) => {
              const formattedDate = getFormattedDate(post.date);

              // ✅ Fully type-safe: coverImage is ResponseImageKey | undefined
              const img = post.coverImage
                ? Images[post.coverImage]
                : Images.test;

              return (
                <li
                  key={post.slug}
                  className="group border-b border-transparent hover:border-primary_green transition-colors duration-300 pb-4"
                >
                  <Link href={`/blog/${post.slug}`} className="text-fr-white">
                    <div className="h-50 rounded-sm shadow-md mb-4 relative overflow-hidden">
                      <CloudinaryUnOptImage
                        {...img}
                        alt={post.coverImageAlt ?? img.alt}
                        className="w-full h-full object-cover rounded-sm group-hover:brightness-75 transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1">
                      <h2 className="font-bold mb-2 text-primary_green order-2 group-hover:text-fr-accent-two transition-all duration-300">
                        {post.title}
                      </h2>

                      <p className="order-1 mb-2 text-sm text-fr-accent-two">
                        Uploaded on {formattedDate}
                      </p>

                      <p className="text-sm order-3 text-fr-accent-two">
                        Created by {post.author ?? "1st Response Drainage"}
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
