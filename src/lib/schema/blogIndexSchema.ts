const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1stresponsedrainage.co.uk";

type BlogIndexPost = {
  slug: string;
  title: string;
  date: string; // ISO-ish string in your MD frontmatter
  description?: string;
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function safeToIso(dateStr: string) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
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
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        url,
        name: "Blog posts",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => {
          const postUrl = absoluteUrl(`/blog/${post.slug}`);
          const iso = safeToIso(post.date);

          return {
            "@type": "ListItem",
            position: index + 1,
            // optional but fine to keep:
            url: postUrl,
            // this is the important bit:
            item: {
              "@type": "BlogPosting",
              "@id": `${postUrl}#blogposting`,
              headline: post.title,
              ...(iso ? { datePublished: iso } : {}),
              ...(post.description ? { description: post.description } : {}),
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": postUrl,
              },
            },
          };
        }),
      },
    ],
  };
}
