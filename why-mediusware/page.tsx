import React from "react";
import WhyMediuswareHero from "./WhyMediuswareHero";
import ContentGap from "./ContentGap";
import Strategy from "./Strategy";
import SectionGap from "./SectionGap";
import OurValues from "./OurValues";
import Journey from "./Journey";

const WhyMediuswarePage = () => {
  return (
    <div className="bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
      <WhyMediuswareHero />
      <ContentGap />
      <Strategy />
      <OurValues />
      <SectionGap />
      <Journey />
    </div>
  );
};

export default WhyMediuswarePage;
