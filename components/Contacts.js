import Link from "next/link";
import Heading from "./Heading";
import { ContactData } from "@/public/assets/ContactData";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

export default function Contacts() {
  return (
    <SectionWrapper>
      <Heading>contacts</Heading>
      <div className="flex flex-wrap items-center gap-5  flex justify-center my-5">
        {ContactData.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center space-x-2 bg-amber-500/70  px-3 py-2"
          >
            {contact.name === "github" && (
              <FaGithub size={20} className="text-black dark:text-white" />
            )}
            {contact.name === "linkedin" && (
              <FaLinkedin size={20} className="text-black dark:text-white" />
            )}
            {contact.name === "email" && (
              <FiMail size={20} className="text-black dark:text-white" />
            )}
            {contact.name === "cv" && (
              <MdOutlineFileDownload
                size={20}
                className="text-black dark:text-white"
              />
            )}
            <span className="text-base capitalize dark:text-white text-black">
              {" "}
              {contact.label}{" "}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
