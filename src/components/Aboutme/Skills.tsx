import React from "react";
import SkillBadge from "../Home/Badge";
const skills = [
  "React",
  "Next.js",
  "Typescript",
  ".NET",
  "Express",
  "MongoDB",
  "Azure Cosmos DB",
  "Material UI",
  "React Query",
  "C#",
  "Redis",
  "SQL",
  "Git",
  "React Native",
  "SignalR",
  "Node.js",
  "Rest API Designing",
  "Tailwind CSS",

  "HTML",
  "CSS",
  "JavaScript",
];

const Skills = () => {
  return (
    <div className="mt-10">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
        Skills
      </h3>
      <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
        {skills.map((item, index) => {
          return <SkillBadge key={index} value={item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
