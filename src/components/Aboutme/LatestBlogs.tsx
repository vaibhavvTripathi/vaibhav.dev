import getPostMetadata from "@/utils/getBlogMetadata";
import Link from "next/link";
import React from "react";

const LatestBlogs = () => {
  const posts = getPostMetadata("/src/blogs");
  console.log(posts);
  return (
    <div className="mt-10">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
        Latest Blogs
      </h3>
      <ul className="space-y-2 mb-5">
        {posts.map((post, index) => (
          <li key={index} className="flex items-center gap-5">
            <span className="text-gray-500">{post.date}</span>
            <Link href={`/blog/${post.slug}`} className="">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="#" className="text-gray-500">
        Read More...
      </Link>
    </div>
  );
};

export default LatestBlogs;
