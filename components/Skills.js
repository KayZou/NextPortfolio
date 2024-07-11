import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const skills = [
  { label: "ReactJS", icon: FaReact },
  { label: "NextJS", icon: RiNextjsFill },
  { label: "NodeJS", icon: FaNodeJs },
  { label: "NestJS", icon: SiNestjs },
  { label: "GraphQL", icon: SiGraphql },
  { label: "PostgreSQL", icon: BiLogoPostgresql },
  { label: "MongoDB", icon: BiLogoMongodb },
  { label: "MySQL", icon: SiMysql },
];

export default function Skills() {
  return (
    <SectionWrapper>
      <Heading>skills</Heading>
      <div className="flex flex-wrap items-center gap-5  flex justify-center my-5">
        {skills.map((skill) => {
          return (
            <div
              key={skill.label}
              className="flex items-center space-x-2 bg-amber-500/70  px-3 py-2"
            >
              <skill.icon size={20} className="text-black dark:text-white" />
              <span className="text-base capitalize dark:text-white text-black">
                {" "}
                {skill.label}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
