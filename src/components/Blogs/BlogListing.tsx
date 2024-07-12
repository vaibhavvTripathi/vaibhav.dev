import getPostMetadata from "@/utils/getBlogMetadata";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function BlogListing() {
  const posts = getPostMetadata("/src/blogs");
  return (
    <div className="mt-5">
      <div className="space-y-4">
        {posts.map((item, index) => {
          return (
            <Link
              href={`/blog/${item.slug}`}
              className="flex items-center justify-between rounded-lg bg-background p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
              prefetch={false}
              key={index}
            >
              <div>
                <h2 className="text-lg text-foreground">{item.title}</h2>
                <p className="text-muted-foreground text-xs">
                  Published on {item.date}
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
