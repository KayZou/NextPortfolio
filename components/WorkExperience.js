import Image from "next/image";
import React from "react";
import arkx from "../public/assets/arkx_education_logo.jpg";
import orange from "../public/assets/orange_maroc_logo.jpg";

const workHistory = [
  {
    company: "Orange Maroc",
    logo: orange,
    title: "Full Stack Developer",
    duration: "July - Present",
    description:
      "Bootcamp program offered by OrangeMA, highly focused on project management, cloud & CI/CD.",
    tasks: [
      "Developed web apps back to front using the latest technology.",
      "Docker-ized JS built apps and managed their Docker images.",
      "Collaborated with different teams using different team-work approaches to deliver the projects.",
      "Conducted code reviews and documentations for different projects.",
    ],
    technologies: ["NextJS", "Prisma", "Docker", "Typescript"],
  },
  {
    company: "ARK-X Talent Factory",
    logo: arkx,
    title: "MERN Stack Developer",
    duration: "June - December 2023",
    description:
      "Intensive internship program as a full stack developer using the MERN stack, where we developed an e-commerce web app.",
    tasks: [
      "Collaborated within a 5-person team for a concluding bootcamp project.",
      "Led backend development using the MERN stack (MongoDB, Express.js, React,Node.js) for a robust e-commerce web application.",
      "Focused on end-to-end product functionality, spanning from backend architecture to frontend integration.",
      "Applied a team-oriented approach to successfully implement and deliver the project.",
    ],
    technologies: ["React", "ExpressJS", "Node.js", "MongoDB"],
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-6 space-y-8 px-10">
      {workHistory.map((job, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-amber-500 mx-auto md:mx-0">
            <Image src={job.logo} width={50} height={50} alt={`${job.company} logo`} />
          </div>
          <div className="text-left md:text-left">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <h4 className="text-md text-gray-500">{job.title}</h4>
            <p className="text-sm text-gray-400">{job.duration}</p>
            <p className="mt-2 text-md">{job.description}</p>
            <div className="mt-2">
              <ul className="list-disc list-inside text-md">
                {job.tasks.map((task, i) => (
                  <li key={i} className="text-left">{task}</li>
                ))}
              </ul>
            </div>
            <div className="my-2 flex flex-wrap justify-center md:justify-start gap-2">
              {job.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
