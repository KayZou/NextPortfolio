"use client";
import { HeaderData } from "@/public/assets/HeaderData";
import Image from "next/image";
import { GrMap } from "react-icons/gr";
import { TbTerminal2 } from "react-icons/tb";
import HeaderInfo from "@/components/HeaderInfo";
import { MdSchool } from "react-icons/md";

export default function Header() {
  const { address, education, experience, image, jobTitle, name } = HeaderData;
  return (
    <header className={"flex items-center gap-x-8 flex-wrap flex-col text-center pb-7"}>
      <div
        className={
          "w-[350px] h-[350px] relative rounded-full overflow-hidden mt-10 my-10"
        }
      >
        <Image
          src={image}
          alt={"Hero image"}
          fill
          className={
            "w-full h-full object-cover hover:scale-125 transition-all duration-500"
          }
        />
      </div>
      <div className={"flex-1"}>
        <h1
          className={
            "text-5xl font-black capitalize text-amber-600 dark:text-white"
          }
        >
          {" "}
          {name}{" "}
        </h1>
        <h3
          className={`mt-2 text-xl font-bold capitalize text-amber-500 dark:text-white`}
        >
          {jobTitle}
        </h3>
        <div className={"flex items-center gap-x-4 flex-col"}>
          <HeaderInfo title={address} Icon={GrMap} />
          <HeaderInfo title={experience} Icon={TbTerminal2} />
          <HeaderInfo title={education} Icon={MdSchool} />
        </div>
      </div>
    </header>
  );
}
