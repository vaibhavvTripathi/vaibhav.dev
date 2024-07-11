import Link from "next/link";
import React from "react";

const blogPosts = [
  { date: "2024-04-26", title: "Low level design of a multiplayer typeracing game" },
  { date: "2024-03-31", title: "How to setup a project of ui library in React" },
];

const LatestBlogs = () => {
  return (
    <div className="mt-10">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
        Latest Blogs
      </h3>
      <ul className="space-y-2 mb-5">
        {blogPosts.map((post, index) => (
          <li key={index} className="flex items-center gap-5">
            <span className="text-gray-500">{post.date}</span>
            <Link href="#" className="">
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
