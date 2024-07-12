import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";
import { Project } from "./ProjectList";
import SkillBadge from "../Home/Badge";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl p-5">
      <div className="order-2 md:order-1">
        <img
          src={project.img}
          alt="Project Image"
          width={800}
          height={400}
          className=" object-cover border w-full rounded-lg overflow-hidden"
        />
      </div>
      <div className="grid gap-6 md:gap-10 items-start order-1 md:order-2">
        <div className="grid gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.smallDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((s, idx) => {
              return <SkillBadge key={idx} value={s} />;
            })}
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Key Features:</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {project.details.map((d, i) => {
              return (
                <li key={i}>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {d}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
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
