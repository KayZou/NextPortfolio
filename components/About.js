import Heading from "./Heading";
import { AboutData } from "@/public/assets/AboutData";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <div className="px-10 text-center">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {AboutData.heading}
        </h3>
        <p className="mt-3 text-base font-semibold text-black dark:text-white sm:text-xl sm:px-0 sm:m-0 sm:leading-relaxed">
          {AboutData.bio}
        </p>
      </div>
    </SectionWrapper>
  );
}
