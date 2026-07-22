import { getSortedPostData } from "@/lib/posts";
import Link from "next/link";
import getFormattedDate from "@/utils/getFormattedDate";
import Cta from "@/components/Cta";
import CloudinaryOptImage from "@/components/CloudinaryOptImage";
import { firstResponseImages as Images } from "@/lib/firstResponseImages";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { buildBlogIndexSchema } from "@/lib/schema/blogIndexSchema";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

export const metadata: Metadata = {
  title: "Drainage Advice & Tips | 1st Response Drainage Blog",
  description:
    "Expert drainage advice, tips and insights from our engineers. Learn how to prevent problems and spot issues early.",
  alternates: { canonical: `${SITE_URL}/blog` },
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
          recent.map((p) => ({
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
            preload
            sizes="(max-width: 599px) 40vw, 240px"
            className="mx-auto mt-auto h-auto w-[40%] max-w-60 lg:mr-auto lg:ml-0"
          />
        </div>

        {/* blog posts */}
        <nav aria-label="Blog posts">
          <ul className="mx-auto grid max-w-100 grid-cols-1 gap-8 sm:max-w-200 sm:grid-cols-2 md:max-w-300 md:grid-cols-3">
            {blogs.map((post) => {
              const formattedDate = getFormattedDate(post.date);

              const img = post.coverImage
                ? Images[post.coverImage]
                : Images.drainageEngineer;

              return (
                <li
                  key={post.slug}
                  className="group border-b border-transparent pb-4 transition-colors duration-300 hover:border-primary_green"
                >
                  <Link href={`/blog/${post.slug}`} className="text-fr-white">
                    <div className="relative mb-4 h-50 overflow-hidden rounded-sm shadow-md">
                      <CloudinaryOptImage
                        {...img}
                        alt={post.coverImageAlt ?? img.alt}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 767px) calc((100vw - 96px) / 2), 379px"
                        className="object-cover transition-all duration-300 group-hover:brightness-75"
                      />
                    </div>

                    <div className="grid grid-cols-1">
                      <h2 className="order-2 mb-2 font-bold text-primary_green transition-colors duration-300 group-hover:text-fr-accent-two">
                        {post.title}
                      </h2>

                      <p className="order-1 mb-2 text-sm text-fr-accent-two">
                        Uploaded on {formattedDate}
                      </p>

                      <p className="order-3 text-sm text-fr-accent-two">
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
