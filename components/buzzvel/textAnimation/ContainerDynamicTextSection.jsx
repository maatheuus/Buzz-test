"use client";

import {
  paragraph,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
} from "../utils/data";
import Paragraph from "./Paragraph";

function ContainerDynamicTextSection() {
  return (
    <div className="bg-black">
      <div className="h-[50vh]">
        <Paragraph paragraph={paragraph} />
        <Paragraph paragraph={paragraphTwo} />
        <Paragraph paragraph={paragraphThree} />
        <Paragraph paragraph={paragraphFour} />
      </div>
    </div>
  );
}

export default ContainerDynamicTextSection;
