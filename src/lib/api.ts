import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { HOME_OG_IMAGE_URL } from "./constants";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs () {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug (slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = Record<string, string>

  const items: Items = {};

  // console.log('slug', slug, 'fields', fields)

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "ogImage") {
      items[field] = data[field] || { url: HOME_OG_IMAGE_URL };
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts (fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    // get posts data from slugs
    .map((slug) => getPostBySlug(slug, fields))
    // filter out drafts
    .filter((post) => !post.draft)
    // .map((post) => {
    //   if (post.ogImage) {
    //     // post.ogImage.url = post.ogImage.url || HOME_OG_IMAGE_URL
    //   }
    //   return post
    // })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log(posts);
  return posts;
}
