import path from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";

interface PostMetadata {
  title: string;
  date: string;
  slug: string;
}

export default function getPostMetadata(basePath: string): PostMetadata[] {
  const folder = path.join(process.cwd(), basePath);
  console.log(folder);
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts: PostMetadata[] = markdownPosts.map((filename) => {
    const filePath = path.join(process.cwd(), basePath + "/" + filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult: GrayMatterFile<string> = matter(fileContents);
    return {
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
