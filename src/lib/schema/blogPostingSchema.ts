const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

export type BlogPostingInput = {
  slug: string;
  title: string;
  description?: string;
  date: string; // "YYYY-MM-DD" is perfect
  modified?: string;
  imagePublicId?: string; // e.g. "autumn-leaves-blocking-a-drain_kputl3.png"
  imageAlt?: string;
  author?: string; // optional, defaults to business name
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function cloudinaryUrl(publicId: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return undefined;

  const normalized = publicId.replace(/^\/+/, "");
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${normalized}`;
}

export function buildBlogPostingSchema(post: BlogPostingInput) {
  const url = absoluteUrl(`/blog/${post.slug}`);

  const imageUrl = post.imagePublicId
    ? (cloudinaryUrl(post.imagePublicId) ??
      absoluteUrl(`/images/${post.imagePublicId}`))
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    // Optional but recommended – helps Google understand the post belongs to the blog
    isPartOf: {
      "@type": "Blog",
      "@id": `${absoluteUrl("/blog")}#blog`,
      name: "1st Response Drainage Blog",
      url: absoluteUrl("/blog"),
    },

    headline: post.title,
    description: post.description,

    datePublished: new Date(post.date).toISOString(),
    ...(post.modified
      ? { dateModified: new Date(post.modified).toISOString() }
      : {}),

    ...(imageUrl
      ? {
          image: [
            {
              "@type": "ImageObject",
              url: imageUrl,
              caption: post.imageAlt ?? post.title,
            },
          ],
        }
      : {}),

    // ✅ reference the LocalBusiness node you already output site-wide in layout.tsx
    author: { "@id": `${SITE_URL}/#localbusiness` },
    publisher: { "@id": `${SITE_URL}/#localbusiness` },
  };
}
