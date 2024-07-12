import React from "react";
import ProjectCard from "./ProjectCard";

export type Project = {
  title: string;
  githubLink: string;
  deployedLink: string;
  smallDescription: string;
  details: string[];
  techStack: string[];
  startDate: string;
  endDate: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "Key Jet",
    githubLink: "https://github.com/vaibhavvTripathi/Key-Jet-UI",
    smallDescription:
      "Duo realtime type racing game made which allows users to compete with their patners and brush up their typing skills in the practice mode.",
    details: [
      "Used the concept of polling for the real-time updates on the race statuses during a race session.",
      "Descriptive charts on the results screen for better race analysis.",
      "Managed server-side state management through React Query in the client side.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Material UI",
      "Express",
      "MongoDB",
    ],
    startDate: "01/2024",
    endDate: "Present",
    img: "https://i.postimg.cc/Jzj9NWZ4/Be-Funky-collage.png",
    deployedLink: "https://key-jet-ui.vercel.app/",
  },
  {
    title: "React-Audio-Kit",
    githubLink: "https://github.com/vaibhavvTripathi/react-audio-kit",
    smallDescription:
      " React audio component library that leverages HTML webaudio api to create reusable audio components like Playlist Manager, Audio Recorder.",
    details: [
      "Leveraged HTML WebAudioApi for making configurable react-components related to audio playing/recording.",
      "Hosted the library on npm.js.",
    ],
    techStack: ["React", "HTML WebAudioApi"],
    startDate: "03/2024",
    endDate: "Present",
    img: "https://i.postimg.cc/C1TcNvTC/image.png",
    deployedLink: "https://www.npmjs.com/package/react-audio-kit",
  },
  {
    title: "Rythm:",
    githubLink: "https://github.com/vaibhavvTripathi/Rythm",
    smallDescription:
      " A music streaming platform where we can explore and listen to songs , add songs to playlist and follow/unfollow your favourite artists.",
    details: [
      "Playlist creation feature using Next.js and MongoDB.",
      "Like/Dislike songs and Follow/Unfollow artists on the web app.",
      "Created the UI components using Material UI and CSS.",
    ],
    techStack: ["Next.js", "MongoDB", "Spotify API", "Material UI", "CSS"],
    startDate: "04/2023",
    endDate: "05/2023",
    img: "https://i.postimg.cc/q7LNbRWm/ry.png",
    deployedLink: "rythm-1dd1.vercel.app",
  },
];

const ProjectList = () => {
  return (
    <div className="mt-10">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        My Projects
      </h3>
      <div className="mt-5 flex items-center flex-wrap gap-5">
        {projects.map((item, index) => {
          return <ProjectCard project={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
