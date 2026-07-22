import { FaArrowLeft } from "react-icons/fa";

import { getPostData, getSortedPostData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import getFormattedDate from "@/utils/getFormattedDate";
import Cta from "@/components/Cta";
import CloudinaryOptImage from "@/components/CloudinaryOptImage";
import { firstResponseImages as Images } from "@/lib/firstResponseImages";
import StructuredData from "@/components/StructuredData";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import { buildBlogPostingSchema } from "@/lib/schema/blogPostingSchema";
import CopyButton from "@/components/CopyButton";

type BlogProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getSortedPostData();
  return blogs.map((s) => ({ slug: s.slug }));
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.1stresponsedrainage.co.uk";

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

  const canonicalPath = `${SITE_URL}/blog/${slug}`;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const imagePublicId = post.coverImage
    ? Images[post.coverImage].src
    : undefined;

  const ogImageUrl =
    imagePublicId && cloudName
      ? `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${imagePublicId}`
      : undefined;

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
      images: ogImageUrl
        ? [{ url: ogImageUrl, alt: post.coverImageAlt ?? post.title }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogProps) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) notFound();

  const { title, date, author, contentHtml } = post;

  const formattedDate = getFormattedDate(date);

  const imageConfig = post.coverImage ? Images[post.coverImage] : undefined;
  const imagePublicId = imageConfig?.src;

  return (
    <main className="bg-fr-primary">
      <StructuredData
        id={`blogposting-${slug}`}
        data={buildBlogPostingSchema({
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          modified: post.modified,
          imagePublicId, // Cloudinary public id/filename from your Images map
          imageAlt: post.coverImageAlt ?? post.title,
          author: post.author,
        })}
      />
      <StructuredData
        id={`breadcrumbs-blogs-${post.slug}`}
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
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
        {imageConfig && (
          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-sm">
            <CloudinaryOptImage
              {...imageConfig}
              alt={post.coverImageAlt ?? imageConfig.alt}
              fill
              preload
              sizes="(max-width: 767px) calc(100vw - 64px), 656px"
              className="object-cover"
            />
          </div>
        )}
        <section
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="prose prose-sm sm:prose-base md:prose-lg text-fr-white 
prose-headings:text-fr-accent-two 
prose-a:text-fr-accent-two 
prose-a:underline 
prose-a:underline-offset-4 
prose-a:decoration-fr-accent-two 
prose-a:hover:text-fr-white 
prose-a:transition-colors"
        ></section>
        <CopyButton
          link={`https://www.1stresponsedrainage.co.uk/blog/${slug}`}
        />
      </div>
      <Cta
        heading="Need Drainage Help Today?"
        paragraph="Whether it's a blocked drain, CCTV survey or urgent repair, our local engineers are on standby to help across East Anglia. Fast, reliable service, whenever you need it."
        classes={false}
      />
    </main>
  );
}
