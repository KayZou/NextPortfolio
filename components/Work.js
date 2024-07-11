import React from "react";
import SectionWrapper from "./SectionWrapper";
import Heading from "./Heading";
import Image from "next/image";
import WorkExperience from "./WorkExperience";


export default function Work() {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      <WorkExperience />
    </SectionWrapper>
  );
}
