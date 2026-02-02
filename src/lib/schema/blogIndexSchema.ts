const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type BlogIndexPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;

  // ✅ optional enhancements (to stop "missing image/author")
  imagePublicId?: string;
  imageAlt?: string;
  author?: string;
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function safeToIso(dateStr: string) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function cloudinaryUrl(publicId: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return undefined;
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}`;
}

export function buildBlogIndexSchema(posts: BlogIndexPost[]) {
  const url = absoluteUrl("/blog");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collectionpage`,
        url,
        name: "Blog",
        description:
          "Drainage advice, tips and insights from 1st Response Drainage.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        name: "1st Response Drainage Blog",
        url,
        publisher: { "@id": `${SITE_URL}/#localbusiness` },
        inLanguage: "en-GB",
      },

      // ✅ Fix critical error: ItemList should NOT have both url + itemListElement url conflicts
      // Also: itemListElement should use "item" (canonical) rather than mixing in extra url fields.
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name: "Blog posts",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => {
          const postUrl = absoluteUrl(`/blog/${post.slug}`);
          const iso = safeToIso(post.date);

          const imageUrl = post.imagePublicId
            ? cloudinaryUrl(post.imagePublicId)
            : undefined;

          return {
            "@type": "ListItem",
            position: index + 1,

            // ✅ only one canonical pointer: "item"
            item: {
              "@type": "BlogPosting",
              "@id": `${postUrl}#blogposting`,
              url: postUrl, // ✅ avoids "Missing field url" warnings
              headline: post.title,
              ...(iso ? { datePublished: iso } : {}),
              ...(post.description ? { description: post.description } : {}),
              mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },

              ...(post.author
                ? {
                    author: {
                      "@type": "Organization",
                      name: post.author,
                      url: SITE_URL,
                    },
                  }
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
            },
          };
        }),
      },
    ],
  };
}
