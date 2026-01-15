import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { promises as fs } from "fs";
import { BlogPost, BlogPostWithHtml } from "../../types";

const postsDirectory = path.join(process.cwd(), "blogposts");

const toStringOrUndefined = (v: unknown) =>
  typeof v === "string" && v.trim() ? v.trim() : undefined;

const toStringRequired = (v: unknown, field: string, fileName: string) => {
  const value = toStringOrUndefined(v);
  if (!value) throw new Error(`Missing "${field}" in frontmatter: ${fileName}`);
  return value;
};

export async function getSortedPostData(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        const { data } = matter(fileContents);

        const post: BlogPost = {
          slug,
          title: toStringRequired(data.title, "title", fileName),
          date: toStringRequired(data.date, "date", fileName),
          description: toStringRequired(
            data.description,
            "description",
            fileName
          ),
          coverImage: toStringOrUndefined(data.coverImage),
          coverImageAlt: toStringOrUndefined(data.coverImageAlt),
          author: toStringOrUndefined(data.author),
          tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        };

        return post;
      })
  );

  // Sort newest first (ISO date strings work well)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(
  slug: string
): Promise<BlogPostWithHtml | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: toStringRequired(data.title, "title", `${slug}.md`),
      date: toStringRequired(data.date, "date", `${slug}.md`),
      description: toStringRequired(
        data.description,
        "description",
        `${slug}.md`
      ),
      coverImage: toStringOrUndefined(data.coverImage),
      coverImageAlt: toStringOrUndefined(data.coverImageAlt),
      author: toStringOrUndefined(data.author),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error);
    return null;
  }
}
