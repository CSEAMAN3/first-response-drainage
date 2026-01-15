import { FaArrowLeft } from "react-icons/fa";

import { getPostData, getSortedPostData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import getFormattedDate from "@/utils/getFormattedDate";
import Cta from "@/components/Cta";

type BlogProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getSortedPostData();
  return blogs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | 1st Response Drainage",
      description:
        "The blog post you're looking for could not be found. View our blog page or contact our team for help.",
      robots: { index: false, follow: true },
    };
  }

  const canonicalPath = `/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalPath,
      type: "article",
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.coverImageAlt ?? post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogProps) {
  const { slug } = await params;

  const post = await getPostData(slug);
  if (!post) notFound();

  const { title, date, coverImage, coverImageAlt, author, contentHtml } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <main className="bg-fr-primary">
      <div className="max-w-180 mx-auto px-8 py-16">
        <Link
          href={"/blog"}
          className="flex items-center gap-2 font-bold text-sm text-fr-white hover:text-fr-accent-two transition-all duration-300 w-fit mb-16"
        >
          <FaArrowLeft />
          latest posts
        </Link>
        <div className="grid grid-cols-1">
          <h1 className="order-2 font-bold text-pretty text-xl md:text-3xl max-w-[50ch] mb-2 text-fr-white">
            {title}
          </h1>
          <p className="order-1 text-sm mb-2 text-fr-accent-two">
            Uploaded on {formattedDate}
          </p>
          <p className="order-3 text-sm mb-12 text-fr-accent-two">
            Created by {author}
          </p>
        </div>
        {coverImage && (
          <Image
            src={coverImage}
            alt={coverImageAlt ?? title}
            width={1200}
            height={675}
            className="w-full h-90 object-cover mb-12"
          />
        )}
        <section
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className={`prose prose-sm sm:prose-base md:prose-lg text-fr-white prose-headings:text-fr-accent-two prose-a:text-fr-white prose-a:no-underline hover:prose-a:text-fr-accent-two`}
        ></section>
      </div>
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={false}
      />
    </main>
  );
}
