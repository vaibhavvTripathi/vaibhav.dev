import React from "react";
const workExperience = [
  {
    title: "Tech Lead",
    company: "Shipotle Technologies Pvt Ltd",
    startDate: "01/2024",
    endDate: "Present",
    location: "Remote",
    description: [
      "Led the migration of state-management code from Context API to React-Query.",
      "Designed and implemented chat features using SignalR + .NET on the server.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Shipotle Technologies Pvt Ltd",
    startDate: "09/2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Designed and implemented product search api with multiple filters from the UI.",
      "Developed end-to-end cart flow using Next.js on the UI and .NET on server side.",
      "Wrote Cron Jobs for order lifecycle management using C#.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="mt-10">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Experience
      </h3>
      <div className="mt-5 px-2">
        {workExperience.map((item, index) => {
          return (
            <div
              key={index}
              className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10 mb-5"
            >
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-muted-foreground mb-3">
                  {item.startDate}-{item.endDate} . {item.company}
                </div>
                {item.description.map((item, index) => {
                  return (
                    <div key={index} className="text-muted-foreground">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
