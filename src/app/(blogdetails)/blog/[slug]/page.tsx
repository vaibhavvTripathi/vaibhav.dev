import path from "path";
import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import fs from "fs";

function getPostContent(slug: string) {
  const filePath = path.join(process.cwd(), "/src/blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  return matterResult;
}

export const generateStaticParams = async () => {
  return ["keyjet"];
};

const Blog: React.FC<{ params: { slug: string } }> = (props) => {
  const { slug } = props.params;
  const post = getPostContent(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <article>
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default Blog;
