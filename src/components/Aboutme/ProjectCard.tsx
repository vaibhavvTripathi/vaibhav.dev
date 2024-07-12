"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Project } from "./ProjectList";
import ProjectDetails from "./ProjectDescription";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-80 max-w-md">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={project.img}
          alt="Project Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={project.githubLink}
              target="blank"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <CodeIcon className="w-4 h-4 text-xs" />
              <span className="text-xs">View Code</span>
            </Link>
            <Link
              href={project.deployedLink}
              target="blank"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <LinkIcon className="w-4 h-4" />
              <span className="text-xs">Live Demo</span>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          {project.smallDescription}
        </p>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs">
              Show More
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Project Details</DrawerTitle>
            </DrawerHeader>
            <ProjectDetails project={project} />
          </DrawerContent>
        </Drawer>
      </CardContent>
    </Card>
  );
}

function CodeIcon(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GitlabIcon(props: any) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkIcon(props: any) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
